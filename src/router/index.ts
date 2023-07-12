import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogPage',
      name: 'blogPage',
      component: () => import('../views/blogPage/BlogPage.vue')
    },
    {
      path: '/blogPage/:id',
      name: 'blogPage',
      component: () => import('../views/blogContentPage/BlogPageContent.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutMe.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactMe.vue')
    }
  ]
})

export default router
