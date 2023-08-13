import { defineStore } from 'pinia'
import { asyncRouter } from '@/router/modules'
import { filterRoutesByRole } from '@/router/helpers/filterRoutesByRole'
import { useUserStore } from './user'

interface IRouteState {
  /** 权限路由的模式(static|dynamic) */
  routeMode: ImportMetaEnv['VITE_ROUTE_MODE']
  /** 是否初始化权限路由的生成 */
  isInitRoute: boolean
}

export const useRouteStore = defineStore({
  id: 'route',
  state: (): IRouteState => ({
    routeMode: import.meta.env.VITE_ROUTE_MODE,
    isInitRoute: false
  }),
  getters: {},
  actions: {
    /** 初始化权限路由 */
    initRoute() {
      if (this.routeMode === 'static') {
        this.initStaticRoute()
      } else {
        this.initDynamicRoute()
      }
    },
    initStaticRoute() {
      const userStore = useUserStore()
      const routes = filterRoutesByRole(asyncRouter, userStore.userInfo.role)
      console.log(routes)
      this.isInitRoute = true
    },
    initDynamicRoute() {}
  }
})
