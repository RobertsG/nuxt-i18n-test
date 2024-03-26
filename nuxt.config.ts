// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  i18n: {
    legacy: false,
    locale: 'en',
    locales: [
      'en','lv',
    ],
  },
  modules: [
    '@nuxtjs/i18n',
  ],
})
