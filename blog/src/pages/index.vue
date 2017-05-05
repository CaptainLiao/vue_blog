<template>
  <div class="main">

    <blog-banner></blog-banner>

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
    <section>

      <h4 id="-">最初的渲染函数</h4>
      <p>机智如我自然想到用函数来循环。。。</p>
      <pre><code><span class="hljs-keyword">var</span> render = function(<span class="hljs-keyword">data</span>) {
    <span class="hljs-keyword">var</span> tmp = <span class="hljs-string">''</span>;
    tmp += <span class="hljs-string">'&lt;ul&gt;'</span>;
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, len = <span class="hljs-keyword">data</span>.length; i &lt; len; i++) {
        tmp += <span class="hljs-string">'&lt;li class="'</span>+ <span class="hljs-keyword">data</span>[i].status +<span class="hljs-string">'"&gt;'</span>+<span class="hljs-keyword">data</span>[i].text+<span
          class="hljs-string">'&lt;/li&gt;'</span>;
    }
    tmp += <span class="hljs-string">'&lt;/ul&gt;'</span>;
    <span class="hljs-keyword">return</span> tmp;
};
</code></pre>
      <h3 id="-b-function">牛B的Function</h3>
      <p>我们用的最多的就是 function 关键字了，但对于 function 的爸爸 Function 却有点陌生，那么 Function 究竟哪里流弊呢？红宝石书不是建议我们不要用 Function吗？
        其实，在JS中，但我们使用 function 声明函数的时候，JS会自动调用 Function 来生成实例。并且，Function 为我们提供了更强大的武器——动态函数。</p>
      <blockquote>
        <p>  语法</p>
        <pre><code><span class="hljs-keyword">var</span> function_name = <span class="hljs-keyword">new</span> <span class="hljs-function"><span class="hljs-keyword">Function</span><span class="hljs-params">(arg1, arg
2, ..., argN, function_body)</span></span>
</code></pre></blockquote>
      <p>等同于</p>
      <pre><code><span class="hljs-keyword">var</span> function_name = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(arg1,<span class="hljs-rest_arg">..., argN</span>)</span> </span>{function_body}
</code></pre>

    </section>
  </div>
</template>


<script type="text/javascript">
  export default {
      mounted() {

      },
      components: {
          'blog-hello': require('@/components/hello'),
          'blog-banner': require('@/components/banner')
      }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/global.less";
  .fay-section {
    padding: 40px 10px;
    h1,h2,h3 {
      font-weight: normal;
    }
    h3 {
      color: @title-color;

    }
  }

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
      padding: 0;
      margin-top: 10px;
    }
  }
</style>
