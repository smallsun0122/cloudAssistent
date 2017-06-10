<template>
    <div id="">
      <modal v-bind:show="show"></modal>
      <p @click="modalOn">任务列表</p>
      <router-link to="./QuestCreate">123</router-link>
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
          show: ''
        }
      },
      components: {
        modal
      },
      mounted: function () {

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
        }
      },
      notie
    }
</script>
