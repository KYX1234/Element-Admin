<template>
  <div
    v-if="isShow"
    class="fixed z-9999 flex-center w-10 h-10 right-0 bg-primary top-50% rounded-l-md cursor-pointer"
    @click="handleSetting"
  >
    <Icon name="el-icon-setting" size="22" color="#fff" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: boolean;
}
defineProps<Props>();

const emit = defineEmits(['update:modelValue']);
// 生产模式不需要可自行修改
const isShow = import.meta.env.DEV || import.meta.env.VITE_APP_SETTING === 'Y';
const handleSetting = () => {
  emit('update:modelValue', true);
};
</script>

<style lang="scss" scoped></style>
