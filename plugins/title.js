export default defineNuxtPlugin(() => {
  useHead({
    titleTemplate: (title) => (title ? `${title} | Nuxt Dojo` : 'Nuxt Dojo'),
  })
})
