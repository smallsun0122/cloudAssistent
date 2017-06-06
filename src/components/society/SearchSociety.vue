<template>
  <div id="search">
    <label>
      搜索社团 <input type="text" v-model="searchContent">
      <button @click="searchSociety">搜索社团</button>
    </label>

    <div>
      <p>搜索结果</p>
      <ul>
        <li v-for="result in searchResult">
          <p>{{result.id}}</p>
          <p>{{result.name}}</p>
          <p>{{result.summary}}</p>
          <p>{{result.societyLogo}}</p>
          <p>{{result.principal.userId}}</p>
          <p>{{result.principal.nickName}}</p>
          <p>{{result.principal.userLogo}}</p>
          <p>{{new Date(result.createTime)}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'search',
    data () {
      return {
        searchResult: [],
        searchContent: ''
      }
    },
    methods: {
      searchSociety: function () {
        const self = this
        this.$http.get('society/search?query=' + this.searchContent)
          .then(function (response) {
            self.searchResult = response.data
          })
      }
    }
  }

</script>
