<template>
  <el-divider>界面显示</el-divider>
  <ul>
    <li class="flex-y-center justify-between py-1">
      <div>主题颜色</div>
      <el-color-picker
        v-model="themeStore.themeColor"
        :predefine="[]"
        @change="themeStore.setThemeColor"
      />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>深色主题</div>
      <el-switch
        :model-value="themeStore.isDark"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="themeStore.setIsDark"
      />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>显示面包屑</div>
      <el-switch v-model="themeStore.breadCrumb" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>显示标签页</div>
      <el-switch v-model="themeStore.navTab" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>菜单手风琴模式</div>
      <el-switch v-model="themeStore.menuUnique" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>灰色模式</div>
      <el-switch :model-value="themeStore.grayMode" @change="themeStore.setGrayMode" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>动画类型</div>
      <el-select v-model="themeStore.animateMode" class="w-35">
        <el-option
          v-for="item in animateMode"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import { Sunny, Moon } from '@element-plus/icons-vue'

const themeStore = useThemeStore()
const animateMode = [
  { label: '默认', value: 'zoom-fade' },
  { label: '滑动', value: 'fade-slide' },
  { label: '渐变', value: 'fade' },
  { label: '底部滑出', value: 'fade-bottom' },
  { label: '缩放消退', value: 'fade-scale' }
]
</script>

<style lang="scss" scoped></style>
