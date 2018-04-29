webpackJsonp([0x82c50e78aa64],{519:function(e,t){e.exports={data:{markdownRemark:{html:'<p>写这篇文章的原因是看到一个网站 <a href="http://samvlu.com">100 Days of Swift</a> ，这个网站里放着作者学习100天里所做的一些作品，如果有源码就更好了。这些作品，对我这个初学者来说可以说是很好的练手项目了。于是我准备去写这些作品中的一些效果，当然从简单开始啦，这个是那个网站的 PROJECT 8，以下是效果图（来自 100 Day of Swift）。</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/swipe-to-dismiss-keyboard.gif" alt="swipe to dismiss keyboard"></p>\n<!-- more -->\n<h1>正文</h1>\n<p>从图片中可以看出，导航栏是透明的，返回按钮右边没有文字。现在假设我们已经创建好了两个 View Controller，分别叫做 FirstViewController 和 SecondViewController 吧。FirstViewController 里面有一个按钮，点击之后转到如上图所示的界面中，界面的话用 storyboard 拖出来，然后进行一些连接就行了，有一定基础都知道吧。</p>\n<h2>设置导航栏透明</h2>\n<p>如何能使导航栏透明呢？可以在 FirstViewController 的 <code class="language-text">viewDidLoad</code> 中设置，代码本身没有什么特别的，主要是要找到设置透明的办法：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">navigationController?.navigationBar.setBackgroundImage(UIImage(),forBarMetrics: UIBarMetrics.Default)\nnavigationController?.navigationBar.shadowImage = UIImage()\nnavigationController?.navigationBar.translucent = true</code></pre>\n      </div>\n<h2>去除返回按钮旁边的文字</h2>\n<p>可以还是在 FirstViewController 的 <code class="language-text">viewDidLoad</code> 中设置（只要在下一个视图控制器 push 进来之前设置就行了），之前看了以下文档，没有理解透彻，然后在 SecondViewController 中进行设置，没有效果，卡了好久（试了其他各种方法），原来这个 <code class="language-text">backBarButtonItem</code> 跟 <code class="language-text">leftBarButtonItem</code> 和 <code class="language-text">rightBarButtonItem</code> 不一样，这个属性会决定下一个 push 进来的视图控制器的返回按钮样式，向下面这样设置完之后导航栏部分就完成了：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">navigationItem.backBarButtonItem = UIBarButtonItem(title: &quot;&quot;, style: UIBarButtonItemStyle.Plain, target: nil, action: nil)</code></pre>\n      </div>\n<h2>自动显示键盘</h2>\n<p>在 SecondViewController 中有一个 textField ，因此可以像如下代码在 <code class="language-text">viewDidAppear</code> 中设置，与之相反的就是 <code class="language-text">resignFirstResponder()</code> 了，这个函数的调用自然就是在手势发生后啦：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">textField.becomeFirstResponder()</code></pre>\n      </div>\n<h2>下滑手势隐藏键盘</h2>\n<p>可以在 SecondViewController 的 <code class="language-text">viewDidLoad</code> 中添加手势，下面的代码创建了一个 UISwipeGestureRecognizer 实例，设置了识别的方向的向下轻扫，手势做出后调用 SecondViewController 中的 <code class="language-text">swipeHandler</code> 函数:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">let swipeGesture = UISwipeGestureRecognizer(target: self, action: &quot;swipeHandler:&quot;)\nswipeGesture.direction = UISwipeGestureRecognizerDirection.Down\nview.addGesture(swipeGesture)</code></pre>\n      </div>\n<h2>手势处理函数</h2>\n<p>最后在 SecondViewController 中添加以下函数即可：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">func handler(gesture: UISwipeGestureRecognizer) {\n    textView.resignFirstResponder()\n}</code></pre>\n      </div>\n<h2>滑动键盘消失的另一个方法</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">textView.alwaysBounceVertical = true\ntextView.keyboardDismissMode = UIScrollViewKeyboardDismissMode.OnDrag</code></pre>\n      </div>\n<h2>总结</h2>\n<p>这样看来，这个示例并没有什么困难的，但对我来说，如何自定义导航一开始是不知道的，其中有些概念也没弄清楚，如果你也有困惑的话，推荐你看以下这篇博文，我看了之后感觉挺不错的，<a href="http://www.jianshu.com/p/f797793d683f">【iOS】导航栏那些事儿</a>，那这篇文章就这样啦。</p>\n<h1>更新记录</h1>\n<p>2016年4月20日：增加 滑动键盘消失的另一个方法</p>\n<h1>参考资料</h1>\n<ol>\n<li><a href="http://samvlu.com">100 Days of Swift</a></li>\n<li><a href="http://www.jianshu.com/p/f797793d683f">【iOS】导航栏那些事儿</a></li>\n<li><a href="http://www.cocoachina.com/bbs/read.php?tid-280506-page-2.html">如何让navigationBar透明的同时上面的navigationItem不透明</a></li>\n<li><a href="https://lvwenhan.com/ios/428.html">如何修改 UINavigationController、UINavigationBar 中 navigationItem 左侧 “返回” 按钮的名称</a></li>\n</ol>',frontmatter:{title:"轻扫隐藏键盘以及导航栏定制",date:"January 29, 2016",tags:["技术","实践","开发","Swift","iOS"]}}},pathContext:{slug:"/swift-day-one/"}}}});
//# sourceMappingURL=path---posts-swift-day-one-f85a954d945d3d7f1989.js.map