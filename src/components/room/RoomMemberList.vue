<template>
  <div class="room-member-list">

    <p class="title">房间成员</p>
    <div v-for="member in members">
      <div class="member">
        <!--头像-->
        <div class="member-logo">
          <img :src="member.logo">
        </div>

        <!--名字-->
        <div class="member-name">
          <p>{{member.nickName}}</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'member-list',
    props: [
      'members'
    ]
  }
</script>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .title {
    padding-top: 20px;
    font-size: 24px;
    text-align: center;
  }

  .room-member-list {
    min-height: 600px;
    background: #d8d8d8;

  }

  .member {
    margin: 0 30px;
    padding: 20px 0;
    display: flex;
    align-items: center;

    overflow: auto;
  }

  .member-name {

  }

  .member-name p {
    font-size: 20px;
    margin: 0;
  }

  .member-logo {
    width: 54px;
    height: 54px;
  }

  .meeting-box {
    margin: 0 20px;
    padding: 20px 0;
    display: flex;
    align-items: center;
  }

  .member-name {
    margin-left: 10px;
  }


</style>
