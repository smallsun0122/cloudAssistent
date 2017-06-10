<script>
  import RoomMessages from './RoomMessages.vue'
  import RoomMemberList from './RoomMemberList.vue'
  import RoomHead from './RoomHead.vue'
  export default{
    name: 'room',
    components: {
      RoomMessages, RoomMemberList, RoomHead
    },
    data () {
      return {
        ws: null,
        roomId: -1,
        roomTitle: '',
        message: '',
        currentUser: this.getCurrentUser(),
        members: [],
        messages: [{
          roomId: 1,
          publishId: 'helloworld.wen@gmail.com',
          message: '这是消息',
          date: new Date(),
          self: false
        }]
      }
    },
    mounted: function () {
      // 获取路由传过来的roomId
      const roomId = this.$route.query.roomId
      const title = this.$route.query.roomTitle

      if (this.roomId === undefined) {
        alert('没有传roomId')
        return
      }
      // 初始化房间的信息
      this.$store.dispatch('initRoom', {id: roomId, title: title})
    },
    destroyed: function () {
      this.$store.dispatch('clearRoom')
    },
    methods: {
      getCurrentUser: function () {
        const self = this
        this.$http.get('user/info')
          .then(function (responce) {
            self.currentUser = responce.data
            var m = {
              'userId': self.currentUser.userId,
              'logo': self.currentUser.logoUrl,
              'nickName': self.currentUser.nickName
            }
            self.members.push(m)
          })
      }
    }
  }
</script>
<template>
  <div id="room">

    <div class="room-wrap container">

      <!--头部-->
      <room-head class="head"
                 :roomId="roomId"
                 :roomTitle="roomTitle"></room-head>

      <div class="content-wrap">
        <!--文本内容-->
        <room-messages class="col-md-8"></room-messages>

        <!--房间人员-->
        <room-member-list class="col-md-4" :members="members"></room-member-list>
      </div>

    </div>
  </div>
</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .head {
    border-radius: 10px 10px 0 0;
    margin-top: 50px;
  }

  .content-wrap {
    display: flex;
  }

</style>

