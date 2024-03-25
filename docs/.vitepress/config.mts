import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'maimai-blog',
  description: 'kore ha blog desu',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '#' },
          { text: 'Authors', link: '/authors' },
          { text: 'Articles', link: '#' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maimai-club' }
    ]
  },
  base: '/blog/'
})
