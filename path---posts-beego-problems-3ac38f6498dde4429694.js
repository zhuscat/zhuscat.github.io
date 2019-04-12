webpackJsonp([0xbf9a49bd9578],{476:function(e,t){e.exports={data:{markdownRemark:{html:'<p>记录使用 Beego 的时候遇到的一些问题以及解决方案。</p>\n<h2>存到 MySQL 数据库里的时间跟读取出来的时间有时差</h2>\n<p>原因是保存时间的时候转换成UTC时间，读取时间的时候按照的是本地的时区，然后时间就慢了8个小时，下面是解决办法</p>\n<p>给对应的连接字符串设置一下时区：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&quot;root:root@/db?charset=utf8&amp;loc=Asia%2FShanghai&quot;</code></pre>\n      </div>\n<p>设置 <code class="language-text">orm</code>的默认时区：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">orm.DefaultTimeLoc, _ = time.LoadLocation(&quot;Asia/Shanghai&quot;)</code></pre>\n      </div>\n<h2>表单中未选择文件提交发生 Runtime Error</h2>\n<p>代码如下，当没有上传文件的时候会引发 <code class="language-text">runtime error: invalid memory address or nil pointer dereference</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">func (c *FormController) Post() {\n    f, h, err := c.GetFile(&quot;uploadname&quot;)\n    defer f.Close()\n    if err != nil {\n        fmt.Println(&quot;getfile err &quot;, err)\n    } else {\n        c.SaveToFile(&quot;uploadname&quot;, &quot;/www/&quot;+h.Filename)\n    }\n}</code></pre>\n      </div>\n<p>将代码改为下面这样就行了：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">f, h, err := c.GetFile(&quot;uploadname&quot;)\nif err != nil {\n\t// handle\n}\ndefer f.Close()</code></pre>\n      </div>\n<p>这样可以在没有文件上传的时候检测到错误并做一些处理退出函数，并且是在 <code class="language-text">defer f.Close()</code> 语句执行以前，所以不会引发上面的那个错误。</p>',frontmatter:{title:"使用Beego的时候遇到的坑",date:"June 07, 2016",tags:["Go","Beego","开发","实践"]},fields:{slug:"/beego-problems/"}}},pathContext:{slug:"/beego-problems/"}}}});
//# sourceMappingURL=path---posts-beego-problems-3ac38f6498dde4429694.js.map