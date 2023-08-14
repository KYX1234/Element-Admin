import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  name: 'error',
  redirect: '/error/404',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '异常页面',
    hideBreadcrumb: true
  },
  children: [
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/404.vue')
    }
  ]
} as RouteRecordRaw
