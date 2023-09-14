export default [
  {
    url: '/mock/role', //获取角色
    method: 'get',
    timeout: 300,
    response: () => {
      return {
        code: 200,
        msg: '获取成功',
        data: [
          {
            id: 1,
            name: '系统管理员',
            roleId: 0,
            creat_at: '@now()',
            role_name: 'admin',
            menu_id: [1, 11, 12, 2, 21, 22, 23]
          },
          {
            id: 2,
            name: '测试用户',
            roleId: 1,
            role_name: 'test',
            creat_at: '@now()',
            menu_id: [1, 11, 12]
          }
        ]
      };
    }
  }
];
