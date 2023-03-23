export default defineEventHandler(async (event) => {
  // Handle query params
  // const { name } = getQuery(event)

  // Handle post data
  // const { age } = await readBody(event)

  // API call with private key
  const { data: currencies } = await $fetch(
    'https://api.currencyapi.com/v3/currencies',
    {
      query: {
        apikey: 'i9kSRQlpJ0S1QpcrNxhqYeeCeiBrc9li5VTOXBdA',
        currencies: 'USD,MXN',
      },
    }
  )

  return currencies

  return {
    message: `Hello, ${name}! You are ${age} years old.`,
    currencies: currencies,
  }
})
