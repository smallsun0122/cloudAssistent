<template>
  <div id="mainView">
    <div class="background"></div>
    <!--顶部-->
    <toolbar ></toolbar>

    <!--侧边栏-->
    <div class="box-holder">
      <div class="left-sidebar">
        <main-menu index="1"></main-menu>
      </div>

      <router-view class="main-content" style="margin-left: 220px ; padding-top: 80px"></router-view>

    </div>
  </div>
</template>

<style>
  body{
      font: 14px/1.5 'Cuprum',sans-serif,Tahoma,Verdana,Helvetica;
  }

  .background{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: -1
  }

  #mainView {
    width: 100%;
    height: 100%;
  }

  .navbar {
    width: 100%;
    position: fixed;
    z-index: 98;
  }

  .navbar-default{
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  }

  .navbar.nav-delighted.navbar-default {
    height: 60px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 0px;
  }

  .navbar.nav-delighted.navbar-default .navbar-brand {
    font-size: 18px;
    font-family: 'Cuprum', sans-serif;
    padding: 0px;
    line-height: 60px;
    width: 220px;
    text-align: center;
  }

  .header-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  .header-flex img {
    width: 42px;
    height: 30px;
    display: block;
  }

  .header-flex span {
    margin-left: 10px;
  }

  .navbar.nav-delighted.navbar-default .search-form {
    margin-top: 13px;
    margin-right: 34px;
  }

  .navbar.nav-delighted.navbar-default .search-form input {
    height: 32px;
    width: 155px;
    border-radius: 16px;
    color: #23bab5;
    padding-left: 30px;
    background-color: white;
    border: 1px solid white;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .navbar.nav-delighted.navbar-default .search-form i.glyphicon-search {
    color: #c2c7c1;
    margin-top: 21px;
    margin-left: 10px;
    position: absolute;
    font-size: 14px;
  }

  .navbar.nav-delighted.navbar-default a.logout {
    font-size: 24px;
    color: #23bab5;
    height: 60px;
    width: 60px;
    text-align: center;
    -webkit-transition: 300ms ease;
    -moz-transition: 300ms ease;
    -o-transition: 300ms ease;
    transition: 300ms ease;
  }

  .box-holder {
    /*min-height: 1200px !important;*/
  }

  .main-content {
    padding-left: 20px;
    -webkit-transition: 500ms ease;
    -moz-transition: 500ms ease;
    -o-transition: 500ms ease;
    -ms-transition: 500ms ease;
    transition: 500ms ease;
  }

  .left-sidebar {
    position: fixed;
    margin-top: 62px;
    background-color: #232b2d;
    /*width: 220px;*/
    z-index: 98;
    height: 100%;
    width:220px;
    color: #80969c;
    -webkit-transition: 500ms ease;
    -moz-transition: 500ms ease;
    -o-transition: 500ms ease;
    -ms-transition: 500ms ease;
    transition: 500ms ease;
  }

  .left-sidebar-hidden {
      transform: translate(-220px,0px);
  }

  .left-sidebar .user-menu {
    width: 100%;
    height: 90px;
    padding-top: 5px;
    border-bottom: 1px solid #2e393b;
    -webkit-transition: 300ms ease;
    -moz-transition: 300ms ease;
    -o-transition: 300ms ease;
    transition: 300ms ease;
  }

  .left-sidebar .user-menu img.avatar {
    border: 2px solid #23bab5;
    border-radius: 50%;
    margin-right: 10px;
    width: 50px;
    height: 50px;
  }

  .left-sidebar .user-menu .user-info {
    padding-top: 8px;
    display: inline-block;
  }

  .left-sidebar .user-menu .user-info .welcome {
    font-style: italic;
    font-weight: 100;
    font-size: 12px;
    line-height: 12px;
  }

  .left-sidebar .user-menu .user-info .username {
    font-family: 'Droid Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
    height: 30px;
    color: #80969c;
  }

  .user-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-sidebar .sidebar-holder .nav li.active > a {
    text-decoration: none;
    background-color: #1A2022;
    border-left: 3px solid #23bab5;
    color: #ffffff;
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }

  .left-sidebar .sidebar-holder .nav li a {
    color: #80969c;
    font-size: 16px;
    font-weight: 400;
    padding: 18px 10px;
    font-family: 'Open Sans', sans-serif;
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
    padding-left: 40px;
  }

  .active>a{
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.7) inset;
  }

  .left-sidebar .sidebar-holder .nav li.active > a img {
    color: #ffffff;
  }

  .left-sidebar .sidebar-holder .nav li a img {
    display: inline-block;
    font-size: 14px;
    margin: 0 10px;
    text-align: center;
    width: 20px;
  }

  .left-sidebar .sidebar-holder .nav li a i {
    display: inline-block;
    font-size: 14px;
    margin: 0 15px 0 10px;
    text-align: center;
    width: 20px;
  }

  .left-sidebar .sidebar-holder .nav > li ul > li > a {
    font-size: 14px;
    font-weight: 400;
    padding: 10px 5px;
    display: block;
    color: #80969c;
  }

  .content {
    z-index: 99;
    padding: 80px 0 0 280px;
    -webkit-transition: 500ms ease;
    -moz-transition: 500ms ease;
    -o-transition: 500ms ease;
    transition: 500ms ease;
  }

  .glyphicon-time {
    font-size: 20px;
    font-weight: normal;
    color: #c2c7c1;
  }



  .badge {
    margin: -18px 0 0 -22px;
  }
</style>

<script>
  import Toolbar from './components/nav/Toolbar.vue'
  import MainMenu from './components/nav/MainMenu.vue'
  import notice from './tips'
  export default {
    data () {
      return {
        sidebarStatus: true,
        active: false
      }
    },
    mounted: function () {
      let that = this
      const ws = new WebSocket('ws://112.74.214.252:8080/acloud/push')
      // const ws = new WebSocket('ws://127.00.1:8080/ws?roomId=' + room.id)
      ws.onmessage = function (message) {
        console.log('接收到的信息' + message.data)
        notice.alert(1, '你有一条', 2)
        that.$store.dispatch('addNotice', JSON.parse(message.data))
      }
      ws.onopen = function () {
        console.log('连接成功!')
      }
      ws.close = function () {
        console.log('连接关闭!')
      }
      ws.onerror = function (event) {
        console.log('发生错误:' + event.toString())
      }
    },
    methods: {
      sidebarChange: function () {
        var l = document.getElementsByClassName('main-content')
        if (this.sidebarStatus) {
          document.getElementsByClassName('left-sidebar')[0].setAttribute('class', 'left-sidebar left-sidebar-hidden')
          l[0].style.marginLeft = 0
          this.sidebarStatus = false
        } else {
          document.getElementsByClassName('left-sidebar')[0].setAttribute('class', 'left-sidebar')
          l[0].style.marginLeft = 220
          this.sidebarStatus = true
        }
      }
    },
    components: {
      Toolbar, MainMenu
    }
  }
</script>
