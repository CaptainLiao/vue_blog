<template>
  <div class="fay-banner">
    <el-row type="flex" justify="center" class="banner-list">
      <el-col :span="24"><a href="#"><img src="http://opz2g8x56.bkt.clouddn.com/saidbg.144c574.png" alt=""></a></el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
  @import "../assets/less/global.less";
  .fay-banner {
    width: 100%;
    height: 700px;
    overflow: hidden;
    a {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner-list {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: @xs-width) {
    .fay-banner {
      height: 300px;
    }
  }
</style>
