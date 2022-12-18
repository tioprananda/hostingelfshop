import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import homeview from './modules/homeview'


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules : {
    homeview
  }

})
