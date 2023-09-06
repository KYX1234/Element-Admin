import { storage } from '@/utils/storage';

const defaultThemeSetting = {
  isDark: false, // 暗黑模式
  themeColor: '', // 主题色
  menuMode: 'light', // 菜单栏模式(light|dark)
  breadCrumb: true, // 是否显示面包屑
  navTab: true, // 是否开启多页签
  navTabIcon: true, // 是否开启多页签图标
  menuUnique: false, // 只展开一个一级菜单
  grayMode: false, // 是否灰色模式
  animateMode: 'zoom-fade' // 动画
};

export const initThemeSetting = (): typeof defaultThemeSetting => {
  const themeSetting = storage.get('themeSetting');
  return themeSetting ? themeSetting : defaultThemeSetting;
};
