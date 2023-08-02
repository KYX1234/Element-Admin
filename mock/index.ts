import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import user from './modules/user'

export function setupProdMockServer() {
  createProdMockServer([...user])
}
