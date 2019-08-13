const getChildren = require('./childScript')

module.exports = {
  title: 'Cloud Dial  |  Knowledge Base',
  description: '',
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-107905087-7' // UA-00000000-0
      }
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    logo: '/images/cloudDial.png',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Guides',
      link: '/guides/cloud-dial/'
    },
    {
      text: 'Wholesale Support',
      link: '/guides/wholesale-support/'
    },
    ],
    sidebar: {
      '/guides/cloud-dial/': [{
        title: 'Cloud Dial',
        children: getChildren('./guides/cloud-dial/')
      }],
      '/guides/wholesale-support/': [{
        title: 'Wholesale Support',
        children: getChildren('./guides/wholesale-support/')
      }],
    },
    activeHeaderLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated:', // string | boolean
  },
};