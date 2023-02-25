<template>
  <div class="product-card">
    <div class="product-card__view">
      <img class="product-card__view__product" src="./assets/img/iphone.png" alt="">
    </div>
    <div class="product-card__data">
      <div class="product-card__title">
        {{ phoneType }}
      </div>
      <div class="product-card__states">
        <Battery />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' >
import Battery from './components/battery.vue';

export interface ProductCard {
  phoneType?: string
}

const props = withDefaults(defineProps<ProductCard>(), {
  phoneType: 'iPhone 14 pro max'
})
</script>

<style lang='scss' scoped>
.product-card {
  @apply grid grid-cols-1 gap-20 bg-zinc-900 rounded-3xl p-20;

  @apply h-500;

  &__view {
    @apply overflow-hidden flex justify-center;

    &__product {
      @apply h-full
    }
  }

  &__title {
    @apply text-5xl font-extrabold text-white
  }


}
</style>