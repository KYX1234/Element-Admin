import type { App } from 'vue';
import setupAssets from './assets';
import setupI18n from './vueI18n';
import loadElementIcon from './element';

export default function install(app: App) {
  setupAssets();
  setupI18n(app);
  loadElementIcon(app);
}
