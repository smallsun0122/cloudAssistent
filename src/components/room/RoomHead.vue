<template>
  <div class="room-head">

    <!--左边的信息-->
    <div class="head-left">
      <div style="display: flex;flex-flow: row;align-items: center">
        <div class="icon">
          <img src="../../assets/images/room-icon.png"/>
        </div>
        <div class="head-title-wrap">
          <p class="room-title"> 房间名：{{roomTitle}}</p>
          <p class="room-number">房间号：{{roomId}}</p>
        </div>
      </div>
      <div class="operation">
        <i class="fa fa-users"></i>
        <i class="fa fa-address-book"></i>
        <i class="fa fa-users"></i>
        <i class="fa fa-unlock-alt"></i>
        <i class="fa fa-dashboard"></i>
        <i class="fa fa-adjust"></i>
      </div>

    </div>

    <div class="head-right close-room" v-on:click="closeRoom">
      <i class="fa fa-times"></i>
    </div>

  </div>

</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .room-head {
    display: flex;
    justify-content: space-between;

    background: #23bab5;

    padding: 10px 20px;
  }

  .head-left {
    display: flex;
    flex-flow: column;
  }

  .head-left .icon {
    width: 64px;
    height: 64px;
  }

  .head-left .icon img {
    width: 100%;
    height: 100%;

    border: 4px solid #23bab5;
    border-radius: 50%;
  }

  .head-title-wrap {
    margin-left: 15px;
  }

  .head-title-wrap p {
    margin: 0;
  }

  .head-title-wrap .room-title {
    margin-bottom: 5px;

    font-size: 22px;
  }

  .head-title-wrap .room-number {
    font-size: 18px;
  }

  .operation {
    margin-top: 18px;
    /*margin-left: 15px;*/
  }

  .operation i {
    color: rgb(236, 236, 236);
    font-size: 18px;
    margin: 0 18px;
  }

  .head-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-room {
    text-align: center;
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background: rgb(255, 53, 0);
  }

  .close-room i {
    font-size: 18px;
  }

</style>


<script>
  export default{
    name: '',
    props: ['roomTitle', 'roomId', 'societyId'],
    data () {
      return {}
    },
    components: {},
    methods: {
      closeRoom: function () {
        this.$router.push({name: 'meeting'})
      }
    }
  }
</script>
