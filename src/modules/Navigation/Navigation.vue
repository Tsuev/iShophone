<template>
  <div class="navigation">
    <RouterLink class="navigation__link" to="/">
      <IconHome :is-active="true" />
    </RouterLink>

    <RouterLink class="navigation__link" to="/catalog">
      <IconCatalog :is-active="false" />
    </RouterLink>

    <RouterLink class="navigation__link" to="/services">
      <IconService :is-active="false" />
    </RouterLink>

    <RouterLink class="navigation__link" to="/settings">
      <IconSettings :is-active="false" />
    </RouterLink>
  </div>
</template>

<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import IconHome from './components/IconHome.vue'
import IconCatalog from './components/IconCatalog.vue'
import IconService from './components/IconService.vue'
import IconSettings from './components/IconSettings.vue'
</script>

<style lang='scss' scoped>
.navigation {
  @apply sticky bottom-10 left-0 p-20 w-full flex justify-around bg-gray-700 rounded-full;

  .router-link-exact-active {
    @apply fill-green-700
  }

  &__link {
    @apply text-6xl h-100 w-100 justify-center flex items-center fill-gray-500
  }
}
</style>