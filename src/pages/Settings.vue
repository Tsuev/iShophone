<template>
  <div class="settings">
    <Default>
      <div class="settings__dark_mode">
        Темная тема
        <Toggle @toggle="changeTheme" />
      </div>
    </Default>
  </div>
</template>

<script setup lang='ts'>
import Default from '@/layouts/default.vue';
import Toggle from '@/ui/toggle.vue';

const changeTheme = (): boolean => document.body.classList.toggle('dark')

</script>

<style lang='scss' scoped>
.settings {
  &__dark_mode {
    @apply flex items-center justify-between text-5xl font-bold;
  }
}
</style>