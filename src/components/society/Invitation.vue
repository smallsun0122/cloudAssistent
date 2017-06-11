<template>
  <div style="clear: both;margin-top: 100px">
    <!--todo 社团邀请-->
    <p>社团邀请</p>
    <input style="width: 50%;" placeholder="搜索需要邀请的人(用过userId 和 昵称 搜索" v-model="searchMsg"/>
    <button @click="searchUser()">搜索用户</button>

    <div>
      <!--{{societyId}}-->
      <!--{{members}}-->

      <div v-for="item in result">
        <p>{{item.nickName}}</p>
        <p>{{item.logo}}</p>
        <p>{{item.userId}}</p>

        <input type="text" placeholder="邀请理由" v-model="inviteMsg">
        <select v-model="positionId">
          <option value="-1">选择职位</option>
          <option v-for="item in positions" :value="item.id">{{item.name}}</option>
        </select>
        <button @click="inviteJoin(item.userId,societyId,positionId,inviteMsg)">邀请加入</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
  import Qs from 'qs'
  export default{
    name: 'invitation',
    props: ['societyId', 'positions'],
    data () {
      return {
        searchMsg: '',
        result: []
      }
    },
    components: {},
    methods: {
      searchUser: function () {
        const self = this
        this.$http.get('user/search?query=' + this.searchMsg)
          .then(function (response) {
            self.result = response.data
          })
      },
      inviteJoin: function (inviteUserId, societyId, positionId, inviteMsg) {
        this.$http.post('society/invite', Qs.stringify({
          'societyId': societyId,
          'inviteUserId': inviteUserId,
          'positionId': positionId,
          'inviteMsg': inviteMsg
        }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(function (response) {
            alert('邀请成功')
          })
      }
    }
  }
</script>
