<template>

  <div id="fay-blog">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="20" :md="20" :lg="14" class="no-border fl">
        <section>
          <h2 id="-">最初的渲染函数</h2>
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
          <h2 id="-b-function">牛B的Function</h2>
          <p>我们用的最多的就是 function 关键字了，但对于 function 的爸爸 Function 却有点陌生，那么 Function 究竟哪里流弊呢？红宝石书不是建议我们不要用 Function吗？
            其实，在JS中，但我们使用 function 声明函数的时候，JS会自动调用 Function 来生成实例。并且，Function 为我们提供了更强大的武器——动态函数。</p>
          <blockquote>
            <p>  语法</p>
            <pre><code><span class="hljs-keyword">var</span> function_name = <span class="hljs-keyword">new</span> <span class="hljs-function"><span class="hljs-keyword">Function</span><span class="hljs-params">(arg1, arg2, ..., argN, function_body)</span></span>
</code></pre></blockquote>
          <p>等同于</p>
          <pre><code><span class="hljs-keyword">var</span> function_name = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(arg1,<span class="hljs-rest_arg">..., argN</span>)</span> </span>{function_body}
</code></pre>

        </section>
      </el-col>
    </el-row>

  </div>
</template>

<style lang="less" scoped>
  @import "../assets/less/global.less";
  #fay-blog {
    text-align: left;
    padding: 0 10px;
    blockquote {
      margin: 0 0 25px 0;
      padding: 20px;
      font-weight: 400;
      word-break: break-all;
      border-left: 4px solid #999;
      background-color: #f7f7f7;
    }
    pre {
      overflow-x: auto;
      padding: 10px;
      background-color: #f7f7f7;
    }

    code {
      font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
      background-color: #f7f7f7;
      color: navy;
    }


    h2 {
      line-height: 2;
      border-bottom: 1px solid #eee;
    }

  }

</style>
