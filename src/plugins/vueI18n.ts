import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { storage } from '@/utils/storage';
import messages from '@/locales';

export const i18n = createI18n({
  globalInjection: true, //全局生效$t
  locale: storage.get('lang') || 'zh-CN',
  fallbackLocale: 'en',
  messages,
  legacy: false
});

export default (app: App) => {
  app.use(i18n);
};
