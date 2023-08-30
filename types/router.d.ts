import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单名称 */
    title: string;
    /** 菜单图标 */
    icon?: string;
    /** 菜单排序 */
    sort?: number;
    /** 固定页签 */
    affix?: boolean;
    /** 是否缓存 */
    isKeep?: boolean;
    /** 是否隐藏菜单(路由还在) */
    isHide?: boolean;
    /** 外链地址 */
    iframeLink?: string;
  }
}
