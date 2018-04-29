webpackJsonp([0xaf4958fea72f],{498:function(e,t){e.exports={data:{markdownRemark:{html:'<p>上次写了关于 UIAlertController 中对话框模式的内容，今天就写一下上拉菜单模式的内容，顺便再写一点关于 UIPopoverPresentationController 的内容。</p>\n<!-- more -->\n<h1>正文</h1>\n<h2>上次留下的问题</h2>\n<p><a href="http://zhuscat.com/2016/01/19/note-of-uialertcontroller-one/">上次</a>在最后写了一个尝试丰富上面的例子的板块，这次就先直接给出代码，再写其他内容。关于代码的内容就不再多做解释。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">@IBAction func login(sender: UIButton) {\n\n    let alertController = UIAlertController(title: &quot;Login&quot;, message: &quot;Please enter the information&quot;, preferredStyle: UIAlertControllerStyle.Alert)\n\n    alertController.addTextFieldWithConfigurationHandler{ (textField) -&gt; Void in\n        textField.placeholder = &quot;Enter your username&quot;\n        NSNotificationCenter.defaultCenter().addObserver(self, selector: (&quot;alertTextFieldDidChange:&quot;), name: UITextFieldTextDidChangeNotification, object: textField)\n    }\n\n    alertController.addTextFieldWithConfigurationHandler{ (textField) -&gt; Void in\n        textField.placeholder = &quot;Enter your password&quot;\n        textField.secureTextEntry = true\n    }\n\n    let loginAction = UIAlertAction(title: &quot;Login&quot;, style: UIAlertActionStyle.Default){\n        (action) -&gt; Void in\n        if let username = alertController.textFields?[0].text {\n            print(username)\n        }\n        if let password = alertController.textFields?[1].text {\n            print(password)\n        }\n        NSNotificationCenter.defaultCenter().removeObserver(self, name: UITextFieldTextDidChangeNotification, object: nil)\n    }\n\n    let cancelAction = UIAlertAction(title: &quot;Cancel&quot;, style: UIAlertActionStyle.Cancel, handler: nil)\n\n    loginAction.enabled = false\n\n    alertController.addAction(loginAction)\n    alertController.addAction(cancelAction)\n\n    presentViewController(alertController, animated: true, completion: nil)\n}\n\nfunc alertTextFieldDidChange(notification: NSNotification) {\n    if let alertController = self.presentedViewController as? UIAlertController {\n        let login = alertController.textFields![0]\n        let okAction = alertController.actions[0] as UIAlertAction\n\n        okAction.enabled = login.text!.characters.count &gt; 2\n    }\n}</code></pre>\n      </div>\n<h2>创建上拉菜单</h2>\n<p>直接上代码，如果看过我上一次的笔记，可以发现创建一个上拉菜单与创建对话框十分相似，这里也并没有什么理解困难的地方，唯一不同的是多了一个对 <code class="language-text">popover</code> 的设置。那么这个设置有什么用的，这里的设置就是为了 iPad 设置的，如果没有设置这些内容，程序在 iPad 上会崩溃。</p>\n<p>看完代码之后，就来说说 <code class="language-text">popoverPresentationController</code> 的内容。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">@IBAction func showActionSheet(sender: UIButton) {\n    let alertController = UIAlertController(title: &quot;actionSheet&quot;, message: &quot;This is an action sheet&quot;, preferredStyle: .ActionSheet)\n    let action1 = UIAlertAction(title: &quot;Reset&quot;, style: .Destructive, handler: nil)\n    let action2 = UIAlertAction(title: &quot;Action1&quot;, style: .Default, handler: nil)\n    let action3 = UIAlertAction(title: &quot;Action2&quot;, style: .Default, handler: nil)\n    let action4 = UIAlertAction(title: &quot;Cancel&quot;, style: .Cancel, handler: nil)\n\n    alertController.addAction(action1)\n    alertController.addAction(action2)\n    alertController.addAction(action3)\n    alertController.addAction(action4)\n\n\n    if let popover = alertController.popoverPresentationController {\n        popover.sourceView = sender\n        popover.sourceRect = sender.bounds\n        popover.permittedArrowDirections = UIPopoverArrowDirection.Any\n    }\n\n    presentViewController(alertController, animated: true, completion: nil)\n}</code></pre>\n      </div>\n<p>关于 <code class="language-text">popoverPresentationController</code> 这个属性，苹果官方文档是这么说的。</p>\n<blockquote>\n<p>The nearest popover presentation controller that is managing the current view controller. (read-only)</p>\n</blockquote>\n<blockquote>\n<p>If the view controller or one of its ancestors is managed by a popover presentation controller, this property contains that object. This property is nil if the view controller is not managed by a popover presentation controller.</p>\n</blockquote>\n<blockquote>\n<p>If you created the view controller but have not yet presented it, accessing this property creates a popover presentation controller when the value in the modalPresentationStyle property is UIModalPresentationPopover. If the modal presentation style is a different value, this property is nil.</p>\n</blockquote>\n<p>在我们这个例子里面，它就是管理 <code class="language-text">alertController</code> 的 <code class="language-text">popover presentation controller</code>，它是一个 <code class="language-text">UIPopoverPresentationController</code> 实例，管理在 popover 中的内容。在展示 <code class="language-text">alertController</code> 之前，并且 <code class="language-text">alertController</code> 的 <code class="language-text">modalPresentationStyle</code> 是<code class="language-text">UIModalPresentationPopover</code> 的时候，访问这个属性会创建一个 <code class="language-text">popover presentation controllr</code>， 显然，我们这里的代码符合这种要求。</p>\n<p><code class="language-text">sourceView</code> 和 <code class="language-text">sourceRect</code> 对锚点（那个弹出框的箭头）起到了定位的作用，这里定位在点击的按钮的旁边。</p>\n<p><strong>注：</strong>还可以通过设置 <code class="language-text">barButtonItem</code> 定位。</p>\n<p><code class="language-text">permittedArrowDirections</code> 是箭头允许的方向，但箭头不一定就是你指定的方向，系统会尽量让其成为你所指定的方向。</p>\n<p>好了，关于 UIAlertController 的学习笔记就到这里啦，这里还说到了 UIPopoverPresentationController，当然，讲得并不细致，相信下次也会写关于它的内容，欢迎评论！</p>\n<h1>参考资料</h1>\n<ol>\n<li><a href="http://www.cocoachina.com/ios/20141126/10320.html">在iOS 8中使用UIAlertController</a></li>\n<li>Documentation and API Reference</li>\n</ol>',frontmatter:{title:"UIAlertController 学习笔记（二）",date:"January 28, 2016",tags:["学习笔记","技术","开发","Swift","iOS"]}}},pathContext:{slug:"/note-of-uialertcontroller-two/"}}}});
//# sourceMappingURL=path---posts-note-of-uialertcontroller-two-9f60c6f4d1094705106e.js.map