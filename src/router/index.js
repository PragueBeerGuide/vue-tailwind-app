import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/orders'
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../components/Orders.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../components/ContactForm.vue')
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../components/Table.vue')
    }
  ]
})

export default router
