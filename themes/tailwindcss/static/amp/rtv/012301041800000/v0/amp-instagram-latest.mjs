;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-instagram",ev:"0.1",l:!0,f:function(t,n){(()=>{var{hasOwnProperty:n,toString:r}=Object.prototype;function i(t){return"[object Object]"===r.call(t)}var e,s=["Webkit","webkit","Moz","moz","ms","O","o"];function u(t,n,r,i,u){const o=function(t,n,r){if(n.startsWith("--"))return n;e||(e=Object.create(null));let i=e[n];if(!i||r){if(i=n,void 0===t[n]){const r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),e=function(t,n){for(let r=0;r<s.length;r++){const i=s[r]+n;if(void 0!==t[i])return i}return""}(t,r);void 0!==t[e]&&(i=e)}r||(e[n]=i)}return i}(t.style,n,u);if(!o)return;const a=i?r+i:r;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return s.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(o),a)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var o=self.__AMP_LOG;function a(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function l(t,n,r,i,e,s,u,o,a,l,c){return t}var c,f=t=>{return n="preconnect",function(t,n){l(function(t,n){const r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}(t,n));const r=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return r.obj||(l(r.ctor),l(r.context),r.obj=new r.ctor(r.context),l(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}(function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n);var n},d=class extends t.BaseElement{constructor(t){super(t),this.Lv=null,this.t4="",this.dw=null,this.n4="",this.t9=null}preconnectCallback(t){f(this.win).url(this.getAmpDoc(),"https://www.instagram.com",t),f(this.win).url(this.getAmpDoc(),"https://instagram.fsnc1-1.fna.fbcdn.net",t)}renderOutsideViewport(){return!1}buildCallback(){var t,n;this.t4=(t=this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),"The data-shortcode attribute is required for <amp-instagram> %s",n=this.element,(o.user||(o.user=a()),void o.user.win?o.userForEmbed||(o.userForEmbed=a()):o.user).assert(t,"The data-shortcode attribute is required for <amp-instagram> %s",n,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.n4=this.element.hasAttribute("data-captioned")?"captioned/":""}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}layoutCallback(){const t=this.element.ownerDocument.createElement("iframe");return this.Lv=t,this.dw=function(t,n,r,i){let e=t,s=r,u=t=>{try{return s(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}};const o=function(){if(void 0!==c)return c;c=!1;try{const t={get capture(){return c=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return c}();return e.addEventListener(n,u,!!o&&i),()=>{null==e||e.removeEventListener(n,u,!!o&&i),s=null,e=null,u=null}}(this.win,"message",this.r4.bind(this),void 0),t.setAttribute("scrolling","no"),t.setAttribute("frameborder","0"),t.setAttribute("allowtransparency","true"),t.setAttribute("title","Instagram: "+this.element.getAttribute("alt")),t.src="https://www.instagram.com/p/"+encodeURIComponent(this.t4)+"/embed/"+this.n4+"?cr=1&v=12",t.classList.add("i-amphtml-fill-content"),this.element.appendChild(t),u(t,"opacity",0),this.t9=this.loadPromise(t).then((()=>{this.getVsync().mutate((()=>{u(t,"opacity",1)}))}))}r4(t){if("https://www.instagram.com"!=t.origin||t.source!=this.Lv.contentWindow)return;const n=function(t){return t.data}(t);if(!n||!i(n)&&!n.startsWith("{"))return;const r=i(n)?n:function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(n);if(void 0!==r&&"MEASURE"==r.type&&r.details){const t=r.details.height;this.getVsync().measure((()=>{this.Lv&&this.Lv.offsetHeight!==t&&this.forceChangeHeight(t)}))}}unlayoutOnPause(){return!0}unlayoutCallback(){var t,n;return this.Lv&&(null===(n=(t=this.Lv).parentElement)||void 0===n||n.removeChild(t),this.Lv=null,this.t9=null),this.dw&&this.dw(),!0}};t.registerElement("amp-instagram",d,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-instagram-0.1.mjs.map