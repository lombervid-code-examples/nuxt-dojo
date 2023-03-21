<script setup>
const props = defineProps({
  product: Object
})

const price = computed(() => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(props.product.price)
})
</script>

<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <figure class="p-7">
        <img :src="product.images[0]" :alt="product.title" class="mx-auto my-7">
      </figure>

      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <div class="text-xl my-7">Price - {{ price }}</div>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 400px;
}
</style>