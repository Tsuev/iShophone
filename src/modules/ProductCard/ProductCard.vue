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
        <Memory />
        <Color />
      </div>
      <Timer />
      <div class="product-card__bottom">
        <Brand :path="AppleImg" />
      </div>
      <Price />
    </div>
  </div>
</template>

<script setup lang='ts' >
import Battery from './components/battery.vue';
import Brand from './components/brand.vue';
import Color from './components/color.vue';
import Memory from './components/memory.vue';
import Timer from './components/timer.vue';
import AppleImg from '@/assets/img/test-apple-logo.png'
import Price from './components/price.vue';

export interface ProductCard {
  phoneType?: string
}

const props = withDefaults(defineProps<ProductCard>(), {
  phoneType: 'iPhone 14 pro max'
})
</script>

<style lang='scss' scoped>
.product-card {
  @apply grid grid-cols-1 gap-20 bg-zinc-900 rounded-[3rem] p-20 pb-0 relative;
  @apply h-500;

  &__view {
    @apply overflow-hidden flex justify-center;

    &__product {
      @apply h-full
    }
  }

  &__title {
    @apply text-5xl font-extrabold text-white;
  }

  &__states {
    @apply grid grid-cols-3 mt-20;
  }

  &__bottom {
    @apply flex justify-center my-12;
  }

}
</style>