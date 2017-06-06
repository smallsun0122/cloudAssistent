<script>
  import SearchSociety from './SearchSociety.vue'
  export default{
    name: 'society',
    components: {
      SearchSociety
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
    <div style="float: left">
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
        </li>
      </ul>
    </div>

    <div style="float: left;">
      <search-society></search-society>
    </div>

  </div>
</template>

<style>

</style>
