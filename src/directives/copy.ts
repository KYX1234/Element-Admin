import { useEventListener } from '@vueuse/core';
import type { Directive, DirectiveBinding } from 'vue';
interface ElType extends HTMLElement {
  copyData: string | number;
}
/**
 * v-copy
 * 复制某个值至剪贴板
 */
const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
    useEventListener(el, 'click', handleFn);
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
  }
};

function handleFn(this: any) {
  const input = document.createElement('input');
  input.value = this.copyData.toLocaleString();
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  ElMessage.success('复制成功');
}

export default copy;
