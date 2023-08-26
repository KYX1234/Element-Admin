import { RouteRecordRaw } from 'vue-router';

/** 权限路由排序 */
export function sortRoutes(routes: RouteRecordRaw[]) {
  return routes
    .sort((next, pre) => Number(next.meta?.sort) - Number(pre.meta?.sort))
    .map((item) => {
      if (item.children) sortRoutes(item.children);
      return item;
    });
}

/** 处理全部导入的路由模块 */
export function getModulesRoutes(modules: Record<string, any>) {
  const routes: RouteRecordRaw[] = [];

  Object.keys(modules).forEach((key: string) => {
    routes.push(modules[key].default);
  });
  return sortRoutes(routes);
}
