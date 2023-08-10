interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string
  /** 项目名称 */
  readonly VITE_APP_TITLE: string
  /**
   * 权限路由模式:
   * - static - 前端声明的静态
   * - dynamic - 后端返回的动态
   */
  readonly VITE_ROUTE_MODE: 'static' | 'dynamic'
  /** el图标作为组件的前缀 */
  readonly VITE_EL_ICON_PREFIX: string
  /** 本地SVG图标作为组件的前缀 */
  readonly VITE_ICON_LOCAL_PREFIX: string
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: 'Y' | 'N'
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS?: 'Y' | 'N'
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
  /** 是否开启生产模式下的mock */
  readonly VITE_PROD_MOCK?: 'Y' | 'N'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
