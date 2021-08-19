import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/items/:id',
    name: 'Details',
    component: () => import('../views/Details.vue'),
    props: true,
  },
  {
    path: '/allProducts',
    name: 'AllProducts',
    component: () => import('../views/AllProducts.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
