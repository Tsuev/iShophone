<template>
  <div class="price">
    {{currencyFormatter(price, currency)}}
  </div>
</template>


<script lang="ts" setup>
import { currencyFormatter, type Currency } from '@/helpers/currencyFormatter';

export interface Props {
  price: number
  currency: Currency
}

withDefaults(defineProps<Props>(), {
  price: 100000,
  currency: 'RUB'
})

</script>

<style lang="scss" scoped>
.price {
  @apply flex bg-green-600;
  @apply rounded-tl-[3rem] rounded-br-[3rem];
  @apply text-2xl font-bold text-white;
  @apply absolute right-0 bottom-0;
  @apply py-20 px-20;
}
</style>