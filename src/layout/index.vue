<template>
  <el-container class="h-full" ref="appWrapperRef">
    <AppMask v-show="showAppMask" @click="closeAppMask" />
    <Asider />
    <el-container direction="vertical">
      <Header />
      <TagsView />
      <Main />
      <el-backtop title="回到顶部" />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Asider from './components/Asider/index.vue'
import AppMask from './components/AppMask/index.vue'
import Header from './components/Header/index.vue'
import TagsView from './components/TagsView/index.vue'
import Main from './components/Main/index.vue'
import { deviceDetection } from './utils/deviceDetection'
import { useAppStore } from '@/store/modules/app'

defineOptions({ name: 'Layout' })

const appWrapperRef = ref()
const appStore = useAppStore()
const showAppMask = computed(() => appStore.isMobile && !appStore.isCollapse)
const closeAppMask = () => appStore.setIsCollapse(true)

deviceDetection(appWrapperRef)
</script>

<style lang="scss" scoped></style>
