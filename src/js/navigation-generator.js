/**
 * Navigation Generator Module
 * 导航栏生成器模块
 *
 * 用于动态生成导航栏，避免在多个HTML文件中重复维护导航栏代码
 */

class NavigationGenerator {
  constructor() {
    this.navigationConfig = null;
    this.isInPagesFolder = this.detectLocation();
    this.currentPage = this.getCurrentPage();
  }

  /**
   * 检测当前页面是否在pages文件夹中
   */
  detectLocation() {
    const path = window.location.pathname;
    return path.includes('/pages/');
  }

  /**
   * 获取当前页面标识
   */
  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();

    if (filename === 'index.html' || filename === '') {
      return 'home';
    }

    // 移除文件扩展名来获取页面标识
    return filename.replace('.html', '').replace('-', '_');
  }

  /**
   * 加载导航配置
   */
  async loadNavigationConfig() {
    try {
      const configPath = this.isInPagesFolder
        ? '../js/navigation-config.json'
        : './js/navigation-config.json';

      const response = await fetch(configPath);
      if (!response.ok) {
        throw new Error(`Failed to load navigation config: ${response.status}`);
      }

      this.navigationConfig = await response.json();
      return this.navigationConfig;
    } catch (error) {
      console.error('Error loading navigation config:', error);
      // 如果加载失败，返回默认配置
      return this.getDefaultConfig();
    }
  }

  /**
   * 获取默认配置（作为后备方案）
   */
  getDefaultConfig() {
    return {
      navigation: {
        home: {
          href: './index.html',
          hrefFromPages: '../index.html',
          i18nKey: 'nav.home',
          order: 1,
          isHome: true
        },
        registration: {
          href: './pages/registration.html',
          hrefFromPages: './registration.html',
          i18nKey: 'nav.registration',
          order: 2
        },
        phone: {
          href: './pages/phone-card.html',
          hrefFromPages: './phone-card.html',
          i18nKey: 'nav.phone',
          order: 3
        },
        bank: {
          href: './pages/bank-card.html',
          hrefFromPages: './bank-card.html',
          i18nKey: 'nav.bank',
          order: 4
        },
        waste: {
          href: './pages/waste-sorting.html',
          hrefFromPages: './waste-sorting.html',
          i18nKey: 'nav.waste',
          order: 5
        },
        chinese_culture: {
          href: './pages/chinese-culture.html',
          hrefFromPages: './chinese-culture.html',
          i18nKey: 'nav.chinese_culture',
          order: 6
        }
      }
    };
  }

  /**
   * 生成导航栏HTML
   */
  generateNavigationHTML() {
    if (!this.navigationConfig) {
      console.error('Navigation config not loaded');
      return '';
    }

    const navigation = this.navigationConfig.navigation;
    const sortedNavItems = Object.entries(navigation).sort(
      ([, a], [, b]) => a.order - b.order
    );

    const navigationItems = sortedNavItems
      .map(([key, item]) => {
        const href = this.isInPagesFolder ? item.hrefFromPages : item.href;
        const isActive = this.currentPage === key;
        const activeClass = isActive ? ' class="active"' : '';

        // 对于首页链接的特殊处理
        const linkHref =
          key === 'home' && this.isInPagesFolder
            ? item.hrefFromPages
            : key === 'home' && !this.isInPagesFolder
            ? '#'
            : href;

        return `
        <li${activeClass}>
          <a href="${linkHref}" data-i18n="${item.i18nKey}">
            ${this.getDefaultText(item.i18nKey)}
          </a>
        </li>
      `.trim();
      })
      .join('\n        ');

    return `
      <nav>
        <ul>
        ${navigationItems}
        </ul>
      </nav>
    `.trim();
  }

  /**
   * 获取默认文本（在翻译加载前使用）
   */
  getDefaultText(i18nKey) {
    const defaultTexts = {
      'nav.home': 'ホーム',
      'nav.registration': '登録手続き',
      'nav.phone': '電話カード',
      'nav.bank': '銀行カード',
      'nav.waste': 'ゴミの分別',
      'nav.chinese_culture': '中国文化'
    };
    return defaultTexts[i18nKey] || i18nKey;
  }

  /**
   * 生成完整的header HTML
   */
  generateHeaderHTML() {
    const navigationHTML = this.generateNavigationHTML();

    return `
      <div class="header-left">
        <h1 data-i18n="header.title">日本生活ガイド</h1>
        ${navigationHTML}
      </div>
      <div class="language-selector">
        <label for="language" data-i18n="language.label">言語:</label>
        <select id="language" name="language">
          <option value="ja" selected>日本語</option>
          <option value="zh">中文</option>
          <option value="en">English</option>
          <option value="mn">Монгол</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    `.trim();
  }

  /**
   * 初始化并渲染导航栏
   */
  async init() {
    await this.loadNavigationConfig();

    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.innerHTML = this.generateHeaderHTML();

      // 触发自定义事件，通知其他模块导航栏已生成
      const event = new CustomEvent('navigationGenerated', {
        detail: { navigationConfig: this.navigationConfig }
      });
      document.dispatchEvent(event);
    } else {
      console.error('Header element not found');
    }
  }

  /**
   * 添加新的导航项（用于动态添加）
   */
  addNavigationItem(key, item) {
    if (this.navigationConfig && this.navigationConfig.navigation) {
      this.navigationConfig.navigation[key] = item;
      // 重新渲染导航栏
      this.init();
    }
  }

  /**
   * 移除导航项
   */
  removeNavigationItem(key) {
    if (this.navigationConfig && this.navigationConfig.navigation) {
      delete this.navigationConfig.navigation[key];
      // 重新渲染导航栏
      this.init();
    }
  }

  /**
   * 更新导航项
   */
  updateNavigationItem(key, updates) {
    if (
      this.navigationConfig &&
      this.navigationConfig.navigation &&
      this.navigationConfig.navigation[key]
    ) {
      Object.assign(this.navigationConfig.navigation[key], updates);
      // 重新渲染导航栏
      this.init();
    }
  }
}

// 创建全局实例
window.NavigationGenerator = NavigationGenerator;

// 导出模块（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NavigationGenerator;
}
