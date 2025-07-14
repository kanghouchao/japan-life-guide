# Gemini 项目背景：japan-life-guide

## 1. 项目概述

- **目的**：一个为在日本的外国人提供的多语言生活指南网站。
- **团队**：一个由 5 名学生组成的团队，其中大部分是编程初学者。我的指示和解释应该清晰、简单且对初学者友好。
- **技术栈**：静态 HTML、CSS 和原生 JavaScript。我 **绝不能** 引入任何构建工具或框架（如 React、Vue 等）。
- **代码格式化**：该项目使用 Prettier 进行代码格式化。我 **必须** 确保我编写的任何代码都符合 `.prettierrc` 中的设置。

## 2. 核心架构原则 (重要)

本项目使用 **数据分离架构**。我绝不能直接在 HTML 文件中编辑内容或导航。唯一的数据源是 JSON 文件。

- **导航菜单**：导航栏由 **JavaScript 动态生成**。

  - **唯一数据源**：`src/js/navigation-config.json`
  - **我的任务**：要添加、删除或重新排序导航链接，我 **必须** 编辑 `src/js/navigation-config.json`。我 **绝不能** 直接修改任何 HTML 文件中的 `<header>` 标签。

- **本地化 (i18n)**：所有面向用户的文本都通过一个翻译文件进行管理。
  - **唯一数据源**：`src/js/translations.json`
  - **HTML 实现**：文本在 HTML 中使用 `data-i18n` 属性显示（例如，`<h1 data-i18n="page.title"></h1>`）。
  - **我的任务**：要更改网站上的任何文本，我 **必须** 在 `src/js/translations.json` 中为所有语言（`ja`、`zh`、`en`、`mn`、`ar`）编辑相应的键。我 **绝不能** 将文本硬编码到 HTML 文件中。

## 3. 标准工作流程

### 如何添加新页面

1. **创建文件**：在 `src/pages/` 目录中创建新的 `.html` 文件。
2. **更新导航配置**：在 `src/js/navigation-config.json` 中为新页面添加一个新对象。这包括定义其路径、翻译键 (`i18nKey`) 和显示顺序。
3. **添加翻译**：将新页面的导航标题和其任何内容的必要翻译键和值添加到 `src/js/translations.json` 中。这必须为 **所有** 语言完成。
4. **实现 HTML**：在新 HTML 文件中使用 `data-i18n` 属性从翻译文件中提取文本。

### 如何修改文本

1. **识别键**：在相关的 HTML 元素中找到 `data-i18n` 键。
2. **更新翻译**：在 `src/js/translations.json` 中找到此键，并为所需语言更新字符串值。

## 4. 部署

- 部署通过 GitHub Actions 工作流程 (`.github/workflows/deploy.yml`) **完全自动化**。
- 任何向 `main` 分支的推送或合并都将触发自动部署到 GitHub Pages。
- **我的任务**：我 **绝不能** 执行任何手动部署步骤。

## 5. Git 工作流程

- 团队使用 **基于 fork 的工作流程**。
- 我的角色是协助在本地进行更改、提交它们，并准备向上游 `kanghouchao/japan-life-guide` 存储库的拉取请求。

## 6. 最近的更改/进展

### 中国文化页面增强

- **表情符号替换**：用专用的图像文件（`language.jpg`、`food.jpg`、`architecture.jpg`、`nature.jpg`）替换了 `src/pages/chinese-culture.html`（语言、食物、建筑、自然部分）中的表情符号字符，这些图像在 `src/css/chinese-culture.css` 中设置为了背景图片。
- **HTML/CSS 优化**：删除了冗余的 HTML 元素（例如，`food-item` div、`hanzi-display`、`architecture-icon`、`landscape`）以及先前用于表情符号或占位符渲染的相关 CSS 样式。视觉元素现在由 `visual-placeholder` 元素上的背景图像直接处理。

### 导航演示移除

- **页面删除**：`src/pages/navigation-demo.html` 文件已被删除。
- **配置更新**：`navigation_demo` 条目已从 `src/js/navigation-config.json` 中移除。
- **脚本清理**：已验证并确认无需从 `src/js/main.js` 或 `src/js/chinese-culture.js` 中删除相关脚本。

### 中国文化页面国际化与滚动指示器优化

- **页面标题国际化**：为 `src/pages/chinese-culture.html` 的页面标题添加了国际化支持，现在通过 `src/js/translations.json` 中的 `chinese_culture.page_title` 键进行管理。
- **滚动指示器优化**：调整了 `src/css/chinese-culture.css` 中滚动指示器（`scroll-indicator`）的样式和位置，使其在页面加载时更易于发现，并恢复了其原始颜色样式。

### 横幅图片更新

- **背景图片替换**：将 `src/pages/chinese-culture.html` 页面横幅图片从渐变色替换为 `src/images/chinese-culture/main.jpeg` 图片。
