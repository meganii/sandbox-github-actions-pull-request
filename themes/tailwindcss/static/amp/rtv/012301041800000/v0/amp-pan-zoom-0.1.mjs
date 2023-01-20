;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-pan-zoom",ev:"0.1",l:!0,f:function(t,s){(()=>{var s;function i(){return s||(s=Promise.resolve(void 0))}var h=class{constructor(){this.promise=new Promise(((t,s)=>{this.resolve=t,this.reject=s}))}},{isArray:n}=Array;function e(t){return"string"==typeof t}var{hasOwnProperty:r,toString:o}=Object.prototype;function c(t,s,i,h,n,e,r,o,c,u,a){return t}function u(t,s,i,h){return n=>a.solveYValueFromXValue(n,0,0,t,s,i,h,1,1)}var a=class{static solveYValueFromXValue(t,s,i,h,n,e,r,o,c){return a.Kh(a.Yh(t,s,h,e,o),i,n,r,c)}static Yh(t,s,i,h,n){const e=1e-6;let r=(t-s)/(n-s);if(r<=0)return 0;if(r>=1)return 1;let o=0,c=1,u=0;for(let l=0;l<8;l++){u=a.Jh(r,s,i,h,n);const l=(a.Jh(r+e,s,i,h,n)-u)/e;if(Math.abs(u-t)<e)return r;if(Math.abs(l)<e)break;u<t?o=r:c=r,r-=(u-t)/l}for(let l=0;Math.abs(u-t)>e&&l<8;l++)u<t?(o=r,r=(r+c)/2):(c=r,r=(r+o)/2),u=a.Jh(r,s,i,h,n);return r}static Jh(t,s,i,h,n){if(0==t)return s;if(1==t)return n;let e=a.Qh(s,i,t),r=a.Qh(i,h,t);const o=a.Qh(h,n,t);return e=a.Qh(e,r,t),r=a.Qh(r,o,t),a.Qh(e,r,t)}static Kh(t,s,i,h,n){if(0==t)return s;if(1==t)return n;let e=a.Qh(s,i,t),r=a.Qh(i,h,t);const o=a.Qh(h,n,t);return e=a.Qh(e,r,t),r=a.Qh(r,o,t),a.Qh(e,r,t)}static Qh(t,s,i){return t+i*(s-t)}},l={LINEAR:t=>t,EASE:t=>a.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1),EASE_IN:t=>a.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1),EASE_OUT:t=>a.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1),EASE_IN_OUT:t=>a.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)},_={"linear":l.LINEAR,"ease":l.EASE,"ease-in":l.EASE_IN,"ease-out":l.EASE_OUT,"ease-in-out":l.EASE_IN_OUT};function f(t){if(!t)return null;if(e(t)){if(-1!=(t=t).indexOf("cubic-bezier")){const s=t.match(/cubic-bezier\((.+)\)/);if(s){const t=s[1].split(",").map(parseFloat);if(4==t.length){for(let s=0;s<4;s++)if(isNaN(t[s]))return null;return u(t[0],t[1],t[2],t[3])}}return null}return _[t]}return t}function P(t){return(t.ownerDocument||t).defaultView}var A,M={bubbles:!0,cancelable:!0};function d(t,s,i,h){return{left:t,top:s,width:i,height:h,bottom:s+h,right:t+i,x:t,y:s}}function p(t){const s=Object.getOwnPropertyDescriptor(t,"message");if(null!=s&&s.writable)return t;const{message:i,stack:h}=t,n=new Error(i);for(const s in t)n[s]=t[s];return n.stack=h,n}function m(t){let s=null,i="";for(const t of arguments)t instanceof Error&&!s?s=p(t):(i&&(i+=" "),i+=t);return s?i&&(s.message=i+": "+s.message):s=new Error(i),s}function E(t){var s,i;null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t)}function T(t,...s){try{return t.apply(null,s)}catch(t){!function(t){const s=m.apply(null,arguments);setTimeout((()=>{throw E(s),s}))}(t)}}var v=["Webkit","webkit","Moz","moz","ms","O","o"],g={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function R(t,s,i,h,n){const e=function(t,s,i){if(s.startsWith("--"))return s;A||(A=Object.create(null));let h=A[s];if(!h||i){if(h=s,void 0===t[s]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(s),n=function(t,s){for(let i=0;i<v.length;i++){const h=v[i]+s;if(void 0!==t[h])return h}return""}(t,i);void 0!==t[n]&&(h=n)}i||(A[s]=h)}return h}(t.style,s,n);if(!e)return;const r=h?i+h:i;t.style.setProperty(function(t){const s=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return v.some((t=>s.startsWith(t+"-")))?`-${s}`:s}(e),r)}function I(t,s){for(const i in s)R(t,i,s[i])}function V(t){return`${t}px`}function b(t,s){return"number"==typeof t?s(t):t}function w(t,s){return null==s?`translate(${b(t,V)})`:`translate(${b(t,V)}, ${b(s,V)})`}var y,x=/vertical/,z=new WeakMap,S=new WeakMap,k=new WeakMap;function C(t){let s=z.get(t);return s||(s=new t.ResizeObserver(D),z.set(t,s)),s}function D(t){const s=new Set;for(let i=t.length-1;i>=0;i--){const h=t[i],{target:n}=h;if(s.has(n))continue;s.add(n);const e=S.get(n);if(e){k.set(n,h);for(let t=0;t<e.length;t++){const{callback:s,type:i}=e[t];X(i,s,h)}}}}function X(t,s,i){if(0==t){const{contentRect:t}=i,{height:h,width:n}=t;T(s,{width:n,height:h})}else if(1==t){const{borderBoxSize:t}=i;let h;if(t)h=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=i,s=P(t),n=x.test(function(t,s){return t.getComputedStyle(s)||g}(s,t).writingMode),{offsetHeight:e,offsetWidth:r}=t;let o,c;n?(c=r,o=e):(o=r,c=e),h={inlineSize:o,blockSize:c}}T(s,h)}}function Y(t){return function(t,s){if(c(1===s.length),c(Array.isArray(s)||(i=s,r.call(i,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return s[0]}});t.innerHTML=i.createHTML("ignored")}else t.innerHTML=s[0];var i;const h=t.firstElementChild;return c(h),c(!h.nextElementSibling),t.removeChild(h),h}(y,t)}function O(t,s){return i=>t+(s-t)*i}function N(t,s,i,h){return c(s<=i),function(t,s,i){return c(s<=i),Math.min(Math.max(t,s),i)}(t,s-h,i+h)}function Z(t,s){return Math.sqrt(t*t+s*s)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;function j(t,s){throw new Error("failed to call initLogConstructor")}function H(t){return j()}function L(){return G.dev||(G.dev=j())}function $(t,s,i,h,n,e,r,o,c,u,a){return t}function B(t,s,i,h,n,e,r,o,c,u,a){return(G.user||(G.user=H()),void G.user.win?G.userForEmbed||(G.userForEmbed=H()):G.user).assert(t,s,i,h,n,e,r,o,c,u,a)}function U(t,s){return q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),s)}function W(t){return t.nodeType?(s=P(t),U(s,"ampdoc")).getAmpDoc(t):t;var s}function F(t){const s=W(t);return s.isSingleDoc()?s.win:s}function q(t,s){$(J(t,s));const i=function(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}(t)[s];return i.obj||($(i.ctor),$(i.context),i.obj=new i.ctor(i.context),$(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function J(t,s){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!i||!i.ctor)}var K,Q,tt=t=>function(t,s){return q(F(W(t)),"owners")}(t),st=t=>U(t,"vsync"),it="Animation",ht=function(){},nt=class{static animate(t,s,i,h){return new nt(t).setCurve(h).add(0,s,1).start(i)}constructor(t,s){this.kt=t,this.Xh=s||st(self),this.Zh=null,this.io=[]}setCurve(t){return t&&(this.Zh=f(t)),this}add(t,s,i,h){return this.io.push({delay:t,func:s,duration:i,curve:f(h)}),this}start(t){return new et(this.Xh,this.kt,this.io,this.Zh,t)}},et=class{constructor(t,s,i,n,e){this.Xh=t,this.kt=s,this.io=[];for(let t=0;t<i.length;t++){const s=i[t];this.io.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||n,started:!1,completed:!1})}this.so=e,this.Ch=Date.now(),this.Ht=!0,this.Ri={};const r=new h;this.eo=r.promise,this.Sn=r.resolve,this.no=r.reject,this.ro=this.Xh.createAnimTask(this.kt,{mutate:this.ho.bind(this)}),this.Xh.canAnimate(this.kt)?this.ro(this.Ri):this.oo(!1,0)}then(t,s){return t||s?this.eo.then(t,s):this.eo}thenAlways(t){const s=t||ht;return this.then(s,s)}halt(t){this.oo(!1,t||0)}oo(t,s){if(this.Ht){if(this.Ht=!1,0!=s){this.io.length>1&&this.io.sort(((t,s)=>t.delay+t.duration-(s.delay+s.duration)));try{if(s>0)for(let t=0;t<this.io.length;t++)this.io[t].func(1,!0);else for(let t=this.io.length-1;t>=0;t--)this.io[t].func(0,!1)}catch(s){L().error(it,"completion failed: "+s,s),t=!1}}t?this.Sn():this.no()}}ho(t){if(!this.Ht)return;const s=Date.now(),i=Math.min((s-this.Ch)/this.so,1);for(let t=0;t<this.io.length;t++){const s=this.io[t];!s.started&&i>=s.delay&&(s.started=!0)}for(let t=0;t<this.io.length;t++){const s=this.io[t];s.started&&!s.completed&&this.uo(s,i)}1==i?this.oo(!0,0):this.Xh.canAnimate(this.kt)?this.ro(this.Ri):this.oo(!1,0)}uo(t,s){let i,h;if(t.duration>0){if(i=Math.min((s-t.delay)/t.duration,1),h=i,t.curve&&1!=h)try{h=t.curve(i)}catch(t){return L().error(it,"step curve failed: "+t,t),void this.oo(!1,0)}}else i=1,h=1;1==i&&(t.completed=!0);try{t.func(h,t.completed)}catch(t){return L().error(it,"step mutate failed: "+t,t),void this.oo(!1,0)}}};function rt(t,s,i,h){const n={detail:i};return Object.assign(n,h),new t.CustomEvent(s,n)}function ot(t,s,i,h){return function(t,s,i,h){let n=t,e=i,r=t=>{try{return e(t)}catch(t){var s,i;throw null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t),t}};const o=function(){if(void 0!==K)return K;K=!1;try{const t={get capture(){return K=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return K}(),c=!(null==h||!h.capture);return n.addEventListener(s,r,o?h:c),()=>{null==n||n.removeEventListener(s,r,o?h:c),e=null,n=null,r=null}}(t,s,i,h)}var ct=class{constructor(){this.Fn=null}add(t){return this.Fn||(this.Fn=[]),this.Fn.push(t),()=>{this.remove(t)}}remove(t){this.Fn&&function(t,s){const i=t.indexOf(s);-1!=i&&t.splice(i,1)}(this.Fn,t)}removeAll(){this.Fn&&(this.Fn.length=0)}fire(t){if(this.Fn)for(const s of this.Fn.slice())s(t)}getHandlerCount(){var t,s;return null!==(t=null===(s=this.Fn)||void 0===s?void 0:s.length)&&void 0!==t?t:0}},ut="__AMP_Gestures",at=class{static get(t,s=!1,i=!1){let h=t[ut];return h||(h=new at(t,s,i),t[ut]=h),h}constructor(t,s=!1,i=!1){this._n=t,this.hI=[],this.t_=[],this.gi=[],this.lI=[],this.pI=null;const h=function(t){if(void 0!==Q)return Q;Q=!1;try{const s={get passive(){return Q=!0,!1}};t.addEventListener("test-options",null,s),t.removeEventListener("test-options",null,s)}catch(t){}return Q}(t.ownerDocument.defaultView);this.mI=s||h,this.cI=i,this.uI=!1,this.Ar=new class{constructor(t,s,i){this.Qe=q(t,"timer"),this.Xe=s,this.Ze=i||0,this.pr=-1,this.mr=0,this.Ht=!1,this._r=()=>{this.Ar()}}isPending(){return-1!=this.pr}schedule(t){let s=t||this.Ze;this.Ht&&s<10&&(s=10);const i=Date.now()+s;return(!this.isPending()||i-this.mr<-10)&&(this.cancel(),this.mr=i,this.pr=this.Qe.delay(this._r,s),!0)}Ar(){this.pr=-1,this.mr=0,this.Ht=!0,this.Xe(),this.Ht=!1}cancel(){this.isPending()&&(this.Qe.cancel(this.pr),this.pr=-1)}}(P(t),this.vg.bind(this)),this.dI=new ct,this.fI=Object.create(null),this._I=this.sm.bind(this),this.gI=this.rm.bind(this),this.yI=this.nm.bind(this),this.AI=this.h_.bind(this),this._n.addEventListener("touchstart",this._I,!!h&&{passive:!0}),this._n.addEventListener("touchend",this.gI),this._n.addEventListener("touchmove",this.yI,!!h&&{passive:!0}),this._n.addEventListener("touchcancel",this.AI),this.bI=!1}cleanup(){this._n.removeEventListener("touchstart",this._I),this._n.removeEventListener("touchend",this.gI),this._n.removeEventListener("touchmove",this.yI),this._n.removeEventListener("touchcancel",this.AI),delete this._n[ut],this.Ar.cancel()}onGesture(t,s){const i=new t(this),h=i.getType();let n=this.fI[h];return n||(this.hI.push(i),n=new ct,this.fI[h]=n),n.add(s)}removeGesture(t){const s=new t(this).getType(),i=this.fI[s];if(i){i.removeAll();const t=function(t,i){for(let i=0;i<t.length;i++)if(t[i].getType()==s)return i;return-1}(this.hI);return!(t<0||(this.hI.splice(t,1),this.gi.splice(t,1),this.lI.splice(t,1),this.t_.splice(t,1),delete this.fI[s],0))}return!1}onPointerDown(t){return this.dI.add(t)}sm(t){const s=Date.now();this.uI=!1,this.dI.fire(t);for(let i=0;i<this.hI.length;i++)this.gi[i]||(this.lI[i]&&this.lI[i]<s&&this.o_(i),this.hI[i].onTouchStart(t)&&this.u_(i));this.vI(t)}nm(t){const s=Date.now();for(let i=0;i<this.hI.length;i++)this.t_[i]&&(this.lI[i]&&this.lI[i]<s?this.o_(i):this.hI[i].onTouchMove(t)||this.o_(i));this.vI(t)}rm(t){const s=Date.now();for(let i=0;i<this.hI.length;i++){if(!this.t_[i])continue;if(this.lI[i]&&this.lI[i]<s){this.o_(i);continue}this.hI[i].onTouchEnd(t);const h=!this.lI[i],n=this.lI[i]<s;this.pI==this.hI[i]||!h&&!n||this.o_(i)}this.vI(t)}h_(t){for(let t=0;t<this.hI.length;t++)this.TI(t);this.vI(t)}Wp(t,s){if(this.pI)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.hI.length;h++)this.hI[h]==t&&(this.gi[h]=i+s,this.lI[h]=0);this.bI=!0}EI(t,s){if(this.pI)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.hI.length;h++)this.hI[h]==t&&(this.lI[h]=i+s)}xI(t){this.pI==t&&(this.pI=null,this.uI=!0)}MI(t,s,i){c(this.pI==t);const h=this.fI[t.getType()];h&&h.fire(new class{constructor(t,s,i,h){this.type=t,this.data=s,this.time=i,this.event=h}}(t.getType(),s,Date.now(),i))}vI(t){let s=!!this.pI||this.uI;if(this.uI=!1,!s){const t=Date.now();for(let i=0;i<this.hI.length;i++)if(this.gi[i]||this.lI[i]&&this.lI[i]>=t){s=!0;break}}s?(t.stopPropagation(),this.mI||t.preventDefault()):this.cI&&t.stopPropagation(),this.bI&&(this.bI=!1,this.vg())}vg(){const t=Date.now();let s=-1;for(let i=0;i<this.hI.length;i++)this.gi[i]?(-1==s||this.gi[i]>this.gi[s])&&(s=i):this.lI[i]&&this.lI[i]<t&&this.o_(i);if(-1==s)return;let i=0;for(let s=0;s<this.hI.length;s++)!this.gi[s]&&this.t_[s]&&(i=Math.max(i,this.lI[s]-t));i<2?this.wI(s):this.Ar.schedule(i)}wI(t){const s=this.hI[t];for(let s=0;s<this.hI.length;s++)s!=t&&this.TI(s);this.gi[t]=0,this.lI[t]=0,this.pI=s,s.acceptStart()}u_(t){this.t_[t]=!0,this.lI[t]=0}o_(t){this.t_[t]=!1,this.lI[t]=0,this.gi[t]||this.hI[t].acceptCancel()}TI(t){this.gi[t]=0,this.o_(t)}},lt=class{constructor(t,s){this.BV=t,this.S_=s}getType(){return this.BV}signalReady(t){this.S_.Wp(this,t)}signalPending(t){this.S_.EI(this,t)}signalEnd(){this.S_.xI(this)}signalEmit(t,s){this.S_.MI(this,t,s)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}},_t=function(){},ft=.02,Pt=Math.round(-16.67/Math.log(.95));function At(t,s,i){s<1&&(s=1);const h=t/s,n=.5+Math.min(s/33.34,.5);return h*n+i*(1-n)}var Mt=class extends lt{constructor(t){super("tap",t),this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.o=null}onTouchStart(t){const{touches:s}=t;return this.o=t.target,!(!s||1!=s.length||(this.GV=s[0].clientX,this.WV=s[0].clientY,0))}onTouchMove(t){const s=t.changedTouches||t.touches;if(s&&1==s.length){this.qV=s[0].clientX,this.XV=s[0].clientY;const t=Math.abs(this.qV-this.GV)>=8,i=Math.abs(this.XV-this.WV)>=8;if(t||i)return!1}return!0}onTouchEnd(t){this.signalReady(0)}acceptStart(){this.signalEmit({clientX:this.qV,clientY:this.XV,target:this.o},null),this.signalEnd()}},dt=class extends lt{constructor(t){super("doubletap",t),this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.tX=0,this.sX=null}onTouchStart(t){if(this.tX>1)return!1;const{touches:s}=t;return!(!s||1!=s.length||(this.GV=s[0].clientX,this.WV=s[0].clientY,this.qV=s[0].clientX,this.XV=s[0].clientY,0))}onTouchMove(t){const{touches:s}=t;if(s&&1==s.length){this.qV=s[0].clientX,this.XV=s[0].clientY;const t=Math.abs(this.qV-this.GV)>=8,i=Math.abs(this.XV-this.WV)>=8;return!t&&!i||(this.acceptCancel(),!1)}return!1}onTouchEnd(t){this.tX++,this.tX<2?this.signalPending(200):(this.sX=t,this.signalReady(0))}acceptStart(){this.tX=0,this.signalEmit({clientX:this.qV,clientY:this.XV},this.sX),this.signalEnd()}acceptCancel(){this.tX=0}},pt=class extends lt{constructor(t,s,i,h){super(t,s),this.HV=i,this.YV=h,this.pI=!1,this.GV=0,this.WV=0,this.qV=0,this.XV=0,this.KV=0,this.ZV=0,this.Ch=0,this.JV=0,this.QV=0,this.pk=0,this.mk=0}onTouchStart(t){const{touches:s}=t;return!!(this.pI&&s&&s.length>1)||!(!s||1!=s.length)&&(this.Ch=Date.now(),this.GV=s[0].clientX,this.WV=s[0].clientY,!0)}onTouchMove(t){const{touches:s}=t;if(s&&s.length>=1){const{clientX:i,clientY:h}=s[0];if(this.qV=i,this.XV=h,this.pI)this.fk(!1,!1,t);else{const t=Math.abs(i-this.GV),s=Math.abs(h-this.WV);if(this.HV&&this.YV)(t>=8||s>=8)&&this.signalReady(-10);else if(this.HV){if(t>=8&&t>s)this.signalReady(-10);else if(s>=8)return!1}else{if(!this.YV)return!1;if(s>=8&&s>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:s}=t;s&&0==s.length&&this._k(t)}acceptStart(){this.pI=!0,this.KV=this.GV,this.ZV=this.WV,this.QV=this.Ch,this.GV=this.qV,this.WV=this.XV,this.fk(!0,!1,null)}acceptCancel(){this.pI=!1}fk(t,s,i){this.JV=Date.now();const h=this.JV-this.QV;if(!s&&h>4||s&&h>16){const t=At(this.qV-this.KV,h,this.pk),i=At(this.XV-this.ZV,h,this.mk);(!s||h>32||0!=t||0!=i)&&(this.pk=Math.abs(t)>1e-4?t:0,this.mk=Math.abs(i)>1e-4?i:0),this.KV=this.qV,this.ZV=this.XV,this.QV=this.JV}this.signalEmit({first:t,last:s,time:this.JV,deltaX:this.qV-this.GV,deltaY:this.XV-this.WV,startX:this.GV,startY:this.WV,lastX:this.qV,lastY:this.XV,velocityX:this.pk,velocityY:this.mk},i)}_k(t){this.pI&&(this.pI=!1,this.fk(!1,!0,t),this.signalEnd())}},mt=class extends pt{constructor(t){super("swipe-xy",t,!0,!0)}},Et=class extends lt{constructor(t){super("pinch",t),this.pI=!1,this.iX=0,this.hX=0,this.nX=0,this.eX=0,this.rX=0,this.oX=0,this.cX=0,this.uX=0,this.aX=0,this.lX=0,this._X=0,this.fX=0,this.Ch=0,this.JV=0,this.QV=0,this.pk=0,this.mk=0}onTouchStart(t){const{touches:s}=t;return!!s&&(1==s.length||!!(this.pI&&s.length>2)||2==s.length&&(this.Ch=Date.now(),this.iX=s[0].clientX,this.hX=s[0].clientY,this.nX=s[1].clientX,this.eX=s[1].clientY,!0))}onTouchMove(t){const{touches:s}=t;return!(!s||0==s.length||1!=s.length&&(this.rX=s[0].clientX,this.oX=s[0].clientY,this.cX=s[1].clientX,this.uX=s[1].clientY,this.pI?(this.fk(!1,!1,t),0):this.PX()||(this.AX()&&this.signalReady(0),0)))}AX(){const t=this.rX-this.iX,s=this.oX-this.hX,i=this.cX-this.nX,h=this.uX-this.eX,n=t*i<=0&&s*h<=0,e=Math.abs(t-i)>=4,r=Math.abs(s-h)>=4;return n&&(e||r)}PX(){const t=this.rX-this.iX,s=this.oX-this.hX,i=this.cX-this.nX,h=this.uX-this.eX,n=t*i>0||s*h>0,e=Math.abs(t+i)>=10,r=Math.abs(s+h)>=10;return n&&(e||r)}onTouchEnd(t){const{touches:s}=t;s&&s.length<2&&this._k(t)}acceptStart(){this.pI=!0,this.QV=this.Ch,this.aX=0,this.lX=0,this._X=.5*(this.iX+this.nX),this.fX=.5*(this.hX+this.eX),this.fk(!0,!1,null)}acceptCancel(){this.pI=!1}fk(t,s,i){this.JV=Date.now();const h=this.JV-this.QV,n=this.MX(),e=this.dX();(!s&&h>4||s&&h>16)&&(this.pk=At(n-this.aX,h,this.pk),this.mk=At(e-this.lX,h,this.mk),this.pk=Math.abs(this.pk)>1e-4?this.pk:0,this.mk=Math.abs(this.mk)>1e-4?this.mk:0,this.aX=n,this.lX=e,this.QV=this.JV);const r=this.pX(this.iX,this.nX,this.hX,this.eX),o=this.pX(this.rX,this.cX,this.oX,this.uX)-r;this.signalEmit({first:t,last:s,time:this.JV,centerClientX:this._X,centerClientY:this.fX,dir:Math.sign(o),distance:o,deltaX:.5*n,deltaY:.5*e,velocityX:.5*this.pk,velocityY:.5*this.mk},i)}_k(t){this.pI&&(this.pI=!1,this.fk(!1,!0,t),this.signalEnd())}pX(t,s,i,h){const n=t-s,e=i-h;return Math.sqrt(n*n+e*e)}MX(){return Math.abs(this.rX-this.iX-(this.cX-this.nX))}dX(){return Math.abs(this.oX-this.hX-(this.uX-this.eX))}},Tt=['<div class="amp-pan-zoom-in-icon amp-pan-zoom-button"></div>'],vt=u(.4,0,.2,1.4),gt="amp-pan-zoom",Rt=new Set(["svg","DIV","AMP-IMG","AMP-LAYOUT","AMP-SELECTOR","IMG"]),It=class extends t.BaseElement{constructor(t){super(t),this._N=null,this.Da=null,this.mX=0,this.EX=0,this.TX=null,this.vX=null,this.gX=null,this.RX=1,this.IX=1,this.VX=1,this.bX=3,this.wX=0,this.yX=0,this.xX=1,this.GV=0,this.WV=0,this.zX=0,this.SX=0,this.kX=0,this.CX=0,this.DX=0,this.XX=0,this.YX=null,this.OX=null,this.NX=!1,this.ZX=null,this.GX=!1,this.jX=null,this.HX=null,this.LX=null,this.$X=0,this.BX=0,this.Xw=this.Xw.bind(this)}buildCallback(){this.Da=function(t,s){const i=F(W(t));return J(i,s)?q(i,s):null}(this.element,"action");const t=function(t,s){const i=[];for(let s=t.firstElementChild;s;s=s.nextElementSibling)!(function(t){let s;var i;return e(t)?s=t:1==(null==(i=t)?void 0:i.nodeType)&&(s=t.tagName),!!s&&s.toLowerCase().startsWith("i-")}(h=s)||h.nodeType===Node.ELEMENT_NODE&&(h.hasAttribute("placeholder")||h.hasAttribute("fallback")||h.hasAttribute("overflow")))&&i.push(s);var h;return i}(this.element);B(1==t.length,"%s should have its target element as its one and only child",gt),B(Rt.has(t[0].tagName),"%s is not supported by %s",t[0].tagName,gt),this.element.classList.add("i-amphtml-pan-zoom"),this._N=t[0],this._N.classList.add("i-amphtml-pan-zoom-child"),this.bX=this.UX("max-scale",3),this.xX=this.UX("initial-scale",1),this.wX=this.UX("initial-x",0),this.yX=this.UX("initial-y",0),this.NX=this.element.hasAttribute("reset-on-resize"),this.GX=this.element.hasAttribute("disable-double-tap"),this.registerAction("transform",(t=>{const{args:s}=t;if(!s)return;const i=s.scale||1,h=s.x||0,n=s.y||0;return this.transform(h,n,i)}))}transform(t,s,i){this.WX(i);const h=this.FX(t,!1),n=this.qX(s,!1);return this.JX(i,h,n,!0).then((()=>this.KX()))}layoutCallback(){return this.QX(),tt(this.element).scheduleLayout(this.element,this._N),this.tY().then(this.sY())}pauseCallback(){this.iY()}resumeCallback(){this._N&&tt(this.element).scheduleLayout(this.element,this._N),this.sY()}unlayoutCallback(){return this.iY(),!0}isLayoutSupported(t){return"fixed"==t||"fixed-height"==t||"fill"==t||"responsive"==t}Xw(){this.NX&&this.tY()}QX(){this.ZX=function(t){const s=t.ownerDocument||t;return y&&y.ownerDocument===s||(y=s.createElement("div")),Y}(this.element)(Tt),this.ZX.addEventListener("click",(()=>{this.ZX.classList.contains("amp-pan-zoom-in-icon")?(this.transform(0,0,this.bX),this.hY()):(this.transform(0,0,this.VX),this.nY())})),this.element.appendChild(this.ZX)}UX(t,s){const{element:i}=this;return i.hasAttribute(t)?parseInt(i.getAttribute(t),10):s}eY(t){const s=this.TX.width/t,i=this.TX.height*t;let h=Math.min(s,this.TX.height),n=Math.min(i,this.TX.width);Math.abs(n-this.mX)<=16&&Math.abs(h-this.EX)<=16&&(n=this.mX,h=this.EX),this.vX=d(0,0,Math.round(n),Math.round(h))}rY(t){const{height:s,width:i}=this.TX,h=i/s,n=Math.max(h/t,t/h);isNaN(n)||(this.bX=Math.max(this.bX,n))}sO(){this.mX=this._N.scrollWidth,this.EX=this._N.scrollHeight;const t=this.mX/this.EX;this.TX=this.getViewport().getLayoutRect(this.element),this.eY(t),this.rY(t),this.IX=this.RX=this.xX,this.GV=this.zX=this.wX,this.WV=this.SX=this.yX}tY(){return this.mutateElement((()=>this.oY())).then((()=>this.measureMutateElement((()=>this.sO()),(()=>this.cY()),this._N))).then((()=>(this.uY(),this.WX(this.RX),this.aY())))}uY(){const t=(s=this._N.getBoundingClientRect(),d(Number(s.left),Number(s.top),Number(s.width),Number(s.height)));var s;this.vX.top=t.top-this.TX.top,this.vX.left=t.left-this.TX.left}cY(){I(this._N,{width:V(this.vX.width),height:V(this.vX.height)})}oY(){I(this._N,{width:"",height:""})}lY(t){const{left:s}=this.TX;return t-(s-this.getViewport().getScrollLeft())}_Y(t){const{top:s}=this.TX;return t-(s-this.getViewport().getScrollTop())}sY(){this.fY(),this.jX=ot(this.element,"mousedown",(t=>this.Iu(t))),function(t,s,i){const h=t.ownerDocument.defaultView;if(!h)return;let n=S.get(t);if(n||(n=[],S.set(t,n),C(h).observe(t)),!n.some((t=>t.callback===i&&0===t.type))){n.push({type:0,callback:i});const s=k.get(t);s&&setTimeout((()=>X(0,i,s)))}}(this.element,0,this.Xw)}nb(t){t&&(t(),t=null)}iY(){this.PY(),this.nb(this.jX),this.nb(this.LX),this.nb(this.HX),function(t,s,i){const h=S.get(t);if(h&&(function(t,s){const h=[];let n=0;for(let s=0;s<t.length;s++){const r=t[s];(e=r).callback===i&&0===e.type?h.push(r):(n<s&&(t[n]=r),n++)}var e;n<t.length&&(t.length=n)}(h),0==h.length)){S.delete(t),k.delete(t);const s=t.ownerDocument.defaultView;s&&C(s).unobserve(t)}}(this.element,0,this.Xw)}Iu(t){if(2==t.button)return;t.preventDefault();const{clientX:s,clientY:i}=t;this.nb(this.LX),this.nb(this.HX),this.BX=s,this.$X=i,this.LX=ot(this.element,"mousemove",(t=>this.ku(t))),this.HX=ot(this.win,"mouseup",(t=>this.AY(t)))}ku(t){t.preventDefault();const{clientX:s,clientY:i}=t,h=s-this.BX,n=i-this.$X;this.MY(h,n,!1)}AY(t){t.preventDefault(),this.dY(),this.nb(this.LX),this.nb(this.HX)}PY(){this.YX&&(this.YX.cleanup(),this.YX=null)}fY(){this.YX||(this.YX=at.get(this.element),this.YX.onPointerDown((()=>{this.OX&&this.OX.halt()})),this.YX.onGesture(Et,(t=>this.handlePinch(t.data))),this.GX||(this.YX.onGesture(dt,(t=>this.handleDoubleTap(t.data))),this.YX.onGesture(Mt,(t=>this.pY(t.data)))))}handleDoubleTap(t){const{clientX:s,clientY:i}=t;return this.mY(s,i).then((()=>this.KX()))}handlePinch(t){const{centerClientX:s,centerClientY:i,deltaX:h,deltaY:n,dir:e,last:r}=t;return this.EY(s,i,h,n,e).then((()=>{if(r)return this.KX()}))}handleSwipe(t){const{deltaX:s,deltaY:i,last:h,velocityX:n,velocityY:e}=t;return this.MY(s,i,!1).then((()=>{if(h)return this.TY(n,e)}))}pY(t){const s=rt(this.win,"click",null,{bubbles:!0});t.target.dispatchEvent(s)}vY(){this.gX=this.YX.onGesture(mt,(t=>this.handleSwipe(t.data)))}gY(){this.gX&&(this.gX(),this.gX=null,this.YX.removeGesture(mt))}RY(t,s){const i=s?.25:0;return N(t,this.VX,this.bX,i)}FX(t,s){const i=.25*this.TX.width,h=s&&this.RX>1?i:0;return N(t,this.kX,this.DX,h)}qX(t,s){const i=.25*this.TX.height,h=s&&this.RX>1?i:0;return N(t,this.CX,this.XX,h)}WX(t){const{height:s,left:i,top:h,width:n}=this.vX,{height:e,width:r}=this.TX;this.kX=Math.min(0,r-(i+n*(t+1)/2)),this.DX=Math.max(0,(n*t-n)/2-i),this.CX=Math.min(0,e-(h+s*(t+1)/2)),this.XX=Math.max(0,(s*t-s)/2-h)}aY(){const{_N:t,zX:s,SX:i,RX:h}=this;return this.mutateElement((()=>{var n;I(t,{transform:w(s,i)+" "+(n=h,`scale(${n})`)})}),t)}IY(t,s,i){const h=rt(this.win,`${gt}.transformEnd`,{"scale":t,"x":s,"y":i});this.Da.trigger(this.element,"transformEnd",h,3),function(t,s,i,h){c(t.ownerDocument);const n=t.ownerDocument.createEvent("Event");n.data={};const{bubbles:e,cancelable:r}=M;n.initEvent("transformEnd",e,r),t.dispatchEvent(n)}(this.element)}MY(t,s,i){const h=this.FX(this.GV+t,!0),n=this.qX(this.WV+s,!0);return this.JX(this.RX,h,n,i)}TY(t,s){return this.OX=function(t,s,i,n,e,r,o){return new class{constructor(t,s,i,n,e,r,o){this.Xh=o||st(self),this.kt=t,this.$=r,this.qV=s,this.XV=i,this.VY=n,this.bY=e,this.pk=0,this.mk=0;const c=new h;this.eo=c.promise,this.Sn=c.resolve,this.no=c.reject,this.wY=!1}start(){return this.wY=!0,Math.abs(this.VY)<=ft&&Math.abs(this.bY)<=ft?(this.yY(),this.xY(!0)):this.zY(),this}halt(){this.wY&&this.xY(!1)}then(t,s){return t||s?this.eo.then(t,s):this.eo}thenAlways(t){const s=t||_t;return this.then(s,s)}zY(){this.pk=this.VY,this.mk=this.bY;const t=this.SY.bind(this),s=this.xY.bind(this,!0);return this.Xh.runAnimMutateSeries(this.kt,t,5e3).then(s,s)}SY(t,s){if(!this.wY)return!1;if(this.qV+=s*this.pk,this.XV+=s*this.mk,!this.yY())return!1;const i=Math.exp(-t/Pt);return this.pk=this.VY*i,this.mk=this.bY*i,Math.abs(this.pk)>ft||Math.abs(this.mk)>ft}xY(t){this.wY&&(this.wY=!1,this.yY(),t?this.Sn():this.no())}yY(){return this.$(this.qV,this.XV)}}(t,s,i,n,e,r,void 0).start()}(this._N,this.zX,this.SX,t,s,((t,s)=>{const i=this.FX(t,!0),h=this.qX(s,!0);return!(Math.abs(i-this.zX)<1&&Math.abs(h-this.SX)<1||(this.JX(this.RX,i,h,!1),0))})),this.OX.thenAlways((()=>(this.OX=null,this.dY())))}mY(t,s){const i=this.RX==this.VX?this.bX:this.VX,h=this.TX.width/2-this.lY(t),n=this.TX.height/2-this._Y(s);return this.kY(i,h,n,!0)}EY(t,s,h,n,e){if(0==e)return i();const{height:r,width:o}=this.TX,c=Z(h,n),u=this.IX*(1+e*c/100),a=o/2-this.lY(t),l=r/2-this._Y(s),_=Math.min(c/100,1)*a,f=Math.min(c/100,1)*l;return this.kY(u,_,f,!1)}kY(t,s,h,n){const e=this.RY(t,!0);if(e==this.RX)return i();this.WX(e);const r=this.FX(this.GV+s*e,!1),o=this.qX(this.WV+h*e,!1);return this.JX(e,r,o,n)}nY(){this.ZX&&(this.ZX.classList.add("amp-pan-zoom-in-icon"),this.ZX.classList.remove("amp-pan-zoom-out-icon"))}hY(){this.ZX&&(this.ZX.classList.remove("amp-pan-zoom-in-icon"),this.ZX.classList.add("amp-pan-zoom-out-icon"))}KX(){return this.dY().then((()=>{this.RX<=this.VX?(this.gY(),this.nY(),this._N.classList.remove("i-amphtml-pan-zoom-scrollable")):(this.vY(),this.hY(),this._N.classList.add("i-amphtml-pan-zoom-scrollable"))}))}JX(t,s,i,h){const n=t-this.RX,e=(r=this.zX,o=this.SX,Z(s-r,i-o));var r,o;const c=h?250*Math.min(1,Math.max(.01*e,Math.abs(n))):0;if(c>16&&h){const h=O(this.RX,t),n=O(this.zX,s),e=O(this.SX,i);return nt.animate(this._N,(t=>{this.RX=h(t),this.zX=n(t),this.SX=e(t),this.aY()}),c,vt).thenAlways((()=>{this.RX=t,this.zX=s,this.SX=i,this.aY()}))}return this.RX=t,this.zX=s,this.SX=i,this.aY()}dY(){const t=this.RY(this.RX,!1);t!=this.RX&&this.WX(t);const s=this.FX(this.zX/this.RX*t,!1),i=this.qX(this.SX/this.RX*t,!1);return this.JX(t,s,i,!0).then((()=>{this.IX=this.RX,this.GV=this.zX,this.WV=this.SX,this.IY(this.RX,this.zX,this.SX)}))}};t.registerElement(gt,It,'.i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')}.amp-pan-zoom-out-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-pan-zoom-0.1.mjs.map