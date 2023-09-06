<template>
  <el-divider>{{ $t('setting.interfaceShow') }}</el-divider>
  <ul>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.themeColor') }}</div>
      <el-color-picker
        v-model="themeStore.themeColor"
        :predefine="['#646CFF', '#12A34A', '#0777BC', '#8760DC', '#BC0743', '#BC7707']"
        @change="themeStore.setThemeColor"
      />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.darkTheme') }}</div>
      <el-switch
        :model-value="themeStore.isDark"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="handleSetIsDark"
      />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.menuMode') }}</div>
      <el-switch
        :model-value="themeStore.menuMode"
        active-value="dark"
        inactive-value="light"
        @change="themeStore.setMenuMode"
      />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.breadCrumb') }}</div>
      <el-switch :model-value="themeStore.breadCrumb" @change="themeStore.setBreadCrumb" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.navTab') }}</div>
      <el-switch :model-value="themeStore.navTab" @change="themeStore.setNavTab" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.navTabIcon') }}</div>
      <el-switch :model-value="themeStore.navTabIcon" @change="themeStore.setNavTabIcon" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.menuUnique') }}</div>
      <el-switch :model-value="themeStore.menuUnique" @change="themeStore.setMenuUnique" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.grayMode') }}</div>
      <el-switch :model-value="themeStore.grayMode" @change="themeStore.setGrayMode" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>{{ $t('setting.animateMode') }}</div>
      <el-select
        :model-value="themeStore.animateMode"
        class="w-35"
        @change="themeStore.setAnimateMode"
      >
        <el-option
          v-for="item in animateMode"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </li>
  </ul>
  <el-divider>{{ $t('setting.tips') }}</el-divider>
  <el-alert
    title="配置栏只在开发环境用于预览，生产环境不会展现，请手动修改配置文件 /src/config/theme"
    type="warning"
    :closable="false"
  />
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';
import { Sunny, Moon } from '@element-plus/icons-vue';

const themeStore = useThemeStore();
const animateMode = [
  { label: '默认', value: 'zoom-fade' },
  { label: '滑动', value: 'fade-slide' },
  { label: '渐变', value: 'fade' },
  { label: '底部滑出', value: 'fade-bottom' },
  { label: '缩放消退', value: 'fade-scale' }
];
const handleSetIsDark = (flag: any) => {
  themeStore.setIsDark(flag);
  themeStore.setThemeColor(themeStore.themeColor);
};
</script>

<style lang="scss" scoped></style>
