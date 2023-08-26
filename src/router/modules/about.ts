import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'about_index',
  path: '/about/index',
  component: () => import('@/views/about/index.vue'),
  meta: {
    title: '关于项目',
    icon: 'el-icon-Files',
    sort: 10
  }
} as RouteRecordRaw;
