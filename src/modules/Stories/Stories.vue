<template>
  <div class="stories">
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
    <StoryRound />
  </div>
</template>

<script setup lang='ts' >
import StoryRound from './components/StoryRound.vue';
</script>

<style lang='scss' scoped>
.stories {
  @apply py-10 flex overflow-x-auto mb-30 mt-10;

  &::-webkit-scrollbar {
    @apply hidden;
  }
}
</style>