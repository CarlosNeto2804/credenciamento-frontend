import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hitlogin: false,
  },
  mutations: {

    change(state, payload) { state.hitlogin = payload; },
  },
  getters: {
    hitlogin: (state) => state.hitlogin,
  },
  actions: {
  },
  modules: {
  },
});
