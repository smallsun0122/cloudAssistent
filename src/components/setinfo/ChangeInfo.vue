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
              <!--头像-->
              <div class="form-group">
                <label class="col-sm-2 control-label avatar-label">头像</label>
                <div class="col-sm-10">
                  <div class="avatar-wrap">
                    <div class="img-100">
                      <!--<img :src="user.logoUrl">-->
                      <img :src="user.logoUrl">
                    </div>
                    <div class="avatar-set">
                      <input ref="fileInput" style="display: none" type="file" name="photo"
                             v-on:change="previewFile">
                      <a @click="updateLogo"
                         class="btn btn-ghost btn-primary btn-border update-avatar">更换头像</a>
                    </div>
                  </div>
                </div>
              </div>
              <!--昵称-->
              <div class="form-group">
                <label class="col-sm-2 control-label">昵称</label>
                <div class="col-sm-10">
                  <input class="name-input form-control" type="text"
                         name="name" value="小太阳" v-model="name">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">学校</label>
                <div class="col-sm-10">
                  <select @click="getUserSchool" v-model="schoolId" autocomplete="off">
                    <option :value="user.major.college.school.id" selected="selected">{{user.major.college.school.name}}</option>
                    <option v-for="(school,index) in schools" v-bind:value="school.id">
                      <p>{{school.name}}</p>
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">学院</label>
                <div class="col-sm-10">
                  <select @click="getUserCollege" v-model="collegeId">
                    <option value="-1">--选择学院--</option>
                    <option v-for="(college,index) in colleges" v-bind:value="college.id">
                      <p>{{college.name}}</p>
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">专业</label>
                <div class="col-sm-10">
                  <select @click="getUserMajor" v-model="majorId">
                    <option value="-1">--选择专业--</option>
                    <option v-for="(major,index) in majors" v-bind:value="major.id">
                      <p>{{major.name}}</p>
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group"><label class="col-sm-2 control-label">学号</label>
                <div class="col-sm-10"><input class="stuId-input form-control" type="text"
                                              name="stuId" value="" v-model="stuId"></div>
              </div>
              <div class="form-group"><label class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10"><input class="phone-input form-control" type="text"
                                              name="phone" value="" v-model="phone"></div>
              </div>
              <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2"><a
                  class="btn btn-lg btn-primary btn-block save-handler" @click="saveInfo">保存</a>
                </div>
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

  .form-group select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
  }

  .avatar {
    background: url("../../assets/images/portrait.png") no-repeat;
  }

  .img-100 {
    width: 100px;
    height: 100px;
  }

  .img-100 img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
    border-color: #3DA8F5 !important;
    background: transparent;
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
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        file: null,
        name: '',
        major: '',
        stuId: '',
        phone: '',
        schoolId: '',
        collegeId: '',
        majorId: '',
        schools: [
          {
            name: '',
            id: 0
          }
        ],
        colleges: [
          {
            name: '',
            id: 0
          }
        ],
        majors: [
          {
            name: '',
            id: 0
          }
        ]
      }
    },
    mounted: function () {
      this.name = this.user.nickName
      this.stuId = this.user.stuId
      this.phone = this.user.phone
    },
    computed: mapGetters({
      user: 'getCurrentUser'
    }),
    methods: {
      updateLogo: function () {
        this.$refs.fileInput.click()
      },
      previewFile (e) {
        let file = e.target.files[0]
        let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png']
        if (file && supportedTypes.indexOf(file.type) >= 0) {
          this.file = file
          this.submitFile()
        } else {
          alert('文件格式只支持：jpg、jpeg 和 png')
          this.clearFile()
        }
      },
      clearFile () {
        this.file = null
      },
      submitFile () {
        console.log(this.file)
        var form = new FormData()
        if (this.file) {
          form.append('logo', this.file)
        }
        this.$http.post('user/logo', form, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(function () {
            alert('上传成功')
          })
      },
      saveInfo: function () {
        var name = this.name
        var school = this.school
        var stuId = this.stuId
        var majorId = this.majorId
        var phone = this.phone

        this.$http
          .post('/user/update', Qs.stringify({
            'nickName': name,
            'school': school,
            'major': majorId,
            'stuId': stuId,
            'phone': phone
          }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(function (res) {
            alert('保存成功!')
            console.log(res)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getUserSchool: function () {
        let self = this
        this.$http.get('/admin/schools')
          .then(function (res) {
            console.log(res.data)
            self.schools = res.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getUserCollege: function () {
        let self = this
        var schoolId = this.schoolId
        this.$http.get('/admin/schools/' + schoolId + '/colleges')
          .then(function (res) {
            console.log(res.data)
            self.colleges = res.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getUserMajor: function () {
        let self = this
        const collegeId = this.collegeId
        this.$http.get('/admin/colleges/' + collegeId + '/majors')
          .then(function (res) {
            console.log(res.data)
            self.majors = res.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
