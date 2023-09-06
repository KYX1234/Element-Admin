import { defineStore } from 'pinia';
import { storage } from '@/utils/storage';
import { initThemeSetting } from '@/config';
import { getThemeColor } from '@/utils/theme';

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => initThemeSetting(),
  getters: {},
  actions: {
    setIsDark(dark: boolean) {
      this.isDark = dark;
      if (dark) {
        this.menuMode = 'light';
        document.documentElement.className = 'layout-menu-light dark';
      } else {
        document.documentElement.classList.remove('dark');
      }
      storage.set('themeSetting', this.$state);
    },
    setGrayMode(grayMode: boolean) {
      this.grayMode = grayMode;
      document.documentElement.classList.toggle('html-grey');
      storage.set('themeSetting', this.$state);
    },
    setMenuMode(menuMode: string) {
      this.menuMode = menuMode;
      const dark = this.isDark ? 'dark' : '';
      document.documentElement.className = `layout-menu-${menuMode} ${dark}`;
      storage.set('themeSetting', this.$state);
    },
    setBreadCrumb(breadCrumb: boolean) {
      this.breadCrumb = breadCrumb;
      storage.set('themeSetting', this.$state);
    },
    setMenuUnique(menuUnique: boolean) {
      this.menuUnique = menuUnique;
      storage.set('themeSetting', this.$state);
    },
    setNavTab(navTab: boolean) {
      this.navTab = navTab;
      storage.set('themeSetting', this.$state);
    },
    setNavTabIcon(navTabIcon: boolean) {
      this.navTabIcon = navTabIcon;
      storage.set('themeSetting', this.$state);
    },
    setThemeColor(color: string) {
      if (!color) return;
      const colors = {
        '--el-color-primary': color,
        '--el-color-primary-dark-2': getThemeColor(this.isDark, color, 0.3),
        ...Array.from({ length: 9 }, (_: unknown, i: number) => ({
          [`--el-color-primary-light-${i + 1}`]: getThemeColor(this.isDark, color, (i + 1) / 10)
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
      };
      const theme =
        (this.isDark ? 'html.dark' : ':root') +
        JSON.stringify(colors).replace(/,/g, ';').replace(/"/g, '');
      let style = document.getElementById('theme-var');
      if (style) {
        style.innerHTML = theme;
      } else {
        style = document.createElement('style');
        style.textContent = theme;
        style.id = 'theme-var';
        document.head.append(style);
      }
      this.themeColor = color;
      storage.set('themeSetting', this.$state);
    },
    setAnimateMode(animateMode: string) {
      this.animateMode = animateMode;
      storage.set('themeSetting', this.$state);
    }
  }
});
