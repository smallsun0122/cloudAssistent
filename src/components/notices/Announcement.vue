<template>
  <div id="announcement">
    <div class="announcement-header">
      <h2>公告列表</h2>
      <div class="announcement-btn">
        <button type="button" class="btn btn-primary">
          <router-link to="./notices/Publish">发布新公告</router-link>
        </button>
        <router-view></router-view>
      </div>
    </div>
    <div class="announcement-content">
      <ul class="announcement-list">
        <!--将这里的当个Notice抽离-->
        <li v-for="(item,index) in items">
          <notice-list-item :notice="item"></notice-list-item>
          <!--<div class="announcement-title">-->
            <!--<div class="announcement-user">-->
              <!--<img src="../assets/images/portrait.png">-->
            <!--</div>-->
            <!--<div class="announcement-text">-->
              <!--<span>小太阳</span>-->
              <!--<h3>{{item.title}}</h3>-->
              <!--<p>{{item.content}}</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="announcement-info">-->
            <!--<span>{{item.time | time}}</span>-->

            <!--<span class="info-society">来源:{{ getSociety(item.society)}}</span>-->

          <!--</div>-->
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  .announcement-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .announcement-btn {
    margin-right: 120px;
  }

  .announcement-btn a {
    text-decoration: none;
    color: #fff;
  }

  .announcement-header h2 {
    color: #00AAAA;
  }

  .btn-primary {
    background-color: #00AAAA;
    border: none;
  }
  .announcement-content {
    margin-top: 20px;
  }

  .announcement-list {
    width: 90%;
  }

  .announcement-content ul li {
    list-style-type: none;
  }

</style>

<script>
  import Vue from 'vue'
  import NoticeListItem from './NoticeListItem.vue'
  export default {
    data () {
      return {
        items: [{
          title: '',
          content: '',
          time: '',
          society: ''
        }]
      }
    },
    components: {
      NoticeListItem
    },
    methods: {
      getSociety: function (id, target) {
        this.$http.get('/society/' + id)
          .then(function (response) {
            return response.data.name
          })
      }
    },
    mounted: function () {
      var title = this.title
      var content = this.content
      var that = this
      this.$http
        .get('/notices/user/?page=1&pageSize=10', {
          'title': title,
          'content': content
        })
        .then(function (res) {
          console.log(res.data)
          that.items = res.data
          Vue.filter('time',
            function (value) {
              var date = new Date(value)
              var year = date.getFullYear()
              var month = date.getMonth() + 1
              var day = date.getDate()
              var hours = date.getHours()
              var minutes = date.getMinutes()
              if (month < 10) {
                month = '0' + month
              }
              if (day < 10) {
                day = '0' + day
              }
              if (hours < 10) {
                hours = '0' + hours
              }
              if (minutes < 10) {
                minutes = '0' + minutes
              }
              var t = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
              return t
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>
