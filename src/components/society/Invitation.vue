<template>
  <div style="clear: both;margin-top: 100px">
    <!--todo 社团邀请-->
    <p>社团邀请</p>
    <input style="width: 50%;" placeholder="搜索需要邀请的人(用过userId 和 昵称 搜索" v-model="searchMsg"/>
    <button @click="searchUser()">搜索用户</button>

    <div>
      <div v-for="item in result">
        <p>{{item.nickName}}</p>
        <p>{{item.logo}}</p>
        <p>{{item.userId}}</p>

        <input type="text" placeholder="邀请理由" v-model="inviteMsg">
        <button @click="inviteJoin(item.userId,inviteMsg)">邀请加入</button>
      </div>

    </div>
  </div>
</template>

<style scoped></style>

<script>
  export default{
    name: 'invitation',
    props: [],
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
      inviteJoin: function (userId, msg) {
        alert(userId + '  ' + msg)
      }
    }
  }
</script>
