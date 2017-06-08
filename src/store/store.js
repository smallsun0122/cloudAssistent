import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './action'

Vue.use(Vuex)

// 数据
const state = {
  currentUser: {},
  meetings: [],
  society: []
}

// 处理保存的动作
const mutations = {
  INIT_CURRENT_USER (state, user) {
    state.currentUser = user
  },
  INIT_MEETING (state, meeting) {
    state.meetings = meeting
  },
  INIT_SOCIETY (state, society) {
    state.society = society
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
