<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="mainView">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <div class="navbar-brand header-flex">
          <img src="./assets/images/Cloud_small.png" alt="">
          <span>社团云助手</span>
        </div>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <form role="search" class="search-form">
              <div class="form-group">
                <input type="text" class="form-control  nav-input-search " placeholder="Search ">
                <i class="glyphicon glyphicon-search"></i>
              </div>
            </form>
          </li>
          <li>
            <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown" aria-expanded="false">
              <img src="./assets/images/remind.png">
              <span class="badge bg-danger">5</span>
            </a>
          </li>
          <li>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src="./assets/images/user1.png"  style="display: block;width: 24px;height: 24px;margin-top: 3px;">
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class="glyphicon glyphicon-off"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
    <!--顶部-->
    <toolbar></toolbar>

    <!--侧边栏-->
    <div class="box-holder">
      <div class="left-sidebar">
        <div class="sidebar-holder">
          <!--User-->
          <div class="user-menu">
            <img src="./assets/images/portrait.png" alt="" class="avatar">
            <div class="user-info">
              <div class="welcome">Welcome,</div>
              <div class="username">小太阳</div>
            </div>
          </div>
          <!--User-->
          <!--Menu-->
          <ul class="nav nav-list">
            <li v-for="(item,index) in items" @click="selectStyle (item, index) " :class="{'active':item.active}" >
              <router-link :to="items[index].path">
                <img v-bind:src="items[index].imgPath">
                <span>{{items[index].name}}</span>
              </router-link>
            </li>
          </ul>
          <!--Menu-->
        </div>
        <main-menu index="1"></main-menu>
      </div>
      <router-view style="margin-left: 220px ; padding-top: 60px"></router-view>
      <!--content-->
      <!--<div class="content animated fadeInBig">-->

      <!--{{getAPP()}}-->

      <!--</div>-->
      <!--content-->
    </div>
  </div>
</template>

<style>
  #mainView {
    width: 100%;
    height: 100%;
  }
  .navbar {
    width: 100%;
    position: fixed;
    z-index: 99;
  }
  .navbar.nav-delighted.navbar-default {
    height: 60px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 0px;
  }
  .navbar.nav-delighted.navbar-default .navbar-brand {
    font-size: 18px;
    font-family: 'Droid Sans', sans-serif;
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

  .left-sidebar {
    position: fixed;
    margin-top: 60px;
    background-color: #232b2d;
    width: 220px;
    z-index: 1001;
    height: 100%;
    color: #80969c;
    -webkit-transition: 500ms ease;
    -moz-transition: 500ms ease;
    -o-transition: 500ms ease;
    -ms-transition: 500ms ease;
    transition: 500ms ease;
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
    font-size: 14px;
    font-weight: 400;
    padding: 13px 10px;
    font-family: 'Open Sans', sans-serif;
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
    padding-left: 50px;
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
    margin: 0 10px;
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
  .bg-danger {
    background-color: #F9354C;
  }

  .badge {
    margin: -18px 0 0 -22px;
  }
</style>

<script>
  import Toolbar from './components/nav/Toolbar.vue'
  import MainMenu from './components/nav/MainMenu.vue'
  import store from './store/store'
  export default {
    data () {
      return {
        active: false,
        items: [
          {
            path: '/meeting',
            name: '会议',
            imgPath: require('./assets/images/meet.png'),
            active: true
          },
          {
            path: '/Announcement',
            name: '任务',
            imgPath: require('./assets/images/task1.png')
          },
          {
            path: '/notices/Announcement',
            name: '公告',
            imgPath: require('./assets/images/notice1.png')
          },
          {
            path: '/Announcement',
            name: '邀请成员',
            imgPath: require('./assets/images/add1.png')
          },
          {
            path: '/society',
            name: '社团管理',
            imgPath: require('./assets/images/book.png')
          },
          {
            path: '/setinfo/MyInfo',
            name: '个人设置',
            imgPath: require('./assets/images/set.png')
          },
          {
            path: '/setinfo/MyInfo',
            name: '账号密码',
            imgPath: require('./assets/images/psd.png')
          }
        ]
      }
    },
    components: {
      Toolbar, MainMenu
    },
    store,
    mounted () {
    }
  }
</script>
