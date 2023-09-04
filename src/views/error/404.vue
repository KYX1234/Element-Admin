<template>
  <div class="flex-col-center gap-6 h-full">
    <img src="@/assets/image/404.png" width="350" />
    <router-link to="/">
      <el-button type="primary">{{ $t('error.returnToHome') }}</el-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
