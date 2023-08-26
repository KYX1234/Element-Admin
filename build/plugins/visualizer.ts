import { visualizer } from 'rollup-plugin-visualizer';

export default visualizer({
  open: true, //在默认用户代理中打开生成的文件
  gzipSize: true, //从源代码中收集 gzip 大小并将其显示在图表中
  brotliSize: true //从源代码中收集 brotli 大小并将其显示在图表中
});
