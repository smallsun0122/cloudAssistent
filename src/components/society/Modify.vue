<template>
  <div class="society-model">
    <div class="content-wrap modal-content container"
         v-bind:class="[ isShow ? 'dialog-active':'dialog-hidden']">
      <div class="modal-header">
        <h1> 更新社团 </h1>
      </div>

      <div class="modal-body">

        <label>
          社团名字<input v-model="newSociety.name"/>
        </label>
        </br>
        <label>
          社团简介<input v-model="newSociety.summary"/>
        </label>
        </br>
        <!--<label>-->
        <!--学院<input v-model="society.college"/>-->
        <!--</label>-->

        <p>现有职位</p>
        <div v-for="(position,i) in newSociety.positions" style="padding: 10px; float: left">
          <p>等级：{{position.grade}}</p>
          <p>名称：{{position.name}}</p>
          <button class="btn btn-default" @click="deletePosition(i)">删除 {{position.name}}</button>
        </div>

        <div style="clear: both;"></div>

        <label>
          等级:<input type="number" v-model="newPosition.grade">
          名称:<input type="text" v-model="newPosition.name">
        </label>

        <button @click="addPosition()">
          添加职位
        </button>

        <div class="member-wrap">
          <div v-for="member in newSociety.members">
            <login-name style="float: left;" :member="member"></login-name>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-primary">更新</button>
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
  import LoginName from '../LoginName.vue'
  export default{
    name: 'modify',
    props: ['isShow', 'society'],
    data () {
      return {
        newSociety: {
          'name': this.society.name,
          'members': this.society.members,
          'summary': this.society.summary,
          'positions': this.society.positions
        },
        newPosition: {
          grade: -1,
          name: ''
        }
      }
    },
    mounted: function () {
    },
    components: {
      LoginName
    },
    methods: {
      closeModel: function () {
        this.$emit('update:isShow', false)
      },
      addPosition: function () {
        const position = {
          grade: this.newPosition.grade,
          name: this.newPosition.name
        }
        this.newSociety.positions.push(position)
        this.newPosition.name = ''
        this.newPosition.grade = -1
      },
      deletePosition: function (index) {
        this.newSociety.positions.splice(index, 1)
      }
    }
  }
</script>
