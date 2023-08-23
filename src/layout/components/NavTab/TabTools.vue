<template>
  <div
    class="w-10 h-10 flex-center border-l border-stone-200 dark:border-stone-700 cursor-pointer"
    @click="handleRefresh"
  >
    <Icon name="local-icon-refresh" size="18" :class="{ 'animate-spin': loading }" />
  </div>
  <el-dropdown trigger="click">
    <div class="w-10 h-10 flex-center border-l border-stone-200 dark:border-stone-700">
      <Icon name="el-icon-arrowDown" size="18" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          @click="navTabStore.removeTab(route.fullPath)"
          :disabled="route.meta.affix"
        >
          <Icon name="el-icon-close" />
          关闭当前
        </el-dropdown-item>
        <el-dropdown-item @click="navTabStore.clearLeftTab(route.fullPath)">
          <Icon name="el-icon-dArrowLeft" />
          关闭左侧
        </el-dropdown-item>
        <el-dropdown-item @click="navTabStore.clearRightTab(route.fullPath)">
          <Icon name="el-icon-dArrowRight" />
          关闭右侧
        </el-dropdown-item>
        <el-dropdown-item @click="navTabStore.clearTabOther(route.fullPath)">
          <Icon name="el-icon-switch" />
          关闭其他
        </el-dropdown-item>
        <el-dropdown-item @click="navTabStore.clearTabAll">
          <Icon name="el-icon-minus" />
          关闭所有
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore, useNavTabStore } from '@/store'

const route = useRoute()
const appStore = useAppStore()
const navTabStore = useNavTabStore()
const loading = ref(false)
const handleRefresh = () => {
  loading.value = true
  appStore.setReloadFlag()
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped></style>
