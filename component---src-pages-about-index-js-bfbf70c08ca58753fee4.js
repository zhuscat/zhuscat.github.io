(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",function(){return g}),n.d(e,"query",function(){return m});n(196);var a=n(6),o=n.n(a),i=n(0),r=n.n(i),l=n(246),c=n(184),d=n(186),s=[{key:"zh-cmn",name:"普通话"},{key:"zh-wuu",name:"吴语-温州话"}],g=function(e){function n(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={lang:"zh-cmn"},t}return o()(n,e),n.prototype.render=function(){for(var e=this,n=this.props.data.allMarkdownRemark.edges,a=null,o=0;o<n.length;o++){var i=n[o].node;if(i.frontmatter.lang===this.state.lang){a=i;break}}return t.createElement(c.a,null,t.createElement(d.Helmet,null,t.createElement("title",null,"关于 - ",this.props.data.site.siteMetadata.title)),t.createElement("div",null,t.createElement("div",null,s.map(function(n){return t.createElement(l.a,{key:n.key,active:n.key===e.state.lang,onClick:function(){return e.setState({lang:n.key})}},n.name)})),t.createElement("div",null,t.createElement("h1",{style:{color:"black",fontWeight:"bold",marginBottom:0}},a.frontmatter.title),t.createElement("div",{style:{fontSize:"smaller"}},a.frontmatter.date),t.createElement("div",{style:{marginTop:"112px"},dangerouslySetInnerHTML:{__html:a.html}}))))},n}(r.a.Component),m="1204524440"}.call(this,n(78))},179:function(t,e,n){var a;t.exports=(a=n(188))&&a.default||a},180:function(t,e,n){"use strict";var a=n(189),o=n.n(a),i={a:[],b:[],c:[],gatsby:"#663399",lilac:"#9D7CBF",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},gray:{dark:o()(8,270),copy:o()(12,270),calm:o()(46,270)}},r="a";"\n#281505\n#042b1b\n#2e1740\n#3a2407\n#073e2e\n#452054\n#48340a\n#0d4f43\n#5c2965\n#53450e\n#165e5a\n#743272\n#5c5815\n#216c72\n#8a3d7d\n#636a1e\n#2f798a\n#9f4984\n#697d2a\n#4084a1\n#b3568b\n#6f8f39\n#538eb6\n#c36490\n#75a14b\n#6998c9\n#d17494\n#7db15f\n#7fa1d9\n#dd859a\n#86c076\n#96abe6\n#e598a1\n#91ce8e\n#adb6f0\n#ecabaa\n#a0daa6\n#c2c2f7\n#f1beb6\n#b1e5be\n#d6cffb\n#f4d1c6\n#c6eed5\n#e7defe\n#f8e4d9\n#def6ea\n#f5eefe\n#fcf6f0\n".split("\n").reverse().forEach(function(t){if(""!==t)switch(i[r].push(t),r){case"a":r="b";break;case"b":r="c";break;case"c":r="a"}});var l=i;e.a={colors:l,mobile:"(min-width: 300px)",Mobile:"@media (min-width: 300px)",phablet:"(min-width: 550px)",Phablet:"@media (min-width: 550px)",tablet:"(min-width: 750px)",Tablet:"@media (min-width: 750px)",desktop:"(min-width: 1000px)",Desktop:"@media (min-width: 1000px)",hd:"(min-width: 1200px)",Hd:"@media (min-width: 1200px)",VHd:"@media (min-width: 1450px)",VVHd:"@media (min-width: 1650px)",maxWidth:35,maxWidthWithSidebar:26,radius:8,radiusLg:12,gutters:{default:1.25,HdR:2.5,VHdR:3,VVHdR:4.5},shadowKeyUmbraOpacity:.1,shadowKeyPenumbraOpacity:.07,shadowAmbientShadowOpacity:.06,animation:{curveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",speedDefault:"250ms",speedFast:"100ms"},logoOffset:1.8,headerHeight:"3.5rem"}},181:function(t,e,n){"use strict";n.d(e,"a",function(){return m});n(53);var a=n(191),o=n.n(a),i=n(192),r=n.n(i),l=n(180),c=n(193),d=l.a.colors,s={headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei","SimSun","Arial","sans-serif"],bodyFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei","SimSun","Arial","sans-serif"],monospaceFontFamily:["Space Mono","SFMono-Regular","Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"],baseFontSize:"18px",baseLineHeight:1.7,headerLineHeight:1.075,headerColor:d.gray.dark,bodyColor:d.gray.copy,blockMarginBottom:.75,scaleRatio:2,plugins:[new r.a],overrideStyles:function(t,e){var n,a=t.rhythm,o=t.scale;return(n={"h1,h2,h3,h4,h5,h6":{marginTop:a(2*e.blockMarginBottom),marginBottom:a(e.blockMarginBottom),letterSpacing:"-0.0075em",fontWeight:"normal",lineHeight:1.4},"ul, ol":{marginTop:a(e.blockMarginBottom)},h1:Object.assign({},o(.8)),h2:Object.assign({},o(.6)),h3:Object.assign({},o(.4),{lineHeight:1,marginTop:a(2*e.blockMarginBottom),marginBottom:a(e.blockMarginBottom/2)}),h4:Object.assign({},o(.2)),h5:Object.assign({},o(0)),a:{color:"#1F82D0",textDecoration:"none",borderBottom:"1px dashed #1f82d0"},"a:hover":{backgroundColor:"#b4effc"},del:{color:"#666"},blockquote:{paddingLeft:a(e.blockMarginBottom),marginLeft:0,borderLeft:a(e.blockMarginBottom/4)+" solid "+d.ui.light},hr:{backgroundColor:d.ui.light},"tt,code":{background:"transparent",fontFamily:e.monospaceFontFamily.join(","),fontSize:"100%",fontVariant:"none",WebkitFontFeatureSettings:'"clig" 0, "calt" 0',fontFeatureSettings:'"clig" 0, "calt" 0',paddingTop:"0.1em",paddingBottom:"0.1em",color:"#526d7a"},".gatsby-highlight":{background:"#f8fbfc",borderRadius:l.a.radius+"px",padding:a(e.blockMarginBottom),marginBottom:a(e.blockMarginBottom),overflow:"auto",WebkitOverflowScrolling:"touch",position:"relative"},".gatsby-highlight pre[class*='language-']":{padding:0,marginTop:0,marginBottom:0,backgroundColor:"transparent",border:0,float:"left",minWidth:"100%",overflow:"initial"},".gatsby-highlight pre code":{display:"block",fontSize:"95%",lineHeight:e.baseLineHeight},".gatsby-highlight-code-line":{background:"#faede5",paddingRight:a(e.blockMarginBottom),paddingLeft:""+a(e.blockMarginBottom/5*4),borderLeft:a(e.blockMarginBottom/5*1)+" solid "+d.a[3],display:"block"},".gatsby-highlight::-webkit-scrollbar":{width:"6px",height:"6px"},".gatsby-highlight::-webkit-scrollbar-thumb":{background:"#A4E8FC"},".gatsby-highlight::-webkit-scrollbar-track":{background:"#E8F7FC",borderRadius:"0 0 "+l.a.radiusLg+"px "+l.a.radiusLg+"px"},".gatsby-resp-image-link + em":Object.assign({},o(-.2),{lineHeight:1.3,paddingTop:a(3/8),marginBottom:a(2*e.blockMarginBottom),display:"block",textAlign:"center",fontStyle:"normal",color:d.gray.calm,position:"relative"}),".gatsby-resp-image-link + em a":{fontWeight:"normal",fontFamily:e.headerFontFamily.join(","),color:d.gatsby},".main-body a":{color:"inherit",textDecoration:"none",transition:"all "+l.a.animation.speedFast+" "+l.a.animation.curveDefault,borderBottom:"1px solid "+d.ui.bright,boxShadow:"inset 0 -2px 0px 0px "+d.ui.bright,fontFamily:e.headerFontFamily.join(","),fontWeight:"bold"},".post-body a":{fontSize:"102%",color:d.gatsby},".main-body a:hover":{background:d.ui.bright},".main-body a.anchor":{color:"inherit",fill:d.gatsby,textDecoration:"none",borderBottom:"none",boxShadow:"none"},".main-body a.anchor:hover":{background:"none"},".main-body a.gatsby-resp-image-link":{boxShadow:"none",borderBottom:"transparent",marginTop:a(2*e.blockMarginBottom),marginBottom:a(2*e.blockMarginBottom)},".main-body a.gatsby-resp-image-link:hover":{background:"none",boxShadow:"none"},".gatsby-highlight, .post .gatsby-resp-iframe-wrapper, .post .gatsby-resp-image-link":{},".gatsby-resp-image-link":{borderRadius:l.a.radius+"px",overflow:"hidden"},"@media (max-width:634px)":{".gatsby-highlight, .gatsby-resp-image-link":{borderRadius:0,borderLeft:0,borderRight:0},".gatsby-highlight":{}}})[l.a.Tablet+" and (max-width:980px)"]={".has-sidebar .gatsby-highlight":{marginLeft:0,marginRight:0}},n.video={width:"100%",marginBottom:a(e.blockMarginBottom)},n[".twitter-tweet-rendered"]={margin:a(2*e.blockMarginBottom)+" auto !important"},n[c.MOBILE_MEDIA_QUERY]={html:{fontSize:"16px"}},n[c.TABLET_MEDIA_QUERY]={html:{fontSize:"18px"}},n[c.MIN_DEFAULT_MEDIA_QUERY]={".gatsby-highlight, .post .gatsby-resp-iframe-wrapper, .post .gatsby-resp-image-link":{},".gatsby-highlight":{padding:a(1.5*e.blockMarginBottom),marginBottom:a(1.5*e.blockMarginBottom)},".gatsby-highlight-code-line":{paddingRight:a(1.5*e.blockMarginBottom),paddingLeft:""+a(1.5*e.blockMarginBottom/5*4),borderLeftWidth:""+a(1.5*e.blockMarginBottom/5*1)}},n[c.MIN_LARGER_DISPLAY_MEDIA_QUERY]={html:{fontSize:"18px"}},n[".token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata"]={color:d.c[8]},n[".token.punctuation"]={color:d.c[12]},n[".token.property,.token.tag,.token.boolean,.token.number,.token.function-name,.token.constant,.token.symbol,.token.deleted"]={color:d.b[9]},n[".token.selector,.token.attr-name,.token.string,.token.char,.token.function,.token.builtin,.token.inserted"]={color:d.a[9]},n[".token.operator, .token.entity, .token.url, .token.variable"]={},n[".token.atrule, .token.attr-value, .token.keyword, .token.class-name"]={color:d.b[8]},n[".gatsby-resp-image-link + em a[href*='//']:after"]={content:"\" \" url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20class='i-external'%20viewBox='0%200%2032%2032'%20width='14'%20height='14'%20fill='none'%20stroke='%23744C9E'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='9.38%'%3E%3Cpath%20d='M14%209%20L3%209%203%2029%2023%2029%2023%2018%20M18%204%20L28%204%2028%2014%20M28%204%20L14%2018'/%3E%3C/svg%3E\")"},n}},g=new o.a(s),m=g.rhythm;g.scale},184:function(t,e,n){"use strict";(function(t){var a=n(185),o=(n(0),n(183)),i=n(32),r=n.n(i),l=(n(194),n(180)),c=n(186),d=n(187),s=n(181);e.a=function(e){var n=e.children;return t.createElement(d.a,{query:"1097489062",render:function(e){var a;return t.createElement(o.a.Div,{margin:"0 auto",maxWidth:900,backgroundColor:"#fff",css:(a={},a[l.a.Mobile]={padding:Object(s.a)(.5)},a[l.a.Phablet]={padding:Object(s.a)(2),paddingTop:Object(s.a)(1.5),paddingBottom:Object(s.a)(.5)},a)},t.createElement(c.Helmet,null,t.createElement("title",null,e.site.siteMetadata.title)),t.createElement(o.a.Div,{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"64px"},t.createElement(r.a,{style:{borderBottom:"none"},to:"/"},t.createElement(o.a.H3,{marginBottom:0,marginTop:0,display:"inline-block",fontSize:"20px",fontWeight:"bold"},e.site.siteMetadata.title.toUpperCase())),t.createElement(r.a,{css:{textDecoration:"none",color:"black",borderBottom:"none",fontSize:"16px",fontWeight:"bold"},to:"/about/"},"关于")),n,t.createElement(o.a.Div,{marginTop:"64px",color:"#aaa",fontSize:"14px"},t.createElement(o.a.Div,null,"© 2015 - 2019 zhuscat"),t.createElement(o.a.Div,null,"Hosted on ",t.createElement("a",{href:"//github.com"},"Github")," and ",t.createElement("a",{href:"//coding.net"},"Coding.net")),t.createElement(o.a.A,{href:"//coding.net",css:{borderBottom:"none",marginLeft:"-18px",":hover":{backgroundColor:"transparent"}}},t.createElement(o.a.Img,{marginBottom:"0",src:"https://dn-coding-net-production-static.qbox.me/static/d028a9456b15526cc64eba6bd36012a8.svg"}))))},data:a})}}).call(this,n(78))},185:function(t){t.exports={data:{site:{siteMetadata:{title:"ZhusCafe"}}}}},187:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return c});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=(n(32),n(179),o.a.createContext({})),c=function(e){return t.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):t.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}}).call(this,n(78))},188:function(t,e,n){"use strict";n.r(e);n(53);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(56),c=n(2),d=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=d},196:function(t,e,n){var a=n(24).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(18)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},246:function(t,e,n){"use strict";(function(t){n(0);var a=n(183);e.a=function(e){var n=e.active,o=e.children,i=e.onClick;return t.createElement(a.a.A,{display:"inline-block",marginRight:"16px",outline:"none",backgroundColor:"transparent",border:"none",color:n?"#1F82D0":"#555",borderBottom:"1px dashed "+(n?"#1F82D0":"transparent"),padding:"0",cursor:"pointer",onClick:i||function(){}},o)}}).call(this,n(78))}}]);
//# sourceMappingURL=component---src-pages-about-index-js-bfbf70c08ca58753fee4.js.map