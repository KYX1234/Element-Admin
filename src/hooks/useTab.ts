import { useEventListener } from '@vueuse/core';
import { computed, reactive, ref, watch } from 'vue';

export function useTab() {
  const contextmenuLeft = ref(0);
  const contextmenuTop = ref(0);

  const contextmenuVisible = ref(false);
  const tabMenuOptions = reactive([
    {
      icon: 'local-icon-refresh',
      label: '刷新页面',
      key: 'refresh',
      show: true,
      disabled: false
    },
    {
      icon: 'el-icon-close',
      label: '关闭当前',
      key: 'closeCurrent',
      show: true,
      disabled: false
    },
    {
      icon: 'el-icon-dArrowLeft',
      label: '关闭左侧',
      key: 'closeLeft',
      show: true,
      disabled: false
    },
    {
      icon: 'el-icon-dArrowRight',
      label: '关闭右侧',
      key: 'closeRight',
      show: true,
      disabled: false
    },
    {
      icon: 'el-icon-switch',
      label: '关闭其他',
      key: 'closeOther',
      show: true,
      disabled: false
    },
    {
      icon: 'el-icon-minus',
      label: '关闭所有',
      key: 'closeAll',
      show: true,
      disabled: false
    }
  ]);
  const contextMenuStyle = computed(() => {
    return { left: contextmenuLeft.value + 'px', top: contextmenuTop.value + 'px' };
  });

  watch(
    () => contextmenuVisible.value,
    () => {
      useEventListener(document, 'click', () => (contextmenuVisible.value = false));
    }
  );
  return {
    contextmenuLeft,
    contextmenuTop,
    contextmenuVisible,
    tabMenuOptions,
    contextMenuStyle
  };
}
