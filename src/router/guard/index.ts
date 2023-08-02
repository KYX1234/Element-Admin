import type { Router } from 'vue-router'

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  const whiteList = ['/login']
  const isLogin = Boolean(localStorage.getItem('token'))

  router.beforeEach(async (to, from, next) => {
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
