<template>
  <img class="brand" :src="path" alt="">
</template>

<script lang="ts" setup>
export interface Props {
  path: string
}

defineProps<Props>()
</script>

<style lang="scss">
  .brand {
    @apply h-50;
  }
</style>