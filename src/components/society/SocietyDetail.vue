<template>
  <div>
    {{society}}

<h3>社团申请:</h3>
    <!--传入社团Id-->
    <society-apply :societyId="society.id"></society-apply>
  </div>
</template>

<style scoped></style>

<script>
  import SocietyApply from './SocietyApply.vue'
  export default{
    name: 'societyDetail',
    props: [],
    data () {
      return {
        society: {}
      }
    },
    mounted: function () {
      var societyId = this.$route.query.societyId
      this.society = this.$store.getters.getDetailSociety(societyId)
    },
    components: {
      SocietyApply
    },
    methods: {}
  }
</script>
