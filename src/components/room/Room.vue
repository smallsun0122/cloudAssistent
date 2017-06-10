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
      this.roomId = this.$route.query.roomId
      this.roomTitle = this.$route.query.roomTitle

      if (this.roomId === undefined) {
        alert('没有传roomId')
        return
      }

//      this.ws = new WebSocket('ws://112.74.214.252:8080/acloud/ws?roomId=' + this.roomId)
      this.ws = new WebSocket('ws://127.0.0.1:8080/ws?roomId=' + this.roomId)
      this.initWebSocket()
    },
//    mounted: function () {
//       todo created 和 mounted的区别在哪里
//    },
    destroyed: function () {
      // todo websocket状态码
      this.ws.close(3007, '断开房间')
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
      },
      /**
       * 获取推送信息
       */
      getMessage: function (self, data) {
        // todo let var const这些关键字的区别在哪里啊
        let m = {
          roomId: data.room,
          publishId: data.publisher,
          message: data.message,
          date: new Date(data.time),
          self: false
        }
        self.messages.push(m)
      },
      /**
       * 获取新成员加入的推送
       */
      getNewMember: function (self, data) {
        var m = {
          userId: data.userId,
          logo: data.logo,
          nickName: data.nickName
        }

        self.members.push(m)
      },
      /**
       * 新成员获取房间成员的推送
       */
      getRoomMember: function (self, data) {
        let d = data.data
        d.forEach(s => {
          self.members.push(s)
        })
      },
      /**
       * 获取成员退出房间的推送
       */
      getExitMember: function (self, data) {
        var index = -1
        self.members.forEach(function (member, i) {
          if (member.userId === data.userId) {
            index = i
          }
        })
        if (index !== -1) {
          self.members.splice(index, 1)
        }
      },
      /**
       * 初始化WebSocket
       */
      initWebSocket: function () {
        let self = this
        this.ws.onopen = () => {
          console.log('房间连接成功')
        }
        this.ws.onerror = function (event) {
          console.log('发生错误:' + event.toString())
        }
        this.ws.onclose = function (event) {
          console.log('关闭房间 ： ' + event.reason)
        }
        this.ws.onmessage = function (message) {
          console.log('接收到的信息' + message.data)
          const data = JSON.parse(message.data)
          switch (data.type) {
            // 聊天信息
            case 1: {
              self.getMessage(self, data)
              break
            }
            // 新成员加入房间的推送
            case 2: {
              self.getNewMember(self, data)
              break
            }
            // 新成员进入房间之后接收到房间内所有成员成员名单的推送
            case 3: {
              self.getRoomMember(self, data)
              break
            }
            // 成员退出
            case 4: {
              self.getExitMember(self, data)
              break
            }
          }
        }
      },
      /**
       * 向服务器发送一条信息
       */
      sendMessage: function (msg) {
        var message = {
          message: msg
        }
        this.ws.send(JSON.stringify(message))

        var m = {
          roomId: this.roomId,
          publishId: 'helloworld.wen@gmail.com',
          message: msg,
          date: new Date(),
          self: true
        }
        this.messages.push(m)
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

      <!--文本内容-->
      <room-messages v-on:sendMessage="sendMessage" class="col-md-8" :messages="messages"
                     :members="members"></room-messages>

      <!--房间人员-->
      <room-member-list class="col-md-4" :members="members"></room-member-list>

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

</style>

