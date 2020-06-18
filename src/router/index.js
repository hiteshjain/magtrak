// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/components/common/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/components/views/Home.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/components/views/About.vue'),
        },
        {
            path: 'products',
            name: 'Products',
            component: () => import('@/components/views/Products.vue'),
        },
        {
            path: 'contact',
            name: 'Contact',
            component: () => import('@/components/views/Contact.vue'),
        },
      ],
    },

  ],
})

export default router
