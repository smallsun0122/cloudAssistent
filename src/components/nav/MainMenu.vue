<template>
  <!-- 主界面的侧边栏菜单 -->

  <div class="sidebar-holder">
    <!--User-->
    <div class="user-menu">
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
        <li v-for="(item,index) in menuItem" :class="{'active':item.active}">
          <router-link :to="item.path">
            <img v-bind:src="item.imgPath">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--Menu-->

  </div>

</template>

<style scoped>

</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name: '',
    props: [
      'index'
    ],
    data () {
      return {
        menuItem: [
          {
            path: '/meeting',
            name: '会议',
            imgPath: require('../../assets/images/meet.png'),
            active: true
          },
          {
            path: '/Announcement',
            name: '任务',
            imgPath: require('../../assets/images/task1.png')
          },
          {
            path: '/Announcement',
            name: '公告',
            imgPath: require('../../assets/images/notice1.png')
          },
          {
            path: '/Announcement',
            name: '设置',
            imgPath: require('../../assets/images/set.png')
          },
          {
            path: '/Announcement',
            name: '邀请成员',
            imgPath: require('../../assets/images/add1.png')
          },
          {
            path: '/society',
            name: '社团管理',
            imgPath: require('../../assets/images/book.png')
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
    methods: {}
  }
</script>
