<template>
  <div id="announcement">
    <div class="announcement-header">
      <h2>公告列表</h2>
      <div class="announcement-btn">
        <button type="button" class="btn btn-primary" @click="release">
          <router-link to="./Publish">发布新公告</router-link>
        </button>
        <router-view></router-view>
      </div>
    </div>
    <div class="announcement-content">
      <ul class="announcement-list">
        <li v-for="(item,index) in items" class="list">
          <div class="announcement-title">
            <div class="announcement-user">
              <img src="../assets/images/portrait.png">
            </div>
            <div class="announcement-text">
              <span>小太阳</span>
              <h3>{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </div>
          <span>2017-5-11 15:29</span>
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
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -45px;
  }
  .list span {
    font-size: 16px;
  }
  .announcement-content {
    margin-top: 20px;
  }
  .announcement-list {
    width: 90%;
    box-shadow: 0 1px rgba(0,0,0,0.1);
  }
  .announcement-content ul li {
    list-style-type: none;
  }
  .announcement-user img {
    width: 50px;
    height: 50px;
    display: block;
  }
  .announcement-title {
    display: flex;
    flex-direction: row;
  }
  .announcement-text {
    padding: 15px 0 20px 10px;
  }
  .announcement-text span {
    font-size: 18px;
  }
</style>

<script>
  export default {
    data () {
      return {
        items: [{
          title: '',
          content: ''
        }]
      }
    }

  }
</script>
