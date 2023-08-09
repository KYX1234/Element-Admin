<template>
  <el-dropdown trigger="click">
    <div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill">
      <Icon name="local-icon-language" size="20" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item disabled>简体中文</el-dropdown-item>
        <el-dropdown-item>English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
