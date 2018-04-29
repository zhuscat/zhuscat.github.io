webpackJsonp([0xe662aed349e6],{498:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Modal 是网页设计中经常用到的一种效果，来看看如何用CSS实现吧</p>\n<h2>HTML 组织</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">.modal\n    .modal-content</code></pre>\n      </div>\n<h2>CSS 代码</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">.modal {\n    /* 背景色 */\n    background: rgba(0, 0, 0, 0.2);\n    /* 固定 */\n    position: fixed;\n    /* 覆盖整个视口 */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    /* 保持遮罩在上方 */\n    z-index: 999;\n    /* 当 modal-content 超出视口的时候可以进行滚动*/\n    overflow: auto;\n}\n\n.modal-content {\n    /* modal 的内容 */\n    width: 60%;\n    background-color: #fff;\n    /* 居中 */\n    margin: 50px auto;\n    padding: 16px 32px;\n    position: relative;\n}</code></pre>\n      </div>\n<h2>滚动解决</h2>\n<p>这样设置之后，当展现 modal 之后，后方的页面依旧可以滚动，这样用户体验不是很好，可以通过设置 <code class="language-text">body</code> 的 CSS 样式来解决：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">// 当出现 modal 的时候\ndocument.body.style.overflow = &#39;hidden&#39;\n\n// 当 modal 消失的时候\ndocument.body.style.overflow = &#39;auto&#39;</code></pre>\n      </div>',frontmatter:{title:"使用 css 创建 modal 效果",date:"August 14, 2016",tags:["前端","CSS"]},fields:{slug:"/modal-with-css/"}}},pathContext:{slug:"/modal-with-css/"}}}});
//# sourceMappingURL=path---posts-modal-with-css-ea2892f70431eaaab66e.js.map