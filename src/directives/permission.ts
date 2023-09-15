import { ObjectDirective } from 'vue';
import { usePermission } from '@/hooks/usePermission';
/**
 * v-permission
 * 权限指令
 */
const permission: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding) {
    if (binding.value == undefined) return;
    const { hasPermission } = usePermission();
    if (!hasPermission(binding.value)) el.remove();
  }
};

export default permission;
