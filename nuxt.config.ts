import { defineNuxtConfig } from 'nuxt3'
// import presetIcons from '@unocss/preset-icons'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt',
  ],
  css:[
    '@unocss/reset/eric-meyer.css',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [

    ],
    rules: [],
    // presets: [
    //   presetIcons({
    //     collections: {
    //       ic: () => import('@iconify-json/ic/icons.json').then(i => i.default as any),
    //     }
    //   })
    // ]
  },
})
