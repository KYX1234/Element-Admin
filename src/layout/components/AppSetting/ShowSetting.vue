<template>
  <el-divider>界面显示</el-divider>
  <ul>
    <li class="flex-y-center justify-between py-1">
      <div>主题颜色</div>
      <el-color-picker v-model="appStore.themeColor" show-alpha :predefine="[]" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>深色主题</div>
      <el-switch
        :model-value="appStore.isDark"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="appStore.setIsDark"
      />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>显示面包屑</div>
      <el-switch v-model="appStore.breadCrumb" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>显示标签页</div>
      <el-switch v-model="appStore.navTab" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>菜单手风琴模式</div>
      <el-switch v-model="appStore.menuUnique" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>灰色模式</div>
      <el-switch :model-value="appStore.grayMode" @change="appStore.setGrayMode" />
    </li>
    <li class="flex-y-center justify-between py-1">
      <div>动画类型</div>
      <el-select v-model="appStore.animateMode" class="w-35">
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
import { useAppStore } from '@/store/modules/app'
import { Sunny, Moon } from '@element-plus/icons-vue'

const appStore = useAppStore()
const animateMode = [
  { label: '默认', value: 'zoom-fade' },
  { label: '滑动', value: 'fade-slide' },
  { label: '渐变', value: 'fade' },
  { label: '底部滑出', value: 'fade-bottom' },
  { label: '缩放消退', value: 'fade-scale' }
]
</script>

<style lang="scss" scoped></style>
