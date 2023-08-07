import { defineStore } from 'pinia'
import router from '@/router'
import { login } from '@/api/user'
import { storage } from '@/utils/storage'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: storage.get('token'),
    userInfo: storage.get('userInfo') || { username: '', role: [] }
  }),
  getters: {
    isLogin(state) {
      return Boolean(state.token)
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      storage.set('token', token)
    },
    async login(params: any) {
      const { data } = await login(params)
      this.setToken(data.token)
      router.push((router.currentRoute.value.query?.redirect || '/') as string)
      ElNotification({
        title: '登录成功!',
        type: 'success',
        message: '欢迎回来，admin'
      })
    },
    logout() {
      ElMessageBox.confirm('您确定要退出登录吗？', '提示')
        .then(() => {
          storage.clear()
          this.$reset()
          router.push('/login')
        })
        .catch(() => {})
    }
  }
})
