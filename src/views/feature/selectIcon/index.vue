<template>
  <el-card shadow="never">
    <div class="mb-2">
      <el-button @click="disabled = !disabled">禁用</el-button>
    </div>
    <select-icon v-model="icon" width="380" :disabled="disabled" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const icon = ref();
const disabled = ref(false);
</script>

<style lang="scss" scoped></style>
