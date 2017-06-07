<template>
  <div :onload="getSociety()">
    <div class="announcement-title">
      <div class="announcement-user">
        <img src="../assets/images/portrait.png">
      </div>
      <div class="announcement-text">
        <span>小太阳</span>
        <h3>{{notice.title}}</h3>
        <p>{{notice.content}}</p>
      </div>
    </div>
    <div class="announcement-info">
      <span>{{notice.time | time}}</span>
      <span class="info-society">来源:{{ societyName }}</span>
    </div>
  </div>
</template>

<style>
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
    padding: 15px 0 10px 10px;
  }

  .announcement-text span {
    font-size: 18px;
  }

  .announcement-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .info-society {
    font-size: 14px !important;
  }
</style>

<script>
  export default {
    name: 'notice-list-item',
    props: [
      'notice'
    ],
    data () {
      return {
        societyName: ''
      }
    },
    methods: {
      getSociety: function () {
        const self = this
        this.$http.get('/society/' + this.notice.society)
          .then(function (response) {
            self.societyName = response.data.name
          })
      }
    }
  }
</script>
