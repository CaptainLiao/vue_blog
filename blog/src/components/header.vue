
<template>
  <header id="header">
    <div class="logo">
      <a href="/" class="logo-link" title="廖大爷"></a>
    </div>
    <nav class="nav">
      <el-row :gutter="20" type="flex" class="nav-list row-bg" justify="center">
        <el-col :xs="6" :sm="11" :md="7" :lg="7"><div class="nav-logo" @click="switchTab('', '/')">LOGO</div></el-col>

        <el-col :xs="4" :sm="2" :md="2" :lg="1" v-for="(item, index) in urls" :key="item.id">
          <a href="javascript:;" @click="switchTab(index, item.url)" :data-i="index" :data-url="item.url" v-bind:class="{'nav-active': i == index}">{{item.message}}</a>
        </el-col>

      </el-row>
    </nav>

  </header>

</template>

<script>
  export default {
      data() {
          return {
              urls: [
                {url: '/', message: '首页'},
                {url: '/blog/list', message: '存档'},
                {url: '/project', message: '项目'},
                {url: '/about', message: '关于'},
              ],
              i: 0
          }
      },
      methods: {
        switchTab(index, url) {
            this.i = index;
            this.$router.push({path: url})

        },
        printPath() {

        }
      },
      watch: {
          $route: 'printPath'
      },
      created() {

      }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/global.less";
  #header {
    padding: 10px 0 15px 0;
    font-size: 14px;
  }
  .nav-logo{
    width: 80px;
    cursor: pointer;
    text-align: left;
  }
  .nav-list {
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    a,span {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      &:hover {
         color: @hover-color;
         border-bottom: 1px solid #58B7FF;
         animation: width;
       }
    }
    .nav-active {
      color: @active-color;
      border-bottom: 1px solid #58B7FF;
    }

  }
  .nav-hover {
    position: absolute;

  }

  @media screen and (max-width: @xs-width) {
    #header {
      font-size: 12px;
    }
  }
</style>
