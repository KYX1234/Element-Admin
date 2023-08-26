<template>
  <el-config-provider :locale="zhCN">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'element-plus/es/locale/lang/zh-cn';
// import en from 'element-plus/es/locale/en'
import { useThemeStore } from '@/store';
import { storage } from '@/utils/storage';

const themeStore = useThemeStore();

function setDefaultTheme() {
  const themeSetting = storage.get('themeSetting');
  if (themeSetting?.isDark) {
    themeStore.setIsDark(true);
  }
  if (themeSetting?.themeColor) {
    themeStore.setThemeColor(themeSetting?.themeColor);
  }
}
setDefaultTheme();
</script>

<style lang="scss" scoped></style>
