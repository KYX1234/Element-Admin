<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      class="!border-0 !w-full"
      router
      :unique-opened="themeStore.menuUnique"
      :collapse-transition="false"
      :collapse="appStore.isCollapse"
    >
      <MenuItem v-for="item in menus" :key="item.path" :menu="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore, useThemeStore, useRouteStore } from '@/store';
import MenuItem from './MenuItem.vue';

const route = useRoute();
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
const menus = computed(() => routeStore.menus);
const activeMenu = computed(() => route.path);
</script>

<style lang="scss" scoped></style>
