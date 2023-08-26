<template>
  <el-row :gutter="10">
    <el-col :span="8" :xs="24" class="pb-2">
      <el-card shadow="never">
        <div class="w-full h-100">
          <h3>商户销售额</h3>
          <div class="bg-[var(--el-color-primary-light-9)] rounded-md p-4 mt-4">
            <div class="flex-y-center justify-between">
              <span>当前总金额</span>
              <span>￥19888</span>
            </div>
            <div ref="lineEcharts" class="w-full h-20"></div>
          </div>
          <div>
            <div
              class="flex-y-center justify-between leading-12 border-b border-borderColor last:border-b-0"
              v-for="(item, index) in list"
              :key="index"
            >
              <div>{{ item.title }}</div>
              <div class="flex-y-center">
                <span> ￥{{ item.value }}</span>
                <Icon
                  :name="item.status === 'asc' ? 'el-icon-caretTop' : 'el-icon-caretBottom'"
                  :color="item.status === 'asc' ? '#00c853' : '#d84315'"
                />
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" :xs="24" class="pb-2">
      <el-card shadow="never">
        <el-table
          class="w-full !h-100"
          border
          :data="tableData"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
        >
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ECOption } from '@/utils/echarts';
import { graphic } from 'echarts/core';
import { useEcharts } from '@/hooks/useEcharts';
defineOptions({ name: 'BotCard' });

const lineEcharts = ref<HTMLDivElement | null>(null);
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    formatter(params: any) {
      return '当前销售额' + params[0].data;
    }
  },
  grid: {
    left: '3',
    right: '3',
    top: '10',
    bottom: '10'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: { show: false },
    boundaryGap: false,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
      data: [400, 600, 655, 406, 1113, 777, 900],
      type: 'line',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: 'rgba(250, 220, 25, 1)'
          },
          {
            offset: 0.5,
            color: 'rgba(255, 125, 0, 1)'
          },
          {
            offset: 1,
            color: 'rgba(245, 63, 63, 1)'
          }
        ])
      }
    }
  ]
});
const list = [
  {
    title: '辣子鸡面馆',
    value: '1230',
    status: 'asc'
  },
  {
    title: '好吃的炸鸡',
    value: '2145',
    status: 'desc'
  },
  {
    title: '一碗猪脚饭',
    value: '1714',
    status: 'asc'
  },
  {
    title: '堡家门',
    value: '2886',
    status: 'desc'
  }
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
];
onMounted(() => {
  useEcharts(lineEcharts.value as HTMLDivElement, lineOptions);
});
</script>

<style lang="scss" scoped></style>
