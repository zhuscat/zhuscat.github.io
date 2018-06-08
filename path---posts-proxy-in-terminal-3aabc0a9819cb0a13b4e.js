webpackJsonp([0x9ac8204c4e91],{513:function(a,s){a.exports={data:{markdownRemark:{html:'<p>一直使用 <code class="language-text">shadowsocks</code> 翻墙，之前一直以为开了 <code class="language-text">shadowsocks</code> 客户端的全局模式之后终端也是走代理的。近期要升级一下 <code class="language-text">CocoaPods</code>，然后发现终端压根就没走代理，东西根本就没有下载下来。</p>\n<p>寻找了许多方法，最后采用了本文说的办法。</p>\n<h2>下载 ProxyChains-NG</h2>\n<p>首先请确保你安装了 <code class="language-text">homebrew</code>，没安装的话安装一下。</p>\n<p>接着在终端中执行等待安装结束</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">$ brew <span class="token function">install</span> proxychains-ng</code></pre>\n      </div>\n<h2>配置 ProxyChains-NG</h2>\n<p>打开 <code class="language-text">usr/local/etc/proxychains.conf</code></p>\n<p>在 [ProxyList] 下面加上</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">socks5 127.0.0.1 1080</code></pre>\n      </div>\n<h2>关闭系统安装限制</h2>\n<p>重启电脑，开启时按住 <code class="language-text">command + R</code>，然后点击实用工具 -> 终端，输入</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">$ csrutil disable</code></pre>\n      </div>\n<p>再次重启电脑</p>\n<h2>测试</h2>\n<p>在终端中输入</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">$ proxychains4 google.com</code></pre>\n      </div>\n<p>如果成功返回信息，则证明设置成功了。(以后要进行代理的命令就在前面加 <code class="language-text">proxychains4</code> )。</p>\n<p>PS：跟墙斗争好累😫😫😫</p>',frontmatter:{title:"在终端中使用代理",date:"October 01, 2016",tags:["工具","代理","终端","shadowsocks"]},fields:{slug:"/proxy-in-terminal/"}}},pathContext:{slug:"/proxy-in-terminal/"}}}});
//# sourceMappingURL=path---posts-proxy-in-terminal-3aabc0a9819cb0a13b4e.js.map