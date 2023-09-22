<template>
  <el-card shadow="never" class="h-full">
    <el-button @click="setWatermark('测试水印')">设置全屏水印</el-button>
    <el-button @click="clear()">清除水印</el-button>
    <div ref="divRef" class="my-4 w-350 h-100 border-dotted border-2 border-primary"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { useWatermark } from '@/hooks/useWatermark';

import { onBeforeUnmount, ref, onMounted } from 'vue';

const divRef = ref();

const { setWatermark, clear } = useWatermark();
const { setWatermark: setPartWatermark, clear: clearPart } = useWatermark(divRef);

onMounted(() => {
  setPartWatermark('不可删除的水印', {
    forever: true,
    fillStyle: '#2ecc71'
  });
});

onBeforeUnmount(() => {
  clear();
  clearPart();
});
</script>

<style lang="scss" scoped></style>
