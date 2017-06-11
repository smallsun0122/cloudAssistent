<template xmlns: xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div id="meeting">
    <div class="container-fluid meeting-wrap">
      <div class="add-wrap" v-on:click="createMeeting">
        <div class="add-btn">
          <!--<router-link to="/meeting/create">-->
          <span><i class="fa fa-plus" aria-hidden="true"></i> 创建新会议</span>
          <!--</router-link>-->
        </div>
      </div>

      <!--每个会议-->
      <div class="col-md-3 " v-for="(meeting,index) in meetings">
        <div class="meeting-box">
          <router-link
            :to="{path:'/room', query:{roomId:meeting.room.roomId,roomTitle:meeting.room.name}}">

            <div class="box-content">
              <div class="content-head">
                <img src="../../assets/images/meeting-2.png">
              </div>
              <h2> 会议：{{meeting.name}} </h2>
              <p>会议主题：{{meeting.theme}} </p>

              <div class="publish">
                <div class="user-logo">
                  <img :src="meeting.publisher.userLogo"/>
                </div>
                <p class="publish-name">{{meeting.publisher.nickName}}</p>
              </div>

            </div>
          </router-link>
        </div>
      </div>
    </div>

    <create v-if="isShowCreate" :isShow.sync="isShowCreate"></create>

  </div>

</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  a {
    text-decoration: none;
  }

  .add-btn {
    font-size: 25px;
    padding: 10px;
    background: #27beff;

    border-radius: 10px;

    transition: all 0.5s;
  }

  .add-btn span {
    color: #ffffff;
  }

  .add-btn:hover {
    box-shadow: 0 2px 8px 4px #c0c3ce;
  }

  .add-wrap {
    display: flex;
    flex-flow: row-reverse;
    padding-bottom: 30px;
    padding-right: 30px;
  }

  .meeting-wrap {
    padding: 3rem;
  }

  .content-head {

  }

  .content-head img {
    width: 100%;
    height: 100%;
  }

  .meeting-box {
    min-height: 250px;
    border-radius: 10px;
    margin-bottom: 40px;

    box-shadow: 0 2px 8px 4px #E9E9E9;

    top: 0;
    transition: all 0.3s;
  }

  .meeting-box:hover {
    transform: translate(0, -6px);
    box-shadow: 0 2px 8px 4px #E9E9E9;
  }

  .box-content {

    padding: 5px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;

    position: relative;
  }

  .box-content h2 {
    padding-left: 20px;
    margin: 30px 0 30px 0;
  }

  .box-content p {
    padding-left: 20px;
    font-size: 20px;
  }

  .publish {

    display: flex;
    align-items: center;
    justify-content: flex-end;

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
    padding: 0;

  }
</style>

<script>
  import Create from './Create.vue'
  import { mapGetters } from 'vuex'
  export default{
    name: 'meeting',
    data () {
      return {
        isShowCreate: true,
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
    computed: mapGetters({
      meetings: 'getAllMeetings'
    }),
    components: {
      Create
    },
    mounted: function () {
      this.$store.dispatch('initMeeting')
    },
    methods: {
      createMeeting: function () {
        this.isShowCreate = !this.isShowCreate
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

