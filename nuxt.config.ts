import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  publicRuntimeConfig: {
    F_API_KEY: process.env.F_API_KEY,
    F_AUTH_DOMAIN: process.env.F_AUTH_DOMAIN,
    F_PROJECT_ID: process.env.F_PROJECT_ID,
    F_STORAGE_BUCKET: process.env.F_STORAGE_BUCKET,
    F_MESSAGING_SENDER_ID: process.env.F_MESSAGING_SENDER_ID,
    F_APP_ID: process.env.F_APP_ID,
  },
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
    shortcuts: [],
    rules: [],
  },
})
