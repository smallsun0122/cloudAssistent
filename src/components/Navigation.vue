<template>
  <nav class="navbar navbar-default">
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
    methods: {
      loginView: function () {
        window.location.href = '../../login.html'
      }
    }
  }
</script>

<style scoped>
  nav {
    width: 100%;
    background-color: transparent;
    border: none;
    position: fixed;
  }
  .navbar-default .navbar-nav>li>a {
    font-size: 16px;
    color: #fff;
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
  .btn-default {
    background-color: transparent;
    color: #fff;
  }
</style>
