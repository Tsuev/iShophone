import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Battery from '../battery.vue'


describe('Battery', () => {
  it('renders battery with default state 100%', async () => {
    const wrapper = mount(Battery)
    expect(wrapper.find('.battery__count').text()).toBe('100 %')
  })

  it('renders battery with state 50%', async () => {
    const wrapper = mount(Battery, {
      propsData: {
        batteryState: 50
      }
    })
    expect(wrapper.find('.battery__count').text()).toBe('50 %')
  })

  it('renders low battery when state is less then 80%', async () => {
    const wrapper = mount(Battery, {
      propsData: {
        batteryState: 79
      }
    })
    const elem = wrapper.find('.battery__progress')
    expect(elem.classes('low_battery')).toBe(true)
  })
})