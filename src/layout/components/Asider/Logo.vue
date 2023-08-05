<template>
  <router-link to="/" class="flex-center shrink-0 h-14 w-full nowrap-hidden">
    <Icon class="mr-4px" name="local-icon-logo" size="30" color="var(--el-color-primary)" />
    <h3 v-show="!app.isCollapse" class="text-4 text-primary">ElementAdmin</h3>
  </router-link>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'

const app = useAppStore()
</script>

<style lang="scss" scoped></style>
