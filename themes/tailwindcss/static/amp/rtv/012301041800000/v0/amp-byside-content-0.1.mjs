;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-byside-content",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,{isArray:e}=Array,{hasOwnProperty:i,toString:o}=Object.prototype;function r(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function s(t,n,e){return function(t,n){for(const e in n)t.setAttribute(e,n[e]);return t}(t.createElement(n),e)}function a(t,n){t.classList.add("i-amphtml-fill-content"),n&&t.classList.add("i-amphtml-replaced-content")}function l(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,o=new Error(e);for(const n in t)o[n]=t[n];return o.stack=i,o}function c(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=l(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function u(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}var d=["Webkit","webkit","Moz","moz","ms","O","o"];function f(t,e,i,o,r){const s=function(t,e,i){if(e.startsWith("--"))return e;n||(n=Object.create(null));let o=n[e];if(!o||i){if(o=e,void 0===t[e]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),i=function(t,n){for(let e=0;e<d.length;e++){const i=d[e]+n;if(void 0!==t[i])return i}return""}(t,n);void 0!==t[i]&&(o=i)}i||(n[e]=o)}return o}(t.style,e,r);if(!s)return;const a=o?i+o:i;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return d.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(s),a)}function h(t,n){for(const e in n)f(t,e,n[e])}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m,p=self.__AMP_LOG;function b(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function g(t,n,e,i,o,r,s,a,l,c,u){return t}function y(t,n,e,i,o,r,s,a,l,c,u){return(p.user||(p.user=b()),void p.user.win?p.userForEmbed||(p.userForEmbed=b()):p.user).assert(t,n,e,i,o,r,s,a,l,c,u)}function v(t,n){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function w(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,v(n,"ampdoc")).getAmpDoc(t):t;var n,e}function x(t,n){g(E(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(g(e.ctor),g(e.context),e.obj=new e.ctor(e.context),g(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function E(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}function _(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function I(t){return t.data}function R(t,n){return m||(m=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(m,t)}new Set(["c","v","a","ad"]);var k="unlisten";function A(t,n,e){const i=function(t,n){let{listeningFors:e}=t;return!e&&n&&(e=t.listeningFors=Object.create(null)),e||null}(t,e);if(!i)return i;let o=i[n];return!o&&e&&(o=i[n]=[]),o||null}function T(t,n){for(let e=n;e&&e!=e.parent;e=e.parent)if(e==t)return!0;return!1}function P(t){const n={"sentinel":k};for(let e=t.length-1;e>=0;e--){const i=t[e];if(!i.frame.contentWindow){t.splice(e,1);const{events:o}=i;for(const t in o)o[t].splice(0,1/0).forEach((t=>{t(n)}))}}}var O="amp-byside-content",C="main",M=0,z=class extends t.BaseElement{constructor(t){super(t),this.O_=[],this.av=null,this.Lv=null,this.t9=null,this.O7=C,this.z7="",this.se="",this.S7="",this.N7="",this.U7="",this.h="",this.zy="",this.V7=function(t,n,e){let i=0,o=0,r=null;function s(){i=0;const e=100-(t.Date.now()-o);var a;e>0?i=t.setTimeout(s,e):(a=r,r=null,n.apply(null,a))}return function(...n){o=t.Date.now(),r=n,i||(i=t.setTimeout(s,100))}}(this.win,(t=>{this.sb(t)}))}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}preconnectCallback(t){var n;this.h&&(n=this.win,v(n,"preconnect")).url(this.getAmpDoc(),this.h,t)}buildCallback(){this.z7=y(this.element.getAttribute("data-webcare-id"),"The data-webcare-id attribute is required for <%s> %s",O,this.element),this.U7=y(this.element.getAttribute("data-label"),"The data-label attribute is required for <%s> %s",O,this.element),this.O7=this.element.getAttribute("data-webcare-zone")||"main",this.se=this.element.getAttribute("data-channel")||"",this.S7=this.element.getAttribute("data-lang")||"pt",this.N7=this.element.getAttribute("data-fid")||"",this.h=this.L7(),this.zy=this.h+"/BWA"+encodeURIComponent(this.z7)+"/amp/"}createPlaceholderCallback(){const t=this.win.document.createElement("div");return t.setAttribute("placeholder",""),t.appendChild(this.W7()),a(t),t}layoutCallback(){const t=this.element.ownerDocument.createElement("iframe");return this.Lv=t,t.name="amp_byside_content_iframe"+M++,t.setAttribute("title",this.element.getAttribute("title")||""),t.setAttribute("scrolling","no"),t.setAttribute("frameborder","0"),t.setAttribute("allowtransparency","true"),t.setAttribute("allowfullscreen","true"),t.setAttribute("sandbox","allow-scripts allow-same-origin allow-popups"),h(t,{"opacity":0}),this.element.appendChild(this.l9()),a(t),this.j7().then((n=>{this.av=function(t,n,e="source"){return y(null!=t,"%s %s must be available",n,e),y("https:"==(i=(t=>"string"==typeof t?R(t):t)(i=t)).protocol||"localhost"==i.hostname||"127.0.0.1"==i.hostname||function(t,n){const e=t.length-n.length;return e>=0&&t.indexOf(n,e)==e}(i.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,e,t),t;var i}(n,this.element,this.ls()),t.src=this.av;const e=function(t,n,e,i,o,s){g(t.src),g(!t.parentNode),g(e);const a=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(!I(n))return;const e=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?r(t,(t=>{}))||null:_(t)?function(t){if(!_(t))return null;const n=t.indexOf("{");return r(t.substr(n),(n=>{!function(t){const n=c.apply(null,arguments);setTimeout((()=>{throw u(n),n}))}(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(t):null),t}(I(n));if(!e||!e.sentinel)return;const i=function(t,n,e,i){const o=A(t,n);if(!o)return o;let r;for(let t=0;t<o.length;t++){const n=o[t],{contentWindow:e}=n.frame;if(e){if(i==e||T(e,i)){r=n;break}}else setTimeout(P,0,o)}return r?r.events:null}(t,e.sentinel,n.origin,n.source);if(!i)return;let o=i[e.type];if(o){o=o.slice();for(let t=0;t<o.length;t++)(0,o[t])(e,n.source,n.origin,n)}}))}(a);const l=function(t,n,e){const i=A(t,"amp",!0);let o;for(let t=0;t<i.length;t++){const e=i[t];if(e.frame===n){o=e;break}}return o||(o={frame:n,events:Object.create(null)},i.push(o)),o.events}(a,t),d=R(t.src).origin;let f,h=l["embed-size"]||(l["embed-size"]=[]),m=function(n,i,o,r){if("amp"==n.sentinel){if(i!=t.contentWindow)return;const n="null"==o&&undefined;if(d!=o&&!n)return}i==t.contentWindow&&(n.sentinel!=k?e(n,i,o,r):f())};return h.push(m),f=function(){if(m){const t=h.indexOf(m);t>-1&&h.splice(t,1),m=null,h=null,e=null}}}(t,0,this.V7);return this.O_.push(e),this.element.appendChild(t),this.t9=this.loadPromise(t)})).then((()=>{this.getVsync().mutate((()=>{h(t,{"opacity":1})}))}))}L7(){const t=this.O7===C?"webcare":this.O7;return"https://"+encodeURIComponent(t)+".byside.com"}j7(){const t=function(t,n){return function(t,n,e){if(!n)return t;const i=t.split("#",2),o=i[0].split("?",2);let r=o[0]+(o[1]?`?${o[1]}&${n}`:`?${n}`);return r+=i[1]?`#${i[1]}`:"",r}(t,function(t){const n=[];for(const s in t){let a=t[s];if(null!=a){a=e(r=a)?r:[r];for(let t=0;t<a.length;t++)n.push((i=s,o=a[t],`${encodeURIComponent(i)}=${encodeURIComponent(o)}`))}}var i,o,r;return n.join("&")}(n))}(this.zy+"placeholder.php",{"label":this.U7,"webcare_id":this.z7,"bwch":this.se||"","lang":this.S7||"","fid":this.N7||"","bwit":this.N7?"I":"A","tuid":"CLIENT_ID(byside_webcare_tuid)","suid":"","puid":"PAGE_VIEW_IDpTIMESTAMP","referrer":"DOCUMENT_REFERRER","page":"SOURCE_URL","amppage":"AMPDOC_URL","bwpt":"TITLE","bres":"VIEWPORT_WIDTHxVIEWPORT_HEIGHT","res":"SCREEN_WIDTHxSCREEN_HEIGHT","v":"v20171116a","ampv":"AMP_VERSION","viewer":"VIEWER","ua":"USER_AGENT","r":"RANDOM","_resize":"1"});return(n=this.element,function(t,n){const e=function(t){const n=w(t);return n.isSingleDoc()?n.win:n}(w(t));return E(e,n)?x(e,n):null}(n,"url-replace")).expandUrlAsync(t);var n}ls(){let t=this.z7||"";return t+=t&&this.U7?": ":"",t+=this.U7||"","amp-byside-content: "+(t||"<unknown tag>")}l9(){const t=this.element.ownerDocument,n=s(t,"div",{"class":"i-amphtml-byside-content-overflow","overflow":""}),e=s(t,"div",{"class":"i-amphtml-byside-content-overflow-content"}),i=s(t,"div",{"class":"i-amphtml-byside-content-arrow-down"});return e.appendChild(i),n.appendChild(e),n}W7(){const t=this.element.ownerDocument,n=s(t,"div",{"class":"i-amphtml-byside-content-loading-container"}),e=s(t,"div",{"class":"i-amphtml-byside-content-loading-animation"});return n.appendChild(e),n}sb(t){this.getVsync().measure((()=>{let n,e;const i=parseInt(t.height,10);isNaN(i)||(n=Math.max(i+(this.element.offsetHeight-this.Lv.offsetHeight),i));const o=parseInt(t.width,10);isNaN(o)||(e=Math.max(o+(this.element.offsetWidth-this.Lv.offsetWidth),o)),void 0===n&&void 0===e||this.attemptChangeSize(n,e).then((()=>{void 0!==n&&this.element.setAttribute("height",n),void 0!==e&&this.element.setAttribute("width",e)}),(()=>{}))}))}unlayoutCallback(){var t,n;return this.O_.forEach((t=>t())),this.O_.length=0,this.Lv&&(null===(n=(t=this.Lv).parentElement)||void 0===n||n.removeChild(t),this.Lv=null,this.t9=null),!0}};t.registerElement("amp-byside-content",z,'.i-amphtml-byside-content-overflow{position:relative;top:100%;width:100%;height:100px;margin-top:-100px;text-align:center;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,#fff 75%)}.i-amphtml-byside-content-overflow,.i-amphtml-byside-content-overflow .i-amphtml-byside-content-overflow-content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-byside-content-overflow .i-amphtml-byside-content-overflow-content{width:100px;height:30px;border-radius:15px;background-color:#093c71;border:1px solid #093c71;color:#fff}.i-amphtml-byside-content-arrow-down{width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #fff}.i-amphtml-byside-content-loading-container{background-color:rgba(0,0,0,0.02);display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation{display:block;text-align:center;position:relative;height:16px;width:40px;margin:4px auto;background:transparent}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:after,.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:before{content:"";position:absolute;top:0;left:0;z-index:9;width:16px;height:16px;border-radius:50%;opacity:0.95;animation-name:i-amphtml-byside-content-loading-translate,i-amphtml-byside-content-loading-zindex;animation-delay:0;animation-duration:0.8s;animation-direction:alternate;animation-timing-function:linear;animation-iteration-count:infinite}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:before{background:#093c71}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:after{background:#e75204;z-index:0;animation-name:i-amphtml-byside-content-loading-translate-inverse,i-amphtml-byside-content-loading-zindex-inverse;animation-delay:0s,0.6s}@keyframes i-amphtml-byside-content-loading-translate{0%{transform:translate(-12px)}to{transform:translate(12px)}}@keyframes i-amphtml-byside-content-loading-zindex{0%{z-index:9}to{z-index:0}}@keyframes i-amphtml-byside-content-loading-translate-inverse{0%{transform:translate(12px)}to{transform:translate(-12px)}}@keyframes i-amphtml-byside-content-loading-zindex-inverse{0%{z-index:0}to{z-index:9}}\n/*# sourceURL=/extensions/amp-byside-content/0.1/amp-byside-content.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-byside-content-0.1.mjs.map