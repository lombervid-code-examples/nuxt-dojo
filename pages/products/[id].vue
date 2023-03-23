<script setup>
definePageMeta({
  layout: 'products',
})

const config = useRuntimeConfig()
const { id } = useRoute().params

const { data: product } = await useFetch(`/product/${id}`, {
  baseURL: config.public.apiBase,
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  })
}
</script>

<template>
  <div>
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>
