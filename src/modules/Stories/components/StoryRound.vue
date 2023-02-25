<template>
  <div class="story_round flex justify-center items-center">
    <img width="40" src="@/assets/img/test-apple-logo.png" alt="">
    <div class="story_round__border"></div>
  </div>
</template>

<script setup lang='ts' >

</script>

<style lang='scss' scoped>
.story_round {
  @apply bg-black rounded-full mx-20 h-150 w-150 relative;
  flex: 0 0 auto;

  &__border {
    @apply h-160 w-160 rounded-full;
    @apply bg-gradient-to-r from-blue-400 to-lime-600;
    @apply absolute -z-10 -top-5 -left-5;
  }
}

.story_loading {
  border: 40px dashed white;
  transition-duration: 0.7s;
  animation-name: animationLoading;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
}

@keyframes animationLoading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>