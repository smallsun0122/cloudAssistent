// Action提交的是mutation，而不是直接更改数据状态，而且在Action中可以包含任意的异步操作
import http from '../data/user'

export const initCurrentUser = ({commit}) => {
  http.getCurrentUser(user => {
    commit('INIT_CURRENT_USER', user)
  })
}
