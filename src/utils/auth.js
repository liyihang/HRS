import Cookies from 'js-cookie'

// token
const TokenKey = 'hrsaas-ihrm-token'
// timeStamp
const time_key = 'hrsaas-timestamp-key'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(time_key)
}
// 设置时间戳
export function setTimeStamp() {
  Cookies.set(time_key, Date.now())
}
