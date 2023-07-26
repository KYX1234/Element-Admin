<template>
  <el-config-provider :locale="zhCN">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/en'
</script>

<style lang="scss" scoped></style>
