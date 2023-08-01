import { createProdMockServer } from 'vite-plugin-mock/dist/client'
import user from './modules/user'

export function setupProdMockServer() {
  createProdMockServer([...user])
}
