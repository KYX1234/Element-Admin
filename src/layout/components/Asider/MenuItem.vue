<template>
  <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 0">
    <template #title>
      <Icon :name="menu.icon" size="19" v-if="menu.icon" />
      <span class="truncate">{{ $t(menu.title) }}</span>
    </template>
    <MenuItem v-for="menuItem in menu.children" :key="menuItem.path" :menu="menuItem" />
  </el-sub-menu>
  <el-menu-item :index="menu.path" v-else>
    <Icon :name="menu.icon" size="19" v-if="menu.icon" />
    <span class="truncate">{{ $t(menu.title) }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
interface Props {
  menu: App.Menu;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
