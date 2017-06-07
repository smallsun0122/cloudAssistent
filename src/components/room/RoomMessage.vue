<template>
  <div class="message-wrap">

    {{initUser()}}

    <div class="msg-time">
      <p>{{new Date(message.date)}}</p>
    </div>

    <div class="message col-md-8" :class="{'is-self-message':message.self}">
      <!--头像-->
      <div class="head col-md-2">
        <img :src="logo"/>
      </div>

      <!--消息内容-->
      <div class="m-wrap col-md-10" :class="{'is-self-text':message.self}">
        <p>{{name}}</p>
        <p class="message-content">{{message.message}}</p>
        <!--<p>{{message.message}}</p>-->
      </div>

    </div>
  </div>
</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";

  img {
    width: 100%;
    height: 100%;
  }

  .message-wrap {
    width: 100%;
    background: #ffff00;

    display: flex;
    flex-flow: column;
  }

  .msg-time p {
    text-align: center;
    margin: 10px 0;
  }

  .message {
    min-height: 60px;
    background: forestgreen;

    display: flex;
    flex-flow: row;
    align-items: flex-start;
  }

  .m-wrap {
    /*margin-top: 20px;*/
    margin-left: 10px;
    padding: 0;
  }

  .message-content {
    background: peachpuff;
    padding: 5px 10px;
    margin: 0;
    width: 100%;
  }

  .is-self-message {
    align-self: flex-end;
    flex-flow: row-reverse;
  }

  .is-self-text {
    text-align: right;
    padding-right: 15px;
  }

  .message .head {
    /*width: 54px;*/
    /*height: 54px;*/
    padding: 0;
  }

  .message .head img {
    border-radius: 50%;
  }

</style>

<script>
  export default{
    name: 'message',
    props: ['message', 'members'],
    data () {
      return {
        logo: '',
        name: ''
      }
    },
    methods: {
      initUser: function () {
        const self = this
        for (var i = 0; i < this.members.length; i++) {
          console.log(this.members[i].userId + '  ' + this.message.publishId)
          if (this.members[i].userId === this.message.publishId) {
            self.logo = this.members[i].logo
            self.name = this.members[i].nickName
          }
        }
      }
    }
  }
</script>
