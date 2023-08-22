<template>
  <nav
    class="flex-y-center h-10 shadow-[0_0_1px_#888] bg-[var(--el-bg-color)] relative"
    v-if="themeStore.navTab"
  >
    <el-tabs :model-value="activeName" @tab-change="handleChange" @tab-remove="handleRemove">
      <el-tab-pane
        v-for="item in navTabStore.tabsList"
        :key="item.fullPath"
        :name="item.fullPath"
        :label="item.name"
        :closable="!item.affix"
      >
        <template #label>
          <div class="flex-center gap-2">
            <Icon :name="item.icon" v-if="item.icon" />
            <span>{{ item.name }}</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <TabTools />
  </nav>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterAffixTags } from './helper'
import { TabPaneName } from 'element-plus'
import { useNavTabStore } from '@/store/modules/navTab'
import { useThemeStore } from '@/store/modules/theme'
import TabTools from './TabTools.vue'

defineOptions({ name: 'NavTab' })
const router = useRouter()
const route = useRoute()
const themeStore = useThemeStore()
const navTabStore = useNavTabStore()
const activeName = computed(() => route.fullPath)

// 初始化tabs
const initTabs = () => {
  const routes = router.getRoutes()
  const tabs = filterAffixTags(routes)
  for (const tab of tabs) {
    navTabStore.addTab(tab)
  }
}

// 添加tab
const addTab = () => {
  const tab = {
    fullPath: route.fullPath,
    name: route.meta.title,
    affix: route.meta.affix || false,
    icon: route.meta.icon
  }
  navTabStore.addTab(tab)
}

// 切换tab
const handleChange = (fullPath: TabPaneName) => {
  router.push(fullPath as string)
}

// 删除tab
const handleRemove = (fullPath: TabPaneName) => {
  navTabStore.removeTab(fullPath as string)
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
      padding: 0 12px;
      margin-left: 8px;
      border-radius: 2px;
    }
    .is-active {
      background: var(--el-color-primary-light-9);
    }
    .is-icon-close {
      margin-left: 8px;
    }
  }
}
</style>
