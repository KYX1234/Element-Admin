<template>
  <div
    class="w-10 h-10 flex-center border-l border-stone-200 dark:border-stone-700 cursor-pointer"
    @click="handleRefresh"
  >
    <Icon name="local-icon-refresh" size="18" :class="{ 'animate-spin': loading }" />
  </div>
  <el-dropdown trigger="click" @command="handleCommand" @visible-change="handleOpen">
    <div class="w-10 h-10 flex-center border-l border-stone-200 dark:border-stone-700">
      <Icon name="el-icon-arrowDown" size="18" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in options"
          :key="item.key"
          :command="item.key"
          :disabled="item.disabled"
        >
          <Icon :name="item.icon" />
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAppStore, useNavTabStore } from '@/store';
import { useRoute } from 'vue-router';

interface Props {
  currentPath: string;
  options: any;
}
defineProps<Props>();
const emit = defineEmits(['updateStatus']);
const route = useRoute();
const appStore = useAppStore();
const navTabStore = useNavTabStore();
const loading = ref(false);

const handleRefresh = () => {
  loading.value = true;
  appStore.setReloadFlag();
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
const handleCommand = (key: string) => {
  switch (key) {
    case 'refresh':
      appStore.setReloadFlag();
      break;
    case 'closeCurrent':
      navTabStore.closeCurrent(route.fullPath);
      break;
    case 'closeLeft':
      navTabStore.closeLeft(route.fullPath);
      break;
    case 'closeRight':
      navTabStore.closeRight(route.fullPath);
      break;
    case 'closeOther':
      navTabStore.closeOther(route.fullPath);
      break;
    case 'closeAll':
      navTabStore.closeAll();
      break;
    default:
      break;
  }
};
const handleOpen = () => {
  emit('updateStatus');
};
</script>

<style lang="scss" scoped></style>
