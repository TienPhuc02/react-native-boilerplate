// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The React Native Boilerplate',
  tagline: 'Simple, Lightweight and Scalable.',
  url: 'https://thecodingmachine.github.io',
  baseUrl: '/react-native-boilerplate/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'thecodingmachine',
  projectName: 'react-native-boilerplate',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // eslint-disable-next-line global-require,import/no-extraneous-dependencies
          postcssOptions.plugins.push(require('tailwindcss'));
          // eslint-disable-next-line global-require,import/no-extraneous-dependencies
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/blog',
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
      algolia: {
        appId: '9PEYN0H12D',
        indexName: 'rnboilerplate',
        apiKey: '983439b6ebef49ed3394ecfa290f1c6a',
        contextualSearch: true,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'React Native Boilerplate',
        logo: {
          alt: 'React Native Boilerplate',
          src: 'img/TOM-small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: 'https://github.com/thecodingmachine/react-native-boilerplate',
            label: ' ',
            className: 'header-github-link group',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Features',
            items: [
              {
                label: 'Javascript or TypeScript ? You choose !',
                to: '/docs/installation#using-the-boilerplate',
              },
              {
                label: 'Navigation',
                to: '/docs/navigate',
              },
              {
                label: 'Data fetching',
                to: '/docs/data-fetching',
              },
              {
                label: 'Internationalization',
                to: '/docs/internationalization',
              },
              {
                label: 'Multi theming',
                to: '/docs/theming/how-to-use',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/thecodingmachine/react-native-boilerplate',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Native Boilerplate, by TheCodingMachine. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
