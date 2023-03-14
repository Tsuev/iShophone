<template>
  <div class="memory">
    <img src="../assets/img/memory-circle.svg" alt="">
    <div class="memory__value">
      {{ amountMemory }} GB
    </div>
  </div>
</template>

<script lang='ts' setup>

export interface Props {
 amountMemory: number
}

const props = withDefaults(defineProps<Props>(), {
  amountMemory: 512
})
props.amountMemory
</script>

<style lang='scss' scoped>
.memory {
  @apply flex flex-col items-center;

  &__value {
    
    @apply text-2xl font-extrabold text-[#4A79A1] pt-2
  }
}
</style>