import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './action'

Vue.use(Vuex)

// 数据
const state = {
  currentUser: {},
  meetings: [],
  society: [],
  room: {}, // 保存用户进入的房间信息
  roomMessages: [],
  roomMember: []
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
  },
  INIT_ROOM (state, room) {
    state.room = room
    const member = {
      userId: state.currentUser.userId,
      logo: state.currentUser.logoUrl,
      nickName: state.currentUser.nickName
    }
    state.roomMember.push(member)
  },
  ADD_MESSAGE (state, message) {
    state.roomMessages.push(message)
  },
  ADD_MEMBER (state, member) {
    state.roomMember.push(member)
  },
  REMOVE_MEMBER (state, id) {
    var index = -1
    state.members.forEach((member, i) => {
      if (member.userId === id) {
        index = i
      }
    })
    if (index !== -1) {
      state.members.splice(index, 1)
    }
  },
  SEND_MESSAGE (state, message) {
    state.room.ws.send(JSON.stringify(message))
  },
  ADD_SELF_MESSAGE (state, message) {
    const selfMsg = {
      message: message.message,
      self: true,
      publishId: state.currentUser.userId,
      roomId: state.room.id,
      date: new Date()
    }
    state.roomMessages.push(selfMsg)
  },
  CLEAR_ROOM (state) {
    state.room.ws.close()
    state.room = null
    state.roomMember.splice(0, state.roomMember.length)
    state.roomMessages.splice(0, state.roomMessages.length)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
