<template>

  <nav id="nav" class="navbar  navbar-default nav-delighted " role="navigation">

    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <div class="option navbar-brand header-flex" style="width:50px;" @click="sidebarChange">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" onclick="leftnavshow()">
          <path fill="rgba(0,0,0,0.3)" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
        </svg>
      </div>
      <div class="navbar-brand header-flex">
        <img src="../../assets/images/Cloud_small.png" alt="" class="cloudLogo">
        <span>社团云助手</span>
      </div>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">

        <!--通知按钮-->
        <!-- <li @mouseenter="isShowNotice=true" @mouseleave="isShowNotice=false"> -->
        <li @click="isShowNotice=!isShowNotice">
          <a  class="dropdown-toggle icon-menu" data-toggle="dropdon"
             aria-expanded="false">
            <img src="../../assets/images/remind.png">
            <span class="badge bg-danger">{{notice.length}}</span>
          </a>
          <transition name="noticeFade">
            <ul v-if="isShowNotice"
                class="am-dropdown-content tpl-dropdown-content">
                <div class="triangle">
                </div>
              <li class="tpl-dropdown-content-external">
                <h3>你有{{notice.length}}条未读信息</h3>
              </li>
              <li v-for="item in notice" class="tpl-dropdown-list-bdbc">
                <a href="#" class="tpl-dropdown-content-message">
                  <span class="tpl-dropdown-content-photo">
                    <img :src="item.logo" alt="">
                  </span>
                  <span class="tpl-dropdown-content-subject">
                    <span class="tpl-dropdown-content-from"> {{item.publisher}} </span>
                    <span class="tpl-dropdown-content-time"> {{new Date(item.time).getFullYear()}}-{{new Date(item.time).getMonth()+1}}-{{new Date(item.time).getDate()}} {{new Date(item.time).getHours()}}:{{new Date(item.time).getMinutes()}}</span>
                  </span>
                  <span class="tpl-dropdown-content-font"> {{item.info}} </span>
                </a>
              </li>
            </ul>
          </transition>
        </li>

        <!--用户按钮-->
        <li>
          <router-link to="./setinfo/MyInfo" class="dropdown-toggle" data-toggle="dropdown">
            <img src="../../assets/images/user1.png"
                 style="display: block;width: 20px;height: 20px;margin-top: 4px;">
          </router-link>
        </li>

        <!--搜索社团-->
        <li>
          <form role="search" class="search-form">
            <div class="form-group">
              <input type="text" v-model="editMsg"
                     @keyup.enter="seachSociety"
                     class="form-control nav-input-search "
                     placeholder="搜索社团....">
              <i class="glyphicon glyphicon-search"></i>
            </div>
          </form>
        </li>

        <!--关闭按钮-->
        <li>
          <a href="#" class="logout">
            <i class="glyphicon glyphicon-off"></i>
          </a>
        </li>
      </ul>

    </div>
    <!-- /.navbar-collapse -->
  </nav>

</template>

<style scoped>
  .navbar {
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    z-index: 98;
  }

  .navbar.nav-delighted.navbar-default {
    height: 62px;
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

  .cloudLogo:hover{
    animation: myfirst .1s infinite;
    -moz-animation: myfirst .1s infinite;
    -webkit-animation: myfirst .1s infinite;
    -o-animation: myfirst .1s infinite;
  }
  @keyframes myfirst
  {
    from {transform: translate(-3px,0px);}
    to {transform: translate(3px,0px);}
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
    background-color: rgba(0, 0, 0, 0.05);
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

  .navbar-nav > li > .dropdown-toggle {
    padding-bottom: 0px;
    padding-top: 15px;
    height: 62px;
    cursor: pointer;
  }

  .navbar-right>li:hover{
    background-color: #e7e7e7;
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

  .bg-danger {
    background-color: #F9354C;
  }

  .badge {
    margin: -18px 0 0 -22px;
  }

  .am-dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    /*display: none;*/
    min-width: 160px;
    padding: 15px;
    margin: 9px 0 0 10px;
    text-align: left;
    line-height: 1.6;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    -webkit-animation-duration: .15s;
    animation-duration: .15s;
  }

  .triangle{
    position: absolute;
    top:-10px;
    width: 10px;
    height: 10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
  }

  .noticeFade-enter-active, .noticeFade-leave-active{
    transition: all 0.3s;
  }
  .noticeFade-enter, .noticeFade-leave-active{
    transform: translate(0px,-10px);
    opacity: 0;
  }

  ul.tpl-dropdown-content {
    width: 260px;
    padding: 8px;
  }

  /*.am-dropdown-content:after,.am-dropdown-content:before {*/
  /*position: absolute;*/
  /*display: block;*/
  /*content: "";*/
  /*width: 0;*/
  /*height: 0;*/
  /*border: 8px dashed transparent;*/
  /*z-index: 1;*/
  /*}*/
  .am-dropdown-content :first-child {
    margin-top: 0;
  }

  .tpl-header-list li {
    color: #999;
    border-bottom: 1px solid #F1F4F7;
  }

  .tpl-dropdown-content-external {
    display: block;
    overflow: hidden;
    padding: 10px;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #F1F4F7;
  }

  .tpl-dropdown-content-external h3 {
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: #96a5aa;
    font-weight: normal;
  }

  .tpl-header-list li {
    color: #999;
    border-bottom: 1px solid #F1F4F7;
  }

  .tpl-dropdown-list-bdbc {
    margin-top: 5px;
    border-bottom: 1px solid #F1F4F7;
  }

  .tpl-dropdown-content-photo img {
    height: 40px;
    width: 40px;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
    -ms-border-radius: 50% !important;
    -o-border-radius: 50% !important;
    border-radius: 50% !important;
  }

  .tpl-dropdown-content-subject {
    margin-left: 46px;
    margin-top: -30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .tpl-dropdown-content-time {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
    filter: alpha(opacity=50);
  }

  .am-dropdown-content :first-child {
    margin-top: 0;
  }

  .tpl-dropdown-content-font {
    display: block !important;
    font-size: 12px;
    line-height: 22px;
    margin-left: 46px;
  }

  .tpl-dropdown-content-from {
    font-size: 13px;
    font-weight: 600;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .show-notice {
    opacity: 0;
    -webkit-transition: all 0.5s;
  }

  .option {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .option:hover{
    background-color: #e8e8e8;
  }

  .option:active{
    background-color: #888888;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'toolbar',
    props: [
      'index'
    ],
    data () {
      return {
        editMsg: '',
        isShowNotice: false
      }
    },
    computed: mapGetters({
      notice: 'getNoticeMessages'
    }),
    methods: {
      seachSociety: function () {
        this.$router.push({
          path: '/searchSociety',
          query: {
            msg: this.editMsg
          }
        })
        this.editMsg = ''
      },
      sidebarChange: function () {
        var l = document.getElementsByClassName('main-content')
        if (this.sidebarStatus) {
          document.getElementsByClassName('left-sidebar')[0].setAttribute('class', 'left-sidebar left-sidebar-hidden')
          l[0].style.marginLeft = '0px'
          this.sidebarStatus = false
        } else {
          document.getElementsByClassName('left-sidebar')[0].setAttribute('class', 'left-sidebar')
          l[0].style.marginLeft = '220px'
          this.sidebarStatus = true
        }
      },
      showNotice: function () {
        this.isShowNotice = !this.isShowNotice
      }
    }
  }

</script>
