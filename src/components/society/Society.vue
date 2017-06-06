<script>
  import SearchSociety from './SearchSociety.vue'
  import SocietyApply from './SocietyApply.vue'
  export default{
    name: 'society',
    components: {
      SearchSociety, SocietyApply
    },
    data () {
      return {
        mySociety: []

      }
    },
    created: function () {
      const self = this
      this.$http.get('society/user')
        .then(function (response) {
          self.mySociety = response.data
        })
    },
    methods: {}
  }
</script>

<template>
  <div id="society">
    <div>
      <p>我的所有社团: </p>
      <ul>
        <li v-for="item in mySociety">
          <p>{{item.id}}</p>
          <p>{{item.name}}</p>
          <p>{{item.summary}}</p>
          <p>{{item.societyLogo}}</p>
          <p>{{item.principal.userId}}</p>
          <p>{{item.principal.nickName}}</p>
          <p>{{item.principal.userLogo}}</p>
          <p>{{new Date(item.createTime)}}</p>

          <h3>社团申请:</h3>
          <!--传入社团Id-->
          <society-apply :societyId="item.id"></society-apply>
        </li>
      </ul>
    </div>

    <div style="float: left;">
      <search-society></search-society>
    </div>

  </div>
</template>

<style scoped>
  #society {
    background: #f0ad4e;
  }

</style>
