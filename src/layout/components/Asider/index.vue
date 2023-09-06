<template>
  <el-aside
    :class="['sider', appStore.isMobile && 'fixed top-0 bottom-0 left-0']"
    :width="collapseWidth"
  >
    <Logo />
    <Menu />
  </el-aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Logo from './Logo.vue';
import Menu from './Menu.vue';
import { useAppStore } from '@/store';

defineOptions({ name: 'Asider' });

const appStore = useAppStore();
const collapseWidth = computed(() => {
  if (appStore.isMobile) {
    return appStore.isCollapse ? '0' : '210px';
  } else {
    return appStore.isCollapse ? '65px' : '210px';
  }
});
</script>

<style lang="scss" scoped>
.sider {
  @apply flex-col-stretch bg-background  shadow-[0_0_1px_#888] z-99 transition-width duration-300;
}
</style>
