import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  PieChart,
  type BarSeriesOption,
  type LineSeriesOption,
  type PieSeriesOption
} from 'echarts/charts';
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  type LegendComponentOption,
  type TitleComponentOption,
  type TooltipComponentOption,
  type GridComponentOption
} from 'echarts/components';

import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | LegendComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
>;

// 注册必须的组件
echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  CanvasRenderer
]);

export default echarts;
