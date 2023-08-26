<template>
  <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 0">
    <template #title>
      <Icon :name="menu.icon" size="18" v-if="menu.icon" />
      <span>{{ menu.name }}</span>
    </template>
    <MenuItem v-for="menuItem in menu.children" :key="menuItem.path" :menu="menuItem" />
  </el-sub-menu>
  <el-menu-item :index="menu.path" v-else>
    <Icon :name="menu.icon" size="18" v-if="menu.icon" />
    <span>{{ menu.name }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
interface Props {
  menu: App.Menu;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
