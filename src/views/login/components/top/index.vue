<template>
  <div class="flex-y-center justify-between px-25 <sm:px-8 absolute top-0 right-0 left-0 h-20">
    <div class="flex-y-center">
      <Icon name="local-icon-logo" size="24" color="var(--el-color-primary)" />
      <div class="text-5 ml-4">Admin<span class="color-primary ml-1">PRO</span></div>
    </div>
    <div class="flex-y-center">
      <el-switch
        :model-value="themeStore.isDark"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="handleSetIsDark"
      />
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="flex-center h-5 w-10 cursor-pointer">
          <Icon name="local-icon-language" size="20" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :disabled="appStore.language === 'zh-CN'" command="zh-CN">
              简体中文
            </el-dropdown-item>
            <el-dropdown-item :disabled="appStore.language === 'en'" command="en">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useAppStore, useThemeStore } from '@/store';
import { useI18n } from 'vue-i18n';

const appStore = useAppStore();
const themeStore = useThemeStore();
const { locale } = useI18n();

const handleSetIsDark = (flag: any) => {
  themeStore.setIsDark(flag);
  themeStore.setThemeColor(themeStore.themeColor);
};
const handleCommand = (val: 'zh-CN' | 'en') => {
  locale.value = val;
  appStore.setLanguage(val);
};
</script>

<style lang="scss" scoped></style>
