// getters.js用来获取state中的数据

export const getCurrentUser = state => state.currentUser

export const getAllMeetings = state => state.meetings

export const getMySociety = state => state.society

export const getDetailSociety = (state) => (id) => {
  return state.society.find(item => item.id === id)
}

export const getUser = (state) => (userId) => {
  return state.roomMember.find(user => user.userId === userId)
}

export const getRoomMembers = (state) => {
  return state.roomMember
}

export const getRoomMessages = (state) => {
  return state.roomMessages
}

export const getNoticeMessages = (state) => {
  return state.notice
}
