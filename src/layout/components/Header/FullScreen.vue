<template>
  <div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill" @click="toggle">
    <Icon name="local-icon-fullscreen" size="20" v-if="!isFullscreen" />
    <Icon name="local-icon-fullscreen-exit" size="20" v-else />
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="scss" scoped></style>
