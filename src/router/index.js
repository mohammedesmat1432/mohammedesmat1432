import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Card from '../views/Card.vue';
import Moh from '../views/Moh.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/moh',
    name: 'Moh',
    component: Moh
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
