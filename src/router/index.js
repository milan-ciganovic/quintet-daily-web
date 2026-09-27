import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Quintet Daily — Five questions. Every day.' },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
      meta: { title: 'Privacy Policy — Quintet Daily' },
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
      meta: { title: 'Terms of Service — Quintet Daily' },
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportView.vue'),
      meta: { title: 'Support — Quintet Daily' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

// No SSR/prerendering here (see README) — this sets the tab title per
// route, but a link-preview bot that doesn't run JavaScript will only ever
// see the title from index.html, not this.
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
