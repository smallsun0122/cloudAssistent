<template>
  <div id="main">
    <div class="unread">

      <h2> 社团邀请: </h2>
      <hr>
      <div class="  unreadItem" style="padding: 20px;" v-for="item in invitation">
        <div class="publisher">
            <p>邀请人:</p>
            <img :src="item.handleUser.userLogo" alt="">
            <p>{{item.handleUser.userId}}</p>
        </div>
        <h3>内容 : {{item.message}}</h3>
        <p>邀请您加入：{{item.society_name}}</p>
        <p>邀请你进去的职位：{{item.position.name}}（等级{{item.position.grade}}）</p>
        <div class="button-set">
          <button @click="handleInvication(item.invitationId,true)">同意</button>
          <button @click="handleInvication(item.invitationId,false)">不同意</button>
        </div>

      </div>

      <!--未读公告-->
      <div class="unread">
        <h2>未读公告</h2>
        <hr>
        <div class="unreadItem quest" style="float: left;padding: 20px;" v-for="item in notice">
          <p>{{item.title}}</p>
          <hr>
          <div class="publisher">
            <p>发布者</p>
            <img :src="item.logo" alt="">
            <p>{{item.publisher}}</p>
          </div>
          <p>内容:{{item.info}}</p>
          <p>发自：{{new Date(item.time).toLocaleString()}}</p>
          <div class="button-set">
            <button @click="read('/notices/' + item.id + '?identifier='+ item.identifier)">已读</button>
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>
      <!--未读任务-->
      <div class="unread">
        <h2>未读任务:</h2>
        <hr>
        <div class="unreadItem" style="float: left;padding: 20px;" v-for="item in task">
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>标题 = {{item.title}}</p>
          <div class="button-set">
            <button @click="read('/task/' + item.id + '?identifier='+ item.identifier)">已读</button>
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>

      <!--未读社团信息-->
      <div class="unread">
        <h2>未读社团信息:</h2>
        <hr>
        <div class="unreadItem" style="float: left;padding: 20px;" v-for="item in society">
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>发布者={{item.publisher}}</p>
          <img :src="item.logo" alt="">
          <p>标题 = {{item.title}}</p>
          <div class="button-set">
            <button @click="read('/society/' + item.id + '?identifier='+ item.identifier)">已读</button>
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>
      <!--未读邀请，申请-->
      <div class="unread">
        <h2>未读邀请\申请:</h2>
        <hr>
        <div style="float: left;padding: 20px;" v-for="item in system">
          <p>id = {{item.id}}</p>
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>标题 = {{item.title}}</p>
          <div class="button-set">
            <button @click="read('/system/' + item.id + '?identifier='+ item.identifier)">>已读</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  @import '../../assets/css/ribbon/style.css';
  @import '../../assets/css/ribbon/zzsc-demo.css';

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  hr{
    margin-right: 40px;
    border:1px solid #888888;
  }
  .publisher{

    display: flex;
    flex-direction: row;
    align-items:center;

  }
  .publisher p{
    margin: 0;
    padding: 5px;
  }
  .unread{
    font-size: 18px;
  }
  .button-set{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .button-set>button{
    background-color: #337ab7;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    border:1px solid #2e6da4;
    margin:10px;
  }
  .unreadItem{
    margin-right: 20px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 15px;
    box-shadow:3px 3px 5px 3px rgba(0, 0, 0, 0.5) ;
  }
  .unreadItem>hr{
    margin-right: 0px;
  }
  .quest{
    margin: 20px;

  }
</style>

<script>
  import Qs from 'qs'
  import SocietyApply from '../society/SocietyApply.vue'
  import tips from '../../tips'
  export default{
    name: '',
    props: [],
    data () {
      return {
        invitation: [],
        notice: [],
        task: [],
        system: [],
        society: []
      }
    },
    mounted: function () {
      const self = this
      this.$http.get('society/invite')
        .then(function (response) {
          self.invitation = response.data
        })
      this.$http.get('/message/notice')
        .then(function (res) {
          self.notice = res.data
        })
      this.$http.get('/message/task')
        .then(function (res) {
          self.task = res.data
        })
      this.$http.get('/message/system')
        .then(function (res) {
          self.system = res.data
        })
      this.$http.get('/message/society')
        .then(function (res) {
          self.society = res.data
        })
    },
    components: {},
    methods: {
      handleInvication: function (id, isAllow) {
        this.$http.post('society/invite/handle', Qs.stringify({
          'inviteId': id,
          'isAllow': isAllow
        }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(function (response) {
            alert('处理成功')
          })
      },
      read: function (url) {
        this.$http.get(url)
          .then(function (res) {
            tips.alert('处理成功')
          })
      }
    },
    SocietyApply
  }
</script>
