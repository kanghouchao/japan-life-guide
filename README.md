# 🌸 Japan Life Guide / 日本生活ガイド

> 委員会・文化交流募集サイト / Committee and Cultural Exchange Recruitment Site

![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 概要

Japan Life Guide は、学校の委員会活動の募集と、留学生の文化交流を促進するためのWebサイトです。これは学校の授業課題として制作された学生作品で、教師の指導のもと複数の学生が協力して開発しました。委員会の魅力を伝え、様々な国の文化を紹介することで、国際的な交流を促進することを目的としています。

### 🎯 プロジェクトの進化

当初は各自が自由に作りたいものを作る予定でしたが、チーム開発としての役割を明確にするため、「チームメンバーの各国の文化と学校の交流できる施設や委員会」をテーマとしました。さらに、一度限りの訪問サイトではなく、継続的に利用してもらえるよう「委員会や遊びの募集サイト」として発展させました。

### ✨ 主な特徴

- 🌍 **多言語対応** - 日本語、中文、English、Монгол、العربية
- 📱 **レスポンシブデザイン** - モバイル・デスクトップ両対応
- 🔄 **リアルタイム言語切替**
- 📋 **委員会募集機能** - 学校の委員会活動への参加促進
- 🌏 **文化紹介ページ** - 留学生の母国文化の紹介

## 🎯 対象ユーザー

- 学校の委員会活動に興味がある学生
- 文化交流に参加したい学生  
- 留学生との交流を求める学生
- 多国籍な環境での活動を希望する学生

## 📋 プロジェクト要件

### 必須要件
- **📄 募集ページ** - 委員会や活動の募集機能
- **🌍 文化紹介ページ** - 各国（日本以外）の文化紹介

## 👥 チーム役割分担 / Team Role Assignment

### 🎯 開発チーム構成

このプロジェクトは以下のメンバーによって開発されています：

#### 📝 個別担当 / Individual Assignments

| 担当者 | 役割 | 責任範囲 |
|--------|------|----------|
| [@ozoll](https://github.com/ozoll) | **📋 募集ページ担当** | 委員会・活動募集機能の開発<br/>学校施設紹介コンテンツ |
| [@divine457](https://github.com/divine457) | **🤝 委員会ページ担当** | 委員会紹介ページの開発<br/>委員会情報の管理 |
| [@kanghouchao](https://github.com/kanghouchao) | **🇨🇳 中国文化担当** | 中国文化紹介ページの開発<br/>中国語コンテンツの作成 |
| [@Omaralhieb](https://github.com/Omaralhieb) | **🇸🇾 シリア文化担当** | シリア文化紹介ページの開発<br/>アラビア語コンテンツの作成 |
| [@Puntsagbaljir](https://github.com/Puntsagbaljir) | **🇲🇳 モンゴル文化担当** | モンゴル文化紹介ページの開発<br/>モンゴル語コンテンツの作成 |

#### 🔧 共通技術責任 / Shared Technical Responsibilities

- **フロントエンド開発**: HTML/CSS/JavaScriptによるUI実装
- **多言語機能**: 言語切替システムの維持・拡張
- **レスポンシブデザイン**: モバイル・デスクトップ対応
- **品質保証**: コードレビューとテスト
- **プロジェクト管理**: GitHub Issues・PRでの進捗管理

### 📋 作業方針 / Working Guidelines

- **協力開発**: チーム全体で助け合いながら進める
- **学習重視**: 経験不足でも積極的に挑戦する
- **柔軟な役割**: 必要に応じて相互サポートを行う
- **品質優先**: 多言語対応と文化的配慮を重視

## 📁 プロジェクト構造
```text
japan-life-guide/
├── src/                       # メインソースコード
│   ├── index.html            # ホームページ
│   ├── css/                  # スタイルシート
│   ├── js/                   # JavaScript（多言語機能・アニメーション）
│   └── pages/                # コンテンツページ
│       ├── recruitment.html  # 募集ページ (@ozoll)
│       ├── committees.html   # 委員会ページ (@divine457)
│       ├── culture-china.html    # 中国文化 (@kanghouchao)
│       ├── culture-syria.html    # シリア文化 (@Omaralhieb)
│       └── culture-mongolia.html # モンゴル文化 (@Puntsagbaljir)
├── .github/workflows/        # CI/CD設定
└── .vscode/                  # 開発環境設定
```

## 🚀 開発を始める

### 📋 チーム開発ワークフロー / Team Development Workflow

1. **📥 Issues**: 担当作業はGitHub Issuesで管理
2. **🌿 ブランチ**: 機能ごとに個別ブランチを作成
3. **🔄 プルリクエスト**: コードレビューを経て統合
4. **💬 コミュニケーション**: Issues・PR・Discussionsでのやりとり

### 👨‍💻 個人作業の進め方

各担当者は以下の手順で作業を進めてください：

1. **担当ページの設計**: 文化的配慮とユーザビリティを重視
2. **多言語コンテンツ**: 母語での正確な情報提供
3. **レスポンシブ対応**: モバイル・デスクトップでの最適表示
4. **チームレビュー**: 他メンバーからのフィードバック反映

### 📖 詳細なガイド

**[GitHub Wiki](https://github.com/kanghouchao/japan-life-guide/wiki)** で環境設定から開発フローまで詳しく説明しています：

- 🚀 **[Getting Started](https://github.com/kanghouchao/japan-life-guide/wiki/Development-Environment-Setup)** - 開発環境のセットアップ
- 🔄 **[Workflow](https://github.com/kanghouchao/japan-life-guide/wiki/Development-Workflow-Guide)** - 開発ワークフローと貢献手順

### 💡 サポート

- 📚 **[GitHub Wiki](https://github.com/kanghouchao/japan-life-guide/wiki)** - 詳細なドキュメント
- 👥 **[TEAM.md](./TEAM.md)** - チーム詳細情報・開発スケジュール
- 🐛 **[Issues](https://github.com/kanghouchao/japan-life-guide/issues)** - バグ報告・機能提案・質問

---

**🌟 Let's build an amazing international exchange platform together! / 素晴らしい国際交流プラットフォームを一緒に作りましょう！**
