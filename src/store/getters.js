// getters.js用来获取state中的数据

export const getCurrentUser = state => state.currentUser

export const getAllMeetings = state => state.meetings

export const getMySociety = state => state.society

export const getDetailSociety = (state) => (id) => {
  return state.society.find(item => item.id === id)
}
