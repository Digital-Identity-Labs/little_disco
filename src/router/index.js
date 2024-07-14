import { createRouter, createWebHistory } from 'vue-router'
import InteractiveView from '../views/InteractiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHistory(config.publicPath),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InteractiveView,
      meta: {
        title: 'Selector'
      }
    }
  ]
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Sho'
})

export default router
