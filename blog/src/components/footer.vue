<template>
  <footer id="footer">
    <el-row :gutter="1" type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="5" :md="6" :lg="5" class="">
        <h3>推荐</h3>
        <p><a>博客园-我的小树林</a></p>
        <p><a>Github-linkFly</a></p>
        <p><a>张鑫旭的个人博客</a></p>
        <p><a>小胡子的个人博客</a></p>
      </el-col>
      <el-col :xs="24" :sm="5" :md="6" :lg="5" class="hide">
        <h3>推荐</h3>
        <p><a>博客园-我的小树林</a></p>
        <p><a>Github-linkFly</a></p>
        <p><a>张鑫旭的个人博客</a></p>
        <p><a>小胡子的个人博客</a></p>
      </el-col>
      <el-col :xs="24" :sm="5" :md="4" :lg="3" class="">
        <h3>联系方式</h3>
        <p>Github:xxxx</p>
        <p>知乎：mmmm</p>
        <p>邮箱：262133</p>
      </el-col>
    </el-row>
    <el-row :gutter="1" type="flex" class="row-bg footer-copyright" justify="center">
      <el-col :xs="20" :sm="22" :md="22" :lg="22">
        ©2017 闷骚师兄 - CaptainLiao - <a href="#">152365号</a>
      </el-col>
    </el-row>

  </footer>
</template>

<style lang="less" scoped>
  @import "../assets/less/global.less";
  #footer {
    position: fixed;
    bottom: 0;
    z-index: -1;

    width: 100%;
    padding: 20px 6px 20px;
    color: #fff;
    text-align: left;
    background: none repeat scroll 0 0 #292929;
    h3 {
      font-weight: normal;
    }
    a {
      color: #fff;
      font-size: 14px;
    }
    .footer-copyright {
      padding-top: 40px;
      text-align: right;
      font-size: 12px;
      a:hover {
        color: @hover-color;
      }
    }
  }
  @media screen and (max-width: @xs-width) {
    #footer {

      padding: 0 20px 10px;
      p {
        font-size: 14px;
        line-height: 1.6;
      }
      .hide {
        display: none;
      }
    }
  }

</style>
