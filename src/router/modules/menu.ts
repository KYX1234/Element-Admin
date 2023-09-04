import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/menu',
  name: 'menu',
  redirect: '/menu/menu1',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'menus.multilevelMenu',
    icon: 'el-icon-memo',
    sort: 4
  },
  children: [
    {
      path: '/menu/menu1',
      name: 'menu_menu1',
      component: () => import('@/views/menu/menu1/index.vue'),
      meta: {
        title: 'menus.secondMenu',
        icon: 'el-icon-more'
      }
    },
    {
      path: '/menu/menu2',
      name: 'menu_menu2',
      component: () => import('@/layout/parentLayout.vue'),
      meta: { title: 'menus.secondMenu', icon: 'el-icon-more' },
      children: [
        {
          path: '/menu/menu2/menu21',
          name: 'menu_menu2_menu21',
          component: () => import('@/views/menu/menu2/index.vue'),
          meta: {
            title: 'menus.thirdMenu',
            icon: 'el-icon-more'
          }
        }
      ]
    }
  ]
} as RouteRecordRaw;
