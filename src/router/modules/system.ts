import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/system',
  name: 'system',
  redirect: '/system/menu',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting',
    sort: 5
  },
  children: [
    {
      path: '/system/menu',
      name: 'system_menu',
      component: () => import('@/views/system/menu/index.vue'),
      meta: {
        title: '菜单管理',
        icon: 'el-icon-more'
      }
    },
    {
      path: '/system/role',
      name: 'system_role',
      component: () => import('@/views/system/role/index.vue'),
      meta: { title: '角色管理', icon: 'el-icon-more' }
    },
    {
      path: '/system/user',
      name: 'system_user',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'el-icon-more'
      }
    }
  ]
} as RouteRecordRaw;
