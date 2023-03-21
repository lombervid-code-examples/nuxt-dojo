<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
})

const cofig = useRuntimeConfig()

const { data: products } = await useFetch('/products?limit=20', {
  baseURL: cofig.public.apiBase,
  transform: (data) => data.products
})
</script>