(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5Wrh":function(e,t,n){"use strict";(function(e){n("q1tI");var r=n("gmdE");t.a=function(t){var n=t.active,a=t.children,l=t.onClick;return e.createElement(r.a.A,{display:"inline-block",marginRight:"16px",outline:"none",backgroundColor:"transparent",border:"none",color:n?"#1F82D0":"#555",borderBottom:"1px dashed "+(n?"#1F82D0":"transparent"),padding:"0",cursor:"pointer",onClick:l||function(){}},a)}}).call(this,n("iMUK"))},O0dG:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return s})),n.d(t,"query",(function(){return d}));var r=n("dI71"),a=n("q1tI"),l=n.n(a),o=n("5Wrh"),i=n("Bl7J"),c=n("TJpk"),u=[{key:"zh-cmn",name:"普通话"},{key:"zh-wuu",name:"吴语-温州话"}],s=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state={lang:"zh-cmn"},e}return Object(r.a)(n,t),n.prototype.render=function(){for(var t=this,n=this.props.data.allMarkdownRemark.edges,r=null,a=0;a<n.length;a++){var l=n[a].node;if(l.frontmatter.lang===this.state.lang){r=l;break}}return e.createElement(i.a,null,e.createElement(c.Helmet,null,e.createElement("title",null,"关于 - ",this.props.data.site.siteMetadata.title)),e.createElement("div",null,e.createElement("div",null,u.map((function(n){return e.createElement(o.a,{key:n.key,active:n.key===t.state.lang,onClick:function(){return t.setState({lang:n.key})}},n.name)}))),e.createElement("div",null,e.createElement("h1",{style:{color:"black",fontWeight:"bold",marginBottom:0}},r.frontmatter.title),e.createElement("div",{style:{fontSize:"smaller"}},r.frontmatter.date),e.createElement("div",{style:{marginTop:"112px"},dangerouslySetInnerHTML:{__html:r.html}}))))},n}(l.a.Component),d="3925904631"}.call(this,n("iMUK"))}}]);
//# sourceMappingURL=component---src-pages-about-index-js-366da54718cbe8dc3e4e.js.map