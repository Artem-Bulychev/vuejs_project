/* eslint-disable no-undef */
import Main from '@/pages/Main.vue';
// eslint-disable-next-line import/no-unresolved
import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line import/extensions, import/no-unresolved
import UserPage from '../pages/UserPage.vue';
import About from '../pages/About.vue';
import PostIdPage from '../pages/PostIdPage.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: UserPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
];

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
