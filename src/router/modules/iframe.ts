import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/iframe',
  name: 'iframe',
  redirect: '/iframe/vue',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'menus.externalPage',
    icon: 'el-icon-paperclip',
    sort: 6
  },
  children: [
    {
      path: 'https://juejin.cn/user/444659755917560',
      name: 'iframe_jiejin',
      meta: {
        title: 'menus.juejinPage',
        icon: 'el-icon-more'
      }
    },
    {
      path: '/iframe/element-plus',
      name: 'iframe_element_plus',
      component: () => import('@/views/iframe/index.vue'),
      meta: {
        title: 'menus.elementDocs',
        iframeLink: 'https://element-plus.gitee.io/zh-CN/',
        icon: 'el-icon-more'
      }
    }
  ]
} as RouteRecordRaw;
