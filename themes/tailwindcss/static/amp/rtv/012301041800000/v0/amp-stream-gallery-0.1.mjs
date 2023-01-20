;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-stream-gallery",ev:"0.1",l:!0,f:function(t,s){(()=>{var s;function i(t){return t?Array.prototype.slice.call(t):[]}var{isArray:e}=Array,{hasOwnProperty:r,toString:n}=Object.prototype;function l(t){const s=Object.create(null);return t&&Object.assign(s,t),s}function a(t,s,i,e,r,n,l,a,o,h,u){return t}var o,h,u={bubbles:!0,cancelable:!0};function c(t,s){const{length:i}=t;for(let e=0;e<i;e++)s(t[e],e)}function m(t,s,i){const e=t.hasAttribute(s),r=void 0!==i?i:!e;return r!==e&&(r?t.setAttribute(s,""):t.removeAttribute(s)),r}function d(t){const s=t.ownerDocument||t;return o&&o.ownerDocument===s||(o=s.createElement("div")),p}function p(t){return function(t,s){if(a(1===s.length),a(Array.isArray(s)||(i=s,r.call(i,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return s[0]}});t.innerHTML=i.createHTML("ignored")}else t.innerHTML=s[0];var i;const e=t.firstElementChild;return a(e),a(!e.nextElementSibling),t.removeChild(e),e}(o,t)}var _=["Webkit","webkit","Moz","moz","ms","O","o"];function A(t){const s=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return _.some((t=>s.startsWith(t+"-")))?`-${s}`:s}function f(t,s,i){if(x(s))return s;h||(h=l());let e=h[s];if(!e||i){if(e=s,void 0===t[s]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(s),r=function(t,s){for(let i=0;i<_.length;i++){const e=_[i]+s;if(void 0!==t[e])return e}return""}(t,i);void 0!==t[r]&&(e=r)}i||(h[s]=e)}return e}function g(t,s){const{style:i}=t;for(const t in s)i.setProperty(A(f(i,t)),String(s[t]),"important")}function P(t,s,i,e,r){const n=f(t.style,s,r);if(!n)return;const l=e?i+e:i;t.style.setProperty(A(n),l)}function x(t){return t.startsWith("--")}function v(t,s,i){return s in t?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,t}function b(t,s){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),i.push.apply(i,e)}return i}function I(t){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?b(Object(i),!0).forEach((function(s){v(t,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))}))}return t}var M=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t,s=""){try{return decodeURIComponent(t)}catch(t){return s}}function y(t,s,i){let e=0,r=0,n=null;function l(){e=0;const a=i-(t.Date.now()-r);var o;a>0?e=t.setTimeout(l,a):(o=n,n=null,s.apply(null,o))}return function(...s){r=t.Date.now(),n=s,e||(e=t.setTimeout(l,i))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function T(t){return function(t,s){throw new Error("failed to call initLogConstructor")}()}function V(t,s,i,e,r,n,l,a,o,h,u){return t}function R(t,s){return k(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),s)}function S(t){return t.nodeType?(i=t,s=(i.ownerDocument||i).defaultView,R(s,"ampdoc")).getAmpDoc(t):t;var s,i}function C(t){const s=S(t);return s.isSingleDoc()?s.win:s}function k(t,s){V(O(t,s));const i=function(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}(t)[s];return i.obj||(V(i.ctor),V(i.context),i.obj=new i.ctor(i.context),V(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function O(t,s){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!i||!i.ctor)}var j,L="__AMP__EXPERIMENT_TOGGLES",N=t=>function(t,s){return k(C(S(t)),"owners")}(t),z=t=>R(t,"platform");function B(t,s,i,e){let r=t,n=i,l=t=>{try{return n(t)}catch(t){var s,i;throw null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t),t}};const a=function(){if(void 0!==j)return j;j=!1;try{const t={get capture(){return j=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return j}(),o=!(null==e||!e.capture);return r.addEventListener(s,l,a?e:o),()=>{null==r||r.removeEventListener(s,l,a?e:o),n=null,r=null,l=null}}function W(t,s,i,e){const r={detail:i};return Object.assign(r,e),new t.CustomEvent(s,r)}function $(t,s,i,e){return B(t,s,i,e)}function U(t){return t.detail}function H(t,s,i,e){let r=i;const n=B(t,s,(t=>{try{r(t)}finally{r=null,n()}}),e);return n}function Q(t,s){return t>0&&s>0?t%s:(t%s+s)%s}function D(t,s,i){return a(s<=i),Math.min(Math.max(t,s),i)}var F="amp-carousel:indexchange",G="amp-carousel:scrollstart",X="amp-carousel:scrollpositionchange",Z="start";function q(t,s){const{bottom:i,height:e,left:r,right:n,top:l,width:a}=s.getBoundingClientRect();return{start:0==t?r:l,end:0==t?n:i,length:0==t?a:e}}function J(t,s){const{end:i,start:e}=q(t,s);return(e+i)/2}function K(t,s){const{start:i}=q(t,s);return i}function Y(t,s,i){return s==Z?K(t,i):J(t,i)}function tt(t,s,i){P(s,0==t?"width":"height",`${i}px`)}function st(t,s,i){const{end:e,start:r}=q(t,s);return r<=i&&i<e}function it(t,s,i,e){const r=Y(t,s,e),n=Y(t,s,i),{length:l}=q(t,e);return(r-n)/l}function et(t,s,i){!function(t,s,i){0==t?s.scrollLeft=i:s.scrollTop=i}(t,s,function(t,s){return 0==t?s.scrollLeft:s.scrollTop}(t,s)+i)}var rt="i-amphtml-carousel-spacer";function nt(t,s){const i=function(t,s,i){const e=f(t.style,"scrollBehavior",void 0);if(e)return x(e)?t.style.getPropertyValue(e):t.style[e]}(t);P(t,"scrollBehavior","auto"),s(),P(t,"scrollBehavior",i)}function lt(t){return t.reduce(((t,s)=>t+s),0)}var at="__AMP_CAROUSEL_NEAR_VIEWPORT",ot="__AMP_CAROUSEL_IN_VIEWPORT",ht=100,ut=.01;function ct(t){return t.split(",").map((t=>{const s=/[a-z0-9.]+$/.exec(t);if(!s)return;const{index:i}=s,e=t.slice(i),r=t.slice(0,i).trim();return{mediaQueryList:window.matchMedia(r),value:e}})).filter(Boolean)}function mt(t){for(let s=0;s<t.length;s++){const{mediaQueryList:i,value:e}=t[s];if(i.matches)return e}return""}var dt=["<div class=i-amphtml-carousel-content><div class=i-amphtml-stream-gallery-slides><div class=i-amphtml-carousel-scroll></div></div><div class=i-amphtml-stream-gallery-arrow-prev-slot></div><div class=i-amphtml-stream-gallery-arrow-next-slot></div></div>"],pt=["<button class=i-amphtml-stream-gallery-next aria-hidden=true></button>"],_t=["<button class=i-amphtml-stream-gallery-prev aria-hidden=true></button>"],At={"never":0,"auto":1,"always":2},ft=class extends t.BaseElement{static prerenderAllowed(){return!0}constructor(t){super(t),this.tQ=new class{constructor(t){this.ZU=t,this.lQ={},this.cQ={}}updateAttribute(t,s){if(!this.ZU[t])return;const i=this.cQ[t];i&&this.uQ(i,null);const e=ct(s),r=()=>{this.dQ(t,mt(e))};this.uQ(e,r),r(),this.cQ[t]=e}dQ(t,s){if(this.lQ[t]===s)return;const i=this.ZU[t];i&&i(s),this.lQ[t]=s}uQ(t,s){t.forEach((t=>{const{mediaQueryList:i}=t;i.onchange=s}))}}(this.sQ()),this.PB=z(this.win).isIos(),this.Da=null,this.eQ=null,this._N=null,this.nQ=null,this.oQ=null,this.iQ=null,this.W8=null,this.ult=1,this.mlt=Number.MAX_VALUE,this.dlt=Number.MAX_VALUE,this.plt=1,this._lt=1,this.Alt=!1,this.flt=0,this.rQ=[],this.cZ=null,this.hQ=!1,this.aQ=null}sQ(){return{"extra-space":t=>{this.glt(t)},"inset-arrow-visibility":t=>{this.Plt(t)},"loop":t=>{this.xlt("true"==t)},"outset-arrows":t=>{this.vlt("true"==t)},"peek":t=>{this.blt(Number(t))},"slide":t=>{this.eQ.goToSlide(Number(t))},"slide-align":t=>{this.eQ.updateAlignment(t)},"snap":t=>{this.eQ.updateSnap("false"!=t)},"max-item-width":t=>{this.Ilt(Number(t))},"max-visible-count":t=>{this.Mlt(Number(t))},"min-item-width":t=>{this.wlt(Number(t))},"min-visible-count":t=>{this.ylt(Number(t))}}}NZ(){this.registerAction("prev",(t=>{const{trust:s}=t;this.eQ.prev(this.UZ(s))}),1),this.registerAction("next",(t=>{const{trust:s}=t;this.eQ.next(this.UZ(s))}),1),this.registerAction("goToSlide",(t=>{const{args:s,trust:i}=t;this.eQ.goToSlide(s.index||-1,{actionSource:this.UZ(i)})}),1)}Uy(){this.element.addEventListener(F,(t=>{this.NQ(t)})),this.element.addEventListener(G,(()=>{this.lK()})),this.element.addEventListener(X,(()=>{this.cK()})),this.oQ.addEventListener("click",(t=>{t.target!=t.currentTarget&&this.eQ.prev(0)})),this.nQ.addEventListener("click",(t=>{t.target!=t.currentTarget&&this.eQ.next(0)}))}goToSlide(t){this.eQ.goToSlide(t,{smoothScroll:!1})}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){var t,s;s=function(t,s){const i=function(t){var s,i,r,n,o;if(t[L])return t[L];t[L]=l();const h=t[L];a(h);const u=I(I({},null!==(s=t.AMP_CONFIG)&&void 0!==s?s:{}),null!==(i=t.AMP_EXP)&&void 0!==i?i:(c=(null===(r=t.__AMP_EXP)||void 0===r?void 0:r.textContent)||"{}",JSON.parse(c)));var c;for(const t in u){const s=u[t];"number"==typeof s&&s>=0&&s<=1&&(h[t]=Math.random()<s)}const m=null===(n=t.AMP_CONFIG)||void 0===n?void 0:n["allow-doc-opt-in"];if(e(m)&&m.length){const s=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(s){var d;const t=(null===(d=s.getAttribute("content"))||void 0===d?void 0:d.split(","))||[];for(const s of t)m.includes(s)&&(h[s]=!0)}}Object.assign(h,function(t){var s;let i="";try{var e;"localStorage"in t&&(i=null!==(e=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(t){}const r=(null===(s=i)||void 0===s?void 0:s.split(/\s*,\s*/g))||[],n=l();for(const t of r)t&&("-"==t[0]?n[t.substr(1)]=!1:n[t]=!0);return n}(t));const p=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(e(p)&&p.length){const s=function(t){const s=l();if(!t)return s;let i;for(;i=M.exec(t);){const t=w(i[1],i[1]),e=i[2]?w(i[2].replace(/\+/g," "),i[2]):"";s[t]=e}return s}(t.location.originalHash||t.location.hash);for(const t of p){const i=s[`e-${t}`];"1"==i&&(h[t]=!0),"0"==i&&(h[t]=!1)}}return h}(t);return!!i["amp-stream-gallery"]}(this.win),(E.user||(E.user=T()),void E.user.win?E.userForEmbed||(E.userForEmbed=T()):E.user).assert(s,"The amp-stream-gallery experiment must be enabled to use the component",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),this.Da=function(t,s){const i=C(S(t));return O(i,s)?k(i,s):null}(this.element,"action"),this.mQ(),this.eQ=new class{constructor(t){const{element:s,initialIndex:i,runMutate:e,scrollContainer:r,win:n}=t;this.i=n,this._Q=e,this._n=s,this.iQ=r,this.AQ=new class{constructor(t){const{advanceable:s,element:i,scrollContainer:e,win:r}=t;this.i=r,this.iQ=e,this.fQ=s,this.bQ=0,this.AQ=!1,this.PQ=1,this.gQ=1e3,this.vQ=!1,this.IQ=!1,this.wQ=null,this.MQ=Number.POSITIVE_INFINITY,this.ji=i.getAmpDoc(),this.xQ(this.gQ),this.iQ.addEventListener("scroll",(()=>this.EQ()),!0),$(this.iQ,"touchstart",(()=>this.TQ()),{capture:!0,passive:!0}),$(i,F,(t=>{this.RQ(t)}))}stop(){this.IQ=!0}pause(){this.vQ=!0}resume(){this.vQ=!1,this.VQ()}updateAutoAdvance(t){this.AQ=t,this.VQ()}updateAutoAdvanceCount(t){this.PQ=t,this.VQ()}updateAutoAdvanceInterval(t){this.gQ=Math.max(t,1e3),this.xQ(this.gQ),this.VQ()}updateMaxAdvances(t){this.MQ=t}xQ(t){const s=y(this.i,(()=>{s==this.wQ&&this.SQ()}),t);this.wQ=s}TQ(){this.pause(),H(window,"touchend",(()=>{this.resume()}),{capture:!0,passive:!0})}yQ(){return this.AQ&&this.ji.isVisible()&&!this.vQ&&!this.IQ&&this.bQ<this.MQ}EQ(){this.VQ()}RQ(t){const s=U(t).actionSource;s&&4!==s&&this.stop()}SQ(){this.yQ()&&(this.fQ.advance(this.PQ,{actionSource:4,allowWrap:!0}),this.bQ+=this.PQ)}VQ(){this.yQ()&&this.wQ()}}({win:n,element:s,scrollContainer:r,advanceable:this}),this.kQ=new class{constructor(t){const{element:s,runMutate:i,scrollContainer:e,stoppable:r,win:n}=t;this.i=n,this.iQ=e,this._Q=i,this.rQ=[],this.CQ=1,this.LQ=!1,this.zQ=!1,this.Pr=0,s.addEventListener("focus",(()=>{r.stop()}),!0),s.addEventListener(F,(t=>{this.NQ(t)}))}updateMixedLength(t){this.LQ=t}updateUi(){this.zQ||(this.zQ=!0,this._Q((()=>{this.zQ=!1,this.OQ(),this.BQ()})))}updateSlides(t){this.rQ=t,this.updateUi()}updateVisibleCount(t){this.CQ=t,this.updateUi()}$Q(){return this.LQ||this.CQ>=2}OQ(){this.$Q()?(this.iQ.removeAttribute("aria-live"),this.iQ.setAttribute("role","list"),this.rQ.forEach((t=>{t.setAttribute("role","listitem")}))):(this.iQ.setAttribute("aria-live","polite"),this.iQ.removeAttribute("role"),this.rQ.forEach((t=>{t.removeAttribute("role")})))}BQ(){this.rQ.forEach(((t,s)=>{const i=!this.$Q()&&s!==this.Pr;t.setAttribute("aria-hidden",i)}))}NQ(t){const s=U(t).index;this.Pr=s,this._Q((()=>{this.BQ()}))}}({win:n,element:s,scrollContainer:r,runMutate:e,stoppable:this.AQ}),this.jQ=y(n,(()=>this.UQ()),200),this.HQ=1,this.WQ=Number.POSITIVE_INFINITY,this.LQ=!1,this.rQ=[],this.QQ=!0,this.zQ=!1,this.DQ=[],this.ZQ=[],this.FQ=[],this.qQ=[],this.KQ=!1,this.XQ=!1,this.GQ=0,this.JQ=null,this.YQ=NaN,this.eZ=!1,this.rZ=!1,this.nZ=void 0,this.oZ=Z,this.hZ=0,this.aZ=!0,this.lZ=!0,this.cZ=i||0,this.dp=!1,this.KH=!0,this.uZ=1,this.CQ=1,this.iQ.addEventListener("scroll",(()=>this.EQ()),!0),this.iQ.addEventListener("scrollend",(()=>this.dZ()),!0),$(this.iQ,"touchstart",(()=>this.TQ()),{capture:!0,passive:!0}),$(this.iQ,"wheel",(()=>this.pZ()),{capture:!0,passive:!0})}next(t){this.advance(this.HQ,{actionSource:t})}prev(t){this.advance(-this.HQ,{actionSource:t})}advance(t,s={}){const{cZ:i,JQ:e,rQ:r}=this,{actionSource:n,allowWrap:l=!1}=s,a=null!==e?e:i,o=a+t,h=r.length-1,u=0===a,c=a===h,m=o<0,d=o>h,p=t>0&&this.mZ(a)&&this.mZ(o);let _;_=this.isLooping()?Q(o,h+1):l?p?0:m&&u||d&&!c?h:m&&!u||d&&c?0:o:p?a:D(o,0,h),this.goToSlide(_,{actionSource:n})}pauseLayout(){this.KQ=!0,this.AQ.pause()}resumeLayout(){this.KQ=!1,this.updateUi(),this.AQ.resume()}getCurrentIndex(){return this.cZ}getVisibleCount(){return this.CQ}isLooping(){return this.dp&&this.rQ.length/this.CQ>=3}goToSlide(t,s={}){const{actionSource:i,smoothScroll:e=!0}=s;t<0||t>this.rQ.length-1||isNaN(t)||t!==this.cZ&&(this.eZ||this._Z()||(this.XQ=!1,this.JQ=t,this.nZ=i,this.AZ(this.rQ[t],{smoothScroll:e})))}updateAdvanceCount(t){this.HQ=t}updateAlignment(t){this.oZ="start"===t?Z:"center",this.updateUi()}updateAutoAdvance(t){this.AQ.updateAutoAdvance(t)}updateAutoAdvanceCount(t){this.AQ.updateAutoAdvanceCount(t)}updateAutoAdvanceInterval(t){this.AQ.updateAutoAdvanceInterval(t)}updateAutoAdvanceLoops(t){this.WQ=t,this.updateUi()}updateForwards(t){this.aZ=t,this.updateUi()}updateHideScrollbar(t){this.lZ=t,this.updateUi()}updateHorizontal(t){this.hZ=t?0:1,this.updateUi()}updateLoop(t){this.dp=t,this.updateUi()}updateMixedLength(t){this.LQ=t,this.kQ.updateMixedLength(t),this.updateUi()}updateSlides(t){const{length:s}=t;s?(this.rQ=t,this.cZ=this.isLooping()?Q(this.cZ,s):D(this.cZ,0,s-1)||0,this.kQ.updateSlides(t),this.updateUi()):this._n.tagName.toUpperCase()}updateSnap(t){this.KH=t,this.updateUi()}updateSnapBy(t){this.uZ=Math.max(1,t),this.updateUi()}updateUserScrollable(t){this.QQ=t,this.updateUi()}updateUi(){this.zQ||this.KQ||(this.zQ=!0,this._Q((()=>{this.zQ=!1,this.iQ.setAttribute("mixed-length",this.LQ),this.iQ.setAttribute("user-scrollable",this.QQ),this.iQ.setAttribute("hide-scrollbar",this.lZ),this.iQ.setAttribute("horizontal",0===this.hZ),this.iQ.setAttribute("loop",this.isLooping()),this.iQ.setAttribute("snap",this.KH),g(this.iQ,{"--visible-count":this.CQ}),this.rQ.length&&(this.AQ.updateMaxAdvances(this.WQ*this.rQ.length-1),this.fZ(),this.bZ(),this.PZ(),this.UQ(!0))})))}updateVisibleCount(t){this.CQ=Math.max(1,t),this.kQ.updateVisibleCount(t),this.updateUi()}gZ(t,s){this.YQ!==t&&(this.YQ=t,this._n.dispatchEvent(W(this.i,F,{"index":t,"total":this.rQ.length,"actionSource":s,"slides":this.rQ},{bubbles:!0})))}vZ(t,s){this.cZ=t,this.GQ=s,this._n.dispatchEvent(W(this.i,"amp-carousel:offsetchange",{"index":t,"total":this.rQ.length,"offset":this.aZ?-s:s,"slides":this.rQ},{bubbles:!0}))}notifyScrollStart(){this._n.dispatchEvent(W(this.i,G,null))}IZ(){this._n.dispatchEvent(W(this.i,X,null))}TQ(){this.eZ=!0,this.nZ=3,this.JQ=null,this.XQ=!1,H(window,"touchend",(()=>{this.eZ=!1,this.jQ()}),{capture:!0,passive:!0})}pZ(){this.nZ=2,this.JQ=null,this.XQ=!1}EQ(){this.XQ?this.XQ=!1:(this.rZ=!0,this.wZ(),this.notifyScrollStart(),this.jQ())}dZ(){null===this.JQ&&this.UQ()}_Z(){return this.rZ&&(3===this.nZ||2===this.nZ)}MZ(t,s,i){const e=s*i*(this.aZ?1:-1);!function(t,s,i){const e=0==t?i:0,r=0==t?0:i;P(s,"transform",`translate(${e}px, ${r}px)`),g(s,{"--content-transform":`translate(${e}px, ${r}px)`})}(this.hZ,t,e),t._revolutions=s}xZ(t){this.rQ.forEach((s=>{this.MZ(s,0,t)}))}EZ(){return this.rQ.map((t=>q(this.hZ,t).length))}isAtEnd(){return!this.isLooping()&&this.TZ()}isAtStart(){return!this.isLooping()&&this.RZ()}TZ(){const t=this.iQ,s=t.getBoundingClientRect().width*(this.aZ?1:-1),i=this.aZ?Math.ceil(s):Math.floor(s),e=t.scrollLeft+i,r=t.scrollWidth;return this.aZ?e>=r:e<=-r}RZ(){const t=this.iQ.scrollLeft;return this.aZ?t<=0:t>=0}VZ(t){const s=[];for(let i=0;i<t;i++){const t=document.createElement("div");t.className=rt,s.push(t)}return s}fZ(){const{hZ:t,rQ:s}=this,i=this.EZ(),e=lt(i),r=this.isLooping()?s.length:0;this.DQ.forEach((t=>{this.iQ.removeChild(t)})),this.DQ=this.VZ(r),this.DQ.forEach(((e,r)=>{tt(t,e,i[r]),this.iQ.insertBefore(e,s[0])})),this.ZQ.forEach((t=>{this.iQ.removeChild(t)})),this.ZQ=this.VZ(r),this.ZQ.forEach(((s,r)=>{tt(t,s,i[r]),this.MZ(s,-1,e),this.iQ.appendChild(s)})),this.FQ.forEach((t=>{this.iQ.removeChild(t)})),this.FQ=this.VZ(r),this.FQ.forEach(((s,r)=>{tt(t,s,i[r]),this.MZ(s,-1,e),this.iQ.appendChild(s)})),this.qQ=this.DQ.concat(this.ZQ,this.FQ)}bZ(){const t=this.rQ.length,s=this.oZ===Z,i=1===Q(this.CQ,2),e=s||i?"0%":"50%";c(this.iQ.children,((s,i)=>{const r=Q(i,t),n=0===Q(r,this.uZ);!s.classList.contains(rt)&&this.isLooping()||function(t,s){for(const i in s)P(t,i,s[i])}(s,{"scroll-snap-align":n?this.oZ:"none","scroll-snap-coordinate":n?e:"none"})}))}PZ(){const{FQ:t,DQ:s,cZ:i,rQ:e}=this,r=Math.max(0,e.length-i-1),n=Math.max(0,i-1);s.forEach(((t,n)=>{const l=function(t,s,i){const{length:e}=i;return t===s?e:Q(t-s,e)}(i,n,s)>e.length-1;t.hidden=l||n<e.length-r})),t.forEach(((s,r)=>{const l=function(t,s,i){const{length:e}=i;return t===s?e:Q(s-t,e)}(i,r,t)>e.length-1;s.hidden=l||r>n}))}wZ(){const{oZ:t,qQ:s,hZ:i,cZ:e,iQ:r,rQ:n}=this,l=lt(this.EZ()),a=!!s.length,o=a?s:n,h=function(t,s,i,e,r){const n=Y(t,s,i);if(st(t,e[r],n))return r;for(let s=1;s<=e.length/2;s++){const i=Q(r+s,e.length),l=Q(r-s,e.length);if(st(t,e[i],n))return i;if(st(t,e[l],n))return l}}(i,t,r,o,a?e+n.length:e);if(void 0===h)return;const u=o[h],c=h%n.length,m=it(i,t,r,u);this.vZ(c,m),c!==e&&this._Q((()=>{this.SZ(l)}))}UQ(t=!1){const{nZ:s}=this;if(this.eZ)return;if(this.nZ=void 0,this.rZ=!1,this._Q((()=>{this.IZ()})),this.YQ===this.cZ&&null===this.JQ&&!t)return;null!==this.JQ&&(this.cZ=this.JQ,this.JQ=null,this.GQ=0);const i=lt(this.EZ());this._Q((()=>{this.gZ(this.cZ,s),this.vZ(this.cZ,this.GQ),this.xZ(i),this.PZ(),this.SZ(i),this.yZ()}))}yZ(){const{oZ:t,hZ:s,GQ:i,cZ:e,iQ:r,rQ:n}=this,l=n[e],a=it(s,t,r,l)-i,{length:o}=q(s,l),h=a*o;h&&(this.XQ=!0,nt(r,(()=>{et(s,r,h)})))}AZ(t,s){const{smoothScroll:i}=s;(i?(t,s)=>s():nt)(this.iQ,(()=>{!function(t,s,i,e,r=0){const n=s==Z,{length:l}=q(t,e);et(t,i,(n?K(t,e):J(t,e))-(n?K(t,i):J(t,i))-r*l)}(this.hZ,this.oZ,this.iQ,t)}))}kZ(t,s,i){const{cZ:e,YQ:r,rQ:n}=this,l=n[e]._revolutions||0,a=i?1:-1;for(let o=1;o<=s;o++){const s=Q(e+o*a,n.length);if(s===r&&e!==r)break;const h=n[s],u=s>e!==i?l+a:l;this.MZ(h,u,t)}}SZ(t){if(!this.isLooping())return;const{oZ:s,rQ:i,CQ:e}=this,r=s===Z?e-1:0,n=(i.length-1-r)/2,l=(i.length-1+r)/2;this.kZ(t,Math.round(n),!1),this.kZ(t,Math.round(l),!0)}mZ(t){const{oZ:s,rQ:i,CQ:e}=this,r=s===Z?e:e/2;return t>=i.length-r}}({win:this.win,element:this.element,scrollContainer:this.iQ,initialIndex:this.CZ(),runMutate:t=>this.mutateElement(t)}),this.eQ.updateSnap(!1),this.eQ.updateForwards(!("rtl"==((t=V(this.element.ownerDocument)).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr"))),i(this.element.attributes).forEach((t=>{this.LZ(t.name,t.value)})),this.eQ.updateSlides(this.rQ),this.zZ(),this.NZ(),this.Uy(),this.OZ()}mQ(){const{element:t}=this;let s,e;i(t.children).forEach((t=>{const i=t.getAttribute("slot");"prev-arrow"==i?s=t:"next-arrow"==i?e=t:"I-AMPHTML-SIZER"!=t.tagName&&this.rQ.push(t)})),t.appendChild(this.BZ()),this.iQ=t.querySelector(".i-amphtml-carousel-scroll"),this.W8=t.querySelector(".i-amphtml-stream-gallery-slides"),this._N=t.querySelector(".i-amphtml-carousel-content"),this.oQ=t.querySelector(".i-amphtml-stream-gallery-arrow-prev-slot"),this.nQ=t.querySelector(".i-amphtml-stream-gallery-arrow-next-slot"),this.rQ.forEach((t=>{t.classList.add("i-amphtml-carousel-slotted"),this.iQ.appendChild(t)})),this.oQ.appendChild(s||this.$Z()),this.nQ.appendChild(e||this.jZ())}isRelayoutNeeded(){return!0}pauseCallback(){this.eQ.pauseLayout()}resumeCallback(){this.eQ.resumeLayout()}layoutCallback(){return this.Elt(),this.eQ.updateUi(),this.aQ.wasLaidOut(),s||(s=Promise.resolve(void 0))}unlayoutCallback(){return this.aQ.wasUnlaidOut(),!0}mutatedAttributesCallback(t){for(const s in t)this.LZ(s,String(t[s]))}LZ(t,s){this.tQ.updateAttribute(t,s)}BZ(){return d(this.element)(dt)}jZ(){return d(this.element)(pt)}$Z(){return d(this.element)(_t)}UZ(t){return 3==t?0:1}CZ(){const t=this.element.getAttribute("slide")||"0";return Number(mt(ct(t)))}Tlt(t,s){const i=(t-this.flt*s)/s,e=Math.floor(i);return Math.max(1,e)+this.flt}Vlt(){return this.Alt?this.oQ.getBoundingClientRect().width+this.nQ.getBoundingClientRect().width:0}pK(t){return 2==t||3==t||0==t}Rlt(){return 2!=this.ult&&(0==this.ult||this.hQ||0!=this.flt)}blt(t){this.flt=Math.max(0,t||0),this.Elt()}Ilt(t){this.mlt=t||Number.MAX_VALUE,this.Elt()}Mlt(t){this.dlt=t||Number.MAX_VALUE,this.Elt()}wlt(t){this.plt=t||1,this.Elt()}ylt(t){this._lt=t||1,this.Elt()}Elt(){const{mlt:t,dlt:s,plt:i,_lt:e,rQ:r}=this,n=this.element.getBoundingClientRect().width-this.Vlt(),l=this.Tlt(n,i),a=Math.min(r.length,s),o=Math.min(Math.max(e,l),a),h=Math.floor(o);this.mutateElement((()=>{const s=l>a?a*t+"px":l*t+"px";P(this.W8,"max-width",s)})),this.eQ.updateSlides(this.rQ),this.eQ.updateAdvanceCount(h),this.eQ.updateSnapBy(h),this.eQ.updateVisibleCount(o)}vlt(t){this.Alt=t,this.OZ()}glt(t){this._N.setAttribute("i-amphtml-stream-gallery-extra-space",t)}Plt(t){this.ult=At[t]||1,this.OZ()}xlt(t){t&&z(this.win).isIos()||this.eQ.updateLoop(t)}OZ(){c(this.oQ.children,(t=>{m(t,"disabled",this.eQ.isAtStart())})),c(this.nQ.children,(t=>{m(t,"disabled",this.eQ.isAtEnd())})),m(this._N,"i-amphtml-stream-gallery-hide-inset-buttons",this.Rlt()),m(this._N,"amp-stream-gallery-outset-arrows",this.Alt)}zZ(){const t=N(this.element);this.aQ=new class{constructor(t){const{ampElement:s,intersectionElement:i,intersectionThreshold:e=ut,nearbyMarginInPercent:r=ht,viewportIntersectionThreshold:n=e,viewportIntersectionCallback:l=(()=>{})}=t;this.HZ=s,this.WZ=N(s.element),this.QZ=i,this.DZ=e,this.ZZ=r,this.FZ=n,this.qZ=l,this.KZ=!1,this.XZ=[],this.GZ=null,this.JZ=null,this.Ag=null,this.YZ=!1}setQueueChanges(t){this.KZ=t}tK(t,s){s?this.WZ.scheduleLayout(this.HZ.element,t):this.WZ.scheduleUnlayout(this.HZ.element,t)}sK(t,s){this.qZ(t,s)}Ao(){if(this.GZ&&this.JZ&&this.Ag)return;const{win:t}=this.HZ;this.GZ=new t.IntersectionObserver((t=>this.iK(t)),{root:this.QZ,rootMargin:`${this.ZZ}%`,threshold:this.DZ}),this.JZ=new t.IntersectionObserver((t=>this.eK(t)),{root:this.QZ,rootMargin:`${this.ZZ+10}%`,threshold:this.DZ}),this.Ag=new t.IntersectionObserver((t=>this.rK(t)),{root:this.QZ,rootMargin:"0%",threshold:this.FZ})}iK(t){t.filter((t=>{const{isIntersecting:s}=t;return s})).forEach((t=>{const{target:s}=t;s[at]=0})),this.KZ||this.nK()}eK(t){t.filter((t=>{const{isIntersecting:s}=t;return!s})).forEach((t=>{const{target:s}=t;s[at]=1})),this.KZ||this.oK()}rK(t){t.forEach((t=>{const{isIntersecting:s,target:i}=t;i[ot]=s?0:1})),this.KZ||this.hK()}flushChanges(){this.nK(),this.oK(),this.hK()}nK(){for(let t=0;t<this.XZ.length;t++){const s=this.XZ[t];0==s[at]&&(this.tK(s,!0),s[at]=null)}}oK(){for(let t=0;t<this.XZ.length;t++){const s=this.XZ[t];1==s[at]&&(this.tK(s,!1),s[at]=null)}}hK(){for(let t=0;t<this.XZ.length;t++){const s=this.XZ[t];0==s[ot]?(this.tK(s,!0),this.sK(s,!0)):1==s[ot]&&this.sK(s,!1),s[ot]=null}}aK(t){if("IntersectionObserver"in this.HZ.win){if(this.Ao(),!t)return this.GZ.disconnect(),this.JZ.disconnect(),void this.Ag.disconnect();for(let t=0;t<this.XZ.length;t++)this.GZ.observe(this.XZ[t]),this.JZ.observe(this.XZ[t]),this.Ag.observe(this.XZ[t])}}updateChildren(t){if(this.XZ=t,"IntersectionObserver"in this.HZ.win){for(let t=0;t<this.XZ.length;t++)this.WZ.setOwner(this.XZ[t],this.HZ.element);this.aK(!1),this.aK(this.YZ)}}wasLaidOut(){this.YZ=!0,this.aK(this.YZ)}wasUnlaidOut(){this.YZ=!1,this.aK(this.YZ);for(let t=0;t<this.XZ.length;t++)this.tK(this.XZ[t],!1),this.sK(this.XZ[t],!1)}}({ampElement:this,intersectionElement:this.iQ,nearbyMarginInPercent:this.PB?200:100,viewportIntersectionCallback:(s,i)=>{i?t.scheduleResume(this.element,s):t.schedulePause(this.element,s)}}),this.aQ.setQueueChanges(this.PB),this.aQ.updateChildren(this.rQ)}lK(){this.aQ.setQueueChanges(this.PB)}cK(){this.aQ.flushChanges(),this.aQ.setQueueChanges(!1),this.OZ()}mJ(t,s){const i=this.cZ;if(this.cZ=t,null==i)return;const e={"index":t},r="slideChange",n=this.pK(s)?3:1,l=W(this.win,`streamGallery.${r}`,e);this.Da.trigger(this.element,r,l,n),function(t,s,i,e){const r=i||{};a(t.ownerDocument);const n=t.ownerDocument.createEvent("Event");n.data=r;const{bubbles:l,cancelable:o}=u;n.initEvent("slideChange",l,o),t.dispatchEvent(n)}(this.element,0,e)}NQ(t){const s=U(t),i=s.index,e=s.actionSource;this.hQ=this.hQ||3==e,this.mJ(i,e),this.OZ()}};t.registerElement("amp-stream-gallery",ft,'.i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot{width:0;-ms-flex-pack:start;justify-content:flex-start}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot{width:0;-ms-flex-pack:end;justify-content:flex-end}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot>[disabled],:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot>[disabled],[i-amphtml-stream-gallery-hide-inset-buttons]:not([amp-stream-gallery-outset-arrows]) .i-amphtml-stream-gallery-arrow-next-slot>*,[i-amphtml-stream-gallery-hide-inset-buttons]:not([amp-stream-gallery-outset-arrows]) .i-amphtml-stream-gallery-arrow-prev-slot>*{opacity:0;pointer-events:none!important}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next,:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{-ms-flex-negative:0;flex-shrink:0;width:40px;height:40px}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{border-radius:0px 4px 4px 0px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.4 9.4 12l4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next{border-radius:4px 0px 0px 4px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10 7.4 4.6 4.6-4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-next-slot>[disabled],[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-prev-slot>[disabled]{opacity:0.4}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next,[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{width:32px;height:32px;border-radius:50%;background-size:24px 24px}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{margin-inline-start:6px;margin-inline-end:12px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.4 9.4 12l4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next{margin-inline-start:12px;margin-inline-end:6px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10 7.4 4.6 4.6-4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}.i-amphtml-stream-gallery-inset-arrows{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;pointer-events:none}.i-amphtml-stream-gallery-arrow-prev-slot{-ms-flex-order:0;order:0}.i-amphtml-stream-gallery-arrow-next-slot{-ms-flex-order:2;order:2}.i-amphtml-stream-gallery-arrow-next-slot,.i-amphtml-stream-gallery-arrow-prev-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:all}.i-amphtml-stream-gallery-arrow-next-slot>*,.i-amphtml-stream-gallery-arrow-prev-slot>*{-ms-flex-negative:0;flex-shrink:0}.i-amphtml-stream-gallery-next,.i-amphtml-stream-gallery-prev{position:relative;z-index:1;padding:0;border:none;outline:none;box-shadow:0px 2px 6px 0px rgba(0,0,0,.4);background-color:rgba(255,255,255,0.6);background-size:24px 24px;background-position:50%;background-repeat:no-repeat;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transition:opacity 200ms ease-in}.i-amphtml-stream-gallery-next[disabled],.i-amphtml-stream-gallery-prev[disabled]{transition-timing-function:ease-out}[dir=rtl] .i-amphtml-stream-gallery-next,[dir=rtl] .i-amphtml-stream-gallery-prev{transform:scaleX(-1)}amp-stream-gallery .i-amphtml-carousel-content{display:-ms-flexbox;display:flex}.i-amphtml-stream-gallery-slides{-ms-flex-order:1;order:1;-ms-flex-positive:1;flex-grow:1;min-width:1px}[i-amphtml-stream-gallery-extra-space=around]{-ms-flex-pack:center;justify-content:center}amp-stream-gallery .i-amphtml-carousel-slotted>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-stream-gallery/0.1/amp-stream-gallery.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-stream-gallery-0.1.mjs.map