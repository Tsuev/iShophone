<template>
  <div class="battery">
    <div class="battery__state"></div>
    <div class="battery__count">100 %</div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.battery {
  @apply w-70 h-35 rounded-md relative;
  @apply border-2 border-gray-500 p-5;

  &__state {
    @apply w-full h-full bg-green-500
  }

  &::after {
    content: '';
    @apply block w-20 h-35 bg-gray-500;
    @apply absolute
  }
}
</style>