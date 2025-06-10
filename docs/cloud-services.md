# クラウドサービス

このドキュメントでは、プロジェクトで利用するクラウドサービスの申請方法と設定手順について説明します。

## AWS (Amazon Web Services)

### 概要

AWSは本プロジェクトの本番環境ホスティングと、将来的な機能拡張で使用するクラウドプラットフォームです。

### AWS申請と初期設定

#### 1. AWSアカウント作成

1. **[AWS公式サイト](https://aws.amazon.com/jp/)**にアクセス
2. 「AWSアカウントを作成」をクリック
3. 基本情報を入力：
   - ルートユーザーのメールアドレス
   - AWSアカウント名
   - パスワード

#### 2. アカウント認証

```
メール認証 → 連絡先情報入力 → 支払い情報登録 → 身元確認 → サポートプラン選択
```

##### 連絡先情報
- 個人用途: Personal
- 企業用途: Business（学習目的の場合はPersonalを選択）

##### 支払い情報
- クレジットカード情報が必要
- 12ヶ月間の無料利用枠あり
- 利用料金の自動引き落とし設定

##### 身元確認
- 電話番号による自動音声認証
- PINコード入力で認証完了

##### サポートプラン
- **Basic**: 無料（推奨）
- **Developer**: $29/月
- **Business**: $100/月

#### 3. IAMユーザー作成（セキュリティベストプラクティス）

ルートユーザーの直接使用を避け、IAMユーザーを作成：

```bash
# AWS CLI設定用のIAMユーザー作成手順
1. AWS Console → IAM → Users → Create User
2. ユーザー名: "developer" 
3. Access type: Programmatic access
4. Permissions: Administrator Access (開発用)
5. Access Key ID と Secret Access Key を保存
```

#### 4. AWS CLI設定

```bash
# AWS CLIインストール（macOS）
brew install awscli

# AWS CLIインストール（Windows）
# https://aws.amazon.com/cli/ からインストーラーダウンロード

# 認証情報設定
aws configure
# AWS Access Key ID: [Your Access Key]
# AWS Secret Access Key: [Your Secret Key]
# Default region name: ap-northeast-1 (東京リージョン)
# Default output format: json
```

### 無料利用枠の活用

#### 12ヶ月間無料サービス

| サービス | 無料枠 | 用途 |
|----------|--------|------|
| EC2 | t2.micro 750時間/月 | Webサーバー |
| S3 | 5GB ストレージ | 静的サイトホスティング |
| CloudFront | 50GB転送量 | CDN |
| Lambda | 100万リクエスト/月 | サーバーレス機能 |
| RDS | db.t2.micro 750時間/月 | データベース |

#### 常時無料サービス

| サービス | 無料枠 | 用途 |
|----------|--------|------|
| DynamoDB | 25GB | NoSQLデータベース |
| API Gateway | 100万API呼び出し/月 | REST API |
| AWS Amplify | 1000ビルド分/月 | 静的サイトCI/CD |

### プロジェクトでの使用例

#### 1. 静的サイトホスティング（S3 + CloudFront）

```bash
# S3バケット作成
aws s3 mb s3://japan-life-guide-prod --region ap-northeast-1

# 静的ウェブサイト設定
aws s3 website s3://japan-life-guide-prod \
  --index-document index.html \
  --error-document error.html

# CloudFrontディストリビューション作成
aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

#### 2. CI/CDパイプライン（AWS Amplify）

```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
```

#### 3. 多言語対応API（Lambda + API Gateway）

```javascript
// Lambda関数例
exports.handler = async (event) => {
    const language = event.queryStringParameters?.lang || 'ja';
    
    const translations = {
        ja: {
            title: "日本生活ガイド",
            welcome: "ようこそ"
        },
        en: {
            title: "Japan Life Guide", 
            welcome: "Welcome"
        }
    };
    
    return {
        statusCode: 200,
        body: JSON.stringify(translations[language])
    };
};
```

### コスト管理

#### 1. 請求アラート設定

```bash
# CloudWatch請求アラート作成
aws cloudwatch put-metric-alarm \
  --alarm-name "BillingAlarm" \
  --alarm-description "Alarm when bill exceeds $10" \
  --metric-name EstimatedCharges \
  --namespace AWS/Billing \
  --statistic Maximum \
  --period 86400 \
  --threshold 10 \
  --comparison-operator GreaterThanThreshold
```

#### 2. コスト最適化

- **リソースの定期削除**: 不要なEC2インスタンスの停止
- **ストレージ最適化**: S3オブジェクトのライフサイクル設定
- **リザーブドインスタンス**: 長期利用の場合の割引適用

## その他のクラウドサービス

### Google Cloud Platform (GCP)

#### 無料利用枠
- **$300相当のクレジット**（12ヶ月間）
- **常時無料サービス**：App Engine、Cloud Functions等

#### 学生向け特典
- Google for Educationアカウントでの追加クレジット
- BigQueryでのデータ分析学習

### Microsoft Azure

#### 無料利用枠
- **$200相当のクレジット**（30日間）
- **12ヶ月無料サービス**：App Service、SQL Database等

#### 学生向け特典
- Azure for Students（$100クレジット、クレジットカード不要）
- GitHub Student Developer Packとの連携

### Heroku

#### 無料プラン（制限あり）
- 小規模アプリケーションのデプロイ
- 自動スリープ機能（30分非アクティブ）
- PostgreSQLデータベース（10,000行まで）

## セキュリティとベストプラクティス

### 1. アクセス管理

#### AWSセキュリティ設定

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::japan-life-guide-prod/*"
    }
  ]
}
```

#### MFA（多要素認証）有効化

1. AWS Console → IAM → Users → Security credentials
2. 「Assign MFA device」をクリック
3. 認証アプリ（Google Authenticator等）を設定

### 2. 監視とログ

#### CloudWatch設定

```bash
# ログストリーム作成
aws logs create-log-group --log-group-name /aws/lambda/japan-life-guide

# メトリクス監視
aws cloudwatch put-metric-data \
  --namespace "JapanLifeGuide" \
  --metric-data MetricName=PageViews,Value=1
```

### 3. バックアップとディザスタリカバリ

#### 自動バックアップ設定

```bash
# S3クロスリージョンレプリケーション
aws s3api put-bucket-replication \
  --bucket japan-life-guide-prod \
  --replication-configuration file://replication-config.json
```

## 申請時の注意事項

### 1. クレジットカード情報

- **有効なクレジットカード**が必要
- **国際ブランド**（Visa、MasterCard、JCB）対応
- **デビットカード**も利用可能（一部制限あり）

### 2. 身元確認

- **正確な個人情報**の入力
- **電話番号**は確実に受信可能なものを使用
- **住所**は英語表記で正確に入力

### 3. 利用規約の理解

- **責任ある利用**: 不正利用の禁止
- **コスト管理**: 予期しない課金の防止
- **データ保護**: 個人情報の適切な取り扱い

## トラブルシューティング

### よくある問題と解決方法

#### 1. アカウント認証失敗
- **確認**: 入力情報の正確性
- **解決**: カスタマーサポートへの問い合わせ

#### 2. 予期しない課金
- **確認**: 請求ダッシュボードでの利用状況確認
- **解決**: 不要なリソースの削除、アラート設定

#### 3. API制限エラー
- **確認**: 利用制限の確認
- **解決**: リクエスト頻度の調整、プラン変更検討

#### 4. セキュリティ警告
- **確認**: 不正アクセスの有無
- **解決**: パスワード変更、MFA有効化

## 学習リソース

### AWS学習パス

1. **AWS Cloud Practitioner Essentials** - 基礎知識
2. **AWS Technical Essentials** - 技術的基礎
3. **Hands-on Tutorials** - 実践的演習

### 無料学習リソース

- **AWS Skill Builder**: 無料オンライン学習
- **AWS Documentation**: 詳細な技術文書
- **AWS YouTube Channel**: 動画チュートリアル
- **AWS Educate**: 学生向けプログラム

クラウドサービスを適切に活用して、スケーラブルで信頼性の高いWebアプリケーションを構築しましょう！
