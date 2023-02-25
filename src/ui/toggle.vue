<template>
  <label class="toggle" :class="{ 'isActive': isActiveToggle }">
    <input v-model="isActiveToggle" @input="toggle" class="toggle__checkbox" type="checkbox">
    <div class="toggle__round"></div>
  </label>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const emit = defineEmits(['toggle'])

const isActiveToggle = ref<boolean>(false)

const toggle = (): void => emit('toggle', isActiveToggle.value)

</script>

<style lang='scss' scoped>
.toggle {
  @apply w-140 p-10 rounded-full shadow-inner;
  @apply bg-gradient-to-br from-blue-400 to-lime-600;

  &__checkbox {
    @apply hidden;
  }

  &__round {
    @apply rounded-full bg-white h-50 w-50 duration-300
  }

  &__checkbox:checked+&__round {
    @apply translate-x-70 duration-300
  }
}

.isActive {
  @apply bg-gradient-to-br from-blue-700 to-lime-800;
}
</style>