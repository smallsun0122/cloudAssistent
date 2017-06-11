<template>
  <div class="society-model">
    <div class="content-wrap modal-content container"
         v-bind:class="[ isShow ? 'dialog-active':'dialog-hidden']">
      <div class="modal-header">
        <h1> 创建社团 </h1>
      </div>

      <div class="modal-body">

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
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" @click="createSociety">创建社团</button>
        <button class="btn btn-default" @click="closeModel">关闭</button>
      </div>
    </div>

    <div @click="closeModel()" class="dialog-overlay"></div>
  </div>
</template>

<style scoped>

  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/font-awesome.css";
  @import "../../assets/css/model.css";

  .society-model {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 100;
  }

  .dialog-active {
    display: flex;
  }

  .dialog-hidden {
    display: none;
  }

  .dialog-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: #0f0f0f;
    opacity: 0.7;

    z-index: 99;
  }

  .content-wrap {
    display: flex;
    flex-flow: column;

    background: #f8f8f8;
    z-index: 100;
  }


</style>

<script>
  export default{
    name: 'createSociety',
    props: ['isShow'],
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
      },
      closeModel: function () {
        this.$emit('update:isShow', false)
      }
    }
  }
</script>
