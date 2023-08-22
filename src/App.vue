<template>
  <el-config-provider :locale="zhCN">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/en'
import { useThemeStore } from './store/modules/theme'
import { storage } from './utils/storage'

const themeStore = useThemeStore()

function setDefaultTheme() {
  if (storage.get('themeSetting')?.isDark) {
    themeStore.setIsDark(true)
  }
  if (storage.get('themeSetting')?.themeColor) {
    themeStore.setThemeColor(themeStore.themeColor)
  }
}
setDefaultTheme()
</script>

<style lang="scss" scoped></style>
