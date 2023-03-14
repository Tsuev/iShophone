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
  @apply flex text-2xl font-bold rounded-tl-[3rem] rounded-br-[3rem] bg-green-600 absolute text-white py-20 px-20 right-0 bottom-0;
}
</style>