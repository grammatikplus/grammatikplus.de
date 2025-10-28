import { defineConfig } from 'vitepress'
// Curated nav and sidebar tailored to current docs

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Grammatik Plus",
  description: "Master German Grammar in English",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Grammar',
        items: [
          { text: 'Adjectives and Adverbs', link: '/grammar/adjectives-and-adverbs' },
          { text: 'Cases and Declension', link: '/grammar/cases-and-declension' },
          { text: 'Modal Verbs', link: '/grammar/modal-verbs' },
          { text: 'Nouns and Articles', link: '/grammar/nouns-and-articles' },
          { text: 'Numbers and Time', link: '/grammar/numbers-and-time' },
          { text: 'Prepositions', link: '/grammar/prepositions' },
          { text: 'Pronouns', link: '/grammar/pronouns' },
          { text: 'Tenses', link: '/grammar/tenses' },
          { text: 'Verb Basics', link: '/grammar/verb-basics' },
          { text: 'Word Order', link: '/grammar/word-order' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Grammar',
        collapsed: true,
        items: [
          { text: 'Adjectives and Adverbs', link: '/grammar/adjectives-and-adverbs' },
          { text: 'Cases and Declension', link: '/grammar/cases-and-declension' },
          { text: 'Modal Verbs', link: '/grammar/modal-verbs' },
          { text: 'Nouns and Articles', link: '/grammar/nouns-and-articles' },
          { text: 'Numbers and Time', link: '/grammar/numbers-and-time' },
          { text: 'Prepositions', link: '/grammar/prepositions' },
          { text: 'Pronouns', link: '/grammar/pronouns' },
          { text: 'Tenses', link: '/grammar/tenses' },
          { text: 'Verb Basics', link: '/grammar/verb-basics' },
          { text: 'Word Order', link: '/grammar/word-order' }
        ]
      }
    ],

    socialLinks: []
  }
})
