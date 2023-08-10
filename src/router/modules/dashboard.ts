export default {
  name: 'dashboard',
  path: '/dashboard',
  component: 'layout',
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: '/dashboard/analysis/index',
      meta: {
        title: '分析页',
        icon: 'el-icon-dataLine'
      }
    }
  ],
  meta: {
    title: '仪表盘',
    icon: 'el-icon-odometer'
  }
}
