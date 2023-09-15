import { useEventListener } from '@vueuse/core';
import type { Directive, DirectiveBinding } from 'vue';

/**
 * v-debounce
 * 按钮防抖指令
 */
const debounce: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;

    let timer: NodeJS.Timeout | null = null;
    const delay = value.delay || 500;

    const handleFn = function () {
      if (value.immediate) {
        if (!timer) {
          value.fn();
        }
        clearTimeout(timer!);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      } else {
        clearTimeout(timer!);
        timer = setTimeout(() => {
          value.fn();
          timer = null;
        }, delay);
      }
    };
    useEventListener(el, value.event, handleFn);
  }
};

export default debounce;
