import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { inject } from 'vue'

const appConfig = inject('app_config')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHistory(config.publicPath),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
