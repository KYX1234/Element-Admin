import type { Router } from 'vue-router'
import { storage } from '@/utils/storage'

const whiteList = ['/login']
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const isLogin = Boolean(storage.get('token'))
    if (whiteList.includes(to.path)) {
      return next()
    }
    if (!isLogin) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    next()
  })
  // router.afterEach((to) => {})
}
