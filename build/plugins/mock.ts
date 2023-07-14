import { viteMockServe } from 'vite-plugin-mock'

export default (viteEnv: ImportMetaEnv) => {
	const prodMock = viteEnv.VITE_PROD_MOCK === 'Y'

	return viteMockServe({
		mockPath: 'mock',
		enable: prodMock, //是否启用mock开关
		configPath: `
			import { setupMockServer } from '../mock';
			setupMockServer();
		`
	})
}
