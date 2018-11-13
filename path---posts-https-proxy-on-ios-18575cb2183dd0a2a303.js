webpackJsonp([0xd199300a9ee1],{488:function(t,p){t.exports={data:{markdownRemark:{html:'<p><a href="https://github.com/avwo/whistle">Whistle</a> 是一款 Web Debugging Proxy，类似的工具还有 Fiddler，Charles。不过，Fiddler 在 macOS 上不尽完美（我没有开启成功过，不知道什么情况），Charles 则是收费的。而 Fiddler 作为一款免费的开源软件，也能够满足开发中调试的要求。</p>\n<p>软件的使用方法就不多做介绍了，直接看官方文档即可，不过有一个比较重要的点这里记录一下，就是对 HTTPS 进行抓包。</p>\n<p>第一步，安装 Whistle</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ npm install whistle -g</code></pre>\n      </div>\n<p>第二步，开启 Whistle</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ w2 start</code></pre>\n      </div>\n<p>稍后就会显示类似于下面的提示：</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/https-proxy-on-ios/whistle-start.png" alt="w2 start"></p>\n<p>这时，我们设置自己手机的代理（以 iOS 11 为例），在设置 -> Wi-Fi -> 点击连接的网络右边的 i 图标</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/https-proxy-on-ios/setting1.jpg" alt="setting1"></p>\n<p>点击 HTTP 代理</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/https-proxy-on-ios/setting2.jpg" alt="setting2"></p>\n<p>将 HTTP 代理设为手动，并填入 Whistle 提示中的 IP 与端口</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/https-proxy-on-ios/setting3.jpg" alt="setting3"></p>\n<p>现在，手机的流量就会经过电脑代理了</p>\n<p>下一步就是实现 HTTPS 的抓包</p>\n<p>手机访问 <code class="language-text">rootca.pro</code>，开始安装证书，一路通过就可以了</p>\n<p>然后是电脑安装证书，访问 <a href="https://127.0.0.1:8899/">https://127.0.0.1:8899/</a>，然后点击 HTTPS 选项，点击证书下载。我用的是 macOS，将下载下来的证书拖到钥匙串访问应用中去即可。注意，我们要让该证书成为受信任的根证书。找到拖入的证书（以 whistle 开头的那个），右键，显示简介，信任，始终信任。</p>\n<p>你以为这样就好了吗？文章的标题是<strong>使用 Whistle 对 iOS HTTPS 进行抓包</strong>，做好了上面的设置之后，iOS 上安装的证书还不是受信任的根证书，虽然证书显示已验证，但是我们需要到设置 -> 关于本机 -> 证书信任设置里对针对根证书启用完全信任。</p>\n<p>之后就可以愉快的进行抓包了。</p>\n<p>之前主要是在安卓上进行过相应操作，没想到在 iOS 上还要做这一步操作，所以记录一下。</p>',frontmatter:{title:"使用 Whistle 对 iOS HTTPS 进行抓包",date:"September 20, 2017",tags:["抓包","网络","Web"]},fields:{slug:"/https-proxy-on-ios/"}}},pathContext:{slug:"/https-proxy-on-ios/"}}}});
//# sourceMappingURL=path---posts-https-proxy-on-ios-18575cb2183dd0a2a303.js.map