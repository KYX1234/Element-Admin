import { storage } from '@/utils/storage'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: false,
    isMobile: false,
    isDark: storage.get('isDark') || false
  }),
  getters: {},
  actions: {
    setIsCollapse(collapse: boolean) {
      this.isCollapse = collapse
    },
    setIsMobile(mobile: boolean) {
      this.isMobile = mobile
    },
    setIsDark(dark: boolean) {
      this.isDark = dark
      document.documentElement.classList.toggle('dark')
      storage.set('isDark', dark)
    }
  }
})
