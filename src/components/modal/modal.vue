<template>
  <div>
    <p @click="change">123</p>
    <div class="modal" v-bind:class="{ modalHidden: show }" @click="change">
    </div>
  </div>
</template>

<style scoped>
.tips{
	font-weight: 500;
	font-size: 1.05em;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}

.modal{
	vertical-align: middle;
	position: fixed;
	top:0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
	background-color: rgba(0,0,0,0.8);
	z-index: 15;
  display: block;
}
.modalHidden{
  display: none;
}

.hidden-dia{

	transform: translate(0px,-600px);
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}
.showing-dia{

	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
	position: absolute;
	background-color: #ffffff;
	z-index: 30;
	border-radius: 10px;
	box-shadow: 5px 5px 7px 0 rgba(0,0,0,.3);
	overflow: hidden;
	font-weight: 500;
	font-size: 1.05em;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}
.dialog>div{
	position: absolute;
}
.quest-dia{

}
.dia-header{
	display: block;
	text-align: center;
	width:400px;
	height: 40px;
	background-color: #4d82d6;
	color:#ffffff;
}
.dia-footer{
	position: absolute;
	bottom: 0%;
	left: 0%;
	right:0%;
	height: 40px;
	float: left;
	background-color:#8470FF;
	color:#ffffff;
}
.dia-footer>div{
	cursor: pointer;
	text-align: center;
	padding-top:5px;

}
.finish{
	height: 40px;
	width:200px;
	float: left;
	background-color: #57bf57;
}
.cancel{
	height: 40px;
	width: 200px;
	float: left;
	background-color:#e1715b;

}

</style>

<script>
  import modal from './modal'
  export default{
    data () {
      return {
        show: true
      }
    },
    // mounted: function () {
    //   modal.modalOn()
    // },
    watch: {
      show: function () {
        // alert('modal:' + this.show)
        // if (this.show) {
        //   modal.modalOff()
        // } else {
        //   modal.modalOn()
        // }
      }
    },
    methods: {
      change: function () {
        if (this.show) {
          this.show = false
        } else {
          this.show = true
        }
        alert('change:' + this.show)
      }
    },
    modal
  }

</script>
