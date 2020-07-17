import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register.vue';
import Home from '@/views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/listEvents',
    name: 'events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "listevents" */ '../views/ListEvents.vue'),
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
