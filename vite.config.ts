import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import { setupVitePlugins } from './build';

export default defineConfig((configEnv: ConfigEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  return {
    plugins: setupVitePlugins(viteEnv)
  }
})
