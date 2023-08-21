<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      class="!border-0 !w-full"
      router
      :unique-opened="appStore.menuUnique"
      :collapse-transition="false"
      :collapse="appStore.isCollapse"
    >
      <MenuItem v-for="item in menus" :key="item.path" :menu="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import { useRouteStore } from '@/store/modules/route'
import MenuItem from './MenuItem.vue'

const route = useRoute()
const appStore = useAppStore()
const routeStore = useRouteStore()
const menus = computed(() => routeStore.menus)
const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped></style>
