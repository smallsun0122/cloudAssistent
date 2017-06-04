// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Login from './Login.vue'
import router from './router'

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://112.74.214.252:8080/acloud/'
Vue.prototype.$http.defaults.withCredentials = true
Vue.prototype.$http.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  router,
  template: '<Login/>',
  components: { Login }
})
