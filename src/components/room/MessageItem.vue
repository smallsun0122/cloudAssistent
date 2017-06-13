<template>
  <div class="message-wrap">

    <div class="msg-time">
      <p>{{new Date(message.date).getHours()}}:{{new Date(message.date).getMinutes()}}</p>
    </div>

    <div class="message col-md-8" :class="{'is-self-message':message.self}">
      <!--头像-->
      <div class="head col-md-2">
        <img :src="user.logo"/>
      </div>

      <!--消息内容-->
      <div class="m-wrap col-md-10" :class="{'is-self-text':message.self}">
        <!--用户名字-->
        <p>{{user.nickName}}</p>
        <!--消息-->
        <div class="message-content">
          <p>{{message.message}}</p>
          <div class="m-r" :class="{'is-self-m-r':message.self}"></div>
        </div>
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
    /*background: #ffff00;*/

    display: flex;
    flex-flow: column;
  }

  .msg-time p {
    text-align: center;
    margin: 10px 0;
  }

  .message {
    min-height: 60px;
    /*background: forestgreen;*/

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

    min-height: 35px;

    border-radius: 5px;

    position: relative;
  }

  .message-content p {
    margin: 0;
    padding: 5px 0;
  }

  .m-r {
    position: absolute;

    width: 0;
    height: 0;

    z-index: 1;

    border: solid 8px;
    border-color: #ffffff peachpuff #ffffff #ffffff;

    left: -15px;
    top: 10px;

    background-color: #f7ecb5;
  }

  .is-self-message {
    align-self: flex-end;
    flex-flow: row-reverse;
  }

  .is-self-text {
    text-align: right;
    padding-right: 15px;
  }

  .is-self-m-r {
    left: 100%;
    right: 16px;
    border-color: #f1f1f1;
    border-left-color:peachpuff;
  }

  .message .head {
    width: 64px;
    height: 64px;
    padding: 0;
    z-index: 2;
  }

  .message .head img {
    border-radius: 50%;
  }

</style>

<script>
  export default{
    name: 'message',
    props: ['message'],
    data () {
      return {
        user: {
          name: '',
          logo: ''
        }
      }
    },
    mounted: function () {
      this.user = this.$store.getters.getUser(this.message.publishId)
    }
  }
</script>
