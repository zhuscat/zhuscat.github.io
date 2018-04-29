webpackJsonp([71906928983986],{521:function(a,s){a.exports={data:{markdownRemark:{html:'<p>假定大家是有编程基础以及使用 bash 的命令行的经验，因此只是简单的列举一下语法以及需要注意的地方。</p>\n<h2>注释</h2>\n<p>注释使用 <code class="language-text">#</code> 号，如</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># this is a comment</span></code></pre>\n      </div>\n<h2>第一个简单的 script</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token shebang important">#!/bin/bash</span>\nPATH<span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n<span class="token function">export</span> PATH\n<span class="token keyword">echo</span> -e <span class="token string">"Hello World!\\n"</span>\n<span class="token keyword">exit</span> 0</code></pre>\n      </div>\n<p>先说说第一行，这里的意思是告诉系统，用 <code class="language-text">/bin/bash</code> 这个程序去执行下面的内容。</p>\n<p>接着就没有什么好说的了，<code class="language-text">export PATH</code> 是将 <code class="language-text">PATH</code> 设为环境变量，这个程序就是简单的输出 <code class="language-text">Hello World!</code></p>\n<h2>默认变量</h2>\n<p>平时使用一些命令的时候都会带有参数，那么在 shell script 中，如何获取这些参数呢，通过 <code class="language-text">$0 $1 $2 … $n</code> 这变量即可，比如下面这条：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">runapp one two three</code></pre>\n      </div>\n<ul>\n<li><code class="language-text">$0</code> 为 <code class="language-text">runapp</code></li>\n<li><code class="language-text">$1</code> 为 <code class="language-text">one</code></li>\n<li><code class="language-text">$2</code> 为 <code class="language-text">two</code></li>\n<li><code class="language-text">$3</code> 为 <code class="language-text">three</code></li>\n</ul>\n<p>另外还有几个特殊的变量：</p>\n<ul>\n<li><code class="language-text">$#</code> 代表变量个数，不包括 <code class="language-text">$0</code></li>\n<li><code class="language-text">$@</code> 代表 <code class="language-text">$1 $2 $3 … $n</code>，如用上面的例子，则为 <code class="language-text">one two three</code></li>\n<li><code class="language-text">$*</code> 代表 <code class="language-text">$1c$2c$3c…$n</code>，<code class="language-text">c</code> 表示分隔字符默认情况下为空格，用上面的例子则为 <code class="language-text">one two three</code></li>\n</ul>\n<p>另外，在 <code class="language-text">shell script</code> 中，我们可以使用 <code class="language-text">shift</code> 对变量进行偏移，如</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token shebang important">#!/bin/bash</span>\nPATH<span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n<span class="token function">export</span> PATH\n\n<span class="token function">shift</span> 2\n<span class="token keyword">echo</span> <span class="token variable">$1</span>\n<span class="token keyword">echo</span> <span class="token variable">$2</span>\n<span class="token keyword">exit</span> 0</code></pre>\n      </div>\n<p>在输入</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">./example.sh one two three four</code></pre>\n      </div>\n<p>由于  <code class="language-text">shift</code>  了 2 个变量，最终输出为  <code class="language-text">three</code>  跟  <code class="language-text">four</code></p>\n<h2>条件</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">if</span> <span class="token punctuation">[</span> condition1 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token comment"># doFirst</span>\n<span class="token keyword">elif</span> <span class="token punctuation">[</span> condition2 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token comment"># doSecond</span>\n<span class="token keyword">else</span>\n  <span class="token comment"># doThird</span>\n<span class="token keyword">fi</span></code></pre>\n      </div>\n<p>大体语法如上所示，我们可以在条件判断中使用 <code class="language-text">&amp;&amp;</code> 跟 <code class="language-text">||</code></p>\n<p>比如</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">if</span> <span class="token punctuation">[</span> condition1 <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> condition2 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token comment"># doSomething</span>\n<span class="token keyword">fi</span></code></pre>\n      </div>\n<p>注意 <code class="language-text">[</code> 右边的空格和 <code class="language-text">]</code> 左边的空格是必须的，还需要注意的一点是，<code class="language-text">&amp;&amp;</code> 与 <code class="language-text">||</code> 的优先级是相同的，并从左向右执行，而我们接触的大多数语言中 <code class="language-text">&amp;&amp;</code> 的优先级比 <code class="language-text">||</code> 高。</p>\n<p>另一种条件判断的语句是 <code class="language-text">case … esac</code>，可以将其类比为 JavaScript 中的 switch 语句，语法如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">case</span> <span class="token variable">$var</span> <span class="token keyword">in</span>\n  <span class="token string">"case1"</span><span class="token punctuation">)</span>\n    <span class="token comment"># doCase1</span>\n    <span class="token punctuation">;</span><span class="token punctuation">;</span>\n  <span class="token string">"case2"</span><span class="token punctuation">)</span>\n    <span class="token comment"># doCase2</span>\n    <span class="token punctuation">;</span><span class="token punctuation">;</span>\n  *<span class="token punctuation">)</span>\n    <span class="token comment"># doDefault</span>\n    <span class="token punctuation">;</span><span class="token punctuation">;</span>\nesac</code></pre>\n      </div>\n<p>注意 <code class="language-text">)</code> 和 <code class="language-text">;;</code> 都是必须的，而 <code class="language-text">*)</code> 相当于 JavaScript 的 switch 语句中的 <code class="language-text">default</code></p>\n<h2>函数</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">function</span> foo<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment"># doSomethingHere...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>函数也可以有内置变量，比如这样调用上面的函数：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">foo 1</code></pre>\n      </div>\n<p>则在函数体中，<code class="language-text">$1</code> 为 <code class="language-text">1</code></p>\n<h2>循环</h2>\n<p>第一种：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>\n<span class="token keyword">do</span>\n<span class="token comment"># do something...</span>\n<span class="token keyword">done</span></code></pre>\n      </div>\n<p>第二种：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">until</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>\n<span class="token keyword">do</span>\n<span class="token comment"># do something...</span>\n<span class="token keyword">done</span></code></pre>\n      </div>\n<p>上面这两个语句的不同点事， <code class="language-text">while</code> 是满足 <code class="language-text">condition</code> 则执行下面的语句，而 <code class="language-text">until</code> 是满足 <code class="language-text">condition</code> 则停止执行。</p>\n<p>另外还有 <code class="language-text">for</code> 循环，实例如下</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">for</span> num <span class="token keyword">in</span> one two three\n<span class="token keyword">do</span>\n  <span class="token keyword">echo</span> <span class="token variable">$num</span>\n<span class="token keyword">done</span></code></pre>\n      </div>\n<p>输出为</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">one\ntwo\nthree</code></pre>\n      </div>\n<p>此外 <code class="language-text">for</code> 循环还能这么写：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span> i <span class="token operator">=</span> 1<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> 2<span class="token punctuation">;</span> i<span class="token operator">=</span>i+1 <span class="token punctuation">)</span> <span class="token punctuation">)</span>\n<span class="token keyword">do</span>\n  <span class="token keyword">echo</span> <span class="token variable">$i</span>\n<span class="token keyword">done</span></code></pre>\n      </div>\n<p>输出为</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">1\n2</code></pre>\n      </div>',frontmatter:{title:"Shell Script 基本语法",date:"August 27, 2017",tags:["shell script","linux","unix"]},fields:{slug:"/shell-script-basic/"}}},pathContext:{slug:"/shell-script-basic/"}}}});
//# sourceMappingURL=path---posts-shell-script-basic-7f4e5dcc1ed9102d65ea.js.map