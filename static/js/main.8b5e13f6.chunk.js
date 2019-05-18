(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);t.default={print:"Print",select_file:"Select file (.srt)"}},30:function(e,t){},36:function(e,t,n){e.exports=n(69)},41:function(e,t,n){},49:function(e,t){},55:function(e,t){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);t.default={print:"\u5217\u5370",select_file:"\u9078\u64c7\u6a94\u6848(.srt)"}},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),l=(n(41),n(22)),o=n(6),s=n(7),u=n(16),h=n(8),g=n(10),p=n(11),f=n(33),m=n(13),d=n(12),v=n(35),b=(n(61),function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.text.split("\n").reduce(function(e,t){return"".concat(e,"<div>").concat(t,"</div>")},"");return e=0!=this.props.time.length?{marginTop:15}:{marginTop:0},r.a.createElement("div",null,r.a.createElement("div",{className:"time",style:e},this.props.time),r.a.createElement("div",{className:"text"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}})))}}]),t}(r.a.Component)),O=[{display:"English",language:"en-US"},{display:"\u7e41\u9ad4\u4e2d\u6587",language:"zh-TW"}];n(62);function L(e,t){L=function(e,t){return new c(e,t)};var n=Object(v.a)(RegExp),a=RegExp.prototype,r=new WeakMap;function c(e,t){var a=n.call(this,e);return r.set(a,t),a}function i(e,t){var n=r.get(t);return Object.keys(n).reduce(function(t,a){return t[a]=e[n[a]],t},Object.create(null))}return Object(p.a)(c,n),c.prototype.exec=function(e){var t=a.exec.call(this,e);return t&&(t.groups=i(t,this)),t},c.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=r.get(this);return a[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,t){return"$"+n[t]}))}if("function"===typeof t){var c=this;return a[Symbol.replace].call(this,e,function(){var e=[];return e.push.apply(e,arguments),"object"!==typeof e[e.length-1]&&e.push(i(e,c)),t.apply(this,e)})}return a[Symbol.replace].call(this,e,t)},L.apply(this,arguments)}var y=function e(t,n,a){Object(o.a)(this,e),this.time="".concat(t),this.text=a,this.startTimeStamp=new Date("1970-01-01T".concat(t.replace(",","."),"Z")),this.endTimeStamp=new Date("1970-01-01T".concat(n.replace(",","."),"Z"))},E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).languageChanged=n.onLanguageChanged.bind(Object(g.a)(n)),n.onSelectFile=n.onSelectFile.bind(Object(g.a)(n)),n.state={subtitleLines:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onLanguageChanged",value:function(e){this.props.onLanguageChanged(e)}},{key:"onSelectFile",value:function(e){var t=this;if(1==e.length){var n=e[0],a=new FileReader;a.onload=function(e){for(var n,a,r=e.target.result.split(/\r\n|\n/),c="",i=[],l=0;l<r.length;l++){var o=r[l];if(null==o.match(/^\s*\d*\s*$/)){var s=o.match(L(/^(\d{2}:\d{2}:\d{2}[,|.]\d{3}).*(\d{2}:\d{2}:\d{2}[,|.]\d{3})/,{start:1,end:2}));null==s?c=null!=o.match(/^[\W|A-Z]/)?c+"\n"+o:c+" "+o:(null!=n&&i.push(new y(n,a,c)),n=s.groups.start,a=s.groups.end,c="")}}i.push(new y(n,a,c)),t.setState({subtitleLines:i})},a.readAsText(n)}}},{key:"render",value:function(){var e,t=this,n=O.map(function(e){return r.a.createElement("option",{key:e.language,value:e.language},e.display)}),a=this.state.subtitleLines.map(function(e,n){var a=e.time;if(n>0){var c=t.state.subtitleLines[n-1];e.startTimeStamp-c.endTimeStamp<1e3&&(a="")}return r.a.createElement(b,{key:e.time,time:a,text:e.text})});return 0!=this.state.subtitleLines.length&&(e=r.a.createElement(d.a,{id:"print"},function(e){return r.a.createElement("input",{type:"button",value:e})})),r.a.createElement("div",{className:"conveter_container"},r.a.createElement("div",{className:"nav_bar"},r.a.createElement("select",{onChange:function(e){return t.onLanguageChanged(e.target.value)}},n)),r.a.createElement(d.a,{id:"select_file"},function(e){return r.a.createElement("label",{className:"btn btn-outline-primary btn-sm"},r.a.createElement("input",{type:"file",accept:".srt",style:{display:"none"},onChange:function(e){return t.onSelectFile(e.target.files)}}),e)}),e,a)}}]),t}(r.a.Component),j=n(31),w=n.n(j),C=n(32),S=n.n(C),_=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"chooseDefaultLocal",value:function(){var e=window.localStorage[this.LOCAL_STORAGE_KEY_LOCAL];return e||navigator.language}},{key:"saveLocal",value:function(e){window.localStorage[this.LOCAL_STORAGE_KEY_LOCAL]=e}},{key:"chooseLocaleMessages",value:function(e){if(null==e)return n(28).default;var t;switch(e.split("-")[0]){case"zh":t=n(63).default;break;default:t=n(28).default}return t}}]),e}();_.LOCAL_STORAGE_KEY_LOCAL="_LOCAL_STORAGE_KEY_LOCAL_";var k=_,T=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(u.a)(this,Object(h.a)(t).call(this,e)),Object(d.c)([].concat(Object(l.a)(w.a),Object(l.a)(S.a))),n.onLanguageChanged=n.onLanguageChanged.bind(Object(g.a)(n));var a=k.chooseDefaultLocal(),r=k.chooseLocaleMessages(a);return n.state={locale:a,messages:r},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onLanguageChanged",value:function(e){this.setState({locale:e,messages:k.chooseLocaleMessages(e)}),k.saveLocal(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(d.b,{locale:this.state.locale,messages:this.state.messages},r.a.createElement(f.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(E,Object.assign({},t,{onLanguageChanged:e.onLanguageChanged}))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.8b5e13f6.chunk.js.map