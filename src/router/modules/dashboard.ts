import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'dashboard',
  path: '/dashboard',
  component: () => import('@/layout/index.vue'),
  redirect: '/dashboard/analysis',
  meta: {
    title: '仪表盘',
    icon: 'el-icon-odometer'
  },
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析页',
        icon: 'el-icon-dataLine',
        affix: true
      }
    }
  ]
} as RouteRecordRaw
