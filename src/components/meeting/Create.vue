<script>
  import ModelDialog from '../ModelDialog.vue'
  export default {
    name: 'create',
    props: ['isShow'],
    data () {
      return {
        userSociety: [{
          college: 0,
          id: 0,
          name: '',
          societyLogo: '',
          summary: ''
        }],
        societyMember: [],
        submitMember: [],
        societyId: -1,
        // 需要提交的数据
        meeting: {
          name: '',
          theme: '',
          society: -1,
//          meetingTime: {},
          members: []
//          question: []
        }
//        meetingData: {},
//        meetingTime: {}
      }
    },
    components: {
      ModelDialog
    },
    mounted: function () {
      this.getUserSociety()
    },
    methods: {
      chooseMeetingMember: function (memberId) {
        let result = this.submitMember.find(id => id === memberId)
        if (result === undefined) {
          // 添加
          this.submitMember.push(memberId)
        } else {
          // 删除
          const index = this.submitMember.indexOf(memberId)
          if (index !== -1) {
            this.submitMember.splice(index, 1)
          }
        }
      },
      isInMember: function (memberId) {
        let result = this.submitMember.find(id => id === memberId)
        if (result === undefined) {
          return false
        }
        return true
      },
      getUserSociety: function () {
        let self = this
        this.$http.get('society/user')
          .then(function (response) {
            self.userSociety = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      submitMeeting: function () {
        this.meeting.members = this.submitMember
        this.meeting.society = this.societyId
//        this.meeting.meetingTime = this.meetingTime.getTime()
        this.$http.post('meeting', this.meeting)
          .then(function (response) {
            alert(response.data)
          })
          .catch(function (error) {
            console.log(error.data)
          })
      },
      closeModel: function () {
        this.$emit('update:isShow', false)
      },
      chooseSociety: function (societyId) {
        this.societyId = societyId
      }
    },
    watch: {
      // 选择
      societyId: function () {
        // 获取社团的所有成员
        let self = this
        // 更新社团之前，需要先清空成员
        this.submitMember.splice(0, this.submitMember.length)
        this.societyMember.splice(0, this.societyMember.length)
        this.$http.get('society/' + this.societyId + '/users')
          .then(function (response) {
            self.societyMember = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }

</script>
<template>

  <div class="model-wrap">

    <div class="content-wrap modal-content container"
         v-bind:class="[ isShow ? 'dialog-active':'dialog-hidden']">

      <div class="modal-header">
        <h1>创建会议</h1>
      </div>

      <div class="modal-body">

        <!--名字-->
        <div class="form-item">
          <span class="form-label col-md-2"> 会议名字 </span>
          <input class="form-input" type="text" v-model="meeting.name"/>
        </div>

        <!--主题-->
        <div class="form-item">
          <span class="form-label col-md-2">主题</span>
          <textarea class="form-textarea" type="text" name="theme" v-model="meeting.theme"/>
        </div>

        <!--社团-->
        <div class="form-item">

          <span class="form-label col-md-2">所属社团</span>

          <div class="col-md-10 society-wrap ">
            <ul>
              <li @click="chooseSociety(society.id)"
                  style="padding-right: 20px; float: left"
                  v-for="(society,i) in userSociety">
                <div class="society-box">

                  <div style="position: relative; width: 150px;height: 150px">
                    <div v-if="societyId === society.id" class="choose-box">
                      <i style="font-size: 12rem" class="fa fa-check"></i>
                    </div>
                    <img :src="society.societyLogo">
                  </div>

                  <p>{{society.name}}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <!--会议时间-->
        <!--<div class="form-item">-->
        <!--<span class="form-label col-md-2">会议时间</span>-->
        <!--<input type="date" name="meetingTime" v-model="meetingData"/>-->
        <!--<input type="time" name="meetingTime" v-model="meetingTime"/>-->
        <!--</div>-->
        <!--成员-->
        <div class="form-item">
          <p class="form-label col-md-2">开会成员</p>
          <div class="member-wrap col-md-10">

            <ul style="list-style: none">
              <li @click="chooseMeetingMember(member.userId)"
                  style="padding-right: 20px; float: left"
                  class="member-box"
                  v-for="(member,i) in societyMember">
                <div class="member-box">

                  <div style="position: relative; width: 80px;height: 80px">
                    <div v-if="isInMember(member.userId)" class="choose-box">
                      <i style="font-size: 8rem" class="fa fa-check"></i>
                    </div>
                    <img :src="member.logoUrl">
                  </div>

                  <p>{{member.nickName}}</p>
                </div>
              </li>
            </ul>


          </div>


        </div>



      </div>

      <div class="modal-footer">
        <button v-on:click="submitMeeting" class="btn btn-primary">提交</button>
        <button class="btn btn-default" @click="closeModel">关闭</button>
      </div>
    </div>

    <div @click="closeModel()" class="dialog-overlay"></div>
  </div>

</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";
  @import "../../assets/css/model.css";

  .member-wrap {

    margin-top: 20px;
  }

  .member-box img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .member-box p {
    text-align: center;
  }

  .form-item {
    margin: 10px 0;

    display: flex;
    align-items: center;
  }

  .form-label {
    font-size: 18px;
    text-align: right;
  }

  .form-input {
    min-width: 30%;

    border: 1px solid #ccc;
    border-radius: 4px;

    padding: 10px;
    outline: none;
  }

  .form-textarea {
    min-width: 35%;
    border: 1px solid #ccc;
    border-radius: 4px;

    padding: 10px;
    outline: none;
  }

  .society-wrap {
    margin-top: 20px;
    padding-left: 0;
  }

  .society-wrap ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .society-wrap li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .society-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  .society-box img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .society-box p {
    text-align: center;
  }

  .choose-box {
    position: absolute;
    width: 100%;
    height: 100%;

    border-radius: 50%;
    background: forestgreen;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.6;
  }

  .content-wrap {
    display: flex;
    flex-flow: column;

    background: #f8f8f8;
    z-index: 100;
  }

  .dialog-active {
    display: flex;
  }

  .dialog-hidden {
    display: none;
  }

  .dialog-overlay {

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: #0f0f0f;
    opacity: 0.7;

    z-index: 99;
  }
</style>
