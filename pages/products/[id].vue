<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
})

const config = useRuntimeConfig()
const { id } = useRoute().params

const { data: product } = await useFetch(`/product/${id}`, {
  baseURL: config.public.apiBase,
})
</script>