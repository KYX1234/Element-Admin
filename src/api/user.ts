import request from '@/utils/http';

/** 登录 */
export const login = (data: object) => {
  return request.post('/mock/api/login', data);
};

/** 登录 */
export const getUserInfo = () => {
  return request.get('/mock/api/userInfo');
};
