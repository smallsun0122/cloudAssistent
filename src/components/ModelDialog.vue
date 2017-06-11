<template>
  <div>
    <div v-bind:class="[show ? 'dialog-active':'dialog-hidden']">

      <slot name="head">头部</slot>


      <slot name="body">body内容</slot>


      <slot name="foot">尾部</slot>

    </div>

    <div class="dialog-overlay">
    </div>

  </div>
</template>

<style>
  .dialog-active {
    visibility: visible;
  }

  .dialog-hidden {
    visibility: hidden;
  }

  .dialog-overlay {

  }
</style>

<script>
  export default{
    name: 'model-dialog',
    props: ['show'],
    data () {
      return {
        show: true
      }
    }
  }
</script>
