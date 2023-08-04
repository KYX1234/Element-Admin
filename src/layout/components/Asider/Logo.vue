<template>
  <router-link to="/" class="flex-center shrink-0 h-14 w-full nowrap-hidden">
    <Icon name="local-icon-logo" size="40" color="var(--el-color-primary)" />
    <h3 v-show="showTitle" class="pl-2 text-4 text-primary transition duration-300 ease-in-out">
      ElementAdmin
    </h3>
  </router-link>
</template>

<script lang="ts" setup>
interface Props {
  /** 显示名字 */
  showTitle: boolean
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>
