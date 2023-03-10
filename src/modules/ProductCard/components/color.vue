<template>
  <div class="color">
    <div class="color__circle" :class="color"></div>
    <div class="color__value">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
export type BaseColors = 'purple' | 'green' | 'grey' | 'black'
export interface Props {
  color: string
  label: BaseColors
}

withDefaults(defineProps<Props>(), {
  color: 'bg-white',
  label: 'grey'
})

</script>

<style lang="scss">
.color {
  @apply flex flex-col items-center;

  &__circle {
    @apply w-39 h-39 rounded-full;
  }

  &__value {
    @apply text-2xl font-extrabold pt-2 capitalize text-white
  }
}
</style>