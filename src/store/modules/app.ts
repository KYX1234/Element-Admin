import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: false,
    isMobile: false
  }),
  getters: {},
  actions: {
    /** 折叠菜单 */
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})
