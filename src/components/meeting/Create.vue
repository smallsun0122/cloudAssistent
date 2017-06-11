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
          meetingTime: '',
          members: []
//          question: []
        }
      }
    },
    components: {
      ModelDialog
    },
    mounted: function () {
    },
    methods: {
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
      }
    },
    watch: {
      // 选择
      societyId: function () {
        // 获取社团的所有成员
        let self = this
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
        会议名字<input type="text" name="name" v-model="meeting.name"/>
        <br>
        主题<input type="text" name="theme" v-model="meeting.theme"/>
        <br>
        <label>
          所属社团：
          <select name="society" v-model="societyId" v-on:click="getUserSociety">
          <option value="-1">选择社团</option>
          <option v-for="(society,i) in userSociety" v-bind:value="society.id"> {{society.name}}

          </option>
        </select>
          社团id： {{societyId}}
          </label>
        <br>
        会议时间 <input type="text" name="meetingTime"/>
        <br>
        开会成员{{societyMember}}
          <br>

        <div v-for="member in societyMember">

          <input type="checkbox" id="jack" v-bind:value="member.userId" v-model="submitMember">
          <label for="jack">{{member.nickName}}</label>
        </div>
        {{submitMember}}

      </div>

      <div class="modal-footer">
        <button v-on:click="submitMeeting" class="btn btn-primary">提交</button>
        <button @click="closeModel">关闭</button>
      </div>
    </div>

    <div @click="closeModel()" class="dialog-overlay"></div>
  </div>

</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .model-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 100;
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
