<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
    <p>{{ product.description }}</p>
  </div>
  <div class="flex gap-5 flex-wrap ">
    <img v-for="image in product.images" :src="image" alt="" class="items-stretch">
  </div>
  <!-- {{ product }} -->
</template>

<script setup>
const config = useRuntimeConfig()
const { id } = useRoute().params

const { data: product } = await useFetch(`/product/${id}`, {
  baseURL: config.public.apiBase,
})

definePageMeta({
  layout: "products",
})
</script>