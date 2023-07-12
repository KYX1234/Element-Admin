interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /**
   * 权限路由模式:
   * - static - 前端声明的静态
   * - dynamic - 后端返回的动态
   */
  readonly VITE_AUTH_ROUTE_MODE: 'static' | 'dynamic';
  /** iconify图标作为组件的前缀 */
  readonly VITE_ICON_PREFFIX: string;
  /**
   * 本地SVG图标作为组件的前缀, 请注意一定要包含 VITE_ICON_PREFFIX
   * - 格式 {VITE_ICON_PREFFIX}-{本地图标集合名称}
   * - 例如：icon-local
   */
  readonly VITE_ICON_LOCAL_PREFFIX: string;
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: 'Y' | 'N';
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS?: 'Y' | 'N';
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';
  /**
   * 是否开启生产模式下的mock
   * @description 生产模式下会拦截XHR，导致无法获取response，不使用mock请求时设置为N
   */
  readonly VITE_PROD_MOCK?: 'Y' | 'N';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}