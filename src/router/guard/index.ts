import type { Router } from 'vue-router';
import NProgress from '@/utils/nprogress';
import { useUserStore, useRouteStore } from '@/store';

const whiteList = ['/login'];
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  const userStore = useUserStore();
  const routeStore = useRouteStore();
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    // 访问登录页，有token不做跳转，没有跳转登录页
    if (to.path === '/login') {
      if (userStore.isLogin) return next(from.fullPath);
      return next();
    }
    // 白名单放行
    if (whiteList.includes(to.path)) return next();

    // token不存在，跳登录页
    if (!userStore.isLogin) return next({ path: '/login', query: { redirect: to.fullPath } });

    // 未初始化路由，等待执行
    if (!routeStore.isInitRoute) {
      routeStore.initRoute();
      return next({ path: to.fullPath, replace: true, query: to.query, hash: to.hash });
    }

    // 匹配到未知路径,跳404
    if (to.name === 'not-found') return next({ path: '/error' });

    // 默认放行
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
