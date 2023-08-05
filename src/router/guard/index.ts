import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import NProgress from '@/utils/nprogress'
import { storage } from '@/utils/storage'
const whiteList = ['/login']
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const user = useUserStore()
    console.log(user)
    if (whiteList.includes(to.path)) {
      return next()
    }
    console.log(user, storage.get('token'))
    if (!user.isLogin) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
