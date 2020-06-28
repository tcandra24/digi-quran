import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import reading from '@/store/reading'
import alert from '@/store/alert'
import dialog from '@/store/dialog'

const persistVuex = new VuexPersist({
  key: 'digiquran-data',
  storage: localStorage
}) 

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[persistVuex.plugin],
  state: {
    title: '',
    surat: [],
  },
  mutations: {
    set: (state, value) => {
      state.title = value.text
    },
    addSurat: (state, value) => {
      state.surat = value
    }
  },
  actions: {
    set: ({ commit }, value) => {
      commit('set', value)
    },
    addSurat: ({ commit }, value) => {
      commit('addSurat', value)
    }
  },
  getters: {
    title: state => state.title,
    surat: state => state.surat,
  },
  modules: {
    reading,
    alert,
    dialog
  }
})
