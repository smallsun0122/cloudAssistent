/**
 * Created by 小太阳 on 2017/6/2.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainView from './MainView.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mainView',
  router,
  template: '<MainView/>',
  components: { MainView }
})
