import { defineStore } from 'pinia';
import router from '@/router';
import { useUserStore } from './user';
import { asyncRouter } from '@/router/modules';
import { filterRoutesByRole, filterRoutesToMenus } from '@/router/helpers';

interface IRouteState {
  /** 权限路由的模式(static|dynamic) */
  routeMode: ImportMetaEnv['VITE_ROUTE_MODE'];
  /** 是否初始化权限路由的生成 */
  isInitRoute: boolean;
  /** 菜单渲染数据 */
  menus: App.Menu[];
  /** 缓存的路由 */
  cacheList: string[];
}

export const useRouteStore = defineStore({
  id: 'route',
  state: (): IRouteState => ({
    routeMode: import.meta.env.VITE_ROUTE_MODE,
    isInitRoute: false,
    menus: [],
    cacheList: []
  }),
  getters: {},
  actions: {
    /** 初始化权限路由 */
    initRoute() {
      if (this.routeMode === 'static') {
        this.initStaticRoute();
      } else {
        this.initDynamicRoute();
      }
    },
    /** 静态权限路由 */
    initStaticRoute() {
      const userStore = useUserStore();
      const routes = filterRoutesByRole(asyncRouter, userStore.userInfo.role);
      routes.forEach((route) => {
        route.children?.length ? router.addRoute(route) : router.addRoute('root', route);
      });
      const menus = filterRoutesToMenus(routes);
      this.setMenus(menus);
      this.isInitRoute = true;
    },
    /** 动态权限路由 */
    initDynamicRoute() {},
    /** 设置菜单 */
    setMenus(menus: App.Menu[]) {
      this.menus = menus;
    }
  }
});
