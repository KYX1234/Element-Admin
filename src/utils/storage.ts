// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;
// 默认缓存关键字前缀
const CACHE_KEY = 'Element-Admin-';

/**
 * @description 操作本地 `localStorage`
 * @method set 设置缓存
 * @method get 获取缓存
 * @method remove 移除缓存
 * @method clear 移除全部缓存
 */
const creatStorage = () => {
  const get = <T = any>(key: string): T | null => {
    const item = localStorage.getItem(CACHE_KEY + key);
    if (item) {
      const data = JSON.parse(item);
      const { value, expire } = data;
      if (expire === null || expire >= Date.now()) {
        return value;
      } else {
        remove(CACHE_KEY + key);
      }
    }
    return null;
  };

  const set = <T = any>(key: string, value: T, expire: number | null = DEFAULT_CACHE_TIME) => {
    const localStorageItem = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null
    });
    localStorage.setItem(CACHE_KEY + key, localStorageItem);
  };

  const remove = (key: string) => {
    localStorage.removeItem(CACHE_KEY + key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return {
    set,
    get,
    remove,
    clear
  };
};

export const storage = creatStorage();
