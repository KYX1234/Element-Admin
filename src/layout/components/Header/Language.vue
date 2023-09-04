<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill">
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
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/store';

const appStore = useAppStore();
const { locale, t } = useI18n();

const handleCommand = (val: 'zh-CN' | 'en') => {
  locale.value = val;
  appStore.setLanguage(val);
  ElMessage.success(t('common.switchLanguage'));
};
</script>

<style lang="scss" scoped></style>
