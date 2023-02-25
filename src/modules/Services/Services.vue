<template>
  <div class="servieces">
    <h2 class="servieces__title">Сервисы</h2>
    <div class="servieces__container">
      <Service image="remont.png" title="Ремонт изнутри" />
      <Service image="display.png" title="Замена дисплея" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Service from '@/modules/Services/components/service.vue';
</script>

<style lang='scss' scoped>
.servieces {
  &__title {
    @apply my-30 text-5xl font-bold
  }

  &__container {
    @apply grid grid-cols-2 gap-25
  }
}
</style>