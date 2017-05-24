<template>

  <div id="fay-blog">


    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="14" :md="14" :lg="14" class="main fl">

        <blog-navbar></blog-navbar>
        <div v-html="blog.content"></div>

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
        let _this = this;
        let query = this.$route.query;
        console.log(query)
      _this.request.get('http://localhost:5000/article?id=' + query.id)
          .then(function(res) {
              var data = res.data;
              console.log(data);
              if(data) {
                _this.blog = data.article;
                hljs.initHighlightingOnLoad();
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

</style>
