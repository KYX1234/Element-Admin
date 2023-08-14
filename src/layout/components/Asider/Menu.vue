<template>
  <el-scrollbar class="w-99%">
    <el-menu
      default-active="2"
      class="!border-0 !w-full"
      :collapse-transition="false"
      :collapse="appStore.isCollapse"
    >
      <MenuItem v-for="item in menus" :key="item.path" :menu="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { useRouteStore } from '@/store/modules/route'
import { filterRoutesToMenus } from '@/router/helpers/filterMenus'
import MenuItem from './MenuItem.vue'

const appStore = useAppStore()
const routeStore = useRouteStore()
const menus = computed(() => filterRoutesToMenus(routeStore.menus))
</script>

<style lang="scss" scoped></style>
