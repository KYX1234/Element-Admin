<template>
  <el-card shadow="never">
    <template #header> 防抖节流指令</template>
    <div class="mb-4">
      <el-tag type="info">延迟防抖</el-tag>
      <el-input
        class="mt-2"
        v-model="state.debounce1"
        v-debounce="{
          event: 'input',
          fn: debounce,
          delay: 1000
        }"
        placeholder="请输入内容"
      />
    </div>
    <div class="mb-4">
      <el-tag type="info">立即防抖</el-tag>
      <el-input
        class="mt-2"
        v-model="state.debounce2"
        v-debounce="{
          event: 'input',
          fn: debounce,
          delay: 1000,
          immediate: true
        }"
        placeholder="请输入内容"
      />
    </div>
    <div class="mb-4">
      <el-tag type="info">节流指令</el-tag>
      <el-input
        class="mt-4"
        v-model="state.throttle3"
        v-throttle="{
          event: 'input',
          fn: throttle,
          delay: 1000
        }"
        placeholder="请输入内容"
      />
    </div>
    <div class="mb-4">
      <el-tag type="info">复制指令</el-tag>
      <el-text type="primary" class="!ml-2" v-copy="state.copy4">{{ state.copy4 }}</el-text>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  debounce1: '',
  debounce2: '',
  throttle3: '',
  copy4: '点我复制'
});
const debounce = () => {
  ElMessage.success('防抖成功');
};
const throttle = () => {
  ElMessage.success('节流成功');
};
</script>

<style lang="scss" scoped></style>
