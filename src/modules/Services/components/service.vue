<template>
  <div class="service" :style="{ backgroundImage: 'url(' + getImage + ')' }">
    <div class="service__title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang='ts' >
import { computed } from 'vue';

const props = defineProps<{ image: string, title: string }>()

const getImage = computed(() => new URL(`../assets/img/${props.image}`, import.meta.url).href)
</script>

<style lang='scss' scoped>
.service {
  @apply h-500 bg-no-repeat bg-center bg-cover rounded-3xl;
  @apply flex items-end;

  &__title {
    @apply text-4xl font-bold text-white m-20 drop-shadow-lg;
  }
}
</style>