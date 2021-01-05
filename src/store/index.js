import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import event from './modules/event';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event,
    auth,
  },
});
