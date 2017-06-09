<template>
  <div class="">
    <div class="container">

      <div class="logo-wrap">
        <img :src="society.societyLogo"/>
      </div>

      <div class="society-content ">

        <p class="name">{{society.name}}</p>
        <p class="text summary">{{society.summary}}</p>

        <p class="text position">我的职位:{{position.nickName}}</p>
        <!--<p class="text">邀请成员：{{society.summary}}</p>-->

        <div class="members-wrap">
          <p style="font-size: 18px;text-align: center;padding-bottom: 10px">社团成员:</p>
          <div class="col-md-2" v-for="member in members">

            <div class="member-logo">
              <img :src="member.logoUrl">
            </div>

            <p class="member-name"> {{member.nickName}} </p>

          </div>
        </div>
        <div class="apply-wrap">
          <!--传入社团Id-->
          <society-apply :societyId="society.id"></society-apply>
        </div>

        <div>
          <!--todo 社团邀请-->
          <p>社团邀请</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

  .logo-wrap {
    width: 25%;

    margin: auto;
  }

  .logo-wrap img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .society-content p {
    margin: 0;
    padding: 0;
  }

  .society-content .name {

    text-align: center;
    font-size: 28px;

    padding: 20px 0;
  }

  .society-content .text {
    width: 60%;
    margin: auto;
    font-size: 16px;

    text-align: center;
  }

  .society-content .summary {
    padding-bottom: 20px;
  }

  .members-wrap {
    width: 75%;
    margin: auto;
  }

  .member-logo {
    width: 72px;
    height: 72px;

    margin: auto;
  }

  .member-logo img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  .member-name {
    text-align: center;
    padding-top: 10px !important;
  }

  .society-content .position {
    padding: 30px 0;
  }

  .apply-wrap {
    clear: both;

    padding-top: 20px;
  }
</style>

<script>
  import SocietyApply from './SocietyApply.vue'
  export default{
    name: 'societyDetail',
    props: [],
    data () {
      return {
        society: {},
        position: {
          nickName: ''
        },
        members: []
      }
    },
    mounted: function () {
      var societyId = this.$route.query.societyId
      this.society = this.$store.getters.getDetailSociety(societyId)
      this.initMembers(societyId)
      // todo 获取社团的职位
    },
    components: {
      SocietyApply
    },
    methods: {
      initMembers: function (id) {
        const self = this
        this.$http.get('society/' + id + '/users')
          .then(function (response) {
            self.members = response.data
          })
      }
    }
  }
</script>
