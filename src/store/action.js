// Action提交的是mutation，而不是直接更改数据状态，而且在Action中可以包含任意的异步操作
import http from '../data/user'

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
  http.getSociety(society => {
    commit('INIT_SOCIETY', society)
  })
}
