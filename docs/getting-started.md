# プロジェクトの開始方法

このプロジェクトで開発を始めるには、以下の手順に従ってください：

## 1. 前提条件とセットアップ

### Gitのインストール

開発を始める前に、Gitをインストールする必要があります。以下の手順に従ってWindowsにGitをインストールしてください：

1. [Git公式サイト](https://git-scm.com/download/win)にアクセスします
2. 「Download for Windows」ボタンをクリックしてインストーラーをダウンロードします
3. ダウンロードしたインストーラー（.exe）を実行します
4. インストールウィザードが開始されます。基本的にデフォルト設定のままで問題ありません：
   - Select Components: デフォルトのまま
   - Select Start Menu Folder: デフォルトのまま
   - Choosing the default editor: お好みのエディタを選択（VS Codeがおすすめ）
   - Adjusting your PATH environment: 「Git from the command line and also from 3rd-party software」を選択
   - その他の設定もデフォルトのままで進めます
5. インストールが完了したら、コマンドプロンプトまたはPowerShellを開いて以下のコマンドで確認：

   ```cmd
   git --version
   ```

   バージョン情報が表示されれば、インストール完了です。

### その他の必要なツール

- **VS Code** - [公式サイト](https://code.visualstudio.com/)からダウンロード
- または、お好みのテキストエディタ

## 2. GitHubアカウントを作成

- [GitHub](https://github.com)にアクセスしてアカウントを登録します

## 3. Gitの設定

### ユーザー情報の設定

```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

### GitHub接続の設定（以下のいずれかを選択）

#### 方法A: SSH キーを使用（推奨）

```bash
# SSH キーを生成
ssh-keygen -t ed25519 -C "あなたのメールアドレス"

# SSH キーをクリップボードにコピー
clip < ~/.ssh/id_ed25519.pub
```

- GitHubの設定 > SSH and GPG keys でSSHキーを追加

#### 方法B: ユーザー名・パスワード認証

- クローン時にGitHubのユーザー名とパスワード（またはPersonal Access Token）を入力

## 4. プロジェクトをフォーク

- このリポジトリページの右上にある「Fork」ボタンをクリックします

## 5. フォークしたプロジェクトをクローン

```cmd
git clone https://github.com/[あなたのユーザー名]/japan-life-guide.git
```

## 6. VS Codeでプロジェクトを開く

```cmd
cd japan-life-guide
code .
```

## 7. VS Code拡張機能のインストール

このプロジェクトでは、効率的な開発のために推奨拡張機能を事前に設定しています。

### 自動インストール（推奨）

プロジェクトを VS Code で開くと、[推奨拡張機能](../.vscode/extensions.json)のインストールを促すポップアップが表示されます

ポップアップが表示されたら「Install All」をクリックして一括インストールしてください。

開発を始める準備が整いました！

## 次のステップ

初期設定が完了したら、以下のドキュメントを参照して開発を進めてください：

- 🔄 **[開発ワークフローガイド](workflow.md)** - 日常の開発手順
