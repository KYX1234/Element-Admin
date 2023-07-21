import * as ElementPlusIcons from '@element-plus/icons-vue'

export const LOCAL_ICON_PREFIX = 'local-icon-'
export const EL_ICON_PREFIX = 'el-icon-'
const elIconsName: string[] = []

for (const [, component] of Object.entries(ElementPlusIcons)) {
  elIconsName.push(`${EL_ICON_PREFIX}${component.name}`)
}

export function getElementPlusIconNames() {
  return elIconsName
}
// export function getLocalIconNames() {
//   return localIconsName
// }
