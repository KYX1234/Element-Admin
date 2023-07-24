import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_LOCAL_ICON_PREFFIX } = viteEnv

  return [
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()]
    }),
    createSvgIconsPlugin({
      iconDirs: ['src/assets/svg'],
      symbolId: `${VITE_LOCAL_ICON_PREFFIX}-[dir]-[name]`
    })
  ]
}
