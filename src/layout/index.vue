<template>
  <el-container>
    <el-aside width="200px" class="flex-col-stretch sider">
      <Logo :show-title="collapsed" />
      <Menu />
    </el-aside>
    <el-container class="h-screen">
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-backtop title="回到顶部" />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Logo from './components/Logo/index.vue'
import Menu from './components/Menu/index.vue'
const collapsed = ref<boolean>(true)
</script>

<style lang="scss" scoped>
.sider {
  box-shadow: 2px 0 12px 0 rgba(0 0 0 / 8%);
}
</style>
