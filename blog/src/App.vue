<template>
  <section id="fay-blog">
    <blog-header></blog-header>
    <router-view></router-view>
    <blog-footer></blog-footer>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import "./assets/less/global.less";
  #fay-blog {
    font-family: STHeiti,"Helvetica Neue",Helvetica,Arial,'Microsoft Yahei',sans-serif,'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-bottom: 350px;
    padding-bottom: 20px;
    background-color: #fff;
  }

  @media screen and (max-width: @xs-width) {
    #fay-blog {
      margin-bottom: 270px;
    }
  }
</style>

<script>
  export default {
      components: {

      }
  }
</script>
