import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Register from '@/views/Account/Register.vue';
import Home from '@/views/Home/Home.vue';
import NotFound from '@/views/Errors/404.vue';
import RegisterEvent from '@/views/Event/Register.vue';
import Login from '@/views/Account/Login.vue';
import Account from '@/views/Account/Account.vue';

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
    path: '/conta',
    name: 'account',
    component: Account,
  },

  {
    path: '/eventos',
    name: 'events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "listevents" */ '@/views/Event/ListEvents.vue'),
  },
  {
    path: '/evento/criar',
    name: 'eventCreate',
    component: RegisterEvent,
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
    next({ path: '/eventos' });
  } else {
    next();
  }
});

export default router;
