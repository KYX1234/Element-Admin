<template>
  <el-switch
    class="!absolute top-10 right-10 z-1"
    :model-value="appStore.isDark"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="appStore.setIsDark"
  />
</template>

<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
</script>

<style lang="scss" scoped></style>
