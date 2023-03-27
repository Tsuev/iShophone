import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Memory from '../memory.vue'

describe('Memory', () => {
  it('defaultMemory', () => {
    const wrapper = mount(Memory)
    const memory = wrapper.find('.memory__value').text()
    expect(memory).toBe('512 GB')
  })

  it('customMemory', () => {
    const wrapper = mount(Memory, {
      propsData: {
        amountMemory: 1024
      }
    })
    const memory = wrapper.find('.memory__value').text()
    expect(memory).toBe('1024 GB')
  })
})