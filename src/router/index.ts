import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Settings from '../pages/Settings.vue'
import Catalog from '../pages/Catalog.vue'
import Services from '../pages/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
  ]
})

export default router
