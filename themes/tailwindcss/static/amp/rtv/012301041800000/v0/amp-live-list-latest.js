;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-live-list",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function i(t,i){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,i){if(t){if("string"==typeof t)return n(t,i);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r;function e(){return r||(r=Promise.resolve(void 0))}var u=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){if(n&&("object"===f(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return o(t)}var h=Array.isArray;function l(t,n){for(var i=[],r=0,e=0;e<t.length;e++){var u=t[e];n(u,e,t)?i.push(u):(r<e&&(t[r]=u),r++)}return r<t.length&&(t.length=r),i}var v,d=Object.prototype,m=(d.hasOwnProperty,d.toString);function p(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function b(t){return 1==(null==(n=t)?void 0:n.nodeType)?(t=t).tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t;var n}function y(t,n,i,r,e,u,o,s,a,f,c){return t}function g(t,n){return t.replace(/^|,/g,"$&".concat(n," "))}function w(t,n){return y(/^[\w-]+$/.test(n)),function(t,n){if(void 0!==v?v:v=function(t){try{var n=t.ownerDocument,i=n.createElement("div"),r=n.createElement("div");return i.appendChild(r),i.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(g(n,":scope"));var i=function(t,n){var i=t.classList,r="i-amphtml-scoped";i.add(r);var e=g(n,".".concat(r)),u=t.querySelectorAll(e);return i.remove(r),u}(t,n)[0];return void 0===i?null:i}(t,"> [".concat(n,"]"))}function j(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var O=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function x(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function S(t){var n,i=p();if(!t)return i;for(;n=O.exec(t);){var r=x(n[1],n[1]),e=n[2]?x(n[2].replace(/\+/g," "),n[2]):"";i[r]=e}return i}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var R=self.__AMP_LOG;function E(t,n){throw new Error("failed to call initLogConstructor")}function M(t){return R.user||(R.user=T()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(R.user.win,t)?R.userForEmbed||(R.userForEmbed=T()):R.user}function T(t){return E()}function I(t,n,i,r,e,u,o,s,a,f,c){return t}function P(t,n,i,r,e,u,o,s,a,f,c){return M().assert(t,n,i,r,e,u,o,s,a,f,c)}function _(t){if(!t)return null;var n=t.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)(?:\?ssr-css=[0|1])?$/i),i=n?n[2]:void 0,r=n?n[3]:void 0;return i&&r?{extensionId:i,extensionVersion:r}:null}function k(t,n){return C(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function A(t){return t.nodeType?(i=t,n=(i.ownerDocument||i).defaultView,k(n,"ampdoc")).getAmpDoc(t):t;var n,i}function U(t){var n=A(t);return n.isSingleDoc()?n.win:n}function C(t,n){I(G(t,n));var i=q(t)[n];return i.obj||(I(i.ctor),I(i.context),i.obj=new i.ctor(i.context),I(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function q(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function G(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var L=function(t){return C(t,"timer")};function N(t,n){var i=t*(n=n||.3)*Math.random();return Math.random()>.5&&(i*=-1),i}var H=function(){function t(t,n,i){this.win=t,this.cu=n,this.ma=i,this.jst=null,this.Id=!1,this.xst=null,this.Sst=null}var n=t.prototype;return n.bF=function(){return this.xst?this.xst():this.cu+N(this.cu,.2)},n.isRunning=function(){return this.Id},n.start=function(t){this.Id||(this.Id=!0,this.Rst(t))},n.stop=function(){this.Id&&(this.Id=!1,this.rM())},n.rM=function(){this.jst&&(L(this.win).cancel(this.jst),this.jst=null)},n.Rst=function(t){var n=this;if(this.Id){var i=function(){n.Sst=n.ma().then((function(){n.xst&&(n.xst=null),n.Rst()})).catch((function(t){if(!t.retriable)throw t;var i;n.xst||(n.xst=(i=0,function(){var t=Math.pow(2,i++);return 1e3*(t+N(t))})),n.Rst()}))};t?i():this.jst=L(this.win).delay(i,this.bF())}},t}();function $(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function B(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?$(Object(i),!0).forEach((function(n){j(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}var F="__AMP__EXPERIMENT_TOGGLES";var X,D,V=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=p()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,i=this.Kt+1;for(var r in n){var e=n[r].access;e<i&&(i=e,t=r)}void 0!==t&&(delete n[t],this.Wt--)}},t}(),z=function(){return self.AMP.config.urls}(),J=new Set(["c","v","a","ad"]),K="__amp_source_origin",Q=function(t){return"string"==typeof t?W(t):t};function W(t,n){return X||(X=self.document.createElement("a"),D=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new V(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var r,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=r;var u=e;return i&&i.put(n,u),u}(X,t,n?null:D)}function Y(t,n,i,r){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?i?"?".concat(n,"&").concat(e[1]):"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t,n){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))}(n,i),r)}function Z(t){return z.cdnProxyRegex.test(Q(t).origin)}var tt=["GET","POST"];function nt(t,n){var i,r=B({},n);if((i=n.body)&&"function"==typeof i.getFormData){var e=n.body;r.headers["Content-Type"]="multipart/form-data;charset=utf-8",r.body=function(t){for(var n=[],i=t.next();!i.done;i=t.next())n.push(i.value);return n}(e.entries())}return{input:t,init:r}}function it(t,n,r){var u=function(t,n){var i,r=t||{},e=r.credentials;return y(void 0===e||"include"==e||"omit"==e),r.method=void 0===(i=r.method)?"GET":(i=i.toUpperCase(),y(tt.includes(i)),i),r.headers=r.headers||{},r.headers.Accept=n,y(null!==r.body),r}(r,"text/html");u=function(t,n,i){i=i||{};var r=function(t){return t.origin||W(t.location.href).origin}(t);return r==W(n).origin&&(i.headers=i.headers||{},i.headers["AMP-Same-Origin"]="true"),i}(t,n,u),n=function(t,n,i){return y("string"==typeof n),!1!==i.ampCors&&(n=function(t,n){!function(t){var n=S(W(t).search);P(!(K in n),"Source origin is not allowed in %s",t)}(n);var i=function(t){return W(function(t){if(!Z(t=Q(t)))return t.href;var n=t.pathname.split("/"),i=n[1];P(J.has(i),"Unknown path prefix in url %s",t.href);var r=n[2],e="s"==r?"https://"+decodeURIComponent(n[3]):"http://"+decodeURIComponent(r);return P(e.indexOf(".")>0,"Expected a . in origin %s",e),n.splice(1,"s"==r?3:2),e+n.join("/")+function(t,n){if(!t||"?"==t)return"";var i=new RegExp("[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)","\\b[^&]*"),"g"),r=t.replace(i,"").replace(/^[?&]/,"");return r?"?"+r:""}(t.search)+(t.hash||"")}(t)).origin}(t.location.href);return Y(n,K,i)}(t,n)),n}(t,n,u);var o=function(t){return k(t,"ampdoc")}(t),s=o.isSingleDoc()?o.getSingleDoc():null;return u.responseType="document",function(t,n,r,u){if(!n)return e();var o=u.prerenderSafe?e():n.whenFirstVisible(),s=function(t,n){return C(U(A(t)),"viewer")}(n),a=Z(r),f=s.hasCapability("xhrInterceptor"),c=u.bypassInterceptorForDev&&!1;return a||!f||c?o:n.getRootNode().documentElement.hasAttribute("allow-xhr-interception")?o.then((function(){return s.isTrustedViewer()})).then((function(n){if(n||function(t,n){var r=function(t){var n,r,e,u,o;if(t[F])return t[F];t[F]=p();var s=t[F];y(s);var a,f=B(B({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(r=t.AMP_EXP)&&void 0!==r?r:(a=(null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}",JSON.parse(a)));for(var c in f){var l=f[c];"number"==typeof l&&l>=0&&l<=1&&(s[c]=Math.random()<l)}var v=null===(u=t.AMP_CONFIG)||void 0===u?void 0:u["allow-doc-opt-in"];if(h(v)&&v.length){var d=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var m,b,g=i((null===(m=d.getAttribute("content"))||void 0===m?void 0:m.split(","))||[],!0);!(b=g()).done;){var w=b.value;v.includes(w)&&(s[w]=!0)}}Object.assign(s,function(t){var n,r="";try{var e;"localStorage"in t&&(r=null!==(e=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(t){(R.dev||(R.dev=E())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var u,o=(null===(n=r)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],s=p(),a=i(o,!0);!(u=a()).done;){var f=u.value;f&&("-"==f[0]?s[f.substr(1)]=!1:s[f]=!0)}return s}(t));var j=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(h(j)&&j.length)for(var O,x=S(t.location.originalHash||t.location.hash),M=i(j,!0);!(O=M()).done;){var T=O.value,I=x["e-".concat(T)];"1"==I&&(s[T]=!0),"0"==I&&(s[T]=!1)}return s}(t);return!!r[n]}(t,"untrusted-xhr-interception")){var e={"originalRequest":nt(r,u)};return s.sendMessageAwaitResponse("xhr",e).then((function(t){return function(t,n){var i;if(i=t,function(t,n){var i,r,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(n)return n;t&&-1==e.indexOf(t)&&(e+=t);for(var u=3,o=e.split("%s"),s=o.shift(),a=[s];o.length;){var f=arguments[u++],c=o.shift();s+=b(f)+c,a.push(f,c.trim())}var h=new Error(s);throw h.messageArray=l(a,(function(t){return""!==t})),null===(i=(r=self).__AMP_REPORT_ERROR)||void 0===i||i.call(r,h),h}("​​​","[object Object]"===m.call(i),"Object expected: %s",t,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0),"document"!=n)return new Response(t.body,t.init);var r=p(),e={status:200,statusText:"OK",getResponseHeader:function(t){return r[String(t).toLowerCase()]||null}};if(t.init){var u=t.init;h(u.headers)&&u.headers.forEach((function(t){var n=t[0],i=t[1];r[String(n).toLowerCase()]=String(i)})),u.status&&(e.status=parseInt(u.status,10)),u.statusText&&(e.statusText=String(u.statusText))}return new Response(t.body?String(t.body):"",e)}(t,u.responseType)}))}})):o}(t,s,n,u).then((function(t){return t?t.text().then((function(t){return(new DOMParser).parseFromString(t,"text/html")})):function(t,n){return new Promise((function(i,r){var e=new XMLHttpRequest;for(var u in e.open(n.method||"GET",t,!0),e.withCredentials="include"==n.credentials,e.responseType="document",n.headers)e.setRequestHeader(u,n.headers[u]);e.onreadystatechange=function(){if(!(e.readyState<2)){if(e.status<100||e.status>599)return e.onreadystatechange=null,void r(M().createExpectedError("Unknown HTTP status ".concat(e.status)));if(4==e.readyState){var t={status:e.status,statusText:e.statusText,headers:(o=e.getAllResponseHeaders(),s={},o.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),i=n.shift().trim();if(i){var r=n.join(":").trim();s[i]=r}})),s)},n=(u=new Response("",t),new Promise((function(t){if(u.ok)return t(u);var n=u.status,i=M().createError("HTTP error ".concat(n));throw i.retriable=function(t){return 415==t||t>=500&&t<600}(n),i.response=u,i}))).then((function(t){return{response:t,xhr:e}}));i(n)}}var u,o,s},e.onerror=function(){r(M().createExpectedError("Request failure"))},e.onabort=function(){r(M().createExpectedError("Request aborted"))},"POST"==n.method?e.send(n.body):e.send()}))}(n,u).then((function(t){return t.xhr.responseXML}))}))}var rt="liveListManager",et=function(){function t(t){var n=this;this.ampdoc=t,this.Mst=Object.create(null),this.iv=k(this.ampdoc.win,"extensions"),this.Pst=15e3,this.kst=[this.Pst],this.Ust=null,this.Pi=this.ampdoc.getUrl(),this.Cst=0,this.ma=this.qst.bind(this),this.Gst=function(t){if(!t.ownerDocument)return!1;var n=t.ownerDocument.documentElement.getAttribute("transformed");return Boolean(n)&&n.startsWith("google;v=")}(t.getRootNode()),this.Lst().then((function(){n.Pst=Math.min.apply(Math,n.kst);var t=Object.keys(n.Mst).map((function(t){return n.Mst[t].getUpdateTime()}));n.Cst=Math.max.apply(Math,t),n.Ust=new H(n.ampdoc.win,n.Pst,n.ma),n.ampdoc.isVisible()&&n.Nst()&&n.Ust.start(),n.Hst()}))}var n=t.prototype;return n.dispose=function(){this.Ust.stop()},t.forDoc=function(t){return n=rt,function(t,n){var i=function(t,n){var i=q(t)[n];return i?i.promise?i.promise:(C(t,n),i.promise=Promise.resolve(i.obj)):null}(t,n);if(i)return i;var r,e,o,s,a=q(t);return a[n]=(e=(r=new u).promise,o=r.reject,s=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:s,reject:o,context:null,ctor:null}),a[n].promise}(U(t),n);var n},n.Nst=function(){var t=this;return Object.keys(this.Mst).some((function(n){return t.Mst[n].isEnabled()}))},n.qst=function(){var t,n,i=this.Pi;return this.Cst>0&&(i=Y(i,"amp_latest_update_time",String(this.Cst))),this.Gst&&(i=(t=this.ampdoc.getBody(),G(n=U(A(t)),"url")?C(n,"url"):null).getCdnUrlOnOrigin(i)),it(this.ampdoc.win,i,{}).then(this.$st.bind(this))},n.$st=function(t){this.Bst(t);var n=this.Fst(t).concat(this.Xst(t)).map(this.Dst.bind(this)),i=Math.max.apply(Math,[0].concat(n));i>0&&(this.Cst=i),this.Nst()||this.Ust.stop()},n.Fst=function(t){return Array.prototype.slice.call(t.getElementsByTagName("amp-live-list"))},n.Xst=function(t){var n=this;return Object.keys(this.Mst).filter((function(t){return n.Mst[t].hasCustomSlot()})).map((function(i){var r=n.Mst[i].element.AMP_LIVE_LIST_CUSTOM_SLOT_ID;return t.getElementById(r)}))},n.Dst=function(t){var n="i-amphtml-"+t.id+"-dynamic-list",i=n in this.Mst?n:t.getAttribute("id");P(i,"amp-live-list must have an id."),P(i in this.Mst,"amp-live-list#%s found but did not exist on original page load.",i);var r=this.Mst[i];return r.toggle(!t.hasAttribute("disabled")&&!t.hasAttribute("live-story-disabled")),r.isEnabled()?r.update(t):0},n.register=function(t,n){t in this.Mst||(this.Mst[t]=n,this.kst.push(n.getInterval()),n.isEnabled()&&this.Ust&&this.ampdoc.isVisible()&&this.Ust.start())},n.Lst=function(){return this.ampdoc.whenReady()},n.Hst=function(){var t=this;this.ampdoc.onVisibilityChanged((function(){t.ampdoc.isVisible()&&t.Nst()?t.Ust.start(!0):t.Ust.stop()}))},n.Bst=function(t){var n=this;(function(t){if(!t)return[];for(var n=t.querySelectorAll("script[custom-element],script[custom-template]"),i=[],r=0;r<n.length;r++){var e=n[r],u=e.getAttribute("custom-element")||e.getAttribute("custom-template"),o=_(e.src);u&&o&&i.push({script:e,extensionId:u,extensionVersion:o.extensionVersion})}return i})(t).forEach((function(t){var i=t.extensionId,r=t.extensionVersion;n.iv.installExtensionForDoc(n.ampdoc,i,r)}))},t.getMinDataPollInterval=function(){return 15e3},t.getMinDataMaxItemsPerPage=function(){return 1},t}(),ut="amp-live-list-item",ot="amp-live-list-item-new";function st(t,n){return Math.max(parseInt(t,10)||0,n)}var at=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(u,t);var n,i,r=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=a(n);if(i){var e=a(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return c(this,t)});function u(t){var n;return(n=r.call(this,t)).Pu=null,n.Jy=null,n.Vst=null,n.zst=null,n.Jst=null,n.Kst="",n.Qst=0,n.Wst=0,n.Yst=0,n.Zst=!1,n.Mat=Object.create(null),n.Tat=[],n.Uat=[],n.Cat=[],n.qat=null,n.Gat="",n.Lat=0,n.Nat=n.Hat.bind(o(n)),n}var f=u.prototype;return f.isLayoutSupported=function(t){return"container"==t||"fixed-height"==t},f.buildCallback=function(){var t=this;this.Pu=this.getViewport(),et.forDoc(this.element).then((function(n){t.Jy=n,t.Jy.register(t.Kst,t)})),this.Gat=this.element.AMP_LIVE_LIST_CUSTOM_SLOT_ID,this.Vst=P(this.$at(this.element),'amp-live-list must have an "update" slot.'),this.zst=P(this.Bat(this.element),'amp-live-list must have an "items" slot.'),this.Jst=this.Fat(this.element),this.Kst=P(this.element.getAttribute("id"),"amp-live-list must have an id."),this.Qst=st(this.element.getAttribute("data-poll-interval"),et.getMinDataPollInterval());var n=this.element.getAttribute("data-max-items-per-page");P(Number(n)>0||this.element.hasAttribute("disable-pagination"),"amp-live-list # %s must have data-max-items-per-page attribute with numeric value. Found %s.",this.Kst,n);var i=[].slice.call(this.zst.children).filter((function(t){return!t.hasAttribute("data-tombstone")})).length;this.Wst=Math.max(st(n,1),i),this.Zst="ascending"===this.element.getAttribute("sort"),this.Xat(!1),this.Dat(this.zst,(function(t){t.classList.add(ut)})),this.Lat=this.Vat(this.zst,!0),this.registerDefaultAction(this.Jat.bind(this),"update"),this.element.hasAttribute("aria-live")||this.element.setAttribute("aria-live","polite")},f.hasCustomSlot=function(){return!!this.Gat},f.isEnabled=function(){return!this.element.hasAttribute("disabled")},f.toggle=function(t){t?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","")},f.update=function(t){var n=this,i=this.Bat(t);if(!i)return this.Yst;this.Vat(i);var r=this.Kat(i);return this.Qat(r.insert),this.Wat(r.replace),this.Yat(r.tombstone),this.qat=this.Fat(t),this.Tat.length>0?(this.element.hasAttribute("auto-insert")&&this.Jat(),this.mutateElement((function(){n.Xat(!0),n.Pu.updateFixedLayer()}))):(this.Uat.length>0||this.Cat.length>0)&&this.Jat(),this.Yst},f.Jat=function(){var t=this,n=this.Tat.length>0,i=this.Cat.length>0,r=this.Uat.length>0,e=n||r,u=this.mutateElement((function(){var r=M().assertElement(t.zst);return n&&(t.Dat(r,(function(t){t.classList.remove(ot)})),t.Lat+=t.Zat(r,t.Tat),t.Tat.length=0),t.Uat.length>0&&(t.tft(r,t.Uat),t.Uat.length=0),t.Cat.length>0&&(t.Lat-=t.nft(r,t.Cat),t.Cat.length=0),(n||i)&&t.Jst&&t.qat&&(t.element.replaceChild(t.qat,t.Jst),t.Jst=t.Fat(t.element)),t.Xat(!1),t.qat=null,t.ift(r)}));return e&&(u=u.then((function(){t.rft()}))),n&&!this.element.hasAttribute("disable-scrolling")&&(u=u.then((function(){var n=t.Zst&&t.zst.lastElementChild?t.zst.lastElementChild:t.element,i=t.Zst?"bottom":"top";return t.Pu.animateScrollIntoView(n,i)}))),u},f.Xat=function(t){this.Vst.classList.toggle("amp-hidden",!t),this.Vst.classList.toggle("amp-active",t)},f.Zat=function(t,n){var i=this,r=0;return n.forEach((function(t){if(0===i.zst.childElementCount)i.zst.appendChild(t);else{var n=i.eft(t);if(!i.uft(n))return;if(i.Zst)for(var e=i.zst.lastElementChild;e;e=e.previousElementSibling){var u=i.eft(e);if(i.uft(u)){if(n>=u){i.zst.insertBefore(t,e.nextElementSibling),r++;break}if(!e.previousElementSibling){i.zst.insertBefore(t,e),r++;break}}}else for(var o=i.zst.firstElementChild;o;o=o.nextElementSibling){var s=i.eft(o);if(i.uft(s)){if(n>=s){i.zst.insertBefore(t,o),r++;break}if(!o.nextElementSibling){i.zst.appendChild(t),r++;break}}}}})),r},f.tft=function(t,n){var i=0;return n.forEach((function(n){var r=n.getAttribute("id"),e=t.querySelector("#".concat(r));e&&(t.replaceChild(n,e),i++)})),i},f.nft=function(t,n){var i=0;return n.forEach((function(n){var r=n.getAttribute("id"),e=t.querySelector("#".concat(r));e&&(e.setAttribute("data-tombstone",""),e.textContent="",i++)})),i},f.ift=function(t){var n=this,i=this.Lat-this.Wst;if(i<1)return e();var r=[],u=[];if(this.Zst)for(var o=t.firstElementChild;o&&!(r.length>=i);o=o.nextElementSibling)this.oft(o)||r.push(o);else for(var s=t.lastElementChild;s&&!(r.length>=i);s=s.previousElementSibling)this.oft(s)||r.push(s);return this.getVsync().runPromise({measure:function(){for(var t=0;t<r.length;t++){var i=r[t];if(n.Zst){if(!n.sft(i))break}else if(!n.aft(i))break;u.push(i)}},mutate:function(){u.forEach((function(i){t.removeChild(i),n.Lat--}))}})},f.Qat=function(t){t.sort(this.Nat).forEach((function(t){t.classList.add(ut),t.classList.add(ot)})),this.Tat.push.apply(this.Tat,t)},f.Wat=function(t){var n=this;t.forEach((function(t){var i=n.fft(n.Uat,t);t.classList.add("amp-live-list-item"),-1==i?n.Uat.push(t):n.Uat[i]=t}))},f.Yat=function(t){this.Cat.push.apply(this.Cat,t)},f.fft=function(t,n){for(var i=0;i<t.length;i++)if(t[i].getAttribute("id")==n.getAttribute("id"))return i;return-1},f.getInterval=function(){return this.Qst},f.Kat=function(t){for(var n=[],i=[],r=[],e=t.firstElementChild;e;e=e.nextElementSibling){var u=e.getAttribute("id"),o=this.eft(e);if(u&&this.uft(o))if(this.cft(e)){var s=this.win.document.importNode(e,!0);n.push(s),this.hft(e)}else if(this.lft(e)){var a=this.vft(e);this.Mat[u]=a;var f=this.win.document.importNode(e,!0);a>this.Yst&&(this.Yst=a),i.push(f)}else this.oft(e)&&-1!=this.Mat[u]&&(this.Mat[u]=-1,r.push(e))}return{insert:n,replace:i,tombstone:r}},f.cft=function(t){var n=t.getAttribute("id");return!t.hasAttribute("data-tombstone")&&!(n in this.Mat)},f.lft=function(t){if(!t.hasAttribute("data-update-time"))return!1;if(t.hasAttribute("data-tombstone"))return!1;var n=t.getAttribute("id"),i=this.vft(t);return n in this.Mat&&-1!=this.Mat[n]&&i>this.Mat[n]},f.oft=function(t){return t.hasAttribute("data-tombstone")},f.hft=function(t){var n=t.getAttribute("id"),i=this.vft(t);i>this.Yst&&(this.Yst=i),this.Mat[n]=i},f.dft=function(t){return!!t.hasAttribute("id")&&this.uft(this.eft(t))},f.Vat=function(t,n){var i=this,r=0;return this.Dat(t,(function(t){i.dft(t)&&(r++,n&&i.hft(t))})),r},f.Dat=function(t,n){for(var i=t.firstElementChild;i;i=i.nextElementSibling)n(i)},f.mft=function(t){return t.id===this.Gat?t:this.win.document.getElementById(this.Gat)},f.$at=function(t){return this.Gat?this.mft(t):w(t,"update")},f.Bat=function(t){return this.Gat?this.mft(t):w(t,"items")},f.Fat=function(t){return w(t,"pagination")},f.Hat=function(t,n){return this.eft(t)-this.eft(n)},f.eft=function(t){return this.pft(t,"data-sort-time")},f.uft=function(t){return t>0},f.vft=function(t){return t.hasAttribute("data-update-time")?this.pft(t,"data-update-time"):this.eft(t)},f.pft=function(t,n){return Number(t.getAttribute(n))},f.aft=function(t){return this.Pu.getLayoutRect(t).top>this.Pu.getScrollTop()+this.Pu.getSize().height},f.sft=function(t){return this.Pu.getLayoutRect(t).bottom<this.Pu.getScrollTop()},f.getUpdateTime=function(){return this.Yst},f.rft=function(){var t=this.win.document.createEvent("Event");t.initEvent("amp:dom-update",!0,!0),this.zst.dispatchEvent(t)},u}(t.BaseElement);t.registerElement("amp-live-list",at,"amp-live-list>[update]{position:relative;z-index:1000}amp-live-list>.amp-active[update]{display:block}amp-live-list>[items]>[data-tombstone]{display:none}@keyframes amp-live-list-item-highlight{0%{box-shadow:0 0 5px 2px #51cbee}to{box-shadow:0}}\n/*# sourceURL=/extensions/amp-live-list/0.1/amp-live-list.css*/"),t.registerServiceForDoc(rt,et)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-live-list-0.1.js.map