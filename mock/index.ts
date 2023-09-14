import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import auth from './modules/auth';
import user from './modules/user';
import role from './modules/role';

export function setupProdMockServer() {
  createProdMockServer([...auth, ...user, ...role]);
}
