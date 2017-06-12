<template>
    <div id="">
      <modal v-bind:show="show"></modal>
      <p @click="modalOn">任务列表</p>
      <router-link to="./QuestCreate">123</router-link>
      {{this.allQuest}}
      <div v-for="questItem in this.allQuest.data " class="ribbon">
        <span class="ribbon3">发布者：{{questItem.publisher.nickName}} </span>
        <img :src="questItem.publisher.userLogo" alt="" style="height:50px;width:50px;">
        <p>来自 {{questItem.society_name}}</p>
        <p>发布时间：{{questItem.time | time}}</p>
        <div v-for="(subTaskItem,j) in questItem.subTask">
          <p>子任务{{j+1}}:{{subTaskItem.question}}进度：{{subTaskItem.progress}}</p>
        </div>
      </div>
    </div>
</template>

<style media="screen">

</style>

<script type="text/javascript">
    import notie from '@/tips'
    import modal from '../modal/modal.vue'
    export default {
      data () {
        return {
          show: '',
          allQuest: [{
            executors: [],
            id: '',
            publisher: [{
              nickName: '',
              userId: '',
              userLogo: ''
            }],
            society: '',
            society_name: '',
            subTask: [{
              id: 0,
              progress: 0,
              question: ''
            }],
            sumProgress: 0,
            taskNum: 0,
            taskType: 1,
            time: 0,
            title: ''
          }]
        }
      },
      components: {
        modal
      },
      methods: {
        finsh: function () {
          // notie.alert(1 , 123 , 2 )
          alert(1)
        },
        modalOn: function () {
          if (this.show) {
            this.show = false
          } else {
            this.show = true
          }
          alert(this.show)
        },
        getUserQuest: function () {
          let self = this
          this.$http('task/user')
            .then(function (res) {
              self.allQuest = res
              // alert(JSON.stringify(res))
              // alert(this.allQuest)
            })
            .catch(function (err) {
              alert(err)
            })
        }
      },
      mounted: function () {
        this.getUserQuest()
      },
      notie
    }
</script>
