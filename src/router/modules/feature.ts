import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/feature',
  name: 'feature',
  redirect: '/feature/directives',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'menus.feature',
    icon: 'el-icon-setUp',
    sort: 6
  },
  children: [
    {
      path: '/feature/directives',
      name: 'feature_directives',
      component: () => import('@/views/feature/directives/index.vue'),
      meta: {
        title: 'menus.directives',
        icon: 'el-icon-more'
      }
    }
  ]
} as RouteRecordRaw;
