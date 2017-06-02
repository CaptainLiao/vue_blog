<template>
  <div class="main">
    <blog-banner></blog-banner>

    <section class="fay-section">
      <h1>THE NEWEST BLOG</h1>
      <h2>Essential Links</h2>
      <el-row type="flex" class="row-bg" justify="center">

        <el-col :xs="24" :sm="8" :md="8" :lg="8" class="fay-section-item no-border fl" v-for="item in articles" :key="item">
          <h3 v-bind:id="item._id" @click="jumpDetail(item._id)">{{item.title}}</h3>
          <p class="fay-section-preview">{{item.content}}</p>
        </el-col>


      </el-row>
    </section>

    <section class="fay-section">
      <h1>THE NEWEST BLOG</h1>
      <h2>Essential Links</h2>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" class="fay-section-item no-border fl">
          <h3>推荐</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat incidunt itaque nobis odio velit. Ab at culpa dicta excepturi, facilis laudantium maiores mollitia, placeat quam quasi quos repellendus rerum sunt?</p>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" class="fay-section-item fl">
          <h3>推荐</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eaque, esse facilis fuga odio perspiciatis possimus. Consequuntur cumque delectus doloremque dolores exercitationem explicabo modi mollitia quia quidem sed veniam, veritatis?</p>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" class="fay-section-item fl">
          <h3>联系方式</h3>
          <p>
            为什么要提升web性能？ Web性能黄金准则：只有10%~20%的最终用户响应时间花在了下载html文档上，其余的80%~90%时间花在了下载页面组件上
          </p>
        </el-col>
      </el-row>
    </section>
  </div>
</template>


<script type="text/javascript">
  export default {
      data() {
          return{
            articles: []
          }
      },
      mounted() {
        var _this = this;
        _this.request.get(_this.config.getApi('article_list'))
          .then(function(res) {
            console.log(res);
            if(res.data.code === 0) {
                var articles = res.data.articles;
              _this.articles = articles.splice(0,3);
              console.log(_this.articles)
            }
          })
      },
      methods: {
        jumpDetail: function(id) {
            this.$router.push('/blog?id=' + id);
        }
      },
      components: {
          'blog-hello': require('@/components/hello'),
          'blog-banner': require('@/components/banner')
      }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/global.less";

  .fay-section-item {
    border-left: 1px solid #EFF2F7;
    margin-top: 40px;
    padding: 10px 20px 0 20px;
    text-align: left;
  }
  .no-border {
    border: 0;
  }
  @media screen and (max-width: @xs-width) {
    #fay {
      margin-bottom: 280px;
    }
  }

  .fay-section {
    padding: 40px 20px;
    h1,h2,h3 {
      font-weight: normal;
    }
    h3 {
      cursor: pointer;
      color: @title-color;
    }

    .fl{
      float: left;
    }
    .row-bg {
      display: block;
      &:before,
      &:after {
          content: ' ';
          display: table;
       }
      &:after {
          clear: both;
       }
    }
    .fay-section-item {
      border: 0;
      padding: 0 20px;
      margin-top: 10px;
    }
  }
</style>
