<template>
  <div class="flex-center h-full w-10 cursor-pointer hover:bg-#f6f6f6" @click="app.toggleCollapse">
    <Icon name="local-icon-align-left" size="20" v-if="!app.isCollapse" />
    <Icon name="local-icon-align-right" size="20" v-else />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
const app = useAppStore()
</script>

<style lang="scss" scoped></style>
