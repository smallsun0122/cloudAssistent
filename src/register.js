/**
 * Created by 小太阳 on 2017/6/2.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Register from './Register.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$http = axios
// Vue.prototype.$http.defaults.baseURL = 'http://112.74.214.252:8080/acloud/'
Vue.prototype.$http.defaults.baseURL = 'http://127.0.0.1:8080'
Vue.prototype.$http.defaults.withCredentials = true
Vue.prototype.$http.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

/* eslint-disable no-new */
new Vue({
  el: '#register',
  router,
  template: '<Register/>',
  components: { Register }
})
