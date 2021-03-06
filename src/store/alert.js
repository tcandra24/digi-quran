export default {
  namespaced: true,
  state: {
    status: false,
    color: 'success',
    text: ''
  },
  mutations: {
    set: (state, value) => {
      state.status = value.status
      state.color = value.color
      state.text = value.text
    }
  },
  actions: {
    set: ({ commit }, value) => {
      commit('set', value)
    }
  },
  getters: {
    status: state => state.status,
    color: state => state.color,
    text: state => state.text
  }
}