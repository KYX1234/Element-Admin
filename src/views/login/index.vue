<template>
  <div class="login-container">
    <Top />
    <el-card class="z-1 !border-none w-100 !rounded-4% <sm:w-80">
      <h3 class="mt-6 font-500 text-primary text-18px" type="primary">登录</h3>
      <el-form ref="formRef" :model="form" :rules="formRules" class="mt-6" size="large">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" show-password placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <div class="w-full flex-y-center justify-between">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <el-text type="primary" class="cursor-pointer">忘记密码?</el-text>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" type="primary" @click="onLogin" :loading="loading"
            >登录
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Top } from './components';
import { formRules } from './helpers/rule';
import { useUserStore } from '@/store';

defineOptions({ name: 'Login' });

const formRef = ref();
const checked = ref(false);
const loading = ref(false);
const userStore = useUserStore();
const form = reactive({
  username: 'admin',
  password: '123456'
});

const onLogin = async () => {
  await formRef.value?.validate();
  try {
    loading.value = true;
    await userStore.login(form);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  @apply relative wh-full flex-center dark:bg-#101628 bg-[url('/src/assets/image/background.svg')] bg-no-repeat bg-center-top;
}
</style>
