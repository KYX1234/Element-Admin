<template>
  <el-dropdown trigger="click">
    <div class="flex-center h-14 p-3 cursor-pointer hover:bg-fill">
      <el-avatar :src="avatar" size="small" class="shrink-0 mr-2" />
      <span>{{ userStore.userInfo.username || 'xxxxx' }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click="onLogout">{{ $t('login.loginOut') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import avatar from '@/assets/image/avatar.jpg';
import { useUserStore } from '@/store';
const userStore = useUserStore();

const onLogout = () => userStore.logout();
</script>

<style lang="scss" scoped></style>
