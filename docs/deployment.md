# デプロイメントガイド

このドキュメントでは、プロジェクトのデプロイメント手順と本番環境の管理について説明します。

## デプロイメント概要

### デプロイメント戦略

本プロジェクトでは以下のデプロイメント戦略を採用しています：

1. **GitHub Pages** - 静的サイトホスティング（無料）
2. **Netlify** - 自動デプロイ対応（無料プラン）
3. **AWS S3 + CloudFront** - 本格的な本番環境（有料）

## GitHub Pagesでのデプロイ

### 1. リポジトリ設定

1. GitHubリポジトリの **Settings** タブにアクセス
2. 左サイドバーの **Pages** をクリック
3. **Source** を「Deploy from a branch」に設定
4. **Branch** を「main」に設定
5. **Folder** を「/ (root)」に設定
6. **Save** をクリック

### 2. カスタムドメイン設定（オプション）

独自ドメインを使用する場合：

1. DNS設定でCNAMEレコードを追加：
   ```
   www.yourdomain.com -> yourusername.github.io
   ```

2. リポジトリルートに `CNAME` ファイルを作成：
   ```
   www.yourdomain.com
   ```

### 3. GitHub Actions自動デプロイ

`.github/workflows/deploy.yml` を作成：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Netlifyでのデプロイ

### 1. Netlifyアカウント作成

1. [Netlify](https://www.netlify.com/)でアカウント作成
2. GitHubアカウントで連携

### 2. サイトデプロイ設定

1. Netlifyダッシュボードで「New site from Git」
2. GitHubを選択してリポジトリを接続
3. ビルド設定：
   - **Build command**: `npm run build`（必要に応じて）
   - **Publish directory**: `./`（静的サイトの場合）
   - **Production branch**: `main`

### 3. 環境変数設定

Environment variables設定：
```
NODE_ENV=production
BASE_URL=https://your-site.netlify.app
```

### 4. カスタムドメイン設定

1. Netlifyダッシュボード > Domain settings
2. 「Add custom domain」でドメインを追加
3. DNS設定でネームサーバーを変更

## AWS S3 + CloudFrontでのデプロイ

### 1. S3バケット作成

```bash
# AWS CLIでバケット作成
aws s3 mb s3://your-site-bucket --region ap-northeast-1

# 静的ウェブサイトホスティング有効化
aws s3 website s3://your-site-bucket \
  --index-document index.html \
  --error-document error.html
```

### 2. バケットポリシー設定

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-site-bucket/*"
    }
  ]
}
```

### 3. CloudFront設定

1. CloudFrontディストリビューション作成
2. オリジンドメインをS3バケットに設定
3. デフォルトルートオブジェクトを `index.html` に設定
4. カスタムエラーページの設定

### 4. 自動デプロイスクリプト

`deploy.sh` スクリプト作成：

```bash
#!/bin/bash

# ビルド実行
echo "Building project..."
npm run build

# S3にアップロード
echo "Uploading to S3..."
aws s3 sync ./dist s3://your-site-bucket --delete

# CloudFrontキャッシュ無効化
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment completed!"
```

## CI/CDパイプライン

### GitHub Actions設定例

```yaml
name: Production Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ap-northeast-1
    
    - name: Install dependencies
      run: npm install
    
    - name: Build project
      run: npm run build
    
    - name: Deploy to S3
      run: |
        aws s3 sync ./dist s3://${{ secrets.S3_BUCKET }} --delete
    
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation \
          --distribution-id ${{ secrets.CLOUDFRONT_ID }} \
          --paths "/*"
```

## 本番環境の監視

### 1. パフォーマンス監視

Google PageSpeed Insightsでの定期チェック：
- **Core Web Vitals**の監視
- **モバイル/デスクトップ**両方の最適化
- **アクセシビリティスコア**の維持

### 2. セキュリティ設定

#### HTTPS設定
- SSL/TLS証明書の自動更新
- HSTS（HTTP Strict Transport Security）の有効化
- セキュリティヘッダーの設定

#### セキュリティヘッダー例
```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

### 3. バックアップとリストア

#### 自動バックアップ設定
```bash
# 週次バックアップスクリプト
#!/bin/bash
DATE=$(date +%Y%m%d)
aws s3 sync s3://your-site-bucket s3://your-backup-bucket/backup-$DATE/
```

## トラブルシューティング

### よくある問題と解決方法

#### 1. GitHub Pagesでカスタムドメインが機能しない
- **確認点**: DNS設定、CNAMEファイルの存在
- **解決**: DNS伝播の待機（最大48時間）

#### 2. Netlifyでビルドエラー
- **確認点**: package.jsonのscripts設定
- **解決**: ローカルでのビルド確認

#### 3. CloudFrontでキャッシュが更新されない
- **確認点**: キャッシュ無効化の実行
- **解決**: TTL設定の見直し

#### 4. SSL証明書エラー
- **確認点**: 証明書の有効期限
- **解決**: 自動更新設定の確認

## デプロイメントチェックリスト

デプロイ前の確認事項：

- [ ] ローカルでのビルド確認
- [ ] テスト環境での動作確認
- [ ] リンク切れの確認
- [ ] レスポンシブデザインの確認
- [ ] SEOメタタグの設定
- [ ] パフォーマンススコアの確認
- [ ] アクセシビリティの確認
- [ ] セキュリティヘッダーの設定
- [ ] バックアップの実行

このガイドに従って、安定したデプロイメント環境を構築しましょう！
