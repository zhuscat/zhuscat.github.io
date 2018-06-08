webpackJsonp([0x607a2fa93ca0],{469:function(n,a){n.exports={data:{markdownRemark:{html:'<p>这三个函数都与改变函数执行时的上下文有关。其又分为两类：</p>\n<ol>\n<li><code class="language-text">Function.prototype.apply</code> 与 <code class="language-text">Function.prototype.call</code> 为一类。它们会立即调用函数。</li>\n<li><code class="language-text">Function.prototype.bind</code>  为一类，其会返回一个绑定了作用域的函数而不立即被调用。</li>\n</ol>\n<h2>Function.prototype.apply</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">fun<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> <span class="token punctuation">[</span>argsArray<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><code class="language-text">apply</code> 接收两个参数第一个是要绑定给 <code class="language-text">this</code> 的值，第二个是参数数组（array-like object）。</p>\n<p>作用：</p>\n<ol>\n<li>绑定作用域</li>\n<li>方便一些函数的调用（诸如 <code class="language-text">Math.max</code>)</li>\n</ol>\n<p>绑定作用域相信就不用详细说明了，简单的说就是指定函数内部 <code class="language-text">this</code> 的指向。</p>\n<p>这里举一个方便函数调用的例子，大家知道，<code class="language-text">Math.max</code> 接收一系列数字作为参数，但是不接收数组，使用 <code class="language-text">apply</code> 就可以做到传递数组了：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> maxNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span>max<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// output: 10</span></code></pre>\n      </div>\n<p>不过，在 ES2015 中这应该不是问题了，因为可以使用扩展运算符（<code class="language-text">...</code></p>\n<p>）</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> maxNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// output: 10</span></code></pre>\n      </div>\n<h2>Function.prototype.call</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">fun<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">[</span><span class="token punctuation">,</span> arg1<span class="token punctuation">[</span><span class="token punctuation">,</span> arg2<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><code class="language-text">call</code> 的作用与 <code class="language-text">apply</code> 完全相同，只是使用方法有所不同，需要将参数一个一个传入。另外由于 ES2015 中的扩展运算符，似乎 <code class="language-text">call</code> 和 <code class="language-text">apply</code> 在在任何场景都可以互相替换了。个人认为使用哪一个函数看个人习惯了。</p>\n<h2>Function.prototype.bind</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">fun<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">[</span><span class="token punctuation">,</span> arg1<span class="token punctuation">[</span><span class="token punctuation">,</span> arg2<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><code class="language-text">bind</code> 与前两个函数不同之处在于，前两个函数会立即执行，而 <code class="language-text">bind</code> 做的仅仅是绑定作用域，然后供之后调用。</p>\n<p>关于 <code class="language-text">bind</code> 还有一点值得说明的是，当一个函数调用 <code class="language-text">bind</code> 绑定 <code class="language-text">thisArg</code> 之后，企图再去调用 <code class="language-text">bind</code> 去绑定另一个上下文，或者去调用 <code class="language-text">apply</code> 或者 <code class="language-text">call</code> 来改变上下文是没有用的。</p>\n<p>来看一下 <code class="language-text">bind</code> 的简单实现（粗略实现，实际实现内容更多）</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">Function<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">...</span>formerArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>laterArgs<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> _this<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> formerArgs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>laterArgs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>当第一次调用 <code class="language-text">bind</code> 之后就形成了一个闭包，再改变上下文也不会改变最后执行的结果。</p>\n<h2>更新记录</h2>\n<ol>\n<li>2016 年 10 月 18 日增加 <code class="language-text">bind</code> 的描述。</li>\n</ol>',frontmatter:{title:"apply, call 与 bind",date:"August 25, 2016",tags:["学习笔记","前端","JavaScript"]},fields:{slug:"/apply-call-and-bind/"}}},pathContext:{slug:"/apply-call-and-bind/"}}}});
//# sourceMappingURL=path---posts-apply-call-and-bind-279d71eb49ad6a12608a.js.map