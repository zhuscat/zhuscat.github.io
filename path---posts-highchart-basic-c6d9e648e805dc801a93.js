webpackJsonp([0x83a0a961f6e9],{486:function(n,t){n.exports={data:{markdownRemark:{html:'<h2>基本</h2>\n<p>首先，是使用 HIGHCHARTS 创建一个图表，在引用 <code class="language-text">jQuery</code> 的情况下用如下的方法可以创建一个图表。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(&#39;#container&#39;).highcharts(config);</code></pre>\n      </div>\n<p>其中，<code class="language-text">#container</code> 是一个 <code class="language-text">html</code> 元素，<code class="language-text">config</code> 是该图表的配置，是一个 <code class="language-text">Object</code>，使用 HIGHCHARTS 基本上就是对配置的编写，以下的内容就是介绍 HIGHCHARTS 的各种配置。</p>\n<p>先来看看官方提供的这幅图片，其描述了一个图表所包含的内容，主要就是通过配置这些内容来展现一个图表：</p>\n<p><img src="http://7xpc78.com1.z0.glb.clouddn.com/highcharts-basic/understanding_highcharts.png" alt="理解 highcharts"></p>\n<p>我们将通过不断地改变配置，最终做出一个简单的图表。</p>\n<p>可以通过 <a href="https://jsfiddle.net">JSFiddle</a> 方便地进行代码的编写。</p>\n<p>为了方便描述 <code class="language-text">config</code> 对象，本文中做如下约定：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">{\n  title: {\n    text: &#39;MAIN TITLE&#39;\n  }\n}</code></pre>\n      </div>\n<p>以上是一个简单的 <code class="language-text">config</code> 对象，文中将用如下的方式描述:</p>\n<p>设置 <code class="language-text">title.text</code> 为 <code class="language-text">MAIN TITLE</code></p>\n<h2>标题</h2>\n<p>标题分为主标题(title)和副标题(subtitle)</p>\n<p>可以用 <code class="language-text">title.text</code> 设置主标题。</p>\n<p>用 <code class="language-text">sutitle.text</code> 设置副标题。</p>\n<p>设置了标题之后，代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    }\n  })\n})</code></pre>\n      </div>\n<p>可以看到运行结果上图表已经显示标题和副标题了。</p>\n<p>看到这段代码很容易想到，标题能配置的不仅仅是文字，否则就不用以对象的方式设置标题了，接下来就简单地再扩展一下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    }\n  })\n})</code></pre>\n      </div>\n<p>以上代码设置了主标题的对齐方式，边距，字体相关的样式，官方还提供了其他许多的接口，可以查看<a href="http://api.highcharts.com/highcharts">官方文档</a>进一步了解。</p>\n<h2>序列</h2>\n<p>序列即定义图表上的线，区域或者圆弧之类的数据。通过设置 <code class="language-text">series</code> 来进行配置。可以说，序列是图表中最为重要的部分了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        data: [1, 4, 8, 2, 5, 6]\n      }\n    ]\n  })\n})</code></pre>\n      </div>\n<p>如上代码所示，添加了 <code class="language-text">series</code>，再次执行代码，就可以看到图表了，默认情况下，图表是折线图，可以通过设置 <code class="language-text">series.type</code> 改变图表的类型。（这里的series指的是上面代码中 series 数组中的一个对象，可以在数组中包含多个这样的对象，图表上就会显示多个不同的“图”，如折线）。</p>\n<p>现在，我们让图表显示两条曲线，而不是折线。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        type: &#39;spline&#39;,\n        data: [1, 4, 8, 2, 5, 6]\n      },\n      {\n        type: &#39;spline&#39;,\n        data: [2, 6, 5, 1, 3, 8]\n      }\n    ]\n  })\n})</code></pre>\n      </div>\n<p>可以看到，series 数组里面现在有两个成员，并设置了 type，不过，可不可以不设置 type 而让整个图表默认为曲线图呢？可以通过设置 <code class="language-text">chart.type</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    chart: {\n      type: &#39;spline&#39;\n    },\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        data: [1, 4, 8, 2, 5, 6]\n      },\n      {\n        data: [2, 6, 5, 1, 3, 8]\n      }\n    ]\n  })\n})</code></pre>\n      </div>\n<p><code class="language-text">chart</code> 用来设置图表的一些属性，在更粗粒度的范围内进行设置。另外还可以设置序列的 <code class="language-text">name</code>，这样在图表的说明处会显示你设置的名字。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">series: [\n  {\n    name: &#39;s1&#39;,\n    data: [1, 4, 8, 2, 5, 6]\n  },\n  {\n    name: &#39;s2&#39;,\n    data: [2, 6, 5, 1, 3, 8]\n  }\n]</code></pre>\n      </div>\n<p>在此来说一下 HIGHCHARTS 中的图表类型：</p>\n<p>大体上分为</p>\n<ol>\n<li>线图</li>\n<li>饼图</li>\n<li>面积图</li>\n<li>直方图</li>\n<li>泡泡图</li>\n</ol>\n<p>其中，线图又可以分为折线，曲线</p>\n<p>面积图也可以分为有折线与坐标轴围成的面积和曲线与坐标轴围成的面积。</p>\n<p>具体图表的类型可以查看<a href="http://api.highcharts.com/highcharts">官方文档</a>。</p>\n<h2>轴</h2>\n<p>轴有 x 轴和 y 轴。</p>\n<p>x 轴通过 <code class="language-text">xAxis</code> 设置。y 轴通过 <code class="language-text">yAxis</code> 设置。需要知道的是，可以同时存在多个 x 轴或者 y 轴。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    chart: {\n      type: &#39;spline&#39;\n    },\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        data: [1, 4, 8, 2, 5, 6]\n      },\n      {\n        data: [2, 6, 5, 1, 3, 8]\n      }\n    ]\n  })\n})</code></pre>\n      </div>\n<p>以上代码改变 x 轴刻度的间隔为2</p>\n<h2>提示</h2>\n<p>提示就是将鼠标放置到图表的上面出现的描述性区域。通过 <code class="language-text">tooltip</code> 进行配置。</p>\n<p>说一下 tooltip 的结构，头部和体，</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    chart: {\n      type: &#39;spline&#39;\n    },\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        data: [1, 4, 8, 2, 5, 6]\n      },\n      {\n        data: [2, 6, 5, 1, 3, 8]\n      }\n    ],\n    xAxis: {\n      tickInterval: 2,\n    },\n    tooltip: {\n      pointFormat: &#39;The value is {point.y}&#39;\n    }\n  })\n})</code></pre>\n      </div>\n<p>如上所示，设置了 tooltip 体的内容为 The value is {point.y}</p>\n<p>其中， <code class="language-text">{point.y}</code> 指的是该点的 y 轴的值</p>\n<p>在这里解释一下 <code class="language-text">{point.y}</code>，HIGHCHARTS 会将 <code class="language-text">{point.y}</code> 替换成该点的 y 值。此类语法还有</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">{point.x}\n{series.name}</code></pre>\n      </div>\n<p>更多内容请查阅官方文档。</p>\n<h2>说明</h2>\n<p>即说明某条线，某个圆弧之类对应的信息。</p>\n<p>使用 <code class="language-text">legend</code> 进行配置。</p>\n<h2>标志域与标志线</h2>\n<p>标志域与标志线可以通过 <code class="language-text">xAxis.plotBand</code> 和 <code class="language-text">xAxis.plotLine</code> 进行配置。</p>\n<h2>缩放</h2>\n<p>通过 <code class="language-text">chart.zoomType</code> 进行配置。</p>\n<p>其值可以是 <code class="language-text">x</code>, <code class="language-text">y</code>, <code class="language-text">xy</code>，分别代表在 x 轴上进行缩放，在 y 轴上进行缩放，xy 轴同时进行缩放。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    chart: {\n      type: &#39;spline&#39;,\n      zoomType: &#39;x&#39;\n    },\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        data: [1, 4, 8, 2, 5, 6]\n      },\n      {\n        data: [2, 6, 5, 1, 3, 8]\n      }\n    ],\n    xAxis: {\n      tickInterval: 2,\n    },\n    tooltip: {\n      pointFormat: &#39;The value is {point.y}&#39;\n    }\n  })\n})</code></pre>\n      </div>\n<h2>标签和字符串的格式化</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$(function() {\n  $(&#39;#container&#39;).highcharts({\n    chart: {\n      type: &#39;spline&#39;,\n      zoomType: &#39;x&#39;\n    },\n    title: {\n      text: &#39;MAIN TITLE&#39;,\n      align: &#39;left&#39;,\n      margin: 20,\n      style: {\n        color: &#39;#4a4a4a&#39;,\n        fontSize: &#39;16px&#39;\n      }\n    },\n    subtitle: {\n      text: &#39;sub title&#39;\n    },\n    series: [\n      {\n        data: [1, 4, 8, 2, 5, 6]\n      },\n      {\n        data: [2, 6, 5, 1, 3, 8]\n      }\n    ],\n    xAxis: {\n      tickInterval: 2,\n      title: {\n        text: &#39;time&#39;\n      },\n      labels: {\n        format: &#39;{value}s&#39;\n      }\n    },\n    yAxis: {\n      title: {\n        text: &#39;distance&#39;\n      },\n      labels: {\n        format: &#39;{value}m&#39;\n      }\n    },\n    tooltip: {\n      pointFormat: &#39;The value is {point.y}&#39;\n    }\n  })\n})</code></pre>\n      </div>\n<p>如上面的代码所示，可以设置轴上的标题和每个刻度显示的内容。</p>\n<p>另外还可以设置 <code class="language-text">xAxis.labels.rotation</code> 控制标签的旋转，</p>\n<h2>下钻</h2>\n<p>下钻的意思就是点击点击图表的某部分数据显示可以下钻到其更详细的内容，关于下钻的使用方法可以查看 <a href="http://www.highcharts.com/demo/column-drilldown">column-drilldown</a></p>\n<h2>结语</h2>\n<p>写完这篇文章我发现，很难真正讲述 HIGHCHARTS 的方方面面，因为其提供了太多的 API，另外我发现的一个难点是比较难对配置进行描述，如果是强类型的语言可以使用其类型系统进行描述，但是 JavaScript 作为一个弱类型的语言，在描述的时候显得有些吃力，但我相信你对 HIGHCHARTS 的使用已经有一个大体的了解，学习 HIGHCHARTS，重要的是对其所包含的大类进行一个了解（比如包含什么图，可以对哪些方面进行详细的配置），然后再在使用的时候查阅相应的 API 即可。</p>',frontmatter:{title:"highcharts 入门",date:"August 07, 2016",tags:["前端","学习笔记","图表","JavaScript"]},fields:{slug:"/highchart-basic/"}}},pathContext:{slug:"/highchart-basic/"}}}});
//# sourceMappingURL=path---posts-highchart-basic-c6d9e648e805dc801a93.js.map