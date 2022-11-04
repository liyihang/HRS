import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
const state = {
  // 设置token为共享状态
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  // 移除token
  removeToken(state) {
    state.token = null
    removeToken()
  },
  // 获取用户信息
  setUserInfo(state, result) {
    state.userInfo = result
  },
  // 删除用户信息
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    context.commit('setUserInfo', result)
    return result
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

