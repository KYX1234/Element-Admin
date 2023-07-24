import * as ElementPlusIcons from '@element-plus/icons-vue'
//@ts-ignore
import localIconsName from 'virtual:svg-icons-names'

const { EL_ICON_PREFIX } = import.meta.env

export function getElIconNames() {
  return Object.values(ElementPlusIcons).map((component) => `${EL_ICON_PREFIX}-${component.name}`)
}

export function getLocalIconNames() {
  return localIconsName
}
