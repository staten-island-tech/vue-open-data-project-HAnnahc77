import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chartOne',
      name: 'chartOne',
      component: () => import('../views/ChartOne.vue'),
    },
    {
      path: '/chartTwo',
      name: 'chartTwo',
      component: () => import('../views/ChartTwo.vue'),
    },
  ],
})

export default router
