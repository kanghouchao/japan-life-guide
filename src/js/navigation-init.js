/**
 * Navigation Initializer
 * 导航栏初始化器
 *
 * 在页面加载时自动初始化导航栏
 */

// 确保DOM加载完成后再初始化导航栏
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // 创建导航生成器实例
    const navGenerator = new NavigationGenerator();

    // 初始化导航栏
    await navGenerator.init();

    // 等待导航栏生成完成后，再初始化其他功能（如翻译）
    document.addEventListener('navigationGenerated', function () {
      // 如果存在语言切换功能，在这里重新初始化
      if (typeof initializeLanguageSelector === 'function') {
        initializeLanguageSelector();
      }

      // 如果存在其他需要在导航栏生成后初始化的功能，在这里调用
      if (typeof initializeTranslations === 'function') {
        initializeTranslations();
      }
    });
  } catch (error) {
    console.error('Failed to initialize navigation:', error);
  }
});

// 提供全局访问的导航管理器
window.navigationManager = {
  generator: null,

  init: async function () {
    this.generator = new NavigationGenerator();
    await this.generator.init();
    return this.generator;
  },

  addItem: function (key, item) {
    if (this.generator) {
      this.generator.addNavigationItem(key, item);
    }
  },

  removeItem: function (key) {
    if (this.generator) {
      this.generator.removeNavigationItem(key);
    }
  },

  updateItem: function (key, updates) {
    if (this.generator) {
      this.generator.updateNavigationItem(key, updates);
    }
  }
};
