<template>
  <el-header class="header">
    <div class="flex-y-center h-full">
      <MenuCollapse />
    </div>
    <div class="flex-y-center h-full">
      <Search />
      <FullScreen />
      <Language />
      <SystemMessage />
      <UserAvatar />
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import MenuCollapse from './MenuCollapse.vue'
import Search from './Search.vue'
import Language from './Language.vue'
import UserAvatar from './UserAvatar.vue'
import SystemMessage from './SystemMessage.vue'
import FullScreen from './FullScreen.vue'
defineOptions({ name: 'PageHeader' })
</script>

<style lang="scss" scoped>
.header {
  @apply flex-y-center justify-between h-14 p-x-0 bg-[var(--el-bg-color)] shadow-[0_1px_2px_#0015291];
}
</style>
