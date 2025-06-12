# 🌸 Japan Life Guide / 日本生活ガイド

> 外国人のための日本生活総合ガイド

![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 概要

Japan Life Guideは、日本で新生活を始める外国人の方々を支援するためのWebガイドです。これは学校の授業課題として制作された学生作品で、教師の指導のもと複数の学生が協力して開発しました。実際の外国人が抱える課題を理解し、技術的なスキルとユーザビリティの両方を学ぶことを目的としています。

### ✨ 主な特徴

- 🌍 **多言語対応** - 日本語、中文、English、Монгол、العربية
- 📱 **レスポンシブデザイン** - モバイル・デスクトップ両対応
- 🔄 **リアルタイム言語切替**

## 🎯 対象ユーザー

- 日本に新しく来た外国人
- 日本での生活手続きに困っている方
- 日本の生活ルールを学びたい方
- 多言語での情報が必要な方

## 🛠️ 技術スタック

### フロントエンド

- **HTML** - セマンティックマークアップ
- **CSS** - モダンスタイリング、フレックスボックス
- **JavaScript** - バニラJS、モジュラー設計
  - **P5.js** - アニメーション・グラフィックス

### 開発環境

- **VS Code** - 推奨エディタ
- **Git** - バージョン管理

## 📁 プロジェクト構造

```text
japan-life-guide/
├── 📁 src/                    # メインソースコード
│   ├── index.html             # ホームページ
│   ├── 📁 css/
│   │   ├── main.css          # 共通スタイル
│   │   └── index.css         # ホーム専用スタイル
│   ├── 📁 js/
│   │   ├── main.js           # 多言語機能
│   │   ├── sketch.js         # P5.jsアニメーション
│   │   └── translations.json # 翻訳データ
│   ├── 📁 pages/             # コンテンツページ
│   │   ├── registration.html
│   │   ├── phone-card.html
│   │   ├── bank-card.html
│   │   └── waste-sorting.html
│   └── 📁 images/
│       └── favicon.ico
├── 📁 .github/workflows/      # GitHub Actions
└── 📁 .vscode/               # VS Code設定
```

## 📚 ドキュメント

プロジェクトの詳細なドキュメントは **[GitHub Wiki](https://github.com/kanghouchao/japan-life-guide/wiki)** で管理されています：

- 🚀 **[Getting Started](https://github.com/kanghouchao/japan-life-guide/wiki/Getting-Started)** - 開発環境のセットアップ
- 🔄 **[Workflow](https://github.com/kanghouchao/japan-life-guide/wiki/Workflow)** - 開発ワークフローと貢献手順
- 🏠 **[Home](https://github.com/kanghouchao/japan-life-guide/wiki)** - プロジェクト概要とナビゲーション

## 🚀 開発を始める

### 🔰 初めての方へ

**Git/GitHub初心者の方**は、詳細なセットアップ手順をご確認ください：

- 📖 **[プロジェクト開始ガイド](https://github.com/kanghouchao/japan-life-guide/wiki/Getting-Started)** - VS Code、Git、GitHub の設定から始める
- 🔄 **[開発ワークフローガイド](https://github.com/kanghouchao/japan-life-guide/wiki/Workflow)** - Fork-based開発の日常的な作業手順

### ⚡ 経験者向けクイックスタート

**既にGitとGitHubが設定済みの場合：**

```bash
# 1. プロジェクトをフォーク（GitHubのWebページで）
git clone https://github.com/[あなたのユーザー名]/japan-life-guide.git
# 2. VS Codeで開く
cd japan-life-guide
code .
# 3. Live Serverで起動（VS Code拡張機能）
```

### 💡 サポート

- 📚 **ドキュメント**: [GitHub Wiki](https://github.com/kanghouchao/japan-life-guide/wiki) で詳細なガイドをご確認ください
- 🐛 **バグ報告・機能提案**: [Issues](https://github.com/kanghouchao/japan-life-guide/issues)
- ❓ **質問・相談**: [Issues](https://github.com/kanghouchao/japan-life-guide/issues)またはPRコメントでお気軽に！
