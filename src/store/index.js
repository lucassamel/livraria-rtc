import Vuex from "vuex";
import Vue from "vue";
import iten from './modules/iten'
import account from './modules/account'



Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      iten,
      account
    }
  });