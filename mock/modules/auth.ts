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
  }
] as MockMethod[];
