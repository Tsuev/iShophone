<template>
  <carousel :wrapAround="true" :items-to-show="1.2" :autoplay="5000">
    <slide v-for="slide in 10" :key="slide">
      <div class="carousel__item" :style="{
        'background-image': 'url(' + '/src/modules/Carousel/assets/img/test-img.png' + ' )'
      }"></div>
    </slide>
  </carousel>
</template>

<script setup lang='ts'>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineProps<{
  imagePaths?: string[],
}>()

</script>

<style lang='scss' scoped>
.carousel__viewport {
  perspective: 2000px;
}

.carousel__slide--active {
  transform: scale(1.1);
  transition-duration: 0.5s;
  z-index: 1000;
}

.carousel__item {
  width: 100%;
  transition-duration: 0.5s;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 30px;
  @apply flex
}
</style>