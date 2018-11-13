webpackJsonp([40855115847504],{482:function(n,s){n.exports={data:{markdownRemark:{html:'<p>其实 Tree Shaking 出来已经挺久了，不过我还是最近才了解的。</p>\n<p>Tree Shaking 是一个在 Rollup 中提出的概念，之后在 webpack 2 中也得到了实现。其作用是，比如说我依赖于某个模块的一部分，使用 Tree Shaking 可以只引入我依赖的那部分，其他部分可以去掉。</p>\n<p>这听起来十分美好，然而，Tree Shaking 真的有想象中的那么好吗？</p>\n<p>先拿 Rollup 一个官方例子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// main.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> cube <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./maths.js\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">cube</span><span class="token punctuation">(</span> <span class="token number">5</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 125</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// maths.js</span>\n<span class="token comment">// This function isn\'t used anywhere, so</span>\n<span class="token comment">// Rollup excludes it from the bundle...</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">square</span> <span class="token punctuation">(</span> x <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// This function gets included</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cube</span> <span class="token punctuation">(</span> x <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// rewrite this as `square( x ) * x`</span>\n\t<span class="token comment">// and see what happens!</span>\n\t<span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>最终可以打包出：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This function isn\'t used anywhere, so</span>\n<span class="token comment">// Rollup excludes it from the bundle...</span>\n\n\n<span class="token comment">// This function gets included</span>\n<span class="token keyword">function</span> <span class="token function">cube</span> <span class="token punctuation">(</span> x <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// rewrite this as `square( x ) * x`</span>\n\t<span class="token comment">// and see what happens!</span>\n\t<span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">cube</span><span class="token punctuation">(</span> <span class="token number">5</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 125</span></code></pre>\n      </div>\n<p>看，<code class="language-text">square</code> 函数没有被打包进来。</p>\n<p>然而，想要使其失效也很简单，我在 <code class="language-text">maths.js</code> 模块中再加一句</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">decorate</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>先不管 <code class="language-text">decorate</code> 函数是怎么实现的，最终打包出来的结果如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This function isn\'t used anywhere, so</span>\n<span class="token comment">// Rollup excludes it from the bundle...</span>\n<span class="token keyword">function</span> <span class="token function">square</span> <span class="token punctuation">(</span> x <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// This function gets included</span>\n<span class="token keyword">function</span> <span class="token function">cube</span> <span class="token punctuation">(</span> x <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// rewrite this as `square( x ) * x`</span>\n\t<span class="token comment">// and see what happens!</span>\n\t<span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">decorate</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">cube</span><span class="token punctuation">(</span> <span class="token number">5</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 125</span></code></pre>\n      </div>\n<p>好了，<code class="language-text">square</code> 已经被完整打包进来了。为什么？如果 <code class="language-text">decorate</code> 只是对 <code class="language-text">square</code> 函数进行一些改变还好，但如果 <code class="language-text">decorate</code> 函数做了其他事情呢？</p>\n<p>比如这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">decorate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tArray<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>假如不打包 <code class="language-text">square</code>，后续代码如果用到了 <code class="language-text">Array.prototype.count</code> 该怎么办？</p>\n<p>因此，Rollup 只能讲 <code class="language-text">square</code> 打包进来，将这个例子放到 <code class="language-text">webpack</code> 里面讲也同样适用。</p>\n<p>所以，Tree Shaking 并没有想象中的那么有效。</p>\n<p>Tree Shaking 需要模块是 ES6 模块，现在很多第三方模块都是 CommonJS 模块，对这些模块，无法使用 Tree Shaking 对其进行无用代码的删除。</p>\n<p>就算第三方模块提供了 ES6 模块的支持，因为上面说到的原因，Tree Shaking 也不一定能发挥作用，拿 Ant Design 举例，其包下面有一个 es 文件夹，这就是 ES6 模块，并且我们可以看到 <code class="language-text">antd</code> 包的 <code class="language-text">package.json</code> 文件已经配置了 <code class="language-text">module</code> 字段，因此，<code class="language-text">wepack 2</code> 及以上可以感知其拥有 ES6 模块，从而在引入的时候会从 es 文件夹中引入。然而，当我们写下</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span></code></pre>\n      </div>\n<p>并进行打包后，我们会发现整个 <code class="language-text">antd</code> 已经被打包进去了，随便看一个模块，会发现 <code class="language-text">antd</code> 的各个组件模块也是有副作用的，就比如一些组件使用了类似下面的代码对组件进行功能上的增强：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">decorate</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>最终我们还是需要使用 Babel Plugin 的方式对其进行按需加载。</p>\n<p>最后的总结就是，Tree Shaking 对一些纯函数的库应该会有不错的价值，但是 Tree Shaking 并没有想象中的有效，对于很多项目，其并不能发挥出其效果，不过，有总比没有好吧。</p>\n<h2>参考资料</h2>\n<ol>\n<li><a href="http://imweb.io/topic/58666d57b3ce6d8e3f9f99b0">webpack2 的 tree-shaking 好用吗？ - 腾讯Web前端 IMWeb 团队社区 | blog | 团队博客</a></li>\n<li><a href="https://toutiao.io/posts/cu9vfs/preview">译 为什么 Webpack 2 的 Tree Shaking 并非像你想的那么高效？ - 开发者头条</a></li>\n<li><a href="https://github.com/webpack/webpack/issues/2867">Tree shaking completely broken? · Issue #2867 · webpack/webpack · GitHub</a></li>\n<li><a href="http://www.aliued.com/?p=4060">阿里巴巴国际UED团队 » 今天，你升级Webpack2了吗？</a></li>\n</ol>',frontmatter:{title:"Tree Shaking 真的有效吗",date:"July 14, 2017",tags:["前端","webpack","rollup"]},fields:{slug:"/does-tree-shaking-work/"}}},pathContext:{slug:"/does-tree-shaking-work/"}}}});
//# sourceMappingURL=path---posts-does-tree-shaking-work-0f4397d9202eff6524a6.js.map