import router from '@/router'

export function addPathMatch() {
  if (!router.hasRoute('pathMatch')) {
    router.addRoute({
      path: '/:path(.*)*',
      name: 'pathMatch',
      redirect: '/error/404'
    })
  }
}
