<template>
  <div>
    <div class="container">

      <div>
        <p> 创建社团 </p>

        <label>
          社团名字<input v-model="society.name"/>
        </label>
        </br>
        <label>
          社团简介<input v-model="society.summary"/>
        </label>
        </br>
        <label>
          学院（现在为1）<input v-model="society.college"/>
        </label>
        </br>
        <input type="button" @click="createSociety"/>

      </div>
    </div>
  </div>
</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";

</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'createSociety',
    props: [],
    data () {
      return {
        society: {
          name: '',
          summary: '这个社团很懒，什么都没有说',
          createTime: new Date(),
          college: 1,
          principal: ''
        }
      }
    },
    computed: mapGetters({
      user: 'getCurrentUser'
    }),
    components: {},
    methods: {
      createSociety: function () {
        this.society.principal = this.user.userId
        this.$http.post('/society', this.society)
          .then(function (response) {
            alert('创建成功')
          })
      }
    }
  }
</script>
