<template>
  <div class="flex-y-center justify-between px-20 absolute top-0 right-0 left-0 h-20">
    <div class="flex-y-center">
      <Icon name="local-icon-logo" size="24" color="var(--el-color-primary)" />
      <div class="text-5 ml-4">admin<span class="color-primary ml-1">PRO</span></div>
    </div>
    <el-switch
      :model-value="themeStore.isDark"
      inline-prompt
      :active-icon="Sunny"
      :inactive-icon="Moon"
      @change="handleSetIsDark"
    />
  </div>
</template>

<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useThemeStore } from '@/store';

const themeStore = useThemeStore();
const handleSetIsDark = (flag: any) => {
  themeStore.setIsDark(flag);
  themeStore.setThemeColor(themeStore.themeColor);
};
</script>

<style lang="scss" scoped></style>
