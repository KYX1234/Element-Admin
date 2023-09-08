<template>
  <transition name="el-zoom-in-top">
    <ul class="contextmenu" v-show="visible">
      <div v-for="item in options" :key="item.key" style="display: flex; align-items: center">
        <li v-if="item.show" @click="handleContextMenu(item.key)">
          {{ item.label }}
        </li>
      </div>
    </ul>
  </transition>
</template>

<script lang="ts" setup>
import { useAppStore, useNavTabStore } from '@/store';

interface Props {
  visible: boolean;
  currentPath: string;
  options: any;
}
const props = defineProps<Props>();
const appStore = useAppStore();
const navTabStore = useNavTabStore();
const handleContextMenu = (key: string) => {
  switch (key) {
    case 'refresh':
      appStore.setReloadFlag();
      break;
    case 'closeCurrent':
      navTabStore.closeCurrent(props.currentPath);
      break;
    case 'closeLeft':
      navTabStore.closeLeft(props.currentPath);
      break;
    case 'closeRight':
      navTabStore.closeRight(props.currentPath);
      break;
    case 'closeOther':
      navTabStore.closeOther(props.currentPath);
      break;
    case 'closeAll':
      navTabStore.closeAll();
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
.contextmenu {
  position: absolute;
  z-index: 99;
  margin: 0;
  padding: 5px;
  font-size: 13px;
  font-weight: normal;
  color: var(--el-text-color-primary);
  white-space: nowrap;
  list-style-type: none;
  background: var(--el-bg-color-overlay);
  border-radius: 4px;
  outline: 0;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);

  li {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 7px 12px;
    margin: 0;
    cursor: pointer;

    &:hover {
      color: var(--el-color-primary);
      background-color: var(--el-fill-color-light);
    }

    svg {
      display: block;
      margin-right: 0.5em;
    }
  }
}
</style>
