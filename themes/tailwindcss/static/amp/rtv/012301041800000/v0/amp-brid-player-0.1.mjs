;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-brid-player",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function n(){return i||(i=Promise.resolve(void 0))}var e=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function s(t){return new Promise((i=>{i(t())}))}var{isArray:r}=Array,{hasOwnProperty:o,toString:a}=Object.prototype;function l(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function h(t){return"number"==typeof t&&isFinite(t)}function u(t,i,n,e,s,r,o,a,l,h,u){return t}function c(t){return(t.ownerDocument||t).defaultView}var d,f,p={bubbles:!0,cancelable:!0};function m(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function v(t,i,n,e){const s=n||{};u(t.ownerDocument);const r=t.ownerDocument.createEvent("Event");r.data=s;const{bubbles:o,cancelable:a}=e||p;r.initEvent(i,o,a),t.dispatchEvent(r)}function _(t,i){t.classList.add("i-amphtml-fill-content"),i&&t.classList.add("i-amphtml-replaced-content")}function g(t,i,n,e){const s=r(o=t)?o:[o];var o;for(const t of s){const s=i.getAttribute(t);null!==s?n.setAttribute(t,s):e&&n.removeAttribute(t)}}function P(t){const i=t.ownerDocument||t;return d&&d.ownerDocument===i||(d=i.createElement("div")),y}function y(t){return function(t,i){if(u(1===i.length),u(Array.isArray(i)||(n=i,o.call(n,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return i[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=i[0];var n;const e=t.firstElementChild;return u(e),u(!e.nextElementSibling),t.removeChild(e),e}(d,t)}function A(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function b(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=A(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function M(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function R(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=b.apply(null,arguments);setTimeout((()=>{throw M(i),i}))}(t)}}function w(t){const i=b.apply(null,arguments);return i.expected=!0,i}function I(t,...i){M(w.apply(null,i))}var E=["Webkit","webkit","Moz","moz","ms","O","o"],T={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function V(t,i,n,e,s){const r=function(t,i,n){if(i.startsWith("--"))return i;f||(f=l());let e=f[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<E.length;n++){const e=E[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(f[i]=e)}return e}(t.style,i,s);if(!r)return;const o=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return E.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(r),o)}var k=/vertical/,S=new WeakMap,C=new WeakMap,q=new WeakMap;function x(t){let i=S.get(t);return i||(i=new t.ResizeObserver(F),S.set(t,i)),i}function F(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const r=C.get(s);if(r){q.set(s,e);for(let t=0;t<r.length;t++){const{callback:i,type:n}=r[t];O(n,i,e)}}}}function O(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;R(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=c(t),s=k.test(function(t,i){return t.getComputedStyle(i)||T}(i,t).writingMode),{offsetHeight:r,offsetWidth:o}=t;let a,l;s?(l=o,a=r):(a=o,l=r),e={inlineSize:a,blockSize:l}}R(i,e)}}function j(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function L(t){return z.user||(z.user=D()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(z.user.win,t)?z.userForEmbed||(z.userForEmbed=D()):z.user}function D(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function U(t,i,n,e,s,r,o,a,l,h,u){return t}function $(t,i,n,e,s,r,o,a,l,h,u){return L().assert(t,i,n,e,s,r,o,a,l,h,u)}function Y(t,i){return G(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function W(t,i){return G(H(J(t)),i)}function N(t,i){const n=H(J(t));return Q(n,i)?G(n,i):null}function B(t,i){return Z(H(t),i)}function J(t){return t.nodeType?(i=c(t),Y(i,"ampdoc")).getAmpDoc(t):t;var i}function H(t){const i=J(t);return i.isSingleDoc()?i.win:i}function G(t,i){U(Q(t,i));const n=K(t)[i];return n.obj||(U(n.ctor),U(n.context),n.obj=new n.ctor(n.context),U(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function Z(t,i){const n=K(t)[i];return n?n.promise?n.promise:(G(t,i),n.promise=Promise.resolve(n.obj)):null}function K(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function Q(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var X,tt,it,nt=t=>N(t,"action"),et=t=>Y(t,"platform"),st=t=>Y(t,"preconnect"),rt=t=>G(t,"timer"),ot=t=>function(t,i,n,s){const r=B(t,i);if(r)return r;const o=J(t);return o.whenExtensionsKnown().then((()=>{const t=o.getExtensionVersion(n);return t?Y(o.win,"extensions").waitForExtension(n,t):null})).then((n=>n?function(t,i){return function(t,i){const n=Z(t,i);if(n)return n;const s=K(t);return s[i]=function(){const t=new e,{promise:i,reject:n,resolve:s}=t;return i.catch((()=>{})),{obj:null,promise:i,resolve:s,reject:n,context:null,ctor:null}}(),s[i].promise}(H(t),i)}(t,i):null))}(t,"consentPolicyManager","amp-consent"),at=t=>N(t,"url"),lt=t=>W(t,"viewport");function ht(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:r}=n,o=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:r,root:o,rootMargin:s})}function ut(t){var i;let n=null===(i=X)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){X||(X=new WeakMap,tt=new WeakMap),u(tt);let i=tt.get(t);return i||(i=ht((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:r}=t[s];n.has(r)||(n.add(r),u(i),i.unobserve(r),u(X),null===(e=X.get(r))||void 0===e||e.resolve(t[s]),X.delete(r))}}),t,{needsRootBounds:!0}),tt.set(t,i)),i}(c(t));u(X),i.observe(t),n=new e,X.set(t,n)}return n.promise}function ct(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,i){for(const n in i)V(t,n,i[n])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,s((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function dt(t){return t.querySelector("video, iframe")}function ft(t,i){const n=s((()=>t.play(!!i)));return n.catch((t=>{I(0,t)})),n}function pt(t,i,n,e){let s=t,r=n,o=t=>{try{return r(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==it)return it;it=!1;try{const t={get capture(){return it=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return it}(),l=!(null==e||!e.capture);return s.addEventListener(i,o,a?e:l),()=>{null==s||s.removeEventListener(i,o,a?e:l),r=null,s=null,o=null}}function mt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function vt(t,i,n,e){return pt(t,i,n,e)}function _t(t){return t.data}new WeakMap,new WeakMap;var gt=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.Fn=null}add(t){return this.Fn||(this.Fn=[]),this.Fn.push(t),()=>{this.remove(t)}}remove(t){this.Fn&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.Fn,t)}removeAll(){this.Fn&&(this.Fn.length=0)}fire(t){if(this.Fn)for(const i of this.Fn.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.Fn)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}},Pt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],yt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function At(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function bt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var Mt={"title":"","artist":"","album":"","artwork":[{"src":""}]},Rt="registered",wt="load",It="playing",Et="pause",Tt="ended",Vt="muted",kt="unmuted",St="ad_start",Ct="ad_end",qt="playing_manual",xt="paused",Ft="video-play",Ot="user-interacted";function jt(t){t.signals().signal(Ot)}var zt="video-manager",Lt=(t,i)=>!!t&&(t.video===i||t.video.element===i);function Dt(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function Ut(t){return 10*t*5}var $t=t=>!!t&&!isNaN(t)&&t>1;function Yt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),v(e.element,i,t)}))}function Wt(t){!function(t,i,e,s){const o=J(t),c=H(o);!function(t,i,n,e,s,r){const o=K(t);let a=o[n];a||(a=o[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&G(t,n))}(c,o,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=j((()=>function(t){!function(t,i,n,e,s){const r=t.getHeadNode(),o=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=l());const r=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,o=n?"amp-runtime":r?`amp-extension=${e}`:null;if(o){const n=At(t,s,o);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let h=null;return n?a.setAttribute("amp-runtime",""):r?(a.setAttribute("amp-extension",e||""),h=At(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),h=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,a,h),o&&(s[o]=a),a}(r,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(r,i),e||!1,s||null);if(n){const i=t.getRootNode();if(bt(i,o))return n(o),o;const e=setInterval((()=>{bt(i,o)&&(clearInterval(e),n(o))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.w_=null,this.E_=null,this.T_=null,this.Qe=rt(t.win),this.R_=nt(t.getHeadNode()),this.I_=()=>this.V_(),this.q_=j((()=>new class{constructor(t,i){this.S_=i,this.ji=t,this.x_=null,this.C_=null,this.w_=[],this.O_=[],this.F_=()=>this.z_(),this.j_=t=>this.Y_(t)==qt,this.L_=(t,i)=>this.W_(t,i),this.D_(),this.N_()}dispose(){this.O_.forEach((t=>t())),this.O_.length=0}register(t){const{video:i}=t,{element:n}=i;this.B_(n)&&(this.w_.push(i),vt(n,Et,this.F_),vt(n,It,this.F_),vt(n,Tt,this.F_),i.signals().whenSignal(Ot).then(this.F_),this.z_())}N_(){const t=this.ji.getRootNode(),i=()=>this.U_();this.O_.push(vt(t,"webkitfullscreenchange",i),vt(t,"mozfullscreenchange",i),vt(t,"fullscreenchange",i),vt(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.ji.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}B_(t){if("video"==dt(t).tagName.toLowerCase())return!0;const i=et(this.ji.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}U_(){this.x_=null}D_(){const{win:t}=this.ji,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.O_.push(vt(t,"change",(()=>this.H_())))}this.O_.push(vt(t,"orientationchange",(()=>this.H_())))}H_(){this.isInLandscape()?null!=this.C_&&this.J_(this.C_):this.x_&&this.G_(this.x_)}J_(t){const i=et(this.ji.win);this.x_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.Z_(t).then((()=>t.fullscreenEnter()))}G_(t){this.x_=null,this.Z_(t,"center").then((()=>t.fullscreenExit()))}Z_(t,i=null){const{element:e}=t,s=this.K_();return this.Q_().then((()=>ut(e))).then((({boundingClientRect:t})=>{const{bottom:r,top:o}=t,a=s.getSize().height;if(o>=0&&r<=a)return n();const l=i||(r>a?"bottom":"top");return s.animateScrollIntoView(e,l)}))}K_(){return lt(this.ji)}Q_(){return rt(this.ji.win).promise(330)}z_(){if(this.isInLandscape())return Promise.resolve(this.C_);this.C_=null;const t=this.w_.filter(this.j_).map((t=>ut(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.L_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.C_=t)):this.C_}))}W_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:r}=i,o=e-r;if(Math.abs(o)>.1)return o;const a=lt(this.ji),l=Dt(a,n),h=Dt(a,s);return l<h||l>h?l-h:n.top-s.top}Y_(t){return this.S_.getPlayingState(t)}}(this.ampdoc,this))),this.Qe.delay(this.I_,1e3)}dispose(){if(this.q_().dispose(),this.E_.disconnect(),this.E_=null,this.w_)for(let t=0;t<this.w_.length;t++)this.w_[t].dispose()}V_(){for(let t=0;t<this.w_.length;t++){const i=this.w_[t];i.getPlayingState()!==xt&&(Yt(i,"video-seconds-played"),this.X_(i))}this.Qe.delay(this.I_,1e3)}X_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(h(n)&&h(e)&&e>0){const s=n/e,r=mt(this.ampdoc.win,`${zt}.${i}`,{"time":n,"percent":s});this.R_.trigger(t.video.element,i,r,1)}}register(t){U(t);const i=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.E_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.nP(i).updateVisibility(t)}));this.E_=ht(t,this.ampdoc.win,{threshold:.5})}this.E_.observe(i.element),vt(i.element,"reloaded",(()=>n.videoLoaded())),this.w_=this.w_||[];const n=new class{constructor(t,i){this.S_=t,this.ji=t.ampdoc,this.video=i,this.eP=!0,this.sP=!1,this.gn=!1,this.oP=!1,this.ps=!1,this.rP=new gt,this.rP.onSessionEnd((()=>Yt(this,"video-session"))),this.aP=new gt,this.aP.onSessionEnd((()=>Yt(this,"video-session-visible"))),this.lP=j((()=>new class{constructor(t,i){this.Qe=rt(t),this.hP=i,this.O_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.hP.video;this.stop(),this.O_=this.O_||[],this.dP()?this.fP(this.cP):this.O_.push(function(t,i,n,e){let s=n;const r=pt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,r()}}),void 0);return r}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.O_.push(vt(t,Tt,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.O_){for(;this.O_.length>0;)this.O_.pop()();this.cP++}}dP(){const{video:t}=this.hP,i=t.getDuration();if(!$t(i))return!1;if(Ut(i)<250){const i=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}pP(...t){L().warn.apply(L(),[zt].concat(t))}fP(t){if(t!=this.cP)return;const{hP:i,Qe:n}=this,{video:e}=i,s=()=>this.fP(t);if(i.getPlayingState()==xt)return void n.delay(s,500);const r=e.getDuration();if(!$t(r))return void n.delay(s,500);const o=(c=Ut(r),u(!0),Math.min(Math.max(c,250),4e3)),a=e.getCurrentTime()/r*100,l=5*Math.floor(a/5);var c;U(h(l)),this.mP(l),n.delay(s,o)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){Yt(this.hP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.ji.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.yP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.S_.installAutoplayStyles(),this.gv=Mt,this.AP=()=>{ft(this.video,!1)},this.bP=()=>{this.video.pause()},vt(i.element,wt,(()=>this.videoLoaded())),vt(i.element,Et,(()=>this.MP())),vt(i.element,"play",(()=>{this.yP=!0,Yt(this,Ft)})),vt(i.element,It,(()=>this.wP())),vt(i.element,Vt,(()=>this.dt=!0)),vt(i.element,kt,(()=>{this.dt=!1,this.S_.pauseOtherVideos(this)})),vt(i.element,"amp:video:tick",(t=>{const i=_t(t),n=i.eventType;n&&this.EP(n,i.vars)})),vt(i.element,Tt,(()=>{this.oP=!1,Yt(this,"video-ended")})),vt(i.element,St,(()=>{this.oP=!0,Yt(this,"video-ad-start")})),vt(i.element,Ct,(()=>{this.oP=!1,Yt(this,"video-ad-end")})),i.signals().whenSignal(Rt).then((()=>this.TP())),this.RP=j((()=>{const t="firstPlay",i=mt(this.ji.win,t,{}),{element:n}=this.video;nt(n).trigger(n,t,i,1)})),this.IP()}dispose(){this.lP().stop()}EP(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Yt(this,"video-hosted-custom",n)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gn&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.VP()&&this.S_.registerForAutoFullscreen(this),this.hasAutoplay&&this.kP()}VP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&$(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gn=!0,this.getPlayingState()==qt&&(this.RP(),this.S_.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=at(t);if(i&&i.artwork){const{artwork:t}=i;U(r(t)),t.forEach((t=>{if(t){const e=(i=t,"[object Object]"===a.call(i)?t.src:t);$(n.isProtocolValid(e))}var i}))}}(i,this.gv),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(Mt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.ji.win,this.gv,this.AP,this.bP)),this.rP.beginSession(),this.ps&&this.aP.beginSession(),this.yP||Yt(this,Ft)}MP(){Yt(this,"video-pause"),this.gn=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=dt(this.video.element),this.qP(),this.lP().start(),this.ps&&this.SP()}qP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.gv=l(this.video.getMetadata()));const t=this.ji.win.document;if(!this.gv.artwork||0==this.gv.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=function(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.gv.artwork=[{"src":i}])}if(!this.gv.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;i&&(this.gv.title=i)}}xP(){this.sP&&this.SP()}SP(){this.ji.isVisible()&&ct(this.ji.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.CP():this.OP()}))}kP(){this.video.isInteractive()&&this.video.hideControls(),ct(this.ji.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.FP()):this.video.showControls()}))}FP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get(Ot))return;const e=function(t,i){const n=P(i)(yt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return m(e),n}(0,i),s=[e];function r(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function o(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[vt(i,Et,(()=>o(!1))),vt(i,It,(()=>o(!0))),vt(i,St,(()=>{r(!1),t.showControls()})),vt(i,Ct,(()=>{r(!0),t.hideControls()})),vt(i,kt,(()=>jt(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=P(t)(Pt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.gv);s.push(n),a.push(vt(n,"click",(()=>jt(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.oP&&r(!1),t.signals().whenSignal(Ot).then((()=>{this.RP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{m(t)}))}))}))}CP(){this.eP&&(this.ps?(this.aP.beginSession(),ft(this.video,!0),this._P=!0):(this.gn&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.ps?this.aP.beginSession():this.gn&&this.aP.endSession()}updateVisibility(t){const i=this.ps;this.ps=t,t!=i&&this.xP()}getPlayingState(){return this.gn?this.gn&&this._P&&!this.userInteracted()?"playing_auto":qt:xt}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get(Ot)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([ct(this.ji.win),ut(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:r}=e.boundingClientRect,o=this.hasAutoplay&&n,a=t.getPlayedRanges(),l=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":o,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":r}}))}}(this,t);this.w_.push(n);const{element:e}=n.video;v(e,Rt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(Rt),e.classList.add("i-amphtml-video-interface")}tP(t){n("play",(()=>ft(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{jt(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}iP(t){if(Lt(this.T_,t))return this.T_;for(let i=0;this.w_&&i<this.w_.length;i++){const n=this.w_[i];if(Lt(n,t))return this.T_=n,n}return null}nP(t){return U(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}$P(){return this.q_()}getVideoStateProperty(t,i){const e=this.ampdoc.getRootNode(),s=L().assertElement(e.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),r=this.nP(s);return(r?r.getAnalyticsDetails():n()).then((t=>t?t[i]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.w_.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==qt&&i.video.pause()}))}})}(t,"video-manager")}var Nt,Bt=["<iframe frameborder=0 allowfullscreen></iframe>"];new Set(["c","v","a","ad"]);var Jt=["<img placeholder referrerpolicy=origin loading=lazy>"],Ht="amp-brid-player",Gt=class extends t.BaseElement{constructor(t){super(t),this.Ay="",this.by="",this.My="",this.ZP=0,this.so=0,this.Lv=null,this.bb=null,this.yb=null,this.fw=null,this.Ry=null,this.dw=null,this.bn=new class{constructor(t){this._n=t,this.gn=!1,this.Pn=!1,this.An=this.An.bind(this)}updatePlaying(t){t!==this.gn&&(this.gn=t,t?(this.Pn=!1,function(t,i){!function(t,i,n){const e=t.ownerDocument.defaultView;if(!e)return;let s=C.get(t);if(s||(s=[],C.set(t,s),x(e).observe(t)),!s.some((t=>t.callback===n&&1===t.type))){s.push({type:1,callback:n});const i=q.get(t);i&&setTimeout((()=>O(1,n,i)))}}(t,0,i)}(this._n,this.An)):function(t,i){!function(t,i,n){const e=C.get(t);if(e&&(function(t,i){const e=[];let s=0;for(let i=0;i<t.length;i++){const o=t[i];(r=o).callback===n&&1===r.type?e.push(o):(s<i&&(t[s]=o),s++)}var r;s<t.length&&(t.length=s)}(e),0==e.length)){C.delete(t),q.delete(t);const i=t.ownerDocument.defaultView;i&&x(i).unobserve(t)}}(t,0,i)}(this._n,this.An))}An({blockSize:t,inlineSize:i}){const n=i>0&&t>0;if(n===this.Pn)return;this.Pn=n;const e=this._n;n||e.pause()}}(this.element)}preconnectCallback(t){st(this.win).url(this.getAmpDoc(),"https://services.brid.tv",t),st(this.win).url(this.getAmpDoc(),"https://cdn.brid.tv",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}hw(){if(this.fw)return this.fw;let t="";const i=this.element.hasAttribute("data-dynamic")?"10":"1";this.element.hasAttribute("data-video")?t="video":this.element.hasAttribute("data-dynamic")?t=this.element.getAttribute("data-dynamic"):this.element.hasAttribute("data-playlist")?t="playlist":this.element.hasAttribute("data-carousel")?t="carousel":this.element.hasAttribute("data-outstream")&&(t="outstream");const n="https://services.brid.tv/services/iframe/"+encodeURIComponent(t)+"/"+encodeURIComponent(this.by)+"/"+encodeURIComponent(this.Ay)+"/"+encodeURIComponent(this.My)+"/0/"+i+"/?amp=1";var e,s;return this.fw=($(/^https?\:/i.test(e=n),'URL must start with "http://" or "https://". Invalid value: %s',e),(s=e,Nt||(Nt=self.document.createElement("a")),function(t,i,n){return t.href="",new URL(i,t.href)}(Nt,s)).href),this.fw}buildCallback(){const{element:t}=this;this.Ay=$(t.getAttribute("data-partner"),"The data-partner attribute is required for <amp-brid-player> %s",t),this.My=$(t.getAttribute("data-player"),"The data-player attribute is required for <amp-brid-player> %s",t),this.by=$(t.getAttribute("data-video")||t.getAttribute("data-playlist")||t.getAttribute("data-carousel")||t.getAttribute("data-outstream"),"Either the data-video, data-playlist, data-carousel or data-outstream attributes must be specified for <amp-brid-player> %s",t);const i=new e;var n;this.bb=i.promise,this.yb=i.resolve,Wt(t),(n=t,W(n,"video-manager")).register(this)}layoutCallback(){const t=function(t,i,n,e){const{element:s}=t,r=P(s)(Bt);return g(["referrerpolicy"],t.element,r),r.src=at(s).assertHttpsUrl(i,s),_(r),s.appendChild(r),r}(this,this.hw());return this.Lv=t,this.dw=vt(this.win,"message",this.wy.bind(this)),this.loadPromise(t).then((()=>this.bb))}unlayoutCallback(){this.Lv&&(m(this.Lv),this.Lv=null),this.dw&&this.dw();const t=new e;return this.bb=t.promise,this.yb=t.resolve,this.bn.updatePlaying(!1),!0}pauseCallback(){this.pause()}createPlaceholderCallback(){const{element:t}=this;if(!t.hasAttribute("data-video")&&!t.hasAttribute("data-playlist"))return;const{by:i,Ay:n}=this,e=P(t)(Jt);g(["aria-label"],this.element,e),_(e);const s=e.hasAttribute("aria-label")?"Loading video - "+e.getAttribute("aria-label"):"Loading video";return e.setAttribute("alt",s),e.setAttribute("src",`https://cdn.brid.tv/live/partners/${encodeURIComponent(n)}/snapshot/${encodeURIComponent(i)}.jpg`),this.loadPromise(e).catch((()=>{e.src="https://cdn.brid.tv/live/default/defaultSnapshot.png"})),e}wb(t,i){this.bb.then((()=>{if(this.Lv&&this.Lv.contentWindow){const n="Brid|"+t+(void 0===i?"":"|"+i);this.Lv.contentWindow.postMessage(n,"*")}}))}hy(){const t=this.getConsentPolicy()||"default",i=function(t,i="default"){return ot(t).then((t=>t?t.whenPolicyResolved(i):null))}(this.element,t),n=function(t,i="default"){return ot(t).then((t=>t?t.getConsentStringInfo(i):null))}(this.element,t);return Promise.all([i,n]).then((t=>{let i;switch(t[0]){case 1:i={"gdprApplies":!0,"userConsent":1,"gdprString":t[1]};break;case 2:case 4:i={"gdprApplies":!0,"userConsent":0,"gdprString":t[1]};break;default:i={"gdprApplies":!1}}this.wb("setAMPGDPR",JSON.stringify(i))}))}wy(t){if(!function(t,i,n){return!(!i||t.source!=i.contentWindow)&&"https://services.brid.tv"==t.origin}(t,this.Lv))return;const i=_t(t);if("string"!=typeof i||0!==i.indexOf("Brid"))return;const{element:n}=this,e=i.split("|");if("trigger"==e[2]){switch(e[3]){case"ready":this.yb(this.Lv);break;case"requestAMPGDPR":this.hy();break;case"play":this.bn.updatePlaying(!0);break;case"pause":case"ended":this.bn.updatePlaying(!1)}!function(t,i,n){if(null==n[i])return!1;const e=n[i];(r(e)?e:[e]).forEach((i=>{v(t,i)}))}(n,e[3],{"ready":wt,"play":It,"pause":Et,"ended":Tt,"adStart":St,"adEnd":Ct,"loadedmetadata":"loadedmetadata"})}"volume"==e[2]&&(this.Ry=parseFloat(e[3]),v(n,this.Ry<=0?Vt:kt)),"currentTime"==e[2]&&(this.ZP=parseFloat(e[3])),"duration"==e[2]&&(this.so=parseFloat(e[3]))}supportsPlatform(){return!0}isInteractive(){return!0}play(t){this.wb("play",t?"auto":"")}pause(){this.wb("pause")}mute(){this.wb("muted",1),this.wb("volume",0)}unmute(){this.wb("muted",0),this.wb("volume",1)}showControls(){}hideControls(){}fullscreenEnter(){this.Lv&&function(t){const i=t.requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen;i&&i.call(t)}(this.Lv)}fullscreenExit(){this.Lv&&function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.Lv)}isFullscreen(){return!!this.Lv&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.Lv)}getMetadata(){}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return this.ZP}getDuration(){return this.so}getPlayedRanges(){return[]}seekTo(t){this.user().error(Ht,"`seekTo` not supported.")}};t.registerElement(Ht,Gt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-brid-player-0.1.mjs.map