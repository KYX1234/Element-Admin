import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets } from './plugins'

async function setupApp() {
	const app = createApp(App)

	// 静态资源css,js,font等
	setupAssets()

	// mount app
	app.mount('#app')
}

void setupApp()
