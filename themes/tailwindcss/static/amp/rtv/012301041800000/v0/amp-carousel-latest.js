;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-carousel",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,n){return(i=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,n)}function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,i){if(i&&("object"===e(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return o(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=r(t);if(i){var o=r(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return s(this,n)}}function u(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function h(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?h(Object(n),!0).forEach((function(i){u(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}var c=Array.isArray;function f(t){return"string"==typeof t}function v(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function p(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return v(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m=Object.prototype;function d(t){var i=Object.create(null);return t&&Object.assign(i,t),i}function b(t){return"number"==typeof t&&isFinite(t)}function g(t,i,n,r,e,o,s,a,u,h,l){return t}function x(t){return(t.ownerDocument||t).defaultView}m.hasOwnProperty,m.toString;var y=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function w(t,i,n,r,e){return e||(i?"�":r?t.slice(0,-1)+"\\"+t.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+t)}function S(t){return String(t).replace(y,w)}function k(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,s=void 0,a=void 0,f(o=e=r)?s=o:1==(null==(a=o)?void 0:a.nodeType)&&(s=o.tagName),!(s&&s.toLowerCase().startsWith("i-")||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&n.push(r);var e,o,s,a;return n}(t)}var j={bubbles:!0,cancelable:!0};function E(t){return t.parent&&t.parent!=t}function O(t,i,n){var r=t.hasAttribute(i),e=void 0!==n?n:!r;return e!==r&&(e?t.setAttribute(i,""):t.removeAttribute(i)),e}function M(t,i,n,r){var e=n||{};g(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var s=r||j,a=s.bubbles,u=s.cancelable;o.initEvent(i,a,u),t.dispatchEvent(o)}function A(t){return t.hasAttribute("i-amphtml-ssr")}var z,I="amp-carousel-button-prev",T="amp-carousel-button-next",N="i-amphtml-carousel-has-controls",R="amp-carousel-slide",P="i-amphtml-slide-item",_="i-amphtml-slides-container",B="i-amphtml-slidescroll-no-snap",C="i-amphtml-slide-item-show",L="i-amphtml-scrollable-carousel-container";function W(){for(var t=0;t<arguments.length;t++)if(!arguments[t])throw new Error("Invalid server render")}function F(t,i){var n=i.className,r=i.enabled,e=i.title,o=Z(t)?"presentation":"button",s=t.ownerDocument.createElement("div");return s.setAttribute("tabindex","0"),s.classList.add("amp-carousel-button",n),s.setAttribute("role",o),s.setAttribute("title",e),U(s,r),t.appendChild(s),s}function U(t,i){t.classList.toggle("amp-disabled",!i),t.setAttribute("aria-disabled",String(!i)),t.setAttribute("tabindex",String(i?0:-1))}function D(t){var i=k(t).length,n=Z(t)?function(t){if(A(t))return function(t){var i=t.querySelector(".".concat(S(L))),n=Array.from(t.querySelectorAll(".".concat(S(R))));return W(i,n),{container:i,cells:n}}(t);var i=t.ownerDocument,n=k(t),r=i.createElement("div");return r.classList.add(L),r.setAttribute("tabindex","-1"),t.appendChild(r),n.forEach((function(t){t.classList.add(R,"amp-scrollable-carousel-slide"),r.appendChild(t)})),{cells:n,container:r}}(t):function(t){var i;if(A(t))return function(t){var i=t.querySelector(".".concat(S(_))),n=Array.from(t.querySelectorAll(".".concat(S(P)))),r=Array.from(t.querySelectorAll(".".concat(S(R))));return W(i,n,r),{slides:r,slidesContainer:i,slideWrappers:n}}(t);var n=t.ownerDocument,r=k(t);t.classList.add("i-amphtml-slidescroll");var e=n.createElement("div");e.setAttribute("tabindex","-1"),e.classList.add(_,B),e.setAttribute("aria-live","polite"),t.appendChild(e);var o=[];return r.forEach((function(t){t.classList.add(R);var i=n.createElement("div");i.classList.add(P),i.appendChild(t),e.appendChild(i),o.push(i)})),null===(i=o[0])||void 0===i||i.classList.add(C),{slidesContainer:e,slides:r,slideWrappers:o}}(t);return l(l({},function(t,i){if(A(t))return function(t){var i=t.querySelector(".".concat(S(I))),n=t.querySelector(".".concat(S(T)));return W(i,n),{prevButton:i,nextButton:n}}(t);var n,r;n=t.ownerDocument,r=n.documentElement,(["⚡4email","amp4email"].some((function(t){return r.hasAttribute(t)}))||t.hasAttribute("controls"))&&t.classList.add(N);var e=t.hasAttribute("loop"),o=i>1?2:e?0:1;return{prevButton:F(t,{className:I,title:G(t,{index:String(e?i:0),total:String(i)}),enabled:t.hasAttribute("loop")}),nextButton:F(t,{className:T,title:H(t,{index:String(o),total:String(i)}),enabled:i>1})}}(t,i)),n)}function H(t,i){var n=t.getAttribute("data-next-button-aria-label")||"Next item in carousel";return X(t,{prefix:n,index:i.index,total:i.total})}function G(t,i){var n=t.getAttribute("data-prev-button-aria-label")||"Previous item in carousel";return X(t,{prefix:n,index:i.index,total:i.total})}function X(t,i){var n=i.index,r=i.prefix,e=i.total;if(Z(t))return r;var o=(t.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",n).replace("%s",e);return"".concat(r," ").concat(o)}function Z(t){return"slides"!==t.getAttribute("type")}function $(){return z||(z=Promise.resolve(void 0))}var J=function(){var t=this;this.promise=new Promise((function(i,n){t.resolve=i,t.reject=n}))},V="ArrowLeft",Y="ArrowRight",q="fixed",K="fixed-height";function Q(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.needsRootBounds,e=n.rootMargin,o=n.threshold,s=E(i)&&(r||e)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:s,rootMargin:e})}var tt,it=new WeakMap,nt=new WeakMap;function rt(t,i,n){var r=x(t);if(n){var e=Q((function(t){i(t[t.length-1])}),r,n);return e.observe(t),function(){e.unobserve(t)}}var o=it.get(r);o||it.set(r,o=Q(et,r));var s=nt.get(t);return s||(s=[],nt.set(t,s)),s.push(i),o.observe(t),function(){!function(t,i){var n,r,e,o=nt.get(t);if(o&&(r=i,-1!=(e=(n=o).indexOf(r))&&(n.splice(e,1),1)&&!o.length)){var s=x(t),a=it.get(s);null==a||a.unobserve(t),nt.delete(t)}}(t,i)}}function et(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],e=r.target;if(!i.has(e)){i.add(e);var o=nt.get(e);if(o)for(var s=0;s<o.length;s++)(0,o[s])(r)}}}function ot(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,e=new Error(n);for(var o in t)e[o]=t[o];return e.stack=r,e}function st(t){for(var i,n=null,r="",e=p(arguments,!0);!(i=e()).done;){var o=i.value;o instanceof Error&&!n?n=ot(o):(r&&(r+=" "),r+=o)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function at(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function ut(t){var i=st.apply(null,arguments);setTimeout((function(){throw at(i),i}))}function ht(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){ut(t)}}var lt=["Webkit","webkit","Moz","moz","ms","O","o"],ct={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function ft(t,i,n){if(pt(i))return i;tt||(tt=d());var r=tt[i];if(!r||n){if(r=i,void 0===t[i]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<lt.length;n++){var r=lt[n]+i;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}n||(tt[i]=r)}return r}function vt(t,i,n,r,e){var o=ft(t.style,i,e);if(o){var s,a=r?n+r:n;t.style.setProperty((s=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),lt.some((function(t){return s.startsWith(t+"-")}))?"-".concat(s):s),a)}}function pt(t){return t.startsWith("--")}function mt(t,i){return function(n){return t+(i-t)*n}}var dt=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function bt(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var gt=self.__AMP_LOG;function xt(t,i){throw new Error("failed to call initLogConstructor")}function yt(t){return gt.user||(gt.user=wt()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(gt.user.win,t)?gt.userForEmbed||(gt.userForEmbed=wt()):gt.user}function wt(t){return xt()}function St(){return gt.dev||(gt.dev=xt())}function kt(t,i,n,r,e,o,s,a,u,h,l){return t}function jt(t,i){return zt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Et(t,i){return zt(At(Mt(t)),i)}function Ot(t,i){return It(At(t),i)}function Mt(t){return t.nodeType?(i=x(t),jt(i,"ampdoc")).getAmpDoc(t):t;var i}function At(t){var i=Mt(t);return i.isSingleDoc()?i.win:i}function zt(t,i){kt(Nt(t,i));var n=Tt(t)[i];return n.obj||(kt(n.ctor),kt(n.context),n.obj=new n.ctor(n.context),kt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function It(t,i){var n=Tt(t)[i];return n?n.promise?n.promise:(zt(t,i),n.promise=Promise.resolve(n.obj)):null}function Tt(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function Nt(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var Rt=function(t){return i="action",Nt(n=At(Mt(t)),i)?zt(n,i):null;var i,n},Pt=function(t){return function(t,i,n,r){var e=Ot(t,i);if(e)return e;var o=Mt(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(n);return t?jt(o.win,"extensions").waitForExtension(n,t):null})).then((function(n){return n?function(t,i){return function(t,i){var n=It(t,i);if(n)return n;var r,e,o,s,a=Tt(t);return a[i]=(e=(r=new J).promise,o=r.reject,s=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:s,reject:o,context:null,ctor:null}),a[i].promise}(At(t),i)}(t,i):null}))}(t,"amp-analytics-instrumentation","amp-analytics")},_t=function(t){return Et(t,"owners")},Bt=function(t){return jt(t,"platform")},Ct=function(t){return zt(t,"timer")},Lt=function(t){return jt(t,"vsync")};function Wt(t,i,n,r){return function(e){return Ft.solveYValueFromXValue(e,0,0,t,i,n,r,1,1)}}var Ft=function(){function t(){}return t.solveYValueFromXValue=function(i,n,r,e,o,s,a,u,h){return t.mf(t.pf(i,n,e,s,u),r,o,a,h)},t.pf=function(i,n,r,e,o){var s=1e-6,a=(i-n)/(o-n);if(a<=0)return 0;if(a>=1)return 1;for(var u=0,h=1,l=0,c=0;c<8;c++){l=t.bf(a,n,r,e,o);var f=(t.bf(a+s,n,r,e,o)-l)/s;if(Math.abs(l-i)<s)return a;if(Math.abs(f)<s)break;l<i?u=a:h=a,a-=(l-i)/f}for(var v=0;Math.abs(l-i)>s&&v<8;v++)l<i?(u=a,a=(a+h)/2):(h=a,a=(a+u)/2),l=t.bf(a,n,r,e,o);return a},t.bf=function(i,n,r,e,o){if(0==i)return n;if(1==i)return o;var s=t.gf(n,r,i),a=t.gf(r,e,i),u=t.gf(e,o,i);return s=t.gf(s,a,i),a=t.gf(a,u,i),t.gf(s,a,i)},t.mf=function(i,n,r,e,o){if(0==i)return n;if(1==i)return o;var s=t.gf(n,r,i),a=t.gf(r,e,i),u=t.gf(e,o,i);return s=t.gf(s,a,i),a=t.gf(a,u,i),t.gf(s,a,i)},t.gf=function(t,i,n){return t+n*(i-t)},t}(),Ut={LINEAR:function(t){return t},EASE:function(t){return Ft.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1)},EASE_IN:function(t){return Ft.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1)},EASE_OUT:function(t){return Ft.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1)},EASE_IN_OUT:function(t){return Ft.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)}},Dt={"linear":Ut.LINEAR,"ease":Ut.EASE,"ease-in":Ut.EASE_IN,"ease-out":Ut.EASE_OUT,"ease-in-out":Ut.EASE_IN_OUT};function Ht(t){if(!t)return null;if(f(t)){if(-1!=(t=t).indexOf("cubic-bezier")){var i=t.match(/cubic-bezier\((.+)\)/);if(i){var n=i[1].split(",").map(parseFloat);if(4==n.length){for(var r=0;r<4;r++)if(isNaN(n[r]))return null;return Wt(n[0],n[1],n[2],n[3])}}return null}return Dt[t]}return t}var Gt,Xt="Animation",Zt=function(){},$t=function(){function t(t,i){this.X=t,this.Tu=i||Lt(self),this.yf=null,this.wf=[]}t.animate=function(i,n,r,e){return new t(i).setCurve(e).add(0,n,1).start(r)};var i=t.prototype;return i.setCurve=function(t){return t&&(this.yf=Ht(t)),this},i.add=function(t,i,n,r){return this.wf.push({delay:t,func:i,duration:n,curve:Ht(r)}),this},i.start=function(t){return new Jt(this.Tu,this.X,this.wf,this.yf,t)},t}(),Jt=function(){function t(t,i,n,r,e){this.Tu=t,this.X=i,this.wf=[];for(var o=0;o<n.length;o++){var s=n[o];this.wf.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||r,started:!1,completed:!1})}this.Af=e,this.oc=Date.now(),this.jn=!0,this.ji={};var a=new J;this.xf=a.promise,this.Mn=a.resolve,this.Ef=a.reject,this.Of=this.Tu.createAnimTask(this.X,{mutate:this.Pf.bind(this)}),this.Tu.canAnimate(this.X)?this.Of(this.ji):(St().warn(Xt,"cannot animate"),this.Tf(!1,0))}var i=t.prototype;return i.then=function(t,i){return t||i?this.xf.then(t,i):this.xf},i.thenAlways=function(t){var i=t||Zt;return this.then(i,i)},i.halt=function(t){this.Tf(!1,t||0)},i.Tf=function(t,i){if(this.jn){if(this.jn=!1,0!=i){this.wf.length>1&&this.wf.sort((function(t,i){return t.delay+t.duration-(i.delay+i.duration)}));try{if(i>0)for(var n=0;n<this.wf.length;n++)this.wf[n].func(1,!0);else for(var r=this.wf.length-1;r>=0;r--)this.wf[r].func(0,!1)}catch(i){St().error(Xt,"completion failed: "+i,i),t=!1}}t?this.Mn():this.Ef()}},i.Pf=function(t){if(this.jn){for(var i=Date.now(),n=Math.min((i-this.oc)/this.Af,1),r=0;r<this.wf.length;r++){var e=this.wf[r];!e.started&&n>=e.delay&&(e.started=!0)}for(var o=0;o<this.wf.length;o++){var s=this.wf[o];s.started&&!s.completed&&this.If(s,n)}1==n?this.Tf(!0,0):this.Tu.canAnimate(this.X)?this.Of(this.ji):(St().warn(Xt,"cancel animation"),this.Tf(!1,0))}},i.If=function(t,i){var n,r;if(t.duration>0){if(r=n=Math.min((i-t.delay)/t.duration,1),t.curve&&1!=r)try{r=t.curve(n)}catch(t){return St().error(Xt,"step curve failed: "+t,t),void this.Tf(!1,0)}}else n=1,r=1;1==n&&(t.completed=!0);try{t.func(r,t.completed)}catch(t){return St().error(Xt,"step mutate failed: "+t,t),void this.Tf(!1,0)}},t}();function Vt(t,i,n,r){var e={detail:n};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(i,!!e.bubbles,!!e.cancelable,n),o}function Yt(t,i,n,r){return function(t,i,n,r){var e=t,o=n,s=function(t){try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},a=function(){if(void 0!==Gt)return Gt;Gt=!1;try{var t={get capture(){return Gt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return Gt}(),u=!(null==r||!r.capture);return e.addEventListener(i,s,a?r:u),function(){null==e||e.removeEventListener(i,s,a?r:u),o=null,e=null,s=null}}(t,i,n,r)}var qt=function(){function t(t){var i=t.element,n=t.go,r=t.nextButton,e=t.prevButton;this.zn=i,this.ket=n,this.t=x(i),this.Tp=e,this.Ip=r,this.M9=!1,this.Oet()}var i=t.prototype;return i.Oet=function(){var t,i=this;this.setupButtonInteraction(this.Tp,(function(){return i.handlePrev()})),this.setupButtonInteraction(this.Ip,(function(){return i.handleNext()})),this.zn.hasAttribute("controls")?this.M9=!0:(t=this.t,jt(t,"input")).onMouseDetected((function(t){t&&(i.M9=!0,O(i.zn,"i-amphtml-carousel-hide-buttons",!i.M9),i.zn.classList.add(N))}),!0)},i.setupButtonInteraction=function(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(function(t){t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))},i.setControlsState=function(t){var i=t.next,n=t.prev;U(this.Tp,n),U(this.Ip,i)},i.hintControls=function(){var t=this;this.M9||Lt(this.t).mutate((function(){var i="i-amphtml-carousel-button-start-hint";t.zn.classList.add(i),Ct(t.t).delay((function(){var n;(n=t.zn,Et(n,"mutator")).measureMutateElement(t.zn,null,(function(){t.zn.classList.remove(i),O(t.zn,"i-amphtml-carousel-hide-buttons",!t.M9)}))}),4e3)}))},i.updateButtonTitles=function(t,i){this.Tp.title=t,this.Ip.title=i},i.handlePrev=function(){!this.Tp.classList.contains("amp-disabled")&&this.ket(-1,!0,!1)},i.handleNext=function(){!this.Ip.classList.contains("amp-disabled")&&this.ket(1,!0,!1)},t}(),Kt="amp-scrollable-carousel",Qt=function(t){n(r,t);var i=a(r);function r(t){var n;return(n=i.call(this,t)).Y4=0,n.Met=0,n.zet=null,n.qn=null,n.X4=null,n.Gg=null,n.Cd=null,n}var e=r.prototype;return e.isLayoutSupported=function(t){return function(t){return t==q||t==K}(t)},e.isRelayoutNeeded=function(){return!0},e.Iet=function(){var t=this;this.Net(),this.qn.addEventListener("scroll",this.op.bind(this)),this.qn.addEventListener("keydown",this.v$.bind(this)),this.zet.forEach((function(i){_t(t.element).setOwner(i,t.element)})),this.registerAction("goToSlide",(function(i){var n=i.args;if(n){var r=parseInt(n.index,10);t.goToSlide(r)}}),1),Rt(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])},e.buildCallback=function(){var t=D(this.element),i=t.cells,n=t.container,r=t.nextButton,e=t.prevButton;this.qn=n,this.zet=i,this.Cd=new qt({element:this.element,prevButton:e,nextButton:r,go:this.go.bind(this)}),this.Iet()},e.layoutCallback=function(){var t=this;return this.Gg=rt(this.element,(function(i){var n=i.isIntersecting;return t.viewportCallback(n)})),this.Ret(this.Y4),this.Pet(this.Y4,1),this.Cd.setControlsState({prev:this.Bet(),next:this.Cet()}),$()},e.unlayoutCallback=function(){var t;return null===(t=this.Gg)||void 0===t||t.call(this),this.Gg=null,!0},e.viewportCallback=function(t){this.Let(this.Y4,this.Y4),t&&this.Cd.hintControls()},e.go=function(t,i){var n=this,r=this.Wet(this.Y4,t),e=this.Y4;if(r!=e)if(i){var o=mt(e,r);$t.animate(this.element,(function(t){n.qn.scrollLeft=o(t)}),200,"ease-in-out").thenAlways((function(){n.Fet(r)}))}else this.Fet(r),this.qn.scrollLeft=r},e.goToSlide=function(t){var i=this,n=this.zet.length;if(!isFinite(t)||t<0||t>=n)return this.user().error(Kt,"Invalid [slide] value: %s",t),$();var r=this.Y4,e=r;this.measureMutateElement((function(){e=i.Uet(t)}),(function(){if(e!=r){var t=mt(r,e);$t.animate(i.element,(function(n){i.qn.scrollLeft=t(n)}),200,"ease-in-out").thenAlways((function(){i.Fet(e)}))}}))},e.Uet=function(t){var i=this.element.offsetWidth;return this.zet[t].offsetLeft-(i-this.zet[t].offsetWidth)/2},e.op=function(){var t=this.qn.scrollLeft;this.Y4=t,null===this.X4&&this.f5(t)},e.v$=function(t){var i=t.key;i!=V&&i!=Y||t.stopPropagation()},e.f5=function(t){var i=this;this.X4=Ct(this.win).delay((function(){Math.abs(t-i.Y4)<30?(St().fine(Kt,"slow scrolling: %s - %s",t,i.Y4),i.X4=null,i.Fet(i.Y4)):(St().fine(Kt,"fast scrolling: %s - %s",t,i.Y4),i.f5(i.Y4))}),100)},e.Fet=function(t){this.Let(t,this.Met),this.Ret(t),this.Pet(t,Math.sign(t-this.Met)),this.Met=t,this.Y4=t,this.Cd.setControlsState({prev:this.Bet(),next:this.Cet()})},e.Wet=function(t,i){var n=this.element.offsetWidth,r=this.qn.scrollWidth,e=t+i*n;return e<0?0:r>=n&&e>r-n?r-n:e},e.Det=function(t,i){for(var n=this.element.offsetWidth,r=0;r<this.zet.length;r++){var e=this.zet[r];e.offsetLeft+e.offsetWidth>=t&&e.offsetLeft<=t+n&&i(e)}},e.Ret=function(t){var i=this;this.Det(t,(function(t){_t(i.element).scheduleLayout(i.element,t)}))},e.Pet=function(t,i){var n=this,r=this.Wet(t,i);r!=t&&this.Det(r,(function(t){_t(n.element).schedulePreload(n.element,t)}))},e.Let=function(t,i){var n=this,r=[];this.Det(t,(function(t){r.push(t)})),i!=t&&this.Det(i,(function(t){r.includes(t)||_t(n.element).schedulePause(n.element,t)}))},e.Bet=function(){return 0!=this.Y4},e.Cet=function(){var t=this.element.offsetWidth,i=this.qn.scrollWidth,n=Math.max(i-t,0);return this.Y4!=n},e.interactionNext=function(){this.Cd.handleNext()},e.interactionPrev=function(){this.Cd.handlePrev()},e.goCallback=function(t,i){this.go(t,i)},e.Net=function(){Yt(this.element,"touchmove",(function(t){return t.stopPropagation()}),{passive:!0})},r}(t.BaseElement),ti=/vertical/,ii=new WeakMap,ni=new WeakMap,ri=new WeakMap;function ei(t){var i=ii.get(t);return i||(i=new t.ResizeObserver(oi),ii.set(t,i)),i}function oi(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],e=r.target;if(!i.has(e)){i.add(e);var o=ni.get(e);if(o){ri.set(e,r);for(var s=0;s<o.length;s++){var a=o[s],u=a.callback;si(a.type,u,r)}}}}}function si(t,i,n){if(0==t){var r=n.contentRect,e=r.height;ht(i,{width:r.width,height:e})}else if(1==t){var o,s=n.borderBoxSize;if(s)o=s.length>0?s[0]:{inlineSize:0,blockSize:0};else{var a,u,h=n.target,l=x(h),c=ti.test(function(t,i){return t.getComputedStyle(i)||ct}(l,h).writingMode),f=h,v=f.offsetHeight,p=f.offsetWidth;c?(u=p,a=v):(a=p,u=v),o={inlineSize:a,blockSize:u}}ht(i,o)}}var ai="__AMP__EXPERIMENT_TOGGLES",ui="AMP-CAROUSEL",hi=function(t){n(r,t);var i=a(r);function r(t){var n;(n=i.call(this,t)).Tu=null,n.Het=!1,n.G5=[],n.Get=0,n.j6=null,n.Xet=[],n.Zet=!1,n.$et=null,n.Jet=!1,n.Vet=null,n.Yet=!1,n.qet=!1,n.fq=!1,n.Ket=5e3,n.Qet=null,n.tot=0,n.iot=!1,n.not=!1,n.rot=0,n.eot=null,n.oot=0,n.sot=0,n.aot=0,n.uot=[];var r,e=Bt(n.win);return n.SW=e.isIos(),n.RR=e.isSafari(),n.Ks=null,n.hot=!!Bt(n.win).getIosVersionString().startsWith("10.3")||!n.SW&&("amp-carousel-chrome-scroll-snap",r=function(t){var i,n,r,e,o;if(t[ai])return t[ai];t[ai]=d();var s=t[ai];g(s);var a,u=l(l({},null!==(i=t.AMP_CONFIG)&&void 0!==i?i:{}),null!==(n=t.AMP_EXP)&&void 0!==n?n:(a=(null===(r=t.__AMP_EXP)||void 0===r?void 0:r.textContent)||"{}",JSON.parse(a)));for(var h in u){var f=u[h];"number"==typeof f&&f>=0&&f<=1&&(s[h]=Math.random()<f)}var v=null===(e=t.AMP_CONFIG)||void 0===e?void 0:e["allow-doc-opt-in"];if(c(v)&&v.length){var m=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(m)for(var b,x,y=p((null===(b=m.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(x=y()).done;){var w=x.value;v.includes(w)&&(s[w]=!0)}}Object.assign(s,function(t){var i,n="";try{var r;"localStorage"in t&&(n=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){St().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var e,o=(null===(i=n)||void 0===i?void 0:i.split(/\s*,\s*/g))||[],s=d(),a=p(o,!0);!(e=a()).done;){var u=e.value;u&&("-"==u[0]?s[u.substr(1)]=!1:s[u]=!0)}return s}(t));var S=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(c(S)&&S.length)for(var k,j=function(t){var i,n=d();if(!t)return n;for(;i=dt.exec(t);){var r=bt(i[1],i[1]),e=i[2]?bt(i[2].replace(/\+/g," "),i[2]):"";n[r]=e}return n}(t.location.originalHash||t.location.hash),E=p(S,!0);!(k=E()).done;){var O=k.value,M=j["e-".concat(O)];"1"==M&&(s[O]=!0),"0"==M&&(s[O]=!1)}return s}(n.win),!r["amp-carousel-chrome-scroll-snap"]),n.lot=!1,n.Wb=n.Wb.bind(o(n)),n.Gg=null,n.Cd=null,n}var e=r.prototype;return e.isLayoutSupported=function(t){return function(t){return t==q||t==K||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},e.isRelayoutNeeded=function(){return!0},e.Iet=function(){var t,i=this,n=this.element.getAttribute("autoplay");n&&(this.Qet=parseInt(n,10),t=b(this.Qet),yt().assert(t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.not&&0!=this.Qet&&this.cot(),this.registerAction("toggleAutoplay",(function(t){var n=t.args;n&&void 0!==n.toggleOn?i.N9(n.toggleOn):i.N9(!i.fq)}),1)},e.fot=function(){var t=this;if(this.Tu=this.getVsync(),this.Ks=Rt(this.element),this.Ks.addToAllowlist(ui,"goToSlide",["email"]),this.Het=null!=function(t,i,n){var r=ft(t.style,"scrollSnapType",void 0);if(r)return pt(r)?t.style.getPropertyValue(r):t.style[r]}(this.element),this.hot&&(this.Het=!1),this.j6.classList.toggle(B,this.hot),this.Het){var i=this.win.document.createElement("div");i.classList.add("i-amphtml-carousel-start-marker"),this.j6.appendChild(i);var n=this.win.document.createElement("div");n.classList.add("i-amphtml-carousel-end-marker"),this.j6.appendChild(n)}this.G5.forEach((function(i,n){var r=i.getAttribute("data-slide-id")||n.toString();t.uot.push(r),_t(t.element).setOwner(i,t.element)})),this.Net(),this.j6.addEventListener("scroll",this.op.bind(this)),this.j6.addEventListener("keydown",this.v$.bind(this)),Yt(this.j6,"touchmove",this.vot.bind(this),{passive:!0}),Yt(this.j6,"touchend",this.pot.bind(this),{passive:!0}),this.registerAction("goToSlide",(function(i){var n=i.args;n&&t.goToSlide(n.index,3)}),1)},e.attachedCallback=function(){(function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var e=ni.get(t);if(e||(e=[],ni.set(t,e),ei(r).observe(t)),!e.some((function(t){return t.callback===n&&0===t.type}))){e.push({type:0,callback:n});var o=ri.get(t);o&&setTimeout((function(){return si(0,n,o)}))}}})(this.element,0,this.Wb)},e.detachedCallback=function(){(function(t,i,n){var r=ni.get(t);if(r&&(function(t,i){for(var r=[],e=0,o=0;o<t.length;o++){var s=t[o];(a=s).callback===n&&0===a.type?r.push(s):(e<o&&(t[e]=s),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){ni.delete(t),ri.delete(t);var e=t.ownerDocument.defaultView;e&&ei(e).unobserve(t)}})(this.element,0,this.Wb)},e.isLoopingEligible=function(){return this.Get>1},e.mutatedAttributesCallback=function(t){var i=t.slide;void 0!==i&&this.goToSlide(i,3)},e.vot=function(){this.mot(),this.Jet=!0},e.viewportCallback=function(t){var i;t?(this.fO(),null===(i=this.Cd)||void 0===i||i.hintControls()):this.mot()},e.interactionNext=function(){this.Cd.handleNext()},e.interactionPrev=function(){this.Cd.handlePrev()},e.goCallback=function(t,i,n){this.go(t,i,n)},e.go=function(t,i,n){var r=n?1:3;this.moveSlide(t,i,r),n?this.fO():this.mot()},e.dot=function(t){var i=this;this.$et&&Ct(this.win).cancel(this.$et),this.$et=Ct(this.win).delay((function(){if(i.$et=null,!i.Zet&&!i.Jet){var t=i.j6.scrollLeft;i.Het?i.bot(t,1):i.got(t,void 0,1)}}),t)},e.pot=function(){var t=this.hot?45:100;this.Jet=!1,this.dot(t)},e.Wb=function(t){this.sot=t.width,this.lot=!0},e.buildCallback=function(){var t=D(this.element),i=t.nextButton,n=t.prevButton,r=t.slideWrappers,e=t.slides,o=t.slidesContainer;this.G5=e,this.j6=o,this.Xet=r,this.Get=this.G5.length,this.Yet=this.element.hasAttribute("loop"),this.fq=this.element.hasAttribute("autoplay"),this.iot=this.Yet&&this.isLoopingEligible(),this.not=this.fq&&this.isLoopingEligible(),this.Cd=new qt({element:this.element,go:this.go.bind(this),nextButton:i,prevButton:n}),this.Cd.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),this.Iet(),this.fot()},e.layoutCallback=function(){var t,i=this;if(this.Gg=rt(this.element,(function(t){var n=t.isIntersecting;return i.viewportCallback(n)})),"[i-amphtml-scale-animation]",(t=this.element).closest?t.closest("[i-amphtml-scale-animation]"):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,"[i-amphtml-scale-animation]")}(t)})))return $();if(this.lot||(this.sot=this.j6.clientWidth),null===this.eot)this.xot(this.oot);else{var n=yt().assertNumber(this.eot,"E#19457 this.slideIndex_"),r=this.yot(n);_t(this.element).scheduleLayout(this.element,this.G5[n]),this.j6.scrollLeft=r,this.aot=r}return $()},e.unlayoutCallback=function(){var t;return null===(t=this.Gg)||void 0===t||t.call(this),this.Gg=null,this.eot=null,!0},e.Bet=function(){return this.iot||this.eot>0},e.Cet=function(){return this.iot||this.eot<this.G5.length-1},e.moveSlide=function(t,i,n){if(null!==this.eot){var r=this.Cet(),e=this.Bet();if(1==t&&r||-1==t&&e){var o=this.eot+t;if(-1==o?o=this.Get-1:o>=this.Get&&(o=0),i){var s=1!=t||e?this.sot:0;this.got(s,t,n)}else this.wot(o,n)}}},e.op=function(t){var i=this.j6.scrollLeft;this.SW||this.RR||this.Sot(i);var n=this.Het?200:this.SW?45:100;this.dot(n),this.aot=i},e.v$=function(t){var i=t.key;i!=V&&i!=Y||t.stopPropagation()},e.Sot=function(t){var i=this,n=this.j6.scrollWidth;-1==this.rot&&t>=this.aot||1==this.rot&&t<=this.aot?this.got(t).then((function(){i.rot=0})):t<0?this.rot=-1:t+this.sot>n?this.rot=1:this.rot=0},e.got=function(t,i,n){var r=this;this.Zet=!0;var e=this.kot(t)-this.eot,o=this.Bet(),s=o?this.sot:0;return 0!=e||1!=i&&-1!=i||(e=i),1==e||-1!=e&&e==-1*(this.Get-1)?s=o?2*this.sot:this.sot:-1!=e&&e!=this.Get-1||(s=0),this.jot(t,s).then((function(){r.bot(s,n)}))},e.kot=function(t){if(!t&&!this.sot)return 0;var i=Math.round(t/this.sot),n=0,r=this.Bet(),e=this.Cet();r&&e?n=i-1:e?n=i:r&&(n=i-1);var o=this.eot+n;return this.iot?o<0?this.Get-1:o>=this.Get?0:o:o<0?0:o>=this.Get?this.Get-1:o},e.getPrevButtonTitle=function(){var t=this.T9(this.eot),i=(null==t?0:t)+1;return G(this.element,{index:String(i),total:String(this.Get)})},e.getNextButtonTitle=function(){var t=this.I9(this.eot),i=(null==t?this.Get-1:t)+1;return H(this.element,{index:String(i),total:String(this.Get)})},e.bot=function(t,i){var n=this;if(b(t)&&null!==this.eot){this.Zet=!0;var r=this.kot(t);this.Tu.mutate((function(){n.wot(r,i),n.Tu.mutate((function(){n.Zet=!1}))}))}},e.goToSlide=function(t,i){var n=parseInt(t,10);!isFinite(n)||n<0||n>=this.Get?this.user().error(ui,"Invalid [slide] value: ",t):null!==this.eot?this.wot(n,i):this.oot=n},e.T9=function(t){return t-1>=0?t-1:this.iot?this.Get-1:null},e.I9=function(t){return t+1<this.Get?t+1:this.iot?0:null},e.xot=function(t){var i,n,r=this,e=this.Get;if((t=t)<0||t>=e||this.eot==t)return!1;var o=this.T9(t),s=this.I9(t),a=[];return null!=o&&a.push(o),a.push(t),null!=s&&s!==o&&a.push(s),void 0===this.G5[t]?(St().error(ui,"Attempting to access a non-existant slide %s / %s",t,e),!1):(a.forEach((function(i,n){r.iot&&vt(r.Xet[i],"order",n+1),r.Xet[i].classList.add(C);var e=_t(r.element);i==t?(e.scheduleLayout(r.element,r.G5[i]),e.scheduleResume(r.element,r.G5[i]),r.G5[i].setAttribute("aria-hidden","false")):(e.schedulePreload(r.element,r.G5[i]),r.G5[i].setAttribute("aria-hidden","true"))})),this.j6.scrollLeft=this.yot(t),this.X9(t),this.eot=t,this.Qet&&this.eot===this.Get-1&&(this.tot++,this.tot==this.Qet&&this.Eot()),this.Oot(a),null===(i=this.Cd)||void 0===i||i.setControlsState({prev:this.Bet(),next:this.Cet()}),null===(n=this.Cd)||void 0===n||n.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),!0)},e.wot=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.xot(t);if(n){var r="slideChange",e=Vt(this.win,"slidescroll.".concat(r),{"index":t});this.Ks.trigger(this.element,r,e,i),M(this.element,r,{index:t,actionTrust:i})}},e.yot=function(t){var i=this.sot;return(!this.iot&&0==t||this.G5.length<=1)&&(i=0),i},e.Oot=function(t){for(var i=this.Get,n=0;n<i;n++)this.Xet[n].classList.contains(C)&&(t.includes(n)||(this.iot&&vt(this.Xet[n],"order",""),this.Xet[n].classList.remove(C),this.G5[n].removeAttribute("aria-hidden")),this.eot!=n&&_t(this.element).schedulePause(this.element,this.G5[n]))},e.jot=function(t,i){var n=this;if(t==i)return $();var r=mt(t,i),e=Wt(.8,0,.6,1),o=this.j6;return $t.animate(o,(function(t){n.j6.scrollLeft=r(t)}),80,e).thenAlways()},e.Net=function(){Yt(this.element,"touchmove",(function(t){return t.stopPropagation()}),{passive:!0})},e.X9=function(t){var i=t-this.eot;if(0!=i){1!==Math.abs(i)&&(i=i<0?1:-1,null===this.eot&&(i=1));var n={"fromSlide":null===this.eot?"null":this.uot[this.eot],"toSlide":this.uot[t]};this.LZ("amp-carousel-change",n),1==i?this.LZ("amp-carousel-next",n):this.LZ("amp-carousel-prev",n)}},e.LZ=function(t,i){!function(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];Pt(t).then((function(e){e&&e.triggerEventForTarget(t,i,n,r)}))}(this.element,t,i)},e.cot=function(){var t=Number(this.element.getAttribute("delay"));t>0&&(this.Ket=Math.max(1e3,t)),this.Yet||(this.element.setAttribute("loop",""),this.qet=!0,this.Yet=!0,this.iot=!0)},e.fO=function(){this.not&&0!=this.Qet&&(this.mot(),this.Vet=Ct(this.win).delay(this.go.bind(this,1,!0,!0),this.Ket))},e.N9=function(t){if(t!=this.not){var i=this.not;this.fq=t,this.not=this.fq&&this.isLoopingEligible(),!i&&this.not&&this.cot(),this.not?this.fO():this.mot()}},e.mot=function(){null!==this.Vet&&(Ct(this.win).cancel(this.Vet),this.Vet=null)},e.Eot=function(){this.mot(),this.qet&&(this.element.removeAttribute("loop"),this.qet=!1,this.Yet=!1,this.iot=!1),this.fq=!1,this.not=this.fq&&this.isLoopingEligible()},r}(t.BaseElement),li=function(t){n(r,t);var i=a(r);function r(){return i.apply(this,arguments)}return r.prototype.upgradeCallback=function(){return Z(this.element)?new Qt(this.element):new hi(this.element)},r}(t.BaseElement);t.registerElement("amp-carousel",li,'.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-carousel-0.1.js.map