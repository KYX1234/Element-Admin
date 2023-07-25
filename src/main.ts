import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets } from './plugins'
import { setupRouter } from './router'

async function setupApp() {
  const app = createApp(App)

  // 静态资源css,js,font等
  setupAssets()

  // 引入vue-router
  await setupRouter(app)

  // mount app
  app.mount('#app')
}

void setupApp()
