<template>
  <el-main class="mt-1px bg-[var(--el-bg-color-page)]">
    <router-view>
      <template #default="{ Component, route }">
        <el-backtop title="回到顶部" target=".el-main" />
        <transition :name="themeStore.animateMode" mode="out-in" appear>
          <keep-alive :include="routeStore.cacheList">
            <component :is="Component" :key="route.fullPath" v-if="appStore.reloadFlag" />
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { useAppStore, useRouteStore, useThemeStore } from '@/store';

defineOptions({ name: 'MainPage' });
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
</script>

<style lang="scss" scoped></style>
