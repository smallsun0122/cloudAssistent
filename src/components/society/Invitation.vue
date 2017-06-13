<template>
  <div
    style="clear: both;margin-top: 10px;margin-bottom: 150px;border-radius: 10px ; border: 1px solid silver;padding: 10px;">
    <!--todo 社团邀请-->
    <p style="text-align: center;font-size: 24px">社团邀请</p>

    <div style="display: flex;flex-flow: row;justify-content: center">
      <input style="width: 50%;" @keyup.enter="searchUser" placeholder="搜索需要邀请的人(用过userId 和 昵称 搜索"
             v-model="searchMsg"/>
      <button class="btn btn-default" @click="searchUser()">搜索用户</button>
    </div>

    <div>
      <div class="col-md-4" style="margin: 15px 0;" v-for="item in result">
        <div style="display: flex; flex-flow: row;align-items: center">

          <div style="width: 150px;height: 150px">
            <img style="border-radius: 50%;width: 100%;height: 100%" :src="item.logo">
          </div>
          <div class="temp">
            <p>id</p>
            <p style="font-size: 18px">{{item.userId}}</p>
            <p style="margin-top: 15px">名字</p>
            <p style="font-size: 18px">{{item.nickName}}</p>
          </div>

        </div>
        <div style="">
          <input type="text" placeholder="邀请理由" v-model="inviteMsg">
          <select v-model="positionId">
            <option value="-1">选择职位</option>
            <option v-for="item in positions" :value="item.id">{{item.name}}</option>
          </select>
          <button class="btn btn-default"
                  :disabled="inSociety(item.userId)?disabled:''"
                  @click="inviteJoin(item.userId,societyId,positionId,inviteMsg)"> 邀请加入
          </button>
        </div>
      </div>

      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .temp p {
    margin: 0;
  }
</style>

<script>
  import Qs from 'qs'
  export default{
    name: 'invitation',
    props: ['societyId', 'positions', 'members'],
    data () {
      return {
        searchMsg: '',
        result: []
      }
    },
    components: {},
    methods: {
      inSociety: function (id) {
        const result = this.members.find(item => item.userId === id)
        if (result === undefined) {
          return true
        }
        return false
      },
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
          .catch(function () {
            alert('你没有权限邀请')
          })
      }
    }
  }
</script>
