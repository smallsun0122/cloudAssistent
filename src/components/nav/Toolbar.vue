<template>

  <nav id="nav" class="navbar  navbar-default nav-delighted " role="navigation">

    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <div class="navbar-brand header-flex option" style="width:60px;"  @click="sidebarChange" >
						<svg style="width:24px;height:24px" viewBox="0 0 24 24"onclick="leftnavshow()">
	    <path fill="rgba(0,0,0,0.3)" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
						</svg>
				</div>
      <div class="navbar-brand header-flex">
        <img src="../../assets/images/Cloud_small.png" alt="">
        <span>社团云助手</span>
      </div>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">

        <!--搜索社团-->
        <li>
          <form role="search" class="search-form">
            <div class="form-group">
              <input type="text" v-model="editMsg"
                     @keyup.enter="seachSociety"
                     class="form-control nav-input-search "
                     placeholder="搜索社团....">
              <i class="glyphicon glyphicon-search"></i>
            </div>
          </form>
        </li>

        <!--通知按钮-->
        <li>
          <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown"
                 aria-expanded="false">
          <img src="../../assets/images/remind.png">
          <span class="badge bg-danger">5</span>
        </a>
        </li>

        <!--用户按钮-->
        <li>
          <router-link to="./setinfo/MyInfo" class="dropdown-toggle" data-toggle="dropdown">
            <img src="../../assets/images/user1.png" style="display: block;width: 20px;height: 20px;margin-top: 4px;">
          </router-link>
        </li>

        <!--关闭按钮-->
        <li>
          <a href="#" class="logout">
            <i class="glyphicon glyphicon-off"></i>
          </a>
        </li>
      </ul>

    </div>
    <!-- /.navbar-collapse -->
  </nav>

</template>

<style scoped>
  .navbar {
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    z-index: 100;
  }

  .navbar.nav-delighted.navbar-default {
    height: 62px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 0px;
  }

  .navbar.nav-delighted.navbar-default .navbar-brand {
    font-size: 18px;
    font-family: 'Droid Sans', sans-serif;
    padding: 0px;
    line-height: 60px;
    width: 220px;
    text-align: center;
  }

  .option {
    cursor: pointer;
    width: 60px;
  }

  .header-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  .header-flex img {
    width: 42px;
    height: 30px;
    display: block;
  }

  .header-flex span {
    margin-left: 10px;
  }

  .navbar.nav-delighted.navbar-default .search-form {
    margin-top: 13px;
    margin-right: 34px;
  }

  .navbar.nav-delighted.navbar-default .search-form input {
    height: 32px;
    width: 155px;
    border-radius: 16px;
    color: #23bab5;
    padding-left: 30px;
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid white;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .navbar.nav-delighted.navbar-default .search-form i.glyphicon-search {
    color: #c2c7c1;
    margin-top: 21px;
    margin-left: 10px;
    position: absolute;
    font-size: 14px;
  }

  .navbar-nav>li>.dropdown-toggle{
    padding-bottom: 0px;
    padding-top:15px;
    height: 62px;
  }
  .navbar.nav-delighted.navbar-default a.logout {
    font-size: 24px;
    color: #23bab5;
    height: 60px;
    width: 60px;
    text-align: center;
    -webkit-transition: 300ms ease;
    -moz-transition: 300ms ease;
    -o-transition: 300ms ease;
    transition: 300ms ease;
  }
  .bg-danger {
    background-color: #F9354C;
  }
  .badge {
    margin: -18px 0 0 -22px;
  }
</style>

<script>
  export default{
    name: 'toolbar',
    props: [
      'index'
    ],
    data () {
      return {
        editMsg: ''
      }
    },
    methods: {
      seachSociety: function () {
        this.$router.push({
          path: 'searchSociety',
          query: {
            msg: this.editMsg
          }
        })
        this.editMsg = ''
      },
      sidebarChange: function () {
        var l = document.getElementsByClassName('main-content')
        if (this.sidebarStatus) {
          document.getElementsByClassName('left-sidebar')[0].setAttribute('class', 'left-sidebar left-sidebar-hidden')
          l[0].style.marginLeft = '0px'
          this.sidebarStatus = false
        } else {
          document.getElementsByClassName('left-sidebar')[0].setAttribute('class', 'left-sidebar')
          l[0].style.marginLeft = '220px'
          this.sidebarStatus = true
        }
      }
    }
  }

</script>
