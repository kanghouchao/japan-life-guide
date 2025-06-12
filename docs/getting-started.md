# 🚀 Japan Life Guide - 開発環境セットアップガイド

> 💡 **このガイドについて**: Windows環境での開発を想定しており、プログラミング初心者の方でも安心して進められるよう、GUI操作を中心とした手順で説明しています。

## 🔧 開発環境の準備

### 📦 必要なソフトウェア

| ソフトウェア | 用途 | ダウンロード先 | 必須度 |
|-------------|------|------------|--------|
| **Git** | バージョン管理 | [git-scm.com](https://git-scm.com/download/win) | ✅ 必須 |
| **GitHub アカウント** | コード共有・管理 | [github.com](https://github.com) | ✅ 必須 |
| **VS Code** | コードエディタ | [code.visualstudio.com](https://code.visualstudio.com/) | 🔥 推奨 |

> 💡 **必須度について**: ✅ 必須 = 開発に絶対必要、🔥 推奨 = あると便利・効率的

---

## 📋 セットアップ手順

### 1️⃣ Gitのインストール

#### 📥 Gitをダウンロード・インストール

1. **Git公式サイトにアクセス**  
   [https://git-scm.com/download/win](https://git-scm.com/download/win) を開きます

2. **ダウンロード**  
   「Download for Windows」ボタンをクリックして、インストーラー（`.exe`ファイル）をダウンロードします

3. **インストール実行**  
   ダウンロードしたファイルをダブルクリックしてインストールを開始します

4. **インストール設定**  
   インストールウィザードが開始されます。**ほとんどの設定はデフォルトのままでOK**ですが、以下の項目で確認してください：

   - **「Adjusting your PATH environment」**: 「**Git from the command line and also from 3rd-party software**」を選択
   - **「Choosing the default editor」**: お好みのエディタを選択（VS Codeを使用予定の場合は「Use Visual Studio Code as Git's default editor」）

   その他の設定はデフォルトのままで「Next」を押して進めます

#### ✅ インストール確認

インストールが完了したら、以下の手順で確認します：

1. **コマンドプロンプトを開く**  
   `Win + R` キーを押し、`cmd` と入力してEnterキーを押します

2. **Gitバージョンを確認**

   ```cmd
   git --version
   ```

   例：`git version 2.41.0.windows.1` のようにバージョン情報が表示されれば成功です

### 2️⃣ GitHubアカウントの作成

1. **GitHubサイトにアクセス**  
   [https://github.com](https://github.com) を開きます

2. **アカウント登録**  
   「Sign up」ボタンをクリックして、メールアドレス・パスワード・ユーザー名を設定してアカウントを作成します

3. **メール認証**  
   登録したメールアドレスに確認メールが届くので、リンクをクリックして認証を完了させます

### 3️⃣ Gitの初期設定

#### 👤 ユーザー情報の設定

Gitでコミットする際の作者情報を設定します：

1. **コマンドプロンプトを開く**  
   `Win + R` キーを押し、`cmd` と入力してEnterキーを押します

2. **ユーザー名を設定**

   ```cmd
   git config --global user.name "あなたの名前"
   ```

   例：`git config --global user.name "Taro Yamada"`

3. **メールアドレスを設定**

   ```cmd
   git config --global user.email "あなたのメールアドレス"
   ```

   例：`git config --global user.email "taro@example.com"`

   ※ GitHubアカウントで使用しているメールアドレスと同じものを使用してください

### 4️⃣ GitHub接続の設定

GitHubとの接続には、以下の2つの方法があります。**SSH キー方式**がより安全で便利なので推奨します。

#### 🔐 方法A: SSH キー設定（推奨）

SSH キーを使用することで、パスワードを毎回入力することなく、安全にGitHubと接続できます。

##### ステップ1: SSH キーの生成

1. **コマンドプロンプトで実行**

   ```cmd
   ssh-keygen -t ed25519 -C "あなたのメールアドレス"
   ```

   例：`ssh-keygen -t ed25519 -C "taro@example.com"`

2. **保存場所の確認**  
   「Enter file in which to save the key」が表示されたら、**Enterキーを押す**（デフォルトの場所で保存）

3. **パスフレーズの設定**  
   「Enter passphrase」が表示されたら、**パスフレーズを入力**するか、空のままにする場合は**Enterキーを押す**

##### ステップ2: SSH キーをGitHubに登録

1. **SSH キーファイルを開く**  
   ファイルエクスプローラーで以下のパスに移動します：

   ```cmd
   C:\Users\[あなたのユーザー名]\.ssh\
   ```

2. **公開鍵ファイルを開く**  
   `id_ed25519.pub` ファイルを**メモ帳**で開きます

   📝 **ヒント**: ファイルが見つからない場合は、ファイルエクスプローラーの「表示」タブで「隠しファイル」にチェックを入れてください

3. **SSH キーをコピー**  
   ファイル内の**全ての内容**を選択（`Ctrl + A`）してコピー（`Ctrl + C`）します

4. **GitHubでSSH キーを登録**  
   - GitHubにログインし、右上のプロフィール画像をクリック
   - 「Settings」をクリック
   - 左サイドバーの「SSH and GPG keys」をクリック
   - 「New SSH key」ボタンをクリック
   - **Title**: 分かりやすい名前を入力（例：「My Windows PC」）
   - **Key**: コピーしたSSH キーを貼り付け
   - 「Add SSH key」ボタンをクリック

##### ステップ3: SSH 接続テスト

```cmd
ssh -T git@github.com
```

「Hi [ユーザー名]! You've successfully authenticated...」が表示されれば成功です。

#### 🔑 方法B: HTTPSを使用（Personal Access Token）

SSH設定が難しい場合は、HTTPS方式とPersonal Access Tokenを使用して認証できます：

##### Personal Access Tokenの作成

1. **GitHubの設定画面にアクセス**  
   GitHubにログインし、右上のプロフィール画像をクリック → 「Settings」

2. **Developer settingsに移動**  
   左サイドバーの一番下にある「Developer settings」をクリック

3. **Personal access tokensを選択**  
   左サイドバーの「Personal access tokens」→「Tokens (classic)」をクリック

4. **新しいトークンを生成**  
   「Generate new token」→「Generate new token (classic)」をクリック

5. **トークンの設定**  
   - **Note**: 分かりやすい名前（例：「Japan Life Guide Development」）
   - **Expiration**: 適切な有効期限を設定（90日推奨）
   - **Scopes**: 「repo」にチェックを入れる

6. **トークンをコピー**  
   「Generate token」をクリックし、表示されたトークンを**安全な場所に保存**

   ⚠️ **重要**: トークンは一度しか表示されないため、必ずコピーして保存してください

##### 認証の設定

- リポジトリのクローン・プッシュ時にユーザー名とパスワードを求められたら：
  - **ユーザー名**: GitHubのユーザー名
  - **パスワード**: 作成したPersonal Access Token（パスワードではありません）
- 毎回認証が必要ですが、設定は比較的簡単です

### 5️⃣ プロジェクトの取得

#### 1️⃣ リポジトリをフォーク

1. **Japan Life Guide のGitHubページにアクセス**  
   [https://github.com/kanghouchao/japan-life-guide](https://github.com/kanghouchao/japan-life-guide) を開きます

2. **フォークボタンをクリック**  
   ページ右上にある「**Fork**」ボタンをクリックします

3. **フォーク作成**  
   「Create fork」ボタンをクリックして、あなたのアカウントにリポジトリのコピーを作成します

#### 2️⃣ プロジェクトをダウンロード（クローン）

1. **あなたのフォークしたリポジトリにアクセス**  
   `https://github.com/[あなたのユーザー名]/japan-life-guide` に移動します

2. **クローンURLを取得**  
   - 緑色の「**< > Code**」ボタンをクリック
   - **SSH設定済みの場合**: 「SSH」タブを選択してURLをコピー
   - **HTTPS使用の場合**: 「HTTPS」タブを選択してURLをコピー

3. **ローカルにクローン**

   ```cmd
   git clone [コピーしたURL]
   ```

   **SSH方式の例**：

   ```cmd
   git clone git@github.com:あなたのユーザー名/japan-life-guide.git
   ```

   **HTTPS方式の例**：

   ```cmd
   git clone https://github.com/あなたのユーザー名/japan-life-guide.git
   ```

#### 3️⃣ プロジェクトフォルダを開く

1. **フォルダに移動**  

   ```cmd
   cd japan-life-guide
   ```

2. **VS Codeでプロジェクトを開く**  

   ```cmd
   code .
   ```

   💡 **代替方法**: VS Codeから「ファイル」→「フォルダーを開く」でプロジェクトフォルダを選択することもできます

---

## 🛠️ VS Code開発環境の設定

### 1️⃣ VS Code拡張機能のインストール

このプロジェクトでは、効率的な開発のために必要な拡張機能を事前に設定しています。

#### 🎯 自動インストール（推奨）

VS Codeでプロジェクトフォルダーを開いたときに、推奨拡張機能のインストールを促すポップアップが表示されます。

> 📝 **ポップアップが表示される条件**: プロジェクトに `.vscode/extensions.json` ファイルがあり、VS Codeで初回フォルダを開いた時に表示されます。表示されない場合は、以下の手動インストール手順をご利用ください。

1. **ポップアップの確認**  
   右下に「このワークスペースに推奨されている拡張機能をインストールしますか？」というメッセージが表示されます

2. **一括インストール**  
   「**すべてインストール**」または「**Install All**」ボタンをクリックします

3. **インストール完了を待つ**  
   拡張機能のダウンロードとインストールが自動で行われます

#### 🔧 手動インストール

ポップアップが表示されない場合は、以下の手順で拡張機能を手動でインストールしてください：

1. **拡張機能パネルを開く**  
   - VS Codeの左サイドバーにある四角いアイコン（拡張機能）をクリック
   - または `Ctrl + Shift + X` キーを押します

2. **必要な拡張機能をインストール**  
   以下の拡張機能を検索してインストールしてください：

| 拡張機能 | ID | 用途 | 必須度 |
|---------|-----|------|--------|
| **Live Server** | `ritwickdey.liveserver` | 開発サーバー | ✅ 必須 |
| **Prettier** | `esbenp.prettier-vscode` | コードフォーマッター | 🔥 推奨 |
| **GitHub Copilot** | `github.copilot` | AI支援 | 💡 便利 |
| **Markdown Lint** | `davidanson.vscode-markdownlint` | Markdownチェック | 🔥 推奨 |

**インストール手順**：

- 検索ボックスに拡張機能の名前またはIDを入力
- 検索結果から該当する拡張機能を見つける
- 「**インストール**」ボタンをクリック

### 2️⃣ 開発サーバーの起動

Live Server拡張機能を使用して、リアルタイムプレビューで開発できます：

1. **HTMLファイルを開く**  
   VS Codeで `src/index.html` ファイルを開きます

2. **Live Serverを起動**  
   以下のいずれかの方法で起動します：

   **方法A**: 右下の「**Go Live**」ボタンをクリック  
   💡 ボタンが表示されない場合は、Live Server拡張機能がインストールされているか確認してください

   **方法B**: ファイルを右クリック → 「**Open with Live Server**」を選択

   **方法C**: `Ctrl + Shift + P` → 「Live Server: Open with Live Server」を実行

3. **ブラウザで確認**  
   自動的にブラウザが開き、`http://127.0.0.1:5500` でサイトが表示されます

🎉 **セットアップ完了！** これで開発を始める準備が整いました！

---

## 🆘 トラブルシューティング

### よくある問題と解決方法

#### ❓ Git関連のトラブル

##### **Q: `git` コマンドが認識されない**

- **解決方法**: Gitのインストール後、コマンドプロンプトを**再起動**してください
- **確認方法**: `git --version` でバージョンが表示されることを確認

##### **Q: SSH接続でエラーが発生する**

- **解決方法**: HTTPS方式に切り替えて試してください
- **切り替え方法**: リポジトリのクローン時に HTTPS URLを使用

##### **Q: GitHubにプッシュできない**

- **考えられる原因**:
  - SSH キーが正しく設定されていない
  - HTTPSの場合、認証情報が間違っている
- **解決方法**:
  - SSH: `ssh -T git@github.com` で接続テストを実行
  - HTTPS: ユーザー名・パスワード（またはトークン）を再確認

#### ❓ VS Code関連のトラブル

##### **Q: 推奨拡張機能のポップアップが表示されない**

- **解決方法**:
  1. VS Codeを再起動してみる
  2. 手動インストールの手順に従って拡張機能をインストール

##### **Q: Live Serverが起動しない**

- **解決方法**:
  1. Live Server拡張機能がインストールされているか確認
  2. HTMLファイルが開かれているか確認
  3. VS Codeを再起動してみる

##### **Q: `code .` コマンドが使えない**

- **解決方法**:
  1. VS Codeを開く
  2. `Ctrl + Shift + P` → 「Shell Command: Install 'code' command in PATH」を実行
  3. コマンドプロンプトを再起動

#### ❓ プロジェクト関連のトラブル

##### **Q: フォークしたリポジトリが最新でない**

- **解決方法**:
  1. 元のリポジトリ（upstream）を追加：

     ```cmd
     git remote add upstream https://github.com/kanghouchao/japan-life-guide.git
     ```

  2. 最新の変更を取得：

     ```cmd
     git fetch upstream
     git merge upstream/main
     ```

### 🆘 それでも解決しない場合

1. **GitHubのIssuesで質問**  
   [japan-life-guide/issues](https://github.com/kanghouchao/japan-life-guide/issues) で新しいIssueを作成して質問してください

2. **詳細情報を含める**  
   - 使用しているOS（Windows 10/11）
   - エラーメッセージの全文
   - 実行したコマンドと結果
   - スクリーンショット（可能であれば）

---

## 🎯 次のステップ

### 📖 開発を始める前に

セットアップが完了したら、以下のドキュメントを参照して開発の流れを理解しましょう：

### 📚 関連ドキュメント

- 🏠 **[プロジェクト概要](../README.md)** - プロジェクトの目的と全体像
- 🔄 **[開発ワークフローガイド](workflow.md)** - 日常の開発手順と Git操作
- 💡 **[コントリビューションガイド](../CONTRIBUTING.md)** - 貢献方法とコーディング規約

### 🚀 開発のヒント

#### 📝 日常の開発作業

- **Live Server** でリアルタイムプレビューを活用
- **Prettier** でコードフォーマットを統一（`Shift + Alt + F`）
- こまめに **Git コミット** を行う（変更の小分け）

#### 🤝 チーム開発

- **Issue** で機能追加や問題を管理
- **Pull Request** でコードレビューを依頼
- **フォーク** を最新に保つ習慣をつける

#### 🎨 サイト開発

- `src/index.html` がメインページ
- CSS/JavaScript ファイルは適切なフォルダに配置
- レスポンシブデザインを心がける

---

**🎉 これで Japan Life Guide プロジェクトの開発を始められます！**

何か困ったことがあれば、遠慮なく [Issues](https://github.com/kanghouchao/japan-life-guide/issues) で質問してくださいね。
