import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '@/views/AboutView.vue')
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: () => import( '@/views/TestimonialView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import( '@/views/ProjectView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import( '@views/ResumeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '@/views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
