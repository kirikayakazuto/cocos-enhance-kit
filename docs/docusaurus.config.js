// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cocos Enhance Kit',
  tagline: '提供 Cocos Creator 引擎特性增强、修复与优化的开源非官方增强包',
  url: 'https://smallmain.github.io',
  baseUrl: '/cocos-enhance-kit/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'smallmain', // Usually your GitHub org/user name.
  projectName: 'cocos-enhance-kit', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: false,
          versions: {
            "1.0.0": {
              label: "v1.0.0",
            }
          }
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cocos Enhance Kit',
        // style: 'primary',
        logo: {
          alt: 'Cocos Enhance Kit',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            label: '首页',
            activeBaseRegex: '/$',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '文档',
          },
          {
            href: 'https://smallmain.gitee.io/cocos-enhance-kit/demo/v1.0.0/web-desktop/index.html',
            label: '演示',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            dropdownActiveClassDisabled: true,
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/smallmain/cocos-enhance-kit',
            label: '加星鼓励',
            position: 'right',
            className: 'header-github-link',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
        language: ['en', 'zh'],
        removeDefaultStemmer: true,
        searchResultLimits: 10,
      },
    ],
  ],
};

module.exports = config;
