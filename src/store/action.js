// Action提交的是mutation，而不是直接更改数据状态，而且在Action中可以包含任意的异步操作
import http from '../data/user'
import * as socket from '../data/roomSocket'

/**
 * 初始化当前用户
 */
export const initCurrentUser = ({commit}) => {
  http.getCurrentUser(user => {
    commit('INIT_CURRENT_USER', user)
  })
}

export const initMeeting = ({commit}) => {
  http.getMeeting(meetings => {
    commit('INIT_MEETING', meetings)
  })
}

export const initMySociety = ({commit}) => {
  http.getSociety(society => { commit('INIT_SOCIETY', society) })
}

export const initRoom = ({commit}, room) => {
  const ws = new WebSocket('ws://112.74.214.252:8080/acloud/ws?roomId=' + room.id)
  // const ws = new WebSocket('ws://127.00.1:8080/ws?roomId=' + room.id)
  socket.initRoomSocket(ws, commit)
  room.ws = ws
  commit('INIT_ROOM', room)
}

export const sendMessage = ({commit}, message) => {
  // 发送给服务端
  commit('SEND_MESSAGE', message)

  // 显示在浏览器
  commit('ADD_SELF_MESSAGE', message)
}

export const clearRoom = ({commit}) => {
  commit('CLEAR_ROOM')
}

export const addNotice = ({commit}, message) => {
  commit('ADD_NOTICE', message)
}


