;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-yotpo",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array,{hasOwnProperty:e,toString:r}=Object.prototype;function o(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function i(t,n,e,r,o,i,u,c,s,l,a){return t}function u(t){return JSON.parse(t)}function c(t,n){try{return u(t)}catch(t){return null==n||n(t),null}}function s(t){const n=parseFloat(t);return"number"==typeof(e=n)&&isFinite(e)?n:void 0;var e}var l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function a(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function f(t){const n=o();if(!t)return n;let e;for(;e=l.exec(t);){const t=a(e[1],e[1]),r=e[2]?a(e[2].replace(/\+/g," "),e[2]):"";n[t]=r}return n}function p(t){const{location:n}=t||self;return f(n.originalHash||n.hash)}var m="";function d(t){const n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:h(t,p(t)),esm:!0,test:!1,rtvVersion:v(t),ssrReady:!1}}(n)}function v(t){var n;return m||(m=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012301041800000"),m}function h(t,n){const e=n||p(t);return["1","actions","amp","amp4ads","amp4email"].includes(e.development)||!!t.AMP_DEV_MODE}function b(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:r}=t,o=new Error(e);for(const n in t)o[n]=t[n];return o.stack=r,o}function g(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=b(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function y(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function O(t){return w.user||(w.user=j()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(w.user.win,t)?w.userForEmbed||(w.userForEmbed=j()):w.user}function j(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function S(t,n,e,r,o,i,u,c,s,l,a){return t}function $(t,n,e,r,o,i,u,c,s,l,a){return O().assert(t,n,e,r,o,i,u,c,s,l,a)}function k(t,n){return F(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function x(t,n){return F(function(t){const n=E(t);return n.isSingleDoc()?n.win:n}(E(t)),n)}function E(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,k(n,"ampdoc")).getAmpDoc(t):t;var n,e}function F(t,n){S(function(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(S(e.ctor),S(e.context),e.obj=new e.ctor(e.context),S(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}var T,A=["Webkit","webkit","Moz","moz","ms","O","o"];var I=class{static generate(t){return function(t){const{length:n}=t;let e=5381;for(let r=0;r<n;r++)e=33*e^t.charCodeAt(r);return String(e>>>0)}(function(t){const n=[];let e=0;for(;1==(null==(r=t)?void 0:r.nodeType)&&e<25;){let r="";t.id&&(r=`/${t.id}`);const o=t.nodeName.toLowerCase();n.push(`${o}${r}${N(t)}`),e++,t=t.parentElement}var r;return n.join()}(t))}};function N(t){const{nodeName:n}=t;let e=0,r=0,o=t.previousElementSibling;for(;o&&r<25&&e<100;)o.nodeName==n&&r++,e++,o=o.previousElementSibling;return r<25&&e<100?`.${r}`:""}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function L(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function M(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?L(Object(e),!0).forEach((function(n){C(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var R="__AMP__EXPERIMENT_TOGGLES";function U(t){var e,r,c,s,l;if(t[R])return t[R];t[R]=o();const a=t[R];i(a);const p=M(M({},null!==(e=t.AMP_CONFIG)&&void 0!==e?e:{}),null!==(r=t.AMP_EXP)&&void 0!==r?r:u((null===(c=t.__AMP_EXP)||void 0===c?void 0:c.textContent)||"{}"));for(const t in p){const n=p[t];"number"==typeof n&&n>=0&&n<=1&&(a[t]=Math.random()<n)}const m=null===(s=t.AMP_CONFIG)||void 0===s?void 0:s["allow-doc-opt-in"];if(n(m)&&m.length){const n=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n){var d;const t=(null===(d=n.getAttribute("content"))||void 0===d?void 0:d.split(","))||[];for(const n of t)m.includes(n)&&(a[n]=!0)}}Object.assign(a,function(t){var n;let e="";try{var r;"localStorage"in t&&(e=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){}const i=(null===(n=e)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],u=o();for(const t of i)t&&("-"==t[0]?u[t.substr(1)]=!1:u[t]=!0);return u}(t));const v=null===(l=t.AMP_CONFIG)||void 0===l?void 0:l["allow-url-opt-in"];if(n(v)&&v.length){const n=f(t.location.originalHash||t.location.hash);for(const t of v){const e=n[`e-${t}`];"1"==e&&(a[t]=!0),"0"==e&&(a[t]=!1)}}return a}var _,q=(()=>self.AMP.config.urls)();function G(t,n){return _||(_=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(_,t)}new Set(["c","v","a","ad"]);var P=(()=>self.AMP.config.urls)(),V={};function D(t,n,e,r){const o=e||n.getAttribute("type");$(o,"Attribute type required for <amp-ad>: %s",n);const i=function(t){let n=0;for(let e=t;e&&e!=e.parent;e=e.parent)n++;return String(n)+"-"+W(t)}(t);let u={};return function(t,n){const{dataset:e}=t;for(const t in e)t.startsWith("vars")||(n[t]=e[t]);const r=t.getAttribute("json");if(r){const e=c(r);if(void 0===e)throw O().createError("Error parsing JSON in json attribute in element %s",t);for(const t in e)n[t]=e[t]}}(n,u),u=function(t,n,e,r){const o=Date.now(),i=n.getAttribute("width"),u=n.getAttribute("height");(r=r||{}).width=s(i),r.height=s(u),n.getAttribute("title")&&(r.title=n.getAttribute("title"));let c=t.location.href;"about:srcdoc"==c&&(c=t.parent.location.href);const l=E(n),a=x(n,"documentInfo").get(),f=(m=n,x(m,"viewer")).getUnconfirmedReferrerUrl(),p=function(t){const n=t.ownerDocument.body;let e=0,r=0;for(let o=t;o&&o!=n;o=o.offsetParent)e+=o.offsetLeft,r+=o.offsetTop;const{offsetHeight:o,offsetWidth:i}=t;return function(t,n,e,r){return{left:t,top:n,width:e,height:r,bottom:n+r,right:t+e,x:t,y:n}}(e,r,i,o)}(n);var m,v,h,b;r._context={"ampcontextVersion":"2301041800000","ampcontextFilepath":`${q.thirdParty}/2301041800000/ampcontext-v0.js`,"sourceUrl":a.sourceUrl,"referrer":f,"canonicalUrl":a.canonicalUrl,"pageViewId":a.pageViewId,"location":{"href":c},"startTime":o,"tagName":n.tagName,"mode":{localDev:!1,development:!1,esm:d(b).esm,test:!1,rtvVersion:d(b).rtvVersion},"canary":(v=t,!(null===(h=v.AMP_CONFIG)||void 0===h||!h.canary)),"hidden":!l.isVisible(),"initialLayoutRect":p?{"left":p.left,"top":p.top,"width":p.width,"height":p.height}:null,"domFingerprint":I.generate(n),"experimentToggles":U(t),"sentinel":e};const g=n.getAttribute("src");return g&&(r.src=g),r}(t,n,i,u),u.type=o,Object.assign(u._context,r),u}function J(t,n,e,r,i={}){const{allowFullscreen:u=!1,initialIntersection:c}=i;S(void 0===n.isConnected||!0===n.isConnected);const s=D(t,n,e,r);c&&(s._context.initialIntersection=c);const l=t.document.createElement("iframe");V[s.type]||(V[s.type]=0),V[s.type]+=1;const a=function(t,n,e){return function(t,n,e){const r=n.getMetaByName("amp-3p-iframe-src");if(!r)return null;const o=function(t,n,e="source"){return $(null!=t,"%s %s must be available",n,e),$(function(t){return"https:"==(t=(t=>"string"==typeof t?G(t):t)(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||function(t,n){const e=t.length-n.length;return e>=0&&t.indexOf(n,e)==e}(t.hostname,".localhost")}(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,e,t),t}(r,'meta[name="amp-3p-iframe-src"]');$(-1==o.indexOf("?"),"3p iframe url must not include query string %s in element %s.",o,r);const i=G(o);return $("localhost"==i.hostname||i.origin!=G(t.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",o,i.origin,r),`${o}?2301041800000`}(t,n)||function(t,n){return t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+W(t),"https://"+t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${P.thirdPartyFrameHost}/2301041800000/frame.html`}(t)}(t,n.getAmpDoc()),f=G(a).hostname,p=JSON.stringify({"host":f,"bootstrap":(m=s.type,`${P.thirdParty}/2301041800000/vendor/${m}.mjs`),"type":s.type,"count":V[s.type],"attributes":s});var m;return l.src=a,l.ampLocation=G(a),l.name=p,s.width&&(l.width=s.width),s.height&&(l.height=s.height),s.title&&(l.title=s.title),u&&l.setAttribute("allowfullscreen","true"),l.setAttribute("scrolling","no"),function(t,n,e,r,i){const u=function(t,n,e){if(n.startsWith("--"))return n;T||(T=o());let r=T[n];if(!r||e){if(r=n,void 0===t[n]){const e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(let e=0;e<A.length;e++){const r=A[e]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}e||(T[n]=r)}return r}(t.style,n,i);if(!u)return;const c=r?e+r:e;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return A.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(u),c)}(l,"border","none"),l.onload=function(){this.readyState="complete"},l.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(e)||function(t){if(!t.sandbox||!t.sandbox.supports)return;const n=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"];for(let e=0;e<n.length;e++){const r=n[e];if(!t.sandbox.supports(r))return}t.sandbox=n.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}(l),l.setAttribute("data-amp-3p-sentinel",s._context.sentinel),l}function W(t){let n;if(t.crypto&&t.crypto.getRandomValues){const e=new Uint32Array(2);t.crypto.getRandomValues(e),n=String(e[0])+e[1]}else n=String(t.Math.random()).substr(2)+"0";return n}function z(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function H(t){return t.data}var X="unlisten";function Y(t,n,e){const r=function(t,n){let{listeningFors:e}=t;return!e&&n&&(e=t.listeningFors=Object.create(null)),e||null}(t,e);if(!r)return r;let o=r[n];return!o&&e&&(o=r[n]=[]),o||null}function Z(t,n){for(let e=n;e&&e!=e.parent;e=e.parent)if(e==t)return!0;return!1}function B(t){const n={"sentinel":X};for(let e=t.length-1;e>=0;e--){const r=t[e];if(!r.frame.contentWindow){t.splice(e,1);const{events:o}=r;for(const t in o)o[t].splice(0,1/0).forEach((t=>{t(n)}))}}}var K=class extends t.BaseElement{constructor(t){super(t),this.Lv=null,this.O_=[]}preconnectCallback(t){var n;(n=this.win,k(n,"preconnect")).url(this.getAmpDoc(),"https://staticw2.yotpo.com",t)}buildCallback(){$(this.element.getAttribute("data-app-key"),"The data-app-key attribute is required for <amp-yotpo> %s",this.element),$(this.element.getAttribute("data-widget-type"),"The data-widget-type attribute is required for <amp-yotpo> %s",this.element)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}unlayoutOnPause(){return!0}unlayoutCallback(){var t,n;return this.O_.forEach((t=>t())),this.O_.length=0,this.Lv&&(null===(n=(t=this.Lv).parentElement)||void 0===n||n.removeChild(t),this.Lv=null),!0}layoutCallback(){const t=J(this.win,this.element,"yotpo");t.title=this.element.title||"Yotpo widget",t.classList.add("i-amphtml-fill-content");const n=function(t,n,e,r,o,u){S(t.src),S(!t.parentNode),S(e);const s=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(!H(n))return;const e=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?c(t,(t=>{}))||null:z(t)?function(t){if(!z(t))return null;const n=t.indexOf("{");return i(-1!=n),c(t.substr(n),(n=>{!function(t){const n=g.apply(null,arguments);setTimeout((()=>{throw y(n),n}))}(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(t):null),t}(H(n));if(!e||!e.sentinel)return;const r=function(t,n,e,r){const o=Y(t,n);if(!o)return o;let i;for(let t=0;t<o.length;t++){const n=o[t],{contentWindow:e}=n.frame;if(e){if(r==e||Z(e,r)){i=n;break}}else setTimeout(B,0,o)}return i?i.events:null}(t,e.sentinel,n.origin,n.source);if(!r)return;let o=r[e.type];if(o){o=o.slice();for(let t=0;t<o.length;t++)(0,o[t])(e,n.source,n.origin,n)}}))}(s);const l=function(t,n,e){const r=function(t,n){return t.getAttribute("data-amp-3p-sentinel")}(n),o=Y(t,r,!0);let i;for(let t=0;t<o.length;t++){const e=o[t];if(e.frame===n){i=e;break}}return i||(i={frame:n,events:Object.create(null)},o.push(i)),i.events}(s,t),a=G(t.src).origin;let f,p=l["embed-size"]||(l["embed-size"]=[]),m=function(n,r,o,i){if("amp"==n.sentinel){if(r!=t.contentWindow)return;const n="null"==o&&undefined;if(a!=o&&!n)return}r==t.contentWindow&&(n.sentinel!=X?e(n,r,o,i):f())};return p.push(m),f=function(){if(m){const t=p.indexOf(m);t>-1&&p.splice(t,1),m=null,p=null,e=null}}}(t,0,(t=>{this.attemptChangeHeight(t.height).catch((()=>{}))}));return this.O_.push(n),this.element.appendChild(t),this.Lv=t,this.loadPromise(t)}};t.registerElement("amp-yotpo",K)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-yotpo-0.1.mjs.map