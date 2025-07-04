# 导航栏模板系统使用说明

## 概述

为了解决在多个 HTML 文件中重复维护导航栏代码的问题，我们创建了一个动态导航栏生成系统。该系统通过 JavaScript 从 JSON 配置文件中读取导航信息，自动生成导航栏 HTML。

## 文件结构

```
src/
├── js/
│   ├── navigation-config.json      # 导航配置文件
│   ├── navigation-generator.js     # 导航生成器类
│   ├── navigation-init.js          # 导航初始化脚本
│   └── main.js                     # 主脚本（已更新）
├── css/
│   └── main.css                    # 主样式（已添加活动导航项样式）
└── pages/
    └── *.html                      # 页面文件（已更新）
```

## 核心组件

### 1. navigation-config.json

导航配置文件，定义所有导航项的信息：

```json
{
  "navigation": {
    "home": {
      "href": "./index.html", // 从根目录的链接
      "hrefFromPages": "../index.html", // 从pages目录的链接
      "i18nKey": "nav.home", // 国际化键
      "order": 1, // 排序顺序
      "isHome": true // 是否为首页
    }
  }
}
```

### 2. NavigationGenerator 类

主要功能：

- 自动检测当前页面位置（根目录或 pages 目录）
- 从配置文件加载导航数据
- 生成导航栏 HTML
- 支持活动导航项高亮
- 提供动态管理导航项的方法

### 3. navigation-init.js

初始化脚本，负责：

- 在 DOM 加载完成后自动初始化导航栏
- 与翻译系统集成
- 提供全局导航管理器

## 使用方法

### 在 HTML 文件中使用

1. **简化 header 结构**：

```html
<header>
  <!-- 导航栏将通过JavaScript动态生成 -->
</header>
```

2. **引入必要的脚本**：

```html
<script src="../js/navigation-generator.js"></script>
<script src="../js/navigation-init.js"></script>
<script src="../js/main.js"></script>
```

### 添加新的导航项

1. **编辑配置文件**：
   在 `navigation-config.json` 中添加新项：

```json
{
  "navigation": {
    "new_page": {
      "href": "./pages/new-page.html",
      "hrefFromPages": "./new-page.html",
      "i18nKey": "nav.new_page",
      "order": 7
    }
  }
}
```

2. **添加翻译**：
   在 `translations.json` 中添加对应的翻译：

```json
{
  "ja": {
    "nav.new_page": "新しいページ"
  },
  "zh": {
    "nav.new_page": "新页面"
  }
}
```

### 动态管理导航项

```javascript
// 添加导航项
window.navigationManager.addItem('news', {
  href: './pages/news.html',
  hrefFromPages: './news.html',
  i18nKey: 'nav.news',
  order: 8
});

// 移除导航项
window.navigationManager.removeItem('news');

// 更新导航项
window.navigationManager.updateItem('news', {
  order: 5
});
```

## 功能特性

### 1. 自动路径处理

系统自动检测当前页面位置，使用正确的相对路径。

### 2. 活动状态检测

当前页面的导航项会自动高亮显示。

### 3. 国际化支持

与现有的翻译系统完全集成。

### 4. 响应式设计

导航栏样式保持响应式设计。

### 5. 向后兼容

如果配置文件加载失败，系统会使用内置的默认配置。

## 样式自定义

活动导航项的样式定义在 `main.css` 中：

```css
/* 活动导航项样式 */
nav li.active a {
  background-color: #007bff;
  color: white;
}

nav li.active a:hover {
  background-color: #0056b3;
}
```

## 优势

1. **维护简便**：只需在一个地方修改导航配置
2. **一致性**：所有页面的导航栏保持一致
3. **扩展性**：易于添加新的导航项
4. **灵活性**：支持动态管理导航项
5. **性能**：配置文件只加载一次，可以缓存

## 注意事项

1. 确保所有页面都正确引入了必要的 JavaScript 文件
2. 新增页面时记得在配置文件中添加对应的导航项
3. 保持配置文件的 JSON 格式正确
4. 确保翻译文件中包含所有导航项的翻译

## 故障排除

如果导航栏没有正确显示：

1. 检查浏览器控制台是否有 JavaScript 错误
2. 确认配置文件路径是否正确
3. 验证 JSON 格式是否有效
4. 检查 script 标签的引入顺序

通过这个系统，导航栏的维护变得更加简单和高效！
