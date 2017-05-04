<template>
  <footer id="footer">
    <el-row :gutter="1" type="flex" class="row-bg" justify="center">
      <el-col :xs="7" :sm="5" :md="6" :lg="5">
        <h3>推荐</h3>
        <p><a>博客园-我的小树林</a></p>
        <p><a>Github-linkFly</a></p>
        <p><a>张鑫旭的个人博客</a></p>
        <p><a>小胡子的个人博客</a></p>
      </el-col>
      <el-col :xs="8" :sm="5" :md="6" :lg="5">
        <h3>推荐</h3>
        <p><a>博客园-我的小树林</a></p>
        <p><a>Github-linkFly</a></p>
        <p><a>张鑫旭的个人博客</a></p>
        <p><a>小胡子的个人博客</a></p>
      </el-col>
      <el-col :xs="7" :sm="5" :md="4" :lg="3">
        <h3>联系方式</h3>
        <p>Github:xxxx</p>
        <p>知乎：mmmm</p>
        <p>邮箱：262133</p>
      </el-col>
    </el-row>
    <el-row :gutter="1" type="flex" class="row-bg" justify="center">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" class="footer-copyright">
        ©2017 闷骚师兄 - CaptainLiao - <a href="#">152365号</a>
      </el-col>
    </el-row>

  </footer>
</template>

<style lang="less" scoped>
  #footer {
    position: fixed;
    bottom: 0;
    z-index: -1;
    width: 100%;
    padding: 20px 6px;
    color: #fff;
    text-align: left;
    background: none repeat scroll 0 0 #292929;
    a {
      color: #fff;
      font-size: 14px;
    }
    .footer-copyright {
      padding-top: 40px;
      text-align: right;
      font-size: 12px;
      a:hover {
        color: #20A0FF;
      }
    }
  }

</style>
