webpackJsonp([0x752531a71a35],{471:function(a,s){a.exports={data:{markdownRemark:{html:'<p>加法操作符的规则：</p>\n<ol>\n<li>如果操作符中有一个是对象，将其转换为原始值</li>\n<li>如果操作数中有一个是字符串，将另一个也转换为字符串，然后连接</li>\n<li>其他情况下，将两个操作数转换为数字并执行加法运算</li>\n</ol>\n<p>首先看一下第一条规则，如果操作符中有一个是对象，将其转换为原始值，那么，是如何转换的呢？</p>\n<ol>\n<li>如果对象是 <code class="language-text">Date</code> 类型的话，使用 <code class="language-text">toString()</code> 转换为字符串</li>\n<li>其他对象的话会先调用 <code class="language-text">valueOf()</code>，如果返回的是一个原始值得话，则使用这个原始值，否则进入第三部</li>\n<li>调用 <code class="language-text">toString()</code> 方法</li>\n</ol>\n<p>好了，我们再看几个例子</p>\n<h3>例子1</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// \'1,2,34\'</span></code></pre>\n      </div>\n<p><code class="language-text">[1, 2, 3]</code> 是一个对象，因此先调用 <code class="language-text">valueOf()</code>，但 函数返回的是数组本身，不是一个原始值，因此再调用 <code class="language-text">toString()</code>，返回字符串<code class="language-text">&#39;1,2,3&#39;</code>。</p>\n<p>此时表达式变为 <code class="language-text">&#39;1,2,3&#39; + 4</code>，此时使用第二条规则，将数字<code class="language-text">4</code>转化为字符串<code class="language-text">&#39;4&#39;</code>。</p>\n<p>此时表达式变为<code class="language-text">&#39;1,2,3&#39; + &#39;4&#39;</code>，结果为<code class="language-text">1,2,34</code>。</p>\n<h3>例子2</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \'1\'</span></code></pre>\n      </div>\n<p><code class="language-text">[]</code>转换为字符串<code class="language-text">&#39;&#39;</code>，<code class="language-text">1</code>转换为<code class="language-text">&#39;1&#39;</code>，因此结果为<code class="language-text">&#39;1&#39;</code></p>\n<h3>例子3</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 2</span></code></pre>\n      </div>\n<p>执行第三条规则，<code class="language-text">true</code>转换为<code class="language-text">1</code></p>',frontmatter:{title:"加号操作符",date:"February 19, 2017",tags:["前端","JavaScript"]},fields:{slug:"/add-operator/"}}},pathContext:{slug:"/add-operator/"}}}});
//# sourceMappingURL=path---posts-add-operator-6bdb2faabed3d0f471f3.js.map