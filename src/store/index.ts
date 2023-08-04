import { createStore } from 'vuex'
import login from './modules/login'

export default createStore({
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state: { isLoading: any }, val: any) {
      state.isLoading = val
    }
  },
  modules: {
    login
  }
})
