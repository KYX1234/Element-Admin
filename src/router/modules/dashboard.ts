import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'dashboard',
  path: '/dashboard',
  component: () => import('@/layout/index.vue'),
  redirect: '/dashboard/analysis',
  meta: {
    title: '仪表盘',
    icon: 'el-icon-odometer',
    sort: 0
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
    },
    {
      name: 'dashboard_workbench',
      path: '/dashboard/workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        icon: 'el-icon-monitor'
      }
    }
  ]
} as RouteRecordRaw
