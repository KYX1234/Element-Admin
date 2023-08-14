import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  name: 'error',
  redirect: '/error/404',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '异常页面',
    icon: 'el-icon-warning'
  },
  children: [
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/404.vue'),
      meta: { title: '404' }
    }
  ]
} as RouteRecordRaw
