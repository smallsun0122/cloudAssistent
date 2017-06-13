<template>

  <!-- {{item}} -->
  <div class="model-wrap" v-show="isShow">
    <div class="content-wrap modal-content container">
      {{ProgressPush.id}}
      <div class="subTask" v-for="(subTaskItem,i) in item.subTask">
        <div class="subTaskItem">
          <p>
            子任务{{i+1}}:{{subTaskItem.question}}
          </p>
          <input type="checkbox"  v-model="subTaskItem.progress" name="" value="">
        </div>
      </div>
      <button @click="Post"type="button" name="button">提交</button>
    </div>
    <div @click="Show" class="dialog-overlay"></div>
  </div>

</template>


<style scoped>
@import '../../assets/css/model.css';
  .content-wrap{
    z-index: 100;
  }
  .dialog-overlay{
    z-index: 99
  }
</style>


<script>
  export default {
    name: 'progress-push',
    props: ['item'],
    data () {
      return {
        isShow: false,
        ProgressPush: {
          taskType: 1,
          executors: [{
            userId: ''
          }],
          id: '',
          subTask: [{
            id: 0,
            progress: 0,
            question: ''
          }]
        }
      }
    },
    mounted: function () {

    },
    watch: {
    },
    methods: {
      Show: function () {
        // alert(1)
        this.isShow = !this.isShow
      },
      Post: function () {
        this.ProgressPush.id = this.item.id
        this.ProgressPush.executors = this.item.executors
        this.ProgressPush.subTask = this.item.subTask
        // alert(JSON.stringify(this.item))
        alert(JSON.stringify(this.ProgressPush))
        this.$http.post('/task/update', this.ProgressPush)
          .then(function (res) {
            alert(res.data)
          })
          .catch(function (err) {
            console.log(err.data)
          })
      }
    }
  }
</script>
