import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: () => import('../views/AboutMe.vue')
  },
  {
    path: '/skill',
    name: 'mySkill',
    component: () => import('../views/MySkill.vue')
  },
  {
    path: '/portFolio',
    name: 'portFolio',
    component: () => import('../views/MyPortfolio.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
