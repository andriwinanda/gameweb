import { createStore } from 'vuex'
import login from './modules/login'

export default createStore({
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state, val) {
      state.isLoading = val
    }
  },
  modules: {
    login
  }
})
