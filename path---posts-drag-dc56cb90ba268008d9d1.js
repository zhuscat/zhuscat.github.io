webpackJsonp([84746756069093],{485:function(a,e){a.exports={data:{markdownRemark:{html:'<h2>简述</h2>\n<p>当拖动某一个元素的时候，将会先后触发 <code class="language-text">dragstart</code>，<code class="language-text">drag</code>，<code class="language-text">dragend</code> 事件。</p>\n<p>当某个元素被拖到有效放置目标上时，先后触发 <code class="language-text">dragenter</code>，<code class="language-text">dragover</code>，<code class="language-text">drop</code>或<code class="language-text">dragleave</code>。</p>\n<p>某些元素不允许被放置，这个时候取消这些元素 <code class="language-text">dragenter</code> 和 <code class="language-text">dragover</code> 的默认行为就可以将该元素转为可被放置的目标。</p>\n<p>另外，一些元素有默认的放置行为，这个时候，将 <code class="language-text">drop</code> 的默认行为去除就行了。</p>\n<p>要把一个元素设置为可拖动的，可以按照如下设置：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2>dataTransfer</h2>\n<p>拖放可以实现数据交换，这是通过 <code class="language-text">dataTransfer</code> 对象完成的，它是拖动过程中事件对象的一个属性，<code class="language-text">dataTransfer</code> 主要的两个方法是 <code class="language-text">getData</code> 和 <code class="language-text">setData</code></p>\n<h3>setData</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">format</code> 的值是一种 MIME 类型，考虑到向后兼容，也可以是 <code class="language-text">text</code> 和 <code class="language-text">url</code>，这两个类型被映射为 <code class="language-text">text/plain</code> 和 <code class="language-text">text/url-list</code>，在IE10及以前不支持 MIME 类型名称。另外，Firefox 5 之前的版本不能正确的将 <code class="language-text">text</code> 和 <code class="language-text">url</code> 映射成 <code class="language-text">text/plain</code> 和 <code class="language-text">text/url-list</code> ，但是却能将 <code class="language-text">Text</code> 映射成 <code class="language-text">text/plain</code>，因此，获取 URL 的时候最好两个都检测一下，获取 <code class="language-text">text</code> 则将第一个改为大写，这样可以获得更高的兼容性。</p>\n<h3>getData</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">dataTransfer<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>指定MIME类型（以及 <code class="language-text">text</code> 和 <code class="language-text">url</code> ，规则同上）获取数据。</p>\n<h3>dropEffect 和 effectAllowed</h3>\n<p>这两个属性决定这被拖动元素移动到某放置目标上的时候鼠标的外观，这与行为无关。</p>\n<p><code class="language-text">dropEffect</code> 的有以下值：</p>\n<ol>\n<li>none</li>\n<li>move</li>\n<li>copy</li>\n<li>link</li>\n</ol>\n<p><code class="language-text">effectAllowed</code> 有以下值：</p>\n<ol>\n<li>uninitialized</li>\n<li>none</li>\n<li>copy</li>\n<li>link</li>\n<li>move</li>\n<li>copyLink</li>\n<li>copyMove</li>\n<li>linkMove</li>\n<li>all</li>\n</ol>\n<p>值得注意的是，要在 <code class="language-text">ondragstart</code> 中设置 <code class="language-text">effectAllowed</code> 属性，在 <code class="language-text">ondragengter</code> 中设置 <code class="language-text">dropEffect</code> 属性。</p>\n<p><del>当 <code class="language-text">effectAllowed</code> 和 <code class="language-text">dropEffect</code> “匹配”的时候就能显示指定的鼠标样式（如：<code class="language-text">dropEffect</code> 为 <code class="language-text">copy</code>，<code class="language-text">effectAllowed</code> 为 <code class="language-text">copyLink</code>，则显示为一个带有加号的鼠标样式，注意，该鼠标样式是在 macOS 的 Chrome 下进行观察的）。</del></p>\n<p>我进行测试的时候发现，是否设置被放置元素 <code class="language-text">dragenter</code> 事件中 <code class="language-text">dropEffect</code> 的属性与鼠标显示无关，鼠标的显示与 <code class="language-text">effectAllowed</code> 有关。</p>\n<h2>其他</h2>\n<p><code class="language-text">dataTransfer</code> 还有其他方法属性：</p>\n<ol>\n<li>addElement(element) 在 <code class="language-text">dataTransfer</code> 上添加一个元素类型的数据</li>\n<li>clearData(format) 清除某类型的数据</li>\n<li>setDragImage(element, x, y) 设置拖动的时候光标旁边显示的图像</li>\n<li>types 当前保存的数据类型，一个类数组对象</li>\n</ol>',frontmatter:{title:"drag",date:"February 27, 2017",tags:["JavaScript","HTML5","HTML"]},fields:{slug:"/drag/"}}},pathContext:{slug:"/drag/"}}}});
//# sourceMappingURL=path---posts-drag-dc56cb90ba268008d9d1.js.map