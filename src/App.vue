<template>
  <el-config-provider :locale="zhCN">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/en'
import { useAppStore } from './store/modules/app'
import { storage } from './utils/storage'

const appStore = useAppStore()

function setDefaultTheme() {
  if (storage.get('isDark') !== null) {
    appStore.setIsDark(storage.get('isDark')!)
    return
  }
}
setDefaultTheme()
</script>

<style lang="scss" scoped></style>
