import request from '@/utils/http';

export const roleList = (): Promise<App.RequestTableResult> => {
  return request.get(`/mock/role`);
};
