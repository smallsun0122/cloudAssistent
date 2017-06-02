<template>
  <div id="app">
    <router-view></router-view>
    <!--头部-->
    <header>
      <div class="container">
        <div class="row">
          <div class="title-text">
            <div class="col-md-12">
              <h1>社 团&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;助 手</h1>
              <p>
                一款社团协作软件<br/>
                你只需要创建一个社团,将所有相关的社团成员添加进来。<br/>
                全平台实时协作，线上开会突破时间即时讨论，实时任务跟踪，同时为你管理社团资料<br/>
                专为社团打造。
              </p>
              <div class="btn-center">
                <button type="button" class="btn btn-primary" @click="registerView">免费注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!--内容-->
    <section class="cooperate">
      <div class="container">
        <h1>为你提供协作的一切</h1>
        <div class="row">
          <div class="col-md-4">
            <img src="./assets/images/user.png">
            <p>基于社团</p>
          </div>
          <div class="col-md-4">
            <img src="./assets/images/meeting.png">
            <p>线上开会</p>
          </div>
          <div class="col-md-4">
            <img src="./assets/images/task.png">
            <p>任务跟踪</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src="./assets/images/notice.png">
            <p>公告发布</p>
          </div>
          <div class="col-md-4">
            <img src="./assets/images/trends.png">
            <p>日程安排</p>
          </div>
          <div class="col-md-4">
            <img src="./assets/images/manage.png">
            <p>资料管理</p>
          </div>
        </div>
      </div>
    </section>

    <section class="community">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <img src="./assets/images/product-shot.png">
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="text">
              <h2>助力提升工作效率</h2>
              <p>
                社团云助手(基于PC端、Android端) 致力于提高社团成员之间的沟通与协作效率，进而提升社团核心竞争力，包括社团线上开会、任务、公告发布以及管理资料等应用。
              </p>
              <button type="button" class="btn btn-primary">查看详情</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="promote">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>提升社团成员工作效率，提升社团竞争力</h1>
            <div class="btn-color">
              <button type="button" class="btn btn-primary" @click="registerView">免费注册</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'app',
  components: {
    Navigation
  },
  methods: {
    registerView: function () {
      window.location.href = '../../register.html'
    }
  }
}

</script>

<style>
h1 {
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  background: url("./assets/images/banner1.jpg") no-repeat;
  background-size: 100% 100%;
}
.title-text h1{
  color: #fff;
  font-size: 4em;
  background: url("./assets/images/cloud1.png") no-repeat 50%;
}
.title-text p {
  margin-top: 50px;
  text-align: center;
  color:#fff;
}
.btn {
  margin-top: 50px;
}
.btn-center {
  width: 82px;
  height: 34px;
  margin: 0 auto;
}
.cooperate {
  margin: 80px 0 80px 0;
}
.cooperate .row {
  margin-top: 80px;
}
.col-md-4 img{
  display: block;
  margin: 0 auto;
}
.col-md-4 p {
  text-align: center;
}
.community {
  width: 100%;
  height: 500px;
  background: url("./assets/images/bg1.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text p {
  margin-top: 50px;
}
.promote {
    margin: 80px 0 80px 0;
}
.btn-color {
  width: 80px;
  height: 32px;
  margin: 0 auto;
}
.btn-color button {
  border: none;
  background-color: #ffc92b;
}
</style>

