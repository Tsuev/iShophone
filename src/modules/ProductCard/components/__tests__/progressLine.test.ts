
import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Progress from '../progressLine.vue'

describe('Progress', () => {
  it('renders with default props', () => {
    const wrapper = mount(Progress)
    const style =  (wrapper.find('.value').element as HTMLInputElement).style

    expect(style.width).toBe('0%')
    expect(style.transition).toBe('width 1s linear')
  })

  it('renders with custom props', () => {
    const wrapper = mount(Progress, {
      propsData: {
        fraction: 0.5,
        duration: 2
      }
    })
    const style =  (wrapper.find('.value').element as HTMLInputElement).style

    expect(style.width).toBe('50%')
    expect(style.transition).toBe('width 2s linear')
  })
})