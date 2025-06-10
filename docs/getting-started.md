# プロジェクトの開始方法

このプロジェクトで開発を始めるには、以下の手順に従ってください：

## 1. Gitをインストール
- [Git公式サイト](https://git-## 8. 新しいブランチを作成して作業
```bash
git checkout -b feature/あなたの機能名
```

## 9. 変更をコミット
```bash
git add .
git commit -m "変更内容の説明"
git push origin feature/あなたの機能名
```

## 10. プルリクエストを作成
- GitHubで元のリポジトリに対してプルリクエストを送信します

開発を始める準備が整いました！

## 次のステップ

初期設定が完了したら、以下のドキュメントを参照して開発を進めてください：

- 🔄 **[開発ワークフローガイド](development-workflow.md)** - 日常の開発手順
- 🛠️ **[開発環境セットアップ](development-environment.md)** - より詳細な環境設定/win)からインストーラーをダウンロード
- ダウンロードしたファイルを実行してインストール
- インストール確認：
  ```sh
  git --version
  ```

## 2. GitHubアカウントを作成
- [GitHub](https://github.com)にアクセスしてアカウントを登録します

## 3. Gitの設定

### ユーザー情報の設定：
```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

### GitHub接続の設定（以下のいずれかを選択）：

**方法A: SSH キーを使用（推奨）**
```bash
# SSH キーを生成
ssh-keygen -t ed25519 -C "あなたのメールアドレス"

# SSH キーをクリップボードにコピー
clip < ~/.ssh/id_ed25519.pub
```
- GitHubの設定 > SSH and GPG keys でSSHキーを追加

**方法B: ユーザー名・パスワード認証**
- クローン時にGitHubのユーザー名とパスワード（またはPersonal Access Token）を入力

## 4. プロジェクトをフォーク
- このリポジトリページの右上にある「Fork」ボタンをクリックします

## 5. フォークしたプロジェクトをクローン
```bash
git clone https://github.com/あなたのユーザー名/japan-life-guide.git
cd japan-life-guide
```

## 6. VS Codeでプロジェクトを開く
```bash
code .
```

## 7. VS Code拡張機能のインストール

効率的な開発のために、以下の拡張機能をインストールすることを強く推奨します：

### 必須拡張機能

1. **Live Server** - ローカル開発サーバー
   - 拡張機能ID: `ritwickdey.LiveServer`
   - HTMLファイルをリアルタイムでブラウザプレビュー

2. **Prettier** - コードフォーマッター
   - 拡張機能ID: `esbenp.prettier-vscode`
   - HTML/CSS/JSの自動フォーマット

3. **Auto Rename Tag** - HTMLタグの自動更新
   - 拡張機能ID: `formulahendry.auto-rename-tag`
   - 開始タグを変更すると終了タグも自動更新

### 推奨拡張機能

4. **HTML CSS Support** - CSSクラス名補完
   - 拡張機能ID: `ecmel.vscode-html-css`

5. **CSS Peek** - CSS定義の確認
   - 拡張機能ID: `pranaygp.vscode-css-peek`

6. **GitLens** - Git履歴の可視化
   - 拡張機能ID: `eamodio.gitlens`

### インストール方法
1. VS Codeの拡張機能タブ（Ctrl/Cmd + Shift + X）を開く
2. 上記の拡張機能IDを検索してインストール
3. または、コマンドパレット（Ctrl/Cmd + Shift + P）で以下を実行：
   ```
   ext install ritwickdey.LiveServer
   ext install esbenp.prettier-vscode
   ext install formulahendry.auto-rename-tag
   ```

## 8. 新しいブランチを作成して作業
```bash
git checkout -b feature/あなたの機能名
```

## 8. 変更をコミット
```bash
git add .
git commit -m "変更内容の説明"
git push origin feature/あなたの機能名
```

## 9. プルリクエストを作成
- GitHubで元のリポジトリに対してプルリクエストを送信します

開発を始める準備が整いました！
