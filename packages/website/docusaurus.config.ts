import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scaffoldly',
  tagline: 'Deploy Next.js to AWS Lambda in Minutes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.PUBLIC_URL || 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scaffoldly', // Usually your GitHub org/user name.
  projectName: 'scaffoldly', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
          rehypePlugins: [],
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/scaffoldly/scaffoldly/tree/main/packages/website/',
        },
        // blog: {
        //   remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        //   rehypePlugins: [],
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/scaffoldly/scaffoldly/tree/main/packages/website/blog',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     '<h5>⭐️ Please give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/scaffoldly/scaffoldly">GitHub</a>! ⭐️</h5>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Scaffoldly',
      logo: {
        alt: 'Scaffoldly Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/about', label: 'Why Scaffoldly?', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://github.com/scaffoldly/scaffoldly/discussions',
          label: 'Discussions',
          position: 'right',
        },
        {
          href: 'https://github.com/scaffoldly/scaffoldly',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials',
            },
            {
              label: 'Community',
              to: '/community',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/scaffoldly/scaffoldly/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/7FTY8CPPfZ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/scaffoldly/scaffoldly',
            },
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scaffoldly, LLC.`,
    },
    algolia: {
      appId: 'WR6B7DZF3W',
      apiKey: '344cbd9ae493d1d819ce297fa99df478',
      indexName: 'scaffoldly',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      insights: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
