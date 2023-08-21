<template>
  <ShowButton v-model="settingVisible" />
  <el-drawer v-model="settingVisible" title="项目配置" :size="330">
    <ShowSetting />
  </el-drawer>
</template>

<script lang="ts" setup>
import ShowButton from './ShowButton.vue'
import ShowSetting from './ShowSetting.vue'

import { ref } from 'vue'

const settingVisible = ref(false)
</script>

<style lang="scss" scoped></style>
