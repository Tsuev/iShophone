<template>
  <div class="mobileView">
    <div class="mobileView__content">
      <RouterView />
    </div>
    <Navigation />
  </div>
</template>

<script setup lang='ts'>
import { RouterView } from 'vue-router'
import { Navigation } from '@/modules/Navigation/index';
</script>

<style lang='scss' scoped>
.mobileView {
  @apply flex flex-col h-full;

  &__content {
    @apply grow
  }
}
</style>