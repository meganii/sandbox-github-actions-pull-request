;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-ooyala-player",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function n(){return i||(i=Promise.resolve(void 0))}var e=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function s(t){return new Promise((i=>{i(t())}))}var{isArray:o}=Array,{hasOwnProperty:r,toString:a}=Object.prototype;function l(t){return"[object Object]"===a.call(t)}function h(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function u(t){return"number"==typeof t&&isFinite(t)}function c(t,i,n,e,s,o,r,a,l,h,u){return t}function d(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}function f(t){return(t.ownerDocument||t).defaultView}var m,p={bubbles:!0,cancelable:!0};function v(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function _(t,i,n,e){const s=n||{};c(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||p;o.initEvent(i,r,a),t.dispatchEvent(o)}function g(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function y(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=g(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function P(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function A(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=y.apply(null,arguments);setTimeout((()=>{throw P(i),i}))}(t)}}function b(t){const i=y.apply(null,arguments);return i.expected=!0,i}function M(t,...i){P(b.apply(null,i))}var w=["Webkit","webkit","Moz","moz","ms","O","o"],R={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function T(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;m||(m=h());let e=m[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<w.length;n++){const e=w[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(m[i]=e)}return e}(t.style,i,s);if(!o)return;const r=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return w.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),r)}var E=/vertical/,I=new WeakMap,V=new WeakMap,k=new WeakMap;function q(t){let i=I.get(t);return i||(i=new t.ResizeObserver(S),I.set(t,i)),i}function S(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const o=V.get(s);if(o){k.set(s,e);for(let t=0;t<o.length;t++){const{callback:i,type:n}=o[t];C(n,i,e)}}}}function C(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;A(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=f(t),s=E.test(function(t,i){return t.getComputedStyle(i)||R}(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,l;s?(l=r,a=o):(a=r,l=o),e={inlineSize:a,blockSize:l}}A(i,e)}}function x(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var O=self.__AMP_LOG;function F(t){return O.user||(O.user=z()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(O.user.win,t)?O.userForEmbed||(O.userForEmbed=z()):O.user}function z(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function j(t,i,n,e,s,o,r,a,l,h,u){return t}function Y(t,i,n,e,s,o,r,a,l,h,u){return F().assert(t,i,n,e,s,o,r,a,l,h,u)}function L(t,i){return U(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function W(t,i){return U(N(D(t)),i)}function $(t,i){const n=N(D(t));return H(n,i)?U(n,i):null}function D(t){return t.nodeType?(i=f(t),L(i,"ampdoc")).getAmpDoc(t):t;var i}function N(t){const i=D(t);return i.isSingleDoc()?i.win:i}function U(t,i){j(H(t,i));const n=B(t)[i];return n.obj||(j(n.ctor),j(n.context),n.obj=new n.ctor(n.context),j(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function B(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function H(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var J,Z,G,K=t=>$(t,"action"),Q=t=>L(t,"platform"),X=t=>U(t,"timer"),tt=t=>$(t,"url"),it=t=>W(t,"viewport");function nt(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function et(t){var i;let n=null===(i=J)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){J||(J=new WeakMap,Z=new WeakMap),c(Z);let i=Z.get(t);return i||(i=nt((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),c(i),i.unobserve(o),c(J),null===(e=J.get(o))||void 0===e||e.resolve(t[s]),J.delete(o))}}),t,{needsRootBounds:!0}),Z.set(t,i)),i}(f(t));c(J),i.observe(t),n=new e,J.set(t,n)}return n.promise}function st(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,i){for(const n in i)T(t,n,i[n])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,s((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function ot(t){return t.querySelector("video, iframe")}function rt(t,i){const n=s((()=>t.play(!!i)));return n.catch((t=>{M(0,t)})),n}function at(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==G)return G;G=!1;try{const t={get capture(){return G=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return G}(),l=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:l),()=>{null==s||s.removeEventListener(i,r,a?e:l),o=null,s=null,r=null}}function lt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function ht(t,i,n,e){return at(t,i,n,e)}function ut(t){return t.data}new WeakMap,new WeakMap;var ct,dt=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.Fn=null}add(t){return this.Fn||(this.Fn=[]),this.Fn.push(t),()=>{this.remove(t)}}remove(t){this.Fn&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.Fn,t)}removeAll(){this.Fn&&(this.Fn.length=0)}fire(t){if(this.Fn)for(const i of this.Fn.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.Fn)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}};function ft(t){const i=t.ownerDocument||t;return ct&&ct.ownerDocument===i||(ct=i.createElement("div")),mt}function mt(t){return function(t,i){if(c(1===i.length),c(Array.isArray(i)||(n=i,r.call(n,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return i[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=i[0];var n;const e=t.firstElementChild;return c(e),c(!e.nextElementSibling),t.removeChild(e),e}(ct,t)}var pt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],vt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function _t(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function gt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var yt={"title":"","artist":"","album":"","artwork":[{"src":""}]},Pt="registered",At="load",bt="playing",Mt="pause",wt="ended",Rt="muted",Tt="unmuted",Et="ad_start",It="ad_end",Vt="playing_manual",kt="paused",qt="video-play",St="user-interacted";function Ct(t){t.signals().signal(St)}var xt="video-manager",Ot=(t,i)=>!!t&&(t.video===i||t.video.element===i);function Ft(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function zt(t){return 10*t*5}var jt=t=>!!t&&!isNaN(t)&&t>1;function Yt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),_(e.element,i,t)}))}function Lt(t){!function(t,i,e,s){const r=D(t),a=N(r);!function(t,i,n,e,s,o){const r=B(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&U(t,n))}(a,r,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=x((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=h());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=_t(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let l=null;return n?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),l=_t(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),l=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,a,l),r&&(s[r]=a),a}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(gt(i,r))return n(r),r;const e=setInterval((()=>{gt(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.w_=null,this.E_=null,this.T_=null,this.Qe=X(t.win),this.R_=K(t.getHeadNode()),this.I_=()=>this.V_(),this.q_=x((()=>new class{constructor(t,i){this.S_=i,this.ji=t,this.x_=null,this.C_=null,this.w_=[],this.O_=[],this.F_=()=>this.z_(),this.j_=t=>this.Y_(t)==Vt,this.L_=(t,i)=>this.W_(t,i),this.D_(),this.N_()}dispose(){this.O_.forEach((t=>t())),this.O_.length=0}register(t){const{video:i}=t,{element:n}=i;this.B_(n)&&(this.w_.push(i),ht(n,Mt,this.F_),ht(n,bt,this.F_),ht(n,wt,this.F_),i.signals().whenSignal(St).then(this.F_),this.z_())}N_(){const t=this.ji.getRootNode(),i=()=>this.U_();this.O_.push(ht(t,"webkitfullscreenchange",i),ht(t,"mozfullscreenchange",i),ht(t,"fullscreenchange",i),ht(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.ji.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}B_(t){if("video"==ot(t).tagName.toLowerCase())return!0;const i=Q(this.ji.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}U_(){this.x_=null}D_(){const{win:t}=this.ji,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.O_.push(ht(t,"change",(()=>this.H_())))}this.O_.push(ht(t,"orientationchange",(()=>this.H_())))}H_(){this.isInLandscape()?null!=this.C_&&this.J_(this.C_):this.x_&&this.G_(this.x_)}J_(t){const i=Q(this.ji.win);this.x_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.Z_(t).then((()=>t.fullscreenEnter()))}G_(t){this.x_=null,this.Z_(t,"center").then((()=>t.fullscreenExit()))}Z_(t,i=null){const{element:e}=t,s=this.K_();return this.Q_().then((()=>et(e))).then((({boundingClientRect:t})=>{const{bottom:o,top:r}=t,a=s.getSize().height;if(r>=0&&o<=a)return n();const l=i||(o>a?"bottom":"top");return s.animateScrollIntoView(e,l)}))}K_(){return it(this.ji)}Q_(){return X(this.ji.win).promise(330)}z_(){if(this.isInLandscape())return Promise.resolve(this.C_);this.C_=null;const t=this.w_.filter(this.j_).map((t=>et(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.L_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.C_=t)):this.C_}))}W_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=it(this.ji),l=Ft(a,n),h=Ft(a,s);return l<h||l>h?l-h:n.top-s.top}Y_(t){return this.S_.getPlayingState(t)}}(this.ampdoc,this))),this.Qe.delay(this.I_,1e3)}dispose(){if(this.q_().dispose(),this.E_.disconnect(),this.E_=null,this.w_)for(let t=0;t<this.w_.length;t++)this.w_[t].dispose()}V_(){for(let t=0;t<this.w_.length;t++){const i=this.w_[t];i.getPlayingState()!==kt&&(Yt(i,"video-seconds-played"),this.X_(i))}this.Qe.delay(this.I_,1e3)}X_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(u(n)&&u(e)&&e>0){const s=n/e,o=lt(this.ampdoc.win,`${xt}.${i}`,{"time":n,"percent":s});this.R_.trigger(t.video.element,i,o,1)}}register(t){j(t);const i=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.E_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.nP(i).updateVisibility(t)}));this.E_=nt(t,this.ampdoc.win,{threshold:.5})}this.E_.observe(i.element),ht(i.element,"reloaded",(()=>n.videoLoaded())),this.w_=this.w_||[];const n=new class{constructor(t,i){this.S_=t,this.ji=t.ampdoc,this.video=i,this.eP=!0,this.sP=!1,this.gn=!1,this.oP=!1,this.ps=!1,this.rP=new dt,this.rP.onSessionEnd((()=>Yt(this,"video-session"))),this.aP=new dt,this.aP.onSessionEnd((()=>Yt(this,"video-session-visible"))),this.lP=x((()=>new class{constructor(t,i){this.Qe=X(t),this.hP=i,this.O_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.hP.video;this.stop(),this.O_=this.O_||[],this.dP()?this.fP(this.cP):this.O_.push(function(t,i,n,e){let s=n;const o=at(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.O_.push(ht(t,wt,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.O_){for(;this.O_.length>0;)this.O_.pop()();this.cP++}}dP(){const{video:t}=this.hP,i=t.getDuration();if(!jt(i))return!1;if(zt(i)<250){const i=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}pP(...t){F().warn.apply(F(),[xt].concat(t))}fP(t){if(t!=this.cP)return;const{hP:i,Qe:n}=this,{video:e}=i,s=()=>this.fP(t);if(i.getPlayingState()==kt)return void n.delay(s,500);const o=e.getDuration();if(!jt(o))return void n.delay(s,500);const r=(h=zt(o),c(!0),Math.min(Math.max(h,250),4e3)),a=e.getCurrentTime()/o*100,l=5*Math.floor(a/5);var h;j(u(l)),this.mP(l),n.delay(s,r)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){Yt(this.hP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.ji.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.yP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.S_.installAutoplayStyles(),this.gv=yt,this.AP=()=>{rt(this.video,!1)},this.bP=()=>{this.video.pause()},ht(i.element,At,(()=>this.videoLoaded())),ht(i.element,Mt,(()=>this.MP())),ht(i.element,"play",(()=>{this.yP=!0,Yt(this,qt)})),ht(i.element,bt,(()=>this.wP())),ht(i.element,Rt,(()=>this.dt=!0)),ht(i.element,Tt,(()=>{this.dt=!1,this.S_.pauseOtherVideos(this)})),ht(i.element,"amp:video:tick",(t=>{const i=ut(t),n=i.eventType;n&&this.EP(n,i.vars)})),ht(i.element,wt,(()=>{this.oP=!1,Yt(this,"video-ended")})),ht(i.element,Et,(()=>{this.oP=!0,Yt(this,"video-ad-start")})),ht(i.element,It,(()=>{this.oP=!1,Yt(this,"video-ad-end")})),i.signals().whenSignal(Pt).then((()=>this.TP())),this.RP=x((()=>{const t="firstPlay",i=lt(this.ji.win,t,{}),{element:n}=this.video;K(n).trigger(n,t,i,1)})),this.IP()}dispose(){this.lP().stop()}EP(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Yt(this,"video-hosted-custom",n)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gn&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.VP()&&this.S_.registerForAutoFullscreen(this),this.hasAutoplay&&this.kP()}VP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&Y(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gn=!0,this.getPlayingState()==Vt&&(this.RP(),this.S_.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=tt(t);if(i&&i.artwork){const{artwork:t}=i;j(o(t)),t.forEach((t=>{if(t){const i=l(t)?t.src:t;Y(n.isProtocolValid(i))}}))}}(i,this.gv),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(yt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.ji.win,this.gv,this.AP,this.bP)),this.rP.beginSession(),this.ps&&this.aP.beginSession(),this.yP||Yt(this,qt)}MP(){Yt(this,"video-pause"),this.gn=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=ot(this.video.element),this.qP(),this.lP().start(),this.ps&&this.SP()}qP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.gv=h(this.video.getMetadata()));const t=this.ji.win.document;if(!this.gv.artwork||0==this.gv.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=d(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.gv.artwork=[{"src":i}])}if(!this.gv.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;i&&(this.gv.title=i)}}xP(){this.sP&&this.SP()}SP(){this.ji.isVisible()&&st(this.ji.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.CP():this.OP()}))}kP(){this.video.isInteractive()&&this.video.hideControls(),st(this.ji.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.FP()):this.video.showControls()}))}FP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get(St))return;const e=function(t,i){const n=ft(i)(vt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return v(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[ht(i,Mt,(()=>r(!1))),ht(i,bt,(()=>r(!0))),ht(i,Et,(()=>{o(!1),t.showControls()})),ht(i,It,(()=>{o(!0),t.hideControls()})),ht(i,Tt,(()=>Ct(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=ft(t)(pt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.gv);s.push(n),a.push(ht(n,"click",(()=>Ct(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.oP&&o(!1),t.signals().whenSignal(St).then((()=>{this.RP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{v(t)}))}))}))}CP(){this.eP&&(this.ps?(this.aP.beginSession(),rt(this.video,!0),this._P=!0):(this.gn&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.ps?this.aP.beginSession():this.gn&&this.aP.endSession()}updateVisibility(t){const i=this.ps;this.ps=t,t!=i&&this.xP()}getPlayingState(){return this.gn?this.gn&&this._P&&!this.userInteracted()?"playing_auto":Vt:kt}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get(St)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([st(this.ji.win),et(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),l=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.w_.push(n);const{element:e}=n.video;_(e,Pt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(Pt),e.classList.add("i-amphtml-video-interface")}tP(t){n("play",(()=>rt(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{Ct(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}iP(t){if(Ot(this.T_,t))return this.T_;for(let i=0;this.w_&&i<this.w_.length;i++){const n=this.w_[i];if(Ot(n,t))return this.T_=n,n}return null}nP(t){return j(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}$P(){return this.q_()}getVideoStateProperty(t,i){const e=this.ampdoc.getRootNode(),s=F().assertElement(e.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),o=this.nP(s);return(o?o.getAnalyticsDetails():n()).then((t=>t?t[i]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.w_.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==Vt&&i.video.pause()}))}})}(t,"video-manager")}var Wt=["<iframe frameborder=0 allowfullscreen></iframe>"],$t="amp-ooyala-player",Dt=class extends t.BaseElement{constructor(t){super(t),this.Lv=null,this.tq="",this.iq="",this.mb="",this.bb=null,this.yb=null,this.dw=null,this.bn=new class{constructor(t){this._n=t,this.gn=!1,this.Pn=!1,this.An=this.An.bind(this)}updatePlaying(t){t!==this.gn&&(this.gn=t,t?(this.Pn=!1,function(t,i){!function(t,i,n){const e=t.ownerDocument.defaultView;if(!e)return;let s=V.get(t);if(s||(s=[],V.set(t,s),q(e).observe(t)),!s.some((t=>t.callback===n&&1===t.type))){s.push({type:1,callback:n});const i=k.get(t);i&&setTimeout((()=>C(1,n,i)))}}(t,0,i)}(this._n,this.An)):function(t,i){!function(t,i,n){const e=V.get(t);if(e&&(function(t,i){const e=[];let s=0;for(let i=0;i<t.length;i++){const r=t[i];(o=r).callback===n&&1===o.type?e.push(r):(s<i&&(t[s]=r),s++)}var o;s<t.length&&(t.length=s)}(e),0==e.length)){V.delete(t),k.delete(t);const i=t.ownerDocument.defaultView;i&&q(i).unobserve(t)}}(t,0,i)}(this._n,this.An))}An({blockSize:t,inlineSize:i}){const n=i>0&&t>0;if(n===this.Pn)return;this.Pn=n;const e=this._n;n||e.pause()}}(this.element)}preconnectCallback(t){var i;(i=this.win,L(i,"preconnect")).url(this.getAmpDoc(),"https://player.ooyala.com",t)}buildCallback(){const{element:t}=this;this.tq=Y(t.getAttribute("data-embedcode"),"The data-embedcode attribute is required for %s",t),this.iq=Y(t.getAttribute("data-pcode"),"The data-pcode attribute is required for %s",t),this.mb=Y(t.getAttribute("data-playerid"),"The data-playerid attribute is required for %s",t);const i=new e;var n;this.bb=i.promise,this.yb=i.resolve,Lt(t),(n=t,W(n,"video-manager")).register(this)}layoutCallback(){const{element:t}=this;let i="https://player.ooyala.com/iframe.html?platform=html5-priority";if("v4"==(t.getAttribute("data-playerversion")||"").toLowerCase()){i="https://player.ooyala.com/static/v4/production/latest/skin-plugin/amp_iframe.html?pcode="+encodeURIComponent(this.iq);const n=t.getAttribute("data-config");n&&(i+="&options[skin.config]="+encodeURIComponent(n))}i+="&ec="+encodeURIComponent(this.tq)+"&pbid="+encodeURIComponent(this.mb);const n=function(t,i,n,e){const{element:s}=t,r=ft(s)(Wt);return function(t,i,n,e){const s=o(r=["referrerpolicy"])?r:[r];var r;for(const t of s){const e=i.getAttribute(t);null!==e&&n.setAttribute(t,e)}}(0,t.element,r),r.src=tt(s).assertHttpsUrl(i,s),function(t,i){t.classList.add("i-amphtml-fill-content")}(r),s.appendChild(r),r}(this,i);this.Lv=n,this.dw=ht(this.win,"message",(t=>{this.nq(t)}));const e=this.loadPromise(this.Lv).then((()=>{_(t,At)}));return this.yb(e),this.bn.updatePlaying(!0),e}unlayoutCallback(){this.Lv&&(v(this.Lv),this.Lv=null),this.dw&&this.dw();const t=new e;return this.bb=t.promise,this.yb=t.resolve,this.bn.updatePlaying(!1),!0}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}pauseCallback(){this.Lv&&this.pause()}nq(t){if(t.source!=this.Lv.contentWindow)return;const i=l(n=ut(t))?n:d(n);var n;null!=i&&function(t,i,n){if(null==n[i])return!1;const e=n[i];(o(e)?e:[e]).forEach((i=>{_(t,i)}))}(this.element,i.data,{"playing":bt,"paused":Mt,"muted":Rt,"unmuted":Tt})}wb(t){this.bb.then((()=>{this.Lv&&this.Lv.contentWindow&&this.Lv.contentWindow.postMessage(t,"*")}))}play(t){this.wb("play")}pause(){this.wb("pause")}mute(){this.wb("mute")}unmute(){this.wb("unmute")}supportsPlatform(){return!0}isInteractive(){return!0}showControls(){}hideControls(){}fullscreenEnter(){this.Lv&&function(t){const i=t.requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen;i&&i.call(t)}(this.Lv)}fullscreenExit(){this.Lv&&function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.Lv)}isFullscreen(){return!!this.Lv&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.Lv)}getMetadata(){}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return 0}getDuration(){return 1}getPlayedRanges(){return[]}seekTo(t){this.user().error($t,"`seekTo` not supported.")}};t.registerElement($t,Dt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-ooyala-player-0.1.mjs.map