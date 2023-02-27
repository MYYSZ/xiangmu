import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './home/index'
import search from './search';
import detail from './detail/detail.js'

export default new Vuex.Store({
  modules: {
   home,
   search,
   detail
 }
});