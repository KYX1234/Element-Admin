import { RouteRecordRaw } from 'vue-router';
const Layout = () => import('@/layout/index.vue');

/** 根路由 */
export const RootRoute: RouteRecordRaw = {
  name: 'root',
  path: '/',
  component: Layout,
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH
};

/** 登录 */
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录'
  }
};

/** 任意路由 */
export const PathMatchRoute: RouteRecordRaw = {
  name: 'not-found',
  path: '/:pathMatch(.*)*',
  component: Layout,
  meta: {
    title: '未找到'
  }
};
