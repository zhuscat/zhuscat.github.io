webpackJsonp([0xe15737f18353],{479:function(n,a){n.exports={data:{markdownRemark:{html:'<p>前端经常有上传图片的需求，比如上传头像，但用户可能会选择一张很大的图片，这个时候我们可以选择将图片压缩，然后再上传。</p>\n<p>压缩的思路如下：</p>\n<ol>\n<li>获取图片文件</li>\n<li>将文件转为 Blob URL 或者 Data URL</li>\n<li>将该 URL 赋值给一个 Image 对象</li>\n<li>在 Image 对象加载完毕之后，将该图片绘制到 Canvas 上面</li>\n<li>然后使用 Canvas 的 toDataURL 或者 toBlob 方法，设定图片输出质量进行压缩</li>\n<li>之后经过一些处理就可以发送带有这张压缩过图片的请求了</li>\n</ol>\n<h2>将图片文件转为 URL</h2>\n<h3>转为 Blob URL</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> objectURL <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>一件需要注意的事情是，在创建了 Blob URL 之后，如果不关闭标签的话，所分配的资源会在内存里常驻，因此在不会使用到这个 Blob URL 之后，我们可以释放资源：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>objectURL<span class="token punctuation">)</span></code></pre>\n      </div>\n<h3>转为 Data URL</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nfileReader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something with data url</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\nfileReader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span></code></pre>\n      </div>\n<h2>赋值给 Image 对象并绘制到 Canvas 上</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'canvas\'</span><span class="token punctuation">)</span>\n<span class="token comment">// result 是之前获取的 Data URL 或者 Blob URL</span>\nimage<span class="token punctuation">.</span>src <span class="token operator">=</span> result\nimage<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> image<span class="token punctuation">.</span>width\n  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> image<span class="token punctuation">.</span>height\n  canvas<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> image<span class="token punctuation">.</span>width<span class="token punctuation">,</span> image<span class="token punctuation">.</span>height<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>压缩</h2>\n<p>然后再将 canvas 转回 Data URL 或者 Blob URL</p>',frontmatter:{title:"在前端压缩图片",date:"November 07, 2016",tags:["前端"]},fields:{slug:"/compress-image-at-front-ent/"}}},pathContext:{slug:"/compress-image-at-front-ent/"}}}});
//# sourceMappingURL=path---posts-compress-image-at-front-ent-5777e8bbcbc25424971a.js.map