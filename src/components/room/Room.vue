<script>
  export default{
    name: 'room',
    data () {
      return {
        ws: null,
        roomId: -1,
        roomTitle: '',
        message: '',
        members: [{
          userId: 'helloworld.wen@gmail.com',
          logo: 'https://cn.vuejs.org/images/logo.png',
          nickName: '赖远文'
        }],
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

      this.ws = new WebSocket('ws://127.0.0.1:8080/ws?roomId=' + this.roomId)
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
          message: '123',
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
        <p class="room-title">
          <i class="fa fa-users" aria-hidden="true"></i>
          房间名：{{roomTitle}}</p>
        <p class="room-number">房间号：{{roomId}}</p>
      </div>

      <div class="room-content">
        <!--文本内容-->
        <div class="room-content">
          <!--内容-->
          <div class="room-message">
            <ul>
              <li v-for="item in messages">
                {{item.roomId}}
              </br>
                {{item.publishId}}
              </br>
                {{item.message}}
              </br>
                {{item.date}}
              </br>
                {{item.self}}



              </li>
            </ul>
          </div>

          <!--文本-->
          <div class="room-entry"></div>
        </div>

        <!--房间人员-->
        <div class="room-list">
          房间成员:



          <div v-for="member in members">
            {{member.userId}}
            </br>
            {{member.logo}}
            </br>
            {{member.nickName}}



          </div>
        </div>

        <input type="text" v-model="message"/>
        <button v-on:click="sendMessage">发送消息</button>


      </div>


    </div>
  </div>
</template>

<style>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .room-head {
    background: #ed9f45;
    padding: 30px 15px;
  }

  .room-content{
    background: #f2dede;
  }

  .room-list {
    float: right;
  }

</style>

