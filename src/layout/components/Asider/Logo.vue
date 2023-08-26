<template>
  <router-link to="/" class="flex-center shrink-0 h-14 w-full nowrap-hidden">
    <Icon name="local-icon-logo" size="30" color="var(--el-color-primary)" />
    <h3 v-show="!app.isCollapse" class="ml-2 text-4 text-primary font-bold">ElementAdmin</h3>
  </router-link>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store';

const app = useAppStore();
</script>

<style lang="scss" scoped></style>
