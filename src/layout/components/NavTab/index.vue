<template>
  <nav
    ref="navTabRef"
    class="navTab flex-y-center h-10 shadow-[0_0_1px_#888] bg-[var(--el-bg-color)]"
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
          <div
            class="flex-center gap-2 h-full pl-12px pr-9px"
            @contextmenu.prevent="handleContextMenu($event, item.fullPath, item.affix)"
          >
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
    <TabDropdown
      :currentPath="currentPath"
      :options="tabMenuOptions"
      :visible="contextmenuVisible"
      :style="contextMenuStyle"
    />
    <TabTools :options="tabMenuOptions" :currentPath="currentPath" @update-status="updateStatus" />
  </nav>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { filterAffixTags } from './helper';
import { TabPaneName } from 'element-plus';
import { useNavTabStore, useThemeStore } from '@/store';
import { storage } from '@/utils/storage';
import TabTools from './TabTools.vue';
import TabDropdown from './TabDropdown.vue';
import { useTab } from '@/hooks/useTab';
defineOptions({ name: 'NavTab' });

const router = useRouter();
const route = useRoute();
const themeStore = useThemeStore();
const navTabStore = useNavTabStore();
const navTabRef = ref();
const currentPath = ref('');
const activeName = computed(() => route.fullPath);
const { contextmenuLeft, contextmenuTop, contextmenuVisible, tabMenuOptions, contextMenuStyle } =
  useTab();

// 初始化tabs
const initTabs = () => {
  const routes = router.getRoutes();
  const tabs = storage.get('navTab') ?? filterAffixTags(routes);
  for (const tab of tabs) {
    navTabStore.add(tab);
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
  navTabStore.add(tab);
};

// 切换tab
const handleChange = (fullPath: TabPaneName) => {
  router.push(fullPath as string);
  resetMenuStatus();
};

// 删除tab
const handleRemove = (fullPath: TabPaneName) => {
  navTabStore.closeCurrent(fullPath as string);
};

const resetMenuStatus = () => {};

// 筛选显示的右键菜单
const showFilterMenu = (fullPath: string, affix?: boolean) => {
  Array.of(0, 1, 2, 3, 4, 5).forEach((v) => {
    tabMenuOptions[v].show = true;
    tabMenuOptions[v].disabled = false;
  });
  const index = navTabStore.tabsList.findIndex((v) => v.fullPath === fullPath);
  if (route.fullPath !== fullPath) {
    tabMenuOptions[0].show = false;
  }
  if (affix) {
    tabMenuOptions[1].show = false;
    tabMenuOptions[1].disabled = true;
  }
  // 左侧菜单
  if (index === 0) {
    tabMenuOptions[2].show = false;
    tabMenuOptions[2].disabled = true;
  }
  // 右侧菜单
  if (index === navTabStore.tabsList.length - 1) {
    tabMenuOptions[3].show = false;
    tabMenuOptions[3].disabled = true;
  }
  if (navTabStore.tabsList.length < 2) {
    tabMenuOptions[4].show = false;
    tabMenuOptions[5].show = false;
    tabMenuOptions[4].disabled = true;
    tabMenuOptions[5].disabled = true;
  }
  currentPath.value = fullPath;
};

const handleContextMenu = (e: any, fullPath: string, affix?: boolean) => {
  showFilterMenu(fullPath, affix);
  const menuMinWidth = 105;
  const offsetLeft = navTabRef.value.getBoundingClientRect().left; // container margin left
  const offsetWidth = navTabRef.value.offsetWidth; // container width
  const maxLeft = offsetWidth - menuMinWidth; // left boundary
  const left = e.clientX - offsetLeft + 15; // 15: margin right
  contextmenuLeft.value = left > maxLeft ? maxLeft : left;
  contextmenuTop.value = e.clientY;
  contextmenuVisible.value = true;
};

const updateStatus = () => {
  showFilterMenu(route.fullPath, route.meta.affix);
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
      padding: 0;
      margin-left: 8px;
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
@/hooks/useTab
