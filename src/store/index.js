import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    payments: []
  },
  mutations: {
    setData(state, data) {
      state.payments.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
