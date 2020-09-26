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
      let index = state.readSurah.findIndex(data => data.nomor === value.nomor)
      let ayat = value.ayat;
      if(value.updateMode == 'next'){
        ayat += 1
      }else if(value.updateMode == 'prev') {
        ayat -= 1
      }
      state.readSurah.splice(index, 1, {
        nomor: value.nomor,
        nama: value.nama,
        ayat: ayat,
        jmlAyat: value.jmlAyat
      })
    },
    remove: (state, value) => {
      let idx = state.readSurah.indexOf(value)
      state.readSurah.splice(idx, 1)
    },
    removeAll: (state) => {
      state.readSurah = []
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
    },
    removing: ({ commit }, value) => {
      commit('remove', value)
    },
    removingAll: ({ commit }) => {
      commit('removeAll')
    }
  },
  getters: {
    readSurah: state => state.readSurah,
    count: (state) => {
      return state.readSurah.length
    }
  }
}