import { defineStore } from 'pinia'

interface ITabsViewState {
  /** 多页签数据 */
  tabsList: App.TabsView[]
  /** 当前激活tab */
  activeTab: string
}

export const useTabsViewStore = defineStore({
  id: 'tabsView',
  state: (): ITabsViewState => ({
    tabsList: [],
    activeTab: ''
  }),
  getters: {},
  actions: {
    /** 添加多页签 */
    addTab(tab: App.TabsView) {
      if (this.tabsList.some((v) => v.fullPath === tab.fullPath)) return
      if (tab.name) this.tabsList.push(tab)
    }
  }
})
