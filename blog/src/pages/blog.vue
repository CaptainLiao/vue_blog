<template>

  <div id="fay-blog">
    <liao-fei-yin></liao-fei-yin>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="14" :md="16" :lg="12" class="main fl">

        <!--<blog-navbar></blog-navbar>-->
        <h1 class="fay-blog-title" v-html="blog.title"></h1>
        <div v-html="blog.content"></div>

      </el-col>
    </el-row>

  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data() {
      return {
        blog: {}
      }
    },
    mounted() {
      let _this = this;
      let query = this.$route.query;
      console.log(_this.config)
      _this.request.get(_this.config.getApi('article') +'?id=' + query.id)
        .then(function(res) {
          var data = res.data;
          console.log(data);
          if(data) {
            _this.blog = data.article;

          }

        });
      document.body.onscroll = function() {
        var height = $(document).height();
        var winH = $(window).height();
        var scrollTop = $(window).scrollTop();
        $('.state-bar').width(scrollTop/(height-winH) *100 +'%');
        console.log(1)
      }
    },
    methods: {

    },
    components: {
      'liao-fei-yin': require('../components/stateBar'),
      'blog-navbar': require('../components/sidebar')
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/global.less";
  .fay-blog-title {
    font-size: 2.1em;
    padding: 0 15px 0 0;
    line-height: 2em;
    border-bottom: 1px dashed #ccc;
    color: #666;
    font-weight: 300;
  }
</style>
