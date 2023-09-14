<template>
  <el-dialog title="菜单权限" v-model="visible" append-to-body @closed="onReset">
    <el-tree
      ref="treeRef"
      :data="allMenuList"
      show-checkbox
      node-key="id"
      :props="{ label: 'title' }"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="onConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';

defineProps({
  allMenuList: {
    type: Array,
    default: () => []
  }
});
const treeRef = ref();
const visible = ref(false);

const init = async (arr: number[]) => {
  visible.value = true;
  await nextTick();

  arr.forEach((v) => {
    treeRef.value.store.nodesMap[v].expanded = true;
    treeRef.value?.setChecked(v, true, false);
  });
};

const onConfirm = () => {
  const menu_id = [...treeRef.value.getHalfCheckedKeys(), ...treeRef.value.getCheckedKeys()];
  ElMessage.success('修改成功，数据为' + JSON.stringify(menu_id));
  visible.value = false;
};
const onReset = () => {
  treeRef.value?.setCheckedKeys([]);
  Object.keys(treeRef.value.store.nodesMap).forEach((key) => {
    treeRef.value.store.nodesMap[key].expanded = false;
  });
};
defineExpose({ init });
</script>

<style lang="scss" scoped></style>
