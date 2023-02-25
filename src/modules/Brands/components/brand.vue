<template>
  <div class="brand" :class="background">
    <img class="brand__icon" :class="imageSize" :src="getImage" :alt="brandName">
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps<{
  background: string,
  brandName: string,
  imageSize: string,
  image: string,
}>()

const getImage = computed(() => new URL(`../assets/img/${props.image}`, import.meta.url).href)

</script>

<style lang='scss' scoped>
.brand {
  @apply flex justify-center items-center py-40 rounded-3xl shadow-xl;
}
</style>