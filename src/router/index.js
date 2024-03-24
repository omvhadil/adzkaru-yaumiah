import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/:kitab',
      name: 'madad-home',
      component: () => import('../views/Categori.vue')
    },
    {
      path: '/:kitab/:category',
      name: 'dzikir',
      component: () => import('../views/Dzikir.vue')
    },
    {
      path: '/all-menus',
      name: 'all-menu',
      component: () => import('../views/AllMenu.vue')
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: () => import('../views/Tentang.vue')
    },
    // =======
    {
      path: '/desain-baru',
      name: 'desain-baru',
      component: () => import('../views/Desain.vue')
    },
  ]
})

router.afterEach(() => {
  window.scroll(0, 0);
});

export default router
