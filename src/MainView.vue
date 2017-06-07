<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="mainView">

    <!--顶部-->
    <toolbar></toolbar>

    <!--侧边栏-->
    <div class="box-holder">
      <div class="left-sidebar">
        <main-menu index="1"></main-menu>
      </div>
      <!--content-->
      <div class="content animated fadeInBig">
        <router-view></router-view>
      </div>
      <!--content-->
    </div>

  </div>
</template>

<style>
  #mainView {
    width: 100%;
    height: 100%;
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
//  import { initStore } from './vuex/action'
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
            path: '/Announcement',
            name: '公告',
            imgPath: require('./assets/images/notice1.png')
          },
          {
            path: '/Announcement',
            name: '设置',
            imgPath: require('./assets/images/set.png')
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
          }
        ]
      }
    },
    components: {
      Toolbar, MainMenu
    },
    methods: {}
  }
</script>
