import { viteMockServe } from 'vite-plugin-mock';

export default (viteEnv: ImportMetaEnv) => {
  const prodMock = viteEnv.VITE_PROD_MOCK === 'Y';
  return viteMockServe({
    mockPath: 'mock',
    prodEnabled: prodMock, //生产是否启用mock开关(默认开启)
    injectCode: `
      import { setupProdMockServer } from '../mock'
			setupProdMockServer()
		`
  });
};
