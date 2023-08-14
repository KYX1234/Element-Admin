import router from '@/router'

/** 追加任意路由 */
export function addPathMatch() {
  if (!router.hasRoute('pathMatch')) {
    router.addRoute({
      path: '/:path(.*)*',
      name: 'pathMatch',
      redirect: '/error/404'
    })
  }
}
