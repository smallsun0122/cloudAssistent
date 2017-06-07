<script>
  import RoomMessage from './RoomMessage.vue'
  import RoomMemberList from './RoomMemberList.vue'
  export default{
    name: 'room',
    components: {
      RoomMessage, RoomMemberList
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
    created: function () {
      // 获取路由传过来的roomId
      this.roomId = this.$route.query.roomId
      this.roomTitle = this.$route.query.roomTitle

      if (this.roomId === undefined) {
        alert('没有传roomId')
        return
      }

      this.ws = new WebSocket('ws://112.74.214.252:8080/acloud/ws?roomId=' + this.roomId)
      this.initWebSocket()
    },
    mounted: function () {
      // todo created 和 mounted的区别在哪里
    },
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
      sendMessage: function () {
        var message = {
          message: this.message
        }
        this.ws.send(JSON.stringify(message))

        var m = {
          roomId: this.roomId,
          publishId: 'helloworld.wen@gmail.com',
          message: this.message,
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
      <div class="room-head">
        <div class="room-title-wrap">
          <div>
            <i class="fa fa-users head-icon"></i>
          </div>
          <div class="text-wrap ">
            <p class="room-title"> 房间名：{{roomTitle}}</p>
            <p class="room-number">房间号：{{roomId}}</p>
          </div>
        </div>
        <div class=" col-md-4">
          <div class="room-ad">
            <p>这是一段广告</p>
          </div>
        </div>
      </div>

      <!--文本内容-->
      <div class="col-md-8">
        <!--内容-->
        <div class="room-message">
          <ul>
            <li v-for="item in messages">
              <room-message :message="item" :members="members"></room-message>
            </li>
          </ul>
        </div>

        <!--文本-->
        <div class="room-entry">
          <textarea class="col-md-9" type="text" placeholder="输入你需要的内容" v-model="message"/>
          <div class="col-md-3 submit-btn" v-on:click="sendMessage">
            <p><i class="fa fa-paper-plane" style="margin-right: 5px" aria-hidden="true"></i> 发送消息
            </p>
          </div>
        </div>
      </div>

      <!--房间人员-->
      <div class="room-list col-md-4">

        <room-member-list :members="members"></room-member-list>

      </div>


    </div>
  </div>
</template>

<style>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .submit-btn:hover {
    box-shadow: 2px 4px 6px #b3b3b3;;
    font-size: 20px;
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;

    border-style: none;

    margin: 10px;

    background-color: #f2dede;
    border-radius: 10px;

    transition: all 0.5s;
  }

  .room-entry {
    display: flex;
  }

  .room-entry textarea {
    padding: 10px;
    font-size: 18px;
    resize: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .room-head {
    background: #ed9f45;
    padding: 30px 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-flow: row;
  }

  .room-ad {
    width: 100%;
    height: 100%;
    background: cadetblue;
  }

  .head-icon {
    font-size: 50px;
  }

  .room-title-wrap {
    display: flex;

    flex-flow: row;
    align-items: flex-start;
  }

  .room-title {
    font-size: 18px;
  }

  .room-number {
    font-size: 16px;
  }

  .text-wrap {
    margin-left: 10px;
  }

  .room-message {
    background: #a6e1ec;

    height: 500px;

    padding-bottom: 30px;

    overflow: auto;
  }

  .room-entry {
    background: #f5e79e;
    height: 100px;
  }

  .room-list {
    /*background: #f7ecb5;*/
  }

</style>

