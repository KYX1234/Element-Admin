<template>
  <el-row :gutter="10">
    <el-col class="pb-2" :span="6" :xs="24" v-for="(item, index) in list" :key="index">
      <el-card shadow="never">
        <template #header>
          <div class="flex-y-center justify-between">
            <div class="flex-y-center">
              <Icon :name="item.icon" :color="item.color" size="30" />
              <span class="ml-1">{{ item.name }}</span>
            </div>
            <div class="text-xs text-gray">{{ item.date }}</div>
          </div>
        </template>
        <div class="flex-y-center justify-between">
          <div class="text-3xl">{{ item.number }}</div>
          <div class="flex-center">
            <el-tag :type="item.ratio.includes('+') ? 'success' : 'danger'">
              {{ item.ratio }}
            </el-tag>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TopCard' });
const list = [
  {
    name: '访问量',
    date: '日',
    icon: 'el-icon-collectionTag',
    number: '26',
    color: '#2d8cf0',
    ratio: '+4%'
  },
  {
    name: '销售额',
    date: '日',
    icon: 'el-icon-help',
    number: '￥100',
    color: '#b37feb',
    ratio: '-20%'
  },
  {
    name: '订单量',
    date: '月',
    icon: 'el-icon-tickets',
    number: '260',
    color: '#f49776',
    ratio: '+38%'
  },
  {
    name: '新增用户',
    date: '周',
    icon: 'el-icon-user',
    number: '37',
    color: '#2ccb98',
    ratio: '-13%'
  }
];
</script>

<style lang="scss" scoped></style>
