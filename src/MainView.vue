<template>
  <div id="mainView">
    <nav class="navbar  navbar-default nav-delighted " role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/Cloud_small.png"></a>
        <span>社团云助手</span>
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
            <a href="#" class="logout">
              <i class="glyphicon glyphicon-off"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>

    <div class="box-holder">
      <div class="left-sidebar">
        <div class="sidebar-holder">
          <!-- User   -->
          <div class="user-menu">
            <img src="./assets/images/portrait.png" class="avatar">
            <div class="user-info">
              <div class="welcome">Welcome,</div>
              <div class="username">小太阳</div>
            </div>
          </div>
          <!-- /.User   -->

          <!-- Menu -->
          <ul class="nav  nav-list">
            <li class="active">
              <router-link to="./Announcement">
                <img src="./assets/images/meet.png">
                <span class="hidden-minibar">会议</span>
              </router-link>
            </li>
            <li class="">
              <a href="#" data-original-title="Portlets">
                <img src="./assets/images/task1.png">
                <span class="hidden-minibar">任务</span>
              </a>
            </li>
            <li class="">
              <a href="#" data-original-title="Typography">
                <img src="./assets/images/notice1.png">
                <span class="hidden-minibar">公告</span>
              </a>
            </li>
            <li class="">
              <a href="#" data-original-title="Documentation">
                <img src="./assets/images/set.png">
                <span class="hidden-minibar">设置</span>
              </a>
            </li>
            <li class="">
              <a href="#" data-original-title="Documentation">
                <img src="./assets/images/add1.png">
                <span class="hidden-minibar">邀请成员</span>
              </a>
            </li>
            <li class="">
              <a href="#" data-original-title="Documentation">
                <img src="./assets/images/book.png">
                <span class="hidden-minibar">社团资料</span>
              </a>
            </li>
          </ul>
          <!-- /.Menu -->
        </div>
        <!-- /.left-sidebar Holder-->
      </div>
    </div>
  </div>
</template>

<style>
  .navbar.nav-delighted.navbar-default {
    height:60px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 0px;
  }
  .navbar-default {
    background-color: #f8f8f8;
    border-color: #e7e7e7;
  }
  .navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
  }
  .navbar-header {
     display: flex;
     justify-content: center;
     align-items: center;
     margin-left: 20px;
   }
  .navbar-header img {
    width: 42px;
    height: 30px;
    display: block;
  }
  .navbar-header span {
    margin-top: 10px;
    font-size: 16px;
  }
  .navbar.nav-delighted.navbar-default .search-form {
    margin-top: 13px;
    margin-right: 34px;
  }
  .form-group {
    margin-bottom: 15px;
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
    /*font-size: 20px;*/
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

  .left-sidebar {
    position: absolute;
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
    padding-top: 20px;
    padding-left: 25px;
    border-bottom: 1px solid #2e393b;
    -webkit-transition: 300ms ease;
    -moz-transition: 300ms ease;
    -o-transition: 300ms ease;
    transition: 300ms ease;
  }
  .left-sidebar .user-menu img.avatar {
    float: left;
    border: 2px solid #23bab5;
    border-radius: 50%;
    margin-right: 10px;
    width: 50px;
    height: 50px;
  }
  img {
    vertical-align: middle;
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
    height: 25px;
    color: #80969c;
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
  }
  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  .left-sidebar .sidebar-holder .nav li a img {
    display: inline-block;
    font-size: 14px;
    margin: 0 10px 0 20px;
    text-align: center;
    width: 20px;
  }
  .left-sidebar .sidebar-holder .nav li a span {
    font-size: 16px;
  }
</style>
