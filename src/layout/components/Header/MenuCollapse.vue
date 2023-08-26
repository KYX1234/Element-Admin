<template>
  <div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill" @click="toggleCollapse">
    <Icon name="local-icon-align-left" size="20" v-if="!appStore.isCollapse" />
    <Icon name="local-icon-align-right" size="20" v-else />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store';
const appStore = useAppStore();
const toggleCollapse = () => {
  appStore.setIsCollapse(!appStore.isCollapse);
};
</script>

<style lang="scss" scoped></style>
