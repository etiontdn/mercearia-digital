import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/carrinho',
    name: 'CartView',
    component: () =>
      import(/* webpackChunkName: "cartView" */ '../views/cartView.vue'),
  },
  {
    path: '/produtos/:productName',
    name: 'ProductView',
    props: true,
    component: () =>
      import(/* webpackChunkName: "productView" */ '../views/ProductView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
