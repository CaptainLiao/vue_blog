<template>
  <div class="fay-banner">
    <el-row type="flex" justify="center" class="banner-list">
      <el-col :span="24"><a href="#"><img src="../assets/33.jpg" alt=""></a></el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
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
</style>
