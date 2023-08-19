import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: false,
    isMobile: false,
    isDark: storage.get('isDark') || false,
    reloadFlag: true,
    transitionName: 'fade'
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
      if (dark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      storage.set('isDark', dark)
    },
    setReloadFlag() {
      this.reloadFlag = false
      nextTick(() => {
        this.reloadFlag = true
      })
    }
  }
})
