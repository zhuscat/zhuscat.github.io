webpackJsonp([71855558090425],{483:function(a,n){a.exports={data:{markdownRemark:{html:'<p>在写自定义的 <code class="language-text">radio</code>，<code class="language-text">checkbox</code> 这些东西的时候遇到了一个坑，在这里记录一下。</p>\n<p><code class="language-text">HTML</code> 的组织是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zc-radio-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zc-radio<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zc-radio-inner<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zc-radio-input<span class="token punctuation">"</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n      <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>on<span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>一开始的CSS大概如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.zc-radio-input</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.zc-radio-inner</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 自定义的内容 */</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>然后发现滚动条滚到下面的时候，点击自定义的组件会自动滚到最上方。</p>\n<p>一开始我以为是重新渲染所产生的问题，各种排查错误，就是没有发现，最后才发现是忘记给外层元素设置 <code class="language-text">position: relative;</code> 了，导致 <code class="language-text">.zc-radio-input</code> 处在页面的上方，当点击 <code class="language-text">label</code> 的时候就会自动滚到 <code class="language-text">zc-radio-input</code> 处了。</p>\n<!-- more -->',frontmatter:{title:"CSS陷阱（一）",date:"September 05, 2016",tags:["前端","CSS","React"]},fields:{slug:"/css-trip-one/"}}},pathContext:{slug:"/css-trip-one/"}}}});
//# sourceMappingURL=path---posts-css-trip-one-f409981f269e0cbd0cb6.js.map