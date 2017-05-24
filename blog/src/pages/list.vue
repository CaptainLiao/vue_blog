<template>
  <div id="fay-blog">

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="14" :md="16" :lg="12" class="main fl">

        <div class="b-year"><span class="by-txt">2016年10月</span></div>
        <article class="b-item">
          <div class="b-more">
            <span>06日</span><small>04:51</small>
          </div>
          <div class="b-main">
            <h2 class="b-title said-ellipsis">
              <a href="/blog/20161006045104.html" class="b-title" title="点击查看文章">从 HTTP 到 HTTPS - 网站部署 HTTPS 中需要做的事情</a>
            </h2>
            <div class="b-summary">
              <p></p><p>web 发展迅猛</p><p>技术日新月异层出不穷</p><p>web 的安全性同样是一场持久的攻防战</p><p>而 HTTPS 的普及</p><p>为 web 通信构建了更加良好和安全的根基</p><p></p>
            </div>
            <footer class="b-footer">
              <span class="b-info link fa fa-th-large" title="分类"><a href="/Blog?cate=ca8b0a54188e4a91a665fd6ceb02e156">Web</a></span>
              <i class="fa fa-eye" title="浏览"></i>1015
            </footer>
          </div>
        </article>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        blog: {}
      }
    },
    mounted() {
      var _this = this;
      _this.request.get(_this.config.getApi('article_list'))
        .then(function(res) {
          console.log(res);
          if(res.data.code === 0) {
            var articles = res.data.articles;
            _this.articles = articles;
            console.log(_this.articles)
          }
        })
    },
    components: {
      'blog-navbar': require('../components/sidebar')
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/global.less";
  .b-year {
    text-align: center;
    font-size: 18px;
    color: #aaa;
    margin: 15px 0;
    padding-bottom: 10px;
  .by-txt {
    padding: 10px;
    border-bottom: 3px solid #75b4f4;
  }
  }
  .b-item {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  .b-more {
    text-align: center;
    color: #777;
    margin-right: 12px;
    width: 45px;
    height: 40px;
    background: #f0f0f0;
    float: left;
  small {
    font-size: 12px;
    display: block;
    line-height: 1.2;
  }
  }

  }
  .b-main {
    padding-left: 12px;
    border-left: 1px solid #f3f3f3;
    overflow: hidden;
  .b-title {
    color: #333;
    font-size: 20px;
  }
  .b-summary {
    color: #777;
    padding: 9px 0 5px;
    text-align: justify;
  }

  }
  .said-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .b-item .b-title:visited {
    color: #c03980;
  }
  .b-footer {
    padding-bottom: 3px;
    color: #999;
  .b-info {
    vertical-align: bottom;
    color: #999;
    font-size: 13px;
    padding-left: 5px;
    transition: color .2s ease-in-out 0s;
  }
  i {
    padding: 1px 5px;
    color: #999;
  }
  }
</style>
