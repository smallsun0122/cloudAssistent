<template>
  <div :onload="getSociety()" class="list">
    <div class="announcement-title">
      <div class="announcement-user">
        <img src="../../assets/images/portrait.png">
      </div>
      <div class="announcement-text">
        <span>小太阳</span>
        <h3>{{notice.title}}</h3>
        <p>{{notice.content}}</p>
      </div>
    </div>
    <div class="announcement-info">
      <span>{{notice.time | time}}</span>
      <div class="">
        <span class="info-society">
          <div style="float:left;width:35px;">
            来源:
          </div>
          <div style="float:right;width:90px;">
            <span style="float:left;">
              {{ notice.society_name }}
            </span>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0 0 -45px;
    box-shadow: 0 1px rgba(0, 0, 0, 0.1);
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
    width:125px;
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
            console.log(response.data.name)
            self.societyName = response.data.name
          })
      }
    }
  }
</script>
