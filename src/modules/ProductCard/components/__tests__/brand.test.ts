import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Brand from '../brand.vue'

describe('Brand', () => {
  it('renders an image with a given path', () => {
    const path = 'http://example.com/image.png';
    const wrapper = mount(Brand, { propsData: { path } });
    expect(wrapper.find('.brand').attributes('src')).toBe(path);
  });
});