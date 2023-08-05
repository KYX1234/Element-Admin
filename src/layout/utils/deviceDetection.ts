import { useResizeObserver, MaybeComputedElementRef } from '@vueuse/core'
export const isMobile = () => {
  return ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'].some((i: string) => {
    return navigator.userAgent.includes(i)
  })
}

export const deviceDetection = (target: MaybeComputedElementRef | MaybeComputedElementRef[]) => {
  return useResizeObserver(target, (entries) => {
    if (isMobile()) return
    const { width } = entries[0].contentRect
    console.log(width)
    // 兼容app
  })
}
