import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import unocss from '@unocss/vite';
import unplugin from './unplugin'; //UI&Icon
import mock from './mock'; //mock(默认开启)
import compress from './compress'; //压缩工具
import visualizer from './visualizer'; //打包分析
import progress from 'vite-plugin-progress'; //打包进度显示
import VueDevtools from 'vite-plugin-vue-devtools'; //开发工具

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue(),
    vueJsx(),
    VueDevtools(),
    ...unplugin(viteEnv),
    mock(viteEnv),
    unocss(),
    progress()
  ];
  if (viteEnv.VITE_COMPRESS === 'Y') {
    plugins.push(compress(viteEnv));
  }
  if (viteEnv.VITE_VISUALIZER === 'Y') {
    plugins.push(visualizer);
  }
  return plugins;
}
