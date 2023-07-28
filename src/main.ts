import { createApp } from 'vue'
import App from './App.vue'
import install from './plugins'
import { setupRouter } from './router'

async function setupApp() {
  const app = createApp(App)

  // 插件注册&资源引入
  install(app)

  // 引入vue-router
  await setupRouter(app)

  // mount app
  app.mount('#app')
}

void setupApp()
