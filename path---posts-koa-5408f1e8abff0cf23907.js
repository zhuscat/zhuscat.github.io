webpackJsonp([59353986302962],{482:function(n,s){n.exports={data:{markdownRemark:{html:'<p>之前阅读了 <code class="language-text">co</code> 的源码，其实一开始就是想看一下 <code class="language-text">koa</code> 的源码，然后 <code class="language-text">koa</code> 又是基于 <code class="language-text">co</code> 构建的，所以先读了一下 <code class="language-text">co</code>，这次再来记录一下 <code class="language-text">koa</code> 源码中的东西。</p>\n<h2>compose</h2>\n<p><code class="language-text">compose</code> 方法返回一个 <code class="language-text">Generator</code> 函数，将所有 <code class="language-text">middleware</code> 串联起来。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span>middleware<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>首先， 判断 <code class="language-text">next</code> 是否为空，如果为空则将 <code class="language-text">next</code> 赋值为 <code class="language-text">noop</code>（空函数）。</p>\n<p>接着逆序遍历 <code class="language-text">middleware</code>，把 <code class="language-text">middleware</code> 数组中的后一个产生的 <code class="language-text">iterator</code> 作为前一个 <code class="language-text">middleware</code> 的参数。</p>\n<p>最后，<code class="language-text">yield *</code> 第一个 <code class="language-text">next</code>。</p>\n<p>理解这个函数，就明白在中间件中 <code class="language-text">yield next</code> 是怎么工作的了，因为数组中后一个会把产生的 <code class="language-text">iterator</code> （也就是 <code class="language-text">next</code>）传给前一个。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span>middleware<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>next<span class="token punctuation">)</span> next <span class="token operator">=</span> <span class="token function">noop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> i <span class="token operator">=</span> middleware<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      next <span class="token operator">=</span> middleware<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">yield</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Application</h2>\n<h3>构造函数</h3>\n<p>先来看看 <code class="language-text">Application</code> 的构造函数，注意到 <code class="language-text">middleware</code>， <code class="language-text">context</code>，<code class="language-text">request</code> 和 <code class="language-text">response</code>。<code class="language-text">Context</code>，<code class="language-text">Request</code> 和 <code class="language-text">Response</code> 都是 <code class="language-text">Koa</code> 下面自定义的三个类。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Application</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">||</span> <span class="token string">\'development\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>subdomainOffset <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>proxy <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>request <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>Application#use</h3>\n<p>这个函数就是检查 <code class="language-text">fn</code> 的合法性，然后把 <code class="language-text">fn</code> 添加到 <code class="language-text">middleware</code> 数组里面，返回 <code class="language-text">this</code> 可以让这个函数链式调用。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">app<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>experimental<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// es7 async functions are not allowed,</span>\n    <span class="token comment">// so we have to make sure that `fn` is a generator function</span>\n    <span class="token function">assert</span><span class="token punctuation">(</span>fn <span class="token operator">&amp;&amp;</span> <span class="token string">\'GeneratorFunction\'</span> <span class="token operator">==</span> fn<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">\'app.use() requires a generator function\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">\'use %s\'</span><span class="token punctuation">,</span> fn<span class="token punctuation">.</span>_name <span class="token operator">||</span> fn<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>Application#callback</h3>\n<p>调用 <code class="language-text">callback</code> 函数返回的是一个形似 <code class="language-text">function(res, req) {}</code> 的函数。这个返回的函数传给 <code class="language-text">http.createServer</code>。</p>\n<p>让我们仔细看一下 <code class="language-text">callback</code>，首先，调用 <code class="language-text">compose</code> 将 <code class="language-text">middleware</code> 变为一个 <code class="language-text">Generator</code> 函数，然后使用 <code class="language-text">co.wrap</code> 将其变为一个返回 <code class="language-text">Promise</code> 的函数。关于 <code class="language-text">co</code> 的讨论，可以看我写的另一篇文章 <a href="http://zhuscat.com">阅读 co 源码</a>。</p>\n<p>接着保存 <code class="language-text">this</code> 给 <code class="language-text">self</code>。</p>\n<p>注意到 <code class="language-text">this.listeners(&#39;error&#39;).length</code> 这段代码，<code class="language-text">Application.prototype</code> 的原型是 <code class="language-text">EventEmitter.prototype</code>，因此拥有这个属性。</p>\n<p>接着就是返回这个回调函数了，<code class="language-text">onFinished</code> 是在一个 HTTP 请求关闭，结束或者出现错误的时候调用的，这里我们传入了 <code class="language-text">ctx.onerror</code>，<code class="language-text">createContext</code> 所做的就是创建一个 <code class="language-text">Context</code> 对象，然后创建 <code class="language-text">Request</code> 和 <code class="language-text">Response</code> 对象，并将它们进行一系列的关联。</p>\n<p>可以看到下面还有一个 <code class="language-text">respond.call(ctx)</code>，<code class="language-text">respond</code> 是一个关于 <code class="language-text">Response</code> 的帮助函数，最终结束掉响应。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">app<span class="token punctuation">.</span><span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>experimental<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'Experimental ES7 Async Function support is deprecated. Please look into Koa v2 as the middleware signature has changed.\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>experimental\n    <span class="token operator">?</span> <span class="token function">compose_es7</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> co<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token function">compose</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onerror<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> ctx <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">onFinished</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>onerror<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    fn<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">handleResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      respond<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>onerror<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>Context</h2>\n<p><code class="language-text">Context</code> 类（准确来说是用作一个原型）作为一个上下文，提供了到 <code class="language-text">Response</code> 对象和 <code class="language-text">Request</code> 对象的代理。</p>\n<h2>Request</h2>\n<p>提供了一系列与请求相关的方法。</p>\n<h2>Response</h2>\n<p>提供了一系列与响应相关的方法。</p>\n<h2>总结</h2>\n<p>最后附上一个 <code class="language-text">Koa</code> 调用的流程</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/koa/koa-flowchart.png" alt="Koa Flowcahrt"></p>\n<p><code class="language-text">Koa</code> 是一个非常轻量级的 Web 框架，连路由都没有提供，去看它的源码的时候，发现居然只有4个文件，每个文件代码都不多，并且有许多注释，比较容易阅读。正是这样一个轻量级的框架，配合大量的中间件，可以构建出一个功能强大的应用，这也许就是 Koa 的魅力所在吧。</p>',frontmatter:{title:"阅读 Koa 源码",date:"December 11, 2016",tags:["koa","nodejs","JavaScript","Web","学习笔记","源码阅读"]},fields:{slug:"/koa/"}}},pathContext:{slug:"/koa/"}}}});
//# sourceMappingURL=path---posts-koa-5408f1e8abff0cf23907.js.map