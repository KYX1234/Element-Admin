import { viteMockServe } from 'vite-plugin-mock'

export default (viteEnv: ImportMetaEnv) => {
  const prodMock = viteEnv.VITE_PROD_MOCK === 'Y' || true
  return viteMockServe({
    mockPath: 'mock',
    enable: prodMock, //是否启用mock开关(默认开启)
    watchFiles: false,
    configPath: `
			import { setupProdMockServer } from '../../mock';
			setupProdMockServer()
		`
  })
}
