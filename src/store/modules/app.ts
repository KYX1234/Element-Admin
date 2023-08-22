import { nextTick } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: false,
    isMobile: false,
    reloadFlag: true
  }),
  getters: {},
  actions: {
    setIsCollapse(collapse: boolean) {
      this.isCollapse = collapse
    },
    setIsMobile(mobile: boolean) {
      this.isMobile = mobile
    },
    setReloadFlag() {
      this.reloadFlag = false
      nextTick(() => {
        this.reloadFlag = true
      })
    }
  }
})
