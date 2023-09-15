import type { App } from 'vue';
import copy from '@/directives/copy';
import debounce from '@/directives/debounce';
import permission from '@/directives/permission';
import throttle from '@/directives/throttle';

export default function setupDirectives(app: App) {
  // 权限指令
  app.directive('permission', permission);
  // 复制指令
  app.directive('copy', copy);
  // 防抖指令
  app.directive('debounce', debounce);
  // 节流指令
  app.directive('throttle', throttle);
}
