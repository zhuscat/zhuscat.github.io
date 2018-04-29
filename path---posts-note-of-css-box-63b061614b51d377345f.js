webpackJsonp([0xc7f83f449900],{501:function(n,o){n.exports={data:{markdownRemark:{html:'<p>个人认为，对于 CSS 盒模型、定位和浮动的理解，是学习 CSS 的一个核心，理解了它们，相信布局的问题的解决了许多，这篇笔记能帮助你快速的回忆起这些内容，图片来自 <a href="http://www.w3school.com.cn/index.html">W3School</a> 。</p>\n<!-- more -->\n<h1>正文</h1>\n<h2>盒模型</h2>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/note-of-css-box/boxmodel.gif" alt="盒模型"></p>\n<p>内边距、边框、外边距也可以应用单独的边。外边距可以是负值。</p>\n<p><strong>注：</strong>IE的早期版本，包括IE6，在混杂模式中使用自己的非标准模型，认为width属性是内容、内边距和边框宽度的总和。</p>\n<h3>外边距叠加</h3>\n<p>空元素自己也会发生叠加，关于叠加可以想成当两个外边距“碰在一起”的时候就会进行叠加，选择更大的那个边距。</p>\n<p>只有普通文档流中块边框的垂直外边距才会发生外边距叠加。行内框、浮动框或绝对定位框之间的外边距不会发生叠加。</p>\n<h2>定位</h2>\n<h3>可视化格式模型</h3>\n<ul>\n<li>块级元素，如 p、h1、div，称为块框</li>\n<li>行内元素，如 strong、span，称为行内框</li>\n</ul>\n<p>通过 <code class="language-text">display</code> 可以改变框类型</p>\n<p>定位机制</p>\n<ul>\n<li>普通流</li>\n<li>浮动</li>\n<li>绝对定位</li>\n</ul>\n<p>默认为普通流</p>\n<p>修改行内框尺寸的唯一办法是修改行高、水平边框、内边距或外边距</p>\n<p>将 <code class="language-text">display</code> 改为 <code class="language-text">inline-block</code> 可以让元素想行内元素一样水平排列，但是框的内容表现得跟块级元素一样（可以改变宽度、高度、垂直外边距和内边距等等）。</p>\n<p><strong>注：</strong>屏幕上看到的所有东西都形成某种框</p>\n<h3>相对定位</h3>\n<p>如下元素向原位置向右，向下各移动20px，并且元素还是占据原来的空间，只是看到的位置变了</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">#myBox {\n  position: relative;\n  left: 20px;\n  top: 20px;\n}</code></pre>\n      </div>\n<h3>绝对定位</h3>\n<p>脱离文档流，不占据空间，绝对定位的元素位置是相对于其距离最近的已经定位的祖先元素确定</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">position: absolute;</code></pre>\n      </div>\n<p>通过 <code class="language-text">z-index</code> 控制绝对定位框的叠放次序</p>\n<h3>浮动</h3>\n<p>脱离文档流，不占据原来的空间</p>\n<p>理解浮动，类似于漂浮的元素向某个方向移动，遇到障碍物（其他浮动元素）并且有足够空间就停止移动，没有足够空间就向下移动，继续向左走。</p>\n<h4>清除浮动</h4>\n<p>框的文本内容会受到浮动元素的影响</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/note-of-css-box/css_positioning_floating_linebox.gif" alt="文本内容收到影响"></p>\n<p>对第二个段落执行清楚浮动之后（本质上添加了边距使其不与浮动元素接触）</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/note-of-css-box/css_positioning_floating_clear.gif" alt="对第二个段落清楚浮动"></p>\n<p>清除浮动的例子</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/note-of-css-box/css_positioning_floating_clear_div.gif" alt="清除浮动"></p>\n<p>如上图所示有好几种清除浮动的方法让容器能包含里面的内容</p>\n<ul>\n<li>在 html 文档中给元素增加一个专门用来清除浮动的标签，对该标签进行清除浮动</li>\n<li>将容器也进行浮动，这样容器就能包含里面的元素的了</li>\n<li>对容器样式设置 <code class="language-text">overflow</code>，当其为 <code class="language-text">hidden</code> 或者 <code class="language-text">auto</code> 的时候，会进行清除浮动</li>\n<li>使用 <code class="language-text">:after</code> 伪类在内容末尾添加新内容，如设置 <code class="language-text">.clear:after {content: &quot;.&quot;; height: 0; visibility: hidden; display: block; clear: both;}</code></li>\n<li>使用 JavaScript 进行清除</li>\n</ul>\n<h1>参考资料</h1>\n<ol>\n<li><a href="http://book.douban.com/subject/4736167/">《精通CSS·高级Web标准解决方案（第二版）》</a></li>\n<li><a href="http://www.w3school.com.cn/css/index.asp">W3School CSS 教程</a></li>\n</ol>',frontmatter:{title:"可视化格式模型学习笔记",date:"January 28, 2016",tags:["前端","学习笔记","开发","CSS"]},fields:{slug:"/note-of-css-box/"}}},pathContext:{slug:"/note-of-css-box/"}}}});
//# sourceMappingURL=path---posts-note-of-css-box-63b061614b51d377345f.js.map