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
import { ref, onMounted } from 'vue'
import Asider from './components/Asider/index.vue'
import Header from './components/Header/index.vue'
import TagsView from './components/TagsView/index.vue'
import Main from './components/Main/index.vue'
import { deviceDetection } from './utils/deviceDetection'

defineOptions({ name: 'Layout' })

const appWrapperRef = ref()

onMounted(() => {
  deviceDetection(appWrapperRef)
})
</script>

<style lang="scss" scoped>
.sider {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
./utils/deviceDetection
