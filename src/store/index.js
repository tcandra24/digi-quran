import Vue from 'vue'
import Vuex from 'vuex'
import reading from '@/store/reading'

Vue.use(Vuex)

export default new Vuex.Store({
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
