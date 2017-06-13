<template>
  <div class="">
    <div class="scoreBoard">
      <div class="scoreBoardName">
        <h3>
          每周贡献榜
        </h3>
      </div>
      <table class=""  align="center">
        <tr class="scoreBoardItem" style="text-align:center">
          <th class="boardRank">名次</th>
          <th class="boardScore">分数</th>
          <th class="boardName">用户ID</th>
        </tr>
        <tr class="scoreBoardItem" v-for="(scoreBoardItem, i) in scoreBoard">
          <td class="boardRank">{{i+1}}</td>
          <td class="boardScore">{{scoreBoardItem.score}}</td>
          <td class="boardName">{{scoreBoardItem.userId}}</td>
        </tr>
      </table>
    </div>
    <div class="container">

      <button
              class="btn btn-primary updateInfo"
              v-if="society.principal.userId === user.userId"
              @click="modifySociety">
      修改资料
      </button>

      <div class="logo-wrap">
        <img :src="society.societyLogo"/>
      </div>

      <div class="society-content ">

        <p class="name">{{society.name}}</p>
        <p class="text summary">{{society.summary}}</p>


        <p style="font-size: 18px;text-align: center;padding-bottom: 10px">社团成员:</p>

        <div class="members-wrap">
          <div class="col-md-2 member-box" v-for="member in society.members">
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

        <div style="border: 1px solid silver;padding: 10px;border-radius: 10px">
          <p style="font-size: 24px;text-align: center"> 社团职位</p>
          <div>
            <div style="float: left; width: 100px;" v-for="position in society.positions">
              <p>等级：{{position.grade}}</p>
              <p>名字：{{position.name}}</p>
            </div>

          </div>
          <div style="clear: both"></div>
        </div>

        <invitation :members="society.members" :societyId="society.id"
                    :positions="society.positions"></invitation>
      </div>
    </div>
  <modify v-if="isShowModify" :society="society" :isShow.sync="isShowModify"></modify>
  </div>
</template>

<style scoped>
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";
  .updateInfo{
    position: absolute;
    right: 10px;
  }
  .scoreBoard{
    background-color: #ffffff;
    position: absolute;
    right: 10px;
    top: 120px;
    border: 3px solid;
    border-radius: 10px;
    height: 300px;
    overflow-y: auto;
    /*display: flex;
    flex-direction: column;*/
  }

  .scoreBoardName{
    color :#D2691E;
    width: 100%;
    text-align: center;
    margin: auto;
  }

  tr{
    border-width:1px 0px 1px 0px;
    border-style: solid;
  }
  th{
    text-align: center;
  }
  .scoreBoardItem{
    /*display: flex;
    flex-direction: row;*/
    text-align: center;
  }

  .scoreBoardItem>td,.scoreBoardItem>th{
    margin: 5px;
    padding: 5px;
    min-width:70px;
    text-align: center;
  }

  .member-box {
    display: flex;

    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

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

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .member-logo {
    width: 72px;
    height: 72px;

    margin: auto;
  }

  .member-logo img {
    height: 100%;
    width: 100%;

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
  import Invitation from './Invitation.vue'
  import Modify from './Modify.vue'
  import { mapGetters } from 'vuex'
  export default{
    name: 'societyDetail',
    props: [],
    data () {
      return {
        society: {},
        isShowModify: false,
        scoreBoard: [{
          score: 0,
          userId: ''
        }]
      }
    },
    computed: mapGetters({
      user: 'getCurrentUser'
    }),
    mounted: function () {
      const societyId = this.$route.query.societyId
      const self = this
      this.$http.get('society/' + societyId)
        .then(function (response) {
          self.society = response.data.society
          self.society.positions = response.data.positions
          self.society.members = response.data.members
        })
      this.$http.get('/scoreboard/week/' + societyId)
        .then(function (res) {
          // alert(JSON.stringify(res.data))
          self.scoreBoard = res.data
        })
      this.initMembers(societyId)
    },
    components: {
      SocietyApply, Invitation, Modify
    },
    methods: {
      initMembers: function (id) {
        const self = this
        this.$http.get('society/' + id + '/users')
          .then(function (response) {
            self.members = response.data
          })
      },
      modifySociety: function () {
        this.isShowModify = !this.isShowModify
      }
    }
  }
</script>
