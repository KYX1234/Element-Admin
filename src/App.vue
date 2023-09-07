<template>
  <el-config-provider :locale="language">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAppStore, useThemeStore } from '@/store';
import { storage } from '@/utils/storage';
import zhCN from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

const appStore = useAppStore();
const themeStore = useThemeStore();
const language = computed(() => (appStore.language === 'zh-CN' ? zhCN : en));

const setDefaultTheme = () => {
  themeStore.setMenuMode(themeStore.menuMode);

  const themeSetting = storage.get('themeSetting');

  if (themeSetting?.isDark) {
    themeStore.setIsDark(true);
  }

  if (themeSetting?.themeColor) {
    themeStore.setThemeColor(themeSetting?.themeColor);
  }
};
setDefaultTheme();
</script>

<style lang="scss" scoped></style>
