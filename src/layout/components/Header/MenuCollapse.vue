<template>
  <div class="flex-center h-full w-10 cursor-pointer hover:bg-#f6f6f6" @click="toggleCollapse">
    <Icon name="local-icon-align-left" size="20" v-if="!appStore.isCollapse" />
    <Icon name="local-icon-align-right" size="20" v-else />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
const toggleCollapse = () => {
  appStore.setIsCollapse(!appStore.isCollapse)
}
</script>

<style lang="scss" scoped></style>
