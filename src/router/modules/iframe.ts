import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/iframe',
  name: 'iframe',
  redirect: '/iframe/vue',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '外部页面',
    icon: 'el-icon-paperclip',
    sort: 6
  },
  children: [
    {
      path: 'https://juejin.cn/user/444659755917560',
      name: 'iframe_jiejin',
      meta: {
        title: '掘金主页(外链)',
        icon: 'el-icon-more'
      }
    },
    {
      path: '/iframe/element-plus',
      name: 'iframe_element_plus',
      component: () => import('@/views/iframe/index.vue'),
      meta: {
        title: 'element-plus文档',
        iframeLink: 'https://element-plus.gitee.io/zh-CN/',
        icon: 'el-icon-more'
      }
    }
  ]
} as RouteRecordRaw;
