<template>
  <div class="h-11 shadow-[0_0_1px_#888] bg-[var(--el-bg-color)]">
    <!-- <el-tabs
      :model="activeName"
      type="card"
      @tab-click="onClick"
      @tab-remove="navTabsStore.removeTabsItem"
    >
      <el-tab-pane
        v-for="item in tagsViewStore.tabsList"
        :key="item.path"
        :name="item.path"
        :label="item.title"
        :closable="closeable"
      />
    </el-tabs> -->
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { filterAffixTags } from './helper'
import { useTabsViewStore } from '@/store/modules/tabsView'
const router = useRouter()
const tabsViewStore = useTabsViewStore()
const initTabs = () => {
  const routes = router.getRoutes()
  const tabs = filterAffixTags(routes)
  for (const tab of tabs) {
    if (tab.name) tabsViewStore.addTab(tab)
  }
}
initTabs()
</script>

<style lang="scss" scoped></style>
