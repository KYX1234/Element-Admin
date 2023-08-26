import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useUserStore } from '@/store';

const request = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  timeout: 1000 * 60
});

request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userStore = useUserStore();
  if (config.headers) {
    config.headers['Authorization'] = userStore.token;
  }
  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code !== 200) {
      ElMessage.error(response.data.message || '服务器端错误');
      return Promise.reject(new Error(response.data.message || 'Error'));
    }

    return Promise.resolve(response.data);
  },
  (error: AxiosError) => {
    let message = error.message;
    if (message === 'Network Error') {
      message = '后端网络故障';
    } else if (message.includes('timeout')) {
      message = '接口请求超时';
    } else if (message.includes('Request failed with status code')) {
      message = `接口${message.substring(message.length - 3)}异常`;
    }
    ElMessage.error(message);
    return Promise.reject(error);
  }
);

export default request;
