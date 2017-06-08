<template>
  <div class="site-main">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 main-content">
          <div class="layer">
            <div class="view24 is-loaded">
              <div class="card profile-manager">
                <div class="card-header">
                  <h4 class="card-title">个人信息</h4>
                </div>
                <div class="card-content">
                  <form class="form-horizontal info-group">
                    <div class="form-group"><label
                      class="col-sm-2 control-label avatar-label">头像</label>
                      <div class="col-sm-10">
                        <div class="avatar-wrap">
                          <div class="avatar img-100">
                            <div class="progress-mask"></div>
                          </div>
                          <div class="avatar-set">
                            <a class="btn btn-ghost btn-primary update-avatar">更换头像</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">姓名</label>
                      <div class="col-sm-10"><input class="name-input form-control" type="text"
                                                    name="name" value="小太阳"></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">学校</label>
                      <div class="col-sm-10"><input class="school-input form-control" type="text"
                                                    name="title" value=""></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">专业</label>
                      <div class="col-sm-10"><input class="major-input form-control" type="text"
                                                    name="phone" value=""></div>
                    </div>
                    <!--<div class="form-group"><label class="col-sm-2 control-label">生日</label>-->
                      <!--<div class="col-sm-10">-->
                        <!--<div class="width-limit birthday-wrap">-->
                          <!--<label class="form-control-select">-->
                            <!--<select class="birthday birthday-year form-control pull-left">-->
                              <!--<option value="0">年</option>-->
                              <!--<option value="2007">2007</option>-->
                              <!--<option value="2006">2006</option>-->
                              <!--<option value="2005">2005</option>-->
                              <!--<option value="2004">2004</option>-->
                              <!--<option value="2003">2003</option>-->
                              <!--<option value="2002">2002</option>-->
                              <!--<option value="2001">2001</option>-->
                              <!--<option value="2000">2000</option>-->
                              <!--<option value="1999">1999</option>-->
                              <!--<option value="1998">1998</option>-->
                              <!--<option value="1997">1997</option>-->
                              <!--<option value="1996">1996</option>-->
                              <!--<option value="1995">1995</option>-->
                              <!--<option value="1994">1994</option>-->
                              <!--<option value="1993">1993</option>-->
                              <!--<option value="1992">1992</option>-->
                              <!--<option value="1991">1991</option>-->
                              <!--<option value="1990">1990</option>-->
                              <!--<option value="1989">1989</option>-->
                              <!--<option value="1988">1988</option>-->
                              <!--<option value="1987">1987</option>-->
                              <!--<option value="1986">1986</option>-->
                              <!--<option value="1985">1985</option>-->
                              <!--<option value="1984">1984</option>-->
                              <!--<option value="1983">1983</option>-->
                              <!--<option value="1982">1982</option>-->
                              <!--<option value="1981">1981</option>-->
                              <!--<option value="1980">1980</option>-->
                              <!--<option value="1979">1979</option>-->
                              <!--<option value="1978">1978</option>-->
                              <!--<option value="1977">1977</option>-->
                              <!--<option value="1976">1976</option>-->
                              <!--<option value="1975">1975</option>-->
                              <!--<option value="1974">1974</option>-->
                              <!--<option value="1973">1973</option>-->
                              <!--<option value="1972">1972</option>-->
                              <!--<option value="1971">1971</option>-->
                              <!--<option value="1970">1970</option>-->
                              <!--<option value="1969">1969</option>-->
                              <!--<option value="1968">1968</option>-->
                              <!--<option value="1967">1967</option>-->
                              <!--<option value="1966">1966</option>-->
                              <!--<option value="1965">1965</option>-->
                              <!--<option value="1964">1964</option>-->
                              <!--<option value="1963">1963</option>-->
                              <!--<option value="1962">1962</option>-->
                              <!--<option value="1961">1961</option>-->
                              <!--<option value="1960">1960</option>-->
                              <!--<option value="1959">1959</option>-->
                              <!--<option value="1958">1958</option>-->
                              <!--<option value="1957">1957</option>-->
                              <!--<option value="1956">1956</option>-->
                              <!--<option value="1955">1955</option>-->
                              <!--<option value="1954">1954</option>-->
                              <!--<option value="1953">1953</option>-->
                              <!--<option value="1952">1952</option>-->
                              <!--<option value="1951">1951</option>-->
                              <!--<option value="1950">1950</option>-->
                              <!--<option value="1949">1949</option>-->
                              <!--<option value="1948">1948</option>-->
                              <!--<option value="1947">1947</option>-->
                              <!--<option value="1946">1946</option>-->
                              <!--<option value="1945">1945</option>-->
                              <!--<option value="1944">1944</option>-->
                              <!--<option value="1943">1943</option>-->
                              <!--<option value="1942">1942</option>-->
                              <!--<option value="1941">1941</option>-->
                              <!--<option value="1940">1940</option>-->
                              <!--<option value="1939">1939</option>-->
                              <!--<option value="1938">1938</option>-->
                              <!--<option value="1937">1937</option>-->
                              <!--<option value="1936">1936</option>-->
                              <!--<option value="1935">1935</option>-->
                              <!--<option value="1934">1934</option>-->
                              <!--<option value="1933">1933</option>-->
                              <!--<option value="1932">1932</option>-->
                              <!--<option value="1931">1931</option>-->
                              <!--<option value="1930">1930</option>-->
                              <!--<option value="1929">1929</option>-->
                              <!--<option value="1928">1928</option>-->
                              <!--<option value="1927">1927</option>-->
                            <!--</select>-->
                          <!--</label>-->
                          <!--<label class="form-control-select">-->
                            <!--<select class="birthday birthday-month form-control pull-left">-->
                              <!--<option value="0">月</option>-->
                              <!--<option value="1">1</option>-->
                              <!--<option value="2">2</option>-->
                              <!--<option value="3">3</option>-->
                              <!--<option value="4">4</option>-->
                              <!--<option value="5">5</option>-->
                              <!--<option value="6">6</option>-->
                              <!--<option value="7">7</option>-->
                              <!--<option value="8">8</option>-->
                              <!--<option value="9">9</option>-->
                              <!--<option value="10">10</option>-->
                              <!--<option value="11">11</option>-->
                              <!--<option value="12">12</option>-->
                            <!--</select>-->
                          <!--</label>-->
                          <!--<label class="form-control-select">-->
                            <!--<select class="birthday birthday-day form-control pull-left">-->
                              <!--<option value="0">日</option>-->
                              <!--<option value="1">1</option>-->
                              <!--<option value="2">2</option>-->
                              <!--<option value="3">3</option>-->
                              <!--<option value="4">4</option>-->
                              <!--<option value="5">5</option>-->
                              <!--<option value="6">6</option>-->
                              <!--<option value="7">7</option>-->
                              <!--<option value="8">8</option>-->
                              <!--<option value="9">9</option>-->
                              <!--<option value="10">10</option>-->
                              <!--<option value="11">11</option>-->
                              <!--<option value="12">12</option>-->
                              <!--<option value="13">13</option>-->
                              <!--<option value="14">14</option>-->
                              <!--<option value="15">15</option>-->
                              <!--<option value="16">16</option>-->
                              <!--<option value="17">17</option>-->
                              <!--<option value="18">18</option>-->
                              <!--<option value="19">19</option>-->
                              <!--<option value="20">20</option>-->
                              <!--<option value="21">21</option>-->
                              <!--<option value="22">22</option>-->
                              <!--<option value="23">23</option>-->
                              <!--<option value="24">24</option>-->
                              <!--<option value="25">25</option>-->
                              <!--<option value="26">26</option>-->
                              <!--<option value="27">27</option>-->
                              <!--<option value="28">28</option>-->
                              <!--<option value="29">29</option>-->
                              <!--<option value="30">30</option>-->
                            <!--</select>-->
                          <!--</label>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <div class="form-group"><label class="col-sm-2 control-label">所在社团</label>
                      <div class="col-sm-10"><input class="location-input form-control" type="text"
                                                    name="location" value=""></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">职位</label>
                      <div class="col-sm-10"><input class="position-input form-control" type="text"
                                                    name="website" value=""></div>
                    </div>
                    <div class="form-group"><label class="col-sm-2 control-label">联系电话</label>
                      <div class="col-sm-10"><input class="phone-input form-control" type="text"
                                                    name="website" value=""></div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-10 col-sm-offset-2"><a
                        class="btn btn-lg btn-primary btn-block save-handler disabled">保存</a></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .layer {
    margin-top: 5px;
    transition: transform .3s, opacity .3s;
  }

  .card {
    margin-bottom: 20px;
  }

  .card {
    border: 0;
    border-radius: 2px;
    -webkit-box-shadow: rgba(0, 0, 0, .0470588) 0 2px 3px 0;
    box-shadow: rgba(0, 0, 0, .0470588) 0 2px 3px 0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
  }

  .card .card-header {
    padding: 10px 15px 10px 5px;
    margin-left: 10px;
    font-size: 20px;
    line-height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
  }

  .card .card-header .card-title {
    font-weight: 600;
    font-size: 18px;
  }

  .card .card-content {
    padding: 10px 15px 10px 5px;
    margin-left: 10px;
  }

  .form-horizontal .form-group {
    margin-left: -10px;
    margin-right: -10px;
  }

  .form-group label {
    color: grey;
    text-align: left !important;
  }

  .avatar {
    background: url("../../assets/images/portrait.png") no-repeat;
  }

  .avatar.img-100 {
    width: 100px;
    height: 100px;
  }

  .avatar {
    position: relative;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-color: #ededed;
    border-radius: 50%;
  }

  .avatar .progress-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-size: cover;
    opacity: 0;
    clip: rect(100px, 100px, 100px, 0);
    filter: grayscale(100%);
    transition: all 1.5s;
  }

  .avatar-wrap .avatar-set {
    margin: 30px 0 0 20px;
  }

  .avatar-wrap {
    display: flex;
    flex-direction: row;
  }

  .btn-ghost {
    color: #3DA8F5;
    border-color: #3DA8F5;
    background: #fff;
  }

  .form-control {
    height: 40px;
    padding: 8px 12px;
    color: #383838;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .form-control {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .form-control, output {
    font-size: 14px;
    line-height: 1.42857143;
    display: block;
  }

  .form-control-select {
    margin-right: 10px;
  }
</style>
