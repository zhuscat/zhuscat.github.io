webpackJsonp([0xa016a8a3963d],{473:function(e,s){e.exports={data:{markdownRemark:{html:'<p>今天安装了 fish shell，之前一直用的是 bash，使用了之后发现真的方便了好多，这里简单的记录一下。</p>\n<!-- more -->\n<h2>安装</h2>\n<p>首先说一下我是在 Mac OS X 下使用的。最方便的当然是使用 Homebrew 了，在终端中输入：</p>\n<p><code class="language-text">brew install fish</code></p>\n<p>等待安装完成后，再将 fish shell 设置为默认的 shell</p>\n<ol>\n<li>更改 <code class="language-text">/ect/shells</code> 文件，向其中添加一行，内容为 <code class="language-text">/usr/local/bin/fish</code></li>\n<li>在终端中执行命令 <code class="language-text">chsh -s /usr/local/bin/fish</code>，重启终端之后，就是 fish shell 了</li>\n</ol>\n<h2>配置</h2>\n<p>fish shell 的一个特色是语法的高亮，并且内置了一些配色方案，可以在终端中执行 <code class="language-text">fish_config</code> 进入 Web 管理界面，里面还有许多其他可以配置的东西。</p>\n<p>另外说一下关于环境变量的东西，之前使用 bash 的时候在 <code class="language-text">.bash_profile</code> 里面写了一些东西。改成 fish shell 之后需要写入 <code class="language-text">~/.config/fish/config.fish</code> （如果没有这个文件的话就自行创建一个）</p>\n<p>比如我之前设置了在 <code class="language-text">.bash_profile</code> 中写了：</p>\n<p><code class="language-text">export PATH=$PATH:/path</code></p>\n<p>在 <code class="language-text">config.fish</code> 中是这么写的：</p>\n<p><code class="language-text">set -x PATH /path $PATH</code></p>\n<p>另外，原来我设置了 MySQL 的 alias，那么现在需要在 <code class="language-text">config.fish</code> 中写入：</p>\n<p><code class="language-text">alias mysql=&quot;/usr/local/mysql/bin/mysql&quot;</code></p>\n<p>fish shell 有许多易用的地方，比如 tab 补全，用右方向键填充其给你的智能建议，通过高亮的颜色提示你命令是否可以运行，目录文件是否存在等等，极大的提高了 shell 的易用性。</p>\n<p>当然，还有其他很多特色，详细的信息可以去 <a href="http://fishshell.com">fish shell 的官方网站</a> 查看。</p>',frontmatter:{title:"fish shell",date:"April 17, 2016",tags:["实用工具"]}}},pathContext:{slug:"/fish-shell/"}}}});
//# sourceMappingURL=path---posts-fish-shell-254addda51d2229c5ec9.js.map