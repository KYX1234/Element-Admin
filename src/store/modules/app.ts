import { nextTick } from 'vue';
import { defineStore } from 'pinia';
import { storage } from '@/utils/storage';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isCollapse: false,
    isMobile: false,
    reloadFlag: true,
    language: storage.get('lang') ?? 'zh-CN'
  }),
  getters: {},
  actions: {
    setIsCollapse(collapse: boolean) {
      this.isCollapse = collapse;
    },
    setIsMobile(mobile: boolean) {
      this.isMobile = mobile;
    },
    setReloadFlag() {
      this.reloadFlag = false;
      nextTick(() => {
        this.reloadFlag = true;
      });
    },
    setLanguage(language: 'zh-CN' | 'en') {
      this.language = language;
      storage.set('lang', language);
    }
  }
});
