<template>
  <div id="search" class="">

    <div class="container wrap">

      <div class="search-wrap">
        <input class="search-input" @keyup.enter="searchSociety" type="text"
               v-model="searchContent">
        <div class="search-btn" @click="searchSociety">
          <p>搜素社团</p>
        </div>
      </div>

      <div class="result-wrap">
        <div class="box-wrap col-md-12" v-for="result in searchResult">

          <div class="logo col-md-3">
            <img :src="result.societyLogo"/>
          </div>

          <div class="col-md-6">

            <p>名字：{{result.name}}</p>
            <p>简介：{{result.summary}}</p>
            <p>负责人：{{result.principal.nickName}}</p>
            <!--<p>{{result.principal.userLogo}}</p>-->
            <p>
              创建时间：{{new Date(result.createTime).getMonth()}} 月{{new Date(result.createTime).getDate()}} 日</p>

          </div>
          <div class=" col-md-3 join">
            <input placeholder="申请加入..." type="text" v-model="reason">
            <button @click="joinSociety(result.id,reason)"> 申请加入 {{result.name}}</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .logo {
    /*width:100%;*/
    /*height: 100%;*/
    padding: 20px;
  }

  .join {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .join input {

    padding: 10px;
    border: 1px solid silver;
    border-radius: 5px;

    margin-bottom: 20px;

    outline: none;
  }

  .join button {

    padding: 10px;
    border-radius: 5px;

    border: 2px solid sandybrown;
    background: sandybrown;
    outline: none;
  }

  .logo img {

    width: 90%;
    height: 90%;

    border-radius: 50%;
  }

  .box-wrap {
    display: flex;
    flex-flow: row;
    align-items: center;

    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px #f7f7f7;
    border: 1px solid silver;
  }

  .wrap {
    margin-top: 30px;
  }

  .search-wrap {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;

    display: flex;

    flex-flow: row;
    align-items: center;
    justify-content: center;
  }

  .search-input {
    width: 75%;
    border: 2px solid sandybrown;
    padding: 20px 30px;
    border-radius: 40px;

    font-size: 18px;

    outline: medium;
  }

  .search-btn {
    width: 25%;
    border: 2px solid sandybrown;
    padding: 20px 30px;
    border-radius: 40px;

  }

  .search-btn p {
    margin: 0;
    padding: 0;

    font-size: 16px;

    text-align: center;
  }

</style>

<script>
  export default{
    name: 'search',
    data () {
      return {
        searchResult: [],
        searchContent: ''
      }
    },
    mounted: function () {
      this.searchContent = this.$route.query.msg
      this.searchSociety()
    },
    methods: {
      searchSociety: function () {
        const self = this
        this.$http.get('society/search?query=' + this.searchContent)
          .then(function (response) {
            self.searchResult = response.data
          })
      },
      joinSociety: function (societyId, reason) {
        this.$http.post('society/join', {
          societyId, reason
        })
          .then(function (response) {
            alert(response.data)
          })
      }
    }
  }

</script>
