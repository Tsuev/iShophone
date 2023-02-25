<template>
  <div class="brands">
    <h2 class="brands__title">Популярные бренды</h2>
    <div class="brands__container">
      <Brands background="bg-black" brandName="Apple" image="apple.png" imageSize="w-50" />
      <Brands background="bg-white" brandName="Samsung" image="samsung.png" imageSize="w-180" />
      <Brands background="bg-white" brandName="Xiaomi" image="xiaomi.png" imageSize="w-180" />
      <Brands background="bg-white" brandName="Redmi" image="redmi.png" imageSize="w-150" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Brands from '@/modules/Brands/components/brand.vue'
</script>

<style lang='scss' scoped>
.brands {
  &__title {
    @apply my-30 text-5xl font-bold
  }

  &__container {
    @apply grid grid-cols-2 gap-25
  }
}
</style>