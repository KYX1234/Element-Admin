<template>
  <el-dropdown trigger="click">
    <div class="flex-center h-14 p-3 cursor-pointer hover:bg-#f6f6f6">
      <el-avatar :src="avatar" size="small" class="shrink-0 mr-2" />
      <span>{{ user.userInfo.userName || 'xxxxx' }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click="onLogout">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import avatar from '@/assets/image/avatar.jpg'
import { useUserStore } from '@/store/modules/user'
const user = useUserStore()

const onLogout = () => user.logout()
</script>

<style lang="scss" scoped></style>
