<script>
  import SearchSociety from './SearchSociety.vue'
  import SocietyApply from './SocietyApply.vue'
  import { mapGetters } from 'vuex'
  export default{
    name: 'society',
    components: {
      SearchSociety, SocietyApply
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
    methods: {}
  }
</script>

<template>
  <div id="society">
    <div class="container-fluid">

      <div class="title">
        <p>我的所有社团: </p>
      </div>

      <div class="box-wrap">
        <div class="col-md-3" v-for="item in mySociety">
          <div class="box">
            <!--社团logo 居中-->
            <div class="society-logo">
              <img :src="item.societyLogo">
            </div>
            <!--社团信息-->
            <div class="society-content">
              <p class="name">{{item.name}}</p>
              <p class="summary">{{item.summary}}</p>
              <p class="createTime">
                创建时间： {{new Date(item.createTime).getFullYear()}}-{{new Date(item.createTime).getMonth()}}-{{new Date(item.createTime).getDay()}}</p>
              <p class="master">负责人：{{item.principal.nickName}}</p>

              <div class="member" v-for="(member,index) in item.member" v-if="index < 5">
                <img class="member-item" :src="item.societyLogo">
              </div>
            </div>

            <!--<h3>社团申请:</h3>-->
            <!--&lt;!&ndash;传入社团Id&ndash;&gt;-->
            <!--<society-apply :societyId="item.id"></society-apply>-->
          </div>
        </div>
      </div>


    </div>

    <div style="float: left;">
      <search-society></search-society>
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
    box-shadow: 0 3px 10px 5px #ccc395;
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
    box-shadow: 0 3px 10px 5px #f7ecb5;
    border-radius: 10px;
  }

</style>
