import { useEventListener } from '@vueuse/core';
import type { Directive, DirectiveBinding } from 'vue';

/**
 * v-throttle
 * 按钮节流指令,规定时间内只能点击一次
 */
const throttle: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    let timer: NodeJS.Timeout | null = null;
    const delay = value.delay || 500;
    const handleFn = function () {
      if (timer) return;
      value.fn();
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    };
    useEventListener(el, value.event, handleFn);
  }
};

export default throttle;
