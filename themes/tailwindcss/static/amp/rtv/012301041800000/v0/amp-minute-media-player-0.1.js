;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-minute-media-player",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function u(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return o(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a;function s(){return a||(a=Promise.resolve(void 0))}var f=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function c(t){return new Promise((function(n){n(t())}))}var h=Array.isArray;function l(t){return h(t)?t:[t]}var v=Object.prototype,d=v.hasOwnProperty,m=v.toString;function p(t){return"[object Object]"===m.call(t)}function y(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function b(t){return"number"==typeof t&&isFinite(t)}function w(t,n,i,r,e,o,u,a,s,f,c){return t}function g(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function q(t){return(t.ownerDocument||t).defaultView}var k={bubbles:!0,cancelable:!0};function x(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function j(t,n){t.insertBefore(n,t.firstChild)}function O(t){return t.parent&&t.parent!=t}function S(t,n,i,r){var e=i||{};w(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var u=r||k,a=u.bubbles,s=u.cancelable;o.initEvent(n,a,s),t.dispatchEvent(o)}var M="flex-item";function _(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function A(t){for(var n,i=null,r="",e=u(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=_(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function T(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function E(t){var n=A.apply(null,arguments);return n.expected=!0,n}function P(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var R=self.__AMP_LOG;function Y(t){return R.user||(R.user=C()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(R.user.win,t)?R.userForEmbed||(R.userForEmbed=C()):R.user}function C(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function I(t,n,i,r,e,o,u,a,s,f,c){return t}function z(t,n,i,r,e,o,u,a,s,f,c){return Y().assert(t,n,i,r,e,o,u,a,s,f,c)}function U(t,n){return B(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function L(t,n){return B(F(W(t)),n)}function N(t,n){var i=F(W(t));return D(i,n)?B(i,n):null}function W(t){return t.nodeType?(n=q(t),U(n,"ampdoc")).getAmpDoc(t):t;var n}function F(t){var n=W(t);return n.isSingleDoc()?n.win:n}function B(t,n){I(D(t,n));var i=J(t)[n];return i.obj||(I(i.ctor),I(i.context),i.obj=new i.ctor(i.context),I(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function J(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function D(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var H,V,Z,$=function(t){return N(t,"action")},G=function(t){return U(t,"platform")},K=function(t){return U(t,"preconnect")},Q=function(t){return B(t,"timer")},X=function(t){return N(t,"url")},tt=function(t){return L(t,"viewport")};function nt(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=O(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function it(t){var n,i=null===(n=H)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){H||(H=new WeakMap,V=new WeakMap),w(V);var n=V.get(t);return n||(n=nt((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),w(n),n.unobserve(o),w(H),null===(e=H.get(o))||void 0===e||e.resolve(t[r]),H.delete(o))}}),t,{needsRootBounds:!0}),V.set(t,n)),n}(q(t));w(H),r.observe(t),i=new f,H.set(t,i)}return i.promise}new WeakMap,new WeakMap;var rt,et=["Webkit","webkit","Moz","moz","ms","O","o"];function ot(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;Z||(Z=y());var r=Z[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<et.length;i++){var r=et[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(Z[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),et.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}function ut(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,n){for(var i in n)ot(t,i,n[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,c((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function at(t){return t.querySelector("video, iframe")}function st(t,n){var i=c((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];T(E.apply(null,i))}("TRYPLAY",t)})),i}function ft(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==rt)return rt;rt=!1;try{var t={get capture(){return rt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return rt}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function ct(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function ht(t,n,i,r){return ft(t,n,i,r)}function lt(t){return t.data}var vt,dt=function(){function t(){this.Nt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.Nt||(this.Nt=[]),this.Nt.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.Nt&&(i=t,-1!=(r=(n=this.Nt).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.Nt&&(this.Nt.length=0)},n.fire=function(t){if(this.Nt)for(var n,i=u(this.Nt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.Nt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),mt=function(){function t(){this.ky=!1,this.qy=new dt}var n=t.prototype;return n.onSessionEnd=function(t){this.qy.add(t)},n.beginSession=function(){this.ky=!0},n.endSession=function(){this.ky&&this.qy.fire(),this.ky=!1},n.isSessionActive=function(){return this.ky},t}();function pt(t){var n=t.ownerDocument||t;return vt&&vt.ownerDocument===n||(vt=n.createElement("div")),yt}function yt(t){return function(t,n){if(w(1===n.length),w(Array.isArray(n)||(r=n,d.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return n[0]}});t.innerHTML=i.createHTML("ignored")}else t.innerHTML=n[0];var r,e=t.firstElementChild;return w(e),w(!e.nextElementSibling),t.removeChild(e),e}(vt,t)}var bt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],wt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function gt(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var qt={"title":"","artist":"","album":"","artwork":[{"src":""}]},kt="registered",xt="load",jt="playing",Ot="pause",St="ended",Mt="muted",_t="unmuted",At="ad_start",Tt="ad_end",Et="playing_manual",Pt="paused",Rt="video-play",Yt="user-interacted";function Ct(t){t.signals().signal(Yt)}var It="video-manager",zt=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=P((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=y());var o="amp-extension=".concat(r);if(o){var u=gt(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else j(t,n)}(t,a,gt(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.xy=null,this.Ry=null,this.Yy=null,this.Ds=Q(t.win),this.zy=$(t.getHeadNode()),this._y=function(){return n.Cy()},this.Wy=P((function(){return new Nt(n.ampdoc,n)})),this.Ds.delay(this._y,1e3)}var n=t.prototype;return n.dispose=function(){if(this.Wy().dispose(),this.Ry.disconnect(),this.Ry=null,this.xy)for(var t=0;t<this.xy.length;t++)this.xy[t].dispose()},n.Cy=function(){for(var t=0;t<this.xy.length;t++){var n=this.xy[t];n.getPlayingState()!==Pt&&(Dt(n,"video-seconds-played"),this.Uy(n))}this.Ds.delay(this._y,1e3)},n.Uy=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(b(i)&&b(r)&&r>0){var e=i/r,o=ct(this.ampdoc.win,"".concat(It,".").concat(n),{"time":i,"percent":e});this.zy.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;I(t);var i=t;if(this.Ly(t),t.supportsPlatform()&&!this.Ny(t)){this.Ry||(this.Ry=nt((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.Fy(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.Ry.observe(i.element),ht(i.element,"reloaded",(function(){return r.videoLoaded()})),this.xy=this.xy||[];var r=new Lt(this,t);this.xy.push(r);var e=r.video.element;S(e,kt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(kt),e.classList.add("i-amphtml-video-interface")}},n.Ly=function(t){i("play",(function(){return st(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Ct(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.Ny=function(t){if(Ut(this.Yy,t))return this.Yy;for(var n=0;this.xy&&n<this.xy.length;n++){var i=this.xy[n];if(Ut(i,t))return this.Yy=i,i}return null},n.Fy=function(t){return I(this.Ny(t))},n.registerForAutoFullscreen=function(t){this.Wy().register(t)},n.By=function(){return this.Wy()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=Y().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.Fy(r);return(e?e.getAnalyticsDetails():s()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.Fy(t).getPlayingState()},n.isMuted=function(t){return this.Fy(t).isMuted()},n.userInteracted=function(t){return this.Fy(t).userInteracted()},n.isRollingAd=function(t){return this.Fy(t).isRollingAd()},n.pauseOtherVideos=function(t){this.xy.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Et&&n.video.pause()}))},t}(),Ut=function(t,n){return!!t&&(t.video===n||t.video.element===n)},Lt=function(){function t(t,n){var i=this;this.Jy=t,this.te=t.ampdoc,this.video=n,this.Vy=!0,this.Gy=!1,this.Cn=!1,this.Hy=!1,this.Ee=!1,this.Zy=new mt,this.Zy.onSessionEnd((function(){return Dt(i,"video-session")})),this.$y=new mt,this.$y.onSessionEnd((function(){return Dt(i,"video-session-visible")})),this.Ky=P((function(){return new Jt(i.te.win,i)})),this.Qy=!1,this.Xy=!1,this.uw=null,this.lt=!1,this.aw=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Jy.installAutoplayStyles(),this.fw=qt,this.cw=function(){st(i.video,!1)},this.hw=function(){i.video.pause()},ht(n.element,xt,(function(){return i.videoLoaded()})),ht(n.element,Ot,(function(){return i.lw()})),ht(n.element,"play",(function(){i.aw=!0,Dt(i,Rt)})),ht(n.element,jt,(function(){return i.dw()})),ht(n.element,Mt,(function(){return i.lt=!0})),ht(n.element,_t,(function(){i.lt=!1,i.Jy.pauseOtherVideos(i)})),ht(n.element,"amp:video:tick",(function(t){var n=lt(t),r=n.eventType;r&&i.mw(r,n.vars)})),ht(n.element,St,(function(){i.Hy=!1,Dt(i,"video-ended")})),ht(n.element,At,(function(){i.Hy=!0,Dt(i,"video-ad-start")})),ht(n.element,Tt,(function(){i.Hy=!1,Dt(i,"video-ad-end")})),n.signals().whenSignal(kt).then((function(){return i.pw()})),this.yw=P((function(){var t="firstPlay",n=ct(i.te.win,t,{}),r=i.video.element;$(r).trigger(r,t,n,1)})),this.bw()}var n=t.prototype;return n.dispose=function(){this.Ky().stop()},n.mw=function(t,n){var i,r,e,o=(e=t,(r="__amp:eventType")in(i={})?Object.defineProperty(i,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[r]=e,i);Object.keys(n).forEach((function(t){o["custom_".concat(t)]=n[t]})),Dt(this,"video-hosted-custom",o)},n.bw=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.Vy=!1,t.Cn&&t.video.pause()}))},n.isMuted=function(){return this.lt},n.isPlaybackManaged=function(){return this.Vy},n.pw=function(){this.ww()&&this.Jy.registerForAutoFullscreen(this),this.hasAutoplay&&this.gw()},n.ww=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&z(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},n.dw=function(){this.Cn=!0,this.getPlayingState()==Et&&(this.yw(),this.Jy.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=X(t);if(n&&n.artwork){var r=n.artwork;I(h(r)),r.forEach((function(t){if(t){var n=p(t)?t.src:t;z(i.isProtocolValid(n))}}))}}(u,this.fw),t=this.te.win,n=this.fw,i=this.cw,r=this.hw,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(qt),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Zy.beginSession(),this.Ee&&this.$y.beginSession(),this.aw||Dt(this,Rt)},n.lw=function(){Dt(this,"video-pause"),this.Cn=!1,this.Xy?this.Xy=!1:this.Zy.endSession()},n.videoLoaded=function(){this.Gy=!0,this.uw=at(this.video.element),this.kw(),this.Ky().start(),this.Ee&&this.qw()},n.kw=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.fw=y(this.video.getMetadata()));var t=this.te.win.document;if(!this.fw.artwork||0==this.fw.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=g(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.fw.artwork=[{"src":n}])}if(!this.fw.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.uw.getAttribute("title")||this.uw.getAttribute("aria-label")||t.title;i&&(this.fw.title=i)}}},n.jw=function(){this.Gy&&this.qw()},n.qw=function(){var t=this;this.te.isVisible()&&ut(this.te.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.xw():t.Sw()}))},n.gw=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),ut(this.te.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.Ow()):t.video.showControls()}))},n.Ow=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Yt)){var e=function(t,n){for(var i=pt(n)(wt),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return x(r),i}(0,r),o=[e],u=[ht(r,Ot,(function(){return f(!1)})),ht(r,jt,(function(){return f(!0)})),ht(r,At,(function(){s(!1),n.showControls()})),ht(r,Tt,(function(){s(!0),n.hideControls()})),ht(r,_t,(function(){return Ct(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=pt(t)(bt);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.fw);o.push(a),u.push(ht(a,"click",(function(){return Ct(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Hy&&s(!1),n.signals().whenSignal(Yt).then((function(){t.yw(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){x(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},n.xw=function(){this.Vy&&(this.Ee?(this.$y.beginSession(),st(this.video,!0),this.Qy=!0):(this.Cn&&this.$y.endSession(),this.video.pause(),this.Xy=!0))},n.Sw=function(){this.Ee?this.$y.beginSession():this.Cn&&this.$y.endSession()},n.updateVisibility=function(t){var n=this.Ee;this.Ee=t,t!=n&&this.jw()},n.getPlayingState=function(){return this.Cn?this.Cn&&this.Qy&&!this.userInteracted()?"playing_auto":Et:Pt},n.isRollingAd=function(){return this.Hy},n.userInteracted=function(){return null!=this.video.signals().get(Yt)},n.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([ut(this.te.win),it(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.lt,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),Nt=function(){function t(t,n){var i=this;this.Jy=n,this.te=t,this.Mw=null,this.Tw=null,this.xy=[],this.Aw=[],this.Ew=function(){return i.Pw()},this.Rw=function(t){return i.Yw(t)==Et},this.zw=function(t,n){return i._w(t,n)},this.Cw(),this.Ww()}var n=t.prototype;return n.dispose=function(){this.Aw.forEach((function(t){return t()})),this.Aw.length=0},n.register=function(t){var n=t.video,i=n.element;this.Iw(i)&&(this.xy.push(n),ht(i,Ot,this.Ew),ht(i,jt,this.Ew),ht(i,St,this.Ew),n.signals().whenSignal(Yt).then(this.Ew),this.Pw())},n.Ww=function(){var t=this,n=this.te.getRootNode(),i=function(){return t.Uw()};this.Aw.push(ht(n,"webkitfullscreenchange",i),ht(n,"mozfullscreenchange",i),ht(n,"fullscreenchange",i),ht(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.te.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.Iw=function(t){if("video"==at(t).tagName.toLowerCase())return!0;var n=G(this.te.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.Uw=function(){this.Mw=null},n.Cw=function(){var t=this,n=this.te.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.Aw.push(ht(r,"change",(function(){return t.Lw()})))}this.Aw.push(ht(n,"orientationchange",(function(){return t.Lw()})))},n.Lw=function(){this.isInLandscape()?null!=this.Tw&&this.Nw(this.Tw):this.Mw&&this.Fw(this.Mw)},n.Nw=function(t){var n=G(this.te.win);this.Mw=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.Bw(t).then((function(){return t.fullscreenEnter()}))},n.Fw=function(t){this.Mw=null,this.Bw(t,"center").then((function(){return t.fullscreenExit()}))},n.Bw=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Jw();return this.Dw().then((function(){return it(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return s();var f=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,f)}))},n.Jw=function(){return tt(this.te)},n.Dw=function(){return Q(this.te.win).promise(330)},n.Pw=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.Tw);this.Tw=null;var n=this.xy.filter(this.Rw).map((function(t){return it(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.zw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.Tw=n})):t.Tw}))},n._w=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=tt(this.te),a=Wt(u,i),s=Wt(u,e);return a<s||a>s?a-s:i.top-e.top},n.Yw=function(t){return this.Jy.getPlayingState(t)},t}();function Wt(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function Ft(t){return 10*t*5}var Bt=function(t){return!!t&&!isNaN(t)&&t>1},Jt=function(){function t(t,n){this.Ds=Q(t),this.Vw=n,this.Aw=null,this.Gw=0,this.Hw=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Vw.video.element;this.stop(),this.Aw=this.Aw||[],this.Zw()?this.$w(this.Hw):this.Aw.push(function(n,i,r,e){var o=function(){t.Zw()&&t.$w(t.Hw)},u=ft(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.Aw.push(ht(n,St,(function(){t.Zw()&&t.Kw(100)})))},n.stop=function(){if(this.Aw){for(;this.Aw.length>0;)this.Aw.pop()();this.Hw++}},n.Zw=function(){var t=this.Vw.video,n=t.getDuration();if(!Bt(n))return!1;if(Ft(n)<250){var i=Math.ceil(5);this.Qw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.Qw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];Y().warn.apply(Y(),[It].concat(n))},n.$w=function(t){var n,i=this;if(t==this.Hw){var r=this.Vw,e=this.Ds,o=r.video,u=function(){return i.$w(t)};if(r.getPlayingState()!=Pt){var a=o.getDuration();if(Bt(a)){var s=(n=Ft(a),w(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);I(b(c)),this.Kw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.Kw=function(t){t<=0||this.Gw!=t&&(this.Gw=t,this.Xw(t))},n.Xw=function(t){Dt(this.Vw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function Dt(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),S(r.element,n,t)}))}var Ht=["<iframe frameborder=0 allowfullscreen></iframe>"];new Set(["c","v","a","ad"]);var Vt="amp-minute-media-player",Zt=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(s,t);var r,o,a=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(r);if(o){var u=i(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return e(this,t)});function s(t){var n;return(n=a.call(this,t)).tb=null,n.Kg="",n.Nb=null,n.Qg="",n.Xg="",n.tq="",n.nq="",n.iq="",n.rq="",n._b=null,n.zb=null,n.Bb=null,n.lt=!1,n}var c=s.prototype;return c.preconnectCallback=function(t){K(this.win).url(this.getAmpDoc(),this.eq()),K(this.win).url(this.getAmpDoc(),"https://www.oo-syringe.com",t)},c.buildCallback=function(){this.oq();var t=new f;this._b=t.promise,this.zb=t.resolve},c.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||t==M||"fluid"==t||"intrinsic"==t}(t)||t==M},c.oq=function(){var t=this.element;this.Kg=z(t.getAttribute("data-content-type"),"The data-content-type must be specified for <amp-minute-media-player> %s",t),"semantic"!=this.Kg?this.Qg=z(t.getAttribute("data-content-id"),"The data-content-id must be specified for %s data-content-type in <amp-minute-media-player> %s",this.Kg,t):this.uq()},c.uq=function(){var t=this.element;this.tq=t.getAttribute("data-scanned-element")||"",this.nq=t.getAttribute("data-tags")||"",this.iq=t.getAttribute("data-minimum-date-factor")||"",this.Xg=t.getAttribute("data-scanned-element-type")||"",this.rq=t.getAttribute("data-scoped-keywords")||""},c.aq=function(t){if(function(t,n,i){return!(!n||t.source!=n.contentWindow)&&"https://www.oo-syringe.com"==t.origin}(t,this.tb)){var n=lt(t);if((i=n)&&(p(i)||i.startsWith("{"))){var i,r,e,o=p(r=n)?r:g(r);if(null!=o&&(function(t,n,i){if(null==i[n])return!1;var r=i[n];(h(r)?r:[r]).forEach((function(n){S(t,n)}))}(this.element,o.event,{"ready":xt,"playing":jt,"pause":Ot,"ended":[St,Ot],"ads-ad-started":At,"ads-ad-ended":Tt}),"mute"===o.event)){var u=o.value;if(this.lt==u)return;return this.lt=u,void S(this.element,(e=this.lt,e?Mt:_t))}}}},c.eq=function(){return"https://www.oo-syringe.com/prod/AMP/minute-media-player.html",function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}("https://www.oo-syringe.com/prod/AMP/minute-media-player.html",function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=l(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}({"content_type":this.Kg||void 0,"content_id":this.Qg||void 0,"scanned_element_type":this.Xg||void 0,"scanned_element":this.tq||void 0,"tags":this.nq||void 0,"minimum_date_factor":this.iq||void 0,"scoped_keywords":this.rq||void 0,"player_id":this.Nb||void 0}))},c.layoutCallback=function(){var t,n,i,r,e,o=this,a=this.element,s=function(t,n,i,r){var e=t.element,o=pt(e)(Ht);return function(t,n,i,r){for(var e,o=u(l(["referrerpolicy"]),!0);!(e=o()).done;){var a=e.value,s=n.getAttribute(a);null!==s&&i.setAttribute(a,s)}}(0,t.element,o),o.src=X(e).assertHttpsUrl(n,e),function(t,n){t.classList.add("i-amphtml-fill-content")}(o),e.appendChild(o),o}(this,this.eq());this.tb=s,this.Bb=ht(this.win,"message",(function(t){return o.aq(t)})),n=this.element,i="video-manager",r=zt,function(t,n,i,r,e,o){var u=J(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&B(t,i))}(F(e=W(n)),e,i,r),(t=this.element,L(t,"video-manager")).register(this);var f=this.loadPromise(this.tb).then((function(){S(a,xt)}));return this.zb(f),f},c.unlayoutCallback=function(){this.tb&&(x(this.tb),this.tb=null),this.Bb&&this.Bb();var t=new f;return this._b=t.promise,this.zb=t.resolve,!0},c.Vb=function(t){var n=this;this._b.then((function(){n.tb&&n.tb.contentWindow&&n.tb.contentWindow.postMessage(t,"https://www.oo-syringe.com")}))},c.supportsPlatform=function(){return!0},c.isInteractive=function(){return!0},c.getCurrentTime=function(){return 0},c.getDuration=function(){return 0},c.getPlayedRanges=function(){return[]},c.play=function(t){this.Vb("play")},c.pause=function(){this.Vb("pause")},c.mute=function(){this.Vb("mute")},c.unmute=function(){this.Vb("unmute")},c.showControls=function(){},c.hideControls=function(){},c.getMetadata=function(){},c.preimplementsAutoFullscreen=function(){return!1},c.preimplementsMediaSessionAPI=function(){return!1},c.fullscreenEnter=function(){var t,n;this.tb&&(n=(t=this.tb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)},c.fullscreenExit=function(){this.tb&&function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)},c.isFullscreen=function(){return!!this.tb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.tb)},c.seekTo=function(t){this.user().error(Vt,"`seekTo` not supported.")},s}(t.BaseElement);t.registerElement(Vt,Zt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-minute-media-player-0.1.js.map