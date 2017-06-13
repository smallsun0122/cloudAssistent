<template>
  <div id="main">
    <div style="margin-top: 100px">

      <p> 社团邀请: </p>

      <div style="padding: 20px;" v-for="item in invitation">
        <p>邀请Id : {{item.invitationId}}</p>
        <p>邀请信息 : {{item.message}}</p>
        <p>邀请人 : {{item.handleUser.userId}} + {{item.nickName}}</p>
        <p>邀请进入的社团 : id = {{item.society}} , 名字：{{item.society_name}}</p>
        <p>邀请你进去的职位：id = {{item.position.id}}, 等级={{item.position.grade}} , 名字={{item.position.name}}</p>

        <button @click="handleInvication(item.invitationId,true)">同意</button>
        <button @click="handleInvication(item.invitationId,false)">不同意</button>

      </div>

      <!--未读公告-->
      <div>
        <p>未读公告</p>

        <div style="float: left;padding: 20px;" v-for="item in notice">
          <p>id = {{item.id}}</p>
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>标题 = {{item.title}}</p>
          <button @click="read('/notice/' + item.id + '?identifier='+ item.identifier)">已读</button>
        </div>
      </div>
      <div style="clear: both;"></div>
      <!--未读任务-->
      <div>
        <p>未读任务:</p>
        <div style="float: left;padding: 20px;" v-for="item in task">
          <p>id = {{item.id}}</p>
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>标题 = {{item.title}}</p>
          <button @click="read('/task/' + item.id + '?identifier='+ item.identifier)">已读</button>
        </div>
      </div>
      <div style="clear: both;"></div>

      <!--未读社团信息-->
      <div>
        <p>未读社团信息:</p>
        <div style="float: left;padding: 20px;" v-for="item in society">
          <p>id = {{item.id}}</p>
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>标题 = {{item.title}}</p>
          <button @click="read('/society/' + item.id + '?identifier='+ item.identifier)">已读</button>
        </div>
      </div>
      <div style="clear: both;"></div>
      <!--未读邀请，申请-->
      <div>
        <p>未读邀请\申请:</p>
        <div style="float: left;padding: 20px;" v-for="item in system">
          <p>id = {{item.id}}</p>
          <p>信息 = {{item.info}}</p>
          <p>时间 = {{item.time}}</p>
          <p>标题 = {{item.title}}</p>
          <button @click="read('/system/' + item.id + '?identifier='+ item.identifier)">>已读</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import Qs from 'qs'
  import SocietyApply from '../society/SocietyApply.vue'
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
          .then(function () {
            alert('处理成功')
          })
      }
    },
    SocietyApply
  }
</script>
