<template>
  <div>

    <div class="model-wrap" v-bind:class="[isShow ? 'dialog-active':'dialog-hidden']">

      <div class="content-wrap">

        <slot name="head">头部</slot>

        <slot class="content" name="body">body内容</slot>

        <slot name="foot">尾部</slot>

      </div>

      <div @click="close()" class="dialog-overlay">

      </div>
    </div>

  </div>
</template>

<style scoped>

  .model-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-wrap {
    z-index: 100;
  }

  .content {
    transition: all 0.5s;
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
</style>

<script>
  export default{
    name: 'model-dialog',
    props: ['isShow'],
    data () {
      return {
      }
    },
    methods: {
      close () {
        this.$emit('update:isShow', false)
      }
    }
  }
</script>
