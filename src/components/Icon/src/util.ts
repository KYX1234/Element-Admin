import * as ElementPlusIcons from '@element-plus/icons-vue';
//@ts-ignore
import localIconsName from 'virtual:svg-icons-names';

export const VITE_EL_ICON_PREFIX = import.meta.env.VITE_EL_ICON_PREFIX;
export const VITE_LOCAL_ICON_PREFIX = import.meta.env.VITE_LOCAL_ICON_PREFIX;

export function getElIconNames() {
  return Object.values(ElementPlusIcons).map(
    (component) => `${VITE_EL_ICON_PREFIX}-${component.name}`
  );
}

export function getLocalIconNames() {
  return localIconsName;
}
