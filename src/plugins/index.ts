import type { App } from 'vue';
import setupAssets from './assets';
import setupI18n from './vueI18n';
import setupDirectives from './directives';
import loadElementIcon from './element';

export default function install(app: App) {
  setupAssets();
  setupI18n(app);
  setupDirectives(app);
  loadElementIcon(app);
}
