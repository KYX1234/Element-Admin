import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: false,
    isMobile: false,
    isSmallScreen: false
  }),
  getters: {},
  actions: {
    setIsCollapse(collapse: boolean) {
      this.isCollapse = collapse
    },
    setIsMobile(mobile: boolean) {
      this.isMobile = mobile
    },
    setSmallScreen(smallScreen: boolean) {
      this.isSmallScreen = smallScreen
    }
  }
})
