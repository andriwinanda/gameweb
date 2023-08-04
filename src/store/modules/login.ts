import { setToken, removeToken, setUser, getUser, removeUser } from '../../helper/localstorageHelper'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const state = {
  isLoggedIn: !!(getUser()),
  username: getUser() || ''
}

const mutations = {
  [LOGIN] (state: { isLoggedIn: boolean }) {
    state.isLoggedIn = true
  },
  [LOGOUT] (state: { isLoggedIn: boolean }) {
    state.isLoggedIn = false
  }
}
const actions = {
  login ({ commit, state }: any, value: { token: any; username: any }) {
    state.isLoggedIn = true
    setToken(value.token)
    setUser(value.username)
  },
  logout () {
    removeUser()
    removeToken()
  }

}

export default {
  namespaced: true,
  strict: true,
  state,
  mutations,
  actions
}
