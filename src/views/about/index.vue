<template>
  <div>
    <el-card shadow="never" class="mb-3">
      <div class="text-lg mb-2">关于</div>
      <p class="leading-6">
        Element Admin 是一个基于 Vue3、Vite、Pinia、Element-Plus、Unocss、TypeScript
        的中后台解决方案，它使用了最新的前端技术栈，，内置主题配置、动态菜单、权限校验等，基于 mock
        实现的动态数据展示，可以当作开箱的模板，也可用于学习参考。
      </p>
    </el-card>
    <el-card shadow="never" class="mb-3">
      <div class="text-lg mb-2">项目信息</div>
      <el-descriptions border :column="2">
        <el-descriptions-item label="版本">
          <el-tag>{{ version }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="更新时间">
          <el-tag>{{ lastBuildTime }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Gitee">
          <el-link
            type="primary"
            href="https://gitee.com/A1059784729/Element-Admin"
            target="_blank"
          >
            Gitee
          </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="Github">
          <el-link type="primary" href="https://github.com/KYX1234/Element-Admin" target="_blank">
            Github
          </el-link>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card shadow="never" class="mb-3">
      <div class="text-lg mb-2">生产环境依赖</div>
      <el-descriptions border>
        <el-descriptions-item v-for="(item, key) in dependencies" :key="key" :label="key">
          {{ item }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card shadow="never">
      <div class="text-lg mb-2">开发环境依赖</div>
      <el-descriptions border>
        <el-descriptions-item v-for="(item, key) in devDependencies" :key="key" :label="key">
          {{ item }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'About' });
const { pkg, lastBuildTime } = __APP_INFO__;
const { dependencies, devDependencies, version } = pkg;
</script>

<style lang="scss" scoped></style>
