webpackJsonp([99552473815131],{497:function(e,t){e.exports={data:{markdownRemark:{html:'<p><code class="language-text">UIAlertController</code> 可以用来创建对话框和上拉式菜单，这是一个在开发中可能经常需要用到的东西，来看一下具体的使用方法吧。</p>\n<!-- more -->\n<h1>正文</h1>\n<h2>创建一个对话框</h2>\n<p>不多说，直接上完整的代码，再详细的解释一下。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">@IBAction func showAlert(sender: UIButton) {\n    //创建UIAlertController实例\n    let alertController = UIAlertController(title: &quot;Demo&quot;, message: &quot;This is a demo&quot;, preferredStyle: .Alert)\n    //创建UIAlertAction实例\n    let okAction = UIAlertAction(title: &quot;OK&quot;, style: UIAlertActionStyle.Default, handler: nil)\n    let cancelAction = UIAlertAction(title: &quot;Cancel&quot;, style: UIAlertActionStyle.Cancel, handler: nil)\n    //将动作按钮添加到控制器\n    alertController.addAction(okAction)\n    alertController.addAction(cancelAction)\n\n    presentViewController(alertController, animated: true, completion: nil)\n\n}</code></pre>\n      </div>\n<p>这个函数已经与一个 <code class="language-text">UIButton</code> 连接了，当点击所连接的Button的时候，就会调用这个函数。\n让我们一行一行地来看</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">let alertController = UIAlertController(title: &quot;Demo&quot;, message: &quot;This is a demo&quot;, preferredStyle: .Alert)</code></pre>\n      </div>\n<p>创建一个 <code class="language-text">UIAlertController</code> 的实例，有了它，你就可以使用 <code class="language-text">presentViewController</code> 方法将对话框展现出来了，不过如果就这样是没有按钮的，所以我们还要创建 <code class="language-text">UIAlertAction</code> 实例并添加到这个Controller上。</p>\n<p>前两个参数，一个是主标题，一个副标题。</p>\n<p><code class="language-text">preferredStyle</code>有:</p>\n<ol>\n<li><code class="language-text">UIAlertControllerStyle.Alert</code></li>\n<li><code class="language-text">UIAlertControllerStyle.ActionSheet</code></li>\n</ol>\n<p>分别是对话框样式和上拉菜单样式。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">let okAction = UIAlertAction(title: &quot;OK&quot;, style: UIAlertActionStyle.Default, handler: nil)\nlet cancelAction = UIAlertAction(title: &quot;Cancel&quot;, style: UIAlertActionStyle.Cancel, handler: nil)\n//将动作按钮添加到控制器\nalertController.addAction(okAction)\nalertController.addAction(cancelAction)</code></pre>\n      </div>\n<p>这里的代码创建了 <code class="language-text">UIAlertAction</code> 实例并且添加到了 <code class="language-text">alertController</code> 上，这样才能出现按钮，<code class="language-text">title</code> 是按钮名称， <code class="language-text">style</code> 有 <code class="language-text">UIAlertActionStyle.Default</code>， <code class="language-text">UIAlertActionStyle.Cancel</code>， <code class="language-text">UIAlertActionStyle.Destructive</code>，从名字就可以看出作用了，快快实践以下这三个参数有什么不同吧。<code class="language-text">handler</code> 会在你点击了之后调用。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">presentViewController(alertController, animated: true, completion: nil)</code></pre>\n      </div>\n<p>最后，显示，大功告成，是不是很简单呢。</p>\n<h2>带有文本输入框的对话框</h2>\n<p>还是直接上代码</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">@IBAction func login(sender: UIButton) {\n\n    //创建一个UIAlertController对象，preferredStyle为.Alert\n    let alertController = UIAlertController(title: &quot;Login&quot;, message: &quot;Please enter the information&quot;, preferredStyle: UIAlertControllerStyle.Alert)\n\n    //添加Text Field,然后设置这个Text Field（在闭包中进行）\n    alertController.addTextFieldWithConfigurationHandler{ (textField) -&gt; Void in\n        textField.placeholder = &quot;Enter your username&quot;\n    }\n\n    alertController.addTextFieldWithConfigurationHandler{ (textField) -&gt; Void in\n        textField.placeholder = &quot;Enter your password&quot;\n        textField.secureTextEntry = true\n    }\n\n    let loginAction = UIAlertAction(title: &quot;Login&quot;, style: UIAlertActionStyle.Default){\n        (action) -&gt; Void in\n        if let username = alertController.textFields?[0].text {\n            print(username)\n        }\n        if let password = alertController.textFields?[1].text {\n            print(password)\n        }\n    }\n\n    let cancelAction = UIAlertAction(title: &quot;Cancel&quot;, style: UIAlertActionStyle.Cancel, handler: nil)\n\n    alertController.addAction(loginAction)\n    alertController.addAction(cancelAction)\n\n    //显示 Alert View\n    presentViewController(alertController, animated: true, completion: nil)\n}</code></pre>\n      </div>\n<p>有了前面的基础，是不是很快就能看懂了呢。</p>\n<p>这里再说一个新出现的方法</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">alertController.addTextFieldWithConfigurationHandler{ (textField) -&gt; Void in\n        textField.placeholder = &quot;Enter your username&quot;\n}</code></pre>\n      </div>\n<p>调用它可以在对话框添加一个文本输入框，闭包中可以写一些对这个对话框进行设置的代码，比如我上面就给设置了文本输入框的 <code class="language-text">placeholder</code>。</p>\n<h2>尝试丰富上面的例子</h2>\n<p>上面的带文本框的对话框可以当成是一个登陆的对话框，尝试修改代码使当没有用户名跟密码输入的时候无法点击登陆按钮。</p>\n<p><strong>提示：</strong>使用 <code class="language-text">NSNotification</code>，UIAlertAction 实例有一个 <code class="language-text">enable</code> 属性。</p>\n<p>好了，这次就写到这里，下次再写写关于上拉菜单的内容，你也可以现在就自己尝试创建上拉菜单。</p>\n<p>不知道我写的是太啰嗦还是太简单，有没有讲清楚呢？欢迎评论。</p>\n<h1>参考资料</h1>\n<ol>\n<li><a href="http://www.cocoachina.com/ios/20141126/10320.html">在iOS 8中使用UIAlertController</a></li>\n<li><a href="http://swift.gg/2016/01/04/editable-text-field-alert-controller-tutorial/">Alert Controller 中实现可编辑文本字输入框教程</a></li>\n</ol>',frontmatter:{title:"UIAlertController 学习笔记（一）",date:"January 19, 2016",tags:["学习笔记","技术","开发","Swift","iOS"]}}},pathContext:{slug:"/note-of-uialertcontroller-one/"}}}});
//# sourceMappingURL=path---posts-note-of-uialertcontroller-one-2dfc8d32d1986c74f5da.js.map