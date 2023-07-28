import type { App } from 'vue'
import setupAssets from './assets'
import loadElementIcon from './element'

export default function install(app: App) {
  setupAssets()
  loadElementIcon(app)
}
