import Vue from 'vue'
import Vuex from 'vuex'
// 这里是这样导入的
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

// 建议使用四个单独的文件
export default new Vuex.Store({
  state: {
    platform: '不知道是什么平台哦'
  },
  mutations: {
    SET_APP (state, platform) {
      // 设置数据
      state.platform = platform
    }
  },
  actions,
  getters
})
