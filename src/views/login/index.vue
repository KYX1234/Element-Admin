<template>
  <div class="relative wh-full flex-center bg-#eef2f6">
    <LoginBg />
    <el-card class="z-1 !border-none w-100 !rounded-4% <sm:w-80" shadow="never">
      <div class="flex-y-center justify-between">
        <SystemLogo size="64" color="var(--el-color-primary)" />
        <el-text class="!text-7" type="primary">ElementAdmin</el-text>
      </div>
      <h3 class="mt-6 font-500 text-primary text-18px" type="primary">登录</h3>
      <el-form :model="form" class="mt-6" label-position="top">
        <el-form-item>
          <el-input v-model="form.username" size="large" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.passsword" show-password size="large" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <div class="w-full flex-y-center justify-between">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <el-text type="primary">忘记密码?</el-text>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" size="large" type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" size="large">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { login } from '@/api/user'
import LoginBg from './components/login-bg/index.vue'

const checked = ref(false)
const form = reactive({
  username: 'admin',
  passsword: '123456'
})

const onLogin = async () => {
  const { data } = await login(form)
  localStorage.setItem('token', data.token)
}
</script>

<style lang="scss" scoped></style>
