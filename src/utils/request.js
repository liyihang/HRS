// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getTimeStamp } from './auth'
import router from '@/router'

// 设置超时时间
const timeOut = 3600
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(
  config => {
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 判断是否超时
      if (checkTimeout()) {
        // 超时就退出
        store.dispatch('user/logout')
        // 跳转到login页
        router.push('/login')
        return Promise.reject(new Error('token 超时了'))
      }
      // 如果token存在 注入token
      config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  }, error => {
    return Promise.reject(error)
  }
) // 请求拦截器
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  // 提示错误
  Message.error(error.message)
  // 执行错误提示，进入catch
  return Promise.reject(error)
}) // 响应拦截器

// 超时检测  当前时间-缓存时间 是否大于超时时间 timeout
function checkTimeout() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > timeOut
}
export default service // 导出axios实例
