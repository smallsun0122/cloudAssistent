<template>
<div class="ProgressPush">
  <!-- {{item}} -->
  <div class="modal"></div>
  <div class="dialog">
  </div>
</div>
</template>


<style scoped>
  .modal{
    position: fixed;
    top:0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: rgba(0,0,0,0.78)
  }
  .dialog{

  }
</style>


<script>
  export default {
    name: 'progress-push',
    props: ['item'],
    data () {
      return {
        isShow: false,
        ProgressPush: [{
          id: '',
          taskType: 0,
          executors: [{
            userId: ''
          }],
          subTask: [{
            id: 0,
            process: 0,
            question: ''
          }]
        }]
      }
    },
    mounted: function () {

    },
    methods: {

    }
  }
</script>
