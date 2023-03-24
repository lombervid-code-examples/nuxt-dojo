export default defineEventHandler(async (event) => {
  const code = event.context.params.code
  const config = useRuntimeConfig()

  const { data } = await $fetch('/latest', {
    baseURL: config.currency.endpoint,
    query: {
      apikey: config.currency.apikey,
      currencies: code,
    },
  })

  return data
})
