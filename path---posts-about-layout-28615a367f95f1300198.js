webpackJsonp([0xb5bc3cfd5e5b],{455:function(e,i){e.exports={data:{markdownRemark:{html:"<p>关于布局的一些知识。更新中，如有错误欢迎指出。</p>\n<!-- more -->\n<h2>正文</h2>\n<h3>layoutSubviews 什么时候被调用</h3>\n<ol>\n<li>init(frame: CGRect) 且 frame 不为 CGRectZero</li>\n<li>addSubview</li>\n<li>设置 frame 且与之前的 frame 不同</li>\n<li>滚动 UIScrollView</li>\n<li>旋转屏幕触发父 UIView 的 layoutSubviews</li>\n<li>更改 view 的大小也会触发父 UIView 的 layoutSubviews</li>\n</ol>\n<h3>layoutIfNeeded 和 setNeedsLayout</h3>\n<ol>\n<li>layoutIfNeeded 是在如果有更新布局标记的情况下马上布局</li>\n<li>setNeedsLayout 是添加一个更新布局的标记，然后在恰当的时候调用 layoutIfNeeded</li>\n</ol>\n<h3>尺寸什么时候是确定的</h3>\n<ol>\n<li>在调用 layoutSubviews 的时候，尺寸已经是精确的</li>\n<li>在控制器中，可以在 viewDidLayoutSubviews 中进行一些与 view 尺寸相关的布局，此时尺寸是精确的</li>\n<li>在 awakeFromNib 中，控件的尺寸是 xib 文件中的尺寸，此时尺寸是不精确的（针对某个屏幕大小进行布局或尺寸计算等）</li>\n</ol>",frontmatter:{title:"关于布局",date:"February 14, 2016",tags:["学习笔记","技术","开发","Swift","iOS"]}}},pathContext:{slug:"/about-layout/"}}}});
//# sourceMappingURL=path---posts-about-layout-28615a367f95f1300198.js.map