<template>
  <el-row :gutter="10">
    <el-col :span="12" :xs="24" class="pb-2">
      <el-card shadow="never">
        <div ref="lineEcharts" class="w-full h-100">></div>
      </el-card>
    </el-col>
    <el-col :span="12" :xs="24" class="pb-2">
      <el-card shadow="never">
        <div ref="barEcharts" class="w-full h-100"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useEcharts } from '@/hooks/useEcharts';
import { ECOption } from '@/utils/echarts';
defineOptions({ name: 'MidCard' });
const lineEcharts = ref<HTMLDivElement | null>(null);
const barEcharts = ref<HTMLDivElement | null>(null);
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['销售额', '内容量']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '销售额',
      color: '#14D3BA',
      type: 'line',
      data: [4444, 5555, 3333, 7477, 4800, 5551, 3978, 3888],
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.15,
              color: '#14D3BA'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      }
    },
    {
      color: '#0A78D2',
      name: '内容量',
      type: 'line',
      data: [2223, 4095, 2478, 5061, 2660, 3444, 2867],
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#0A78D2'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      }
    }
  ]
});
const barOptions = ref<ECOption>({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: 'center',
    itemStyle: {
      borderWidth: 0
    }
  },
  series: [
    {
      color: ['#5da8ff', '#8e9dff', '#fedc69', '#26deca', '#dfceb4'],
      name: '技能分析',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 10, name: 'react' },
        { value: 30, name: 'vue' },
        { value: 20, name: 'js' },
        { value: 20, name: 'css' },
        { value: 20, name: 'html' }
      ]
    }
  ]
});
onMounted(() => {
  useEcharts(lineEcharts.value as HTMLDivElement, lineOptions);
  useEcharts(barEcharts.value as HTMLDivElement, barOptions);
});
</script>

<style lang="scss" scoped></style>
