webpackJsonp([0x822c1bbc0e88],{485:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Generator 是一种可以暂停的函数，通过使用 <code class="language-text">yield</code> 来进行控制。</p>\n<!-- more -->\n<h2>基本</h2>\n<p>本文通过一段代码来解释 generator 的机制。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">5</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">yield</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> a<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nit<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n<span class="token comment">// { value: 5, done: false }</span>\nit<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n<span class="token comment">// { value: 10, done: false }</span>\nit<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n<span class="token comment">// 20</span>\n<span class="token comment">// { value: 20, done: true }</span>\nit<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>\n<span class="token comment">// { value: undefined, done: true }</span></code></pre>\n      </div>\n<p>generator 一种特殊的函数，其通过在 <code class="language-text">function</code> 和函数签名之间加上一个 <code class="language-text">*</code> 来定义，<code class="language-text">*</code> 的位置没有要求，因此，以下任何一种方式都是合法的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>首先通过调用 <code class="language-text">foo()</code> 来生成一个迭代器。接着通过调用这个迭代器的 <code class="language-text">next</code> 方法可以控制该函数的流程。</p>\n<p>当调用第一个 <code class="language-text">next</code> 的时候，会运行到第一个 <code class="language-text">yield</code> 处，然后停止该函数的运行。</p>\n<p><code class="language-text">yield</code> 关键字用来暂停函数，当函数运行到带有 <code class="language-text">yield</code> 关键字的地方的时候，就会暂停该函数。当 <code class="language-text">yield</code> 后面有一个值得时候，会将该值传出。</p>\n<p>在上面一段代码的 <code class="language-text">//1</code> 处，<code class="language-text">it.next()</code> 返回了 <code class="language-text">{ value: 5, done: false }</code>。</p>\n<p>再看 <code class="language-text">//2</code> 处的 <code class="language-text">it.next(10)</code>，这次给 <code class="language-text">next</code> 传了一个值，值为 <code class="language-text">10</code>，这相当于将上次出现 <code class="language-text">yield</code> 的地方赋值为 <code class="language-text">10</code>，也就是说，<code class="language-text">var a = yield 5;</code> 处变为 <code class="language-text">var a = 10;</code>，因此变量 <code class="language-text">a</code> 被赋值为 <code class="language-text">10</code>，接着，函数继续运行，一直运行到下一个 <code class="language-text">yield</code> 处，也就是 <code class="language-text">console.log(yield a)</code>，当运行到这个 <code class="language-text">yield</code> 的时候，函数暂停，于是 <code class="language-text">console.log(yield a)</code> 最终还没有被调用。此时 <code class="language-text">yield a</code> 将 <code class="language-text">a</code> 值传出，所以在 <code class="language-text">//2</code> 处返回的值为 <code class="language-text">{ value: 10, done: false }</code>。</p>\n<p>接着继续调用 <code class="language-text">//3</code> 处的 <code class="language-text">it.next(20)</code>，这次传入了 <code class="language-text">20</code>，上次出现 <code class="language-text">yield</code> 的代码变为 <code class="language-text">console.log(20)</code>，因此控制台输出 <code class="language-text">20</code>，同时，函数一直运行到 <code class="language-text">return a</code> 处。此时，<code class="language-text">//3</code> 处的代码返回 <code class="language-text">{ next: 20, done: true }</code>。因为函数已经运行完成了，所以 <code class="language-text">done</code> 变为 <code class="language-text">true</code>。<code class="language-text">done</code> 是用来指示迭代器是否运行完成的标志，当 <code class="language-text">done</code> 为 <code class="language-text">true</code> 的时候，就表明迭代器已经运行完成了。</p>\n<p>接着继续调用 <code class="language-text">//4</code> 处的 <code class="language-text">it.next(30)</code>，但这次函数已经运行完成了，所以返回了 <code class="language-text">{ next: undefined, done: true }</code>。</p>\n<h2>异常捕获</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">yield</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'内部捕获异常\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nit<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    it<span class="token punctuation">.</span><span class="token keyword">throw</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    it<span class="token punctuation">.</span><span class="token keyword">throw</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'外部捕获错误\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 内部捕获错误 a</span>\n<span class="token comment">// 外部捕获错误 b</span></code></pre>\n      </div>\n<p>可以调用 <code class="language-text">throw</code> 方法来向函数传入一个错误，如果错误没有被函数处理，则错误会被重新抛出。</p>\n<p>来看看上面一段代码，首先运行了一遍 <code class="language-text">it.next()</code>，于是函数停在了 <code class="language-text">yield</code> 处，<code class="language-text">yield</code> 处于一个 <code class="language-text">try</code> 中，此时如果有错误抛出，则会被 <code class="language-text">catch</code> 接收到，然后调用了两次 <code class="language-text">it.throw</code>，分别传入 <code class="language-text">a</code> 和 <code class="language-text">b</code>，第一次传入的 <code class="language-text">a</code> 被函数内部的 <code class="language-text">catch</code> 捕获了，但第二次则是被外部的 <code class="language-text">catch</code> 捕获，因为函数内部的 <code class="language-text">catch</code> 已经运行过一遍了。</p>\n<h2>生成器委托</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token number">4</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>通过前面添加 <code class="language-text">yield *</code> 在一个生成器函数中调用另一个生成器函数。看看输出就可以理解流程了：</p>\n<p><img src="https://i.loli.net/2018/11/17/5befc1ebb66bf.png" alt="log"></p>',frontmatter:{title:"generator",date:"November 24, 2016",tags:["前端","JavaScript","ES6"]},fields:{slug:"/generator/"}}},pathContext:{slug:"/generator/"}}}});
//# sourceMappingURL=path---posts-generator-b35240e0f2f6409f2756.js.map