import { createApp } from 'vue';
import App from './App.vue';
import install from './plugins';
import { setupRouter } from './router';
import { setupStore } from './store';

async function setupApp() {
  const app = createApp(App);

  // 插件注册&资源引入
  install(app);

  // 引入pinia
  setupStore(app);

  // 引入vue-router
  await setupRouter(app);

  app.mount('#app');
}

void setupApp();
