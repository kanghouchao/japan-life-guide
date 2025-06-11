# 🚀 Japan Life Guide - 開発環境セットアップガイド

## 🔧 開発環境の準備

### 📦 必要なソフトウェア

| ソフトウェア | 用途 | 必須度 |
|-------------|------|--------|
| **Git** | バージョン管理 | ✅ 必須 |
| **GitHub アカウント** | コード共有 | ✅ 必須 |
| **VS Code** | コードエディタ | 🔥 推奨 |

---

### 1️⃣ 前提条件とセットアップ

#### 🔗 Gitのインストール

開発を始める前に、Gitをインストールする必要があります。以下の手順に従ってGitをインストールしてください：

1. [Git公式サイト](https://git-scm.com/download/win)にアクセスします
2. 「Download for Windows」ボタンをクリックしてインストーラーをダウンロードします
3. ダウンロードしたインストーラー（.exe）を実行します
4. インストールウィザードが開始されます。基本的にデフォルト設定のままで問題ありません
   - Adjusting your PATH environment: 「Git from the command line and also from 3rd-party software」を選択
   - その他の設定もデフォルトのままで進めます

**インストール確認：**

```bash
git --version
```

バージョン情報が表示されれば、インストール完了です。

#### 🌐 GitHubアカウントの作成

[GitHub](https://github.com)にアクセスしてアカウントを登録します。

### 2️⃣ Gitの設定

#### ユーザー情報の設定

```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

#### GitHub接続の設定

#### 🔐 方法A: SSH キーを使用（推奨）

```bash
# SSH キーを生成
ssh-keygen -t ed25519 -C "あなたのメールアドレス"

# SSH キーをクリップボードにコピー（macOS）
pbcopy < ~/.ssh/id_ed25519.pub

# SSH キーをクリップボードにコピー（Windows）
clip < ~/.ssh/id_ed25519.pub
```

- GitHubの設定 > SSH and GPG keys でSSHキーを追加

#### 🔑 方法B: ユーザー名・パスワード認証

- クローン時にGitHubのユーザー名とパスワード（またはPersonal Access Token）を入力

### 3️⃣ プロジェクトの取得

#### Step 1: フォーク

このリポジトリページの右上にある「**Fork**」ボタンをクリックします

#### Step 2: クローン

```bash
git clone https://github.com/[あなたのユーザー名]/japan-life-guide.git
```

#### Step 3: プロジェクトを開く

```bash
cd japan-life-guide
code .
```

---

## 🛠️ 開発ツールの設定

### 1️⃣ VS Code拡張機能のインストール

このプロジェクトでは、効率的な開発のために推奨拡張機能を事前に設定しています。

#### 自動インストール（推奨）

プロジェクトを VS Code で開くと、[推奨拡張機能](../.vscode/extensions.json)のインストールを促すポップアップが表示されます

ポップアップが表示されたら「**Install All**」をクリックして一括インストールしてください。

#### 手動インストール

拡張機能のポップアップが表示されない場合は、以下の拡張機能を手動でインストールしてください：

| 拡張機能 | ID | 用途 |
|---------|-----|------|
| **Live Server** | `ritwickdey.liveserver` | 開発サーバー |
| **Prettier** | `esbenp.prettier-vscode` | コードフォーマッター |
| **GitHub Copilot** | `github.copilot` | AI支援 |
| **Markdown Lint** | `davidanson.vscode-markdownlint` | Markdownチェック |

### 2️⃣ 開発サーバーの起動

VS Codeで `src/index.html` を開き、右下の「**Go Live**」ボタンをクリックするか、ファイルを右クリックして「**Open with Live Server**」を選択します。

🎉 **開発を始める準備が整いました！**

---

## 🎯 次のステップ

### 📖 開発を始める前に

初期設定が完了したら、以下のドキュメントを参照して開発を進めてください：

### 📚 関連ドキュメント

- 🏠 **[プロジェクト概要](../README.md)**
- 🔄 **[開発ワークフローガイド](workflow.md)** - 日常の開発手順

### 🚀 開発のヒント

- **Live Server**を使用してリアルタイムプレビューを活用
- **Prettier**でコードフォーマットを統一
- **Git**でこまめにコミットを行う
- **Issues**で問題や改善提案を管理
