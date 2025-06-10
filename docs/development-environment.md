# 開発環境セットアップ

このドキュメントでは、効率的な開発を行うための詳細な環境設定について説明します。

## VS Code設定の最適化

### 1. ワークスペース設定

プロジェクトルートに `.vscode/settings.json` を作成し、以下の設定を追加：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "emmet.includeLanguages": {
    "html": "html"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "files.associations": {
    "*.html": "html"
  }
}
```

### 2. Prettier設定

プロジェクトルートに `.prettierrc` ファイルを作成：

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "htmlWhitespaceSensitivity": "css"
}
```

## 推奨拡張機能の詳細

### 必須拡張機能

#### 1. Live Server
- **目的**: リアルタイムプレビュー
- **使用方法**: HTMLファイルを右クリック → "Open with Live Server"
- **設定**: デフォルトポート5500で起動

#### 2. Prettier - Code formatter
- **目的**: コードの自動フォーマット
- **設定**: 保存時に自動フォーマット
- **対応言語**: HTML, CSS, JavaScript

#### 3. Auto Rename Tag
- **目的**: HTMLタグの自動リネーム
- **機能**: 開始タグを変更すると終了タグも自動更新

### 推奨拡張機能

#### 4. HTML CSS Support
- **目的**: CSSクラス名の自動補完
- **機能**: HTMLでCSS classを入力時に候補表示

#### 5. CSS Peek
- **目的**: CSS定義の確認
- **使用方法**: Ctrl+クリックでCSS定義にジャンプ

#### 6. GitLens
- **目的**: Git履歴の可視化
- **機能**: 行ごとのコミット履歴表示

#### 7. Bracket Pair Colorizer 2
- **目的**: 括弧の対応関係を色分け
- **機能**: 入れ子構造の視覚化

#### 8. Path Intellisense
- **目的**: ファイルパスの自動補完
- **機能**: 相対パス入力時の候補表示

## 開発効率化のコツ

### 1. Emmetの活用

HTML記述を高速化するEmmetスニペット：

```html
<!-- ! + Tab → HTML5テンプレート -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

<!-- div.container + Tab -->
<div class="container"></div>

<!-- nav>ul>li*3>a + Tab -->
<nav>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</nav>
```

### 2. ショートカットキー

よく使用するショートカット：

| 機能 | Windows/Linux | Mac |
|------|---------------|-----|
| コマンドパレット | Ctrl+Shift+P | Cmd+Shift+P |
| ファイル検索 | Ctrl+P | Cmd+P |
| 全体検索 | Ctrl+Shift+F | Cmd+Shift+F |
| 複数行選択 | Alt+Click | Option+Click |
| 行コピー | Ctrl+C | Cmd+C |
| 行移動 | Alt+↑/↓ | Option+↑/↓ |

### 3. Live Serverの設定

Live Serverでの開発時のポイント：

- **ポート変更**: settings.json で `liveServer.settings.port` を設定
- **ブラウザ指定**: `liveServer.settings.CustomBrowser` で使用ブラウザを指定
- **ルートディレクトリ**: プロジェクトルートから起動する

## トラブルシューティング

### よくある問題と解決方法

#### 1. Live Serverが起動しない
- **原因**: ポートが使用済み
- **解決**: VS Code再起動 または ポート番号変更

#### 2. Prettierが動作しない
- **原因**: デフォルトフォーマッターが設定されていない
- **解決**: settings.json で `editor.defaultFormatter` を設定

#### 3. Emmetが動作しない
- **原因**: ファイルタイプの認識エラー
- **解決**: ファイル拡張子を確認、または言語モードを手動設定

#### 4. 日本語入力時の問題
- **原因**: IMEとの競合
- **解決**: `editor.quickSuggestions` の設定調整

## 開発フロー最適化

### 1. ファイル監視とホットリロード

Live Serverは以下のファイル変更を自動検出：
- HTML ファイル
- CSS ファイル
- JavaScript ファイル

### 2. 開発用ブラウザ設定

開発効率化のためのブラウザ設定：
- **Chrome DevTools**: F12で開発者ツール
- **レスポンシブモード**: Ctrl+Shift+M (Cmd+Shift+M)
- **キャッシュ無効化**: DevTools > Network > Disable cache

### 3. バージョン管理との連携

Git連携のベストプラクティス：
- GitLensで変更履歴を確認
- Source Control パネルで変更を管理
- コミット前にPrettierでフォーマット

この設定により、効率的で一貫性のある開発環境が構築できます！
