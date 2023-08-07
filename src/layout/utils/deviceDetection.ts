import { useResizeObserver, MaybeComputedElementRef } from '@vueuse/core'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

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