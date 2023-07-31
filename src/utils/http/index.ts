import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: 1000 * 60
})

request.interceptors.request.use((request) => {
  const userStore = useUserStore()
  /**
   * 全局拦截请求发送前提交的参数
   * 以下代码为示例，在请求头里带上 token 信息
   */
  if (userStore.isLogin && request.headers) {
    request.headers.Token = userStore.token
  }
  // 是否将 POST 请求参数进行字符串化处理
  if (request.method === 'post') {
    // request.data = qs.stringify(request.data, {
    //   arrayFormat: 'brackets',
    // })
  }
  return request
})

request.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    let message = error.message
    if (message === 'Network Error') {
      message = '后端网络故障'
    } else if (message.includes('timeout')) {
      message = '接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = `接口${message.substr(message.length - 3)}异常`
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
)

export default request
