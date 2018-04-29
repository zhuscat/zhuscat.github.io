webpackJsonp([0x89762452417f],{489:function(t,a){t.exports={data:{markdownRemark:{html:'<p>了解 JavaScript 的同学知道 JavaScript 在浏览器下是单线程的，运行 JavaScript 代码的线程只有一个。但是 JavaScript 又有异步的特性，这是怎么回事呢？今天就来说说这方面的内容。</p>\n<p>常见的异步调用有 AJAX，setTimeout之类的，大家要知道，这些都是浏览器提供的API，也就是说，JavaScript的异步特性其实就是因为调用了浏览器提供的接口，实质上，JavaScript还是在一条线程上运行的，浏览器同时执行 setTimeout 的倒计时之类的事情，以 setTimeout 举例，当执行 setTimeout 之后，Web API 会执行一个计时器，当时间到的时候，setTimeout 要执行的东西被放到任务队列里面，在每一个 Event Loop，会检查在执行 JavaScript 的那条线程调用栈是否是空闲的，当是空闲的时候，将其放入调用栈，所以显而易见，setTimeout并不是准时的，因为在队列中，需要等待前面的任务执行完。</p>\n<p>这也是为什么 JavaScript 是单线程的，但是却有异步的特性的原因了。</p>\n<p>所以当执行</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">setTimeout(func, 0)</code></pre>\n      </div>\n<p>的时候，func 并不会马上被执行，因为 func 会进入任务队列，等待 JavaScript 中所有同步的代码执行完之后，func 会被放入调用栈中执行。</p>',frontmatter:{title:"JavaScript？单线程？异步？",date:"August 02, 2016",tags:["前端","JavaScript"]},fields:{slug:"/javascript-single-thread-and-async/"}}},pathContext:{slug:"/javascript-single-thread-and-async/"}}}});
//# sourceMappingURL=path---posts-javascript-single-thread-and-async-4cbb503f75da99691fe8.js.map