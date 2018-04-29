webpackJsonp([0xf54cea2f30a5],{456:function(n,s){n.exports={data:{markdownRemark:{html:'<p>今天随意浏览，发现 <code class="language-text">Promise.prototype.finally</code> 已经进入到 <code class="language-text">Stage 4</code> 了，顺便记录一下规范中 <code class="language-text">finally</code> 的一些注意点吧。</p>\n<h2>使用方法</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'finally\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nPromise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'reason\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'finally\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>注意点</h2>\n<p>1、 <code class="language-text">finally</code> 中的回调函数不接受任何参数</p>\n<p>2、在调用了 <code class="language-text">finally</code> 之后返回的仍然是一个 <code class="language-text">Promise</code>，它会将前面操作 <code class="language-text">resolved</code> 或者 <code class="language-text">rejected</code> 的值作为这个新返回的 <code class="language-text">Promise</code> 将会 <code class="language-text">resolved</code> 或者 <code class="language-text">rejected</code> 的值，但是，如果在 <code class="language-text">finally</code> 中 <code class="language-text">throw</code> 或者返回一个将会 <code class="language-text">rejected</code> 的 <code class="language-text">Promise</code>，那么，新返回的 <code class="language-text">Promise</code> 将会被在 <code class="language-text">finally</code> 中 <code class="language-text">throw</code> 或者返回的 <code class="language-text">Promise</code> reject 掉的值 reject 掉。</p>\n<p>让我们看几个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'finally\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>对于上面这段代码，最终这个 <code class="language-text">promise</code> <code class="language-text">resolved</code> 的结果为 <code class="language-text">666</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'reason\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'finally\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>对于上面这段代码，最终这个 <code class="language-text">promise</code> <code class="language-text">rejected</code> 的结果为 <code class="language-text">reason</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'reason\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'finally\'</span><span class="token punctuation">)</span>\n\t<span class="token keyword">throw</span> <span class="token string">\'reason2\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>对于上面这段代码，最终这个 <code class="language-text">promise</code> <code class="language-text">rejected</code> 的结果为 <code class="language-text">reason2</code></p>\n<h2>自己写 Polyfill</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">finally</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n    value <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    reason <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> reason <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"About Promise.prototype.finally",date:"March 04, 2018",tags:["前端","JavaScript"]},fields:{slug:"/about-promise-prototype-finally/"}}},pathContext:{slug:"/about-promise-prototype-finally/"}}}});
//# sourceMappingURL=path---posts-about-promise-prototype-finally-5e5817d459284fd2faaf.js.map