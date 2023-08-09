import {
  useResizeObserver,
  MaybeComputedElementRef,
  breakpointsTailwind,
  useBreakpoints
} from '@vueuse/core'
import { useAppStore } from '@/store/modules/app'
import { unref } from 'vue'
import { storage } from '@/utils/storage'

const appStore = useAppStore()

export function isMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const status = unref(breakpoints.smaller('sm'))
  appStore.setIsCollapse(status)
  appStore.setIsMobile(status)
  return status
}

isMobile()

export function setDefaultTheme() {
  if (storage.get('isDark') !== null) {
    appStore.setIsDark(storage.get('isDark')!)
    return
  }
}
setDefaultTheme()

export function deviceDetection(target: MaybeComputedElementRef | MaybeComputedElementRef[]) {
  useResizeObserver(target, (entries) => {
    const { width } = entries[0].contentRect
    // 兼容app
    if (width <= 640) {
      appStore.setIsMobile(true)
      !appStore.isCollapse && appStore.setIsCollapse(true)
    } else {
      appStore.setIsMobile(false)
    }
  })
}
