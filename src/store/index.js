import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const data = {
  "page1": [
    { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
    { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
    { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
  ],
  "page2": [
    { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
    { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
  ],
  "page3": [
    { "id": 7, "date": "26.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 8, "date": "27.03.2020", "category": "Sport", "value": 901 },
    { "id": 9, "date": "28.03.2020", "category": "Food", "value": 200 }
  ],
}


export default new Vuex.Store({
  state: {
    payments: [],
    count: 3,
    pageNumber: 1,
    viewPage: [],
    downloadData: []

  },
  mutations: {
    setData(state, data) {
      state.payments.push(data)
    },
    changePageNumber(state, page) {
      state.pageNumber = page
    },
    addData(state, data) {
      for (let item of data) {
        state.payments.push(item)
      }
    },
  },
  actions: {
    fetchData(context, page) {
      return new Promise((res) => {
        setTimeout(() => {
          let base = data[`page${page}`];
          res(base)
        }, 1000)
      }).then(response => context.commit('addData', response))
    }

  },
  modules: {
  },
  getters: {
    getPaymentLength: state => state.payments.length,
    getCount: state => state.count,
    getPageNumber: state => state.pageNumber,
    getPayment: state => state.payments,
    getViewPage: state => state.viewPage
  }
})
