<script>
  //  import SearchSociety from './SearchSociety.vue'
  import SocietyApply from './SocietyApply.vue'
  import { mapGetters } from 'vuex'
  export default{
    name: 'society',
    components: {
      SocietyApply
    },
    data () {
      return {}
    },
    computed: mapGetters({
      mySociety: 'getMySociety'
    }),
    mounted: function () {
      this.$store.dispatch('initMySociety')
    },
    methods: {
      toDetail: function (id) {
        this.$router.push({path: '/society/detail', query: {'societyId': id}})
      },
      createSociety: function () {
        this.$router.push({path: '/society/create'})
      }
    }
  }
</script>

<template>
  <div id="society">
    <div class="container-fluid">

      <div class="title-wrap">
        <p class="title">我的所有社团: </p>

        <p class="create" @click="createSociety"><i class="fa fa-plus"
                                                    style="padding-right: 5px"></i>创建社团</p>
      </div>

      <div class="box-wrap">
        <div class="col-md-3" v-for="item in mySociety">
          <div @click="toDetail(item.id)" class="box">
            <!--社团logo 居中-->
            <div class="society-logo">
              <img :src="item.societyLogo">
            </div>
            <!--社团信息-->
            <div class="society-content">
              <p class="name">{{item.name}}</p>
              <p class="summary">{{item.summary}}</p>
              <p class="createTime">
                创建时间： {{new Date(item.createTime).getFullYear()}}-{{new Date(item.createTime).getMonth()+1}}-{{new Date(item.createTime).getDate()}}</p>
              <p class="master">负责人：{{item.principal.nickName}}</p>

              <div class="member" v-for="(member,index) in item.member" v-if="index < 5">
                <img class="member-item" :src="item.societyLogo">
              </div>
            </div>


          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  #society {
    /*background: #f0ad4e;*/
  }

  .box {
    transition: all 0.3s;
    margin-bottom: 30px;
  }

  .box:hover {
    box-shadow: 0 3px 10px 5px #d8dcda;
    transform: translate(0, -10px);
  }

  .society-logo {

    /*position: absolute;*/

    width: 40%;
    margin: 0 auto;

    padding: 30px 0 50px 0;
    transition: all 0.3s;
  }

  .society-logo img {

    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .society-content {
    position: relative;
  }

  .society-content .name {
    text-align: center;
    font-size: 28px;

    padding-bottom: 20px;
  }

  .society-content .summary {
    font-size: 20px;
    text-align: center;
    width: 60%;
    margin: 0 auto;
  }

  .society-content .createTime {
    padding: 30px 0 15px 0;
    text-align: center;
    font-size: 16px;
  }

  .society-content .master {
    text-align: center;
    font-size: 16px;
    padding-bottom: 10px;
  }

  .society-content .member {

    padding-bottom: 20px;

    display: flex;
    /*换行方式*/
    flex-wrap: wrap;
    justify-content: center;
  }

  .society-content .member .member-item {
    width: 15%;
    height: 100%;
    margin: 0 5px;
    border-radius: 50%;

    /*opacity: 0.5;*/
  }

  .box {
    box-shadow: 0 3px 10px 5px #d8dcda;
    border-radius: 10px;
  }

  .title-wrap {
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-wrap .create {
    background: #14c021;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 5px;

    transition: all 0.5s;
    cursor: pointer;
  }

  .title-wrap .create:hover {
    transform: translate(0, -10px);
  }

  .title-wrap .title {
    font-size: 20px;
  }

</style>
