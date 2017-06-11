<template>
    <div id="">
      <modal v-bind:show="show"></modal>
      <p @click="modalOn">任务列表</p>
      <router-link to="./QuestCreate">123</router-link>
      {{this.allQuest}}
      <div>
        <p>发布者： </p>
        <img :src="this.allQuest.userlogo" alt="">
        <p>来自 {{this.allQuest.society_name}}</p>
        <div v-for="(subTaskItem,i) in subTask">
          <p>子任务{{i}}:{{subTaskItem.question}}进度：{{subTaskItem.progress}}</p>
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
            publish: [{
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
