import { defineAsyncComponent } from 'vue';

const ProductCard = defineAsyncComponent(() =>
  import('./ProductCard.vue')
);

export default {
  ProductCard,
}
