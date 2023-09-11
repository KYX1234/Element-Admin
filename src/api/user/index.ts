import request from '@/utils/http';
import { IUserItem } from './type';

export const userList = (params: any): Promise<App.RequestTableResult<IUserItem>> => {
  return request.get(`/mock/user`, { params });
};
