<template>
  <Default>
    <div class="catalog">
      <ProductCard />
      <ProductCard />
    </div>
  </Default>
</template>

<script setup lang='ts'>
import Default from '@/layouts/default.vue';
import ProductCard from '@/modules/ProductCard/ProductCard.vue';
</script>

<style lang='scss' scoped>
.catalog {
  @apply grid grid-cols-2 gap-5
}
</style>