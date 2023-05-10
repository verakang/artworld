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
          path: 'newslist',
          component: () => import('../views/front/NewsList.vue')
        },
        {
          path: 'newsitem/:id',
          component: () => import('../views/front/NewsItem.vue')
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
          component: () => import('../views/front/CartView.vue'),
        },
        {
          path: 'order/:id',
          component: () => import('../views/front/OrderView.vue'),
        },
        {
          path: 'members',
          component: () => import('../views/front/MembersView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFound.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/admin/AdminCourses.vue'),
        },
        {
          path: 'courses',
          component: () => import('../views/admin/AdminCourses.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue'),
        },
        {
          path: 'news',
          component: () => import('../views/admin/AdminNews.vue'),
        }
      ]
    }
  ]
})

export default router
