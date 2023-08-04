<template>
  <el-aside width="200px" class="flex-col-stretch sider">
    <Logo :show-title="collapsed" />
    <Menu />
  </el-aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'
const collapsed = ref<boolean>(true)
</script>

<style lang="scss" scoped></style>
