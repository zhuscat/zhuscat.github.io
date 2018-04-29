webpackJsonp([0xb1aef0b5644c],{469:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>使用 iframe 进行文件的异步上传</h2>\n<p>使用 <code class="language-text">iframe</code> 进行文件的异步上传的基本思想是在表单上传的时候，创建一个 <code class="language-text">iframe</code> 元素，并将表单的 <code class="language-text">target</code> 属性设置为创建的 <code class="language-text">iframe</code> 窗口，这样，上传结束返回的数据会到 <code class="language-text">iframe</code> 窗口里面，页面也不会发生转跳。</p>\n<p>废话不多说，来看看代码：</p>\n<p>首先是基本的表单</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myform<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/someurl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myfile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>接着再看看 <code class="language-text">JavaScript</code> 代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 用于生成 iframe 窗口 name 属性</span>\n<span class="token keyword">var</span> seed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> myform <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'myform\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmyform<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'iframe\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token string">\'uploader-frame-\'</span> <span class="token operator">+</span> seed<span class="token punctuation">;</span>\n  seed<span class="token operator">++</span><span class="token punctuation">;</span>\n  iframe<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'name\'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 隐藏 iframe</span>\n  iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token string">\'display: none\'</span><span class="token punctuation">;</span>\n  <span class="token comment">// 设置 form 的 target 为 iframe</span>\n  myform<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'target\'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 将 iframe 插入</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>就是这么简单，不过服务器成功接收数据后返回需要返回一段数据，这里一般是要触发一个回调，我们可以与服务器预先约定好回调函数的名字，或者在上传表单的 <code class="language-text">URL</code> 中加参数之类的，反正让服务器端知道回调函数的名字就好了，一般可以这样返回：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">\'&lt;script>window.top.callback("somedata")&lt;/script>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nres<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这样就会调用 <code class="language-text">callback</code> 函数了，<code class="language-text">iframe</code> 异步上传表单的优点是兼容性较高。下面再看看另一种异步上传表单的方式。</p>\n<h2>AJAX 上传</h2>\n<p><code class="language-text">XMLHttpRequest</code> 对象第二版支持异步上传文件，方法是使用 <code class="language-text">FormData</code>，然后向服务器端发送数据。</p>\n<p>让我们看看代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nformData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'myfile\'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'myfile\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">\'POST\'</span><span class="token punctuation">,</span> <span class="token string">\'/someurl\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 上传成功</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 出现错误</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>就是这么简单，并且十分强大。</p>\n<p>另外，借助 <code class="language-text">File API</code> + <code class="language-text">AJAX</code> 的方式，还能实现更多高级的功能，比如断点续传，思路就是使用 <code class="language-text">File.prototype.slice</code> 将文件分割成多个片段，然后使用 <code class="language-text">AJAX</code> 传送片段，如果一个片段传送成功了就传送下一个片段。</p>',frontmatter:{title:"异步文件上传",date:"March 12, 2017",tags:["JavaScript","前端"]},fields:{slug:"/async-file-upload/"}}},pathContext:{slug:"/async-file-upload/"}}}});
//# sourceMappingURL=path---posts-async-file-upload-ad066888ae2d2758e01c.js.map