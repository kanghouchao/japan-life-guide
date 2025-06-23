// グローバル変数
let translations = {};
let currentLanguage = 'ja';

// 翻訳データを読み込む
async function loadTranslations() {
  try {
    // 現在のページの階層に応じてパスを調整
    const isSubpage = window.location.pathname.includes('/pages/');
    const jsonPath = isSubpage
      ? '../js/translations.json'
      : './js/translations.json';

    const response = await fetch(jsonPath);
    translations = await response.json();
    return true;
  } catch (error) {
    console.error('翻訳データの読み込みに失敗しました:', error);
    return false;
  }
}

// 言語を変更する関数
function changeLanguage(lang) {
  if (!translations[lang]) {
    console.error(`言語 '${lang}' の翻訳データが見つかりません`);
    return;
  }

  currentLanguage = lang;

  // HTMLのlang属性を変更
  document.documentElement.lang = lang;

  // 右から左に読む言語の場合、dirを設定
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // data-i18n属性を持つ全ての要素を取得して翻訳
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];

    if (translation) {
      element.textContent = translation;
    }
  });

  // 選択された言語をlocalStorageに保存
  localStorage.setItem('selectedLanguage', lang);
}

// 保存された言語または初期言語を設定
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  const languageSelect = document.getElementById('language');

  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
    languageSelect.value = savedLanguage;
  }

  changeLanguage(currentLanguage);
}

// 言語選択イベントリスナーを設定
function setupLanguageSelector() {
  const languageSelect = document.getElementById('language');
  languageSelect.addEventListener('change', function () {
    changeLanguage(this.value);
  });
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', async function () {
  // 翻訳データを読み込み
  const loaded = await loadTranslations();

  if (loaded) {
    // 言語選択機能を初期化
    setupLanguageSelector();
    initializeLanguage();
  } else {
    console.error('翻訳システムの初期化に失敗しました');
  }
});
