;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-dailymotion",ev:"0.1",l:!0,f:function(t,i){(()=>{function i(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function n(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,e)}return n}var{isArray:e}=Array;function s(t){return e(t)?t:[t]}var o,{hasOwnProperty:r,toString:a}=Object.prototype;function h(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function l(t){return"number"==typeof t&&isFinite(t)}function u(t,i,n,e,s,o,r,a,h,l,u){return t}function c(){return o||(o=Promise.resolve(void 0))}var d,f=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function m(t){return new Promise((i=>{i(t())}))}function p(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function v(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=p(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function _(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function g(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=v.apply(null,arguments);setTimeout((()=>{throw _(i),i}))}(t)}}function P(t){const i=v.apply(null,arguments);return i.expected=!0,i}function y(t,...i){_(P.apply(null,i))}var A=["Webkit","webkit","Moz","moz","ms","O","o"],b={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function w(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;d||(d=h());let e=d[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<A.length;n++){const e=A[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(d[i]=e)}return e}(t.style,i,s);if(!o)return;const r=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return A.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),r)}function M(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,i){for(const n in i)w(t,n,i[n])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,m((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function E(t){return t.querySelector("video, iframe")}function R(t,i){const n=m((()=>t.play(!!i)));return n.catch((t=>{y(0,t)})),n}var I=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function T(t,i=""){try{return decodeURIComponent(t)}catch(t){return i}}function V(t){return(t.ownerDocument||t).defaultView}var k={bubbles:!0,cancelable:!0};function O(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function S(t,i,n,e){const s=n||{};u(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||k;o.initEvent(i,r,a),t.dispatchEvent(o)}function q(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var C=self.__AMP_LOG;function x(t){return C.user||(C.user=j()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(C.user.win,t)?C.userForEmbed||(C.userForEmbed=j()):C.user}function j(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function F(t,i,n,e,s,o,r,a,h,l,u){return t}function $(t,i,n,e,s,o,r,a,h,l,u){return x().assert(t,i,n,e,s,o,r,a,h,l,u)}function z(t,i){return D(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function L(t,i){return D(N(W(t)),i)}function Y(t,i){const n=N(W(t));return B(n,i)?D(n,i):null}function W(t){return t.nodeType?(i=V(t),z(i,"ampdoc")).getAmpDoc(t):t;var i}function N(t){const i=W(t);return i.isSingleDoc()?i.win:i}function D(t,i){F(B(t,i));const n=U(t)[i];return n.obj||(F(n.ctor),F(n.context),n.obj=new n.ctor(n.context),F(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function U(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function B(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var H=t=>Y(t,"action"),J=t=>z(t,"platform"),Z=t=>z(t,"preconnect"),G=t=>D(t,"timer"),K=t=>Y(t,"url"),Q=t=>L(t,"viewport");new Set(["c","v","a","ad"]);var X,tt,it,nt="unstarted",et="apiready",st="play",ot="pause",rt=/vertical/,at=new WeakMap,ht=new WeakMap,lt=new WeakMap;function ut(t){let i=at.get(t);return i||(i=new t.ResizeObserver(ct),at.set(t,i)),i}function ct(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const o=ht.get(s);if(o){lt.set(s,e);for(let t=0;t<o.length;t++){const{callback:i,type:n}=o[t];dt(n,i,e)}}}}function dt(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;g(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=V(t),s=rt.test(function(t,i){return t.getComputedStyle(i)||b}(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,h;s?(h=r,a=o):(a=r,h=o),e={inlineSize:a,blockSize:h}}g(i,e)}}function ft(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function mt(t){var i;let n=null===(i=X)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){X||(X=new WeakMap,tt=new WeakMap),u(tt);let i=tt.get(t);return i||(i=ft((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),u(i),i.unobserve(o),u(X),null===(e=X.get(o))||void 0===e||e.resolve(t[s]),X.delete(o))}}),t,{needsRootBounds:!0}),tt.set(t,i)),i}(V(t));u(X),i.observe(t),n=new f,X.set(t,n)}return n.promise}function pt(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==it)return it;it=!1;try{const t={get capture(){return it=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return it}(),h=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:h),()=>{null==s||s.removeEventListener(i,r,a?e:h),o=null,s=null,r=null}}function vt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function _t(t,i,n,e){return pt(t,i,n,e)}function gt(t){return t.data}new WeakMap,new WeakMap;var Pt,yt=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.Fn=null}add(t){return this.Fn||(this.Fn=[]),this.Fn.push(t),()=>{this.remove(t)}}remove(t){this.Fn&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.Fn,t)}removeAll(){this.Fn&&(this.Fn.length=0)}fire(t){if(this.Fn)for(const i of this.Fn.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.Fn)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}};function At(t){const i=t.ownerDocument||t;return Pt&&Pt.ownerDocument===i||(Pt=i.createElement("div")),bt}function bt(t){return function(t,i){if(u(1===i.length),u(Array.isArray(i)||(n=i,r.call(n,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return i[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=i[0];var n;const e=t.firstElementChild;return u(e),u(!e.nextElementSibling),t.removeChild(e),e}(Pt,t)}var wt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Mt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Et(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function Rt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var It={"title":"","artist":"","album":"","artwork":[{"src":""}]},Tt="registered",Vt="load",kt="playing",Ot="pause",St="ended",qt="muted",Ct="unmuted",xt="ad_start",jt="ad_end",Ft="playing_manual",$t="paused",zt="video-play",Lt="user-interacted";function Yt(t){t.signals().signal(Lt)}var Wt="video-manager",Nt=(t,i)=>!!t&&(t.video===i||t.video.element===i);function Dt(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function Ut(t){return 10*t*5}var Bt=t=>!!t&&!isNaN(t)&&t>1;function Ht(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),S(e.element,i,t)}))}function Jt(t){!function(t,i,n,s){const o=W(t),r=N(o);!function(t,i,n,e,s,o){const r=U(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&D(t,n))}(r,o,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=q((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=h());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=Et(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let l=null;return n?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),l=Et(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),l=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,a,l),r&&(s[r]=a),a}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(Rt(i,r))return n(r),r;const e=setInterval((()=>{Rt(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.w_=null,this.E_=null,this.T_=null,this.Qe=G(t.win),this.R_=H(t.getHeadNode()),this.I_=()=>this.V_(),this.q_=q((()=>new class{constructor(t,i){this.S_=i,this.ji=t,this.x_=null,this.C_=null,this.w_=[],this.O_=[],this.F_=()=>this.z_(),this.j_=t=>this.Y_(t)==Ft,this.L_=(t,i)=>this.W_(t,i),this.D_(),this.N_()}dispose(){this.O_.forEach((t=>t())),this.O_.length=0}register(t){const{video:i}=t,{element:n}=i;this.B_(n)&&(this.w_.push(i),_t(n,Ot,this.F_),_t(n,kt,this.F_),_t(n,St,this.F_),i.signals().whenSignal(Lt).then(this.F_),this.z_())}N_(){const t=this.ji.getRootNode(),i=()=>this.U_();this.O_.push(_t(t,"webkitfullscreenchange",i),_t(t,"mozfullscreenchange",i),_t(t,"fullscreenchange",i),_t(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.ji.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}B_(t){if("video"==E(t).tagName.toLowerCase())return!0;const i=J(this.ji.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}U_(){this.x_=null}D_(){const{win:t}=this.ji,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.O_.push(_t(t,"change",(()=>this.H_())))}this.O_.push(_t(t,"orientationchange",(()=>this.H_())))}H_(){this.isInLandscape()?null!=this.C_&&this.J_(this.C_):this.x_&&this.G_(this.x_)}J_(t){const i=J(this.ji.win);this.x_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.Z_(t).then((()=>t.fullscreenEnter()))}G_(t){this.x_=null,this.Z_(t,"center").then((()=>t.fullscreenExit()))}Z_(t,i=null){const{element:n}=t,e=this.K_();return this.Q_().then((()=>mt(n))).then((({boundingClientRect:t})=>{const{bottom:s,top:o}=t,r=e.getSize().height;if(o>=0&&s<=r)return c();const a=i||(s>r?"bottom":"top");return e.animateScrollIntoView(n,a)}))}K_(){return Q(this.ji)}Q_(){return G(this.ji.win).promise(330)}z_(){if(this.isInLandscape())return Promise.resolve(this.C_);this.C_=null;const t=this.w_.filter(this.j_).map((t=>mt(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.L_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.C_=t)):this.C_}))}W_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=Q(this.ji),h=Dt(a,n),l=Dt(a,s);return h<l||h>l?h-l:n.top-s.top}Y_(t){return this.S_.getPlayingState(t)}}(this.ampdoc,this))),this.Qe.delay(this.I_,1e3)}dispose(){if(this.q_().dispose(),this.E_.disconnect(),this.E_=null,this.w_)for(let t=0;t<this.w_.length;t++)this.w_[t].dispose()}V_(){for(let t=0;t<this.w_.length;t++){const i=this.w_[t];i.getPlayingState()!==$t&&(Ht(i,"video-seconds-played"),this.X_(i))}this.Qe.delay(this.I_,1e3)}X_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(l(n)&&l(e)&&e>0){const s=n/e,o=vt(this.ampdoc.win,`${Wt}.${i}`,{"time":n,"percent":s});this.R_.trigger(t.video.element,i,o,1)}}register(t){F(t);const i=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.E_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.nP(i).updateVisibility(t)}));this.E_=ft(t,this.ampdoc.win,{threshold:.5})}this.E_.observe(i.element),_t(i.element,"reloaded",(()=>n.videoLoaded())),this.w_=this.w_||[];const n=new class{constructor(t,i){this.S_=t,this.ji=t.ampdoc,this.video=i,this.eP=!0,this.sP=!1,this.gn=!1,this.oP=!1,this.ps=!1,this.rP=new yt,this.rP.onSessionEnd((()=>Ht(this,"video-session"))),this.aP=new yt,this.aP.onSessionEnd((()=>Ht(this,"video-session-visible"))),this.lP=q((()=>new class{constructor(t,i){this.Qe=G(t),this.hP=i,this.O_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.hP.video;this.stop(),this.O_=this.O_||[],this.dP()?this.fP(this.cP):this.O_.push(function(t,i,n,e){let s=n;const o=pt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.O_.push(_t(t,St,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.O_){for(;this.O_.length>0;)this.O_.pop()();this.cP++}}dP(){const{video:t}=this.hP,i=t.getDuration();if(!Bt(i))return!1;if(Ut(i)<250){const i=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}pP(...t){x().warn.apply(x(),[Wt].concat(t))}fP(t){if(t!=this.cP)return;const{hP:i,Qe:n}=this,{video:e}=i,s=()=>this.fP(t);if(i.getPlayingState()==$t)return void n.delay(s,500);const o=e.getDuration();if(!Bt(o))return void n.delay(s,500);const r=(c=Ut(o),u(!0),Math.min(Math.max(c,250),4e3)),a=e.getCurrentTime()/o*100,h=5*Math.floor(a/5);var c;F(l(h)),this.mP(h),n.delay(s,r)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){Ht(this.hP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.ji.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.yP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.S_.installAutoplayStyles(),this.gv=It,this.AP=()=>{R(this.video,!1)},this.bP=()=>{this.video.pause()},_t(i.element,Vt,(()=>this.videoLoaded())),_t(i.element,Ot,(()=>this.MP())),_t(i.element,"play",(()=>{this.yP=!0,Ht(this,zt)})),_t(i.element,kt,(()=>this.wP())),_t(i.element,qt,(()=>this.dt=!0)),_t(i.element,Ct,(()=>{this.dt=!1,this.S_.pauseOtherVideos(this)})),_t(i.element,"amp:video:tick",(t=>{const i=gt(t),n=i.eventType;n&&this.EP(n,i.vars)})),_t(i.element,St,(()=>{this.oP=!1,Ht(this,"video-ended")})),_t(i.element,xt,(()=>{this.oP=!0,Ht(this,"video-ad-start")})),_t(i.element,jt,(()=>{this.oP=!1,Ht(this,"video-ad-end")})),i.signals().whenSignal(Tt).then((()=>this.TP())),this.RP=q((()=>{const t="firstPlay",i=vt(this.ji.win,t,{}),{element:n}=this.video;H(n).trigger(n,t,i,1)})),this.IP()}dispose(){this.lP().stop()}EP(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Ht(this,"video-hosted-custom",n)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gn&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.VP()&&this.S_.registerForAutoFullscreen(this),this.hasAutoplay&&this.kP()}VP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&$(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gn=!0,this.getPlayingState()==Ft&&(this.RP(),this.S_.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=K(t);if(i&&i.artwork){const{artwork:t}=i;F(e(t)),t.forEach((t=>{if(t){const e=(i=t,"[object Object]"===a.call(i)?t.src:t);$(n.isProtocolValid(e))}var i}))}}(i,this.gv),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(It),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.ji.win,this.gv,this.AP,this.bP)),this.rP.beginSession(),this.ps&&this.aP.beginSession(),this.yP||Ht(this,zt)}MP(){Ht(this,"video-pause"),this.gn=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=E(this.video.element),this.qP(),this.lP().start(),this.ps&&this.SP()}qP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.gv=h(this.video.getMetadata()));const t=this.ji.win.document;if(!this.gv.artwork||0==this.gv.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=function(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.gv.artwork=[{"src":i}])}if(!this.gv.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;i&&(this.gv.title=i)}}xP(){this.sP&&this.SP()}SP(){this.ji.isVisible()&&M(this.ji.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.CP():this.OP()}))}kP(){this.video.isInteractive()&&this.video.hideControls(),M(this.ji.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.FP()):this.video.showControls()}))}FP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get(Lt))return;const e=function(t,i){const n=At(i)(Mt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return O(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[_t(i,Ot,(()=>r(!1))),_t(i,kt,(()=>r(!0))),_t(i,xt,(()=>{o(!1),t.showControls()})),_t(i,jt,(()=>{o(!0),t.hideControls()})),_t(i,Ct,(()=>Yt(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=At(t)(wt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.gv);s.push(n),a.push(_t(n,"click",(()=>Yt(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.oP&&o(!1),t.signals().whenSignal(Lt).then((()=>{this.RP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{O(t)}))}))}))}CP(){this.eP&&(this.ps?(this.aP.beginSession(),R(this.video,!0),this._P=!0):(this.gn&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.ps?this.aP.beginSession():this.gn&&this.aP.endSession()}updateVisibility(t){const i=this.ps;this.ps=t,t!=i&&this.xP()}getPlayingState(){return this.gn?this.gn&&this._P&&!this.userInteracted()?"playing_auto":Ft:$t}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get(Lt)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([M(this.ji.win),mt(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),h=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":h,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.w_.push(n);const{element:s}=n.video;S(s,Tt),function(t){t.classList.add("i-amphtml-media-component")}(s),t.signals().signal(Tt),s.classList.add("i-amphtml-video-interface")}tP(t){n("play",(()=>R(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{Yt(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}iP(t){if(Nt(this.T_,t))return this.T_;for(let i=0;this.w_&&i<this.w_.length;i++){const n=this.w_[i];if(Nt(n,t))return this.T_=n,n}return null}nP(t){return F(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}$P(){return this.q_()}getVideoStateProperty(t,i){const n=this.ampdoc.getRootNode(),e=x().assertElement(n.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),s=this.nP(e);return(s?s.getAnalyticsDetails():c()).then((t=>t?t[i]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.w_.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==Ft&&i.video.pause()}))}})}(t,"video-manager")}var Zt=["<iframe frameborder=0 allowfullscreen></iframe>"],Gt="amp-dailymotion",Kt=class extends t.BaseElement{constructor(t){super(t),this.py=nt,this.cw=null,this.Lv=null,this.dt=!1,this.bb=null,this.yb=null,this.vy=null,this._y=null,this.gy=!1,this.bn=new class{constructor(t){this._n=t,this.gn=!1,this.Pn=!1,this.An=this.An.bind(this)}updatePlaying(t){t!==this.gn&&(this.gn=t,t?(this.Pn=!1,function(t,i){!function(t,i,n){const e=t.ownerDocument.defaultView;if(!e)return;let s=ht.get(t);if(s||(s=[],ht.set(t,s),ut(e).observe(t)),!s.some((t=>t.callback===n&&1===t.type))){s.push({type:1,callback:n});const i=lt.get(t);i&&setTimeout((()=>dt(1,n,i)))}}(t,0,i)}(this._n,this.An)):function(t,i){!function(t,i,n){const e=ht.get(t);if(e&&(function(t,i){const e=[];let s=0;for(let i=0;i<t.length;i++){const r=t[i];(o=r).callback===n&&1===o.type?e.push(r):(s<i&&(t[s]=r),s++)}var o;s<t.length&&(t.length=s)}(e),0==e.length)){ht.delete(t),lt.delete(t);const i=t.ownerDocument.defaultView;i&&ut(i).unobserve(t)}}(t,0,i)}(this._n,this.An))}An({blockSize:t,inlineSize:i}){const n=i>0&&t>0;if(n===this.Pn)return;this.Pn=n;const e=this._n;n||e.pause()}}(this.element)}preconnectCallback(t){Z(this.win).url(this.getAmpDoc(),"https://www.dailymotion.com",t),Z(this.win).url(this.getAmpDoc(),"https://static1.dmcdn.net",t)}supportsPlatform(){return!0}isInteractive(){return!0}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){var t;this.cw=$(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-dailymotion> %s",this.element),Jt(this.element),(t=this.element,L(t,"video-manager")).register(this);const i=new f;this.bb=i.promise,this.yb=i.resolve;const n=new f;this.vy=n.promise,this._y=n.resolve}layoutCallback(){return F(this.cw),this.Lv=function(t,i,n,e){const{element:o}=t,r=At(o)(Zt);return function(t,i,n,e){const o=s(["referrerpolicy"]);for(const t of o){const e=i.getAttribute(t);null!==e&&n.setAttribute(t,e)}}(0,t.element,r),r.src=K(o).assertHttpsUrl(i,o),function(t,i){t.classList.add("i-amphtml-fill-content")}(r),o.appendChild(r),r}(this,this.Py()),_t(this.win,"message",this.yy.bind(this)),this.loadPromise(this.Lv)}unlayoutCallback(){const t=this.Lv;return t&&(this.element.removeChild(t),this.Lv=null),this.bn.updatePlaying(!1),!0}yy(t){if(!function(t,i,n){return!(!i||t.source!=i.contentWindow)&&"https://www.dailymotion.com"==t.origin}(t,this.Lv))return;const i=gt(t);if(!i||!t.type||"message"!=t.type)return;const n=function(t){const i=h();if(!t)return i;let n;for(;n=I.exec(t);){const t=T(n[1],n[1]),e=n[2]?T(n[2].replace(/\+/g," "),n[2]):"";i[t]=e}return i}(i);if(void 0!==n)switch(function(t,i,n){if(null==n[i])return!1;const s=n[i];(e(s)?s:[s]).forEach((i=>{S(t,i)}))}(this.element,n.event,{[et]:Vt,end:[St,Ot],[ot]:Ot,[st]:kt}),n.event){case et:this.yb(!0);break;case st:this.py=n.event,this.bn.updatePlaying(!0);break;case ot:this.py=n.event,this.bn.updatePlaying(!1);break;case"end":this.py=ot,this.bn.updatePlaying(!1);break;case"volumechange":const t=0==n.volume||"true"==n.muted;this.py!=nt&&this.dt==t||(this.dt=t,S(this.element,function(t){return t?qt:Ct}(t)));break;case"progress":this._y(!0);break;case"fullscreenchange":this.gy="true"==n.fullscreen}}wb(t,i){this.bb.then((()=>{this.Lv&&this.Lv.contentWindow&&this.Lv.contentWindow.postMessage(function(t,i){return JSON.stringify({"command":t,"parameters":i})}(t,i),"https://www.dailymotion.com")}))}Py(){const{"endscreenEnable":t,"info":e,"mute":o,"sharingEnable":r,"start":a,"uiHighlight":h,"uiLogo":l}=this.element.dataset;return function(t,e,o=!1,r=!0,a=!0,h=!1,l=!0,u,c,d=!0,f){return m=`https://www.dailymotion.com/embed/video/${encodeURIComponent(e)}?api=1&html=1&app=amp`,p=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(n){i(t,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))}))}return t}({"endscreen-enable":r?void 0:r,"info":a?void 0:a,"mute":h||o&&M(t)?1:void 0,"sharing-enable":l?void 0:l,"start":u,"ui-highlight":c,"ui-logo":d?void 0:d},f),function(t,i,n){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${i}`:`?${i}`);return o+=e[1]?`#${e[1]}`:"",o}(m,function(t){const i=[];for(const o in t){let r=t[o];if(null!=r){r=s(r);for(let t=0;t<r.length;t++)i.push((n=o,e=r[t],`${encodeURIComponent(n)}=${encodeURIComponent(e)}`))}}var n,e;return i.join("&")}(p));var m,p}(this.win,this.cw,this.element.hasAttribute("autoplay"),"false"!==t,"false"!==e,"true"===o,"false"!==r,a,h,"false"!==l,function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(this.element))}pauseCallback(){this.pause()}play(t){this.wb("play"),t&&this.py!=ot&&this.vy.then((()=>{this.wb("play")}))}pause(){this.wb("pause")}mute(){this.wb("muted",[!0]),this.bb.then((()=>{S(this.element,qt),this.dt=!0}))}unmute(){this.wb("muted",[!1]),this.bb.then((()=>{S(this.element,Ct),this.dt=!1}))}showControls(){this.wb("controls",[!0])}hideControls(){this.wb("controls",[!1])}fullscreenEnter(){const t=J(this.win);if(t.isSafari()||t.isIos())this.wb("fullscreen",[!0]);else{if(!this.Lv)return;!function(t){const i=t.requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen;i&&i.call(t)}(this.Lv)}}fullscreenExit(){const t=J(this.win);if(t.isSafari()||t.isIos())this.wb("fullscreen",[!1]);else{if(!this.Lv)return;!function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.Lv)}}isFullscreen(){const t=J(this.win);return t.isSafari()||t.isIos()?this.gy:!!this.Lv&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.Lv)}getMetadata(){}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return 0}getDuration(){return 1}getPlayedRanges(){return[]}seekTo(t){this.user().error(Gt,"`seekTo` not supported.")}};t.registerElement(Gt,Kt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-dailymotion-0.1.mjs.map