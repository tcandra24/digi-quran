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
    drawer: false,
    surat: [],
    mode: {
      name: 'single',
      component: 'single-view',
      index: 0
    }
  },
  mutations: {
    set: (state, value) => {
      state.title = value.text
    },
    addSurat: (state, value) => {
      state.surat = value
    },
    setKet: (state, value) => {
      let index = state.surat.find(data => data.nomor == value)
      // console.log(index)
      state.surat.splice(value - 1, 1, {
        arti: index.arti,
        asma: index.asma,
        ayat: index.ayat,
        keterangan : index.keterangan,
        nama: index.nama,
        name: index.name,
        nomor: index.nomor,
        rukuk: index.rukuk,
        showKet : !index.showKet,
        start: index.start,
        type: index.type,
        urut: index.urut
      })
    },
    setMode: (state, value) => {
      state.mode.name = value.name
      state.mode.component = value.component
      state.mode.index = value.index
    },
    setDrawer: (state, value) => {
      state.drawer = value 
    }
  },
  actions: {
    set: ({ commit }, value) => {
      commit('set', value)
    },
    addSurat: ({ commit }, value) => {
      commit('addSurat', value)
    },
    setKet: ({ commit }, value) => {
      commit('setKet', value)
    },
    setMode: ({ commit }, value) => {
      commit('setMode', value)
    },
    setDrawer: ({ commit }, value) => {
      commit('setDrawer', value)
    }
  },
  getters: {
    title: state => state.title,
    surat: state => state.surat,
    mode: state => state.mode,
    drawer: state => state.drawer
  },
  modules: {
    reading,
    alert,
    dialog
  }
})
