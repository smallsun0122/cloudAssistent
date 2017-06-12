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
        <button type="button" class="btn btn-landing navbar-right" @click="loginView" :class="{ btnDefault: scrolled}">登录</button>
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

  .navbar,.navbar-nav>li>a{
    -webkit-transition: all 0.5s;
  }

  .navbar-landing .navbar-nav>li>a {
    font-size: 16px;
    color: #ffffff;
    border-radius: 5px;
  }

  .navbar-nav>li>a:hover {
    font-size: 16px;
    color: #000000;
    border-radius: 5px;
  }

  .navbarDefault{
    background-color:#ffffff;
    opacity: 0.87;
  }
  .navbarDefault .navbar-nav>li>a {
    font-size: 16px;
    background-color: transparent;
    color: #333333;
    border-radius: 5px;
  }
  .navbarDefault .navbar-nav>li>a:hover{
    font-size: 16px;
    background-color: #333333;
    color: #ffffff;
    border-radius: 0px;
  }
  .navbar-nav {
    margin-top: 10px;
  }
  .navbar-right {
    margin-right: 40px;
  }
  .btn {
    margin: 15px 0 0 10px;
  }
  .btn-landing {
    border:1px solid;
    background-color: transparent;
    color: #ffffff;
    -webkit-transition:all 0.5s;
  }
  .btn-landing:hover{
    border:1px solid;
    color:#000000;
    background-color: #ffffff;

  }
  .btnDefault {
    background-color: transparent;
    color: #333333;
    -webkit-transition:all 0.5s;
  }
  .btnDefault:hover {
    background-color: transparent;
    background-color: #333333;
    color: #ffffff;
  }
</style>
