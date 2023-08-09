<template>
  <div
    v-if="showButton"
    class="fixed flex-center w-10 h-10 right-0 bg-primary top-50% rounded-l-md cursor-pointer"
    @click="settingVisible = true"
  >
    <Icon name="el-icon-setting" size="22" color="#fff" />
  </div>
  <el-drawer v-model="settingVisible" title="项目配置" :size="330">
    <el-divider>主题</el-divider>
    <el-row justify="center">
      <el-switch
        :model-value="appStore.isDark"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="appStore.setIsDark"
      />
    </el-row>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useAppStore } from '@/store/modules/app'
// 生产模式不需要可自行修改
const showButton = import.meta.env.DEV || import.meta.env.VITE_APP_SETTING === 'Y'
const appStore = useAppStore()
const settingVisible = ref(false)
</script>

<style lang="scss" scoped></style>
