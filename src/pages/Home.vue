<template>
  <Stories />
  <Carousel />
  <Default>
    <Brands />
    <Services />
  </Default>
</template>

<script setup lang="ts">
import Default from '@/layouts/default.vue';
import { Carousel } from '@/modules/Carousel/index';
import { Services } from '@/modules/Services/index';
import { Stories } from '@/modules/Stories/index';
import { Brands } from '@/modules/Brands/index'
</script>

<style lang="scss" scoped>

</style>