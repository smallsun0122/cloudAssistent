<template>
  <div id="mainView">

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

  #mainView {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .navbar {
    width: 100%;
    position: fixed;
    z-index: 98;
    box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.5);
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
  export default {
    data () {
      return {
        sidebarStatus: true,
        active: false
      }
    },
    mounted: function () {
      this.$store.dispatch('initNotice')
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
