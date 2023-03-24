<template>
  <div class="desktopView">
    <img :src="SmartPhone" alt="smartphone">
    <h1>Откройте приложение на мобильном устройстве =)</h1>
  </div>
</template>

<script setup lang='ts'>
import SmartPhone from '@/assets/img/iphone14.png'
</script>

<style lang='scss' scoped>
.desktopView {
  @apply relative h-full;

  @apply flex justify-center items-center;

  img {
    @apply w-500 absolute
  }

  h1 {
    @apply text-7xl w-400
  }
}
</style>