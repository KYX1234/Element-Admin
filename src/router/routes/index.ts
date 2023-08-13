import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')

/** 根路由 */
export const RootRoute: RouteRecordRaw = {
  name: 'root',
  path: '/',
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
  meta: {
    title: 'root'
  }
}

/** 登录 */
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录'
  }
}

/** error */
export const ErrorPageRoute: RouteRecordRaw = {
  path: '/error',
  name: 'error',
  redirect: '/error/404',
  component: Layout,
  meta: {
    title: 'error',
    hideBreadcrumb: true
  },
  children: [
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/404.vue')
    }
  ]
}
