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

        <p>需要添加的职位</p>
        <div v-for="position in society.positions">
          <p>等级：{{position.grade}}</p>
          <p>名称：{{position.name}}</p>
        </div>

        <br>

        <label>
          等级:<input type="number" v-model="newPosition.grade">
          名称:<input type="text" v-model="newPosition.name">
        </label>

        <button @click="addPosition()">
          添加职位



        </button>

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
  export default{
    name: 'createSociety',
    props: [],
    data () {
      return {
        society: {
          name: '',
          summary: '这个社团很懒，什么都没有说',
          collegeId: 1,
          positions: []
        },
        newPosition: {
          grade: -1,
          name: ''
        }
      }
    },
    components: {},
    methods: {
      createSociety: function () {
        this.$http.post('/society', this.society)
          .then(function (response) {
            alert('创建成功')
          })
      },
      addPosition: function () {
        const position = {
          grade: this.newPosition.grade,
          name: this.newPosition.name
        }
        this.society.positions.push(position)
        this.newPosition.name = ''
        this.newPosition.grade = -1
      }
    }
  }
</script>
