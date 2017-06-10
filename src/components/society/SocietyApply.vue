<script>
  import Qs from 'qs'
  export default{
    name: 'society-apply',
    props: ['societyId'],
    data () {
      return {
        societyApply: []
      }
    },
    mounted: function () {

    },
    watch: {
      societyId: function () {
        if (this.societyId === undefined) return
        const self = this
        this.$http.get('society/join?societyId=' + this.societyId)
          .then(function (response) {
            self.societyApply = response.data
          })
      }
    },
    methods: {
      handlerApply: function (id, isAllow) {
        this.$http.post('society/handle', Qs.stringify({
          'applyId': id,
          'isAllow': isAllow
        }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(function () {
            alert('处理成功')
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<template>
  <div id="society">
    <div style="">
      <p style="text-align: center;font-size: 18px"> 社团申请 </p>
      <ul>
        <li style="background: #fff000" v-for="item in societyApply">
          <p>{{item.applierId}}</p>
          <p>{{item.applyId}}</p>
          <p>{{item.reason}}</p>

          <button @click="handlerApply(item.applyId,true)">同意</button>
          <button @click="handlerApply(item.applyId,false)">不同意</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  #society {
    margin: 30px;

  }
</style>
