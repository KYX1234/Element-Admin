<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      class="!border-0 !w-full"
      :unique-opened="themeStore.menuUnique"
      :collapse-transition="false"
      :collapse="appStore.isCollapse"
      @select="handleSelect"
      popper-effect="dark"
    >
      <MenuItem v-for="item in menus" :key="item.path" :menu="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore, useThemeStore, useRouteStore } from '@/store';
import MenuItem from './MenuItem.vue';

const router = useRouter();
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
const menus = computed(() => routeStore.menus);
const activeMenu = computed(() => router.currentRoute.value.path);

const handleSelect = (key: string) => {
  if (/http(s)?:/.test(key)) {
    window.open(key);
  } else {
    router.push(key);
  }
};
</script>

<style lang="scss" scoped></style>
