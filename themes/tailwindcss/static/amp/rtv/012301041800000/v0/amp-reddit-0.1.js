;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-reddit",ev:"0.1",l:!0,f:function(r,t){!function(){function t(r,n){return(t=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r})(r,n)}function n(r){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function i(r,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}var o=Array.isArray;function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function a(r,t){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(n)return(n=n.call(r)).next.bind(n);if(Array.isArray(r)||(n=function(r,t){if(r){if("string"==typeof r)return u(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){n&&(r=n);var e=0;return function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype;function c(r){var t=Object.create(null);return r&&Object.assign(t,r),t}function l(r,t,n,e,i,o,u,a,f,c,l){return r}function s(r){var t,n=parseFloat(r);return"number"==typeof(t=n)&&isFinite(t)?n:void 0}function v(r){return JSON.parse(r)}function d(r,t){try{return v(r)}catch(r){return null==t||t(r),null}}f.hasOwnProperty,f.toString;var m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(r)}catch(r){return t}}function h(r){var t,n=c();if(!r)return n;for(;t=m.exec(r);){var e=p(t[1],t[1]),i=t[2]?p(t[2].replace(/\+/g," "),t[2]):"";n[e]=i}return n}function b(r){var t=(r||self).location;return h(t.originalHash||t.hash)}var y="";function w(r){var t=r||self;return t.__AMP_MODE?t.__AMP_MODE:t.__AMP_MODE=function(r){return{localDev:!1,development:j(r,b(r)),esm:!1,test:!1,rtvVersion:g(r),ssrReady:!1}}(t)}function g(r){var t;return y||(y=(null===(t=r.AMP_CONFIG)||void 0===t?void 0:t.v)||"01".concat("2301041800000")),y}function j(r,t){var n=t||b(r);return["1","actions","amp","amp4ads","amp4email"].includes(n.development)||!!r.AMP_DEV_MODE}function O(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function S(r){var t=Object.getOwnPropertyDescriptor(r,"message");if(null!=t&&t.writable)return r;var n=r.message,e=r.stack,i=new Error(n);for(var o in r)i[o]=r[o];return i.stack=e,i}function E(r){for(var t,n=null,e="",i=a(arguments,!0);!(t=i()).done;){var o=t.value;o instanceof Error&&!n?n=S(o):(e&&(e+=" "),e+=o)}return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function x(r){var t,n;null===(t=(n=self).__AMP_REPORT_ERROR)||void 0===t||t.call(n,r)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var R=self.__AMP_LOG;function I(r,t){throw new Error("failed to call initLogConstructor")}function A(r){return R.user||(R.user=T()),function(r,t){return t&&t.ownerDocument.defaultView!=r}(R.user.win,r)?R.userForEmbed||(R.userForEmbed=T()):R.user}function T(r){return I()}function F(){return R.dev||(R.dev=I())}function M(r,t,n,e,i,o,u,a,f,c,l){return r}function N(r,t,n,e,i,o,u,a,f,c,l){return A().assert(r,t,n,e,i,o,u,a,f,c,l)}function k(r,t){return _(r=function(r){return r.__AMP_TOP||(r.__AMP_TOP=r)}(r),t)}function P(r,t){return _((n=U(r),(e=U(n)).isSingleDoc()?e.win:e),t);var n,e}function U(r){return r.nodeType?(n=r,t=(n.ownerDocument||n).defaultView,k(t,"ampdoc")).getAmpDoc(r):r;var t,n}function _(r,t){M(function(r,t){var n=r.__AMP_SERVICES&&r.__AMP_SERVICES[t];return!(!n||!n.ctor)}(r,t));var n=function(r){var t=r.__AMP_SERVICES;return t||(t=r.__AMP_SERVICES={}),t}(r)[t];return n.obj||(M(n.ctor),M(n.context),n.obj=new n.ctor(n.context),M(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}var q,D=["Webkit","webkit","Moz","moz","ms","O","o"];function G(r,t,n,e,i){var o=function(r,t,n){if(t.startsWith("--"))return t;q||(q=c());var e=q[t];if(!e||n){if(e=t,void 0===r[t]){var i=function(r){return r.charAt(0).toUpperCase()+r.slice(1)}(t),o=function(r,t){for(var n=0;n<D.length;n++){var e=D[n]+t;if(void 0!==r[e])return e}return""}(r,i);void 0!==r[o]&&(e=o)}n||(q[t]=e)}return e}(r.style,t,i);if(o){var u,a=e?n+e:n;r.style.setProperty((u=o.replace(/[A-Z]/g,(function(r){return"-"+r.toLowerCase()})),D.some((function(r){return u.startsWith(r+"-")}))?"-".concat(u):u),a)}}var J=function(){function r(){}return r.generate=function(r){return function(r){for(var t=r.length,n=5381,e=0;e<t;e++)n=33*n^r.charCodeAt(e);return String(n>>>0)}(function(r){for(var t=[],n=0;1==(null==(o=r)?void 0:o.nodeType)&&n<25;){var e="";r.id&&(e="/".concat(r.id));var i=r.nodeName.toLowerCase();t.push("".concat(i).concat(e).concat(L(r))),n++,r=r.parentElement}var o;return t.join()}(r))},r}();function L(r){for(var t=r.nodeName,n=0,e=0,i=r.previousElementSibling;i&&e<25&&n<100;)i.nodeName==t&&e++,n++,i=i.previousElementSibling;return e<25&&n<100?".".concat(e):""}function V(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}function C(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){O(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}var z="__AMP__EXPERIMENT_TOGGLES";function B(r){var t,n,e,i,u;if(r[z])return r[z];r[z]=c();var f=r[z];l(f);var s=C(C({},null!==(t=r.AMP_CONFIG)&&void 0!==t?t:{}),null!==(n=r.AMP_EXP)&&void 0!==n?n:v((null===(e=r.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var d in s){var m=s[d];"number"==typeof m&&m>=0&&m<=1&&(f[d]=Math.random()<m)}var p=null===(i=r.AMP_CONFIG)||void 0===i?void 0:i["allow-doc-opt-in"];if(o(p)&&p.length){var b=r.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(b)for(var y,w,g=a((null===(y=b.getAttribute("content"))||void 0===y?void 0:y.split(","))||[],!0);!(w=g()).done;){var j=w.value;p.includes(j)&&(f[j]=!0)}}Object.assign(f,function(r){var t,n="";try{var e;"localStorage"in r&&(n=null!==(e=r.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(r){F().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var i,o=(null===(t=n)||void 0===t?void 0:t.split(/\s*,\s*/g))||[],u=c(),f=a(o,!0);!(i=f()).done;){var l=i.value;l&&("-"==l[0]?u[l.substr(1)]=!1:u[l]=!0)}return u}(r));var O=null===(u=r.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(o(O)&&O.length)for(var S,E=h(r.location.originalHash||r.location.hash),x=a(O,!0);!(S=x()).done;){var R=S.value,I=E["e-".concat(R)];"1"==I&&(f[R]=!0),"0"==I&&(f[R]=!1)}return f}var X,H,W=function(){return self.AMP.config.urls}(),Z=function(){function r(r){this.Lt=r,this.Wt=0,this.Kt=0,this.Qt=c()}var t=r.prototype;return t.has=function(r){return!!this.Qt[r]},t.get=function(r){var t=this.Qt[r];if(t)return t.access=++this.Kt,t.payload},t.put=function(r,t){this.has(r)||this.Wt++,this.Qt[r]={payload:t,access:this.Kt},this.Xt()},t.Xt=function(){if(!(this.Wt<=this.Lt)){var r,t=this.Qt,n=this.Kt+1;for(var e in t){var i=t[e].access;i<n&&(n=i,r=e)}void 0!==r&&(delete t[r],this.Wt--)}},r}();function $(r,t){return X||(X=self.document.createElement("a"),H=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Z(100))),function(r,t,n){if(n&&n.has(t))return n.get(t);r.href=t,r.protocol||(r.href=r.href);var e,i={href:r.href,protocol:r.protocol,host:r.host,hostname:r.hostname,port:"0"==r.port?"":r.port,pathname:r.pathname,search:r.search,hash:r.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),e=r.origin&&"null"!=r.origin?r.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=e;var o=i;return n&&n.put(t,o),o}(X,r,t?null:H)}function K(r){return"https:"==(r=function(r){return"string"==typeof r?$(r):r}(r)).protocol||"localhost"==r.hostname||"127.0.0.1"==r.hostname||(n=".localhost",(e=(t=r.hostname).length-n.length)>=0&&t.indexOf(n,e)==e);var t,n,e}new Set(["c","v","a","ad"]);var Q=function(){return self.AMP.config.urls}(),Y={};function rr(r,t,n,e){var i=n||t.getAttribute("type");N(i,"Attribute type required for <amp-ad>: %s",t);var o=function(r){for(var t=0,n=r;n&&n!=n.parent;n=n.parent)t++;return String(t)+"-"+er(r)}(r),u={};return function(r,t){var n=r.dataset;for(var e in n)e.startsWith("vars")||(t[e]=n[e]);var i=r.getAttribute("json");if(i){var o=d(i);if(void 0===o)throw A().createError("Error parsing JSON in json attribute in element %s",r);for(var u in o)t[u]=o[u]}}(t,u),u=function(r,t,n,e){var i=Date.now(),o=t.getAttribute("width"),u=t.getAttribute("height");(e=e||{}).width=s(o),e.height=s(u),t.getAttribute("title")&&(e.title=t.getAttribute("title"));var a=r.location.href;"about:srcdoc"==a&&(a=r.parent.location.href);var f,c,l,v,d=U(t),m=P(t,"documentInfo").get(),p=(v=t,P(v,"viewer")).getUnconfirmedReferrerUrl(),h=function(r){for(var t=r.ownerDocument.body,n=0,e=0,i=r;i&&i!=t;i=i.offsetParent)n+=i.offsetLeft,e+=i.offsetTop;var o=r.offsetHeight;return function(r,t,n,e){return{left:r,top:t,width:n,height:e,bottom:t+e,right:r+n,x:r,y:t}}(n,e,r.offsetWidth,o)}(t);e._context={"ampcontextVersion":"2301041800000","ampcontextFilepath":"".concat(W.thirdParty,"/").concat("2301041800000","/ampcontext-v0.js"),"sourceUrl":m.sourceUrl,"referrer":p,"canonicalUrl":m.canonicalUrl,"pageViewId":m.pageViewId,"location":{"href":a},"startTime":i,"tagName":t.tagName,"mode":{localDev:!1,development:w(l).development,esm:w(l).esm,test:!1,rtvVersion:w(l).rtvVersion},"canary":(f=r,!(null===(c=f.AMP_CONFIG)||void 0===c||!c.canary)),"hidden":!d.isVisible(),"initialLayoutRect":h?{"left":h.left,"top":h.top,"width":h.width,"height":h.height}:null,"domFingerprint":J.generate(t),"experimentToggles":B(r),"sentinel":n};var b=t.getAttribute("src");return b&&(e.src=b),e}(r,t,o,u),u.type=i,Object.assign(u._context,e),u}function tr(r){return"".concat(Q.thirdParty,"/").concat("2301041800000","/vendor/").concat(r).concat(".js")}function nr(r,t,n){return function(r,t,n){var e=t.getMetaByName("amp-3p-iframe-src");if(!e)return null;var i=function(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return N(null!=r,"%s %s must be available",t,n),N(K(r)||/^\/\//.test(r),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',t,n,r),r}(e,'meta[name="amp-3p-iframe-src"]');N(-1==i.indexOf("?"),"3p iframe url must not include query string %s in element %s.",i,e);var o=$(i);return N("localhost"==o.hostname&&!n||o.origin!=$(r.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",i,o.origin,e),"".concat(i,"?").concat("2301041800000")}(r,t,n)||function(r,t){return r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+er(r),"https://"+r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(Q.thirdPartyFrameHost,"/").concat("2301041800000","/")+"".concat("frame",".html")}(r)}function er(r){var t;if(r.crypto&&r.crypto.getRandomValues){var n=new Uint32Array(2);r.crypto.getRandomValues(n),t=String(n[0])+n[1]}else t=String(r.Math.random()).substr(2)+"0";return t}function ir(r){if(r.sandbox&&r.sandbox.supports){for(var t=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],n=0;n<t.length;n++){var e=t[n];if(!r.sandbox.supports(e))return void F().info("3p-frame","Iframe doesn't support %s",e)}r.sandbox=t.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}}function or(r){return"string"==typeof r&&r.startsWith("amp-")&&-1!=r.indexOf("{")}function ur(r){return r.data}var ar="unlisten";function fr(r,t,n){var e=function(r,t){var n=r.listeningFors;return!n&&t&&(n=r.listeningFors=Object.create(null)),n||null}(r,n);if(!e)return e;var i=e[t];return!i&&n&&(i=e[t]=[]),i||null}function cr(r,t){for(var n=t;n&&n!=n.parent;n=n.parent)if(n==r)return!0;return!1}function lr(r){for(var t={"sentinel":ar},n=r.length-1;n>=0;n--){var e=r[n];if(!e.frame.contentWindow){r.splice(n,1);var i=e.events;for(var o in i)i[o].splice(0,1/0).forEach((function(r){r(t)}))}}}var sr=function(r){!function(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&t(r,n)}(a,r);var e,o,u=(e=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,t=n(e);if(o){var u=n(this).constructor;r=Reflect.construct(t,arguments,u)}else r=t.apply(this,arguments);return i(this,r)});function a(){return u.apply(this,arguments)}var f=a.prototype;return f.preconnectCallback=function(r){var t=k(this.win,"preconnect"),n=this.getAmpDoc();"comment"===this.element.getAttribute("data-embedtype")?(t.url(n,"https://www.redditmedia.com",r),t.url(n,"https://www.redditstatic.com",r),t.preload(n,"https://www.redditstatic.com/comment-embed.js","script")):(t.url(n,"https://www.reddit.com",r),t.url(n,"https://cdn.embedly.com",r),t.preload(n,"https://embed.redditmedia.com/widgets/platform.js","script")),function(r,t,n,e){var i=nr(r,n);e.preload(n,i,"document"),e.preload(n,tr("reddit"),"script")}(this.win,0,n,t)},f.isLayoutSupported=function(r){return function(r){return"fixed"==r||"fixed-height"==r||"responsive"==r||"fill"==r||"flex-item"==r||"fluid"==r||"intrinsic"==r}(r)},f.layoutCallback=function(){var r=this;N(this.element.getAttribute("data-src"),"The data-src attribute is required for <amp-reddit> %s",this.element),N(this.element.getAttribute("data-embedtype"),"The data-embedtype attribute is required for <amp-reddit> %s",this.element);var t=function(r,t,n,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=i.allowFullscreen,u=void 0!==o&&o,a=i.initialIntersection;M(void 0===t.isConnected||!0===t.isConnected);var f=rr(r,t,n,e);a&&(f._context.initialIntersection=a);var c=r.document.createElement("iframe");Y[f.type]||(Y[f.type]=0),Y[f.type]+=1;var l=t.getAmpDoc(),s=nr(r,l),v=$(s).hostname,d=JSON.stringify({"host":v,"bootstrap":tr(f.type),"type":f.type,"count":Y[f.type],"attributes":f});return c.src=s,c.ampLocation=$(s),c.name=d,f.width&&(c.width=f.width),f.height&&(c.height=f.height),f.title&&(c.title=f.title),u&&c.setAttribute("allowfullscreen","true"),c.setAttribute("scrolling","no"),G(c,"border","none"),c.onload=function(){this.readyState="complete"},c.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(n)||ir(c),c.setAttribute("data-amp-3p-sentinel",f._context.sentinel),c}(this.win,this.element,"reddit",null,{allowFullscreen:!0});return t.title=this.element.title||"Reddit",t.classList.add("i-amphtml-fill-content"),function(r,t,n,e,i,o){M(r.src),M(!r.parentNode),M(n);var u=r.ownerDocument.defaultView;!function(r){r.listeningFors||r.addEventListener("message",(function(t){if(ur(t)){var n=function(r){return"string"==typeof r&&(r="{"==r.charAt(0)?d(r,(function(r){F().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",r)}))||null:or(r)?function(r){if(!or(r))return null;var t=r.indexOf("{");return l(-1!=t),d(r.substr(t),(function(t){!function(r){var t=E.apply(null,arguments);setTimeout((function(){throw x(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(r,"\n").concat(t.message)))}))}(r):null),r}(ur(t));if(n&&n.sentinel){var e=function(r,t,n,e){var i,o=fr(r,t);if(!o)return o;for(var u=0;u<o.length;u++){var a=o[u],f=a.frame.contentWindow;if(f){if(e==f||cr(f,e)){i=a;break}}else setTimeout(lr,0,o)}return i?i.events:null}(r,n.sentinel,t.origin,t.source);if(e){var i=e[n.type];if(i){i=i.slice();for(var o=0;o<i.length;o++)(0,i[o])(n,t.source,t.origin,t)}}}}}))}(u);var a,f=function(r,t,n){for(var e,i=function(r,t){return r.getAttribute("data-amp-3p-sentinel")}(t),o=fr(r,i,!0),u=0;u<o.length;u++){var a=o[u];if(a.frame===t){e=a;break}}return e||(e={frame:t,events:Object.create(null)},o.push(e)),e.events}(u,r),c=$(r.src).origin,s=f["embed-size"]||(f["embed-size"]=[]),v=function(t,e,i,o){if("amp"==t.sentinel){if(e!=r.contentWindow)return;if(c!=i)return}e==r.contentWindow&&(t.sentinel!=ar?n(t,e,i,o):a())};s.push(v),a=function(){if(v){var r=s.indexOf(v);r>-1&&s.splice(r,1),v=null,s=null,n=null}}}(t,0,(function(t){r.forceChangeHeight(t.height)})),this.element.appendChild(t),this.loadPromise(t)},a}(r.BaseElement);r.registerElement("amp-reddit",sr)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-reddit-0.1.js.map