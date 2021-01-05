export default {
  namespaced: true,
  state: {
    step: 1,
  },
  getters: {
    step: (state) => state.step,
    showAlert: (state) => state.alertLogin,
  },
  mutations: {
    step(state, payload) { state.step = payload; },
  },

};
