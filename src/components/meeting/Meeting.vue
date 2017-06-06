<template xmlns:>

  <div id="meeting">
    <div class="container-fluid">



      <!--每个会议-->
      <div class="col-md-3 box" v-for="meeting in allMeeting">
        <router-link
          :to="{path:'/room',query:{roomId:meeting.room.roomId,roomTitle:meeting.room.name}}">

          <div class="box-content">
            <h2> 会议名字： {{meeting.name}} </h2>
            <h4>会议主题 {{meeting.theme}} </h4>

            <div class="publish">
              <div class="user-logo">
                <img :src="meeting.publisher.userLogo"/>
              </div>
              <p class="publish-name">{{meeting.publisher.nickName}}</p>
            </div>

          </div>
        </router-link>
      </div>

      <div style="margin-top: 300px" v-on:click="createMeeting">
        <div class="box-content">
          <router-link to="/meeting/create">
            <img src="../../assets/add.png">
            <span>创建新会议</span>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  a {
    text-decoration: none;
  }

  .box {
    height: 250px;
  }

  .box-content {

    padding: 5px;
    width: 100%;
    height: 100%;

    background-color: rgba(237, 159, 69, 0.56);

    display: flex;
    flex-flow: column;

    position: relative;
  }

  .publish {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: absolute;
    right: 0;
    bottom: 0;
    margin: 10px;
  }

  .publish .user-logo {
    width: 60px;
    height: 60px;
  }

  .publish .user-logo img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .publish .publish-name {
    font-size: 24px;
    margin-top: 20px;
    margin-left: 5px;

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

