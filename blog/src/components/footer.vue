<template>
  <footer id="footer">
    <el-row :gutter="1" type="flex" class="row-bg" justify="center">
      <el-col :xs="18" :sm="5" :md="6" :lg="5" class="">
        <h3>推荐</h3>
        <p><a href="http://www.cnblogs.com/fayin/" target="_blank">博客园-Fayin</a></p>
        <p><a href="http://www.cnblogs.com/wangfupeng1988/" target="_blank">王福朋的个人博客</a></p>
        <p><a href="http://www.cnblogs.com/TomXu/" target="_blank">汤姆大叔的博客</a></p>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="5">
        <h3>联系方式</h3>
        <p>Github：<a href="https://github.com/CaptainLiao">CaptainLiao</a></p>
        <p>博客园：<a href="http://www.cnblogs.com/fayin/">Fayin</a></p>
        <p style="white-space: nowrap">邮箱：<a href="mailto:13266586743@163.com">13266586743@163.com</a></p>
      </el-col>
      <el-col :xs="24" :sm="5" :md="4" :lg="3" class="hide">
       <h3>说明</h3>

        <p style="max-width: 180px;">
          本站默认采用《知识共享署名 3.0 中国大陆许可协议》，
          非原创内容遵循原文许可协议。
        </p>
        
      </el-col>
    </el-row>
    <el-row :gutter="1" type="flex" class="row-bg footer-copyright" justify="center">
      <el-col :xs="20" :sm="22" :md="22" :lg="22">
        ©2017 廖大爷 - Fayin - <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17060864号</a>
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
    font-size: 12px;
    color: #fff;
    text-align: left;
    background: none repeat scroll 0 0 #292929;
    h3 {
      font-weight: normal;
    }
    p {
      margin: 0;
      padding: 0;
    }
    a {
      color: #fff;
      font-size: 14px;
    }
    a:hover {
        color: @hover-color;
        text-decoration: underline;
      }
    .footer-copyright {
      padding-top: 20px;
      text-align: right;
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
