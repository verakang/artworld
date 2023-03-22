import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/front/HomeView.vue')
        },        
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'news',
          component: () => import('../views/front/NewsView.vue')
        },
        {
          path: 'courses',
          component: () => import('../views/front/CoursesView.vue'),
        },
        {
          path: 'course/:id',
          component: () => import('../views/front/CourseView.vue'),
        },
        {
          path: 'cart',
          component: () => import('../views/front/CartView.vue')
        },
        {
          path: 'members',
          component: () => import('../views/front/MembersView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFound.vue')
        }
      ]
    }
  ]
})

export default router
