export default {
  namespaced: true,
  state: {
    alertLogin: false,
    authorized: false,
  },
  getters: {
    isAuthorized: (state) => {
      if (sessionStorage.getItem('isAuthorized') !== null) {
        state.authorized = sessionStorage.getItem('isAuthorized');
      }
      return state.authorized;
    },
    showAlert: (state) => state.alertLogin,
  },
  mutations: {
    isAuthorized(state, payload) { state.authorized = payload; },
    showAlert(state, payload) { state.alertLogin = payload; },
  },
  actions: {
    isAuthorized({ commit }, payload) {
      const data = sessionStorage.getItem('isAuthorized');
      if (data === null) {
        sessionStorage.setItem('isAuthorized', payload);
        commit('isAuthorized', payload);
      } else {
        commit('isAuthorized', data);
      }
    },

  },

};
