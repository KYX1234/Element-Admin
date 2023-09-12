import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

export default [
  {
    url: '/mock/user',
    method: 'get',
    timeout: 1000,
    response: ({ query }: any) => {
      const result: any[] = [];
      const { page = 1, pageSize = 20 } = query;
      for (let i = 0; i < pageSize; i++) {
        result.push({
          id: '@integer(10,100)',
          name: '@cname()',
          avatar: Mock.Random.image('200x100', Mock.Random.color(), '#FFF', 'png', '!'),
          phone: /^1[34578]\d{9}$/,
          email: '@email',
          'role|1': ['超级管理员', '普通用户'],
          'sex|1': [0, 1],
          'status|1': [0, 1],
          creat_at: '@datetime',
          end_at: '@datetime'
        });
      }
      return {
        code: 200,
        message: 'ok',
        data: {
          page: +page,
          pageSize: +pageSize,
          total: 100,
          list: result
        }
      };
    }
  }
] as MockMethod[];
