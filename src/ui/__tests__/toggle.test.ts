import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Toggle from '../toggle.vue'

describe('Test toggle component', () => {
  const wrapper = mount(Toggle) // оболочка вёрстки компонента
  const vm = wrapper.vm // экземпляр Vue, содержит все реактивные переменные.

  it('Test toggle component props', () => {
    // Пишем тесты для props-ов
  })

  it('Test toggle component emits', async () => {
    // Пишем тесты для emit-ов
    const label = wrapper.find('.toggle')
   
    label.trigger('input')

    vm.$emit('toggle', false);
    await vm.$nextTick();

    expect(wrapper.emitted().toggle[0]).toEqual([false]);
  })

  it('Test toggle component events', () => {
    // Пишем тесты для event-ов
  })
})