<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <el-card shadow="never">
        <div ref="lineEcharts" style="width: 100%; height: 400px"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="never">
        <div ref="BarEcharts" style="width: 100%; height: 400px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'
import { ECOption } from '@/utils/echarts'
const lineEcharts = ref<HTMLDivElement | null>(null)
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
})
onMounted(() => {
  useEcharts(lineEcharts.value as HTMLDivElement, lineOptions)
})
</script>

<style lang="scss" scoped></style>
