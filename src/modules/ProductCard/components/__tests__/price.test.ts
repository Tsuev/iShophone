import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { currencyFormatter } from '@/helpers/currencyFormatter'
import Price from '../price.vue'

describe('Price.vue', () => {
  it('should render correct price', () => {
    const wrapper = mount(Price, {
      propsData: {
        price: 100000,
        currency: 'RUB'
      }
    })

    expect(wrapper.find('.price').text())
      .toBe(currencyFormatter(100000, 'RUB'))
  })
})
