<template>
  <!--文本内容-->
  <div class="message-list-wrap">

    <!--内容-->
    <div ref="msgList" class="room-message">
      <ul>
        <li v-for="item in messages">
          <message-item :message="item"></message-item>
        </li>
      </ul>
    </div>

    <!--文本-->
    <div class="room-entry-wrap">
      <div class="emjoy-wrap">
        <div>
          <i class="fa fa-smile-o" style="font-size: 20px"></i>
          <i class="fa fa-picture-o"></i>
          <i class="fa fa-folder-o"></i>
        </div>
      </div>
      <textarea class="edit" @keyup.enter="send" type="text" placeholder="输入你需要的内容,按Enter发送"
                v-model="editMsg"/>
      <div class="btn-wrap">

        <div class="submit-btn" v-on:click="send">
          <p><i class="fa fa-paper-plane" style="margin-right: 5px" aria-hidden="true"></i> 发送消息
          </p>
        </div>

        <div class="close-btn" v-on:click="closeRoom">
          <p>关闭</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";

  .btn-wrap {
    display: flex;
    flex-flow: row-reverse;
    cursor: pointer;
  }

  .btn-wrap .submit-btn {
    background: #23bab5;
    box-shadow: 0 0 2px 1px #23bab5;
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;
    transition: all 0.3s;
    margin-bottom: 3px;
  }

  .btn-wrap .submit-btn p,
  .btn-wrap .close-btn p {
    margin: 0;
  }

  .btn-wrap .close-btn:hover,
  .btn-wrap .submit-btn:hover {
    transform: translate(0, -5px);
  }

  .btn-wrap .close-btn {

    transition: all 0.3s;

    margin-right: 10px;
    background: #23bab5;
    padding: 10px 25px;
    margin-bottom: 3px;

    box-shadow: 0 0 2px 1px #23bab5;
    border-radius: 5px;
  }

  .message-list-wrap {
    border: 1px solid #d8d8d8;
    padding: 0;
  }

  .room-message {
    height: 500px;
    padding: 0 16px;

    overflow: auto;
  }

  .room-message ul {
    list-style: none;
    padding: 0;
  }

  .room-entry-wrap {
    border-top: 1px solid #d8d8d8;
    box-shadow: 0 -2px 3px #d8d8d8;;
  }

  .emjoy-wrap {
    /*margin-bottom: 10px;*/
  }

  .emjoy-wrap i {

    font-size: 18px;
    color: #797979;

    padding: 14px 10px;
    margin: 0;
  }

  .edit {
    width: 100%;

    padding: 10px;
    height: 100px;

    resize: none;

    border: none;
  }
</style>

<script>
  import MessageItem from './MessageItem.vue'
  import { mapGetters } from 'vuex'
  export default{
    name: 'message',
    data () {
      return {
        editMsg: ''
      }
    },
    computed: mapGetters({
      messages: 'getRoomMessages',
      members: 'getRoomMembers'
    }),
    components: {
      MessageItem
    },
    methods: {
      send: function () {
        const message = {message: this.editMsg}
        this.$store.dispatch('sendMessage', message)
        this.editMsg = ''

//        console.log(this.$refs.msgList.scrollTop)
//        console.log(this.$refs.msgList)
//
//        this.$refs.msgList.scrollTop = 9999
//        console.log(this.$refs.msgList.scrollTop)
      },
      closeRoom: function () {
        this.$router.push({name: 'meeting'})
      }
    }
  }
</script>
