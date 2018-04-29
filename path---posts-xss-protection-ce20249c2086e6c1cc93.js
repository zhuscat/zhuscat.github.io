webpackJsonp([5115072995344],{533:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>分类</h2>\n<p>XSS 攻击分为 <strong>反射型</strong> 、<strong>存储型</strong> 和 <strong>DOM Based XSS</strong></p>\n<h3>反射型 XSS</h3>\n<p>反射型 XSS 是把用户的输入反射回浏览器所造成的 XSS 攻击，比如说本来网页上有一个表单让用户填用户名，用户提交表单之后返回的响应将用户填写的用户名显示出来。这种类型的攻击，一般攻击者的攻击手段为构造一个 URL 让用户去点击，当用户点击了这个 URL 之后，攻击才能成功。</p>\n<p>我们试着去构造这样一个攻击的例子，使用 node.js 搭建一个简单的服务器：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'url\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> parsedURL <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">\'X-XSS-Protection\'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>parsedURL<span class="token punctuation">.</span>query<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`&lt;html>&lt;head>&lt;title>XSS&lt;/title>&lt;/head>&lt;body></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>parsedURL<span class="token punctuation">.</span>query<span class="token punctuation">.</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/body>&lt;/html>`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">\'No Param a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3002</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>当输入的 URL 中有参数 <code class="language-text">a</code> 的时候，会将这个参数的值嵌入到 body 作为响应返回到客户端。</p>\n<p>注意到，我在返回的头部设置了 <code class="language-text">X-XSS-Protection: 0</code>，不然 Chrome 会默认拦截可能的 XSS 攻击。</p>\n<p>接着我们构造这样一个URL：<code class="language-text">http://localhost:3002/xss?a=&lt;script&gt;alert(/xss/)&lt;script&gt;</code></p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/xss-protection/reflect.png" alt="反射型XSS"></p>\n<h3>存储型 XSS</h3>\n<p>存储型 XSS，不同于反射型的 XSS 攻击，会将数据存储到数据库，一个比较常见的例子是攻击者发布了一篇包含恶意 JavaScript 代码的文章，所有访问该文章的用户都会受到攻击。</p>\n<h3>DOM Based XSS</h3>\n<p>DOM Based 通过 JS 操作 DOM 元素造成 XSS（如往事件属性里面写信息），严格来说，DOM Based XSS 也是反射型 XSS 的一种，不过这种攻击不是服务器返回的数据包含了恶意脚本，而是直接在客户端就生成了恶意脚本。还是看一个例子（ <a href="https://www.owasp.org/index.php/DOM_Based_XSS">DOM Based XSS - OWASP</a> ）：</p>\n<p>假设服务器返回如下所示的 HTML 页面，注意到，OPTION 选项是从用户的链接中提取的</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html">Select your language:\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\ndocument<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"&lt;OPTION value=1>"</span><span class="token operator">+</span>document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"default="</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"&lt;/OPTION>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"&lt;OPTION value=2>English&lt;/OPTION>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>正常的链接应该是这个样子的</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http://www.some.site/page.html?default=French</code></pre>\n      </div>\n<p>然而，攻击者可以构造一个这样的 URL</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">http://www.some.site/page.html?default=&lt;script&gt;alert(document.cookie)&lt;/script&gt;</code></pre>\n      </div>\n<p>当用户点击了这样一个 URL 之后，攻击就成功了，浏览器会执行下面这段代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>如何防范</h2>\n<h3>给 Cookie 设置 HttpOnly</h3>\n<p>很多 XSS 攻击想要获取用户的 cookie，一般会获取 cookie 然后传送到攻击者的服务器上，然后可以以该用户的身份做一些操作（当然并不是所有都需要），给 Cookie 设置 HttpOnly 之后，JavaScript 就不能读取 Cookie 了。</p>\n<h3>输入检查</h3>\n<p>输入检查做的是过滤用户可能会造成 XSS 攻击的输入，比如说用户的用户名填写只能是数字加字母，如果要做输入检查，服务器端必须要有输入检查的逻辑，另外，客户端也可以做输入检查的逻辑，可以将正常用户的不小心的输入直接排除，不仅增强了用户体验，还减轻了服务器的压力。\n但是，输入检查不是万能的，比如说一个可以让用户自定义 script 标签的 URL 的地方，此时，攻击者大可以输入一个指向恶意脚本的地址，服务器很难判别这是否是恶意的脚本。</p>\n<h3>输出检查</h3>\n<p>输出检查是在输出的时候进行过滤或者转义。\n根据输出位置的不同，我们需要有不同的策略来进行文本的转义，切不可只使用一种转义的方法就觉得万事大吉了。\n很多后端框架支持默认的转义，一般会对变量进行 HTML 转义，不过，即使是这样，仍然有可能存在着 XSS 漏洞。\n比如说用户可以在如下 HTML 中输入变量：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert(<span class="token punctuation">\'</span>$var<span class="token punctuation">\'</span>);<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>CLICK ME<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>如果攻击者输入如下字符串</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">1&#39;);alert(&#39;2</code></pre>\n      </div>\n<p>经过转义之后变为如下的字符</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">1&amp;#x27;&amp;#x29;;&amp;#x3B;alert&amp;#x28;&amp;#x27;2</code></pre>\n      </div>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/xss-protection/xss-in-event-handler.png" alt="插入事件属性的变量"></p>\n<p>即使这样，仍然会发现浏览器的行为为 <code class="language-text">alert(1)</code> 和 <code class="language-text">alert(2)</code>，究其原因，onclick 中的数据会先经过浏览器的解析，此时又成为了</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>自然攻击能够成功。</p>\n<p>因此，我们需要对在不同情况下的输出做不同的转移：</p>\n<p>1.在 HTML 标签之间输出，对这些数据进行 HTML Entity 编码</p>\n<p><strong>编码规则</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp; -&gt; &amp;amp;\n&lt; -&gt; &amp;lt;\n&gt; -&gt; &amp;gt;\n&quot; -&gt; &amp;quot;\n&#39; -&gt; &amp;#x27;\n/ -&gt; &amp;#x2f;</code></pre>\n      </div>\n<p>2.要将不可信数据插入到HTML属性里时，对这些数据进行HTML属性编码</p>\n<p><strong>编码规则</strong></p>\n<p>除了阿拉伯数字和字母，对其他所有字符进行编码。编码后输出为 <code class="language-text">&amp;#xHH;</code> HH 为对应的十六进制数字，分号作为结束符。\n防止在属性值进行构造关闭当前标签。然后自己的标签就可以作为 HTML 实体插入了。</p>\n<p>3.在将不可信数据插入到 script 里时，对这些数据进行 script 编码</p>\n<p><strong>编码规则</strong></p>\n<p>除了阿拉伯数字和字母，对其他所有字符进行编码。编码后输出的格式为 <code class="language-text">\\xHH</code>。</p>\n<p>不要用反斜杠对特殊字符进行转义。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">"{{data}}"</span><span class="token punctuation">;</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>攻击者输入</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">\\&quot;; alert(&#39;xss&#39;);//</code></pre>\n      </div>\n<p>结果渲染上去之后是</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">"\\\\"</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'xss\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>4.在将不可信数据插入到 style 属性里时，对这些数据进行 CSS 编码</p>\n<p>除了阿拉伯数字和字母，对其他所有字符进行转义，转移之后变为形如 <code class="language-text">\\HH</code> 的字符。</p>\n<p>5.在将不可信数据插入到 HTML URL 里时，对这些数据进行 URL 编码\n除了阿拉伯数字和字母，对其他所有字符进行转义，转义之后变为形如  <code class="language-text">%HH</code>  的字符。</p>\n<p>对URL进行编码的时候的注意点：</p>\n<ol>\n<li>URL属性用引号包含起来</li>\n<li>不要对整个URL进行编码，因为不可信数据会插入到 href src 或其他以URL为基础的属性里面，并且要对协议字段进行认证，否则攻击者可以改变协议，如  <code class="language-text">data</code>  协议或者  <code class="language-text">javascript</code>  伪协议</li>\n</ol>\n<p>6.使用富文本时，使用 XSS 规则引擎进行编码过滤，使用白名单策略</p>\n<p>针对富文本的特殊性，我们可以使用XSS规则引擎对用户输入进行编码过滤，只允许用户输入安全的HTML标签，如 <code class="language-text">&lt;b&gt;</code>，<code class="language-text">&lt;i&gt;</code>， <code class="language-text">&lt;p&gt;</code>等，对其他数据进行 HTML 编码。需要注意的是，经过规则引擎编码过滤后的内容只能放在 <code class="language-text">&lt;div&gt;</code>， <code class="language-text">&lt;p&gt;</code>  等安全的HTML标签里，不要放到 HTML 标签的属性值里，更不要放到HTML 事件处理属性里，或者放到  <code class="language-text">&lt;script&gt;</code> 标签里。</p>\n<p>如下就是是一个 XSS 过滤工具\n<a href="https://github.com/leizongmin/js-xss">GitHub - leizongmin/js-xss: Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist</a></p>\n<h4>DOM Based XSS</h4>\n<p>DOM Based XSS 的攻击方法是在 JavaScript 将内容写到 HTML 页面中，一般在返回的页面中可能已经对 JavaScript 中的变量进行转义了，但在 script 标签执行的时候，内容又会被解码，然后输出到 HTML 中。因此防御 DOM Based XSS 的时候，一个重要的关注点是在 JavaScript 输出的时候对其进行再次的转义，转义的方案与上面所述相同。</p>\n<h4>使用 XSS 安全相关的头部</h4>\n<p>1.X-XSS-Protection</p>\n<p>浏览器默认开启了 XSS 保护，可以使用这个头部关闭这种特性，一般不需要关闭：</p>\n<ul>\n<li>\n<p>0：禁用XSS保护</p>\n</li>\n<li>\n<p>1：启用XSS保护</p>\n</li>\n<li>\n<p>1：mode=block：启用XSS保护，并在检查到XSS攻击时，停止渲染页面</p>\n<p>2.Content-Security-Policy</p>\n</li>\n</ul>\n<p>使用 Content-Security-Policy 可以限制页面可以加载哪些内容</p>\n<p>欢迎大家探讨交流，有错误请指正。</p>\n<h2>参考资料</h2>\n<ol>\n<li>《白帽子将 Web 安全》</li>\n<li><a href="https://imququ.com/post/web-security-and-response-header.html">一些安全相关的HTTP响应头 | JerryQu 的小站</a></li>\n<li><a href="https://imququ.com/post/content-security-policy-reference.html">Content Security Policy 介绍 | JerryQu 的小站</a></li>\n<li><a href="https://github.com/leizongmin/js-xss">GitHub - leizongmin/js-xss: Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist</a></li>\n<li><a href="https://www.owasp.org/index.php/DOM_Based_XSS">DOM Based XSS</a></li>\n</ol>',frontmatter:{title:"XSS Protection Summary",date:"May 01, 2017",tags:["前端安全","XSS","前端","XSS 防范"]},fields:{slug:"/xss-protection/"}}},pathContext:{slug:"/xss-protection/"}}}});
//# sourceMappingURL=path---posts-xss-protection-ce20249c2086e6c1cc93.js.map