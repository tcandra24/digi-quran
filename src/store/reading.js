export default {
  namespaced: true,
  state: {
    readSurah: []
  },
  mutations: {
    insert: (state, value) => {
      state.readSurah.push({
        nomor: value.nomor,
        nama: value.nama,
        ayat: 1,
        jmlAyat: value.jmlAyat
      })
    },
    update: (state, value) => {
      let index = state.readSurah.indexOf(value)
      state.readSurah.splice(index, 1, {
        nomor: value.nomor,
        nama: value.nama,
        ayat: value.ayat,
        jmlAyat: value.jmlAyat
      })
    }
  },
  actions: {
    add: ({ state, commit }, value) => {
      let dataItem = state.readSurah.find(item => item.nomor === value.nomor)
      if(!dataItem){
        commit('insert', value)
      } else {
        commit('update', value)
      }
    },
    update: ({ commit }, value) => {
      commit('update', value)
    } 
  },
  getters: {
    readSurah: state => state.readSurah,
    count: (state) => {
      return state.readSurah.length
    }
  }
}