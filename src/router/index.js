import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Register from '@/views/Register.vue';
import Home from '@/views/Home.vue';
import NotFound from '@/views/404.vue';
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
    path: '/events',
    name: 'events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "listevents" */ '@/views/ListEvents.vue'),
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Register,
  },
  {
    path: '*',
    name: 'not-found-404',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`Authorized login ${store.getters['auth/isAuthorized']}`);
  if (to.name !== 'login'
      && to.name !== 'cadastrar'
      && to.name !== 'home'
      && !store.getters['auth/isAuthorized']) next({ path: '/login' });
  else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  console.log(`Authorized  events ${store.getters['auth/isAuthorized']}`);
  if ((to.name === 'login' || to.name === 'cadastrar')
        && store.getters['auth/isAuthorized']) {
    next({ path: '/events' });
  } else {
    next();
  }
});

export default router;
