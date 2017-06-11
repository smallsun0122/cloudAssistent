<script>
  export default {
    name: 'create',
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

  <div id="create-meeting">
    <h1>创建会议</h1>

    <div>
      <form>
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
      </form>
    </div>

    <div slot="foot">
      <button v-on:click="submitMeeting">提交</button>
    </div>
  </div>
</template>
