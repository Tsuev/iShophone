<template>
  <div class="product-card">
    <div class="product-card__view">
      <img class="product-card__view__logo" src="./assets/img/iphone.png" alt="">
      <div class="product-card__view__title">
        {{ typePhone }}
      </div>
    </div>
    <div class="product-card__data">

    </div>
  </div>
</template>

<script setup lang='ts' >
export interface ProductCard {
  typePhone?: string
}

const props = withDefaults(defineProps<ProductCard>(), {
  typePhone: 'iPhone'
})
</script>

<style lang='scss' scoped>
.product-card {
  @apply grid grid-cols-1 bg-zinc-900 rounded-3xl;

  @apply h-500;

  &__view {
    @apply overflow-hidden relative;

    &__logo {
      @apply z-10
    }

    &__title {
      @apply absolute top-0 left-0 text-8xl font-extrabold text-zinc-800 opacity-50 z-0
    }
  }


}
</style>