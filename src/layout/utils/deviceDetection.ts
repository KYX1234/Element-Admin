import { useResizeObserver, MaybeComputedElementRef } from '@vueuse/core'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
appStore.setIsMobile(isMobile())

function isMobile() {
  return ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'].some((i: string) => {
    return navigator.userAgent.includes(i)
  })
}

export function deviceDetection(target: MaybeComputedElementRef | MaybeComputedElementRef[]) {
  useResizeObserver(target, (entries) => {
    if (appStore.isMobile) return
    const { width } = entries[0].contentRect
    // 兼容app
    if (width <= 640) {
      appStore.setSmallScreen(true)
    } else {
      appStore.setSmallScreen(false)
    }
  })
}
