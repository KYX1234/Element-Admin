import { defineStore } from 'pinia'

interface ITabsViewState {
  /** 多页签数据 */
  tabsList: any[]
  /** 当前激活tab */
  activeTab: string
}

export const useTabsViewStore = defineStore({
  id: 'route',
  state: (): ITabsViewState => ({
    tabsList: [],
    activeTab: ''
  }),
  getters: {},
  actions: {
    /** 添加多页签 */
    addTab(tab: any) {
      this.tabsList.push(tab)
    }
  }
})
