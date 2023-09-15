import { defineStore } from 'pinia';
import router from '@/router';
import { getUserInfo, login } from '@/api/auth';
import { storage } from '@/utils/storage';
import { useNavTabStore } from './navTab';

interface IUserState {
  token: string | null;
  userInfo: {
    username: string;
    role: string;
  };
  permissions: string[];
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    token: storage.get('token'),
    userInfo: storage.get('userInfo') || { username: '', role: '' },
    permissions: []
  }),
  getters: {
    isLogin(state) {
      return Boolean(state.token);
    }
  },
  actions: {
    resetUser() {
      const navTabStore = useNavTabStore();
      storage.remove('userInfo');
      storage.remove('token');
      navTabStore.reset();
      this.$reset();
    },
    setToken(token: string) {
      this.token = token;
      storage.set('token', token);
    },
    async setUserInfo() {
      const { data } = await getUserInfo();
      if (data?.permissions?.length) this.setPermissions(data.permissions);
      this.userInfo = data;
      storage.set('userInfo', data);
    },
    setPermissions(permissions: string[]) {
      this.permissions = permissions;
    },
    async login(params: any) {
      const { data } = await login(params);
      this.setToken(data.token);
      router.push((router.currentRoute.value.query?.redirect || '/') as string);
      await this.setUserInfo();
      ElNotification({
        title: '登录成功!',
        type: 'success',
        message: `欢迎回来，${this.userInfo.username}`
      });
    },
    logout() {
      ElMessageBox.confirm('您确定要退出登录吗？', '提示')
        .then(() => {
          this.resetUser();
          router.push('/login');
        })
        .catch(() => {});
    }
  }
});
