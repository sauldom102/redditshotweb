// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'RedditShot',
    tagline: `An API to generate beautiful images from the Reddit posts that you want.`,
    url: 'https://redditshot.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sauldom102', // Usually your GitHub org/user name.
    projectName: 'redditshotweb', // Usually your repo name.
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    customFields: {
        MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                        require.resolve('./src/css/fonts.css'),
                    ],
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'RedditShot',
                logo: {
                    alt: 'RedditShot Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        position: 'left',
                        label: 'Features',
                        href: '/#features',
                    },
                    {
                        type: 'doc',
                        docId: 'faqs',
                        position: 'left',
                        label: 'FAQs',
                    },
                    {
                        type: 'doc',
                        docId: 'donate',
                        label: 'Donate',
                        position: 'left',
                    },
                    // Include this when we add paid api access
                    // {
                    //     position: 'left',
                    //     label: 'Pricing',
                    //     href: '#pricing',
                    // },
                    // {
                    //     type: 'dropdown',
                    //     position: 'left',
                    //     label: 'SDK',
                    //     items: [
                    //         {
                    //             type: 'doc',
                    //             docId: 'sdks/python',
                    //             label: 'Python SDK',
                    //         },
                    //         {
                    //             type: 'doc',
                    //             docId: 'sdks/node',
                    //             label: 'Node SDK',
                    //         },
                    //     ],
                    // },
                    {
                        href: 'https://api.redditshot.com/docs',
                        position: 'right',
                        label: 'API Reference',
                    },
                    {
                        label: 'Request API Key',
                        href: 'https://forms.gle/dtAsuzW3sBggoNmU7',
                        position: 'right',
                    },
                    {
                        label: 'Twitter',
                        href: 'https://twitter.com/redditshot',
                        position: 'right',
                    },
                ],
            },
            footer: {
                links: [
                    {
                        html: `
                        <div class="footer-menu">
                        <a class="footer-link" href="https://twitter.com/redditshot/" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
                        Twitter                    
                        </a>
                        <a class="footer-link" href="/terms-of-service.html" target="_blank" rel="noreferrer noopener" aria-label="Terms of Service">
                        Terms of Service                        
                        </a>
                        <a class="footer-link" href="/privacy-policy.html" target="_blank" rel="noreferrer noopener" aria-label="Privacy Policy">
                        Privacy Policy                                            
                        </a>
                        </div>
                          `,
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} RedditShot, Inc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            metadata: [
                {
                    name: 'keywords',
                    content:
                        'reddit, api, preview, images, screenshots, remotion',
                },
                {
                    name: 'og:image',
                    content: 'https://redditshot.com/img/preview.png',
                },
                {
                    name: 'twitter:image:src',
                    content: 'https://redditshot.com/img/preview.png',
                },
            ],
        }),
};

module.exports = config;
