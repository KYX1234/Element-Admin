<template>
  <div
    class="fixed flex-center w-10 h-10 right-0 bg-primary top-50% rounded-l-md cursor-pointer"
    v-if="showButton"
  >
    <Icon name="el-icon-setting" size="22" color="#fff" />
  </div>
</template>

<script lang="ts" setup>
const showButton = import.meta.env.DEV
</script>

<style lang="scss" scoped></style>
