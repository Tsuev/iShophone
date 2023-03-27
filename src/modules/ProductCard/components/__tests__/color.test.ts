import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Color from '../color.vue'

describe('Color', () => {
  it('renders the correct color', () => {
    const wrapper = mount(Color, {
      propsData: {
        color: 'purple',
        label: 'green'
      }
    })
    expect(wrapper.find('.color__circle').classes()).toContain('purple')
  })

  it('renders the correct label', () => {
    const wrapper = mount(Color, {
      propsData: {
        color: 'purple',
        label: 'green'
      }
    })
    expect(wrapper.find('.color__value').text()).toBe('green')
  })
})