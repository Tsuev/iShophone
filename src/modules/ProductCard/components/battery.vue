<template>
  <div class="battery">
    <div class="battery__state">
      <div :style="{ 'width': batteryState + '%' }" class="battery__progress" :class="batteryView"></div>
    </div>
    <div class="battery__count">{{ batteryState }} %</div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = withDefaults(defineProps<{ batteryState: number }>(), {
  batteryState: 100
})

const batteryView = computed(() => props.batteryState < 80 && 'low_battery')

</script>

<style lang='scss' scoped>
.battery {

  &__state {
    @apply w-70 h-35 rounded-md relative;
    @apply border-2 border-gray-500 p-5;

    .battery__progress {
      @apply h-full bg-green-500
    }

    .low_battery {
      @apply bg-yellow-500
    }

    &::after {
      content: '';
      @apply block w-5 h-17 bg-gray-500;
      @apply absolute top-6 left-72
    }
  }

  &__count {
    @apply text-2xl font-extrabold text-white pl-5 pt-5
  }


}
</style>