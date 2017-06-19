<template>
  <div id="fay-blog">

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="14" :md="16" :lg="12" class="main fl">

        <div class="fay-archive" v-for="item in articles">
          <div v-for="(value, key) in item">
            <div class="b-year"><span class="by-txt">{{key}}</span></div>
            <article class="b-item" v-for="oitem in value">
              <div class="b-more">
                <span>{{oitem.meta.createAt.substring(8, 10)}}日</span><small>{{oitem.meta.createAt.substring(11, 13)>= 12?oitem.meta.createAt.substring(11, 13):+oitem.meta.createAt.substring(11, 13)+12}}:{{oitem.meta.createAt.substring(14, 16)}}</small>

              </div>
              <div class="b-main">
                <a class="b-title"  v-bind:id="oitem._id" @click="jumpDetail(oitem._id)" title="点击查看文章">
                  {{oitem.title}}
                </a>

                <footer class="b-footer">
                <span class="b-info link fa fa-th-large" title="分类">
                  <a href="javascript:;">{{oitem.type}}</a>
                </span>
                  <i class="fa fa-eye" title="浏览"></i>
                </footer>
              </div>

            </article>
          </div>


        </div>




        <!--<div class="b-year"><span class="by-txt">2016年10月</span></div>-->
        <!--<article class="b-item">-->
          <!--<div class="b-more">-->
            <!--<span>06日</span><small>04:51</small>-->
          <!--</div>-->
          <!--<div class="b-main">-->
            <!--<h2 class="b-title said-ellipsis">-->
              <!--<a href="/blog/20161006045104.html" class="b-title" title="点击查看文章">从 HTTP 到 HTTPS - 网站部署 HTTPS 中需要做的事情</a>-->
            <!--</h2>-->
            <!--<div class="b-summary">-->

            <!--</div>-->
            <!--<footer class="b-footer">-->
              <!--<span class="b-info link fa fa-th-large" title="分类"><a href="/Blog?cate=ca8b0a54188e4a91a665fd6ceb02e156">Web</a></span>-->
              <!--<i class="fa fa-eye" title="浏览"></i>1015-->
            <!--</footer>-->
          <!--</div>-->

        <!--</article>-->


      </el-col>

    </el-row>

  </div>
</template>

<script>

  import utils from '../assets/js/utils.js'
  export default {
    data() {
      return {
        articles: {}
      }
    },
    mounted() {

      var _this = this;
      _this.request.get(_this.config.getApi('article_archive'))
        .then(function(res) {
          if(res.data.code === 0) {
            var articles = res.data.articles;
            articles.forEach(item => {
                item.createAt = new Date(item.meta.createAt).getFullYear() +'年' + (+new Date(item.meta.createAt).getMonth()+1) +'月';
            });

            _this.articles = utils.mergeArrByKey(articles, 'createAt');
            console.log(utils.mergeArrByKey(articles, 'createAt'))
          }
        })
    },
    methods: {
      jumpDetail: function(id) {
        this.$router.push('/blog?id=' + id);
      }
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
    margin: 60px 0 15px;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
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
  .b-item .b-title {
    color: #c03980;
  }
  .b-item .b-title:hover {
    cursor: pointer;
  }
  .b-footer {
    padding: 10px 0 6px;
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
