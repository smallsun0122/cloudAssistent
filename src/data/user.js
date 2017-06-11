import axios from 'axios'

export default{
  /**
   * 获取到当前登录用户的信息
   * @param callback
   */
  getCurrentUser: function (callback) {
    axios.get('user/info')
      .then(function (response) {
        callback(response.data)
      })
  },
  getMeeting: function (callback) {
    axios.get('meeting')
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getSociety: function (callback) {
    axios.get('society/user')
      .then(function (response) {
        callback(response.data)
      })
  }
}
