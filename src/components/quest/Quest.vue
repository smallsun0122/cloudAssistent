<template>
    <div id="" @click="finsh">
      <p>123</p>
    </div>
</template>

<style media="screen">

</style>

<script type="text/javascript">
    import notie from '@/tips'
    export default {
      data () {
        return {
        }
      },
      notie,
      method: {
        finsh: function () {
          // notie.alert(1 , 123 , 2 )
          alert(1)
        }
      }
    }
</script>
