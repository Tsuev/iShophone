<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Navigation } from './modules/Navigation/index';
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
  <Navigation />
</template>

<style scoped lang="scss">

</style>
