import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: storage.get('isCollapse') || false,
    isMobile: storage.get('isMobile') || false
  }),
  getters: {},
  actions: {
    setIsCollapse(collapse: boolean) {
      this.isCollapse = collapse
      storage.set('isCollapse', collapse)
    },
    setIsMobile(mobile: boolean) {
      this.isMobile = mobile
      storage.set('isMobile', mobile)
    }
  }
})
