;
!function(){function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(n,r,i){return r&&t(n.prototype,r),i&&t(n,i),n}var r,i=function(){function t(){this.ti=new e}return t.prototype.abort=function(){if(!this.ti.ii&&(this.ti.ii=!0,this.ti.ni)){var t={"type":"abort","bubbles":!1,"cancelable":!1,"target":this.ti,"currentTarget":this.ti};this.ti.ni(t)}},n(t,[{key:"signal",get:function(){return this.ti}}]),t}(),e=function(){function t(){this.ii=!1,this.ni=null}return n(t,[{key:"aborted",get:function(){return this.ii}},{key:"onabort",get:function(){return this.ni},set:function(t){this.ni=t}}]),t}();function u(t,n){for(var r=n||0,i=this.length,e=r>=0?r:Math.max(i+r,0);e<i;e++){var u=this[e];if(u===t||t!=t&&u!=u)return!0}return!1}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function f(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(){return r||(r=Promise.resolve(void 0))}var s=function(){var t=this;this.promise=new Promise((function(n,r){t.resolve=n,t.reject=r}))};function a(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,i=t.stack,e=new Error(r);for(var u in t)e[u]=t[u];return e.stack=i,e}function l(t){for(var n,r=null,i="",e=f(arguments,!0);!(n=e()).done;){var u=n.value;u instanceof Error&&!r?r=a(u):(i&&(i+=" "),i+=u)}return r?i&&(r.message=i+": "+r.message):r=new Error(i),r}function h(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}function v(t){var n=l.apply(null,arguments);setTimeout((function(){throw h(n),n}))}function d(t){var n=l.apply(null,arguments);return n.expected=!0,n}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=Object.prototype,m=p.hasOwnProperty,w=p.toString;function y(t){return"[object Object]"===w.call(t)}function g(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function O(t,n){return m.call(t,n)}var j=/^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,S=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],E={"childList":!0,"subtree":!0};function R(t,n){if(!j.test(n)||S.includes(n))throw new t('invalid custom element name "'.concat(n,'"'))}var x=function(){function t(t,n){this.t=t,this.T=n,this.L=g()}var n=t.prototype;return n.define=function(t,n,r){this.T.define(t,n,r);var i=this.L,e=i[t];e&&(e.resolve(),delete i[t])},n.get=function(t){var n=this.T.getByName(t);if(n)return n.ctor},n.whenDefined=function(t){var n=this.t;if(n.Promise,R(n.SyntaxError,t),this.T.getByName(t))return c();var r=this.L,i=r[t];return i||(i=new s,r[t]=i),i.promise},n.upgrade=function(t){this.T.upgrade(t)},t}(),T=function(){function t(t){this.t=t,this.B=g(),this.V="",this.F=null,this.N=null,this.W=[t.document]}var n=t.prototype;return n.current=function(){var t=this.F;return this.F=null,t},n.getByName=function(t){var n=this.B[t];if(n)return n},n.getByConstructor=function(t){var n=this.B;for(var r in n){var i=n[r];if(i.ctor===t)return i}},n.define=function(t,n,r){var i=this.t,e=i.Error,u=i.SyntaxError;if(r)throw new e("Extending native custom elements is not supported");if(R(u,t),this.getByName(t)||this.getByConstructor(n))throw new e('duplicate definition "'.concat(t,'"'));this.B[t]={name:t,ctor:n},this.$(t);for(var o,c=f(this.W,!0);!(o=c()).done;){var s=o.value;this.upgrade(s,t)}},n.upgrade=function(t,n){for(var r,i=!!n,e=n||this.V,u=f(this.D(t,e),!0);!(r=u()).done;){var o=r.value;i?this.G(o):this.upgradeSelf(o)}},n.upgradeSelf=function(t){var n=this.getByName(t.localName);n&&this.Z(t,n)},n.D=function(t,n){return n&&t.querySelectorAll?t.querySelectorAll(n):[]},n.Z=function(t,n){var r=n.ctor;if(!(t instanceof r)){this.F=t;try{if(new r!==t)throw new this.t.Error("Constructor illegally returned a different instance.")}catch(t){v(t)}}},n.G=function(t){var n=this.getByName(t.localName);if(n&&(t=t,this.Z(t,n),t.connectedCallback))try{t.connectedCallback()}catch(t){v(t)}},n.U=function(t){if((t=t).disconnectedCallback)try{t.disconnectedCallback()}catch(t){v(t)}},n.$=function(t){var n=this;if(this.V)this.V+=",".concat(t);else{this.V=t;var r=new this.t.MutationObserver((function(t){t&&n.K(t)}));this.N=r;for(var i,e=f(this.W,!0);!(i=e()).done;){var u=i.value;r.observe(u,E)}!function(t,n){var r,i=t.Document,e=t.Element,u=t.Node,o=t.document,f=i.prototype,c=e.prototype,s=u.prototype,a=f.createElement,l=f.importNode,h=s.appendChild,v=s.cloneNode,d=s.insertBefore,b=s.removeChild,p=s.replaceChild;f.createElement=function(t){var r=n.getByName(t);return r?new r.ctor:a.apply(this,arguments)},f.importNode=function(){var t=l.apply(this,arguments);return t&&this===o&&(n.upgradeSelf(t),n.upgrade(t)),t},s.appendChild=function(){var t=h.apply(this,arguments);return n.sync(),t},s.insertBefore=function(){var t=d.apply(this,arguments);return n.sync(),t},s.removeChild=function(){var t=b.apply(this,arguments);return n.sync(),t},s.replaceChild=function(){var t=p.apply(this,arguments);return n.sync(),t},s.cloneNode=function(){var t=v.apply(this,arguments);return t.ownerDocument===o&&(n.upgradeSelf(t),n.upgrade(t)),t};var m=c,w=Object.getOwnPropertyDescriptor(m,"innerHTML");if(w||(m=Object.getPrototypeOf(t.HTMLElement.prototype),w=Object.getOwnPropertyDescriptor(m,"innerHTML")),null!==(r=w)&&void 0!==r&&r.configurable){var y=w.set;w.set=function(t){y.call(this,t),n.upgrade(this)},Object.defineProperty(m,"innerHTML",w)}}(this.t,this)}},n.observe=function(t){this.W.push(t),this.N&&this.N.observe(t,E)},n.sync=function(){this.N&&this.K(this.N.takeRecords())},n.K=function(t){for(var n,r=f(t,!0);!(n=r()).done;){var i=n.value;if(i){for(var e,u=i.addedNodes,o=i.removedNodes,c=f(u,!0);!(e=c()).done;){var s=e.value,a=this.D(s,this.V);this.G(s);for(var l,h=f(a,!0);!(l=h()).done;){var v=l.value;this.G(v)}}for(var d,b=f(o,!0);!(d=b()).done;){var p=d.value,m=this.D(p,this.V);this.U(p);for(var w,y=f(m,!0);!(w=y()).done;){var g=w.value;this.U(g)}}}}},t}();function A(t,n){n.prototype=Object.create(t.prototype,{constructor:{configurable:!0,writable:!0,value:n}}),M(n,t)}function M(t,n){Object.setPrototypeOf?Object.setPrototypeOf(t,n):{__proto__:{"test":!0}}.test?t.__proto__=n:function(t,n){for(var r=n;null!==r&&!Object.isPrototypeOf.call(r,t);){for(var i,e=f(Object.getOwnPropertyNames(r),!0);!(i=e()).done;){var u=i.value;if(!Object.hasOwnProperty.call(t,u)){var o=Object.getOwnPropertyDescriptor(r,u);Object.defineProperty(t,u,o)}}r=Object.getPrototypeOf(r)}}(t,n)}function P(t){return t==this||this.documentElement.contains(t)}function k(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function I(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,i)}return r}function U(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?I(Object(r),!0).forEach((function(n){k(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function C(t,n){return(C=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,n){if(n&&("object"===b(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var _=Array.isArray;function H(t,n){for(var r=[],i=0,e=0;e<t.length;e++){var u=t[e];n(u,e,t)?r.push(u):(i<e&&(t[i]=u),i++)}return i<t.length&&(t.length=i),r}function z(t){return"string"==typeof t}function D(t){return 1==(null==t?void 0:t.nodeType)}var B="​​​";function F(t){return D(t)?(t=t).tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t}function J(t){return t.indexOf(B)>=0}function q(t,n){var r,i,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(n)return n;t&&-1==e.indexOf(t)&&(e+=t);for(var u=3,o=e.split("%s"),f=o.shift(),c=[f];o.length;){var s=arguments[u++],a=o.shift();f+=F(s)+a,c.push(s,a.trim())}var l=new Error(f);throw l.messageArray=H(c,(function(t){return""!==t})),null===(r=(i=self).__AMP_REPORT_ERROR)||void 0===r||r.call(i,l),l}function G(t,n,r,i,e){return _(e)?t(r,e.concat([n])):t(r,"".concat(e||i,": %s"),n),n}function W(t,n,r,i,e,u,o,f,c,s,a){return t}function Z(t){return JSON.parse(t)}function $(t){return"undefined"!=typeof TextEncoder?(new TextEncoder).encode(t):function(t){for(var n=new Uint8Array(t.length),r=0;r<t.length;r++){var i=t.charCodeAt(r);W(i<=255),n[r]=i}return n}(unescape(encodeURIComponent(t)))}function X(t){var n=!1,r=null,i=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),u=0;u<t;u++)e[u]=arguments[u];r=i.apply(self,e),n=!0,i=null}return r}}var K=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function V(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function Q(t){var n,r=g();if(!t)return r;for(;n=K.exec(t);){var i=V(n[1],n[1]),e=n[2]?V(n[2].replace(/\+/g," "),n[2]):"";r[i]=e}return r}function Y(t){var n=(t||self).location;return Q(n.originalHash||n.hash)}var tt=function(t){return self.AMP_CONFIG?self.AMP_CONFIG[t]:null},nt=("string"==typeof tt("cdnProxyRegex")?new RegExp(tt("cdnProxyRegex")):tt("cdnProxyRegex"))||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function rt(t){if(!self.document||!self.document.head)return null;if(self.location&&nt.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}var it=tt("cdnUrl")||rt("runtime-host")||"https://cdn.ampproject.org",et=tt("errorReportingUrl")||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",ut=tt("betaErrorReportingUrl")||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",ot="";function ft(t){var n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:st(t,Y(t)),esm:!1,test:!1,rtvVersion:ct(t),ssrReady:!1}}(n)}function ct(t){var n;return ot||(ot=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"01".concat("2301041800000")),ot}function st(t,n){var r=n||Y(t);return["1","actions","amp","amp4ads","amp4email"].includes(r.development)||!!t.AMP_DEV_MODE}var at=function(){},lt=function(){return"01".concat("2301041800000")},ht=function(t,n){return n.reduce((function(t,n){return"".concat(t,"&s[]=").concat(dt(n))}),"https://log.amp.dev/?v=".concat(lt(),"&id=").concat(encodeURIComponent(t)))},vt=function(){return"".concat(it,"/rtv/").concat(lt(),"/log-messages.simple.json")},dt=function(t){return encodeURIComponent(String(F(t)))},bt=function(t){return parseInt(Y(t).log,10)},pt=function(){function t(t,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.win=t,this.xt=n,this.At=this.kt(),this.Et=i,this.St=null,this.zt=X((function(){t.fetch(vt()).then((function(t){return t.json()}),at).then((function(t){t&&(r.St=t)}))})),this.It=this.assert.bind(this)}var n=t.prototype;return n.kt=function(){var t,n=this.win;return null!==(t=n.console)&&void 0!==t&&t.log&&0!=bt(n)?this.Ct():0},n.Ct=function(t){return this.xt(bt(t),ft().development)},n.qt=function(t,n,r){var i,e;if(n>this.At)return!1;var u=this.win.console,o=null!==(i=(e={},k(e,1,u.error),k(e,3,u.info),k(e,2,u.warn),e)[n])&&void 0!==i?i:u.log,f=this.Rt(r),c="[".concat(t,"]");return z(f[0])?f[0]=c+" "+f[0]:f.unshift(c),o.apply(u,f),!0},n.fine=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.qt(t,4,r)},n.info=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.qt(t,3,r)},n.warn=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.qt(t,2,r)},n.error=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!this.qt(t,1,r)){var e,u,o=this.createError.apply(this,r);o.name=t||o.name,null===(e=(u=self).__AMP_REPORT_ERROR)||void 0===e||e.call(u,o)}},n.expectedError=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var e,u;this.qt(t,1,r)||null===(e=(u=self).__AMP_REPORT_ERROR)||void 0===e||e.call(u,this.createExpectedError.apply(this,r))},n.createError=function(t){return this.Pt(l.apply(null,arguments))},n.createExpectedError=function(t){return this.Pt(d.apply(null,arguments))},n.Pt=function(t){return t=a(t),this.Et?t.message?-1==t.message.indexOf(this.Et)&&(t.message+=this.Et):t.message=this.Et:J(t.message)&&(t.message=t.message.replace(B,"")),t},n.Rt=function(t){return _(t[0])?this.Ut(t[0]):t},n.Ut=function(t){var n,r=t.shift();return ft(this.win).development&&this.zt(),null!==(n=this.St)&&void 0!==n&&n[r]?[this.St[r]].concat(t):["More info at ".concat(ht(r,t))]},n.assert=function(t,n,r){return _(n)?this.assert.apply(this,[t].concat(this.Ut(n))):q.apply(null,[this.Et].concat(Array.prototype.slice.call(arguments)))},n.assertElement=function(t,n){return function(t,n,r){return G(t,n,D(n),"Element expected",r)}(this.It,t,n)},n.assertString=function(t,n){return function(t,n,r){return G(t,n,z(n),"String expected",r)}(this.It,t,n)},n.assertNumber=function(t,n){return function(t,n,r){return G(t,n,"number"==typeof n,"Number expected",r)}(this.It,t,n)},n.assertArray=function(t,n){return function(t,n,r){return G(t,n,_(n),"Array expected",r)}(this.It,t,n)},n.assertBoolean=function(t,n){return function(t,n,r){return G(t,n,!!n===n,"Boolean expected",r)}(this.It,t,n)},t}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var mt=self.__AMP_LOG,wt=null;function yt(t,n){if(!wt)throw new Error("failed to call initLogConstructor");return new wt(self,t,n)}function gt(t){return mt.user||(mt.user=Ot(B)),function(t,n){return n&&n.ownerDocument.defaultView!=t}(mt.user.win,t)?mt.userForEmbed||(mt.userForEmbed=Ot("​​​​")):mt.user}function Ot(t){return yt((function(t,n){return n||t>=1?4:2}),t)}function jt(){return mt.dev||(mt.dev=yt((function(t){return t>=3?4:t>=2?3:0})))}function St(t,n,r,i,e,u,o,f,c,s,a){return t}var Et=["GET","POST"];function Rt(t,n){var r=new XMLHttpRequest;if(!("withCredentials"in r))throw jt().createExpectedError("CORS is not supported");return r.open(t,n,!0),r}var xt=function(){function t(t){this.ri=t,this.status=this.ri.status,this.statusText=this.ri.statusText,this.ok=this.status>=200&&this.status<300,this.headers=new Mt(t),this.bodyUsed=!1,this.body=null,this.url=t.responseURL}var n=t.prototype;return n.clone=function(){return W(!this.bodyUsed),new t(this.ri)},n.ei=function(){return W(!this.bodyUsed),this.bodyUsed=!0,Promise.resolve(this.ri.responseText)},n.text=function(){return this.ei()},n.json=function(){return this.ei().then(Z)},n.arrayBuffer=function(){return this.ei().then($)},t}();function Tt(t){return void 0===t?"GET":(t=t.toUpperCase(),W(Et.includes(t)),t)}var At,Mt=function(){function t(t){this.ri=t}var n=t.prototype;return n.get=function(t){return this.ri.getResponseHeader(t)},n.has=function(t){return null!=this.ri.getResponseHeader(t)},t}(),Pt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&C(t,n)}(e,t);var n,r,i=(n=e,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=L(n);if(r){var e=L(this).constructor;t=Reflect.construct(i,arguments,e)}else t=i.apply(this,arguments);return N(this,t)});function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=g(),e=U({status:200,statusText:"OK",responseText:t?String(t):"",getResponseHeader:function(t){var n=String(t).toLowerCase();return O(r,n)?r[n]:null}},n);if(e.status=void 0===n.status?200:parseInt(n.status,10),_(n.headers))n.headers.forEach((function(t){var n=t[0],i=t[1];r[String(n).toLowerCase()]=String(i)}));else if(y(n.headers))for(var u in n.headers)r[String(u).toLowerCase()]=String(n.headers[u]);return n.statusText&&(e.statusText=String(n.statusText)),i.call(this,e)}return e}(xt);function kt(t){if(Node.prototype.getRootNode)return t.getRootNode();var n,r;for(n=t;n.parentNode&&(!(r=n)||"I-AMPHTML-SHADOW-ROOT"!=r.tagName&&(11!=r.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(r)));n=n.parentNode);return n}function It(){return function(t){var n=t.isConnected;if(void 0!==n)return n;for(var r=t;(r=kt(r)).host;)r=r.host;return r.nodeType===Node.DOCUMENT_NODE}(this)?At.call(this):{left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}}var Ut=function(){function t(n,r){this.kn=n,this.si=U({root:null,rootMargin:"0px 0px 0px 0px"},r),this.oi=[],this.ui=null,t._upgraders.push(this.hi.bind(this))}var r=t.prototype;return r.disconnect=function(){this.ui?this.ui.disconnect():this.oi.length=0},r.takeRecords=function(){return this.ui?this.ui.takeRecords():[]},r.observe=function(t){this.ui?this.ui.observe(t):-1==this.oi.indexOf(t)&&this.oi.push(t)},r.unobserve=function(t){if(this.ui)this.ui.unobserve(t);else{var n=this.oi.indexOf(t);-1!=n&&this.oi.splice(n,1)}},r.hi=function(t){var n=new t(this.kn,this.si);this.ui=n;for(var r,i=f(this.oi,!0);!(r=i()).done;){var e=r.value;n.observe(e)}this.oi.length=0},n(t,[{key:"root",get:function(){return this.ui?this.ui.root:this.si.root||null}},{key:"rootMargin",get:function(){return this.ui?this.ui.rootMargin:this.si.rootMargin}},{key:"thresholds",get:function(){return this.ui?this.ui.thresholds:[].concat(this.si.threshold||0)}}]),t}();function Ct(t){return(t=Number(t))?t>0?1:-1:t}Ut._upgraders=[];var Lt=Object.prototype.hasOwnProperty;function Nt(t,n){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(t),i=1;i<arguments.length;i++){var e=arguments[i];if(null!=e)for(var u in e)Lt.call(e,u)&&(r[u]=e[u])}return r}function _t(t){return Object.keys(t).map((function(n){return t[n]}))}var Ht,zt,Dt=function(){function t(n){this.kn=n,this.oi=[],this.ui=null,t._upgraders.push(this.hi.bind(this))}var n=t.prototype;return n.disconnect=function(){this.ui?this.ui.disconnect():this.oi.length=0},n.observe=function(t){this.ui?this.ui.observe(t):-1==this.oi.indexOf(t)&&this.oi.push(t)},n.unobserve=function(t){if(this.ui)this.ui.unobserve(t);else{var n=this.oi.indexOf(t);-1!=n&&this.oi.splice(n,1)}},n.hi=function(t){var n=new t(this.kn);this.ui=n;for(var r,i=f(this.oi,!0);!(r=i()).done;){var e=r.value;n.observe(e)}this.oi.length=0},t}();function Bt(t,n){var r=n>0?0|n:0;return this.substr(r,t.length)===t}Dt._upgraders=[],(Ht=self).fetch||(Object.defineProperty(Ht,"fetch",{value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,i){var e=Tt(n.method||"GET"),u=Rt(e,t);"include"==n.credentials&&(u.withCredentials=!0),"document"!==n.responseType&&"text"!==n.responseType||(u.responseType=n.responseType),n.headers&&Object.keys(n.headers).forEach((function(t){u.setRequestHeader(t,n.headers[t])})),u.onreadystatechange=function(){if(!(u.readyState<2))return u.status<100||u.status>599?(u.onreadystatechange=null,void i(gt().createExpectedError("Unknown HTTP status ".concat(u.status)))):void(4==u.readyState&&r(new xt(u)))},u.onerror=function(){i(gt().createExpectedError("Network failure"))},u.onabort=function(){i(gt().createExpectedError("Request aborted"))},"POST"==e?u.send(n.body):u.send()}))},writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(Ht,"Response",{value:Pt,writable:!0,enumerable:!1,configurable:!0})),function(t){t.Math.sign||t.Object.defineProperty(t.Math,"sign",{enumerable:!1,configurable:!0,writable:!0,value:Ct})}(self),function(t){t.Object.assign||t.Object.defineProperty(t.Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:Nt})}(self),function(t){t.Object.values||t.Object.defineProperty(t.Object,"values",{configurable:!0,writable:!0,value:_t})}(self),function(t){t.Array.prototype.includes||t.Object.defineProperty(t.Array.prototype,"includes",{enumerable:!1,configurable:!0,writable:!0,value:u})}(self),function(t){var n=t.Map,r=new n;if(r.set(0,0)!==r){var i=r.set;t.Object.defineProperty(n.prototype,"set",{enumerable:!1,configurable:!0,writable:!0,value:function(){return i.apply(this,arguments),this}})}}(self),function(t){var n=t.WeakMap,r=new n;if(r.set({},0)!==r){var i=r.set;t.Object.defineProperty(n.prototype,"set",{enumerable:!1,configurable:!0,writable:!0,value:function(){return i.apply(this,arguments),this}})}}(self),function(t){var n=t.Set,r=new n([1]);if(r.size<1&&(t.Set=function(t){var r,i=new n;if(t)for(var e=(r=t)?Array.prototype.slice.call(r):[],u=0;u<e.length;u++)i.add(e[u]);return i}),r.add(0)!==r){var i=r.add;t.Object.defineProperty(n.prototype,"add",{enumerable:!1,configurable:!0,writable:!0,value:function(){return i.apply(this,arguments),this}})}}(self),function(t){t.String.prototype.startsWith||t.Object.defineProperty(t.String.prototype,"startsWith",{enumerable:!1,configurable:!0,writable:!0,value:Bt})}(self),self.document&&(function(t){var n=t.HTMLDocument||t.Document;n&&!n.prototype.contains&&t.Object.defineProperty(n.prototype,"contains",{enumerable:!1,configurable:!0,writable:!0,value:P})}(self),function(t){(function(t){if(!t.document)return!1;try{return 0!==t.document.createElement("div").getBoundingClientRect().top}catch(t){return!0}})(t)&&(At=Element.prototype.getBoundingClientRect,t.Object.defineProperty(t.Element.prototype,"getBoundingClientRect",{value:It}))}(self),function(t,n){var r=t.document,i=function(t){var n=t.customElements;return!!(n&&n.define&&n.get&&n.whenDefined)}(t);if(!(!r||i&&function(t){return-1===t.HTMLElement.toString().indexOf("[native code]")}(t))){var e=!0,u=!1;if(n&&i)try{var o=t.Reflect,f=Object.create(n.prototype);Function.call.call(n,f),u=!(null==o||!o.construct)}catch(t){e=!1}u?function(t){var n=t.HTMLElement,r=t.Reflect;function i(){var t=this.constructor;return r.construct(n,[],t)}A(n,i),t.HTMLElementOrig=t.HTMLElement,t.HTMLElement=i}(t):e&&function(t){var n=t.Element,r=t.HTMLElement,i=t.document,e=i.createElement,u=new T(t),o=new x(t,u);Object.defineProperty(t,"customElements",{enumerable:!0,configurable:!0,value:o});var f=n.prototype,c=f.attachShadow,s=f.createShadowRoot;function a(){var t=this.constructor,n=u.current();if(!n){var r=u.getByConstructor(t);n=e.call(i,r.name)}return M(n,t.prototype),n}c&&(f.attachShadow=function(t){var n=c.apply(this,arguments);return u.observe(n),n},f.attachShadow.toString=function(){return c.toString()}),s&&(f.createShadowRoot=function(){var t=s.apply(this,arguments);return u.observe(t),t},f.createShadowRoot.toString=function(){return s.toString()}),A(r,a),t.HTMLElementOrig=t.HTMLElement,t.HTMLElement=a,a.call||(a.apply=t.Function.apply,a.bind=t.Function.bind,a.call=t.Function.call)}(t)}}(self,function(){return function(){}}()),function(t){(function(t){return!t.IntersectionObserver||!t.IntersectionObserverEntry||!!t.IntersectionObserver._stub||!function(t){try{return new t.IntersectionObserver((function(){}),{root:t.document}),!0}catch(t){return!1}}(t)||function(t){return/apple/i.test(t.navigator.vendor)}(t)})(t)&&function(t){if(!t.IntersectionObserver)return t.IntersectionObserver=Ut,void(t.IntersectionObserver._stub=Ut);var n=t.IntersectionObserver;t.IntersectionObserver=function(t,n){return function(r,i){var e;return 9===(null==i||null===(e=i.root)||void 0===e?void 0:e.nodeType)?new n(r,i):new t(r,i)}}(t.IntersectionObserver,Ut),t.IntersectionObserver._stub=Ut,t.IntersectionObserver._native=n}(t),function(t){t.IntersectionObserverEntry&&!("isIntersecting"in t.IntersectionObserverEntry.prototype)&&Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{enumerable:!0,configurable:!0,get:function(){return this.intersectionRatio>0}})}(t)}(self),function(t){(function(t){return!t.ResizeObserver||!!t.ResizeObserver._stub})(t)&&function(t){t.ResizeObserver||(t.ResizeObserver=Dt,t.ResizeObserver._stub=Dt)}(t)}(self),function(t){t.AbortController||(Object.defineProperty(t,"AbortController",{configurable:!0,enumerable:!1,writable:!0,value:i}),Object.defineProperty(t,"AbortSignal",{configurable:!0,enumerable:!1,writable:!0,value:e}))}(self));var Ft=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=g()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,r=this.Kt+1;for(var i in n){var e=n[i].access;e<r&&(r=e,t=i)}void 0!==t&&(delete n[t],this.Wt--)}},t}();function Jt(t,n){return Gt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function qt(t){return t.nodeType?function(t){return Jt(t,"ampdoc")}((n=t,(n.ownerDocument||n).defaultView)).getAmpDoc(t):t;var n}function Gt(t,n){St(function(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}(t,n));var r=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return r.obj||(St(r.ctor),St(r.context),r.obj=new r.ctor(r.context),St(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}var Wt,Zt;function $t(t,n){return Wt||(Wt=self.document.createElement("a"),Zt=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Ft(100))),function(t,n,r){if(r&&r.has(n))return r.get(n);t.href=n,t.protocol||(t.href=t.href);var i,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),i=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=i;var u=e;return r&&r.put(n,u),u}(Wt,t,n?null:Zt)}new Set(["c","v","a","ad"]);var Xt,Kt=function(){function t(t){this.win=t}var n=t.prototype;return n.start=function(){this.el(),this.ev()},n.ev=function(){var t,n,r,i=Q(this.win.location.search);if(this.win.opener&&this.win.opener!=this.win)return this.jv().then(this.Uv.bind(this),this.Cv.bind(this));if(i.url){var e=i.url;return/^https?\%/i.test(e)&&(e=V(e)),this.win.location.replace((n=/^https?\:/i.test(t=e),'URL must start with "http://" or "https://". Invalid value: %s',r=t,gt().assert(n,'URL must start with "http://" or "https://". Invalid value: %s',r,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),$t(t).href)),c()}var u=new Error("No opener or return location available");return this.Cv(u),Promise.reject(u)},n.el=function(){var t=this.win.document,n=t.createElement("style");n.textContent=this.Lv(),t.head.appendChild(n)},n.Lv=function(){for(var t=Q(this.win.location.search),n=this.win,r=n.document,i=n.navigator,e=[t.hl,i.language,i.userLanguage,"en-US"],u=0;u<e.length;u++){var o=e[u];if(o){var f=Vt(o);if(f&&r.querySelector(f))return f+" {display: block}"}}return""},n.jv=function(){var t=this,n=this.win.location.hash,r=function(){};return new Promise((function(i,e){var u,o=t.win.opener;o?(u=t.win,r=function(t,n,r,e){var u=t,o=function(t){t.data&&"amp"==t.data.sentinel&&"result-ack"==t.data.type&&i()},f=function(t){try{return o(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}},c=function(){if(void 0!==zt)return zt;zt=!1;try{var t={get capture(){return zt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return zt}();return u.addEventListener(n,f,!!c&&e),function(){null==u||u.removeEventListener(n,f,!!c&&e),o=null,u=null,f=null}}(u,"message",0,void 0),o.postMessage({sentinel:"amp",type:"result",result:n},"*"),t.win.setTimeout((function(){e(new Error("Timed out"))}),5e3)):e(new Error("Opener not available"))})).then((function(){r()}),(function(t){throw r(),t}))},n.Uv=function(){var t=this;try{this.win.close()}catch(t){}var n=Date.now()+6e4,r=this.win.setInterval((function(){if(t.win.closed||Date.now()>n)clearInterval(r);else try{t.win.close()}catch(t){}}),500);this.win.setTimeout((function(){t.Cv(new Error("Failed to close the dialog"))}),3e3)},n.Cv=function(t){var n=this;this.win.console&&this.win.console.log&&(this.win.console.error||this.win.console.log).call(this.win.console,"Postback failed: ",t);var r=this.win.document;r.documentElement.classList.toggle("amp-error",!0),r.documentElement.setAttribute("data-error","postback"),r.getElementById("closeButton").onclick=function(){try{n.win.close()}catch(t){}n.win.setTimeout((function(){n.win.closed||r.documentElement.setAttribute("data-error","close")}),1e3)}},t}();function Vt(t){if(!t)return null;for(var n=t.split("-"),r="",i="",e=0;e<n.length;e++)e>0&&(r+=", ",i+="-"),i=(i+=0==e?n[e].toLowerCase():n[e].toUpperCase()).replace(/[^a-zA-Z\-]/g,""),r+='[lang="'.concat(i,'"]');return r}var Qt=["Webkit","webkit","Moz","moz","ms","O","o"];function Yt(t,n,r,i,e){var u=function(t,n,r){if(n.startsWith("--"))return n;Xt||(Xt=g());var i=Xt[n];if(!i||r){if(i=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),u=function(t,n){for(var r=0;r<Qt.length;r++){var i=Qt[r]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[u]&&(i=u)}r||(Xt[n]=i)}return i}(t.style,n,e);if(u){var o,f=i?r+i:r;t.style.setProperty((o=u.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),Qt.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),f)}}var tn=!1,nn=self.__AMP_ERRORS||[];self.__AMP_ERRORS=nn;var rn,en,un,on,fn,cn=function(t){return(n=0,r=function(){var t=Math.pow(1.5,n++);return 1e3*(t+function(t,n){var r=t*(n=n||.3)*Math.random();return Math.random()>.5&&(r*=-1),r}(t))},cn=function(t){return setTimeout(t,r())})(t);var n,r};function sn(t,n,r,i,e){var u,o=this;if(!this||!this.document||e&&e.expected||(St((u=this.document).defaultView),tn||(tn=!0,function(t){!function(t,n){for(var r in n)Yt(t,r,n[r])}(t.body,{opacity:1,visibility:"visible","animation":"none"})}(u))),!ft().development){var f=!1;try{f=function(t){if(!t.document)return!1;for(var n=t.document.querySelectorAll("script[src]"),r=0;r<n.length;r++)if(i=n[r].src.toLowerCase(),!nt.test(function(t){return"string"==typeof t?$t(t):t}(i).origin))return!0;var i;return!1}(self)}catch(t){}if(!(f&&Math.random()>.01)){var s=function(t,n,r,i,e,u){t=function(t,n){return n&&(t=n.message?n.message:String(n)),t||(t="Unknown error"),t}(t,e);var o=!(!e||!e.expected);if(!/_reported_/.test(t)&&"CANCELLED"!=t){var f=!(self&&self.window),c=Math.random();if(!((function(t){return-1!=t.indexOf("Failed to load:")}(t)||"Script error."==t||f)&&(o=!0,c>.001))){var s=J(t);if(!(s&&c>.1)){var a=Object.create(null);a.v=ft().rtvVersion,a.noAmp=u?"1":"0",a.m=t.replace(B,""),a.a=s?"1":"0",a.ex=o?"1":"0",a.dw=f?"1":"0";var l,h,v="1p";if(self.context&&self.context.location?(a["3p"]="1",v="3p"):ft().runtime&&(v=ft().runtime),a.rt=v,"inabox"===v&&(a.adid=ft().a4aId),a.ca=null!==(h=self.AMP_CONFIG)&&void 0!==h&&h.canary?"1":"0",a.bt=(null===(l=self.AMP_CONFIG)||void 0===l?void 0:l.type)||"unknown",self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(a.or=self.location.ancestorOrigins[0]),self.viewerState&&(a.vs=self.viewerState),self.parent&&self.parent!=self&&(a.iem="1"),self.AMP&&self.AMP.viewer){var d=self.AMP.viewer.getResolvedViewerUrl(),b=self.AMP.viewer.maybeGetMessagingOrigin();d&&(a.rvu=d),b&&(a.mso=b)}var p,m,w,y=[],g=self.__AMP__EXPERIMENT_TOGGLES||null;for(var O in g){var j=g[O];y.push("".concat(O,"=").concat(j?"1":"0"))}return a.exps=y.join(","),e?(a.el=(null===(p=e.associatedElement)||void 0===p?void 0:p.tagName)||"u",e.args&&(a.args=JSON.stringify(e.args)),s||e.ignoreStack||!e.stack||(a.s=e.stack),e.message&&(e.message+=" _reported_")):(a.f=n||"",a.l=r||"",a.c=i||""),a.r=self.document?self.document.referrer:"",a.ae=nn.join(","),a.fr=self.location.originalHash||self.location.hash,"production"===a.bt&&(a.pt="1"),w=t,(m=nn).length>=25&&m.splice(0,m.length-25+1),m.push(w),a}}}}(t,n,r,i,e,f);s&&cn((function(){try{return function(t,n){return n.pt&&Math.random()<.9?c():function(t,n){var r=function(t){return Jt(t,"ampdoc")}(t);if(!r.isSingleDoc())return Promise.resolve(!1);var i=r.getSingleDoc();if(!i.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var e,u,o,f=(e="viewer",Gt((u=qt(i),(o=qt(u)).isSingleDoc()?o.win:o),e));return f.hasCapability("errorReporter")?f.isTrustedViewer().then((function(t){return!!t&&(f.sendMessage("error",{"m":(r=n).m,"a":r.a,"s":r.s,"el":r.el,"ex":r.ex,"v":r.v,"pt":r.pt}),!0);var r})):Promise.resolve(!1)}(t,n).then((function(t){if(!t){var r=new XMLHttpRequest;r.open("POST",Math.random()<.1?ut:et,!0),r.send(JSON.stringify(n))}}))}(o,s).catch((function(){}))}catch(t){}}))}}}window,tn=!0,wt=pt,jt(),gt(),rn=function(t,n){try{if(t)if(void 0!==t.message)t=a(t);else{var r=t;(t=new Error(function(t){try{return JSON.stringify(t)}catch(n){return String(t)}}(r))).origError=r}else t=new Error("Unknown error");if(t.reported)return t;if(t.reported=!0,t.messageArray){var i=function(t,n){for(var r=0;r<t.length;r++)if(null==(i=t[r])?void 0:i.tagName)return r;var i;return-1}(t.messageArray);i>-1&&(t.associatedElement=t.messageArray[i])}var e=n||t.associatedElement;if(e&&e.classList&&(e.classList.add("i-amphtml-error"),ft().development&&(e.classList.add("i-amphtml-element-error"),e.setAttribute("error-message",t.message))),self.console&&(J(t.message)||!t.expected)){var u=console.error||console.log;t.messageArray?u.apply(console,t.messageArray):e?u.call(console,t.message,e):u.call(console,t.message)}e&&e.dispatchCustomEventForTesting&&e.dispatchCustomEventForTesting("amp:error",t.message),sn.call(self,void 0,void 0,void 0,void 0,t)}catch(t){setTimeout((function(){throw t}))}return t},self.__AMP_REPORT_ERROR=rn,en=document,un=function(t){return"loading"!=t.readyState&&"uninitialized"!=t.readyState},on=function(){new Kt(window).start()},(fn=un(en))?on():en.addEventListener("readystatechange",(function t(){un(en)&&(fn||(fn=!0,on()),en.removeEventListener("readystatechange",t))}))}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=amp-login-done-0.1.js.map