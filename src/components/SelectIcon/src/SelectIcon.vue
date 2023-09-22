<template>
  <el-popover
    placement="bottom-start"
    v-model:visible="visible"
    :disabled="disabled"
    :width="widthPopover"
    trigger="click"
  >
    <template #reference>
      <el-input
        :style="{ width: width ? width + 'px' : '100%' }"
        v-model="inputValue"
        placeholder="请选择图标"
        :disabled="disabled"
        :autofocus="false"
        clearable
      >
        <template #append>
          <Icon :name="modelValue" v-if="modelValue" />
          <span v-else></span>
        </template>
      </el-input>
    </template>
    <template #default>
      <el-tabs>
        <el-tab-pane :label="item.name" v-for="(item, index) in iconTabs" :key="index" class="h-70">
          <el-scrollbar>
            <div class="flex flex-wrap">
              <div v-for="(iconItem, iconIndex) in item.icons" :key="iconIndex" class="m-1">
                <el-button @click="handleSelect(iconItem)">
                  <Icon :name="iconItem" :size="18" />
                </el-button>
              </div>
            </div>
          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { getElIconNames, getLocalIconNames } from '@/components/Icon/src/util';
interface Props {
  modelValue: string;
  width?: string;
  widthPopover?: string;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  widthPopover: '380',
  modelValue: '',
  disabled: false
});

const emit = defineEmits(['update:modelValue']);
const visible = ref(false);
const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    !value && emit('update:modelValue', value);
  }
});
const iconTabs = [
  {
    name: 'element图标',
    icons: getElIconNames()
  },
  {
    name: '本地图标',
    icons: getLocalIconNames()
  }
];
const handleSelect = (iconItem: string) => {
  visible.value = false;
  emit('update:modelValue', iconItem);
};
</script>

<style lang="scss" scoped></style>
