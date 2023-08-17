<template>
  <div class="flex-y-center h-10 shadow-[0_0_1px_#888] bg-[var(--el-bg-color)]">
    <el-tabs :model-value="activeName" @tab-change="handleChange">
      <el-tab-pane
        v-for="item in tabsViewStore.tabsList"
        :key="item.fullPath"
        :name="item.fullPath"
        :label="item.name"
        :closable="!item.affix"
      />
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { filterAffixTags } from './helper'
import { useTabsViewStore } from '@/store/modules/tabsView'
import { computed, onMounted, watch } from 'vue'
import { TabPaneName } from 'element-plus'

const router = useRouter()
const route = useRoute()
const tabsViewStore = useTabsViewStore()
const activeName = computed(() => route.fullPath)

// 初始化tabs
const initTabs = () => {
  const routes = router.getRoutes()
  const tabs = filterAffixTags(routes)
  for (const tab of tabs) {
    tabsViewStore.addTab(tab)
  }
}

// 添加tab
const addTab = () => {
  const tab = {
    fullPath: route.fullPath,
    name: route.meta.title,
    affix: route.meta.affix || false
  }
  tabsViewStore.addTab(tab)
}

// 切换tab
const handleChange = (fullPath: TabPaneName) => {
  router.push(fullPath as string)
}

onMounted(() => {
  initTabs()
  addTab()
})

watch(route, () => {
  addTab()
})
</script>

<style lang="scss" scoped>
:deep(.el-tabs) {
  width: 100%;
  .el-tabs__header {
    margin-bottom: 0;
    .el-tabs__nav-wrap::after {
      height: 0;
    }
    .el-tabs__nav-prev,
    .el-tabs__nav-next {
      line-height: 30px;
    }
    .el-tabs__active-bar {
      display: none;
    }
    .el-tabs__item {
      border: 1px solid var(--el-border-color-light);
      height: 31px;
      padding: 0 15px;
      margin-left: 8px;
      border-radius: 2px;
    }
    .is-active {
      background: var(--el-color-primary-light-9);
    }
  }
}
</style>
