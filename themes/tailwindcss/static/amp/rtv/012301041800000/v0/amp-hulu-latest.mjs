;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-hulu",ev:"0.1",l:!0,f:function(e,t){(()=>{var{hasOwnProperty:t,toString:n}=Object.prototype;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var i=self.__AMP_LOG;function u(e){return function(e,t){throw new Error("failed to call initLogConstructor")}()}function r(e,t,n,i,u,r,l,s,o,a,d){return e}var l=class extends e.BaseElement{constructor(e){super(e),this.Lv=null,this.Bb=null}preconnectCallback(){var e,t,n;(e=this.win,t=e,n="preconnect",function(e,t){r(function(e,t){const n=e.__AMP_SERVICES&&e.__AMP_SERVICES[t];return!(!n||!n.ctor)}(e,t));const n=function(e){let t=e.__AMP_SERVICES;return t||(t=e.__AMP_SERVICES={}),t}(e)[t];return n.obj||(r(n.ctor),r(n.context),n.obj=new n.ctor(n.context),r(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}(t=function(e){return e.__AMP_TOP||(e.__AMP_TOP=e)}(t),n)).preload(this.getAmpDoc(),this.hw())}isLayoutSupported(e){return function(e){return"fixed"==e||"fixed-height"==e||"responsive"==e||"fill"==e||"flex-item"==e||"fluid"==e||"intrinsic"==e}(e)}layoutCallback(){const e=document.createElement("iframe"),t=this.hw();return e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","true"),e.src=t,e.classList.add("i-amphtml-fill-content"),this.element.appendChild(e),this.Lv=e,this.loadPromise(e)}unlayoutOnPause(){return!0}unlayoutCallback(){var e,t;return this.Lv&&(null===(t=(e=this.Lv).parentElement)||void 0===t||t.removeChild(e),this.Lv=null),!0}buildCallback(){var e,t;this.element.classList.add("i-amphtml-media-component"),this.Bb=(e=this.element.getAttribute("data-eid"),"The data-eid attribute is required for <amp-hulu> %s",t=this.element,(i.user||(i.user=u()),void i.user.win?i.userForEmbed||(i.userForEmbed=u()):i.user).assert(e,"The data-eid attribute is required for <amp-hulu> %s",t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined))}hw(){return r(this.Bb),`https://player.hulu.com/site/dash/mobile_embed.html?amp=1&eid=${encodeURIComponent(this.Bb||"")}`}};e.registerElement("amp-hulu",l)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-hulu-0.1.mjs.map