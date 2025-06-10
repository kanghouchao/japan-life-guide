# 開発ワークフロー

このプロジェクトでは GitHub Flow を使用した開発ワークフローを採用しています。以下の手順に従って開発を進めてください。

## 基本的な開発サイクル

### 1. Issue の確認・作成
- 作業を始める前に、対応する Issue があることを確認
- Issue がない場合は新規作成し、作業内容を明確にする
- Issue 番号を控えておく（ブランチ名やコミットメッセージで使用）

### 2. ブランチの作成
```bash
# メインブランチから最新の状態を取得
git checkout main
git pull origin main

# 新しい機能ブランチを作成
git checkout -b feature/issue-番号-機能名
# 例: git checkout -b feature/issue-5-registration-page
```

### 3. 開発作業
- 担当するページの HTML/CSS を作成・編集
- 定期的にコミットを行う（意味のある単位で）
- コミットメッセージは分かりやすく記述

```bash
# 変更を確認
git status
git diff

# 変更をステージング
git add .

# コミット（分かりやすいメッセージを記述）
git commit -m "Add: 住民登録ページの基本レイアウト作成 #5"
```

### 4. リモートブランチへのプッシュ
```bash
# 作業中のブランチをリモートにプッシュ
git push origin feature/issue-番号-機能名
```

### 5. プルリクエスト（PR）の作成
1. GitHub でフォークしたリポジトリにアクセス
2. 「Compare & pull request」ボタンをクリック
3. PR のタイトルと説明を記入：
   - タイトル: `[#Issue番号] 機能の概要`
   - 説明: 変更内容、確認ポイントなどを記述
4. レビュアーを指定（チームメンバー）
5. 「Create pull request」をクリック

### 6. コードレビュー
- チームメンバーがコードをレビュー
- 修正が必要な場合はコメントで指摘
- 修正後は同じブランチで追加コミット

### 7. マージ
- レビューが完了し、承認されたら main ブランチにマージ
- マージ後はローカルブランチを削除

```bash
# メインブランチに切り替え
git checkout main

# 最新の状態を取得
git pull origin main

# 作業完了したブランチを削除
git branch -d feature/issue-番号-機能名
```

## コミットメッセージの書き方

### フォーマット
```
タイプ: 変更内容の概要 #Issue番号

詳細な説明（必要に応じて）
```

### タイプの例
- `Add:` 新機能の追加
- `Fix:` バグ修正
- `Update:` 既存機能の更新
- `Style:` CSS スタイルの調整
- `Docs:` ドキュメントの更新

### 例
```bash
git commit -m "Add: 電話カード購入ページのレイアウト作成 #3"
git commit -m "Fix: ゴミ分別表のレスポンシブ対応 #7"
git commit -m "Style: ヘッダーナビゲーションのデザイン調整 #2"
```

## ブランチ命名規則

### フォーマット
```
タイプ/issue-番号-機能名
```

### 例
- `feature/issue-1-top-page`
- `feature/issue-2-registration-guide`
- `fix/issue-8-navigation-bug`

## 注意事項

- main ブランチには直接コミットしない
- PR 作成前に必ずローカルでテストを行う
- コンフリクトが発生した場合は、メンバーに相談する
- 他のメンバーの作業を理解するため、PR は積極的にレビューする

このワークフローに従うことで、チーム全体が効率的に開発を進めることができます！

## 詳細な日常開発フロー

### コード更新の具体的手順

#### 1. 作業前の準備

```bash
# 作業開始前に必ずmainブランチを最新に更新
git checkout main
git pull origin main

# 作業中のブランチがある場合は、mainの変更をマージ
git checkout feature/your-branch
git merge main

# コンフリクトがある場合は解決後にコミット
git add .
git commit -m "Merge: mainブランチの最新変更を統合"
```

#### 2. ファイル編集時のベストプラクティス

```html
<!-- 変更前に既存コードを理解 -->
<!-- 1. ファイル全体の構造を確認 -->
<!-- 2. 既存のCSSクラス名を確認 -->
<!-- 3. コーディング規則に従って編集 -->

<!-- 例: 住民登録ページの編集 -->
<section class="registration-section">
    <div class="container">
        <h2 class="section-title">住民登録の手順</h2>
        <div class="steps-container">
            <!-- 新しいステップを追加 -->
        </div>
    </div>
</section>
```

#### 3. CSS編集時の注意点

```css
/* 既存のスタイルを確認してから新規追加 */
/* 命名規則: BEMまたはコンポーネントベース */

/* 良い例 */
.registration-section {
  padding: 60px 0;
}

.registration-section__step {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
}

/* 避けるべき例 */
.step { /* 汎用的すぎる名前 */
  margin: 10px; /* 他の要素への影響を考慮していない */
}
```

#### 4. 段階的コミットの実践

```bash
# 小さな変更単位でコミット
git add src/pages/registration.html
git commit -m "Add: 住民登録ページの基本構造作成 #5"

git add src/css/registration.css  
git commit -m "Style: 住民登録ページのレイアウトCSS追加 #5"

git add src/js/registration.js
git commit -m "Add: 住民登録フォームのバリデーション機能 #5"
```

### プルリクエスト作成の詳細手順

#### 1. PR作成前のセルフチェック

```bash
# ローカルでの最終確認
# 1. ブラウザでの表示確認
npm start # または Live Server起動

# 2. レスポンシブ対応確認（Chrome DevTools）
# - モバイル表示: 320px〜768px
# - タブレット表示: 768px〜1024px  
# - デスクトップ表示: 1024px以上

# 3. リンク切れ確認
# 4. JavaScript エラー確認（Console）
# 5. アクセシビリティ確認（Lighthouse）
```

#### 2. PR作成時のテンプレート

```markdown
## 変更内容
### 追加機能
- [ ] 住民登録ページの作成
- [ ] ステップバイステップガイドの実装
- [ ] レスポンシブデザインの適用

### 修正内容  
- [ ] ヘッダーナビゲーションのリンク修正
- [ ] モバイル表示での崩れ修正

## 確認事項
- [ ] ブラウザでの表示確認（Chrome, Firefox, Safari）
- [ ] モバイルデバイスでの確認
- [ ] アクセシビリティチェック完了
- [ ] リンク切れなし
- [ ] JavaScriptエラーなし

## スクリーンショット
[変更前後の画面キャプチャを添付]

## 関連Issue
Closes #5

## 注意事項
- 住民登録の手順は2024年の最新情報に基づいています
- 多言語対応は今後のPRで対応予定
```

#### 3. レビュー対応のプロセス

```bash
# レビューでの修正指摘への対応

# 1. 修正内容を理解
# 2. ローカルで修正実装  
git add .
git commit -m "Fix: レビューコメントに基づくCSS調整 #5"

# 3. 修正内容をプッシュ
git push origin feature/issue-5-registration-page

# 4. レビュアーに修正完了を通知
# PR コメントで修正内容を説明
```

#### 4. マージ後の作業

```bash
# マージ完了後のクリーンアップ

# 1. ローカルでmainブランチに切り替え
git checkout main

# 2. 最新状態を取得
git pull origin main

# 3. 作業完了したブランチを削除
git branch -d feature/issue-5-registration-page

# 4. リモートブランチも削除（オプション）
git push origin --delete feature/issue-5-registration-page
```

### チーム開発での協調作業

#### 1. 並行作業時の注意点

```bash
# 他のメンバーの作業と重複を避ける

# 1. Issue assigneeの確認
# 2. 作業開始前にチームに共有
# 3. 共通ファイル（CSS, JS）の編集時は事前調整

# 例: 共通CSSの編集前
git checkout main
git pull origin main
# 最新の main.css を確認してから作業開始
```

#### 2. コンフリクト解決

```bash
# マージコンフリクト発生時の対応

# 1. 現在の作業をコミット
git add .
git commit -m "WIP: 作業途中の保存"

# 2. mainブランチの最新を取得
git checkout main  
git pull origin main

# 3. 作業ブランチでマージ
git checkout feature/your-branch
git merge main

# 4. コンフリクトファイルを手動解決
# エディタでコンフリクトマーカーを確認・修正

# 5. 解決後にコミット
git add .
git commit -m "Resolve: mainブランチとのマージコンフリクト解決"
```

### 品質管理とテスト

#### 1. ローカルでのテスト項目

```
✅ 表示確認
- [ ] ページが正常に表示される
- [ ] 画像が読み込まれる  
- [ ] フォントが適用される

✅ 機能確認
- [ ] ナビゲーションリンクが動作する
- [ ] フォーム送信が動作する（該当ページ）
- [ ] JavaScriptが正常動作する

✅ レスポンシブ確認  
- [ ] モバイル（375px）での表示
- [ ] タブレット（768px）での表示
- [ ] デスクトップ（1200px以上）での表示

✅ パフォーマンス
- [ ] ページ読み込み速度（3秒以内）
- [ ] 画像サイズの最適化
- [ ] CSS/JSファイルサイズの確認
```

#### 2. コードレビューのチェックポイント

```
✅ HTML構造
- [ ] セマンティックなタグ使用
- [ ] アクセシビリティ対応（alt, label等）
- [ ] 適切な見出し階層（h1-h6）

✅ CSS品質
- [ ] 命名規則の統一
- [ ] レスポンシブ対応
- [ ] クロスブラウザ対応

✅ JavaScript
- [ ] エラーハンドリング
- [ ] パフォーマンス最適化
- [ ] コメント記述

✅ 全体品質
- [ ] コーディング規約準拠
- [ ] ファイル構成の統一
- [ ] コミットメッセージの品質
```

このワークフローに従うことで、高品質で一貫性のある開発を実現できます！
