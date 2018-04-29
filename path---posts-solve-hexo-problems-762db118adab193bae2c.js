webpackJsonp([22385432115888],{513:function(e,n){e.exports={data:{markdownRemark:{html:'<p>这是一段惨痛的经历，在这段时间中，我真的想哭。这是一个解决 hexo 出现错误的故事，这个故事很长、很长。</p>\n<p>如果大家也发现执行 hexo 命令时出现错误，请直接看本文的总结部分，也许是你想要的答案。</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/solve-hexo-problems/install-hexo-cli.png" alt="install hexo"></p>\n<!-- more -->\n<h1>正文</h1>\n<p>前段时间升级了一下node，直接升级到了6.2，好久没写博客了，然后随手写了一篇，然后创建博文的时候，突然发现：nani？居然有错误，不可忍啊，虽然操作还是成功了。不过错误必须去除，然后我想，是不是 hexo 的版本太低了，已经更新过了呢。</p>\n<p>结果更新了一下，不知道怎么回事，错误更多了，hexo 打头的命里都会出错，天哪！</p>\n<p>想了一下，解决这个问题还是有办法的，直接重装不就得了。</p>\n<p>话不多说，直接卸载</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo npm uninstall hexo-cli -g</code></pre>\n      </div>\n<p>然后安装，心想问题肯定能解决</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo npm install hexo-cli -g</code></pre>\n      </div>\n<p>结果，又有问题，当时我的内心是崩溃的，总之就是一个东西没有成功装好什么的。</p>\n<p>不过试了一下，hexo 的命令已经能用了，赶紧 init 一个文件夹出来，结果第一行句开始报错，错误内容大概是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Error: Cannot find module &#39;./build/Release/DTraceProviderBindings&#39;</code></pre>\n      </div>\n<p>不过好在下面创建的过程还有，我看着进度条一点一点走过去，心想，这个错误应该不是什么大错误，应该不会影响。</p>\n<p>然而我错了，文件夹里面内容下载好之后，就开始下载什么依赖了，然后下载完之后就卡住了，是的，纹丝不动，</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&gt; dtrace-provider@0.6.0 install /usr/local/lib/node_modules/hexo/node_modules/dtrace-provider\n&gt; node scripts/install.js</code></pre>\n      </div>\n<p>我看着这输出，感觉时间仿佛静止了，几分钟后，我按下了 <code class="language-text">ctrl + c</code></p>\n<p>心想我应该不是第一个遇到这种情况的人，我 google 百度一齐上，搜索到了几种方法</p>\n<p>一、<code class="language-text">npm install hexo --no-optional</code></p>\n<p>一看，果断不行，现在要安装的是 <code class="language-text">hexo-cli</code></p>\n<p>二、重装 <code class="language-text">hexo-cli</code> 可以解决问题（喂，我已经重装过了啊）</p>\n<p>没办法，尝试一下把 <code class="language-text">--no-optional</code> 放到所有命令后面吧，结果，华丽丽的，不行。</p>\n<p>然后我就尝试重装，加 <code class="language-text">sudo</code> 不加 <code class="language-text">sudo</code> 的，我感觉尝试不止十遍了，无一成功。</p>\n<p>在绝望之中，我再次求助于搜索引擎，这次搜索到了一个 github 上的 issue，说是 6.0 无法编译 hexo。。。</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/solve-hexo-problems/expression2.jpg" alt="黑人问号"></p>\n<p>我想，估计 hexo 还没有兼容 6.0 以上的版本吧。</p>\n<p>赶紧切换版本试试，之前安装过的 n 派上用场了，用 n 安装了一个 5.8.0 的 node，切换过去，安装！</p>\n<p>在下载 5.8.0 的过程中，我是欣喜的，这应该就是终极解决方案了，结果，当我敲下命令之后，一片红色。</p>\n<p>根本无法安装任何包。</p>\n<p>估计是我把 npm 升级了的缘故，老版本的 node 不兼容。</p>\n<p>但我绝对是不会屈服的，经过搜索，我发现存在着一个叫做 nvm 的 node 版本管理软件，灵活性比 n 高了许多。</p>\n<p>就是他，这才是终极解决方案，删掉所有包，删掉 node，安装 nvm，等等，好像有什么不对。</p>\n<p>看了一下 nvm 的介绍，不支持 Fish，此处应有黑人蒙逼脸。</p>\n<p>看来不得不抛弃用了许久的 Fish Shell了，终于安装了 nvm。</p>\n<p>接着安装了几个版本的 node，安装 hexo 的 node 版本是 4.2.2，连 5 都不敢用了，总算是成功安装，一路弄下来，期间又遇到一点小坑，很容易的解决后，总算，结束了，这次经历，身心疲惫啊。</p>\n<h1>总结</h1>\n<p>如果发现 hexo 出现问题，并且 node 的版本是高于 6.0 的，切换到一个低版本的 node 吧。</p>\n<p>就是这么一句话，我折腾了不知多久，泪目。</p>\n<h1>参考资料</h1>\n<p><a href="">1</a>(<a href="http://www.cnblogs.com/kaiye/p/4937191.html">http://www.cnblogs.com/kaiye/p/4937191.html</a>)</p>\n<p><a href="">2</a>(<a href="https://github.com/hexojs/hexo/issues/1939#issuecomment-226368455">https://github.com/hexojs/hexo/issues/1939#issuecomment-226368455</a>)</p>',frontmatter:{title:"解决 Hexo 出现错误的故事",date:"July 21, 2016",tags:["hexo","博客","npm"]},fields:{slug:"/solve-hexo-problems/"}}},pathContext:{slug:"/solve-hexo-problems/"}}}});
//# sourceMappingURL=path---posts-solve-hexo-problems-762db118adab193bae2c.js.map