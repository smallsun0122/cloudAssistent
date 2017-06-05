<template>

  <div id="meeting">

    <div class="wrap">


      <div class="box" v-for="meeting in allMeeting">
        <router-link
          :to="{path:'/room',query:{roomId:meeting.room.roomId,roomTitle:meeting.room.name}}">
          <div class="box-content">

            <p> 会议名字： {{meeting.name}} </p>
            <p>会议主题 {{meeting.theme}} </p>

            <div class="publish">
              <div class="user-logo">
                <img :src="meeting.publisher.userLogo"/>
              </div>
              <p>{{meeting.publisher.nickName}}</p>
            </div>

          </div>
        </router-link>
      </div>

      <div class="" v-on:click="createMeeting">
        <router-link to="/meeting/create">
          <img src="../../assets/add.png">
          <span>创建新会议</span>
        </router-link>
      </div>
    </div>

    <router-link :to="{path:'/room', query:{roomId:1,roomTitle:'保健起来写代码啦'}}">跳转到房间</router-link>
    <router-link :to="{path:'/room', query:{}}">跳转到房间，没有传 roomId</router-link>

  </div>

</template>

<style scoped>

  .box {
    float: left;
    width: 25%;
    height: 150px;
    padding: 10px;
  }

  .box-content {
    margin: 10px;
    padding: 5px;
    width: 100%;
    height: 100%;
    background: #ddd8c1;

    overflow: hidden;
  }

  .publish {

  }

  .publish .user-logo {
    width: 100px;
    height: 100px;
  }

  .publish .user-logo img {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import ModelDialog from '../ModelDialog.vue'
  export default{
    name: 'meeting',
    data () {
      return {
        show: true,
        societyId: null,
        societys: [{
          college: 0,
          id: 0,
          name: '',
          societyLogo: '',
          summary: ''
        }],
        societyMember: [{
          userId: '',
          nickName: ''
        }],
        submitMember: [],
        // 用户的所有会议
        allMeeting: [],
        meeting: {
          name: '',
          theme: '',
          society: 1,
          meetingTime: '',
          members: []
        }
      }
    },
    components: {
      ModelDialog
    },
    created: function () {
      let self = this
      this.$http.get('meeting')
        .then(function (response) {
          self.allMeeting = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      createMeeting: function () {
        this.show = !this.show
      },
      getUserSociety: function () {
        let self = this
        this.$http.get('society/user')
          .then(function (response) {
            self.societys = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      // 创建会议
      submitMeeting: function () {
        this.meeting.members = this.submitMember
        this.$http.post('meeting', this.meeting)
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error.data)
          })
      }
    },
    watch: {
      societyId: function () {
        // 获取社团的所有成员
//        /society/{societyId}/users.
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

