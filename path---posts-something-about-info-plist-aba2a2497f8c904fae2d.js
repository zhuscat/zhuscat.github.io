webpackJsonp([0x8508a9271c1b],{531:function(t,e){t.exports={data:{markdownRemark:{html:'<p>有些东西得在 <code class="language-text">Info.plist</code> 中配置，这里记录一下，持续更新。</p>\n<!-- more -->\n<h1>UIWebView不能加载某些网址</h1>\n<p>在 <code class="language-text">Info.plist</code> 中加入以下字段：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&lt;key&gt;NSAppTransportSecurity&lt;/key&gt;\n&lt;dict&gt;\n    &lt;key&gt;NSAllowsArbitraryLoads&lt;/key&gt;\n        &lt;true/&gt;\n&lt;/dict&gt;</code></pre>\n      </div>\n<h1>定位权限</h1>\n<p>在 <code class="language-text">Info.plist</code> 中加入如下字段，值设为YES：</p>\n<h2>允许在前台获取GPS的描述:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">NSLocationWhenInUseUsageDescription</code></pre>\n      </div>\n<h2>允许在前后台获取CPS的描述：</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">NSLocationAlwaysUsageDescription</code></pre>\n      </div>',frontmatter:{title:"一些需要在Info.plist中配置的东西",date:"March 23, 2016",tags:["iOS","开发","技术"]},fields:{slug:"/something-about-info-plist/"}}},pathContext:{slug:"/something-about-info-plist/"}}}});
//# sourceMappingURL=path---posts-something-about-info-plist-aba2a2497f8c904fae2d.js.map