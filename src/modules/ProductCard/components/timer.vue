<template>
  <div class="progress">
    <ProgressLine :fraction="getProgressFraction()" />
    <div class="progress__time">
      {{ toTimeFormat(timeLeft) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ProgressLine from './progressLine.vue';

export interface Props {
  startTime?: number
  endTime?: number
}

const props = withDefaults(defineProps<Props>(), {
  startTime: Date.now(),
  /** Date now + 24 hours */
  endTime: Date.now() + 24 * 60 * 60  * 1000
})

const timeLeft = ref<number>(props.endTime - Date.now())

function tick() {
  if(props.endTime <= Date.now()) return timeLeft.value = 0
  setTimeout(() => {
    timeLeft.value = props.endTime - Date.now()
    tick()
  }, 1000)
}

onMounted(() => {
  if(props.endTime > Date.now()) {
    tick()
  }
})


function toTimeFormat(ms: number) {
  const convert = (value: number) => {
    return value < 0 ? "00" : ("0" + Math.floor(value)).slice(-2)
  }
  const hours = ms / (1000*60*60)
  const minutes = (ms % (1000*60*60)) / (1000*60) 
  const seconds = (ms % (1000*60)) / 1000
  return `${convert(hours)} : ${convert(minutes)} : ${convert(seconds)}`  
}

function getProgressFraction() {
  const diff = props.endTime - props.startTime
  return (diff- timeLeft.value) / diff
}
</script>

<style lang="scss" scoped>
  .progress {
    @apply flex flex-col gap-4 mt-14;

    &__line {
      @apply w-full h-10 rounded-md bg-slate-500 flex overflow-hidden;
      .value {
        @apply w-[90%] rounded-md bg-gradient-to-r from-green-400 to-blue-500;
      }
    }

    &__time {
      @apply text-white font-extrabold text-xl;
    }
  }
</style>