<template>
    <div id="">
      <div>
        <p>任务标题：</p>
        <input type="text" v-model="title">
      </div>
      <div>
        <p>选择社团</p>
        <select name="" id="" v-model="societyId" @click="getUserSociety">
          <option value="-1">选择社团</option>
          <option value="" v-for="(society,i) in userSociety" :value="society.id">{{society.name}}</option></select>
      </div>
      社团id:{{soietyId}}
      <div v-for="member in societyMember">
        <input type="checkbox" id="jack" :value="member.userId" v-model="submitMember">
        <label for="jack">{{member.nickName}}</label>
      </div>
      {{submitMember}}
    </div>
</template>

<style media="screen">

</style>

<script type="text/javascript">
    export default {
      data () {
        return {
          userSociety: [{
            college: 0,
            id: 0,
            name: '',
            societyLogo: '',
            summary: ''
          }],
          submitMember: [],
          societyMember: [],
          societyId: -1,
          quest: {
            title: '',
            societyId: '',
            executors: [],
            subTask: []
          }
        }
      },
      mounted: function () {
      },
      methods: {
        getUserSociety: function () {
          let self = this
          this.$http.get('society/user')
            .then(function (res) {
              self.userSociety = res.data
            })
            .catch(function (err) {
              console.log(err)
            })
        },
        createQuest: function () {
          this.$http.post('task/add', this.quest)
            .then(function (res) {
              alert(res.data)
            })
            .catch(function (err) {
              console.log(err)
            })
        }
      },
      watch: {
        societyId: function () {
          let self = this
          this.$http.get('society/' + this.societyId + '/users')
            .then(function (res) {
              self.societyMember = res.data
            })
            .catch(function (err) {
              console.log(err)
            })
        }
      }
    }
</script>
