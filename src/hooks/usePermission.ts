import { useUserStore } from '@/store';

export function usePermission() {
  const userStore = useUserStore();
  const hasPermission = (accesses: string[]): boolean => {
    if (!accesses || !accesses.length) return true;
    return userStore.permissions.some((item: string) => {
      return accesses.includes(item);
    });
  };
  return { hasPermission };
}
