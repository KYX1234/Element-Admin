<template>
  <el-dialog
    v-model="visible"
    :title="form.id ? '编辑' : '添加'"
    width="650px"
    @closed="onReset"
    append-to-body
  >
    <el-form :model="form" inline label-width="55px" ref="formRef">
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入手机号" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="状态" prop="status">
            <el-select v-model="form.status" clearable placeholder="请选择">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="角色" prop="role">
            <el-select v-model="form.role" clearable placeholder="请选择">
              <el-option label="超级管理员" :value="1" />
              <el-option label="普通用户" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" clearable />
          </el-form-item>
        </el-col>
      </el-row>
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
import { ref, reactive } from 'vue';
import type { IUserItem } from '@/api/user/type';

const visible = ref(false);
const formRef = ref();
const form = reactive({
  id: 0,
  email: '',
  phone: '',
  name: '',
  password: '',
  status: 1,
  role: ''
});

const init = (data?: IUserItem) => {
  visible.value = true;
  if (data) Object.assign(form, data);
};

const onReset = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};

defineExpose({ init });
</script>

<style lang="scss" scoped></style>
