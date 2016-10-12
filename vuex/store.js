import Vue from 'vue'
import Vuex from 'vuex'
import ls from 'local-storage'

import middlewares from './middlewares'
import * as getters from './getters'
import * as actions from './actions'
import { mutations } from './mutations'

Vue.use(Vuex)

export const STORAGE_KEY = 'noot-notes'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  ls.clear()
}

const state = {
	notes: JSON.parse(ls.get(STORAGE_KEY) || '[]'),
	activeNote: {}
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  middlewares
})
