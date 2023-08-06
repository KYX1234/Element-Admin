<template>
  <el-container class="h-full" ref="appWrapperRef">
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
import { ref } from 'vue'
import Asider from './components/Asider/index.vue'
import Header from './components/Header/index.vue'
import TagsView from './components/TagsView/index.vue'
import Main from './components/Main/index.vue'
import { deviceDetection } from './utils/deviceDetection'
import { onMounted } from 'vue'

defineOptions({ name: 'Layout' })

const appWrapperRef = ref()

onMounted(() => {
  deviceDetection(appWrapperRef)
})
</script>

<style lang="scss" scoped></style>
