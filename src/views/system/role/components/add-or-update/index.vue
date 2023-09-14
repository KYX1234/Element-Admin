<template>
  <el-dialog v-model="visible" :title="form.id ? '编辑' : '添加'" width="550px" @closed="onReset">
    <el-form :model="form" label-width="55px" ref="formRef">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" clearable />
      </el-form-item>
      <el-form-item label="标识" prop="role_name">
        <el-input v-model="form.role_name" placeholder="请输入标识" clearable />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import type { FormInstance } from 'element-plus';
import type { IRoleItem } from '@/api/role/type';

const visible = ref(false);
const formRef = ref<FormInstance>();
const form = reactive({
  id: 0,
  role_name: '',
  name: ''
});

const init = async (data?: IRoleItem) => {
  visible.value = true;
  if (data) {
    await nextTick();
    Object.assign(form, data);
  }
};
const onReset = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};
defineExpose({ init });
</script>

<style lang="scss" scoped></style>
