import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/error',
  name: 'error',
  redirect: '/error/404',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'menus.errorPage',
    icon: 'el-icon-warning',
    sort: 3
  },
  children: [
    {
      path: '/error/403',
      name: '403',
      component: () => import('@/views/error/403.vue'),
      meta: {
        title: 'menus.403',
        icon: 'local-icon-403'
      }
    },
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/404.vue'),
      meta: { title: 'menus.404', icon: 'local-icon-404' }
    },
    {
      path: '/error/500',
      name: '500',
      component: () => import('@/views/error/500.vue'),
      meta: {
        title: 'menus.500',
        icon: 'local-icon-500'
      }
    }
  ]
} as RouteRecordRaw;
