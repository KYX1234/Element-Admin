<template>
  <ShowButton v-model="settingVisible" />
  <el-drawer v-model="settingVisible" :title="$t('setting.projectSetting')" :size="330">
    <ShowSetting />
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ShowButton from './ShowButton.vue';
import ShowSetting from './ShowSetting.vue';

defineOptions({ name: 'AppSetting' });
const settingVisible = ref(false);
</script>

<style lang="scss" scoped></style>
