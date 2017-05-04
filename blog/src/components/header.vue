
<template>
  <header id="header">
    <div class="logo">

      <a href="/" class="logo-link" title="廖大爷"></a>
    </div>
    <nav class="nav">
      <el-row :gutter="20" type="flex" class="nav-list row-bg" justify="center">
        <el-col :xs="6" :sm="7" :md="7" :lg="7" class="nav-logo"><div>LOGO</div></el-col>
        <el-col :xs="4" :sm="3" :md="2" :lg="1"><a href="/" class="nav-active">首页</a></el-col>
        <el-col :xs="4" :sm="3" :md="2" :lg="1"><a href="/">博客</a></el-col>
        <el-col :xs="4" :sm="3" :md="2" :lg="1"><a href="/">项目</a></el-col>
        <el-col :xs="4" :sm="3" :md="2" :lg="1"><a href="/">关于</a></el-col>
        <span class="nav-hover"></span>
      </el-row>
    </nav>

  </header>

</template>

<script>
  export default {
      data() {
          return {
              data: []
          }
      },
      created() {

      }
  }
</script>

<style lang="less" scoped>
  #header {
    padding: 10px 0 15px 0;
  }
  .nav-logo{
    text-align: left;
  }
  .nav-list {
    position: relative;
    width: 100%;
    height: 70px;
    line-height: 70px;
    a {
      display: inline-block;
      width: 100%;
      &:hover {
         color: #20A0FF;
         border-bottom: 1px solid #58B7FF;
         animation: width;
       }
    }
    .nav-active {
      color: #20A0FF;
      border-bottom: 1px solid #58B7FF;
    }

  }
  .nav-hover {
    position: absolute;

  }
</style>
