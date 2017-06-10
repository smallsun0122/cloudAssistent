<template>
  <div class="site-main">
    <!--<div class="container">-->
    <!--<div class="row">-->
    <!--<div class="col-sm-10 col-md-8 main-content">-->
    <div class="layer">
      <div class="view24 is-loaded">
        <div class="card profile-manager">
          <div class="card-header">
            <h4 class="card-title">个人信息</h4>
          </div>
          <div class="card-content">
            <div class="form-horizontal info-group">
              <div class="form-group">
                <div class="col-sm-10">
                  <div class="avatar-wrap">
                    <div class="avatar img-100">
                      <div class="progress-mask"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                  <span class="center">{{user.nickName}}</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">学校</label>
                <div class="col-sm-10">
                  <span class="center">{{user.school}}</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">学院</label>
                <div class="col-sm-10">
                  <span class="center">{{user.college}}</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">专业</label>
                <div class="col-sm-10">
                  <span class="center">{{user.major}}</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">学号</label>
                <div class="col-sm-10">
                  <span class="center">{{user.stuId}}</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10">
                  <span class="center">{{user.phone}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>

<style scoped>
  .layer {
    width: 70%;
    margin: 0 auto;
    transition: transform .3s, opacity .3s;
  }

  .card .card-header {
    padding: 10px 15px 10px 5px;
    margin: 28px 0 0 10px;
    font-size: 20px;
    line-height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
  }

  .card .card-header .card-title {
    font-weight: 600;
    font-size: 20px;
  }

  .card .card-content {
    padding: 10px 15px 10px 5px;
    margin: 10px 0 0 10px;
  }

  .form-horizontal .form-group {
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 10px;
  }

  .form-group {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }

  .center {
    width: 300px;
    display: block;
    margin-left: 50px;
  }

  .form-group label {
    display: block;
    width: 300px;
    color: grey;
    text-align: right !important;
  }

  .avatar {
    background: url("../../assets/images/portrait.png") no-repeat;
  }

  .avatar.img-100 {
    width: 100px;
    height: 100px;
  }

  .avatar {
    margin: auto;
    position: relative;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-color: #ededed;
    border-radius: 50%;
  }

  .avatar .progress-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-size: cover;
    opacity: 0;
    clip: rect(100px, 100px, 100px, 0);
    filter: grayscale(100%);
    transition: all 1.5s;
  }

  .avatar-wrap {
    margin: 30px 0 0 20px;
  }

  .avatar-wrap {
    display: flex;
    flex-direction: row;
  }
</style>

<script>
  //  import Qs from 'qs'
  export default {
    data () {
      return {
        user: {}
      }
    },
    created: function () {
      const self = this

      this.$http
        .get('/user/info')
        .then(function (res) {
          self.user = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

