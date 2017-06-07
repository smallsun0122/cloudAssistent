<template>

  <nav id="nav" class="navbar  navbar-default nav-delighted " role="navigation">

    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <div class="navbar-brand header-flex">
        <img src="../../assets/images/Cloud_small.png" alt="">
        <span>社团云助手</span>
      </div>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown"
             aria-expanded="false">
            <img src="../../assets/images/remind.png">
            <span class="badge bg-danger">5</span>
          </a>
        </li>
        <li>
          <form role="search" class="search-form">
            <div class="form-group">
              <input type="text" class="form-control  nav-input-search " placeholder="Search ">
              <i class="glyphicon glyphicon-search"></i>
            </div>
          </form>
        </li>
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

    z-index: 100;
  }

  .navbar.nav-delighted.navbar-default {
    height: 60px;
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
    background-color: white;
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
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default{
    name: 'toolbar',
    props: [
      'index'
    ],
    data () {
      return {}
    },
//    获取getters的值
    computed: mapGetters({
      test: 'getAPP'
    }),
    methods: {
//      映射
      ...mapActions({
        add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      })
    }
  }

</script>
