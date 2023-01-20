;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-image-viewer",ev:"0.1",l:!0,f:function(t,s){(()=>{var s;function i(){return s||(s=Promise.resolve(void 0))}var h=class{constructor(){this.promise=new Promise(((t,s)=>{this.resolve=t,this.reject=s}))}},{isArray:e}=Array;function n(t,s){const i=[];let h=0;for(let e=0;e<t.length;e++){const n=t[e];s(n,e,t)?i.push(n):(h<e&&(t[h]=n),h++)}return h<t.length&&(t.length=h),i}function r(t){return"string"==typeof t}var{hasOwnProperty:o,toString:c}=Object.prototype;function u(t){return 1==(null==t?void 0:t.nodeType)}function a(t,s,i,h){return e=>f.solveYValueFromXValue(e,0,0,t,s,i,h,1,1)}var l,f=class{static solveYValueFromXValue(t,s,i,h,e,n,r,o,c){return f.Kh(f.Yh(t,s,h,n,o),i,e,r,c)}static Yh(t,s,i,h,e){const n=1e-6;let r=(t-s)/(e-s);if(r<=0)return 0;if(r>=1)return 1;let o=0,c=1,u=0;for(let a=0;a<8;a++){u=f.Jh(r,s,i,h,e);const a=(f.Jh(r+n,s,i,h,e)-u)/n;if(Math.abs(u-t)<n)return r;if(Math.abs(a)<n)break;u<t?o=r:c=r,r-=(u-t)/a}for(let a=0;Math.abs(u-t)>n&&a<8;a++)u<t?(o=r,r=(r+c)/2):(c=r,r=(r+o)/2),u=f.Jh(r,s,i,h,e);return r}static Jh(t,s,i,h,e){if(0==t)return s;if(1==t)return e;let n=f.Qh(s,i,t),r=f.Qh(i,h,t);const o=f.Qh(h,e,t);return n=f.Qh(n,r,t),r=f.Qh(r,o,t),f.Qh(n,r,t)}static Kh(t,s,i,h,e){if(0==t)return s;if(1==t)return e;let n=f.Qh(s,i,t),r=f.Qh(i,h,t);const o=f.Qh(h,e,t);return n=f.Qh(n,r,t),r=f.Qh(r,o,t),f.Qh(n,r,t)}static Qh(t,s,i){return t+i*(s-t)}},_={LINEAR:t=>t,EASE:t=>f.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1),EASE_IN:t=>f.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1),EASE_OUT:t=>f.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1),EASE_IN_OUT:t=>f.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)},P={"linear":_.LINEAR,"ease":_.EASE,"ease-in":_.EASE_IN,"ease-out":_.EASE_OUT,"ease-in-out":_.EASE_IN_OUT};function M(t){if(!t)return null;if(r(t)){if(-1!=(t=t).indexOf("cubic-bezier")){const s=t.match(/cubic-bezier\((.+)\)/);if(s){const t=s[1].split(",").map(parseFloat);if(4==t.length){for(let s=0;s<4;s++)if(isNaN(t[s]))return null;return a(t[0],t[1],t[2],t[3])}}return null}return P[t]}return t}function A(t){return u(t)?(t=t).tagName.toLowerCase()+(t.id?`#${t.id}`:""):t}function d(t,s,i,h,e,n,r,o,c,u,a){return t}function m(t,s,i,h,e,r,o,c,u,a,l){return function(t,s,i="Assertion failed",h){var e,r;if(s)return s;t&&-1==i.indexOf(t)&&(i+=t);let o=3;const c=i.split("%s");let u=c.shift();const a=[u];for(;c.length;){const t=arguments[o++],s=c.shift();u+=A(t)+s,a.push(t,s.trim())}const l=new Error(u);throw l.messageArray=n(a,(t=>""!==t)),null===(e=(r=self).__AMP_REPORT_ERROR)||void 0===e||e.call(r,l),l}("​​​",t,s,i,h,e,r,o,c,u,a,l)}function p(t,s,i,h){return{left:t,top:s,width:i,height:h,bottom:s+h,right:t+i,x:t,y:s}}function v(t){const s=Object.getOwnPropertyDescriptor(t,"message");if(null!=s&&s.writable)return t;const{message:i,stack:h}=t,e=new Error(i);for(const s in t)e[s]=t[s];return e.stack=h,e}function E(t){let s=null,i="";for(const t of arguments)t instanceof Error&&!s?s=v(t):(i&&(i+=" "),i+=t);return s?i&&(s.message=i+": "+s.message):s=new Error(i),s}function T(t){var s,i;null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t)}function g(t,...s){try{return t.apply(null,s)}catch(t){!function(t){const s=E.apply(null,arguments);setTimeout((()=>{throw T(s),s}))}(t)}}var I=["Webkit","webkit","Moz","moz","ms","O","o"],R={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function V(t,s,i,h,e){const n=function(t,s,i){if(s.startsWith("--"))return s;l||(l=Object.create(null));let h=l[s];if(!h||i){if(h=s,void 0===t[s]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(s),e=function(t,s){for(let i=0;i<I.length;i++){const h=I[i]+s;if(void 0!==t[h])return h}return""}(t,i);void 0!==t[e]&&(h=e)}i||(l[s]=h)}return h}(t.style,s,e);if(!n)return;const r=h?i+h:i;t.style.setProperty(function(t){const s=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return I.some((t=>s.startsWith(t+"-")))?`-${s}`:s}(n),r)}function w(t,s){for(const i in s)V(t,i,s[i])}function b(t){return`${t}px`}function y(t,s){return"number"==typeof t?s(t):t}function S(t){return(t.ownerDocument||t).defaultView}var D=/vertical/,k=new WeakMap,C=new WeakMap,x=new WeakMap;function X(t){let s=k.get(t);return s||(s=new t.ResizeObserver(Y),k.set(t,s)),s}function Y(t){const s=new Set;for(let i=t.length-1;i>=0;i--){const h=t[i],{target:e}=h;if(s.has(e))continue;s.add(e);const n=C.get(e);if(n){x.set(e,h);for(let t=0;t<n.length;t++){const{callback:s,type:i}=n[t];O(i,s,h)}}}}function O(t,s,i){if(0==t){const{contentRect:t}=i,{height:h,width:e}=t;g(s,{width:e,height:h})}else if(1==t){const{borderBoxSize:t}=i;let h;if(t)h=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=i,s=S(t),e=D.test(function(t,s){return t.getComputedStyle(s)||R}(s,t).writingMode),{offsetHeight:n,offsetWidth:r}=t;let o,c;e?(c=r,o=n):(o=r,c=n),h={inlineSize:o,blockSize:c}}g(s,h)}}function z(t,s,i,h){const n=e(r=t)?r:[r];var r;for(const t of n){const e=s.getAttribute(t);null!==e?i.setAttribute(t,e):h&&i.removeAttribute(t)}}function Z(t,s){return t.closest(s)}var N=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g,$=class{constructor(t){m(t.length>0,"Srcset must have at least one source"),this.VT=t;let s=!1,i=!1;for(let h=0;h<t.length;h++){const e=t[h];s=s||!!e.width,i=i||!!e.dpr}m(!(s===i),"Srcset must have width or dpr sources, but not both"),t.sort(s?G:j),this.vS=s}select(t,s){d(t),d(s);let i=0;return i=this.vS?this.bS(t*s):this.wS(s),this.VT[i].url}bS(t){const s=this.VT;let i=0,h=1/0,e=1/0;for(let r=0;r<s.length;r++){var n;const o=null!==(n=s[r].width)&&void 0!==n?n:0,c=Math.abs(o-t);if(!(c<=1.1*h||t/e>1.2))break;i=r,h=c,e=o}return i}wS(t){const s=this.VT;let i=0,h=1/0;for(let e=0;e<s.length;e++){const n=Math.abs(s[e].dpr-t);if(!(n<=h))break;i=e,h=n}return i}getUrls(){return this.VT.map((t=>t.url))}stringify(t){const s=[],i=this.VT;for(let h=0;h<i.length;h++){const e=i[h];let n=e.url;t&&(n=t(n)),this.vS?n+=` ${e.width}w`:n+=` ${e.dpr}x`,s.push(n)}return s.join(", ")}};function G(t,s){return m(t.width!=s.width,"Duplicate width: %s",t.width),t.width-s.width}function j(t,s){return m(t.dpr!=s.dpr,"Duplicate dpr: %s",t.dpr),t.dpr-s.dpr}function U(t,s){return i=>t+(s-t)*i}function B(t,s,i,h){return d(s<=i),function(t,s,i){return d(s<=i),Math.min(Math.max(t,s),i)}(t,s-h,i+h)}function L(t,s){return Math.sqrt(t*t+s*s)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var W=self.__AMP_LOG;function F(t,s){throw new Error("failed to call initLogConstructor")}function H(t){return W.user||(W.user=q()),function(t,s){return s&&s.ownerDocument.defaultView!=t}(W.user.win,t)?W.userForEmbed||(W.userForEmbed=q()):W.user}function q(t){return F()}function J(){return W.dev||(W.dev=F())}function K(t,s,i,h,e,n,r,o,c,u,a){return t}function Q(t,s,i,h,e,n,r,o,c,u,a){return H().assert(t,s,i,h,e,n,r,o,c,u,a)}function tt(t,s){return it(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),s)}function st(t){return t.nodeType?(s=S(t),tt(s,"ampdoc")).getAmpDoc(t):t;var s}function it(t,s){K(function(t,s){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!i||!i.ctor)}(t,s));const i=function(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}(t)[s];return i.obj||(K(i.ctor),K(i.context),i.obj=new i.ctor(i.context),K(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}var ht,et,nt=t=>function(t,s){return it(function(t){const s=st(t);return s.isSingleDoc()?s.win:s}(st(t)),s)}(t,"owners"),rt=t=>tt(t,"vsync"),ot="Animation",ct=function(){},ut=class{static animate(t,s,i,h){return new ut(t).setCurve(h).add(0,s,1).start(i)}constructor(t,s){this.kt=t,this.Xh=s||rt(self),this.Zh=null,this.io=[]}setCurve(t){return t&&(this.Zh=M(t)),this}add(t,s,i,h){return this.io.push({delay:t,func:s,duration:i,curve:M(h)}),this}start(t){return new at(this.Xh,this.kt,this.io,this.Zh,t)}},at=class{constructor(t,s,i,e,n){this.Xh=t,this.kt=s,this.io=[];for(let t=0;t<i.length;t++){const s=i[t];this.io.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||e,started:!1,completed:!1})}this.so=n,this.Ch=Date.now(),this.Ht=!0,this.Ri={};const r=new h;this.eo=r.promise,this.Sn=r.resolve,this.no=r.reject,this.ro=this.Xh.createAnimTask(this.kt,{mutate:this.ho.bind(this)}),this.Xh.canAnimate(this.kt)?this.ro(this.Ri):this.oo(!1,0)}then(t,s){return t||s?this.eo.then(t,s):this.eo}thenAlways(t){const s=t||ct;return this.then(s,s)}halt(t){this.oo(!1,t||0)}oo(t,s){if(this.Ht){if(this.Ht=!1,0!=s){this.io.length>1&&this.io.sort(((t,s)=>t.delay+t.duration-(s.delay+s.duration)));try{if(s>0)for(let t=0;t<this.io.length;t++)this.io[t].func(1,!0);else for(let t=this.io.length-1;t>=0;t--)this.io[t].func(0,!1)}catch(s){J().error(ot,"completion failed: "+s,s),t=!1}}t?this.Sn():this.no()}}ho(t){if(!this.Ht)return;const s=Date.now(),i=Math.min((s-this.Ch)/this.so,1);for(let t=0;t<this.io.length;t++){const s=this.io[t];!s.started&&i>=s.delay&&(s.started=!0)}for(let t=0;t<this.io.length;t++){const s=this.io[t];s.started&&!s.completed&&this.uo(s,i)}1==i?this.oo(!0,0):this.Xh.canAnimate(this.kt)?this.ro(this.Ri):this.oo(!1,0)}uo(t,s){let i,h;if(t.duration>0){if(i=Math.min((s-t.delay)/t.duration,1),h=i,t.curve&&1!=h)try{h=t.curve(i)}catch(t){return J().error(ot,"step curve failed: "+t,t),void this.oo(!1,0)}}else i=1,h=1;1==i&&(t.completed=!0);try{t.func(h,t.completed)}catch(t){return J().error(ot,"step mutate failed: "+t,t),void this.oo(!1,0)}}};function lt(t,s,i,h){let e=i;const n=function(t,s,i,h){let e=t,n=i,r=t=>{try{return n(t)}catch(t){var s,i;throw null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t),t}};const o=function(){if(void 0!==ht)return ht;ht=!1;try{const t={get capture(){return ht=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return ht}(),c=!(null==h||!h.capture);return e.addEventListener(s,r,o?h:c),()=>{null==e||e.removeEventListener(s,r,o?h:c),n=null,e=null,r=null}}(t,s,(t=>{try{e(t)}finally{e=null,n()}}),h);return n}function ft(t){return"AUDIO"===t.tagName||"VIDEO"===t.tagName}var _t=class{constructor(){this.Fn=null}add(t){return this.Fn||(this.Fn=[]),this.Fn.push(t),()=>{this.remove(t)}}remove(t){this.Fn&&function(t,s){const i=t.indexOf(s);-1!=i&&t.splice(i,1)}(this.Fn,t)}removeAll(){this.Fn&&(this.Fn.length=0)}fire(t){if(this.Fn)for(const s of this.Fn.slice())s(t)}getHandlerCount(){var t,s;return null!==(t=null===(s=this.Fn)||void 0===s?void 0:s.length)&&void 0!==t?t:0}},Pt="__AMP_Gestures",Mt=class{static get(t,s=!1,i=!1){let h=t[Pt];return h||(h=new Mt(t,s,i),t[Pt]=h),h}constructor(t,s=!1,i=!1){this._n=t,this.hI=[],this.t_=[],this.gi=[],this.lI=[],this.pI=null;const h=function(t){if(void 0!==et)return et;et=!1;try{const s={get passive(){return et=!0,!1}};t.addEventListener("test-options",null,s),t.removeEventListener("test-options",null,s)}catch(t){}return et}(t.ownerDocument.defaultView);this.mI=s||h,this.cI=i,this.uI=!1,this.Ar=new class{constructor(t,s,i){this.Qe=it(t,"timer"),this.Xe=s,this.Ze=i||0,this.pr=-1,this.mr=0,this.Ht=!1,this._r=()=>{this.Ar()}}isPending(){return-1!=this.pr}schedule(t){let s=t||this.Ze;this.Ht&&s<10&&(s=10);const i=Date.now()+s;return(!this.isPending()||i-this.mr<-10)&&(this.cancel(),this.mr=i,this.pr=this.Qe.delay(this._r,s),!0)}Ar(){this.pr=-1,this.mr=0,this.Ht=!0,this.Xe(),this.Ht=!1}cancel(){this.isPending()&&(this.Qe.cancel(this.pr),this.pr=-1)}}(S(t),this.vg.bind(this)),this.dI=new _t,this.fI=Object.create(null),this._I=this.sm.bind(this),this.gI=this.rm.bind(this),this.yI=this.nm.bind(this),this.AI=this.h_.bind(this),this._n.addEventListener("touchstart",this._I,!!h&&{passive:!0}),this._n.addEventListener("touchend",this.gI),this._n.addEventListener("touchmove",this.yI,!!h&&{passive:!0}),this._n.addEventListener("touchcancel",this.AI),this.bI=!1}cleanup(){this._n.removeEventListener("touchstart",this._I),this._n.removeEventListener("touchend",this.gI),this._n.removeEventListener("touchmove",this.yI),this._n.removeEventListener("touchcancel",this.AI),delete this._n[Pt],this.Ar.cancel()}onGesture(t,s){const i=new t(this),h=i.getType();let e=this.fI[h];return e||(this.hI.push(i),e=new _t,this.fI[h]=e),e.add(s)}removeGesture(t){const s=new t(this).getType(),i=this.fI[s];if(i){i.removeAll();const t=function(t,i){for(let i=0;i<t.length;i++)if(t[i].getType()==s)return i;return-1}(this.hI);return!(t<0||(this.hI.splice(t,1),this.gi.splice(t,1),this.lI.splice(t,1),this.t_.splice(t,1),delete this.fI[s],0))}return!1}onPointerDown(t){return this.dI.add(t)}sm(t){const s=Date.now();this.uI=!1,this.dI.fire(t);for(let i=0;i<this.hI.length;i++)this.gi[i]||(this.lI[i]&&this.lI[i]<s&&this.o_(i),this.hI[i].onTouchStart(t)&&this.u_(i));this.vI(t)}nm(t){const s=Date.now();for(let i=0;i<this.hI.length;i++)this.t_[i]&&(this.lI[i]&&this.lI[i]<s?this.o_(i):this.hI[i].onTouchMove(t)||this.o_(i));this.vI(t)}rm(t){const s=Date.now();for(let i=0;i<this.hI.length;i++){if(!this.t_[i])continue;if(this.lI[i]&&this.lI[i]<s){this.o_(i);continue}this.hI[i].onTouchEnd(t);const h=!this.lI[i],e=this.lI[i]<s;this.pI==this.hI[i]||!h&&!e||this.o_(i)}this.vI(t)}h_(t){for(let t=0;t<this.hI.length;t++)this.TI(t);this.vI(t)}Wp(t,s){if(this.pI)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.hI.length;h++)this.hI[h]==t&&(this.gi[h]=i+s,this.lI[h]=0);this.bI=!0}EI(t,s){if(this.pI)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.hI.length;h++)this.hI[h]==t&&(this.lI[h]=i+s)}xI(t){this.pI==t&&(this.pI=null,this.uI=!0)}MI(t,s,i){d(this.pI==t);const h=this.fI[t.getType()];h&&h.fire(new class{constructor(t,s,i,h){this.type=t,this.data=s,this.time=i,this.event=h}}(t.getType(),s,Date.now(),i))}vI(t){let s=!!this.pI||this.uI;if(this.uI=!1,!s){const t=Date.now();for(let i=0;i<this.hI.length;i++)if(this.gi[i]||this.lI[i]&&this.lI[i]>=t){s=!0;break}}s?(t.stopPropagation(),this.mI||t.preventDefault()):this.cI&&t.stopPropagation(),this.bI&&(this.bI=!1,this.vg())}vg(){const t=Date.now();let s=-1;for(let i=0;i<this.hI.length;i++)this.gi[i]?(-1==s||this.gi[i]>this.gi[s])&&(s=i):this.lI[i]&&this.lI[i]<t&&this.o_(i);if(-1==s)return;let i=0;for(let s=0;s<this.hI.length;s++)!this.gi[s]&&this.t_[s]&&(i=Math.max(i,this.lI[s]-t));i<2?this.wI(s):this.Ar.schedule(i)}wI(t){const s=this.hI[t];for(let s=0;s<this.hI.length;s++)s!=t&&this.TI(s);this.gi[t]=0,this.lI[t]=0,this.pI=s,s.acceptStart()}u_(t){this.t_[t]=!0,this.lI[t]=0}o_(t){this.t_[t]=!1,this.lI[t]=0,this.gi[t]||this.hI[t].acceptCancel()}TI(t){this.gi[t]=0,this.o_(t)}},At=class{constructor(t,s){this.BV=t,this.S_=s}getType(){return this.BV}signalReady(t){this.S_.Wp(this,t)}signalPending(t){this.S_.EI(this,t)}signalEnd(){this.S_.xI(this)}signalEmit(t,s){this.S_.MI(this,t,s)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}},dt=function(){},mt=.02,pt=Math.round(-16.67/Math.log(.95));function vt(t,s,i){s<1&&(s=1);const h=t/s,e=.5+Math.min(s/33.34,.5);return h*e+i*(1-e)}function Et(t,s,i,h,e,n,r){return new Tt(t,s,i,h,e,n,r).start()}var Tt=class{constructor(t,s,i,e,n,r,o){this.Xh=o||rt(self),this.kt=t,this.$=r,this.qV=s,this.XV=i,this.VY=e,this.bY=n,this.pk=0,this.mk=0;const c=new h;this.eo=c.promise,this.Sn=c.resolve,this.no=c.reject,this.wY=!1}start(){return this.wY=!0,Math.abs(this.VY)<=mt&&Math.abs(this.bY)<=mt?(this.yY(),this.xY(!0)):this.zY(),this}halt(){this.wY&&this.xY(!1)}then(t,s){return t||s?this.eo.then(t,s):this.eo}thenAlways(t){const s=t||dt;return this.then(s,s)}zY(){this.pk=this.VY,this.mk=this.bY;const t=this.SY.bind(this),s=this.xY.bind(this,!0);return this.Xh.runAnimMutateSeries(this.kt,t,5e3).then(s,s)}SY(t,s){if(!this.wY)return!1;if(this.qV+=s*this.pk,this.XV+=s*this.mk,!this.yY())return!1;const i=Math.exp(-t/pt);return this.pk=this.VY*i,this.mk=this.bY*i,Math.abs(this.pk)>mt||Math.abs(this.mk)>mt}xY(t){this.wY&&(this.wY=!1,this.yY(),t?this.Sn():this.no())}yY(){return this.$(this.qV,this.XV)}},gt=class extends At{constructor(t){super("tap",t),this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.o=null}onTouchStart(t){const{touches:s}=t;return this.o=t.target,!(!s||1!=s.length||(this.GV=s[0].clientX,this.WV=s[0].clientY,0))}onTouchMove(t){const s=t.changedTouches||t.touches;if(s&&1==s.length){this.qV=s[0].clientX,this.XV=s[0].clientY;const t=Math.abs(this.qV-this.GV)>=8,i=Math.abs(this.XV-this.WV)>=8;if(t||i)return!1}return!0}onTouchEnd(t){this.signalReady(0)}acceptStart(){this.signalEmit({clientX:this.qV,clientY:this.XV,target:this.o},null),this.signalEnd()}},It=class extends At{constructor(t){super("doubletap",t),this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.tX=0,this.sX=null}onTouchStart(t){if(this.tX>1)return!1;const{touches:s}=t;return!(!s||1!=s.length||(this.GV=s[0].clientX,this.WV=s[0].clientY,this.qV=s[0].clientX,this.XV=s[0].clientY,0))}onTouchMove(t){const{touches:s}=t;if(s&&1==s.length){this.qV=s[0].clientX,this.XV=s[0].clientY;const t=Math.abs(this.qV-this.GV)>=8,i=Math.abs(this.XV-this.WV)>=8;return!t&&!i||(this.acceptCancel(),!1)}return!1}onTouchEnd(t){this.tX++,this.tX<2?this.signalPending(200):(this.sX=t,this.signalReady(0))}acceptStart(){this.tX=0,this.signalEmit({clientX:this.qV,clientY:this.XV},this.sX),this.signalEnd()}acceptCancel(){this.tX=0}},Rt=class extends At{constructor(t,s,i,h){super(t,s),this.HV=i,this.YV=h,this.pI=!1,this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.KV=0,this.ZV=0,this.Ch=0,this.JV=0,this.QV=0,this.pk=0,this.mk=0}onTouchStart(t){const{touches:s}=t;return!!(this.pI&&s&&s.length>1)||!(!s||1!=s.length)&&(this.Ch=Date.now(),this.GV=s[0].clientX,this.WV=s[0].clientY,!0)}onTouchMove(t){const{touches:s}=t;if(s&&s.length>=1){const{clientX:i,clientY:h}=s[0];if(this.qV=i,this.XV=h,this.pI)this.fk(!1,!1,t);else{const t=Math.abs(i-this.GV),s=Math.abs(h-this.WV);if(this.HV&&this.YV)(t>=8||s>=8)&&this.signalReady(-10);else if(this.HV){if(t>=8&&t>s)this.signalReady(-10);else if(s>=8)return!1}else{if(!this.YV)return!1;if(s>=8&&s>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:s}=t;s&&0==s.length&&this._k(t)}acceptStart(){this.pI=!0,this.KV=this.GV,this.ZV=this.WV,this.QV=this.Ch,this.GV=this.qV,this.WV=this.XV,this.fk(!0,!1,null)}acceptCancel(){this.pI=!1}fk(t,s,i){this.JV=Date.now();const h=this.JV-this.QV;if(!s&&h>4||s&&h>16){const t=vt(this.qV-this.KV,h,this.pk),i=vt(this.XV-this.ZV,h,this.mk);(!s||h>32||0!=t||0!=i)&&(this.pk=Math.abs(t)>1e-4?t:0,this.mk=Math.abs(i)>1e-4?i:0),this.KV=this.qV,this.ZV=this.XV,this.QV=this.JV}this.signalEmit({first:t,last:s,time:this.JV,deltaX:this.qV-this.GV,deltaY:this.XV-this.WV,startX:this.GV,startY:this.WV,lastX:this.qV,lastY:this.XV,velocityX:this.pk,velocityY:this.mk},i)}_k(t){this.pI&&(this.pI=!1,this.fk(!1,!0,t),this.signalEnd())}},Vt=class extends Rt{constructor(t){super("swipe-xy",t,!0,!0)}},wt=class extends At{constructor(t){super("tapzoom",t),this.pI=!1,this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.tX=0,this.KV=0,this.ZV=0,this.JV=0,this.QV=0,this.pk=0,this.mk=0}onTouchStart(t){if(this.pI)return!1;const{touches:s}=t;return!(!s||1!=s.length||(this.GV=s[0].clientX,this.WV=s[0].clientY,0))}onTouchMove(t){const{touches:s}=t;if(s&&1==s.length){if(this.qV=s[0].clientX,this.XV=s[0].clientY,this.pI)this.fk(!1,!1,t);else{const t=Math.abs(this.qV-this.GV)>=8,s=Math.abs(this.XV-this.WV)>=8;if(t||s){if(0==this.tX)return this.acceptCancel(),!1;this.signalReady(0)}}return!0}return!1}onTouchEnd(t){this.pI?this._k(t):(this.tX++,1!=this.tX?this.acceptCancel():this.signalPending(400))}acceptStart(){this.tX=0,this.pI=!0,this.fk(!0,!1,null)}acceptCancel(){this.tX=0,this.pI=!1}fk(t,s,i){this.JV=Date.now(),t?this.pk=this.mk=0:this.JV-this.QV>2&&(this.pk=vt(this.qV-this.KV,this.JV-this.QV,this.pk),this.mk=vt(this.XV-this.ZV,this.JV-this.QV,this.mk)),this.KV=this.qV,this.ZV=this.XV,this.QV=this.JV,this.signalEmit({first:t,last:s,centerClientX:this.GV,centerClientY:this.WV,deltaX:this.qV-this.GV,deltaY:this.XV-this.WV,velocityX:this.pk,velocityY:this.mk},i)}_k(t){this.pI&&(this.pI=!1,this.fk(!1,!0,t),this.signalEnd())}},bt=class extends At{constructor(t){super("pinch",t),this.pI=!1,this.iX=0,this.hX=0,this.nX=0,this.eX=0,this.rX=0,this.oX=0,this.cX=0,this.uX=0,this.aX=0,this.lX=0,this._X=0,this.fX=0,this.Ch=0,this.JV=0,this.QV=0,this.pk=0,this.mk=0}onTouchStart(t){const{touches:s}=t;return!!s&&(1==s.length||!!(this.pI&&s.length>2)||2==s.length&&(this.Ch=Date.now(),this.iX=s[0].clientX,this.hX=s[0].clientY,this.nX=s[1].clientX,this.eX=s[1].clientY,!0))}onTouchMove(t){const{touches:s}=t;return!(!s||0==s.length||1!=s.length&&(this.rX=s[0].clientX,this.oX=s[0].clientY,this.cX=s[1].clientX,this.uX=s[1].clientY,this.pI?(this.fk(!1,!1,t),0):this.PX()||(this.AX()&&this.signalReady(0),0)))}AX(){const t=this.rX-this.iX,s=this.oX-this.hX,i=this.cX-this.nX,h=this.uX-this.eX,e=t*i<=0&&s*h<=0,n=Math.abs(t-i)>=4,r=Math.abs(s-h)>=4;return e&&(n||r)}PX(){const t=this.rX-this.iX,s=this.oX-this.hX,i=this.cX-this.nX,h=this.uX-this.eX,e=t*i>0||s*h>0,n=Math.abs(t+i)>=10,r=Math.abs(s+h)>=10;return e&&(n||r)}onTouchEnd(t){const{touches:s}=t;s&&s.length<2&&this._k(t)}acceptStart(){this.pI=!0,this.QV=this.Ch,this.aX=0,this.lX=0,this._X=.5*(this.iX+this.nX),this.fX=.5*(this.hX+this.eX),this.fk(!0,!1,null)}acceptCancel(){this.pI=!1}fk(t,s,i){this.JV=Date.now();const h=this.JV-this.QV,e=this.MX(),n=this.dX();(!s&&h>4||s&&h>16)&&(this.pk=vt(e-this.aX,h,this.pk),this.mk=vt(n-this.lX,h,this.mk),this.pk=Math.abs(this.pk)>1e-4?this.pk:0,this.mk=Math.abs(this.mk)>1e-4?this.mk:0,this.aX=e,this.lX=n,this.QV=this.JV);const r=this.pX(this.iX,this.nX,this.hX,this.eX),o=this.pX(this.rX,this.cX,this.oX,this.uX)-r;this.signalEmit({first:t,last:s,time:this.JV,centerClientX:this._X,centerClientY:this.fX,dir:Math.sign(o),distance:o,deltaX:.5*e,deltaY:.5*n,velocityX:.5*this.pk,velocityY:.5*this.mk},i)}_k(t){this.pI&&(this.pI=!1,this.fk(!1,!0,t),this.signalEnd())}pX(t,s,i,h){const e=t-s,n=i-h;return Math.sqrt(e*e+n*n)}MX(){return Math.abs(this.rX-this.iX-(this.cX-this.nX))}dX(){return Math.abs(this.oX-this.hX-(this.uX-this.eX))}},yt=a(.4,0,.2,1.4),St="amp-image-viewer",Dt=["aria-label","aria-describedby","aria-labelledby"],kt=new Set(["AMP-IMG","AMP-ANIM","IMG"]),Ct=class extends t.BaseElement{constructor(t){super(t),this.NY=null,this.BY=null,this.mX=0,this.EX=0,this.TX=null,this.GY=null,this.gX=null,this.s5=null,this.RX=1,this.IX=1,this.FY=1,this.VX=1,this.bX=2,this.GV=0,this.WV=0,this.zX=0,this.SX=0,this.kX=0,this.CX=0,this.DX=0,this.XX=0,this.YX=null,this.OX=null,this.XY=null,this.Li=null,this.Xw=this.Xw.bind(this)}buildCallback(){this.element.classList.add("i-amphtml-image-viewer");const t=function(t,s){const i=[];for(let s=t.firstElementChild;s;s=s.nextElementSibling)!(function(t){let s;return r(t)?s=t:u(t)&&(s=t.tagName),!!s&&s.toLowerCase().startsWith("i-")}(h=s)||h.nodeType===Node.ELEMENT_NODE&&(h.hasAttribute("placeholder")||h.hasAttribute("fallback")||h.hasAttribute("overflow")))&&i.push(s);var h;return i}(this.element);Q(1==t.length,"%s should have its target element as its one and only child",St),Q(this.h5(t[0]),"%s is not supported by %s",t[0].tagName,St),this.XY=t[0],nt(this.element).setOwner(this.XY,this.element)}layoutCallback(){if(this.Li)return this.Li;if(Z(this.element,"[i-amphtml-scale-animation]"))return i();const t=this.XY,s=!!this.NY,h=s?i():"IMG"===t.tagName?function(t){let s,i;if(function(t){return!!(t.complete||"complete"==t.readyState||ft(t)&&t.readyState>0||t.document&&"complete"==t.document.readyState)}(t))return Promise.resolve(t);const h=ft(t);return h&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise(((e,n)=>{if(s=h?lt(t,"loadedmetadata",e,{capture:!0}):lt(t,"load",e),!t.tagName)return;let r=t;if(h&&!t.hasAttribute("src")&&(r=function(t,s){for(let i=t.lastElementChild;i;i=i.previousElementSibling)if(s(i))return i;return null}(t,(t=>"SOURCE"===t.tagName)),!r))return n(new Error("Media has no source."));i=lt(r,"error",n)})).then((()=>(i&&i(),t)),(()=>{s&&s(),function(t){ft(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);let s=t;throw s&&s.src&&(s=s.src),H().createError("Failed to load:",s)}(t)}))}(t):t.signals().whenSignal("load-end");return s||nt(this.element).scheduleLayout(this.element,t),this.Li=h.then((()=>this.tc())).then((()=>this.c5())).then((()=>this.fY())),this.Li}pauseCallback(){this.Li&&this.Li.then((()=>{this.c5(),this.PY()}))}resumeCallback(){this.Li&&this.Li.then((()=>{this.c5(),this.fY()}))}unlayoutCallback(){return this.PY(),this.Li=null,function(t,s,i){const h=C.get(t);if(h&&(n(h,(t=>t.callback===i&&0===t.type)),0==h.length)){C.delete(t),x.delete(t);const s=t.ownerDocument.defaultView;s&&X(s).unobserve(t)}}(this.element,0,this.Xw),!0}isLayoutSupported(t){return"fill"==t}getImageBox(){return this.GY}getImage(){return this.NY}getImageBoxWithOffset(){if(0==this.zX&&0==this.SX||!this.GY)return this.GY;const t=(this.RX-1)/2;return function(t,s,i){return 0==s&&0==i||0==t.width&&0==t.height?t:p(t.left+s,t.top+i,t.width,t.height)}((i=t,h=t,p((s=this.GY).left-s.width*i,s.top-s.height*h,s.width*(1+2*i),s.height*(1+2*h))),this.zX,this.SX);var s,i,h}h5(t){return kt.has(t.tagName)}HY(t){const s=(i=t,d(/^[\w-]+$/.test("img")),i.querySelector("img"));var i;this.measureElement((()=>{s?(this.mX=s.naturalWidth||t.offsetWidth,this.EX=s.naturalHeight||t.offsetHeight):(this.mX=t.offsetWidth,this.EX=t.offsetHeight)}))}tc(){if(this.NY)return i();this.NY=this.element.ownerDocument.createElement("img"),this.NY.classList.add("i-amphtml-image-viewer-image");const t=this.XY;return this.HY(t),this.BY=function(t){const s=t.getAttribute("srcset");if(s)return function(t){const s=[];let i;for(;i=N.exec(t);){const t=i[1];let h,e;if(i[2]){const t=i[3].toLowerCase();if("w"==t)h=parseInt(i[2],10);else{if("x"!=t)continue;e=parseFloat(i[2])}}else e=1;s.push({url:t,width:h,dpr:e})}return new $(s)}(s);const i=t.getAttribute("src");return m(i,'Either non-empty "srcset" or "src" attribute must be specified: %s',t),new $([{url:i,width:void 0,dpr:1}])}(t),function(t,s,i){const h=t.ownerDocument.defaultView;if(!h)return;let e=C.get(t);if(e||(e=[],C.set(t,e),X(h).observe(t)),!e.some((t=>t.callback===i&&0===t.type))){e.push({type:0,callback:i});const s=x.get(t);s&&setTimeout((()=>O(0,i,s)))}}(this.element,0,this.Xw),this.mutateElement((()=>{var s,h;return w(this.NY,{top:0,left:0,width:0,height:0}),s=t,void 0===(h=!1)&&(h=s.hasAttribute("hidden")),h?s.removeAttribute("hidden"):s.setAttribute("hidden",""),this.element.appendChild(this.NY),"IMG"===t.tagName?(z(Dt,t,this.NY),i()):t.getImpl().then((t=>z(Dt,t.element,this.NY)))}))}Xw(){Z(this.element,"[i-amphtml-scale-animation]")||this.c5()}sO(){var t;this.TX=(t=this.element.getBoundingClientRect(),p(Number(t.left),Number(t.top),Number(t.width),Number(t.height)));const s=this.mX/this.EX;let i=Math.min(this.TX.width/s,this.TX.height),h=Math.min(this.TX.height*s,this.TX.width);Math.abs(h-this.mX)<=16&&Math.abs(i-this.EX<=16)&&(h=this.mX,i=this.EX),this.GY=p(Math.round((this.TX.width-h)/2),Math.round((this.TX.height-i)/2),Math.round(h),Math.round(i));const e=this.TX.width/this.TX.height,n=Math.max(e/s,s/e);this.bX=Math.max(2,n),this.IX=this.RX=1,this.GV=this.zX=0,this.WV=this.SX=0,this.WX(this.RX)}c5(){return this.measureElement((()=>this.sO())).then((()=>{const t=this.NY;return this.mutateElement((()=>{w(t,{top:b(this.GY.top),left:b(this.GY.left),width:b(this.GY.width),height:b(this.GY.height)}),this.aY()}),t)})).then((()=>this.dC()))}dC(){if(!this.BY)return i();this.FY=Math.max(this.FY,this.RX);const t=Math.max(this.GY.width*this.FY,this.mX),s=this.BY.select(t,class{static getTop(t){return t.top}static getLocation(t){return t.location}static getDocumentReferrer(t){return t.document.referrer}static getHostname(t){return t.location.hostname}static getUserAgent(t){return t.navigator.userAgent}static getUserLanguage(t){return t.navigator.userLanguage||t.navigator.language}static getDevicePixelRatio(){return self.devicePixelRatio||1}static getSendBeacon(t){if(t.navigator.sendBeacon)return t.navigator.sendBeacon.bind(t.navigator)}static getXMLHttpRequest(t){return t.XMLHttpRequest}static getImage(t){return t.Image}}.getDevicePixelRatio());return s==this.NY.getAttribute("src")?i():this.mutateElement((()=>{this.NY.setAttribute("src",s)}),this.NY)}PY(){this.YX&&(this.YX.cleanup(),this.YX=null)}fY(){this.YX=Mt.get(this.element),this.YX.onGesture(It,(t=>{const{data:s}=t,i=1==this.RX?this.bX:this.VX,h=this.TX.width/2-s.clientX,e=this.TX.height/2-s.clientY;this.kY(i,h,e,!0).then((()=>this.KX()))})),this.YX.onGesture(gt,(t=>{this.u5(t.data.target)})),this.YX.onGesture(wt,(t=>{const{data:s}=t;this.a5(s.centerClientX,s.centerClientY,s.deltaX,s.deltaY),s.last&&this.l5(s.centerClientX,s.centerClientY,s.deltaX,s.deltaY,s.velocityY,s.velocityY)})),this.YX.onGesture(bt,(t=>{const{data:s}=t;this.EY(s.centerClientX,s.centerClientY,s.deltaX,s.deltaY,s.dir),s.last&&this.KX()}))}u5(t){const s=function(t,s,i,h){const e={detail:null};return Object.assign(e,{bubbles:!0}),new t.CustomEvent("click",e)}(this.win);t.dispatchEvent(s)}f5(){this.gX=this.YX.onGesture(Vt,(t=>{const{data:s}=t;this.MY(s.deltaX,s.deltaY,!1),s.last&&this.TY(s.velocityX,s.velocityY)})),this.s5=this.YX.onPointerDown((()=>{this.OX&&this.OX.halt()}))}_5(){this.gX&&(this.gX(),this.gX=null,this.YX.removeGesture(Vt)),this.s5&&(this.s5(),this.s5=null)}RY(t,s){return B(t,this.VX,this.bX,s?.25:0)}FX(t,s){return B(t,this.kX,this.DX,s&&this.RX>1?.25*this.TX.width:0)}qX(t,s){return B(t,this.CX,this.XX,s?.25*this.TX.height:0)}WX(t){let s=0,i=0;const h=this.TX.height-this.GY.height*t;h>=0?i=s=0:(i=h/2,s=-i);let e=0,n=0;const r=this.TX.width-this.GY.width*t;r>=0?n=e=0:(n=r/2,e=-n),this.kX=n,this.CX=i,this.DX=e,this.XX=s}aY(){var t,s,i;w(this.NY,{transform:(s=this.zX,i=this.SX,(null==i?`translate(${y(s,b)})`:`translate(${y(s,b)}, ${y(i,b)})`)+" "+(t=this.RX,`scale(${t})`))})}MY(t,s,i){const h=this.FX(this.GV+t,!1),e=this.qX(this.WV+s,!1);this.JX(this.RX,h,e,i)}TY(t,s){this.OX=Et(this.NY,this.zX,this.SX,t,s,((t,s)=>{const i=this.FX(t,!1),h=this.qX(s,!1);return!(Math.abs(i-this.zX)<1&&Math.abs(h-this.SX)<1||(this.JX(this.RX,i,h,!1),0))})),this.OX.thenAlways((()=>(this.OX=null,this.dY())))}EY(t,s,i,h,e){this.P5(t,s,i,h,e)}a5(t,s,i,h){const e=Math.abs(h)>Math.abs(i)?Math.sign(h):Math.sign(-i);this.P5(t,s,i,h,e)}P5(t,s,i,h,e){if(0==e)return;const n=L(i,h),r=this.IX*(1+e*n/100),o=this.TX.width/2-t,c=this.TX.height/2-s;i=Math.min(o,o*(n/100)),h=Math.min(c,c*(n/100)),this.kY(r,i,h,!1)}kY(t,s,i,h){const e=this.RY(t,!0);if(e==this.RX)return;this.WX(e);const n=this.FX(this.GV+s*e,!1),r=this.qX(this.WV+i*e,!1);return this.JX(e,n,r,h)}l5(t,s,h,e,n,r){let o;return o=0==n&&0==r?i():Et(this.NY,h,e,n,r,((i,h)=>(this.a5(t,s,i,h),!0))).thenAlways(),o.then((()=>{this.KX()}))}KX(){const t=this.RX>this.IX;return this.dY().then((()=>{t&&this.dC(),this.RX>1?this.f5():this._5()}))}JX(t,s,h,e){const n=t-this.RX,r=(o=this.zX,c=this.SX,L(s-o,h-c));var o,c;let u,a=0;if(e){const t=250;a=Math.min(t,Math.max(t*r*.01,t*Math.abs(n)))}if(a>16&&e){const i=U(this.RX,t),e=U(this.zX,s),n=U(this.SX,h);u=ut.animate(this.NY,(t=>{this.RX=i(t),this.zX=e(t),this.SX=n(t),this.aY()}),a,yt).thenAlways((()=>{this.RX=t,this.zX=s,this.SX=h,this.aY()}))}else this.RX=t,this.zX=s,this.SX=h,this.aY(),u=e?i():void 0;return u}dY(){const t=this.RY(this.RX,!1);t!=this.RX&&this.WX(t);const s=this.FX(this.zX/this.RX*t,!1),i=this.qX(this.SX/this.RX*t,!1);return this.JX(t,s,i,!0).then((()=>{this.IX=this.RX,this.GV=this.zX,this.WV=this.SX}))}};t.registerElement(St,Ct,".i-amphtml-image-viewer-image{position:absolute;-o-object-fit:contain;object-fit:contain}.i-amphtml-image-viewer{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-viewer>amp-img{min-width:1px;min-height:1px}\n/*# sourceURL=/extensions/amp-image-viewer/0.1/amp-image-viewer.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-image-viewer-0.1.mjs.map