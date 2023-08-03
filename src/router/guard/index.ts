import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const whiteList = ['/login']
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const user = useUserStore()

    if (whiteList.includes(to.path)) {
      return next()
    }
    if (!user.isLogin) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    next()
  })
  // router.afterEach((to) => {})
}
