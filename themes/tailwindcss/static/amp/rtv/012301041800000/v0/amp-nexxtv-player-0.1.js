;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-nexxtv-player",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function u(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return o(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a;function s(){return a||(a=Promise.resolve(void 0))}var f=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function c(t){return new Promise((function(n){n(t())}))}var h=Array.isArray;function l(t){return h(t)?t:[t]}var v=Object.prototype,d=v.hasOwnProperty,m=v.toString;function p(t){return"[object Object]"===m.call(t)}function y(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function b(t){return"number"==typeof t&&isFinite(t)}function w(t,n,i,r,e,o,u,a,s,f,c){return t}function g(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function x(t){return(t.ownerDocument||t).defaultView}var k,q={bubbles:!0,cancelable:!0};function j(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function S(t,n){t.insertBefore(n,t.firstChild)}function M(t){return t.parent&&t.parent!=t}function O(t,n,i,r){var e=i||{};w(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var u=r||q,a=u.bubbles,s=u.cancelable;o.initEvent(n,a,s),t.dispatchEvent(o)}function P(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function T(t){for(var n,i=null,r="",e=u(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=P(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function A(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function R(t){var n=T.apply(null,arguments);setTimeout((function(){throw A(n),n}))}function E(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){R(t)}}function Y(t){var n=T.apply(null,arguments);return n.expected=!0,n}var z=["Webkit","webkit","Moz","moz","ms","O","o"],I={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function C(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;k||(k=y());var r=k[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<z.length;i++){var r=z[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(k[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),z.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}var U=/vertical/,W=new WeakMap,_=new WeakMap,L=new WeakMap;function F(t){var n=W.get(t);return n||(n=new t.ResizeObserver(N),W.set(t,n)),n}function N(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=_.get(e);if(o){L.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;B(a.type,s,r)}}}}}function B(t,n,i){if(0==t){var r=i.contentRect,e=r.height;E(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=x(f),h=U.test(function(t,n){return t.getComputedStyle(n)||I}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}E(n,o)}}var J=function(){function t(t){this.zn=t,this.Cn=!1,this.xn=!1,this.En=this.En.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Cn&&(this.Cn=t,t?(this.xn=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=_.get(t);if(e||(e=[],_.set(t,e),F(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=L.get(t);o&&setTimeout((function(){return B(1,i,o)}))}}}(this.zn,0,this.En)):function(t,n){!function(t,n,i){var r=_.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){_.delete(t),L.delete(t);var e=t.ownerDocument.defaultView;e&&F(e).unobserve(t)}}(t,0,n)}(this.zn,this.En))},n.En=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.xn){this.xn=i;var r=this.zn;i||r.pause()}},t}();function D(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var V=self.__AMP_LOG;function H(t,n){throw new Error("failed to call initLogConstructor")}function Z(t){return V.user||(V.user=$()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(V.user.win,t)?V.userForEmbed||(V.userForEmbed=$()):V.user}function $(t){return H()}function G(t,n,i,r,e,o,u,a,s,f,c){return t}function K(t,n,i,r,e,o,u,a,s,f,c){return Z().assert(t,n,i,r,e,o,u,a,s,f,c)}function Q(t,n){return et(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function X(t,n){return et(rt(it(t)),n)}function tt(t,n){var i=rt(it(t));return at(i,n)?et(i,n):null}function nt(t,n){return ot(rt(t),n)}function it(t){return t.nodeType?(n=x(t),Q(n,"ampdoc")).getAmpDoc(t):t;var n}function rt(t){var n=it(t);return n.isSingleDoc()?n.win:n}function et(t,n){G(at(t,n));var i=ut(t)[n];return i.obj||(G(i.ctor),G(i.context),i.obj=new i.ctor(i.context),G(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function ot(t,n){var i=ut(t)[n];return i?i.promise?i.promise:(et(t,n),i.promise=Promise.resolve(i.obj)):null}function ut(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function at(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var st,ft,ct,ht=function(t){return tt(t,"action")},lt=function(t){return Q(t,"platform")},vt=function(t){return et(t,"timer")},dt=function(t){return function(t,n,i,r){var e=nt(t,n);if(e)return e;var o=it(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(i);return t?Q(o.win,"extensions").waitForExtension(i,t):null})).then((function(i){return i?function(t,n){return function(t,n){var i=ot(t,n);if(i)return i;var r,e,o,u,a=ut(t);return a[n]=(e=(r=new f).promise,o=r.reject,u=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:u,reject:o,context:null,ctor:null}),a[n].promise}(rt(t),n)}(t,n):null}))}(t,"consentPolicyManager","amp-consent")},mt=function(t){return tt(t,"url")},pt=function(t){return X(t,"viewport")};function yt(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=M(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function bt(t){var n,i=null===(n=st)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){st||(st=new WeakMap,ft=new WeakMap),w(ft);var n=ft.get(t);return n||(n=yt((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),w(n),n.unobserve(o),w(st),null===(e=st.get(o))||void 0===e||e.resolve(t[r]),st.delete(o))}}),t,{needsRootBounds:!0}),ft.set(t,n)),n}(x(t));w(st),r.observe(t),i=new f,st.set(t,i)}return i.promise}function wt(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,n){for(var i in n)C(t,i,n[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,c((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function gt(t){return t.querySelector("video, iframe")}function xt(t,n){var i=c((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];A(Y.apply(null,i))}("TRYPLAY",t)})),i}function kt(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==ct)return ct;ct=!1;try{var t={get capture(){return ct=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return ct}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function qt(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function jt(t,n,i,r){return kt(t,n,i,r)}function St(t){return t.data}new WeakMap,new WeakMap;var Mt,Ot=function(){function t(){this.Nt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.Nt||(this.Nt=[]),this.Nt.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.Nt&&(i=t,-1!=(r=(n=this.Nt).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.Nt&&(this.Nt.length=0)},n.fire=function(t){if(this.Nt)for(var n,i=u(this.Nt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.Nt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),Pt=function(){function t(){this.ky=!1,this.qy=new Ot}var n=t.prototype;return n.onSessionEnd=function(t){this.qy.add(t)},n.beginSession=function(){this.ky=!0},n.endSession=function(){this.ky&&this.qy.fire(),this.ky=!1},n.isSessionActive=function(){return this.ky},t}();function Tt(t){var n=t.ownerDocument||t;return Mt&&Mt.ownerDocument===n||(Mt=n.createElement("div")),At}function At(t){return function(t,n){if(w(1===n.length),w(Array.isArray(n)||(r=n,d.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return n[0]}});t.innerHTML=i.createHTML("ignored")}else t.innerHTML=n[0];var r,e=t.firstElementChild;return w(e),w(!e.nextElementSibling),t.removeChild(e),e}(Mt,t)}var Rt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Et=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Yt(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var zt={"title":"","artist":"","album":"","artwork":[{"src":""}]},It="registered",Ct="load",Ut="playing",Wt="pause",_t="ended",Lt="muted",Ft="unmuted",Nt="ad_start",Bt="ad_end",Jt="playing_manual",Dt="paused",Vt="video-play",Ht="user-interacted";function Zt(t){t.signals().signal(Ht)}var $t="video-manager",Gt=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=D((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=y());var o="amp-extension=".concat(r);if(o){var u=Yt(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else S(t,n)}(t,a,Yt(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.xy=null,this.Ry=null,this.Yy=null,this.Ds=vt(t.win),this.zy=ht(t.getHeadNode()),this._y=function(){return n.Cy()},this.Wy=D((function(){return new Xt(n.ampdoc,n)})),this.Ds.delay(this._y,1e3)}var n=t.prototype;return n.dispose=function(){if(this.Wy().dispose(),this.Ry.disconnect(),this.Ry=null,this.xy)for(var t=0;t<this.xy.length;t++)this.xy[t].dispose()},n.Cy=function(){for(var t=0;t<this.xy.length;t++){var n=this.xy[t];n.getPlayingState()!==Dt&&(on(n,"video-seconds-played"),this.Uy(n))}this.Ds.delay(this._y,1e3)},n.Uy=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(b(i)&&b(r)&&r>0){var e=i/r,o=qt(this.ampdoc.win,"".concat($t,".").concat(n),{"time":i,"percent":e});this.zy.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;G(t);var i=t;if(this.Ly(t),t.supportsPlatform()&&!this.Ny(t)){this.Ry||(this.Ry=yt((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.Fy(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.Ry.observe(i.element),jt(i.element,"reloaded",(function(){return r.videoLoaded()})),this.xy=this.xy||[];var r=new Qt(this,t);this.xy.push(r);var e=r.video.element;O(e,It),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(It),e.classList.add("i-amphtml-video-interface")}},n.Ly=function(t){i("play",(function(){return xt(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Zt(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.Ny=function(t){if(Kt(this.Yy,t))return this.Yy;for(var n=0;this.xy&&n<this.xy.length;n++){var i=this.xy[n];if(Kt(i,t))return this.Yy=i,i}return null},n.Fy=function(t){return G(this.Ny(t))},n.registerForAutoFullscreen=function(t){this.Wy().register(t)},n.By=function(){return this.Wy()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=Z().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.Fy(r);return(e?e.getAnalyticsDetails():s()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.Fy(t).getPlayingState()},n.isMuted=function(t){return this.Fy(t).isMuted()},n.userInteracted=function(t){return this.Fy(t).userInteracted()},n.isRollingAd=function(t){return this.Fy(t).isRollingAd()},n.pauseOtherVideos=function(t){this.xy.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Jt&&n.video.pause()}))},t}(),Kt=function(t,n){return!!t&&(t.video===n||t.video.element===n)},Qt=function(){function t(t,n){var i=this;this.Jy=t,this.te=t.ampdoc,this.video=n,this.Vy=!0,this.Gy=!1,this.Cn=!1,this.Hy=!1,this.Ee=!1,this.Zy=new Pt,this.Zy.onSessionEnd((function(){return on(i,"video-session")})),this.$y=new Pt,this.$y.onSessionEnd((function(){return on(i,"video-session-visible")})),this.Ky=D((function(){return new en(i.te.win,i)})),this.Qy=!1,this.Xy=!1,this.uw=null,this.lt=!1,this.aw=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Jy.installAutoplayStyles(),this.fw=zt,this.cw=function(){xt(i.video,!1)},this.hw=function(){i.video.pause()},jt(n.element,Ct,(function(){return i.videoLoaded()})),jt(n.element,Wt,(function(){return i.lw()})),jt(n.element,"play",(function(){i.aw=!0,on(i,Vt)})),jt(n.element,Ut,(function(){return i.dw()})),jt(n.element,Lt,(function(){return i.lt=!0})),jt(n.element,Ft,(function(){i.lt=!1,i.Jy.pauseOtherVideos(i)})),jt(n.element,"amp:video:tick",(function(t){var n=St(t),r=n.eventType;r&&i.mw(r,n.vars)})),jt(n.element,_t,(function(){i.Hy=!1,on(i,"video-ended")})),jt(n.element,Nt,(function(){i.Hy=!0,on(i,"video-ad-start")})),jt(n.element,Bt,(function(){i.Hy=!1,on(i,"video-ad-end")})),n.signals().whenSignal(It).then((function(){return i.pw()})),this.yw=D((function(){var t="firstPlay",n=qt(i.te.win,t,{}),r=i.video.element;ht(r).trigger(r,t,n,1)})),this.bw()}var n=t.prototype;return n.dispose=function(){this.Ky().stop()},n.mw=function(t,n){var i,r,e,o=(e=t,(r="__amp:eventType")in(i={})?Object.defineProperty(i,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[r]=e,i);Object.keys(n).forEach((function(t){o["custom_".concat(t)]=n[t]})),on(this,"video-hosted-custom",o)},n.bw=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.Vy=!1,t.Cn&&t.video.pause()}))},n.isMuted=function(){return this.lt},n.isPlaybackManaged=function(){return this.Vy},n.pw=function(){this.ww()&&this.Jy.registerForAutoFullscreen(this),this.hasAutoplay&&this.gw()},n.ww=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&K(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},n.dw=function(){this.Cn=!0,this.getPlayingState()==Jt&&(this.yw(),this.Jy.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=mt(t);if(n&&n.artwork){var r=n.artwork;G(h(r)),r.forEach((function(t){if(t){var n=p(t)?t.src:t;K(i.isProtocolValid(n))}}))}}(u,this.fw),t=this.te.win,n=this.fw,i=this.cw,r=this.hw,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(zt),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Zy.beginSession(),this.Ee&&this.$y.beginSession(),this.aw||on(this,Vt)},n.lw=function(){on(this,"video-pause"),this.Cn=!1,this.Xy?this.Xy=!1:this.Zy.endSession()},n.videoLoaded=function(){this.Gy=!0,this.uw=gt(this.video.element),this.kw(),this.Ky().start(),this.Ee&&this.qw()},n.kw=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.fw=y(this.video.getMetadata()));var t=this.te.win.document;if(!this.fw.artwork||0==this.fw.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=g(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.fw.artwork=[{"src":n}])}if(!this.fw.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.uw.getAttribute("title")||this.uw.getAttribute("aria-label")||t.title;i&&(this.fw.title=i)}}},n.jw=function(){this.Gy&&this.qw()},n.qw=function(){var t=this;this.te.isVisible()&&wt(this.te.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.xw():t.Sw()}))},n.gw=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),wt(this.te.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.Ow()):t.video.showControls()}))},n.Ow=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Ht)){var e=function(t,n){for(var i=Tt(n)(Et),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return j(r),i}(0,r),o=[e],u=[jt(r,Wt,(function(){return f(!1)})),jt(r,Ut,(function(){return f(!0)})),jt(r,Nt,(function(){s(!1),n.showControls()})),jt(r,Bt,(function(){s(!0),n.hideControls()})),jt(r,Ft,(function(){return Zt(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=Tt(t)(Rt);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.fw);o.push(a),u.push(jt(a,"click",(function(){return Zt(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Hy&&s(!1),n.signals().whenSignal(Ht).then((function(){t.yw(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){j(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},n.xw=function(){this.Vy&&(this.Ee?(this.$y.beginSession(),xt(this.video,!0),this.Qy=!0):(this.Cn&&this.$y.endSession(),this.video.pause(),this.Xy=!0))},n.Sw=function(){this.Ee?this.$y.beginSession():this.Cn&&this.$y.endSession()},n.updateVisibility=function(t){var n=this.Ee;this.Ee=t,t!=n&&this.jw()},n.getPlayingState=function(){return this.Cn?this.Cn&&this.Qy&&!this.userInteracted()?"playing_auto":Jt:Dt},n.isRollingAd=function(){return this.Hy},n.userInteracted=function(){return null!=this.video.signals().get(Ht)},n.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([wt(this.te.win),bt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.lt,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),Xt=function(){function t(t,n){var i=this;this.Jy=n,this.te=t,this.Mw=null,this.Tw=null,this.xy=[],this.Aw=[],this.Ew=function(){return i.Pw()},this.Rw=function(t){return i.Yw(t)==Jt},this.zw=function(t,n){return i._w(t,n)},this.Cw(),this.Ww()}var n=t.prototype;return n.dispose=function(){this.Aw.forEach((function(t){return t()})),this.Aw.length=0},n.register=function(t){var n=t.video,i=n.element;this.Iw(i)&&(this.xy.push(n),jt(i,Wt,this.Ew),jt(i,Ut,this.Ew),jt(i,_t,this.Ew),n.signals().whenSignal(Ht).then(this.Ew),this.Pw())},n.Ww=function(){var t=this,n=this.te.getRootNode(),i=function(){return t.Uw()};this.Aw.push(jt(n,"webkitfullscreenchange",i),jt(n,"mozfullscreenchange",i),jt(n,"fullscreenchange",i),jt(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.te.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.Iw=function(t){if("video"==gt(t).tagName.toLowerCase())return!0;var n=lt(this.te.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.Uw=function(){this.Mw=null},n.Cw=function(){var t=this,n=this.te.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.Aw.push(jt(r,"change",(function(){return t.Lw()})))}this.Aw.push(jt(n,"orientationchange",(function(){return t.Lw()})))},n.Lw=function(){this.isInLandscape()?null!=this.Tw&&this.Nw(this.Tw):this.Mw&&this.Fw(this.Mw)},n.Nw=function(t){var n=lt(this.te.win);this.Mw=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.Bw(t).then((function(){return t.fullscreenEnter()}))},n.Fw=function(t){this.Mw=null,this.Bw(t,"center").then((function(){return t.fullscreenExit()}))},n.Bw=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Jw();return this.Dw().then((function(){return bt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return s();var f=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,f)}))},n.Jw=function(){return pt(this.te)},n.Dw=function(){return vt(this.te.win).promise(330)},n.Pw=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.Tw);this.Tw=null;var n=this.xy.filter(this.Rw).map((function(t){return bt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.zw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.Tw=n})):t.Tw}))},n._w=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=pt(this.te),a=tn(u,i),s=tn(u,e);return a<s||a>s?a-s:i.top-e.top},n.Yw=function(t){return this.Jy.getPlayingState(t)},t}();function tn(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function nn(t){return 10*t*5}var rn=function(t){return!!t&&!isNaN(t)&&t>1},en=function(){function t(t,n){this.Ds=vt(t),this.Vw=n,this.Aw=null,this.Gw=0,this.Hw=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Vw.video.element;this.stop(),this.Aw=this.Aw||[],this.Zw()?this.$w(this.Hw):this.Aw.push(function(n,i,r,e){var o=function(){t.Zw()&&t.$w(t.Hw)},u=kt(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.Aw.push(jt(n,_t,(function(){t.Zw()&&t.Kw(100)})))},n.stop=function(){if(this.Aw){for(;this.Aw.length>0;)this.Aw.pop()();this.Hw++}},n.Zw=function(){var t=this.Vw.video,n=t.getDuration();if(!rn(n))return!1;if(nn(n)<250){var i=Math.ceil(5);this.Qw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.Qw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];Z().warn.apply(Z(),[$t].concat(n))},n.$w=function(t){var n,i=this;if(t==this.Hw){var r=this.Vw,e=this.Ds,o=r.video,u=function(){return i.$w(t)};if(r.getPlayingState()!=Dt){var a=o.getDuration();if(rn(a)){var s=(n=nn(a),w(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);G(b(c)),this.Kw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.Kw=function(t){t<=0||this.Gw!=t&&(this.Gw=t,this.Xw(t))},n.Xw=function(t){on(this.Vw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function on(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),O(r.element,n,t)}))}var un,an,sn=["<iframe frameborder=0 allowfullscreen></iframe>"],fn=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=y()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,i=this.Kt+1;for(var r in n){var e=n[r].access;e<i&&(i=e,t=r)}void 0!==t&&(delete n[t],this.Wt--)}},t}();new Set(["c","v","a","ad"]);var cn="amp-nexxtv-player",hn=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(s,t);var r,o,a=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(r);if(o){var u=i(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return e(this,t)});function s(t){var n;return(n=a.call(this,t)).tb=null,n.i="https://embed.nexx.cloud/",n.Bb=null,n._b=null,n.zb=null,n.Qn=new J(n.element),n}var c=s.prototype;return c.preconnectCallback=function(t){var n;(n=this.win,Q(n,"preconnect")).url(this.getAmpDoc(),this.i,t)},c.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},c.buildCallback=function(){var t,n,i,r,e,o=new f;this._b=o.promise,this.zb=o.resolve,n=this.element,i="video-manager",r=Gt,function(t,n,i,r,e,o){var u=ut(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&et(t,i))}(rt(e=it(n)),e,i,r),(t=this.element,X(t,"video-manager")).register(this)},c.tx=function(t){this.zb(this.tb),(V.dev||(V.dev=H())).info(cn,"nexx player ready",t)},c.Zg=function(t){var n,i=this.element,r=i.dataset,e=r.client,o=r.disableAds,u=r.domainId,a=r.exitMode,s=r.mediaid,f=r.mode,c=r.streamingFilter,h=r.streamtype,v=K(e||u,"One of data-client or data-domain-id attributes is required for <amp-nexxtv-player> %s",i);return K(s,"The data-mediaid attribute is required for <amp-nexxtv-player> %s",i),n=function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(this.i+[v,h,s].map(encodeURIComponent).join("/"),function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=l(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}({"dataMode":f,"platform":"amp","disableAds":o,"streamingFilter":c,"exitMode":a,"consentString":t})),K(/^https?\:/i.test(n),'URL must start with "http://" or "https://". Invalid value: %s',n),function(t,n){return un||(un=self.document.createElement("a"),an=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new fn(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var r,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=r;var o=e;return i&&i.put(n,o),o}(un,t,an)}(n).href},c.nx=function(){var t=this.getConsentPolicy()||"default";return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return dt(t).then((function(t){return t?t.getConsentStringInfo(n):null}))}(this.element,t)},c.layoutCallback=function(){var t=this;return this.nx().then((function(n){return t.tb=(i=t,r=t.Zg(n),o=Tt(e=i.element)(sn),function(t,n,i,r){for(var e,o=u(l(["referrerpolicy"]),!0);!(e=o()).done;){var a=e.value,s=n.getAttribute(a);null!==s&&i.setAttribute(a,s)}}(0,i.element,o),o.src=mt(e).assertHttpsUrl(r,e),function(t,n){t.classList.add("i-amphtml-fill-content")}(o),e.appendChild(o),o),t.Bb=jt(t.win,"message",(function(n){t.ix(n)})),t.Qn.updatePlaying(!0),t.loadPromise(t.tb);var i,r,e,o}))},c.pauseCallback=function(){this.pause()},c.unlayoutCallback=function(){this.tb&&(j(this.tb),this.tb=null),this.Bb&&this.Bb();var t=new f;return this._b=t.promise,this.zb=t.resolve,this.Qn.updatePlaying(!1),!0},c.Vb=function(t){var n=this;this._b.then((function(){n.tb&&n.tb.contentWindow&&n.tb.contentWindow.postMessage({"cmd":t},"*")}))},c.ix=function(t){var n=St(t);if(n&&t.source===this.tb.contentWindow){var i,r=p(i=n)?i:g(i);if(null!=r){var e=r.event;e&&("playerready"===e&&this.tx(r),function(t,n,i){if(null==i[n])return!1;var r=i[n];(h(r)?r:[r]).forEach((function(n){O(t,n)}))}(this.element,e,{"ready":Ct,"play":Ut,"pause":Wt,"mute":Lt,"unmute":Ft}))}}},c.play=function(){this.Vb("play")},c.pause=function(){this.tb&&this.Vb("pause")},c.mute=function(){this.Vb("mute")},c.unmute=function(){this.Vb("unmute")},c.supportsPlatform=function(){return!0},c.isInteractive=function(){return!0},c.showControls=function(){},c.hideControls=function(){},c.fullscreenEnter=function(){var t,n;this.tb&&(n=(t=this.tb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)},c.fullscreenExit=function(){this.tb&&function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)},c.isFullscreen=function(){return!!this.tb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.tb)},c.getMetadata=function(){},c.preimplementsMediaSessionAPI=function(){return!1},c.preimplementsAutoFullscreen=function(){return!1},c.getCurrentTime=function(){return 0},c.getDuration=function(){return 1},c.getPlayedRanges=function(){return[]},c.seekTo=function(t){this.user().error(cn,"`seekTo` not supported.")},s}(t.BaseElement);t.registerElement(cn,hn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-nexxtv-player-0.1.js.map