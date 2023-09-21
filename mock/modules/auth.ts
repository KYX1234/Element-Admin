import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/mock/api/login',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        message: 'ok',
        data: {
          token: `${body.username}_@string`
        }
      };
    }
  },
  {
    url: '/mock/api/userInfo',
    timeout: 200,
    method: 'get',
    response: (options) => {
      const role = options.headers.authorization.split('_')[0];
      const roleName = role === 'admin' ? '系统管理员' : '普通用户';
      return {
        code: 200,
        message: 'ok',
        data: {
          username: roleName,
          role: role
        }
      };
    }
  },
  {
    url: '/mock/api/menuList',
    timeout: 200,
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            id: 1,
            pid: 0,
            title: '首页',
            path: '/dashboard',
            component: '',
            icon: 'el-icon-odometer',
            hidden: 0,
            sort: 1,
            type: 0,
            children: [
              {
                id: 11,
                pid: 1,
                title: '分析页',
                path: '/dashboard/analysis',
                icon: 'el-icon-dataLine',
                component: '/dashboard/analysis/index',
                hidden: 0,
                sort: 0,
                type: 1
              },
              {
                id: 12,
                pid: 1,
                title: '工作台',
                path: '/dashboard/workbench',
                component: '/dashboard/workbench/index',
                icon: 'el-icon-monitor',
                hidden: 0,
                sort: 0,
                type: 1
              }
            ]
          },
          {
            id: 2,
            pid: 0,
            title: '系统管理',
            path: '/system',
            component: '',
            icon: 'el-icon-setting',
            hidden: 0,
            sort: 2,
            type: 0,
            children: [
              {
                id: 21,
                pid: 2,
                title: '菜单管理',
                path: '/system/menu',
                component: '/system/menu/index',
                icon: 'el-icon-more',
                hidden: 0,
                sort: 0,
                type: 1
              },
              {
                id: 22,
                pid: 2,
                title: '角色管理',
                path: '/system/role',
                component: '/system/role/index',
                icon: 'el-icon-more',
                hidden: 0,
                sort: 0,
                type: 1
              },
              {
                id: 23,
                pid: 2,
                title: '用户管理',
                path: '/system/user',
                component: '/system/user/index',
                icon: 'el-icon-more',
                hidden: 0,
                sort: 0,
                type: 1
              }
            ]
          }
        ]
      };
    }
  }
] as MockMethod[];
