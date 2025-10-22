import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Grammatik Plus",
  description: "Learn German Portal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Grammar Lessons', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Grammar Lessons',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
          { text: 'Nouns & Articles', link: '/grammar/nouns-and-articles' },
          { text: 'Cases & Declension', link: '/grammar/cases-and-declension' },
          { text: 'Pronouns', link: '/grammar/pronouns' },
          { text: 'Verb Basics', link: '/grammar/verb-basics' },
          { text: 'Tenses', link: '/grammar/tenses' },
          { text: 'Modal Verbs', link: '/grammar/modal-verbs' },
          { text: 'Adjectives & Adverbs', link: '/grammar/adjectives-and-adverbs' },
          { text: 'Prepositions', link: '/grammar/prepositions' },
          { text: 'Word Order', link: '/grammar/word-order' },
          { text: 'Numbers & Time', link: '/grammar/numbers-and-time' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
