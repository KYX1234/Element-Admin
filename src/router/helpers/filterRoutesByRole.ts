import { RouteRecordRaw } from 'vue-router';
/**
 * 根据用户权限过滤路由
 * @param route - 权限路由
 * @param roles - 权限
 */
function hasPermission(route: RouteRecordRaw, role: string) {
  return !route.meta?.roles || (route.meta?.roles as string[]).includes(role);
}

/** 递归过滤异步路由表，筛选角色权限路由
 * @param routes - 权限路由组
 * @param roles - 权限
 */
export function filterRoutesByRole(routes: RouteRecordRaw[], role: string) {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route: RouteRecordRaw) => {
    const tmp = { ...route };
    if (hasPermission(tmp, role)) {
      if (tmp.children) {
        tmp.children = filterRoutesByRole(tmp.children, role);
      }
      res.push(tmp);
    }
  });
  return res;
}
