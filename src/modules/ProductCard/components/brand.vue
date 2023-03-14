<template>
  <img class="h-50" :src="path" alt="">
</template>

<script lang="ts" setup>
export interface Props {
  path: string
}

defineProps<Props>()
</script>