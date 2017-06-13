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
      {{notice}}
      <!-- <div class="apply-wrap">
        <div class="applyItem" v-for="">
          <society-apply :societyId="society.id"></society-apply>
        </div>
      </div> -->

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
        notice: []
      }
    },
    mounted: function () {
      const self = this
      this.$http.get('society/invite')
        .then(function (response) {
          self.invitation = response.data
        })
      this.$http.get('/message/0')
        .then(function (res) {
          self.notce = res.data
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
      }
    },
    SocietyApply
  }
</script>
