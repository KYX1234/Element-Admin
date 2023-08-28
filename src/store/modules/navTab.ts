import { defineStore } from 'pinia';
import router from '@/router';
import { storage } from '@/utils/storage';

interface INavTabState {
  /** 多页签数据 */
  tabsList: App.TabsView[];
}

export const useNavTabStore = defineStore({
  id: 'navTab',
  state: (): INavTabState => ({
    tabsList: []
  }),
  getters: {},
  actions: {
    resetTab() {
      storage.remove('navTab');
      this.$reset();
    },
    /** 添加多页签 */
    addTab(tab: App.TabsView) {
      if (this.tabsList.some((v: App.TabsView) => v.fullPath === tab.fullPath)) return;
      if (tab.name) this.tabsList.push(tab);
      storage.set('navTab', this.tabsList);
    },

    /** 删除多页签 */
    removeTab(fullPath: string) {
      const isActive = router.currentRoute.value.fullPath === fullPath;
      const newTabsList = this.tabsList.filter((v) => v.fullPath !== fullPath);
      if (newTabsList && isActive) {
        router.push(newTabsList[newTabsList.length - 1].fullPath);
      }
      this.tabsList = newTabsList;
      storage.set('navTab', this.tabsList);
    },
    /** 关闭左侧多页签 */
    clearLeftTab(fullPath: string) {
      const index = this.tabsList.findIndex((v) => v.fullPath === fullPath);
      if (index >= 0) {
        const filterTabs = this.tabsList.slice(0, index).filter((v) => v.affix);
        this.tabsList = [...filterTabs, ...this.tabsList.slice(index)];
        storage.set('navTab', this.tabsList);
      }
    },
    /** 关闭右侧多页签 */
    clearRightTab(fullPath: string) {
      const index = this.tabsList.findIndex((v) => v.fullPath === fullPath);
      if (index >= 0) {
        const filterTabs = this.tabsList.slice(index + 1).filter((v) => v.affix);
        this.tabsList = [...this.tabsList.slice(0, index + 1), ...filterTabs];
        storage.set('navTab', this.tabsList);
      }
    },
    /** 关闭其他多页签 */
    clearTabOther(fullPath: string) {
      const newTabsList = this.tabsList.filter((v) => v.affix || v.fullPath === fullPath);
      this.tabsList = newTabsList;
      storage.set('navTab', this.tabsList);
    },
    /** 清空多页签 */
    clearTabAll() {
      const newTabsList = this.tabsList.filter((v) => v.affix);
      if (newTabsList.length) router.push(newTabsList[newTabsList.length - 1].fullPath);
      this.tabsList = newTabsList;
      storage.set('navTab', this.tabsList);
    }
  }
});
