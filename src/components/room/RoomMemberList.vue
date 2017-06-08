<template>
  <div class="room-member-list">

    <div v-for="member in members">

      <div class="box">

        <!--头像-->
        <div class="list-head">
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

  .room-member-list {
    min-height: 600px;
    background: #dff0d8;

  }

  .meeting-box {
    margin: 0 20px;
    padding: 20px 0;
    display: flex;
    align-items: center;
  }

  .list-head {
    width: 108px;
    height: 108px;
  }

  .member-name {
    margin-left: 10px;
  }

  .member-name p {
    font-size: 32px;
  }

</style>
