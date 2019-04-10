webpackJsonp([0xe403eb6bbc4d],{478:function(n,s){n.exports={data:{markdownRemark:{html:'<p>阅读了一下 <code class="language-text">co</code> 的源码，发现其实做法跟我之前看的《你不知道的 JavaScript》中的 Generator + Promise 一节类似。正好巩固了一下这方面的知识，顺便做一些记录。</p>\n<p><code class="language-text">co</code> 的源码不多，和注释加起来也才两百多行。其中，一个核心函数就是 <code class="language-text">co</code> 了， <code class="language-text">co</code> 可以将 <code class="language-text">Generator</code> 进行自动的执行，本文就来讲一讲 <code class="language-text">co</code> 是怎么实现自动运行 <code class="language-text">Generator</code> 的。</p>\n<!-- more -->\n<p><code class="language-text">co</code> 函数会返回一个 <code class="language-text">Promise</code> 对象。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">co</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> args <span class="token operator">=</span> slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>在传给这个返回的 <code class="language-text">Promise</code> 对象的函数体中，做了很多事情。 首先，函数检查传入的 <code class="language-text">gen</code> 参数是否是一个函数，如果是的话先执行这个函数，然后将 <code class="language-text">gen</code> 重新赋值（如果这个函数是一个 <code class="language-text">Generator</code> 的话，此时 <code class="language-text">gen</code> 变为一个 <code class="language-text">iterator</code>）。接着，检查 <code class="language-text">gen</code> 是否是一个有 <code class="language-text">next</code> 方法的对象，不是的话直接 <code class="language-text">resolve</code> 返回。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">co</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> args <span class="token operator">=</span> slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> gen <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> gen <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gen <span class="token operator">||</span> <span class="token keyword">typeof</span> gen<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>之后函数会调用 <code class="language-text">onFulfilled</code> 方法。 <code class="language-text">onFulfilled</code> 调用 <code class="language-text">gen</code> 的 <code class="language-text">next</code> 方法，并捕获可能发生的错误并进行 <code class="language-text">reject</code>。如果没有发生错误，则调用 <code class="language-text">next</code> 方法。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">co</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> args <span class="token operator">=</span> slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> gen <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> gen <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gen <span class="token operator">||</span> <span class="token keyword">typeof</span> gen<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n    <span class="token keyword">function</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> ret<span class="token punctuation">;</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        ret <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">next</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">next</code> 方法就是让 <code class="language-text">Generator</code> 自动完成的核心方法了。 它首先检查迭代器迭代是否完成，如果完成就直接 <code class="language-text">resolve</code>。否则，将 <code class="language-text">ret.value</code> 转化成一个 <code class="language-text">Promise</code>（如果可以的话）。接着检查 <code class="language-text">value</code> 是否成功转化为一个 <code class="language-text">Promise</code>，如果是的话，就调用 <code class="language-text">value</code> 的 <code class="language-text">then</code> 方法，并把 <code class="language-text">onFulfilled</code> 和 <code class="language-text">onRejected</code> 作为这个 <code class="language-text">Promise</code> 完成或被拒绝时候执行的函数。如果没有成功被转换为 <code class="language-text">Promise</code>，则执行 <code class="language-text">reject</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">co</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> args <span class="token operator">=</span> slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> gen <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> gen <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gen <span class="token operator">||</span> <span class="token keyword">typeof</span> gen<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n    <span class="token keyword">function</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> ret<span class="token punctuation">;</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        ret <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">next</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// ...</span>\n\n    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>ret<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> value <span class="token operator">=</span> toPromise<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">\'You may only yield a function, promise, generator, array, or object, \'</span>\n        <span class="token operator">+</span> <span class="token string">\'but the following object was passed: "\'</span> <span class="token operator">+</span> <span class="token function">String</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'"\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>最后再看一下 <code class="language-text">onRejected</code>，首先，它让 <code class="language-text">gen</code> 调用 <code class="language-text">throw</code> 方法，并传入错误参数，如果 <code class="language-text">Generator</code> 中写了捕捉相应错误的代码，则会捕捉到错误并返回 <code class="language-text">ret</code>，接着继续执行 <code class="language-text">ret</code> 就好了（期间也可能抛出新的错误）。不然，错误被重新抛出（没有被 <code class="language-text">Generator</code> 处理），然后调用 <code class="language-text">reject</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">co</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> args <span class="token operator">=</span> slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> gen <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> gen <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gen <span class="token operator">||</span> <span class="token keyword">typeof</span> gen<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n    <span class="token keyword">function</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> ret<span class="token punctuation">;</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        ret <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">next</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token keyword">function</span> <span class="token function">onRejected</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> ret<span class="token punctuation">;</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        ret <span class="token operator">=</span> gen<span class="token punctuation">.</span><span class="token keyword">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">next</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>ret<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> value <span class="token operator">=</span> toPromise<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">\'You may only yield a function, promise, generator, array, or object, \'</span>\n        <span class="token operator">+</span> <span class="token string">\'but the following object was passed: "\'</span> <span class="token operator">+</span> <span class="token function">String</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'"\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>这就是 <code class="language-text">co</code> 的核心函数了，其他的一些函数都是一些判断类型（是否为 <code class="language-text">Promise</code>等），转换函数（将 <code class="language-text">thunk</code> 转换为 <code class="language-text">Promise</code>，将 <code class="language-text">Array</code> 转换为 <code class="language-text">Promise</code> 等）和一个 <code class="language-text">wrap</code> 函数（将 <code class="language-text">Generator</code> 转换一个返回 <code class="language-text">Promise</code> 的函数）。</p>',frontmatter:{title:"阅读 co 源码",date:"December 10, 2016",tags:["阅读源码","co","异步编程","JavaScript","前端"]},fields:{slug:"/co/"}}},pathContext:{slug:"/co/"}}}});
//# sourceMappingURL=path---posts-co-156b845e6aa910d91cb0.js.map