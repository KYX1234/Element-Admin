import { getModulesRoutes } from '@/router/helpers';

const modules = import.meta.glob('./*.ts', { eager: true });

export const asyncRouter = getModulesRoutes(modules);
