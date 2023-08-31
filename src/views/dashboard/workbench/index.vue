<template>
  <el-card shadow="never">
    <el-row justify="space-between">
      <el-col :span="10" :xs="24">
        <div class="flex h-full py-2">
          <img
            class="w-20 h-20 mr-5 rounded-full border border-borderColor"
            src="@/assets/image/avatar.jpg"
            alt=""
          />
          <div>
            <h3 class="mb-2">早上好，又是美好的一天呢!</h3>
            <p class="text-sm text-gray">今天天气晴朗，20℃-30℃</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8" :xs="24">
        <div class="flex justify-around py-2">
          <div class="mr-7">
            <div class="text-gray mb-2">消息</div>
            <div class="text-6">22</div>
          </div>
          <div>
            <div class="text-gray mb-2">代办</div>
            <div class="text-6">4/10</div>
          </div>
          <div>
            <div class="text-gray mb-2">项目</div>
            <div class="text-6">10</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
