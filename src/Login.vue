<template>
  <div class="box">
    <div class="bg"></div>
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="login-form">
              <div class="close"> </div>
              <div class="head-info">
                <label class="lbl-1"> </label>
                <label class="lbl-2"> </label>
                <label class="lbl-3"> </label>
              </div>
              <div class="clear"> </div>
              <div class="portrait">
                <img src="./assets/images/portrait.png" />
              </div>
              <form>
                <div>
                  <input type="text" autocomplete="off" class="text" value="userName" placeholder="Email" v-model="userId">
                </div>
                <div class="key">
                  <input type="password" autocomplete="off" value="password" placeholder="Password" v-model="password">
                </div>
              </form>
              <div class="signin">
                <input type="submit" value="Login" @click="login">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: url("./assets/images/case-bg.jpg") no-repeat;
    background-size: 100% 100%;
    align-items: center;
    position: fixed;
  }
  input:-webkit-autofill {
     -webkit-box-shadow: 0 0 0 1000px white inset !important;
    border:none !important;
  }
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-form {
    position: relative;
    width: 30%;
    margin: 0 auto;
    text-align: center;
    border-radius: 15px;
     -webkit-border-radius: 15px;
     -moz-border-radius: 15px;
     -o-border-radius: 15px;
  }
  .head img {
    width: 100%;
  }
  .portrait img {
    margin: 2em 0 0;
  }
  .head-info {
    padding: 5px 0;
    text-align: center;
    font-weight: 600;
    font-size: 2em;
    color: #fff;
    height: 50px;
    border-top-left-radius: 10px;
     -webkit-border-top-left-radius: 10px;
     -moz-border-top-left-radius: 10px;
     -o-border-top-left-radius: 10px;
    border-top-right-radius: 10px;
     -webkit-border-top-right-radius: 10px;
     -moz-border-top-right-radius: 10px;
     -o-border-top-right-radius: 10p
  }
  .text {
    width: 70%;
    padding: 1em 2em 1em 3em;
    color: #9199aa;
    font-size: 18px;
    outline: none;
    background: url(./assets/images/adm.png) no-repeat 10px 15px;
    border: none;
    font-weight: 100;
    border-bottom: 1px solid#484856;
    margin-top: 2em;
  }
  input[type="password"]{
    width: 70%;
    padding: 1em 2em 1em 3em;
    color: #9199aa;
    font-size: 18px;
    outline: none;
    background: url(./assets/images/key.png) no-repeat 10px 23px;
    border: none;
    font-weight: 100;
    border-bottom: 1px solid #484856;
  }
  .key {
    background: url(./assets/images/pass.png) no-repeat 260px 17px;
    margin-bottom: 3em;
  }
  input[type="submit"]{
    font-size: 30px;
    color: #fff;
    outline: none;
    border: none;
    background: #3ea751;
    width: 100%;
    padding: 18px 0;
    border-bottom-left-radius: 15px;
     -webkit-border-bottom-left-radius: 15px;
     -moz-border-bottom-left-radius: 15px;
     -o-border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
     -webkit-border-bottom-right-radius: 15px;
     -moz-border-bottom-right-radius: 15px;
     -o-border-bottom-right-radius: 15px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background: #ff2775;
    border-bottom-left-radius: 15px;
     -webkit-border-bottom-left-radius: 15px;
     -moz-border-bottom-left-radius: 15px;
     -o-border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
     -webkit-border-bottom-right-radius: 15px;
     -moz-border-bottom-right-radius: 15px;
     -o-border-bottom-right-radius: 15px;
    transition: 1s all;
     -webkit-transition: 1s all;
     -moz-transition: 1s all;
     -o-transition: 1s all;
  }
  label.lbl-1 {
    background: #6756ea;
    width: 20px;
    height: 20px;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 16px 10px 0px 0px;
  }
  label.lbl-2 {
    background: #ea569a;
    width: 20px;
    height: 20px;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 16px 10px 0px 0px;
  }
  label.lbl-3 {
    background: #f1c85f;
    width: 20px;
    height: 20px;
    display: block;
    float: right;
    border-radius: 50%;
    margin: 16px 10px 0px 0px;
  }
</style>

<!--<template>-->
  <!--<div id="login">-->
    <!--<div class="bg"></div>-->
    <!--<div class="login-view">-->
      <!--<div class="container">-->
        <!--<div class="row">-->
          <!--<div class="col-md-12">-->
            <!--<div class="form-group pull-left input-username">-->
              <!--<div class="input-group">-->
                <!--<input type="text" class="form-control " readonly="readonly" value="Email">-->
                <!--<span class="input-group-addon"></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="form-group pull-right input-password">-->
              <!--<div class="input-group">-->
                <!--<input type="password" class="form-control " placeholder="************">-->
                <!--<span class="input-group-addon"><i class="fa fa-key"></i></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="avatar">-->
              <!--<img src="./assets/images/portrait.png">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<script>
  import Qs from 'qs'
  export default {
    name: 'bg',
    data () {
      return {
        userId: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        var userId = this.userId
        var password = this.password
//        var params = new URLSearchParams()
//
//        params.append('userId', userId)
//        params.append('password', password)

        this.$http
          .post('/login', Qs.stringify({
            'userId': userId,
            'password': password
          }))
          .then(function (response) {
            window.location.href = '../../mainView.html'
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
