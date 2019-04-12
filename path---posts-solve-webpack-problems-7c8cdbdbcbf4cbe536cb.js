webpackJsonp([9822643930392],{532:function(e,a){e.exports={data:{markdownRemark:{html:'<p>node 是好久之前装的了，更新了一下，问题出现多多</p>\n<p>首先是 npm 出现了一些问题，错误大概是这个样子的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.</code></pre>\n      </div>\n<p>然后通过更新 npm 解决了：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo npm update -g npm</code></pre>\n      </div>\n<p>接着，全局安装 webpack</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install -g webpack</code></pre>\n      </div>\n<p>使用 webpack 的时候出现了以下问题：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Error: Cannot find module &#39;webpack/lib/node/NodeTemplatePlugin&#39;</code></pre>\n      </div>\n<p>看了一下有没有 <code class="language-text">NodeTemplatePlugin</code>，结果是有的。</p>\n<p>我的心情是这样的</p>\n<p><img src="https://i.loli.net/2018/11/17/5befc787db25c.png" alt="表情1"></p>\n<p>然后继续各种搜索，总算找到办法，原来是要设置 <code class="language-text">NODE_PATH</code>，我用的是 fish shell，打开 <code class="language-text">config.fish</code>，加上一行:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">set -x NODE_PATH /usr/local/node_modules:/usr/local/lib/node_modules</code></pre>\n      </div>\n<p>之后总算是可以用了，这里记录一下。</p>',frontmatter:{title:"用 webpack 遇到的坑",date:"July 20, 2016",tags:["前端","开发"]},fields:{slug:"/solve-webpack-problems/"}}},pathContext:{slug:"/solve-webpack-problems/"}}}});
//# sourceMappingURL=path---posts-solve-webpack-problems-7c8cdbdbcbf4cbe536cb.js.map