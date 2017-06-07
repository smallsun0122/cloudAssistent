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
  }
}
