<template>
  <el-aside
    class="sider"
    :class="appStore.isSmallScreen ? 'fixed top-0 bottom-0 left-0' : ''"
    :width="collapseWidth"
  >
    <Logo />
    <Menu />
  </el-aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import { useAppStore } from '@/store/modules/app'
defineOptions({ name: 'Asider' })
const appStore = useAppStore()

const collapseWidth = computed(() => {
  if (appStore.isSmallScreen) {
    appStore.setIsCollapse(true)
    return appStore.isCollapse ? '0' : '210px'
  } else {
    return appStore.isCollapse ? '65px' : '210px'
  }
})
</script>

<style lang="scss" scoped>
.sider {
  @apply flex-col-stretch border-r test border-r-[var(--el-border-color-light)] transition-all duration-300;
}
</style>
