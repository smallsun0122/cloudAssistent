import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './action'

Vue.use(Vuex)

// 数据
const state = {
  currentUser: {}
}

// 处理保存的动作
const mutations = {
  INIT_CURRENT_USER (state, user) {
    state.currentUser = user
  }
}

// 建议使用四个单独的文件
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
