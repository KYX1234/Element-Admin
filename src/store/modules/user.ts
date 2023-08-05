import { defineStore } from 'pinia'
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
    login() {},
    logout() {}
  }
})
