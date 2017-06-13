<template>
  <div class="member">

    <div class="logo-wrap">
      <img :src="member.logoUrl">
    </div>

    <p class="member-name" style="text-align: center;">{{member.nickName}}</p>

  </div>
</template>

<style scoped>
  .member {
    margin: 10px;
  }

  .member-name p {

  }

  .logo-wrap {
    width: 100px;
    height: 100px;
  }

  .logo-wrap img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

</style>

<script>
  export default{
    name: '',
    props: ['member'],
    data () {
      return {}
    },
    components: {},
    methods: {}
  }
</script>
