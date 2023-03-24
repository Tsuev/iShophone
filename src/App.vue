<script setup lang="ts">
import DesktopView from '@/components/DesktopView.vue';
import MobileView from '@/components/MobileView.vue';
import isMobile from './helpers/mobileDetected';


</script>

<template>
  <DesktopView v-if="!isMobile" />
  <MobileView v-else />
</template>

<style scoped lang="scss"></style>
