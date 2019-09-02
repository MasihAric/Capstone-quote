(function(t){function e(e){for(var o,u,s=e[0],c=e[1],i=e[2],p=0,f=[];p<s.length;p++)u=s[p],r[u]&&f.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quoteofday"},[n("h1",[t._v("Quote of the Day!!")]),t.posts&&t.posts.quote?n("div",{staticClass:"quoteContainer"},[n("h2",[t._v(t._s(t.posts.quote.body))]),n("h3",[t._v(t._s(t.posts.quote.author))])]):t._e(),n("div",[n("br"),n("button",{on:{click:t.play}},[t._v("Click to play Quote of Day.")]),n("p",[n("router-link",{attrs:{to:{path:"searchQuote"}}},[t._v("Search Quote")])],1)]),n("form",{on:{submit:function(e){return e.preventDefault(),t.getQuote(t.query)}}})])},s=[],c=n("bc3a"),i=n.n(c),l={name:"quoteofday",data:function(){return{msg:"Quote of Day",posts:null}},created:function(){var t=this;i.a.get("https://favqs.com/api/qotd").then(function(e){t.posts=e.data,console.log(t.posts)}).catch(function(e){t.errors.push(e)})},methods:{play:function(){responsiveVoice.speak(this.posts.quote.body,"UK English Female"),responsiveVoice.speak(this.posts.quote.author,"UK English Female")}}},p=l,f=(n("d976"),n("2877")),h=Object(f["a"])(p,u,s,!1,null,"023152a0",null),d=h.exports,v={name:"app"},m=v,b=(n("034f"),Object(f["a"])(m,r,a,!1,null,null,null)),y=b.exports,_=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchQuote"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.findQuote(e)}}},[n("h3",[t._v("You can search for a Quote from an Author!!")]),n("br"),n("label",[t._v("Enter Author name here:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],attrs:{type:"search",placeholder:"eg. Mark Twain"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Search")]),n("button",{attrs:{type:"reset"}},[t._v("Clear")])]),t._v("\n  "+t._s(this.results)+"\n")])},q=[],w={name:"searchQuote",data:function(){return{author:null,body:null,results:null}},methods:{findQuote:function(){var t=this,e=encodeURI(this.author);fetch("https://favqs.com/api/quotes?type=author&filter=".concat(e),{headers:{Authorization:'Token token="533e74f5138651604d3a8a30491dca5c"'}}).then(function(t){return t.json()}).then(function(e){t.results=e,console.log(JSON.stringify(e))}).catch(function(t){console.log(t)})}}},O=w,Q=Object(f["a"])(O,g,q,!1,null,null,null),j=Q.exports;o["a"].use(_["a"]);var k=new _["a"]({routes:[{path:"/",name:"quoteofday",component:d},{path:"/SearchQuote",name:"searchQuote",component:j}]}),x=n("0284"),S=n.n(x);o["a"].use(S.a,{id:"UA-146783550-1"}),o["a"].config.productionTip=!1,new o["a"]({el:"#app",router:k,template:"<App/>",components:{App:y}})},"64a9":function(t,e,n){},b7c7:function(t,e,n){},d976:function(t,e,n){"use strict";var o=n("b7c7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.699294f2.js.map