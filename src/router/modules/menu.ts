import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/menu',
  name: 'menu',
  redirect: '/menu/menu1',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '多级菜单',
    icon: 'local-icon-menu',
    sort: 4
  },
  children: [
    {
      path: '/menu/menu1',
      name: 'menu_menu1',
      component: () => import('@/views/menu/menu1/index.vue'),
      meta: {
        title: '二级菜单',
        icon: 'local-icon-menu'
      }
    },
    {
      path: '/menu/menu2',
      name: 'menu_menu2',
      component: () => import('@/layout/parentLayout.vue'),
      meta: { title: '二级菜单', icon: 'local-icon-menu' },
      children: [
        {
          path: '/menu/menu2/menu21',
          name: 'menu_menu2_menu21',
          component: () => import('@/views/menu/menu2/index.vue'),
          meta: {
            title: '三级菜单',
            icon: 'local-icon-menu'
          }
        }
      ]
    }
  ]
} as RouteRecordRaw;
