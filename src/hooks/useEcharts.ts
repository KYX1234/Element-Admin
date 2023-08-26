import echarts, { type ECOption } from '@/utils/echarts';
import { useDebounceFn } from '@vueuse/core';
import { useThemeStore } from '@/store/modules/theme';
import { watch, onBeforeUnmount, markRaw, Ref } from 'vue';

export const useEcharts = (elRef: HTMLDivElement, options: Ref<ECOption>) => {
  let myChart: echarts.ECharts | null = null;

  const themeStore = useThemeStore();

  const initCharts = () => {
    const theme = themeStore.isDark ? 'dark' : 'default';
    myChart = markRaw(echarts.init(elRef, theme));
    setOptions(options.value);
  };

  const setOptions = (updateOptions: ECOption) => {
    myChart && myChart.setOption({ ...updateOptions, backgroundColor: 'transparent' });
  };

  const resize = useDebounceFn(() => {
    myChart && myChart.resize();
  }, 200);

  // 初始化执行
  initCharts();

  // 监听options
  watch(
    options,
    (newValue) => {
      setOptions(newValue);
    },
    { deep: true }
  );

  // 暗黑适配
  watch(
    () => themeStore.isDark,
    () => {
      if (myChart) {
        myChart.dispose();
        initCharts();
      }
    }
  );

  window.addEventListener('resize', resize);

  onBeforeUnmount(() => {
    if (!myChart) return;
    window.removeEventListener('resize', resize);
    myChart.dispose();
  });

  // 暴露函数
  return {
    myChart
  };
};
