// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      // See plugins/title.ts
      // title: 'Nuxt Dojo',
      meta: [
        {
          name: 'description',
          content: 'Nuxt 3 tutorial',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  runtimeConfig: {
    currency: {
      // endpoint: process.env.NUXT_CURRENCY_ENDPOINT,
      endpoint: '',
      // apikey: process.env.NUXT_CURRENCY_APIKEY,
      apikey: '',
    },
    public: {
      apiBase: '',
    },
  },
})
