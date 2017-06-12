<template>
  <!-- 主界面的侧边栏菜单 -->

  <div class="sidebar-holder">
    <!--User-->
    <div class="user-menu" @click="userDetail">
      <img :src="user.logoUrl" alt="" class="avatar">
      <div class="user-info">
        <div class="welcome">Welcome,</div>
        <div class="username">{{user.nickName}}</div>
      </div>
    </div>
    <!--User-->

    <!--Menu-->
    <div id="menu">
      <ul class="nav nav-list">
        <li v-for="(item,i) in menuItem" @click="changeMenu(i)" :class="{'active':i === index}">
          <router-link :to="item.path">
            <i style="font-size: 20px" class="fa" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--Menu-->

  </div>

</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .user-menu{
    cursor: pointer;
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name: '',
    data () {
      return {
        index: 0,
        menuItem: [
          {
            path: '/',
            name: '我的动态',
            icon: 'fa-user'
          },
          {
            path: '/meeting',
            name: '会议',
            icon: 'fa-microphone'
          },
          {
            path: '/quest/Quest',
            icon: 'fa-calendar',
            name: '任务(未完成)'
          },
          {
            path: '/notices/Announcement',
            name: '公告',
            icon: 'fa-volume-up'
          },
          {
            path: '/society',
            name: '社团管理',
            icon: 'fa-plug'
          },
//          {
//            path: '/',
//            name: '邀请成员(没写',
//            icon: 'fa-users'
//          },
          {
            path: '/setinfo/ChangeInfo',
            name: '个人设置',
            icon: 'fa-users'
          }
        ]
      }
    },
    computed: mapGetters({
      user: 'getCurrentUser'
    }),
    mounted: function () {
      this.$store.dispatch('initCurrentUser')
    },
    components: {},
    methods: {
      changeMenu: function (i) {
        this.index = i
      },
      userDetail: function () {
        this.$router.push({path: '/setinfo/MyInfo'})
      }
    }
  }
</script>
