<template>
  <el-header
    class="flex-y-center border-b border-b-[var(--el-border-color-light)] !h-14 !p-x-0 justify-between"
  >
    <div class="flex-y-center h-full">
      <MenuCollapse />
    </div>
    <div class="flex-y-center h-full">
      <UserAvatar />
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import MenuCollapse from './MenuCollapse.vue'
import UserAvatar from './UserAvatar.vue'
defineOptions({ name: 'PageHeader' })
</script>

<style lang="scss" scoped></style>
