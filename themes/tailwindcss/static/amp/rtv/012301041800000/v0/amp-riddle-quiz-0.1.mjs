;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-riddle-quiz",ev:"0.1",l:!0,f:function(t,e){(()=>{var e,{hasOwnProperty:i,toString:n}=Object.prototype;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function l(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}var s=class extends t.BaseElement{constructor(t){super(t),this.Lv=null,this.lw=400,this.uw="",this.dw=null}R(t){if(!this.Lv||"https://www.riddle.com"!=t.origin||t.source!=this.Lv.contentWindow)return;const e=function(t){return t.data}(t);var i;i=e,"[object Object]"===n.call(i)&&null!=e.riddleId&&e.riddleId==this.uw&&this.aw(e.riddleHeight)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}layoutCallback(){var t,i;this.uw=(t=this.element.getAttribute("data-riddle-id"),"The data-riddle-id attribute is required for <amp-riddle-quiz> %s",i=this.element,(r.user||(r.user=l()),void r.user.win?r.userForEmbed||(r.userForEmbed=l()):r.user).assert(t,"The data-riddle-id attribute is required for <amp-riddle-quiz> %s",i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.dw=function(t,i,n,r){let l=t,s=n,u=t=>{try{return s(t)}catch(t){var e,i;throw null===(e=(i=self).__AMP_REPORT_ERROR)||void 0===e||e.call(i,t),t}};const d=function(){if(void 0!==e)return e;e=!1;try{const t={get capture(){return e=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return e}();return l.addEventListener(i,u,!!d&&r),()=>{null==l||l.removeEventListener(i,u,!!d&&r),s=null,l=null,u=null}}(this.win,"message",this.R.bind(this),void 0);const n=this.element.ownerDocument.createElement("iframe");return this.Lv=n,n.setAttribute("scrolling","no"),n.setAttribute("frameborder","0"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowfullscreen","true"),n.src="https://www.riddle.com/a/iframe/"+encodeURIComponent(this.uw),n.classList.add("i-amphtml-fill-content"),this.element.appendChild(n),this.loadPromise(n)}unlayoutCallback(){var t,e;return this.dw&&this.dw(),this.Lv&&(null===(e=(t=this.Lv).parentElement)||void 0===e||e.removeChild(t),this.Lv=null),!0}aw(t){var e;"number"==typeof(e=t)&&isFinite(e)&&t!==this.lw&&(this.lw=t,this.attemptChangeHeight(this.lw).catch((()=>{})))}};t.registerElement("amp-riddle-quiz",s,!1)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-riddle-quiz-0.1.mjs.map