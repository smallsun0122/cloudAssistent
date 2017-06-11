<template>
  <nav class="navbar navbar-landing" v-bind:class="{ navbarDefault: scrolled }">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <button type="button" class="btn btn-default navbar-right" @click="loginView">登录</button>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">功能</a></li>
          <li><a href="#">下载</a></li>
          <li><a href="#">反馈</a></li>
          <li><a href="#">关于我们</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        scrolled: false
      }
    },
    methods: {
      loginView: function () {
        window.location.href = '../../login.html'
      },
      handlesScroll: function () {
        this.scrolled = document.body.scrollTop > 0
        // alert(this.scrolled)
        // this.scrolled = window.scrollY > 0
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handlesScroll)
    }
  }
</script>

<style scoped>
  nav {
    width: 100%;
    background-color: transparent;
    border: none;
    position: fixed;
    border-radius: 0px;
  }

  .navbar-landing .navbar-nav>li>a {
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
  }

  .navbarDefault{
    background-color:#ffffff;
  }
  .navbarDefault .navbar-nav>li>a {
    font-size: 16px;
    background-color: #ffffff;
    color: #333333;
    border-radius: 5px;
  }
  .navbarDefault .navbar-nav>li>a:hover{
    font-size: 16px;
    background-color: #d1d4d7;
    color: #ffffff;
    border-radius: 5px;
  }
  .navbar-nav {
    margin-top: 10px;
  }
  .navbar-right {
    margin-right: 40px;
  }
  .btn {
    margin: 15px 0 0 -5px;
  }
  .btn-landing {
    background-color: transparent;
    color: #fff;
  }
  .btn-default {
    background-color: transparent;
    color: #333333;
  }
  .btn-default:hover {
    background-color: transparent;
    background-color: #d1d4d7;
    color: #ffffff;
  }
</style>
