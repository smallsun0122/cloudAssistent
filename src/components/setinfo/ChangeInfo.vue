<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="site-main">
    <!--<div class="container">-->
      <!--<div class="row">-->
        <!--<div class="col-sm-10 col-md-8 main-content">-->
          <div class="layer">
            <div class="view24 is-loaded">
              <div class="card profile-manager">
                <div class="card-header">
                  <h4 class="card-title">修改个人信息</h4>
                </div>
                <div class="card-content">
                  <form class="form-horizontal info-group">
                    <div class="form-group"><label
                      class="col-sm-2 control-label avatar-label">头像</label>
                      <div class="col-sm-10">
                        <div class="avatar-wrap">
                          <div class="avatar img-100">
                            <div class="progress-mask"></div>
                          </div>
                          <div class="avatar-set">
                            <a class="btn btn-ghost btn-primary btn-border update-avatar">更换头像</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">姓名</label>
                      <div class="col-sm-10"><input class="name-input form-control" type="text"
                                                    name="name" value="小太阳" v-model="name"></div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label">学校</label>
                      <div class="col-sm-10">
                        <select @click="getUserSchool" v-model="schoolId">
                          <option value="-1">--选择学校--</option>
                          <option v-for="(school,index) in schools" v-bind:value="school.id">
                            {{school.name}}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">专业</label>
                      <div class="col-sm-10"><input class="major-input form-control" type="text"
                                                    name="major" value="" v-model="major"></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">学号</label>
                      <div class="col-sm-10"><input class="stuId-input form-control" type="text"
                                                    name="stuId" value="" v-model="stuId"></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">所在社团</label>
                      <div class="col-sm-10"><input class="location-input form-control" type="text"
                                                    name="location" value="" v-model="associations"></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">职位</label>
                      <div class="col-sm-10"><input class="position-input form-control" type="text"
                                                    name="position" value="" v-model="position"></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">联系电话</label>
                      <div class="col-sm-10"><input class="phone-input form-control" type="text"
                                                    name="phone" value="" v-model="phone"></div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10 col-sm-offset-2"><a
                        class="btn btn-lg btn-primary btn-block save-handler" @click="saveInfo">保存</a></div>
                    </div>
                  </form>
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

  .form-group label {
    color: grey;
    text-align: left !important;
  }

  .avatar {
    background: url("../../assets/images/portrait.png") no-repeat;
  }

  .avatar.img-100 {
    width: 100px;
    height: 100px;
  }

  .avatar {
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

  .avatar-wrap .avatar-set {
    margin: 30px 0 0 20px;
  }

  .avatar-wrap {
    display: flex;
    flex-direction: row;
  }

  .btn-border {
    color: #3DA8F5;
    border-color: #3DA8F5;
    background: #fff;
  }

  .form-control {
    height: 40px;
    padding: 8px 12px;
    color: #383838;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .form-control {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .form-control, output {
    font-size: 14px;
    line-height: 1.42857143;
    display: block;
  }
</style>

<script>
  import Qs from 'qs'
  export default {
    data () {
      return {
        name: '',
        major: '',
        stuId: '',
        associations: '',
        position: '',
        phone: '',
        schools: [
          {
            name: '',
            id: 0
          }
        ]
      }
    },
    methods: {
      saveInfo: function () {
        var name = this.name
        var school = this.school
        var major = this.major
        var stuId = this.stuId
        var associations = this.associations
        var position = this.position
        var phone = this.phone

        this.$http
          .post('/user/update', Qs.stringify({
            'name': name,
            'school': school,
            'major': major,
            'stuId': stuId,
            'associations': associations,
            'position': position,
            'phone': phone
          }))
          .then(function (res) {
            alert('保存成功!')
            console.log(res)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    getUserSchool: function () {
      let self = this
      this.$http.get('/schools')
        .then(function (res) {
          console.log(res.data)
          self.schools = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>
