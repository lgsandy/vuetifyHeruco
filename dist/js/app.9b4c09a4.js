(function(t){function e(e){for(var r,u,l=e[0],i=e[1],c=e[2],s=0,f=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f2d344a8"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(t);var c=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("d1e7");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.layout,{tag:"component"},[n("router-view",{attrs:{layout:t.layout},on:{"update:layout":function(e){t.layout=e}}})],1)],1)},a=[],u=n("fdab"),l={name:"App",components:{HelloWorld:u["a"]},data:function(){return{layout:"div"}}},i=l,c=n("2877"),s=Object(c["a"])(i,o,a,!1,null,null,null),p=s.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"",color:"purple darken-3",dark:""}},[n("v-app-bar-nav-icon",{attrs:{to:"/"}}),n("v-toolbar-title",[t._v("Sandy.io")]),n("div",{staticClass:"flex-grow-1"}),n("v-toolbar-items",[n("v-btn",{attrs:{text:"",to:"/login"}},[t._v("Login")]),n("v-btn",{attrs:{text:"",to:"/signup"}},[t._v("ShignUp")])],1)],1),n("v-content",[t._t("default")],2),n("v-footer",{attrs:{color:"purple darken-3",dark:"",fixed:""}},[n("div",{staticClass:"flex-grow-1"}),n("div",[t._v("© "+t._s((new Date).getFullYear()))]),n("div",{staticClass:"flex-grow-1"})])],1)},m=[],h={},g=Object(c["a"])(h,b,m,!1,null,null,null),y=g.exports,w={components:{HelloWorld:u["a"]},created:function(){this.$emit("update:layout",y)}},_=w,x=Object(c["a"])(_,d,v,!1,null,null,null),j=x.exports;r["default"].use(f["a"]);var O=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:j},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return n.e("about").then(n.bind(null,"34c3"))}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("about").then(n.bind(null,"1010"))}},{path:"/master",name:"master",component:function(){return n.e("about").then(n.bind(null,"d619"))}}]}),k=n("ce5b"),C=n.n(k);n("bf40");r["default"].use(C.a);var F=new C.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}});n("d5e8"),n("5363");r["default"].config.productionTip=!1,new r["default"]({router:O,vuetify:F,render:function(t){return t(p)}}).$mount("#app")},aa75:function(t,e,n){t.exports=n.p+"img/app_icon.4825b2c9.svg"},fdab:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("aa75"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Sandy.io")])])],1)],1)},o=[],a={data:function(){return{}}},u=a,l=n("2877"),i=Object(l["a"])(u,r,o,!1,null,null,null);e["a"]=i.exports}});
//# sourceMappingURL=app.9b4c09a4.js.map