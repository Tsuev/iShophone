<template>
  <div class="progress-line">
    <div 
      class="value" 
      :style="{
        width: `${fraction*100}%`,
        transition: `width ${duration}s linear`
      }
    "/>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  /** between 0-1 */
  fraction?: number
  /** at seconds */
  duration?: number
}

withDefaults(defineProps<Props>(), {
  fraction: 0,
  duration: 1
})
</script>

<style lang="scss" scoped>
  .progress-line {
    @apply w-full h-10 rounded-md bg-slate-500 flex overflow-hidden;
    .value {
      @apply w-0 rounded-md bg-gradient-to-r from-green-400 to-blue-500;
    }
  }
</style>