import { RouteRecordRaw } from 'vue-router';

/** 过滤固定页签 */
export const filterAffixTags = (routes: RouteRecordRaw[]) => {
  const tags: App.TabsView[] = [];
  routes.forEach((route: RouteRecordRaw) => {
    if (route.meta?.affix) {
      tags.push({
        title: route.meta?.title,
        fullPath: route.path,
        icon: route.meta?.icon,
        affix: route.meta?.affix
      });
    }
  });

  return tags;
};
