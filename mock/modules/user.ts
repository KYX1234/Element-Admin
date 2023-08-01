import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/api/login',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        message: 'ok',
        data: {
          token: `${body.username}_@string`
        }
      }
    }
  }
] as MockMethod[]
