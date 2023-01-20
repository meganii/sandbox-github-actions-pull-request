;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-3d-gltf",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,e,o=class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{isArray:r}=Array,{hasOwnProperty:i,toString:s}=Object.prototype;function c(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function l(t,n,e,o,r,i,s,c,l,u,a){return t}function u(t){return JSON.parse(t)}function a(t,n){try{return u(t)}catch(t){return null==n||n(t),null}}function f(t){return(t.ownerDocument||t).defaultView}function h(t){const n=parseFloat(t);return"number"==typeof(e=n)&&isFinite(e)?n:void 0;var e}function d(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:o}=t,r=new Error(e);for(const n in t)r[n]=t[n];return r.stack=o,r}function m(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=d(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function p(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function v(t){const n=m.apply(null,arguments);setTimeout((()=>{throw p(n),n}))}function g(t,...n){try{return t.apply(null,n)}catch(t){v(t)}}var b=["Webkit","webkit","Moz","moz","ms","O","o"],w={"getPropertyPriority":()=>"","getPropertyValue":()=>""};var y=/vertical/,j=new WeakMap,O=new WeakMap,S=new WeakMap;function x(t){let n=j.get(t);return n||(n=new t.ResizeObserver(P),j.set(t,n)),n}function P(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const o=t[e],{target:r}=o;if(n.has(r))continue;n.add(r);const i=O.get(r);if(i){S.set(r,o);for(let t=0;t<i.length;t++){const{callback:n,type:e}=i[t];R(e,n,o)}}}}function R(t,n,e){if(0==t){const{contentRect:t}=e,{height:o,width:r}=t;g(n,{width:r,height:o})}else if(1==t){const{borderBoxSize:t}=e;let o;if(t)o=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=e,n=f(t),r=y.test(function(t,n){return t.getComputedStyle(n)||w}(n,t).writingMode),{offsetHeight:i,offsetWidth:s}=t;let c,l;r?(l=s,c=i):(c=s,l=i),o={inlineSize:c,blockSize:l}}g(n,o)}}function k(t,n,e={}){const{needsRootBounds:o,rootMargin:r,threshold:i}=e,s=function(t){return t.parent&&t.parent!=t}(n)&&(o||r)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:i,root:s,rootMargin:r})}var M=new WeakMap,A=new WeakMap;function _(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const o=t[e],{target:r}=o;if(n.has(r))continue;n.add(r);const i=A.get(r);if(i)for(let t=0;t<i.length;t++)(0,i[t])(o)}}var E=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function T(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function C(t){const n=c();if(!t)return n;let e;for(;e=E.exec(t);){const t=T(e[1],e[1]),o=e[2]?T(e[2].replace(/\+/g," "),e[2]):"";n[t]=o}return n}function $(t){const{location:n}=t||self;return C(n.originalHash||n.hash)}var I="";function F(t){const n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:L(t,$(t)),esm:!0,test:!1,rtvVersion:V(t),ssrReady:!1}}(n)}function V(t){var n;return I||(I=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012301041800000"),I}function L(t,n){const e=n||$(t);return["1","actions","amp","amp4ads","amp4email"].includes(e.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var W=self.__AMP_LOG;function z(t,n){throw new Error("failed to call initLogConstructor")}function G(t){return W.user||(W.user=N()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(W.user.win,t)?W.userForEmbed||(W.userForEmbed=N()):W.user}function N(t){return z()}function U(t,n,e,o,r,i,s,c,l,u,a){return t}function D(t,n,e,o,r,i,s,c,l,u,a){return G().assert(t,n,e,o,r,i,s,c,l,u,a)}function J(t,n){return B(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function Z(t,n){return B(function(t){const n=q(t);return n.isSingleDoc()?n.win:n}(q(t)),n)}function q(t){return t.nodeType?(n=f(t),J(n,"ampdoc")).getAmpDoc(t):t;var n}function B(t,n){U(function(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(U(e.ctor),U(e.context),e.obj=new e.ctor(e.context),U(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}var H=class{static generate(t){return function(t){const{length:n}=t;let e=5381;for(let o=0;o<n;o++)e=33*e^t.charCodeAt(o);return String(e>>>0)}(function(t){const n=[];let e=0;for(;1==(null==(o=t)?void 0:o.nodeType)&&e<25;){let o="";t.id&&(o=`/${t.id}`);const r=t.nodeName.toLowerCase();n.push(`${r}${o}${X(t)}`),e++,t=t.parentElement}var o;return n.join()}(t))}};function X(t){const{nodeName:n}=t;let e=0,o=0,r=t.previousElementSibling;for(;r&&o<25&&e<100;)r.nodeName==n&&o++,e++,r=r.previousElementSibling;return o<25&&e<100?`.${o}`:""}function K(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Q(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function Y(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(e),!0).forEach((function(n){K(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Q(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var tt="__AMP__EXPERIMENT_TOGGLES";function nt(t){var n,e,o,i,s;if(t[tt])return t[tt];t[tt]=c();const a=t[tt];l(a);const f=Y(Y({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(e=t.AMP_EXP)&&void 0!==e?e:u((null===(o=t.__AMP_EXP)||void 0===o?void 0:o.textContent)||"{}"));for(const t in f){const n=f[t];"number"==typeof n&&n>=0&&n<=1&&(a[t]=Math.random()<n)}const h=null===(i=t.AMP_CONFIG)||void 0===i?void 0:i["allow-doc-opt-in"];if(r(h)&&h.length){const n=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n){var d;const t=(null===(d=n.getAttribute("content"))||void 0===d?void 0:d.split(","))||[];for(const n of t)h.includes(n)&&(a[n]=!0)}}Object.assign(a,function(t){var n;let e="";try{var o;"localStorage"in t&&(e=null!==(o=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==o?o:"")}catch(t){}const r=(null===(n=e)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],i=c();for(const t of r)t&&("-"==t[0]?i[t.substr(1)]=!1:i[t]=!0);return i}(t));const m=null===(s=t.AMP_CONFIG)||void 0===s?void 0:s["allow-url-opt-in"];if(r(m)&&m.length){const n=C(t.location.originalHash||t.location.hash);for(const t of m){const e=n[`e-${t}`];"1"==e&&(a[t]=!0),"0"==e&&(a[t]=!1)}}return a}var et=(()=>self.AMP.config.urls)();new Set(["c","v","a","ad"]);var ot,rt=t=>"string"==typeof t?it(t):t;function it(t,n){return ot||(ot=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(ot,t)}function st(t,n,e="source"){var o;return D(null!=t,"%s %s must be available",n,e),D("https:"==(o=rt(o=t)).protocol||"localhost"==o.hostname||"127.0.0.1"==o.hostname||function(t,n){const e=t.length-n.length;return e>=0&&t.indexOf(n,e)==e}(o.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,e,t),t}var ct=(()=>self.AMP.config.urls)(),lt={};function ut(t,n,e,o){const r=e||n.getAttribute("type");D(r,"Attribute type required for <amp-ad>: %s",n);const i=function(t){let n=0;for(let e=t;e&&e!=e.parent;e=e.parent)n++;return String(n)+"-"+ht(t)}(t);let s={};return function(t,n){const{dataset:e}=t;for(const t in e)t.startsWith("vars")||(n[t]=e[t]);const o=t.getAttribute("json");if(o){const e=a(o);if(void 0===e)throw G().createError("Error parsing JSON in json attribute in element %s",t);for(const t in e)n[t]=e[t]}}(n,s),s=function(t,n,e,o){const r=Date.now(),i=n.getAttribute("width"),s=n.getAttribute("height");(o=o||{}).width=h(i),o.height=h(s),n.getAttribute("title")&&(o.title=n.getAttribute("title"));let c=t.location.href;"about:srcdoc"==c&&(c=t.parent.location.href);const l=q(n),u=Z(n,"documentInfo").get(),a=(d=n,Z(d,"viewer")).getUnconfirmedReferrerUrl(),f=function(t){const n=t.ownerDocument.body;let e=0,o=0;for(let r=t;r&&r!=n;r=r.offsetParent)e+=r.offsetLeft,o+=r.offsetTop;const{offsetHeight:r,offsetWidth:i}=t;return function(t,n,e,o){return{left:t,top:n,width:e,height:o,bottom:n+o,right:t+e,x:t,y:n}}(e,o,i,r)}(n);var d,m,p,v;o._context={"ampcontextVersion":"2301041800000","ampcontextFilepath":`${et.thirdParty}/2301041800000/ampcontext-v0.js`,"sourceUrl":u.sourceUrl,"referrer":a,"canonicalUrl":u.canonicalUrl,"pageViewId":u.pageViewId,"location":{"href":c},"startTime":r,"tagName":n.tagName,"mode":{localDev:!1,development:!1,esm:F(v).esm,test:!1,rtvVersion:F(v).rtvVersion},"canary":(m=t,!(null===(p=m.AMP_CONFIG)||void 0===p||!p.canary)),"hidden":!l.isVisible(),"initialLayoutRect":f?{"left":f.left,"top":f.top,"width":f.width,"height":f.height}:null,"domFingerprint":H.generate(n),"experimentToggles":nt(t),"sentinel":e};const g=n.getAttribute("src");return g&&(o.src=g),o}(t,n,i,s),s.type=r,Object.assign(s._context,o),s}function at(t){return`${ct.thirdParty}/2301041800000/vendor/${t}.mjs`}function ft(t,n,e){return function(t,n,e){const o=n.getMetaByName("amp-3p-iframe-src");if(!o)return null;const r=st(o,'meta[name="amp-3p-iframe-src"]');D(-1==r.indexOf("?"),"3p iframe url must not include query string %s in element %s.",r,o);const i=it(r);return D("localhost"==i.hostname&&!e||i.origin!=it(t.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",r,i.origin,o),`${r}?2301041800000`}(t,n,e)||function(t,n){return t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ht(t),"https://"+t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${ct.thirdPartyFrameHost}/2301041800000/frame.html`}(t)}function ht(t){let n;if(t.crypto&&t.crypto.getRandomValues){const e=new Uint32Array(2);t.crypto.getRandomValues(e),n=String(e[0])+e[1]}else n=String(t.Math.random()).substr(2)+"0";return n}function dt(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function mt(t){return t.data}var pt="unlisten";function vt(t,n,e){const o=function(t,n){let{listeningFors:e}=t;return!e&&n&&(e=t.listeningFors=Object.create(null)),e||null}(t,e);if(!o)return o;let r=o[n];return!r&&e&&(r=o[n]=[]),r||null}function gt(t,n){for(let e=n;e&&e!=e.parent;e=e.parent)if(e==t)return!0;return!1}function bt(t){const n={"sentinel":pt};for(let e=t.length-1;e>=0;e--){const o=t[e];if(!o.frame.contentWindow){t.splice(e,1);const{events:r}=o;for(const t in r)r[t].splice(0,1/0).forEach((t=>{t(n)}))}}}function wt(t,n){return n?t.getAttribute("data-amp-3p-sentinel"):"amp"}var yt=class extends t.BaseElement{constructor(t){super(t),this.Lv=null,this.pj=new o,this.vj=new o,this.Yt={},this.dw=null,this.Pb=this.Pb.bind(this),this.oj=null}preconnectCallback(t){const n=J(this.win,"preconnect");!function(t,n,e,o){const r=ft(t,e);o.preload(e,r,"document"),o.preload(e,at("3d-gltf"),"script")}(this.win,0,this.getAmpDoc(),n),n.url(this.getAmpDoc(),"https://cdnjs.cloudflare.com/ajax/libs/three.js/91/three.js",t),n.url(this.getAmpDoc(),"https://cdn.jsdelivr.net/npm/three@0.91/examples/js/loaders/GLTFLoader.js",t),n.url(this.getAmpDoc(),"https://cdn.jsdelivr.net/npm/three@0.91/examples/js/controls/OrbitControls.js",t)}unlayoutCallback(){var t,n,e;return null===(t=this.oj)||void 0===t||t.call(this),this.oj=null,this.lj(!1),this.Lv&&(null===(e=(n=this.Lv).parentElement)||void 0===e||e.removeChild(n),this.Lv=null),this.dw&&this.dw(),this.pj=new o,this.vj=new o,function(t,n){!function(t,n,e){const o=O.get(t);if(o&&(function(t,n){const o=[];let r=0;for(let n=0;n<t.length;n++){const s=t[n];(i=s).callback===e&&0===i.type?o.push(s):(r<n&&(t[r]=s),r++)}var i;r<t.length&&(t.length=r)}(o),0==o.length)){O.delete(t),S.delete(t);const n=t.ownerDocument.defaultView;n&&x(n).unobserve(t)}}(t,0,n)}(this.element,this.Pb),!0}buildCallback(){const t=(t,n,e)=>this.element.hasAttribute(t)?n(this.element.getAttribute(t)):e,n=t=>"false"!==t,e=t=>t,o=st(t("src",e,""),this.element),r=t("alpha",n,!1);var i,s;this.Yt={"src":(i=o,s=this.getAmpDoc().getUrl(),s=rt(s),new URL(i,s.href).toString()),"renderer":{"alpha":r,"antialias":t("antialiasing",n,!0)},"rendererSettings":{"clearAlpha":r?0:1,"clearColor":t("clearColor",e,"#fff"),"maxPixelRatio":t("maxPixelRatio",(t=>parseFloat(t)),devicePixelRatio||1)},"controls":{"enableZoom":t("enableZoom",n,!0),"autoRotate":t("autoRotate",n,!1)}},this.registerAction("setModelRotation",(t=>{this.gj("setModelRotation",t.args).catch((t=>(W.dev||(W.dev=z())).error("AMP-3D-GLTF","setModelRotation failed: %s",t)))}),1)}layoutCallback(){if(this.oj=function(t,n,e){const o=f(t);let r=M.get(o);r||M.set(o,r=k(_,o));let i=A.get(t);return i||(i=[],A.set(t,i)),i.push(n),r.observe(t),()=>{!function(t,n){const e=A.get(t);if(!e)return;if(!function(t,n){const e=t.indexOf(n);return-1!=e&&(t.splice(e,1),!0)}(e,n))return;if(e.length)return;const o=f(t),r=M.get(o);null==r||r.unobserve(t),A.delete(t)}(t,n)}}(this.element,(({isIntersecting:t})=>this.lj(t))),!(()=>{const t=document.createElement("canvas"),n=t.getContext("webgl")||t.getContext("experimental-webgl");return n&&n instanceof WebGLRenderingContext})())return this.toggleFallback(!0),n||(n=Promise.resolve(void 0));const t=function(t,n,o,r,i={}){const{allowFullscreen:s=!1,initialIntersection:l}=i;U(void 0===n.isConnected||!0===n.isConnected);const u=ut(t,n,o,r);l&&(u._context.initialIntersection=l);const a=t.document.createElement("iframe");lt[u.type]||(lt[u.type]=0),lt[u.type]+=1;const f=ft(t,n.getAmpDoc()),h=it(f).hostname,d=JSON.stringify({"host":h,"bootstrap":at(u.type),"type":u.type,"count":lt[u.type],"attributes":u});return a.src=f,a.ampLocation=it(f),a.name=d,u.width&&(a.width=u.width),u.height&&(a.height=u.height),u.title&&(a.title=u.title),s&&a.setAttribute("allowfullscreen","true"),a.setAttribute("scrolling","no"),function(t,n,o,r,i){const s=function(t,n,o){if(n.startsWith("--"))return n;e||(e=c());let r=e[n];if(!r||o){if(r=n,void 0===t[n]){const e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(let e=0;e<b.length;e++){const o=b[e]+n;if(void 0!==t[o])return o}return""}(t,e);void 0!==t[o]&&(r=o)}o||(e[n]=r)}return r}(t.style,n,i);if(!s)return;const l=r?o+r:o;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return b.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(s),l)}(a,"border","none"),a.onload=function(){this.readyState="complete"},a.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(o)||function(t){if(!t.sandbox||!t.sandbox.supports)return;const n=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"];for(let e=0;e<n.length;e++){const o=n[e];if(!t.sandbox.supports(o))return}t.sandbox=n.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}(a),a.setAttribute("data-amp-3p-sentinel",u._context.sentinel),a}(this.win,this.element,"3d-gltf",this.Yt);var o;return t.title=this.element.title||"GLTF 3D model",(o=t).classList.add("i-amphtml-fill-content"),o.classList.add("i-amphtml-replaced-content"),this.Lv=t,this.dw=U(this.bj()),this.element.appendChild(this.Lv),function(t,n){!function(t,n,e){const o=t.ownerDocument.defaultView;if(!o)return;let r=O.get(t);if(r||(r=[],O.set(t,r),x(o).observe(t)),!r.some((t=>t.callback===e&&0===t.type))){r.push({type:0,callback:e});const n=S.get(t);n&&setTimeout((()=>R(0,e,n)))}}(t,0,n)}(this.element,this.Pb),this.vj.promise}bj(){if(!this.Lv)return;const t=(t,n)=>function(t,n,e,o,r,i){U(t.src),U(!t.parentNode),U(e);const s=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(!mt(n))return;const e=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?a(t,(t=>{}))||null:dt(t)?function(t){if(!dt(t))return null;const n=t.indexOf("{");return l(-1!=n),a(t.substr(n),(n=>{v(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(t):null),t}(mt(n));if(!e||!e.sentinel)return;const o=function(t,n,e,o){const r=vt(t,n);if(!r)return r;let i;for(let t=0;t<r.length;t++){const n=r[t],{contentWindow:e}=n.frame;if(e){if(o==e||gt(e,o)){i=n;break}}else setTimeout(bt,0,r)}return i?i.events:null}(t,e.sentinel,n.origin,n.source);if(!o)return;let r=o[e.type];if(r){r=r.slice();for(let t=0;t<r.length;t++)(0,r[t])(e,n.source,n.origin,n)}}))}(s);const c=function(t,n,e){const o=vt(t,wt(n,e),!0);let r;for(let t=0;t<o.length;t++){const e=o[t];if(e.frame===n){r=e;break}}return r||(r={frame:n,events:Object.create(null)},o.push(r)),r.events}(s,t,o),u=it(t.src).origin;let f,h=c[n]||(c[n]=[]),d=function(n,o,s,c){if("amp"==n.sentinel){if(o!=t.contentWindow)return;const n="null"==s&&i;if(u!=s&&!n)return}(r||o==t.contentWindow)&&(n.sentinel!=pt?e(n,o,s,c):f())};return h.push(d),f=function(){if(d){const t=h.indexOf(d);t>-1&&h.splice(t,1),d=null,h=null,e=null}}}(this.Lv,t,n,!0),n=[t("ready",this.pj.resolve),t("loaded",this.vj.resolve),t("error",(()=>{this.toggleFallback(!0)}))];return()=>n.forEach((t=>t()))}gj(t,n){return this.pj.promise.then((()=>{const e={"action":t,"args":n};this.gA("action",e)}))}gA(t,n){!function(t,n,e,o,r){!function(t,n,e,o,r){if(!t.contentWindow)return;o.type=e,o.sentinel=wt(t,true);let i=o;i="amp-"+JSON.stringify(o);for(let t=0;t<n.length;t++){const e=n[t];e.win.postMessage(i,e.origin)}}(t,[{win:t.contentWindow,origin:"*"}],n,e)}(this.Lv,t,n)}lj(t){this.gj("toggleAmpViewport",t)}pauseCallback(){this.gj("toggleAmpPlay",!1)}resumeCallback(){this.gj("toggleAmpPlay",!0)}Pb({height:t,width:n}){this.gj("setSize",{"width":n,"height":t})}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}};t.registerElement("amp-3d-gltf",yt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-3d-gltf-0.1.mjs.map