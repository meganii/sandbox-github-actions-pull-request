;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-brightcove",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function i(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.push.apply(i,r)}return i}function r(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(i){t(n,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function e(n,t){return(e=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=n[i];return r}function f(n,t){var i="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(i)return(i=i.call(n)).next.bind(i);if(Array.isArray(n)||(i=function(n,t){if(n){if("string"==typeof n)return s(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){i&&(n=i);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c=Object.prototype,h=c.hasOwnProperty,l=c.toString;function v(n){return"[object Object]"===l.call(n)}function d(n){var t=Object.create(null);return n&&Object.assign(t,n),t}var p=Array.isArray;function m(n){return p(n)?n:[n]}function y(n){return"number"==typeof n&&isFinite(n)}function b(n,t,i,r,e,o,u,a,s,f,c){return n}function w(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}function g(n){return(n.ownerDocument||n).defaultView}var j={bubbles:!0,cancelable:!0};function O(n){var t;null===(t=n.parentElement)||void 0===t||t.removeChild(n)}function k(n,t){n.insertBefore(t,n.firstChild)}function q(n){return n.parent&&n.parent!=n}function x(n,t,i,r){var e=i||{};b(n.ownerDocument);var o=n.ownerDocument.createEvent("Event");o.data=e;var u=r||j,a=u.bubbles,s=u.cancelable;o.initEvent(t,a,s),n.dispatchEvent(o)}function S(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var i=n.message,r=n.stack,e=new Error(i);for(var o in n)e[o]=n[o];return e.stack=r,e}function P(n){for(var t,i=null,r="",e=f(arguments,!0);!(t=e()).done;){var o=t.value;o instanceof Error&&!i?i=S(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function M(n){var t,i;null===(t=(i=self).__AMP_REPORT_ERROR)||void 0===t||t.call(i,n)}function R(n){var t=P.apply(null,arguments);setTimeout((function(){throw M(t),t}))}function T(n){try{for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return n.apply(null,i)}catch(n){R(n)}}function A(n){var t=P.apply(null,arguments);return t.expected=!0,t}function E(n){var t=!1,i=null,r=n;return function(){if(!t){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];i=r.apply(self,e),t=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I,Y=self.__AMP_LOG;function C(n,t){throw new Error("failed to call initLogConstructor")}function U(n){return Y.user||(Y.user=z()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(Y.user.win,n)?Y.userForEmbed||(Y.userForEmbed=z()):Y.user}function z(n){return C()}function _(n,t,i,r,e,o,u,a,s,f,c){return n}function W(n,t,i,r,e,o,u,a,s,f,c){return U().assert(n,t,i,r,e,o,u,a,s,f,c)}function N(){return I||(I=Promise.resolve(void 0))}var J=function(){var n=this;this.promise=new Promise((function(t,i){n.resolve=t,n.reject=i}))};function L(n){return new Promise((function(t){t(n())}))}function B(n,t){return $(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function F(n,t){return $(Z(H(n)),t)}function D(n,t){var i=Z(H(n));return Q(i,t)?$(i,t):null}function V(n,t){return G(Z(n),t)}function H(n){return n.nodeType?(t=g(n),B(t,"ampdoc")).getAmpDoc(n):n;var t}function Z(n){var t=H(n);return t.isSingleDoc()?t.win:t}function $(n,t){_(Q(n,t));var i=K(n)[t];return i.obj||(_(i.ctor),_(i.context),i.obj=new i.ctor(i.context),_(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function G(n,t){var i=K(n)[t];return i?i.promise?i.promise:($(n,t),i.promise=Promise.resolve(i.obj)):null}function K(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}function Q(n,t){var i=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!i||!i.ctor)}var X=function(n){return D(n,"action")},nn=function(n){return B(n,"platform")},tn=function(n){return $(n,"timer")},rn=function(n){return function(n,t,i,r){var e=V(n,t);if(e)return e;var o=H(n);return o.whenExtensionsKnown().then((function(){var n=o.getExtensionVersion(i);return n?B(o.win,"extensions").waitForExtension(i,n):null})).then((function(i){return i?function(n,t){return function(n,t){var i=G(n,t);if(i)return i;var r,e,o,u,a=K(n);return a[t]=(e=(r=new J).promise,o=r.reject,u=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:u,reject:o,context:null,ctor:null}),a[t].promise}(Z(n),t)}(n,t):null}))}(n,"consentPolicyManager","amp-consent")},en=function(n){return D(n,"url")},on=function(n){return F(n,"viewport")};new Set(["c","v","a","ad"]);var un="registered",an="load",sn="playing",fn="pause",cn="ended",hn="muted",ln="unmuted",vn="ad_start",dn="ad_end",pn="playing_manual",mn="paused",yn="video-play",bn="user-interacted";function wn(n){n.signals().signal(bn)}var gn={"playing":sn,"pause":fn,"ended":cn,"ads-ad-started":vn,"ads-ad-ended":dn,"loadedmetadata":"loadedmetadata"};function jn(n){return"ref:"===n.substring(0,4)?"ref:".concat(encodeURIComponent(n.substring(4))):encodeURIComponent(n)}var On,kn=["Webkit","webkit","Moz","moz","ms","O","o"],qn={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function xn(n,t,i,r,e){var o=function(n,t,i){if(t.startsWith("--"))return t;On||(On=d());var r=On[t];if(!r||i){if(r=t,void 0===n[t]){var e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var i=0;i<kn.length;i++){var r=kn[i]+t;if(void 0!==n[r])return r}return""}(n,e);void 0!==n[o]&&(r=o)}i||(On[t]=r)}return r}(n.style,t,e);if(o){var u,a=r?i+r:i;n.style.setProperty((u=o.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),kn.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),a)}}var Sn=/vertical/,Pn=new WeakMap,Mn=new WeakMap,Rn=new WeakMap;function Tn(n){var t=Pn.get(n);return t||(t=new n.ResizeObserver(An),Pn.set(n,t)),t}function An(n){for(var t=new Set,i=n.length-1;i>=0;i--){var r=n[i],e=r.target;if(!t.has(e)){t.add(e);var o=Mn.get(e);if(o){Rn.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;En(a.type,s,r)}}}}}function En(n,t,i){if(0==n){var r=i.contentRect,e=r.height;T(t,{width:r.width,height:e})}else if(1==n){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=g(f),h=Sn.test(function(n,t){return n.getComputedStyle(t)||qn}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}T(t,o)}}var In,Yn,Cn,Un=function(){function n(n){this.zn=n,this.Cn=!1,this.xn=!1,this.En=this.En.bind(this)}var t=n.prototype;return t.updatePlaying=function(n){n!==this.Cn&&(this.Cn=n,n?(this.xn=!1,function(n,t,i){var r=n.ownerDocument.defaultView;if(r){var e=Mn.get(n);if(e||(e=[],Mn.set(n,e),Tn(r).observe(n)),!e.some((function(n){return n.callback===i&&1===n.type}))){e.push({type:1,callback:i});var o=Rn.get(n);o&&setTimeout((function(){return En(1,i,o)}))}}}(this.zn,0,this.En)):function(n,t){!function(n,t,i){var r=Mn.get(n);if(r&&(function(n,t){for(var r=[],e=0,o=0;o<n.length;o++){var u=n[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(n[e]=u),e++)}var a;e<n.length&&(n.length=e)}(r),0==r.length)){Mn.delete(n),Rn.delete(n);var e=n.ownerDocument.defaultView;e&&Tn(e).unobserve(n)}}(n,0,t)}(this.zn,this.En))},t.En=function(n){var t=n.blockSize,i=n.inlineSize>0&&t>0;if(i!==this.xn){this.xn=i;var r=this.zn;i||r.pause()}},n}();function zn(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=q(t)&&(r||e)?t.document:void 0;return new t.IntersectionObserver(n,{threshold:o,root:u,rootMargin:e})}function _n(n){var t,i=null===(t=In)||void 0===t?void 0:t.get(n);if(!i){var r=function(n){In||(In=new WeakMap,Yn=new WeakMap),b(Yn);var t=Yn.get(n);return t||(t=zn((function(n){for(var i=new Set,r=n.length-1;r>=0;r--){var e,o=n[r].target;i.has(o)||(i.add(o),b(t),t.unobserve(o),b(In),null===(e=In.get(o))||void 0===e||e.resolve(n[r]),In.delete(o))}}),n,{needsRootBounds:!0}),Yn.set(n,t)),t}(g(n));b(In),r.observe(n),i=new J,In.set(n,i)}return i.promise}function Wn(n){return null==n.__AMP_AUTOPLAY&&(n.__AMP_AUTOPLAY=function(n){var t,i=n.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(n,t){for(var i in t)xn(n,i,t[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),t=i,L((function(){return t.play()})).catch((function(){})),Promise.resolve(!i.paused)}(n)),n.__AMP_AUTOPLAY}function Nn(n){return n.querySelector("video, iframe")}function Jn(n,t){var i=L((function(){return n.play(!!t)}));return i.catch((function(n){!function(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];M(A.apply(null,i))}("TRYPLAY",n)})),i}function Ln(n,t,i,r){var e=n,o=i,u=function(n){try{return o(n)}catch(n){var t,i;throw null===(t=(i=self).__AMP_REPORT_ERROR)||void 0===t||t.call(i,n),n}},a=function(){if(void 0!==Cn)return Cn;Cn=!1;try{var n={get capture(){return Cn=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return Cn}(),s=!(null==r||!r.capture);return e.addEventListener(t,u,a?r:s),function(){null==e||e.removeEventListener(t,u,a?r:s),o=null,e=null,u=null}}function Bn(n,t,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof n.CustomEvent)return new n.CustomEvent(t,e);var o=n.document.createEvent("CustomEvent");return o.initCustomEvent(t,!!e.bubbles,!!e.cancelable,i),o}function Fn(n,t,i,r){return Ln(n,t,i,r)}function Dn(n){return n.data}new WeakMap,new WeakMap;var Vn,Hn=function(){function n(){this.Nt=null}var t=n.prototype;return t.add=function(n){var t=this;return this.Nt||(this.Nt=[]),this.Nt.push(n),function(){t.remove(n)}},t.remove=function(n){var t,i,r;this.Nt&&(i=n,-1!=(r=(t=this.Nt).indexOf(i))&&t.splice(r,1))},t.removeAll=function(){this.Nt&&(this.Nt.length=0)},t.fire=function(n){if(this.Nt)for(var t,i=f(this.Nt.slice(),!0);!(t=i()).done;)(0,t.value)(n)},t.getHandlerCount=function(){var n,t;return null!==(n=null===(t=this.Nt)||void 0===t?void 0:t.length)&&void 0!==n?n:0},n}(),Zn=function(){function n(){this.ky=!1,this.qy=new Hn}var t=n.prototype;return t.onSessionEnd=function(n){this.qy.add(n)},t.beginSession=function(){this.ky=!0},t.endSession=function(){this.ky&&this.qy.fire(),this.ky=!1},t.isSessionActive=function(){return this.ky},n}();function $n(n){var t=n.ownerDocument||n;return Vn&&Vn.ownerDocument===t||(Vn=t.createElement("div")),Gn}function Gn(n){return function(n,t){if(b(1===t.length),b(Array.isArray(t)||(r=t,h.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(n){return t[0]}});n.innerHTML=i.createHTML("ignored")}else n.innerHTML=t[0];var r,e=n.firstElementChild;return b(e),b(!e.nextElementSibling),n.removeChild(e),e}(Vn,n)}var Kn=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Qn=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Xn(n,t,i){if(t[i])return t[i];var r=n.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(t[i]=r,r):null}var nt={"title":"","artist":"","album":"","artwork":[{"src":""}]},tt="video-manager",it=function(){function n(n){var t=this;this.ampdoc=n,this.installAutoplayStyles=E((function(){return function(n){!function(n,t,i,r,e){var o=n.getHeadNode();!function(n,t,i,r){var e=n.__AMP_CSS_SM;e||(e=n.__AMP_CSS_SM=d());var o="amp-extension=".concat(r);if(o){var u=Xn(n,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==t&&(u.textContent=t),u}var a=(n.ownerDocument||n).createElement("style");a.textContent=t;a.setAttribute("amp-extension",r),function(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;n.insertBefore(t,r)}else k(n,t)}(n,a,Xn(n,e,"amp-runtime")),o&&(e[o]=a)}(o,function(n,t){var i=n.__AMP_CSS_TR;return i?i(t):t}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(n)}(t.ampdoc)})),this.xy=null,this.Ry=null,this.Yy=null,this.Ds=tn(n.win),this.zy=X(n.getHeadNode()),this._y=function(){return t.Cy()},this.Wy=E((function(){return new ot(t.ampdoc,t)})),this.Ds.delay(this._y,1e3)}var t=n.prototype;return t.dispose=function(){if(this.Wy().dispose(),this.Ry.disconnect(),this.Ry=null,this.xy)for(var n=0;n<this.xy.length;n++)this.xy[n].dispose()},t.Cy=function(){for(var n=0;n<this.xy.length;n++){var t=this.xy[n];t.getPlayingState()!==mn&&(ct(t,"video-seconds-played"),this.Uy(t))}this.Ds.delay(this._y,1e3)},t.Uy=function(n){var t="timeUpdate",i=n.video.getCurrentTime(),r=n.video.getDuration();if(y(i)&&y(r)&&r>0){var e=i/r,o=Bn(this.ampdoc.win,"".concat(tt,".").concat(t),{"time":i,"percent":e});this.zy.trigger(n.video.element,t,o,1)}},t.register=function(n){var t=this;_(n);var i=n;if(this.Ly(n),n.supportsPlatform()&&!this.Ny(n)){this.Ry||(this.Ry=zn((function(n){return n.forEach((function(n){var i=n.isIntersecting,r=n.target;t.Fy(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.Ry.observe(i.element),Fn(i.element,"reloaded",(function(){return r.videoLoaded()})),this.xy=this.xy||[];var r=new et(this,n);this.xy.push(r);var e=r.video.element;x(e,un),function(n){n.classList.add("i-amphtml-media-component")}(e),n.signals().signal(un),e.classList.add("i-amphtml-video-interface")}},t.Ly=function(n){i("play",(function(){return Jn(n,!1)})),i("pause",(function(){return n.pause()})),i("mute",(function(){return n.mute()})),i("unmute",(function(){return n.unmute()}));var t=function(){return n.fullscreenEnter()};function i(t,i){n.registerAction(t,(function(){wn(n),i()}),1)}i("fullscreenenter",t),i("fullscreen",t)},t.Ny=function(n){if(rt(this.Yy,n))return this.Yy;for(var t=0;this.xy&&t<this.xy.length;t++){var i=this.xy[t];if(rt(i,n))return this.Yy=i,i}return null},t.Fy=function(n){return _(this.Ny(n))},t.registerForAutoFullscreen=function(n){this.Wy().register(n)},t.By=function(){return this.Wy()},t.getVideoStateProperty=function(n,t){var i=this.ampdoc.getRootNode(),r=U().assertElement(i.getElementById(n),'Could not find an element with id="'.concat(n,'" for VIDEO_STATE')),e=this.Fy(r);return(e?e.getAnalyticsDetails():N()).then((function(n){return n?n[t]:""}))},t.getPlayingState=function(n){return this.Fy(n).getPlayingState()},t.isMuted=function(n){return this.Fy(n).isMuted()},t.userInteracted=function(n){return this.Fy(n).userInteracted()},t.isRollingAd=function(n){return this.Fy(n).isRollingAd()},t.pauseOtherVideos=function(n){this.xy.forEach((function(t){t.isPlaybackManaged()&&t!==n&&t.getPlayingState()==pn&&t.video.pause()}))},n}(),rt=function(n,t){return!!n&&(n.video===t||n.video.element===t)},et=function(){function n(n,t){var i=this;this.Jy=n,this.te=n.ampdoc,this.video=t,this.Vy=!0,this.Gy=!1,this.Cn=!1,this.Hy=!1,this.Ee=!1,this.Zy=new Zn,this.Zy.onSessionEnd((function(){return ct(i,"video-session")})),this.$y=new Zn,this.$y.onSessionEnd((function(){return ct(i,"video-session-visible")})),this.Ky=E((function(){return new ft(i.te.win,i)})),this.Qy=!1,this.Xy=!1,this.uw=null,this.lt=!1,this.aw=!1,this.hasAutoplay=t.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Jy.installAutoplayStyles(),this.fw=nt,this.cw=function(){Jn(i.video,!1)},this.hw=function(){i.video.pause()},Fn(t.element,an,(function(){return i.videoLoaded()})),Fn(t.element,fn,(function(){return i.lw()})),Fn(t.element,"play",(function(){i.aw=!0,ct(i,yn)})),Fn(t.element,sn,(function(){return i.dw()})),Fn(t.element,hn,(function(){return i.lt=!0})),Fn(t.element,ln,(function(){i.lt=!1,i.Jy.pauseOtherVideos(i)})),Fn(t.element,"amp:video:tick",(function(n){var t=Dn(n),r=t.eventType;r&&i.mw(r,t.vars)})),Fn(t.element,cn,(function(){i.Hy=!1,ct(i,"video-ended")})),Fn(t.element,vn,(function(){i.Hy=!0,ct(i,"video-ad-start")})),Fn(t.element,dn,(function(){i.Hy=!1,ct(i,"video-ad-end")})),t.signals().whenSignal(un).then((function(){return i.pw()})),this.yw=E((function(){var n="firstPlay",t=Bn(i.te.win,n,{}),r=i.video.element;X(r).trigger(r,n,t,1)})),this.bw()}var i=n.prototype;return i.dispose=function(){this.Ky().stop()},i.mw=function(n,i){var r=t({},"__amp:eventType",n);Object.keys(i).forEach((function(n){r["custom_".concat(n)]=i[n]})),ct(this,"video-hosted-custom",r)},i.bw=function(){var n=this;this.video.signals().whenSignal("playback-delegated").then((function(){n.Vy=!1,n.Cn&&n.video.pause()}))},i.isMuted=function(){return this.lt},i.isPlaybackManaged=function(){return this.Vy},i.pw=function(){this.ww()&&this.Jy.registerForAutoFullscreen(this),this.hasAutoplay&&this.gw()},i.ww=function(){var n=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!n.hasAttribute("rotate-to-fullscreen"))&&W(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",n)},i.dw=function(){this.Cn=!0,this.getPlayingState()==pn&&(this.yw(),this.Jy.pauseOtherVideos(this));var n,t,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(n,t){var i=en(n);if(t&&t.artwork){var r=t.artwork;_(p(r)),r.forEach((function(n){if(n){var t=v(n)?n.src:n;W(i.isProtocolValid(t))}}))}}(u,this.fw),n=this.te.win,t=this.fw,i=this.cw,r=this.hw,"mediaSession"in(e=n.navigator)&&n.MediaMetadata&&(e.mediaSession.metadata=new n.MediaMetadata(nt),e.mediaSession.metadata=new n.MediaMetadata(t),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Zy.beginSession(),this.Ee&&this.$y.beginSession(),this.aw||ct(this,yn)},i.lw=function(){ct(this,"video-pause"),this.Cn=!1,this.Xy?this.Xy=!1:this.Zy.endSession()},i.videoLoaded=function(){this.Gy=!0,this.uw=Nn(this.video.element),this.kw(),this.Ky().start(),this.Ee&&this.qw()},i.kw=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.fw=d(this.video.getMetadata()));var n=this.te.win.document;if(!this.fw.artwork||0==this.fw.artwork.length){var t=function(n){var t=n.querySelector('script[type="application/ld+json"]');if(t){var i=w(t.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(n)||function(n){var t=n.querySelector('meta[property="og:image"]');return t?t.getAttribute("content"):void 0}(n)||function(n){var t=n.querySelector('link[rel="shortcut icon"]')||n.querySelector('link[rel="icon"]');return t?t.getAttribute("href"):void 0}(n);t&&(this.fw.artwork=[{"src":t}])}if(!this.fw.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.uw.getAttribute("title")||this.uw.getAttribute("aria-label")||n.title;i&&(this.fw.title=i)}}},i.jw=function(){this.Gy&&this.qw()},i.qw=function(){var n=this;this.te.isVisible()&&Wn(this.te.win).then((function(t){n.hasAutoplay&&!n.userInteracted()&&t?n.xw():n.Sw()}))},i.gw=function(){var n=this;this.video.isInteractive()&&this.video.hideControls(),Wn(this.te.win).then((function(t){t||!n.video.isInteractive()?(n.video.mute(),n.Ow()):n.video.showControls()}))},i.Ow=function(){var n=this,t=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(bn)){var e=function(n,t){for(var i=$n(t)(Qn),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return O(r),i}(0,r),o=[e],u=[Fn(r,fn,(function(){return f(!1)})),Fn(r,sn,(function(){return f(!0)})),Fn(r,vn,(function(){s(!1),t.showControls()})),Fn(r,dn,(function(){s(!0),t.hideControls()})),Fn(r,ln,(function(){return wn(t)}))];if(t.isInteractive()){t.hideControls();var a=function(n,t){var i=$n(n)(Kn);return t&&t.title&&i.setAttribute("aria-label",t.title),i}(r,this.fw);o.push(a),u.push(Fn(a,"click",(function(){return wn(t)})))}t.mutateElementSkipRemeasure((function(){o.forEach((function(n){r.appendChild(n)}))})),this.Hy&&s(!1),t.signals().whenSignal(bn).then((function(){n.yw(),t.isInteractive()&&t.showControls(),t.unmute(),u.forEach((function(n){n()})),t.mutateElementSkipRemeasure((function(){o.forEach((function(n){O(n)}))}))}))}function s(n){t.mutateElementSkipRemeasure((function(){o.forEach((function(t){!function(n,t){void 0===t&&(t=n.hasAttribute("hidden")),t?n.removeAttribute("hidden"):n.setAttribute("hidden","")}(t,n)}))}))}function f(n){t.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",n)}))}},i.xw=function(){this.Vy&&(this.Ee?(this.$y.beginSession(),Jn(this.video,!0),this.Qy=!0):(this.Cn&&this.$y.endSession(),this.video.pause(),this.Xy=!0))},i.Sw=function(){this.Ee?this.$y.beginSession():this.Cn&&this.$y.endSession()},i.updateVisibility=function(n){var t=this.Ee;this.Ee=n,n!=t&&this.jw()},i.getPlayingState=function(){return this.Cn?this.Cn&&this.Qy&&!this.userInteracted()?"playing_auto":pn:mn},i.isRollingAd=function(){return this.Hy},i.userInteracted=function(){return null!=this.video.signals().get(bn)},i.getAnalyticsDetails=function(){var n=this,t=this.video;return Promise.all([Wn(this.te.win),_n(t.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=n.hasAutoplay&&r,s=t.getPlayedRanges(),f=s.reduce((function(n,t){return n+t[1]-t[0]}),0);return{"autoplay":a,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":o,"id":t.element.id,"muted":n.lt,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":n.getPlayingState(),"width":u}}))},n}(),ot=function(){function n(n,t){var i=this;this.Jy=t,this.te=n,this.Mw=null,this.Tw=null,this.xy=[],this.Aw=[],this.Ew=function(){return i.Pw()},this.Rw=function(n){return i.Yw(n)==pn},this.zw=function(n,t){return i._w(n,t)},this.Cw(),this.Ww()}var t=n.prototype;return t.dispose=function(){this.Aw.forEach((function(n){return n()})),this.Aw.length=0},t.register=function(n){var t=n.video,i=t.element;this.Iw(i)&&(this.xy.push(t),Fn(i,fn,this.Ew),Fn(i,sn,this.Ew),Fn(i,cn,this.Ew),t.signals().whenSignal(bn).then(this.Ew),this.Pw())},t.Ww=function(){var n=this,t=this.te.getRootNode(),i=function(){return n.Uw()};this.Aw.push(Fn(t,"webkitfullscreenchange",i),Fn(t,"mozfullscreenchange",i),Fn(t,"fullscreenchange",i),Fn(t,"MSFullscreenChange",i))},t.isInLandscape=function(){return(n=this.te.win).screen&&"orientation"in n.screen?n.screen.orientation.type.startsWith("landscape"):90==Math.abs(n.orientation);var n},t.Iw=function(n){if("video"==Nn(n).tagName.toLowerCase())return!0;var t=nn(this.te.win);return!t.isIos()&&!t.isSafari()||function(n){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[n.tagName.toLowerCase()]}(n)},t.Uw=function(){this.Mw=null},t.Cw=function(){var n=this,t=this.te.win,i=t.screen;if(i&&"orientation"in i){var r=i.orientation;this.Aw.push(Fn(r,"change",(function(){return n.Lw()})))}this.Aw.push(Fn(t,"orientationchange",(function(){return n.Lw()})))},t.Lw=function(){this.isInLandscape()?null!=this.Tw&&this.Nw(this.Tw):this.Mw&&this.Fw(this.Mw)},t.Nw=function(n){var t=nn(this.te.win);this.Mw=n,t.isAndroid()&&t.isChrome()?n.fullscreenEnter():this.Bw(n).then((function(){return n.fullscreenEnter()}))},t.Fw=function(n){this.Mw=null,this.Bw(n,"center").then((function(){return n.fullscreenExit()}))},t.Bw=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=n.element,r=this.Jw();return this.Dw().then((function(){return _n(i)})).then((function(n){var e=n.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return N();var s=t||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},t.Jw=function(){return on(this.te)},t.Dw=function(){return tn(this.te.win).promise(330)},t.Pw=function(){var n=this;if(this.isInLandscape())return Promise.resolve(this.Tw);this.Tw=null;var t=this.xy.filter(this.Rw).map((function(n){return _n(n.element)}));return Promise.all(t).then((function(t){var i=t.sort(n.zw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(t){return n.Tw=t})):n.Tw}))},t._w=function(n,t){var i=n.boundingClientRect,r=n.intersectionRatio,e=t.boundingClientRect,o=r-t.intersectionRatio;if(Math.abs(o)>.1)return o;var u=on(this.te),a=ut(u,i),s=ut(u,e);return a<s||a>s?a-s:i.top-e.top},t.Yw=function(n){return this.Jy.getPlayingState(n)},n}();function ut(n,t){var i=t.top+t.height/2,r=n.getSize().height/2;return Math.abs(i-r)}function at(n){return 10*n*5}var st=function(n){return!!n&&!isNaN(n)&&n>1},ft=function(){function n(n,t){this.Ds=tn(n),this.Vw=t,this.Aw=null,this.Gw=0,this.Hw=0}var t=n.prototype;return t.start=function(){var n=this,t=this.Vw.video.element;this.stop(),this.Aw=this.Aw||[],this.Zw()?this.$w(this.Hw):this.Aw.push(function(t,i,r,e){var o=function(){n.Zw()&&n.$w(n.Hw)},u=Ln(t,"loadedmetadata",(function(n){try{o(n)}finally{o=null,u()}}),void 0);return u}(t)),this.Aw.push(Fn(t,cn,(function(){n.Zw()&&n.Kw(100)})))},t.stop=function(){if(this.Aw){for(;this.Aw.length>0;)this.Aw.pop()();this.Hw++}},t.Zw=function(){var n=this.Vw.video,t=n.getDuration();if(!st(t))return!1;if(at(t)<250){var i=Math.ceil(5);this.Qw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",n.element)}return!0},t.Qw=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];U().warn.apply(U(),[tt].concat(t))},t.$w=function(n){var t,i=this;if(n==this.Hw){var r=this.Vw,e=this.Ds,o=r.video,u=function(){return i.$w(n)};if(r.getPlayingState()!=mn){var a=o.getDuration();if(st(a)){var s=(t=at(a),b(!0),Math.min(Math.max(t,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);_(y(c)),this.Kw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},t.Kw=function(n){n<=0||this.Gw!=n&&(this.Gw=n,this.Xw(n))},t.Xw=function(n){ct(this.Vw,"video-percentage-played",{"normalizedPercentage":n.toString()})},n}();function ct(n,t,i){var r=n.video;n.getAnalyticsDetails().then((function(n){i&&Object.assign(n,i),x(r.element,t,n)}))}var ht=["<iframe frameborder=0 allowfullscreen></iframe>"],lt="amp-brightcove",vt=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&e(n,t)}(s,n);var t,i,u=(t=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=o(t);if(i){var e=o(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return a(this,n)});function s(n){var t;return(t=u.call(this,n)).tb=null,t.Op=!1,t.lt=!1,t.vk=null,t.Af=null,t.aj=[],t.sj=!1,t._b=null,t.zb=null,t.fj=null,t.Bb=null,t.Nb=null,t.cj=null,t.hj=null,t.lj=null,t.vj=null,t.Qn=new Un(t.element),t}var c=s.prototype;return c.preconnectCallback=function(){var n;(n=this.win,B(n,"preconnect")).url(this.getAmpDoc(),"https://players.brightcove.net")},c.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},c.buildCallback=function(){var n=this;this.cj=D(this.element,"url-replace");var t=new J;this._b=t.promise,this.zb=t.resolve,this.fj=tn(window).delay((function(){U().warn(lt,"Did not receive ready callback from player %s. Ensure it has the videojs-amp-support plugin.",n.Nb)}),3e3)},c.dj=function(){var t,i,r=this,e=n.prototype.getConsentPolicy.call(this),o=e?function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return rn(n).then((function(n){return n?n.whenPolicyResolved(t):null}))}(this.element,e):Promise.resolve(null),u=e?function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return rn(n).then((function(n){return n?n.getConsentStringInfo(t):null}))}(this.element,e):Promise.resolve(null),a=e?(t=this.element,i=e,rn(t).then((function(n){return n?n.getMergedSharedData(i):null}))):Promise.resolve(null);return Promise.all([o,a,u]).then((function(n){r.hj=n[0],r.lj=n[1],r.vj=n[2]}))},c.layoutCallback=function(){var n=this;return this.dj().then((function(){return n.tb=(t=n,i=n.sk(),e=$n(r=t.element)(ht),function(n,t,i,r){for(var e,o=f(m(["referrerpolicy"]),!0);!(e=o()).done;){var u=e.value,a=t.getAttribute(u);null!==a&&i.setAttribute(u,a)}}(0,t.element,e),e.src=en(r).assertHttpsUrl(i,r),function(n,t){n.classList.add("i-amphtml-fill-content")}(e),r.appendChild(e),e),n.Bb=Fn(n.win,"message",(function(t){return n.uj(t)})),n.loadPromise(n.tb).then((function(){return n._b}));var t,i,r,e}))},c.Vb=function(n,t){var i=this;this._b.then((function(){i.tb&&i.tb.contentWindow&&i.tb.contentWindow.postMessage(JSON.stringify({"command":n,"args":t}),"https://players.brightcove.net")}))},c.uj=function(n){var t=this.element;if(n.source==this.tb.contentWindow){var i=Dn(n);if((e=i)&&(v(e)||e.startsWith("{"))){var e,o,u=v(o=i)?o:w(o);if(null!=u){var a=u.event;if(a){switch(a){case"ready":this.pj(u);break;case"playing":this.Op=!0,this.Qn.updatePlaying(!0);break;case"pause":case"ended":this.Op=!1,this.Qn.updatePlaying(!1)}var s;if(u.ct&&(this.vk=u.ct),u.pr&&(this.aj=u.pr),u.dur&&(this.Af=u.dur),!function(n,t,i){if(null==i[t])return!1;var r=i[t];return(p(r)?r:[r]).forEach((function(t){x(n,t)})),!0}(t,a,r({"ready":an},gn))&&"volumechange"===a){var f=u.muted;if(null==f||this.lt==f)return;return this.lt=f,void x(t,(s=this.lt,s?hn:ln))}}}}}},c.pj=function(n){this.sj=!0,tn(this.win).cancel(this.fj);var t,i,r,e,o=this.element;i="video-manager",r=it,function(n,t,i,r,e,o){var u=K(n),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=t,a.sharedInstance=!1,a.resolve&&$(n,i))}(Z(e=H(o)),e,i,r),(t=o,F(t,"video-manager")).register(this),this.zb(this.tb),(Y.dev||(Y.dev=C())).info(lt,"Player %s ready. Brightcove Player version: %s AMP Support version: %s",this.Nb,n.bcVersion,n.ampSupportVersion)},c.sk=function(){var n=this.element,t=W(n.getAttribute("data-account"),"The data-account attribute is required for <amp-brightcove> %s",n);this.Nb=n.getAttribute("data-player")||n.getAttribute("data-player-id")||"default";var i={};this.hj&&(i.ampInitialConsentState=this.hj),this.lj&&(i.ampConsentSharedData=JSON.stringify(this.lj)),this.vj&&(i.ampInitialConsentValue=this.vj),n.setAttribute("data-param-playsinline","true"),n.removeAttribute("data-param-autoplay");var e=n.dataset,o=e.embed,u=void 0===o?"default":o,a=e.playlistId,s=e.referrer,f=e.videoId;return function(n,t,i,e,o,u,a){var s="";return e?s="&playlistId="+jn(e):o&&(s="&videoId="+jn(o)),function(n,t,i){if(!t)return n;var r=n.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(t):"?".concat(t))+(r[1]?"#".concat(r[1]):"")}("https://players.brightcove.net/".concat(encodeURIComponent(n))+"/".concat(encodeURIComponent(t))+"_".concat(encodeURIComponent(i),"/index.html")+"?amp=1"+s,function(n){var t,i,r=[];for(var e in n){var o=n[e];if(null!=o){o=m(o);for(var u=0;u<o.length;u++)r.push((t=e,i=o[u],"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(r(r({},a),{},{referrer:u,playsinline:!0,autoplay:void 0})))}(t,this.Nb,u,a,f,null!=s?this.cj.expandUrlSync(s):s,r(r({},i),function(n,t,i){var r=n.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(n)))},c.mutatedAttributesCallback=function(n){var t=n["data-account"],i=n["data-player"]||n["data-player-id"],r=n["data-embed"],e=n["data-playlist-id"],o=n["data-video-id"];void 0===t&&void 0===i&&void 0===e&&void 0===r&&void 0===o||this.tb&&(this.tb.src=this.sk())},c.pauseCallback=function(){this.tb&&this.tb.contentWindow&&this.sj&&this.Op&&this.pause()},c.unlayoutOnPause=function(){return!this.sj},c.unlayoutCallback=function(){this.tb&&(O(this.tb),this.tb=null),this.Bb&&this.Bb();var n=new J;return this._b=n.promise,this.zb=n.resolve,this.Qn.updatePlaying(!1),!0},c.supportsPlatform=function(){return!0},c.isInteractive=function(){return!0},c.play=function(n){this.Vb("play",n)},c.pause=function(){this.Vb("pause")},c.mute=function(){this.Vb("muted",!0)},c.unmute=function(){this.Vb("muted",!1)},c.showControls=function(){this.Vb("controls",!0)},c.hideControls=function(){this.Vb("controls",!1)},c.fullscreenEnter=function(){var n,t;this.tb&&(t=(n=this.tb).requestFullscreen||n.requestFullScreen||n.webkitRequestFullscreen||n.webkitEnterFullscreen||n.msRequestFullscreen||n.mozRequestFullScreen)&&t.call(n)},c.fullscreenExit=function(){this.tb&&function(n){var t=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;if(t)t.call(n);else{var i=n.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)},c.isFullscreen=function(){return!!this.tb&&function(n){var t=n.webkitDisplayingFullscreen;if(void 0!==t)return t;var i=n.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==n}(this.tb)},c.preimplementsAutoFullscreen=function(){return!1},c.getMetadata=function(){},c.preimplementsMediaSessionAPI=function(){return!0},c.getCurrentTime=function(){return this.vk},c.getDuration=function(){return this.Af},c.getPlayedRanges=function(){return this.aj},c.seekTo=function(n){this.user().error(lt,"`seekTo` not supported.")},s}(n.BaseElement);n.registerElement(lt,vt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-brightcove-0.1.js.map