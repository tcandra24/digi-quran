import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import reading from '@/store/reading'

const persistVuex = new VuexPersist({
  key: 'digiquran-data',
  storage: localStorage
}) 

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[persistVuex.plugin],
  state: {
    title: ''
  },
  mutations: {
    set: (state, value) => {
      state.title = value.text
    }
  },
  actions: {
    set: ({ commit }, value) => {
      commit('set', value)
    }
  },
  getters: {
    title: state => state.title
  },
  modules: {
    reading
  }
})
