;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-imgur",ev:"0.1",l:!0,f:function(t,n){(()=>{var{hasOwnProperty:n,toString:e}=Object.prototype;function r(t){return"[object Object]"===e.call(t)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var i=self.__AMP_LOG;function u(t){return i.user||(i.user=s()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(i.user.win,t)?i.userForEmbed||(i.userForEmbed=s()):i.user}function s(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function l(t,n,e,r,i,u,s,l,o,c,f){return t}var o,c="amp-imgur",f=class extends t.BaseElement{constructor(t){super(t),this.Lv=null,this.dw=null,this.fb=null}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){var t,n;t=this.element.dataset.imgurId,n=this.element,u().assert(t,"The data-imgur-id attribute is required for <amp-imgur> %s",n,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)}layoutCallback(){this.dw=function(t,n,e,r){let i=t,u=e,s=t=>{try{return u(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}};const l=function(){if(void 0!==o)return o;o=!1;try{const t={get capture(){return o=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return o}();return i.addEventListener(n,s,!!l&&r),()=>{null==i||i.removeEventListener(n,s,!!l&&r),u=null,i=null,s=null}}(this.win,"message",this.ab.bind(this),void 0);const t=this.element.dataset.imgurId.replace(/^(a\/)?(.*)/,((t,n,e)=>(n||"")+encodeURIComponent(e)));return this.hb(t).catch((n=>{if(t.startsWith("a/"))throw n;const e=`a/${t}`;return this.hb(e).then((()=>{}))})).catch((()=>{u().error(c,`Failed to load. Is "${t}" a correct id?`)}))}hb(t){const{element:n}=this,e=(r=n.ownerDocument,i={"scrolling":"no","frameborder":"0","allowfullscreen":"true","title":n.title||"imgur post"},function(t,n){for(const e in n)t.setAttribute(e,n[e]);return t}(r.createElement("iframe"),i));var r,i;e.src=`https://imgur.com/${t}/embed?pub=true`,this.Lv&&n.removeChild(this.Lv),this.Lv=e,n.appendChild(e),function(t,n){t.classList.add("i-amphtml-fill-content")}(e);const{promise:u,resolve:s}=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}};return this.fb=s,this.loadPromise(this.Lv).then((()=>{return(t=this.win,function(t,n){l(function(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES.timer;return!(!e||!e.ctor)}(t));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(l(e.ctor),l(e.context),e.obj=new e.ctor(e.context),l(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}(t,"timer")).timeoutPromise(500,u);var t}))}ab(t){if("https://imgur.com"!=t.origin||t.source!=this.Lv.contentWindow)return;const n=function(t){return t.data}(t);if(!n||!r(n)&&!n.startsWith("{"))return;null==this||this.fb();const e=r(n)?n:function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(n);if("resize_imgur"==e.message){const t=e.height;this.attemptChangeHeight(t).catch((()=>{}))}}unlayoutCallback(){var t,n;return this.Lv&&(null===(n=(t=this.Lv).parentElement)||void 0===n||n.removeChild(t),this.Lv=null),this.dw&&this.dw(),!0}};t.registerElement(c,f)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-imgur-0.1.mjs.map