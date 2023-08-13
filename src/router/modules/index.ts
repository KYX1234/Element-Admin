import { getModulesRoutes } from '../helpers/filterModules'

const modules = import.meta.glob('./*.ts', { eager: true })

export const asyncRouter = getModulesRoutes(modules)
