webpackJsonp([0xf3fab1fe8eb8],{502:function(a,n){a.exports={data:{markdownRemark:{html:'<p>JavaScript 是目前唯一广泛使用的基于原型的语言，然而，JavaScript 中掺杂了许多类的语法元素，比如 <code class="language-text">new</code> ，<code class="language-text">instanceof</code>，<code class="language-text">class</code>，这些东西掩盖了 JavaScript 的本质。实际上，JavaScript 中没有类，本文梳理了 <code class="language-text">[[Prototype]]</code> ，<code class="language-text">[[Get]]</code> 和 <code class="language-text">[[Put]]</code>，理解它们，会对 JavaScript 有更深刻的理解。</p>\n<h3>没有类</h3>\n<p>JavaScript 中并没有类，先看一段代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>你可能会认为 <code class="language-text">Foo</code> 是一个类，实际上并不是。</p>\n<p><code class="language-text">new Foo()</code> 只是会将新创建的对象的 <code class="language-text">[[Prototype]]</code> 关联到 <code class="language-text">Foo.prototype</code> 上去。这与真正类是不同的，类可以被复制（实例化）多次，而在 JavaScript 中，并没有出现复制，而是用 <code class="language-text">[[Prototype]]</code> 进行关联。</p>\n<h3>[[Prototype]]</h3>\n<p>JavaScript 中的对象有一个特殊的内置属性 —— <code class="language-text">[[Prototype]]</code>，其实就是对于其他对象的引用。</p>\n<p>这里给出一个例子</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>一个函数存在一个 <code class="language-text">prototype</code> 属性，如上面就是 <code class="language-text">Foo.prototype</code> 。</p>\n<p>当调用 <code class="language-text">new Foo()</code> 的时候，会将新产生的对象的 <code class="language-text">[[Prototype]]</code> 指向 <code class="language-text">Foo.prototype</code>。</p>\n<h3>[[Get]]</h3>\n<p>当你看到语句</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">obj<span class="token punctuation">.</span>a</code></pre>\n      </div>\n<p>的时候，不要以为这条语句仅仅是简单地在 <code class="language-text">obj</code> 对象中寻找属性名为 <code class="language-text">a</code> 的属性，<code class="language-text">obj.a</code> 实际上进行了一个 <code class="language-text">[[Get]]</code> 操作，<code class="language-text">[[Get]]</code> 操作是一个内置的操作。其行为是查找对象中是否有名称相同属性，如果有，则返回，如果没有，就到对象的 <code class="language-text">[[Prototype]]</code> 链指向的对象中去寻找，如果有，则返回，如果没有，则继续该操作，直到寻找到最后的原型（<code class="language-text">Object.prototype</code>）还没有找到的话，就返回 <code class="language-text">undefined</code>。</p>\n<h3>[[Put]]</h3>\n<p><code class="language-text">[[Get]]</code> 是用来获取值，<code class="language-text">[[Put]]</code> 则是用来修改值</p>\n<p>当你看到语句</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span></code></pre>\n      </div>\n<p>的时候，实际上会就行一个 <code class="language-text">[[Put]]</code> 操作。</p>\n<p><code class="language-text">[[Put]]</code> 的行为如下：</p>\n<p>如果对象存在你要进行操作的属性，则会进行如下操作：</p>\n<ol>\n<li>对象属性是否存在访问描述符？存在且存在 <code class="language-text">setter</code> 则调用 <code class="language-text">setter</code></li>\n<li>否则看属性数据描述符当中的 <code class="language-text">writable</code> 是否为 <code class="language-text">false</code>，是的话在非严格模式下静默失败，在严格模式下抛出 <code class="language-text">TypeError</code> 异常</li>\n<li>否则设置属性为指定的值</li>\n</ol>\n<p>如果属性不存在在对象当中，则会进行如下操作：</p>\n<ol>\n<li>如果在 <code class="language-text">[[Prototype]]</code> 链上层存在对应的属性并且其属性数据描述符 <code class="language-text">writable</code> 不为 <code class="language-text">false</code>，则会在原对象上添加一个指定属性名的属性。</li>\n<li>如果在 <code class="language-text">[[Prototype]]</code> 链上层存在对应属性并且属性数据描述符 <code class="language-text">writable</code> 为 <code class="language-text">false</code>，若运行在非严格模式下，则会静默失败，在严格模式下抛出异常。</li>\n<li>如果在 <code class="language-text">[[Prototype]]</code> 链上层存在对应属性的 <code class="language-text">setter</code>，则调用这个 <code class="language-text">setter</code>。</li>\n</ol>\n<h3>constructor 属性</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfoo<span class="token punctuation">.</span>constructor <span class="token comment">// Foo</span></code></pre>\n      </div>\n<p>可以看到，<code class="language-text">foo.constructor</code> 为 <code class="language-text">Foo</code>，但其实这并不能说明 <code class="language-text">Foo</code> 就是 <code class="language-text">foo</code> 的构造函数。</p>\n<p>比如我们这样改一改：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nFoo<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfoo<span class="token punctuation">.</span>constructor <span class="token comment">// Object</span></code></pre>\n      </div>\n<p>如此一来， <code class="language-text">foo.constructor</code> 就变成了 <code class="language-text">Object</code>，实际上应该还是 <code class="language-text">Foo</code>呀。</p>\n<p>其实，<code class="language-text">foo</code> 实例本身并没有一个 <code class="language-text">constructor</code> 属性，<code class="language-text">constructor</code> 属性在 <code class="language-text">foo.__proto__</code> 上面。由于 <code class="language-text">foo</code> 没有 <code class="language-text">constructor</code> 属性，因此在其 <code class="language-text">[[Prototype]]</code> 关联的对象上面找属性。</p>\n<p>因此，不要寄希望于使用 <code class="language-text">constructor</code> 来确定是谁创造了这个对象。</p>\n<h3>Function 与 Object</h3>\n<p>最后来梳理一下 <code class="language-text">Function</code> 和 <code class="language-text">Object</code>。</p>\n<p><code class="language-text">Function</code> 和 <code class="language-text">Object</code> 都是函数。</p>\n<p><code class="language-text">Function</code> 和 <code class="language-text">Object</code> 的 <code class="language-text">[[Prototype]]</code> 均指向 <code class="language-text">Function.prototype</code>。</p>\n<p><code class="language-text">Function.prototype</code> 是一个对象，<code class="language-text">Function.prototype</code> 的 <code class="language-text">[[Prototype]]</code> 指向 <code class="language-text">Object.prototype</code>。</p>\n<h3>参考资料</h3>\n<ol>\n<li>《你不知道的 JavaScript(上卷)》</li>\n</ol>',frontmatter:{title:"关于原型",date:"October 20, 2016",tags:["前端","JavaScript"]}}},pathContext:{slug:"/prototype/"}}}});
//# sourceMappingURL=path---posts-prototype-83a4b64e6fc2b8f1c736.js.map