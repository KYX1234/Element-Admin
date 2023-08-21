<template>
  <el-breadcrumb v-if="appStore.breadCrumb && !appStore.isMobile" separator="/" class="p-x-2">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <a @click.prevent="handleLink(item)" class="!font-normal"> {{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import { computed } from 'vue'
import { RouteLocationMatched, useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()
const appStore = useAppStore()
const breadcrumbList = computed(() => route.matched.filter((item) => item.meta.title))
const handleLink = (item: RouteLocationMatched) => {
  const { redirect, path } = item
  console.log(item)
  redirect ? router.push(redirect as string) : router.push(path)
}
</script>

<style lang="scss" scoped></style>
