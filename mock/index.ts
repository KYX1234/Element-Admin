import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import auth from './modules/auth';
import user from './modules/user';

export function setupProdMockServer() {
  createProdMockServer([...auth, ...user]);
}
