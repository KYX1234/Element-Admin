<template>
  <div class="search-form">
    <div class="header">
      <div class="header-l !<sm:hidden">{{ title }}</div>
      <div class="header-r">
        <el-button type="primary" @click="onShow">查询类型</el-button>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="content" v-if="visible">
      <el-row class="w-full">
        <el-col :span="20" :xs="24"> <slot></slot></el-col>
        <el-col :span="4" :xs="24" class="text-right mb-15px">
          <el-button type="primary" :icon="searchIcon" @click="emits('handleSearch')" />
          <el-button type="default" :icon="clearIcon" @click="emits('handleReset')" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useIcon } from '@/hooks/useIcon';
interface Props {
  title?: string;
}
withDefaults(defineProps<Props>(), {
  title: '搜索面板'
});
const emits = defineEmits(['handleSearch', 'handleReset']);
const visible = ref(true);
const searchIcon = useIcon({ name: 'el-icon-search' });
const clearIcon = useIcon({ name: 'local-icon-clear' });

const onShow = () => {
  visible.value = !visible.value;
};
</script>

<style lang="scss" scoped>
.search-form {
  padding: 20px;
  background: var(--el-bg-color-overlay);
  border-radius: 4px;
  color: var(--el-text-color-primary);
  margin-bottom: 10px;
  :deep(.header) {
    display: flex;
    justify-content: space-between;
    .header-l {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      &::before {
        display: inline-block;
        content: '';
        width: 4px;
        height: 50%;
        margin-right: 5px;
        background-color: var(--el-color-primary);
      }
    }
    .header-r {
      .el-button {
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }
  }
  :deep(.content) {
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    padding: 15px 10px 0;
    background-color: var(--el-fill-color-lighter);
    .el-form-item {
      margin-bottom: 15px;
    }
  }
}
.dark .search-form .content {
  background-color: var(--el-fill-color-light);
}
</style>
