<template>
  <nav class="blog-sidebar">
    <div>目录</div>
    <ul>
      <li><a href="javascript:;">起因起因起因起因起因起因</a></li>
      <li><a href="javascript:;">经过</a></li>
      <li><a href="javascript:;">结果</a></li>
    </ul>

  </nav>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/less/global.less";

  .blog-sidebar {
    position: absolute;
    top: 40px;
    right: -200px;

    width: 140px;

  }
  ul {
    margin: 20px 0 0 0;
    padding: 0;
    font-size: 14px;
    list-style-type: none;
  }
  li {
    padding: 0 0 0 20px;
    height: 38px;
    line-height: 38px;
    border-left: 3px solid #eee;
    a {
      display: inline-block;
      width: 100%;
      color: #1c8de0;
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap
    }
  }

  @media screen and (max-width: @xs-width) {
    .blog-sidebar {
      display: none;
    }
  }
</style>
