<template>
    <div id="">

      <h2 @click="modalOn">任务列表</h2>
      <router-link to="./QuestCreate"><button class="createQuest" type="button" name="button">创建任务</button></router-link>
      <!-- {{this.allQuest}} -->
      <div class="questSet">
        <div v-for="questItem in this.allQuest.data " class="ribbon questItem">
          <span class="ribbon3">
            {{questItem.publisher.nickName}}
            <img :src="questItem.publisher.userLogo" alt="" style="height:50px;width:50px;float:left;border-radius:50px;border:1px solid #23bab5;">
          </span>
          <button class="updatePro" type="button" name="button">更新进度</button>
          <p>来自 {{questItem.society_name}}</p>
          <p>发布时间：{{new Date(questItem.time).toLocaleString()}}</p>
          <div v-for="(subTaskItem,j) in questItem.subTask">
            <p>子任务{{j+1}}:{{subTaskItem.question}}进度：{{subTaskItem.progress}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

  @import '../../assets/css/ribbon/style.css';
  @import '../../assets/css/ribbon/zzsc-demo.css';

  .questSet{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }

  .questItem{
    margin: 15px;
    position: relative;
    left: 10px;
    right: 10px;
    width:500px;
    border:1px solid;
    background-color: #ffffff;
    box-shadow: 5px 5px 4px 1px rgba(0,0,0,0.3);
  }

  .createQuest{
      position: absolute;
      top:90px;
      right:30px;
      width: 120px;
      height: 50px;
      font-size: 20px;
      color:#ffffff;
      background-color: #470092;
      border-radius: 15px;
      outline: none;
  }

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
