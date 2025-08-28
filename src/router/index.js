import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudyView from '../views/StudyView.vue'
import WebDesignView from '../views/WebDesignView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/study',
    name: 'study',
    component: StudyView
  },
  {
    path: '/wd',
    name: 'webdesign',
    component: WebDesignView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
