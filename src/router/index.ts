import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { LoginRoute, RootRoute, ErrorPageRoute } from './routes'
import { createRouterGuard } from './guard'
/** 静态路由 */
export const constantRoutes: RouteRecordRaw[] = [LoginRoute, RootRoute, ErrorPageRoute]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}

export default router
