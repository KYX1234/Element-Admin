<template>
  <nav
    class="navTab flex-y-center h-10 shadow-[0_0_1px_#888] bg-[var(--el-bg-color)] relative"
    v-if="themeStore.navTab"
  >
    <el-tabs :model-value="activeName" @tab-change="handleChange">
      <el-tab-pane
        v-for="item in navTabStore.tabsList"
        :key="item.fullPath"
        :name="item.fullPath"
        :label="item.title"
      >
        <template #label>
          <div class="flex-center gap-2">
            <Icon :name="item.icon" v-if="item.icon && themeStore.navTabIcon" />
            <span>{{ $t(item.title) }}</span>
            <Icon
              v-if="!item.affix"
              class="mt-1px hover:bg-primary rounded-full hover:color-white"
              name="el-icon-close"
              @click.prevent.stop="handleRemove(item.fullPath)"
              size="14"
            />
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <TabTools />
  </nav>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { filterAffixTags } from './helper';
import { TabPaneName } from 'element-plus';
import { useNavTabStore, useThemeStore } from '@/store';
import TabTools from './TabTools.vue';
import { storage } from '@/utils/storage';

defineOptions({ name: 'NavTab' });

const router = useRouter();
const route = useRoute();
const themeStore = useThemeStore();
const navTabStore = useNavTabStore();
const activeName = computed(() => route.fullPath);

// 初始化tabs
const initTabs = () => {
  const routes = router.getRoutes();
  const tabs = storage.get('navTab') ?? filterAffixTags(routes);
  for (const tab of tabs) {
    navTabStore.addTab(tab);
  }
};

// 添加tab
const addTab = () => {
  const tab = {
    fullPath: route.fullPath,
    title: route.meta.title,
    affix: route.meta.affix || false,
    icon: route.meta.icon
  };
  navTabStore.addTab(tab);
};

// 切换tab
const handleChange = (fullPath: TabPaneName) => {
  router.push(fullPath as string);
};

// 删除tab
const handleRemove = (fullPath: TabPaneName) => {
  navTabStore.removeTab(fullPath as string);
};

onMounted(() => {
  initTabs();
  addTab();
});

watch(
  () => route.fullPath,
  () => {
    addTab();
  }
);
</script>

<style lang="scss" scoped>
:deep(.el-tabs) {
  width: calc(100% - 80px);
  .is-scrollable .el-tabs__item:nth-child(2) {
    margin-left: 0 !important;
  }
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
    .el-tabs__item:nth-child(2) {
      margin-left: 12px;
    }
    .el-tabs__item {
      border: 1px solid var(--el-border-color-light);
      height: 31px;
      padding: 0 12px;
      margin-left: 8px;
      padding-right: 9px;
      border-radius: 2px;
      &:hover {
        border-color: var(--el-color-primary-light-3);
      }
    }
    .is-icon-close:hover {
      background-color: var(--el-color-primary);
    }
    .is-active {
      background: var(--el-color-primary-light-8);
      border-color: var(--el-color-primary-light-3);
    }
    .is-icon-close {
      margin-left: 8px;
    }
  }
}
</style>
