import { RouteRecordRaw } from 'vue-router'

interface Itags {
  name: string
  path: string
}

/** 过滤固定页签 */
export const filterAffixTags = (routes: RouteRecordRaw[]) => {
  const tags: Itags[] = []
  routes.forEach((route: RouteRecordRaw) => {
    if (route.meta?.affix) {
      tags.push({ name: route.meta?.title, path: route.path })
    }
  })

  return tags
}
