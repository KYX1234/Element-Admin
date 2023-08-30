import {
  useResizeObserver,
  MaybeComputedElementRef,
  breakpointsTailwind,
  useBreakpoints
} from '@vueuse/core';
import { useAppStore } from '@/store';
import { unref } from 'vue';

const appStore = useAppStore();

export function isMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const status = unref(breakpoints.smaller('sm'));
  appStore.setIsCollapse(status);
  appStore.setIsMobile(status);
  return status;
}

isMobile();

export function deviceDetection(target: MaybeComputedElementRef | MaybeComputedElementRef[]) {
  useResizeObserver(target, (entries) => {
    const { width } = entries[0].contentRect;
    // 兼容app
    if (width <= 640) {
      appStore.setIsMobile(true);
      !appStore.isCollapse && appStore.setIsCollapse(true);
    } else {
      appStore.setIsMobile(false);
    }
  });
}
