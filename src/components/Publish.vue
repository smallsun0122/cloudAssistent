<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="#publish">
    <div class="notice-publish" id="notice_publish">
      <div class="notice-title">
        <span>标题:</span>
        <input type="text" placeholder="标题(必填)" v-model="title"/>
      </div>
      <div class="notice-container">
        <span>正文:</span>
        <textarea placeholder="正文(必填，15-500字)" v-model="content"></textarea>
      </div>
      <div class="select-organizations">
        <label>
          <select @click="getUserSociety" v-model="societyId">
            <option value="-1">--选择社团--</option>
            <option v-for="(society,index) in societys" v-bind:value="society.id">
              {{society.name}}
            </option>
          </select>
        </label>
      </div>
      <div class="notice-footer">
        <div class="footer-add">
          <img src="../assets/images/photo.png">
          <span>图片</span>
          <img src="../assets/images/biaoq.png">
          <span>表情</span>
        </div>
        <div class="notice-button">
          <button type="button" class="btn btn-primary" @click="cancel">取消</button>
          <button type="button" class="btn btn-primary" @click="publish">发表</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
  /*.notice-publish {*/
  /*width: 50%;*/
  /*height: 30em;*/
  /*position:fixed;*/
  /*top: 0;*/
  /*margin-left: 25%;*/
  /**margin-left:-718px;*/
  /*_margin-left:-425px;*/
  /*margin-top:-292px;*/
  /*z-index:99996;*/
  /*opacity:0;*/
  /*filter:alpha(opacity=0);*/
  /*background-color: #fff;*/
  /*}*/
  .notice-title, .notice-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .notice-title input {
    width: 40%;
    height: 20px;
    margin-top: 10px;
  }

  .notice-container textarea {
    width: 70%;
    height: 100px;
    margin-top: 10px;
    /*取消默认样式*/
    resize: none;
  }

  .select-organizations {
    margin: 20px 0 20px 10px;
  }

  .notice-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-add {
    margin-left: 10px;
  }

  .notice-button {
    margin-right: 20px;
  }

  .notice-button button {
    /*width: 40px;*/
    /*height: 20px;*/
    color: #fff;
    border: none;
    background-color: #00AAAA;
    cursor: pointer;
    border-radius: 5px;
  }
</style>

<script>
//  import Qs from 'qs'
  export default {
    data () {
      return {
        title: '',
        content: '',
        societyId: '',
        societys: [{
          name: '',
          id: 0
        }]
      }
    },
    methods: {
      getUserSociety: function () {
        let self = this
        this.$http.get('society/user')
          .then(function (res) {
            console.log(res.data)
            self.societys = res.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      publish: function () {
        var title = this.title
        var content = this.content
        var societyId = this.societyId

        this.$http
          .post('/notices', {
            'title': title,
            'content': content,
            'society': societyId
          })
          .then(function (res) {
            console.log('发表成功！')
            this.$router.push('/Announcement')
          })
          .catch(function (res) {
            console.log(res)
          })
      },
      cancel: function () {
        this.$router.push('Announcement')
      }
    }

  }
</script>
