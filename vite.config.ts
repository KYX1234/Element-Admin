import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import { setupVitePlugins } from './build';
import pkg from './package.json';
import { resolve } from 'path';
import dayjs from 'dayjs';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
};

export default defineConfig((configEnv: ConfigEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8848,
      open: true,
      https: false,
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {}
    },
    plugins: setupVitePlugins(viteEnv),
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    define: { __APP_INFO__: JSON.stringify(__APP_INFO__) }
  };
});
