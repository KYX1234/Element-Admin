<template>
  <el-aside
    :width="app.isCollapse ? '65px' : '210px'"
    class="flex-col-stretch border-r border-r-[var(--el-border-color-light)] transition-width duration-300"
  >
    <Logo />
    <Menu />
  </el-aside>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import { useAppStore } from '@/store/modules/app'
defineOptions({ name: 'Asider' })
const app = useAppStore()
</script>

<style lang="scss" scoped></style>
