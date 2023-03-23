// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Dojo',
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
    public: {
      apiBase: '',
    },
  },
})
