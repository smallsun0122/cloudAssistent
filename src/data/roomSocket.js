/**
 * Created by wen on 2017/6/10.
 */

export const initRoomSocket = (ws, commit) => {
  initOpen(ws)
  initError(ws)
  initClose(ws)

  ws.onmessage = function (message) {
    console.log('接收到的信息' + message.data)
    const data = JSON.parse(message.data)
    switch (data.type) {
      // 聊天信息
      case 1: {
        handleMessage(commit, data)
        break
      }
      // 新成员加入房间的推送
      case 2: {
        addNewMember(commit, data)
        break
      }
      // 新成员进入房间之后接收到房间内所有成员成员名单的推送
      case 3: {
        getRoomMember(commit, data)
        break
      }
      // 成员退出
      case 4: {
        removeExitMember(commit, data)
        break
      }
    }
  }
}

/**
 * 保存一条信息
 */
function handleMessage (commit, data) {
  const message = {
    roomId: data.room,
    publishId: data.publisher,
    message: data.message,
    date: new Date(data.time),
    self: false
  }
  // 保存
  commit('ADD_MESSAGE', message)
}

function addNewMember (commit, data) {
  const member = {
    userId: data.userId,
    logo: data.logo,
    nickName: data.nickName
  }
  commit('ADD_MEMBER', member)
}

function getRoomMember (commit, data) {
  const d = data.data
  d.forEach(member => {
    commit('ADD_MEMBER', member)
  })
}

function removeExitMember (commit, data) {
  commit('REMOVE_MEMBER', data.userId)
}

function initOpen (ws) {
  ws.onopen = () => {
    console.log('房间连接成功')
  }
}

function initError (ws) {
  ws.onerror = function (event) {
    console.log('发生错误:' + event.toString())
  }
}

function initClose (ws) {
  ws.onclose = function (event) {
    console.log('关闭房间 ： ' + event.reason)
  }
}
