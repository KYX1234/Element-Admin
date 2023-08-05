<template>
  <el-dropdown trigger="click">
    <el-avatar :src="avatar" />
    <span>{{ user.userInfo.userName }}</span>
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
