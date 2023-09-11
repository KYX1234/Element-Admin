type Recordable<T = any> = Record<string, T>;

declare namespace App {
  /** 菜单属性 */
  interface Menu {
    path: string;
    title: string;
    icon?: string;
    affix?: boolean;
    children?: Menu[];
  }
  /** 多页签属性 */
  interface TabsView {
    title: string;
    fullPath: string;
    icon?: string;
    affix?: boolean;
  }
  /** 请求结果 */
  interface RequestResult<T = any> {
    code: number;
    message: string;
    data: T;
  }
  /** 表格结果 */
  interface TableResult<T = any> {
    total: number;
    list: T[];
  }
  /** 请求表格结果 */
  type RequestTableResult<T = any> = RequestResult<TableResult<T> | T>;
}

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};
