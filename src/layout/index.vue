<template>
  <el-container class="h-full" ref="appWrapperRef">
    <AppMask v-show="showAppMask" @click="closeAppMask" />
    <Asider />
    <el-container direction="vertical" class="relative">
      <Header />
      <NavTab />
      <Main />
      <AppSetting />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Asider from './components/Asider/index.vue';
import Header from './components/Header/index.vue';
import NavTab from './components/NavTab/index.vue';
import Main from './components/Main/index.vue';
import AppMask from './components/AppMask/index.vue';
import AppSetting from './components/AppSetting/index.vue';
import { deviceDetection } from './helpers/deviceDetection';
import { useAppStore } from '@/store';

defineOptions({ name: 'Layout' });

const appWrapperRef = ref();
const appStore = useAppStore();
const showAppMask = computed(() => appStore.isMobile && !appStore.isCollapse);
const closeAppMask = () => appStore.setIsCollapse(true);

deviceDetection(appWrapperRef);
</script>

<style lang="scss" scoped></style>
