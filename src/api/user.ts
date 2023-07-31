

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>('post', '/login', { data })
}
