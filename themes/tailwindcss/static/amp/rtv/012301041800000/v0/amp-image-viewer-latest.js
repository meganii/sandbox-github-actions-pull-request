;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-image-viewer",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function n(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r;function s(){return r||(r=Promise.resolve(void 0))}var h=function(){var t=this;this.promise=new Promise((function(i,n){t.resolve=i,t.reject=n}))};function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function e(t,i){return(e=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function o(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&e(t,i)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,i){if(i&&("object"===a(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function v(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(i){var s=f(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return c(this,n)}}var l=Array.isArray;function d(t,i){for(var n=[],r=0,s=0;s<t.length;s++){var h=t[s];i(h,s,t)?n.push(h):(r<s&&(t[r]=h),r++)}return r<t.length&&(t.length=r),n}function m(t){return"string"==typeof t}var p=Object.prototype;function M(t){return 1==(null==t?void 0:t.nodeType)}function b(t,i,n,r){return function(s){return y.solveYValueFromXValue(s,0,0,t,i,n,r,1,1)}}p.hasOwnProperty,p.toString;var w,y=function(){function t(){}return t.solveYValueFromXValue=function(i,n,r,s,h,u,e,o,f){return t.mf(t.pf(i,n,s,u,o),r,h,e,f)},t.pf=function(i,n,r,s,h){var u=1e-6,e=(i-n)/(h-n);if(e<=0)return 0;if(e>=1)return 1;for(var o=0,f=1,a=0,c=0;c<8;c++){a=t.bf(e,n,r,s,h);var v=(t.bf(e+u,n,r,s,h)-a)/u;if(Math.abs(a-i)<u)return e;if(Math.abs(v)<u)break;a<i?o=e:f=e,e-=(a-i)/v}for(var l=0;Math.abs(a-i)>u&&l<8;l++)a<i?(o=e,e=(e+f)/2):(f=e,e=(e+o)/2),a=t.bf(e,n,r,s,h);return e},t.bf=function(i,n,r,s,h){if(0==i)return n;if(1==i)return h;var u=t.gf(n,r,i),e=t.gf(r,s,i),o=t.gf(s,h,i);return u=t.gf(u,e,i),e=t.gf(e,o,i),t.gf(u,e,i)},t.mf=function(i,n,r,s,h){if(0==i)return n;if(1==i)return h;var u=t.gf(n,r,i),e=t.gf(r,s,i),o=t.gf(s,h,i);return u=t.gf(u,e,i),e=t.gf(e,o,i),t.gf(u,e,i)},t.gf=function(t,i,n){return t+n*(i-t)},t}(),g={LINEAR:function(t){return t},EASE:function(t){return y.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1)},EASE_IN:function(t){return y.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1)},EASE_OUT:function(t){return y.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1)},EASE_IN_OUT:function(t){return y.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)}},E={"linear":g.LINEAR,"ease":g.EASE,"ease-in":g.EASE_IN,"ease-out":g.EASE_OUT,"ease-in-out":g.EASE_IN_OUT};function S(t){if(!t)return null;if(m(t)){if(-1!=(t=t).indexOf("cubic-bezier")){var i=t.match(/cubic-bezier\((.+)\)/);if(i){var n=i[1].split(",").map(parseFloat);if(4==n.length){for(var r=0;r<4;r++)if(isNaN(n[r]))return null;return b(n[0],n[1],n[2],n[3])}}return null}return E[t]}return t}function A(t){return M(t)?(t=t).tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t}function D(t,i,n,r,s,h,u,e,o,f,a){return t}function O(t,i,n,r,s,h,u,e,o,f,a){return function(t,i){var n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(i)return i;t&&-1==s.indexOf(t)&&(s+=t);for(var h=3,u=s.split("%s"),e=u.shift(),o=[e];u.length;){var f=arguments[h++],a=u.shift();e+=A(f)+a,o.push(f,a.trim())}var c=new Error(e);throw c.messageArray=d(o,(function(t){return""!==t})),null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,c),c}("​​​",t,i,n,r,s,h,u,e,o,f,a)}function j(t,i,n,r){return{left:t,top:i,width:n,height:r,bottom:i+r,right:t+n,x:t,y:i}}function k(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var h in t)s[h]=t[h];return s.stack=r,s}function I(t){for(var i,r=null,s="",h=n(arguments,!0);!(i=h()).done;){var u=i.value;u instanceof Error&&!r?r=k(u):(s&&(s+=" "),s+=u)}return r?s&&(r.message=s+": "+r.message):r=new Error(s),r}function P(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function X(t){var i=I.apply(null,arguments);setTimeout((function(){throw P(i),i}))}function Y(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){X(t)}}var N=["Webkit","webkit","Moz","moz","ms","O","o"],x={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var h=function(t,i,n){if(i.startsWith("--"))return i;var r;w||(r=Object.create(null),w=r);var s=w[i];if(!s||n){if(s=i,void 0===t[i]){var h=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),u=function(t,i){for(var n=0;n<N.length;n++){var r=N[n]+i;if(void 0!==t[r])return r}return""}(t,h);void 0!==t[u]&&(s=u)}n||(w[i]=s)}return s}(t.style,i,s);if(h){var u,e=r?n+r:n;t.style.setProperty((u=h.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),N.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),e)}}function R(t,i){for(var n in i)z(t,n,i[n])}function C(t){return"".concat(t,"px")}function T(t,i){return"number"==typeof t?i(t):t}function _(t){return(t.ownerDocument||t).defaultView}var U=/vertical/,G=new WeakMap,F=new WeakMap,W=new WeakMap;function L(t){var i=G.get(t);return i||(i=new t.ResizeObserver(Z),G.set(t,i)),i}function Z(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var h=F.get(s);if(h){W.set(s,r);for(var u=0;u<h.length;u++){var e=h[u],o=e.callback;$(e.type,o,r)}}}}}function $(t,i,n){if(0==t){var r=n.contentRect,s=r.height;Y(i,{width:r.width,height:s})}else if(1==t){var h,u=n.borderBoxSize;if(u)h=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var e,o,f=n.target,a=_(f),c=U.test(function(t,i){return t.getComputedStyle(i)||x}(a,f).writingMode),v=f,l=v.offsetHeight,d=v.offsetWidth;c?(o=d,e=l):(e=d,o=l),h={inlineSize:e,blockSize:o}}Y(i,h)}}function B(t,i,r,s){for(var h,u,e=n(l(h=t)?h:[h],!0);!(u=e()).done;){var o=u.value,f=i.getAttribute(o);null!==f?r.setAttribute(o,f):s&&r.removeAttribute(o)}}function V(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}var q=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g,H=function(){function t(t){O(t.length>0,"Srcset must have at least one source"),this.JT=t;for(var i=!1,n=!1,r=0;r<t.length;r++){var s=t[r];i=i||!!s.width,n=n||!!s.dpr}O(!(i===n),"Srcset must have width or dpr sources, but not both"),t.sort(i?J:K),this.rR=i}var i=t.prototype;return i.select=function(t,i){var n;return D(t),D(i),n=this.rR?this.iR(t*i):this.oR(i),this.JT[n].url},i.iR=function(t){for(var i=this.JT,n=0,r=1/0,s=1/0,h=0;h<i.length;h++){var u,e=null!==(u=i[h].width)&&void 0!==u?u:0,o=Math.abs(e-t);if(!(o<=1.1*r||t/s>1.2))break;n=h,r=o,s=e}return n},i.oR=function(t){for(var i=this.JT,n=0,r=1/0,s=0;s<i.length;s++){var h=Math.abs(i[s].dpr-t);if(!(h<=r))break;n=s,r=h}return n},i.getUrls=function(){return this.JT.map((function(t){return t.url}))},i.stringify=function(t){for(var i=[],n=this.JT,r=0;r<n.length;r++){var s=n[r],h=s.url;t&&(h=t(h)),this.rR?h+=" ".concat(s.width,"w"):h+=" ".concat(s.dpr,"x"),i.push(h)}return i.join(", ")},t}();function J(t,i){return O(t.width!=i.width,"Duplicate width: %s",t.width),t.width-i.width}function K(t,i){return O(t.dpr!=i.dpr,"Duplicate dpr: %s",t.dpr),t.dpr-i.dpr}function Q(t,i){return function(n){return t+(i-t)*n}}function tt(t,i,n,r){return D(i<=n),function(t,i,n){return D(i<=n),Math.min(Math.max(t,i),n)}(t,i-r,n+r)}function it(t,i){return Math.sqrt(t*t+i*i)}var nt=function(){function t(){}return t.getTop=function(t){return t.top},t.getLocation=function(t){return t.location},t.getDocumentReferrer=function(t){return t.document.referrer},t.getHostname=function(t){return t.location.hostname},t.getUserAgent=function(t){return t.navigator.userAgent},t.getUserLanguage=function(t){return t.navigator.userLanguage||t.navigator.language},t.getDevicePixelRatio=function(){return self.devicePixelRatio||1},t.getSendBeacon=function(t){if(t.navigator.sendBeacon)return t.navigator.sendBeacon.bind(t.navigator)},t.getXMLHttpRequest=function(t){return t.XMLHttpRequest},t.getImage=function(t){return t.Image},t}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var rt=self.__AMP_LOG;function st(t,i){throw new Error("failed to call initLogConstructor")}function ht(t){return rt.user||(rt.user=ut()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(rt.user.win,t)?rt.userForEmbed||(rt.userForEmbed=ut()):rt.user}function ut(t){return st()}function et(){return rt.dev||(rt.dev=st())}function ot(t,i,n,r,s,h,u,e,o,f,a){return t}function ft(t,i,n,r,s,h,u,e,o,f,a){return ht().assert(t,i,n,r,s,h,u,e,o,f,a)}function at(t,i){return vt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function ct(t){return t.nodeType?(i=_(t),at(i,"ampdoc")).getAmpDoc(t):t;var i}function vt(t,i){ot(function(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(ot(n.ctor),ot(n.context),n.obj=new n.ctor(n.context),ot(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}var lt,dt,mt=function(t){return function(t,i){return vt((n=ct(t),(r=ct(n)).isSingleDoc()?r.win:r),i);var n,r}(t,"owners")},pt=function(t){return at(t,"vsync")},Mt="Animation",bt=function(){},wt=function(){function t(t,i){this.X=t,this.Tu=i||pt(self),this.yf=null,this.wf=[]}t.animate=function(i,n,r,s){return new t(i).setCurve(s).add(0,n,1).start(r)};var i=t.prototype;return i.setCurve=function(t){return t&&(this.yf=S(t)),this},i.add=function(t,i,n,r){return this.wf.push({delay:t,func:i,duration:n,curve:S(r)}),this},i.start=function(t){return new yt(this.Tu,this.X,this.wf,this.yf,t)},t}(),yt=function(){function t(t,i,n,r,s){this.Tu=t,this.X=i,this.wf=[];for(var u=0;u<n.length;u++){var e=n[u];this.wf.push({delay:e.delay,func:e.func,duration:e.duration,curve:e.curve||r,started:!1,completed:!1})}this.Af=s,this.oc=Date.now(),this.jn=!0,this.ji={};var o=new h;this.xf=o.promise,this.Mn=o.resolve,this.Ef=o.reject,this.Of=this.Tu.createAnimTask(this.X,{mutate:this.Pf.bind(this)}),this.Tu.canAnimate(this.X)?this.Of(this.ji):(et().warn(Mt,"cannot animate"),this.Tf(!1,0))}var i=t.prototype;return i.then=function(t,i){return t||i?this.xf.then(t,i):this.xf},i.thenAlways=function(t){var i=t||bt;return this.then(i,i)},i.halt=function(t){this.Tf(!1,t||0)},i.Tf=function(t,i){if(this.jn){if(this.jn=!1,0!=i){this.wf.length>1&&this.wf.sort((function(t,i){return t.delay+t.duration-(i.delay+i.duration)}));try{if(i>0)for(var n=0;n<this.wf.length;n++)this.wf[n].func(1,!0);else for(var r=this.wf.length-1;r>=0;r--)this.wf[r].func(0,!1)}catch(i){et().error(Mt,"completion failed: "+i,i),t=!1}}t?this.Mn():this.Ef()}},i.Pf=function(t){if(this.jn){for(var i=Date.now(),n=Math.min((i-this.oc)/this.Af,1),r=0;r<this.wf.length;r++){var s=this.wf[r];!s.started&&n>=s.delay&&(s.started=!0)}for(var h=0;h<this.wf.length;h++){var u=this.wf[h];u.started&&!u.completed&&this.If(u,n)}1==n?this.Tf(!0,0):this.Tu.canAnimate(this.X)?this.Of(this.ji):(et().warn(Mt,"cancel animation"),this.Tf(!1,0))}},i.If=function(t,i){var n,r;if(t.duration>0){if(r=n=Math.min((i-t.delay)/t.duration,1),t.curve&&1!=r)try{r=t.curve(n)}catch(t){return et().error(Mt,"step curve failed: "+t,t),void this.Tf(!1,0)}}else n=1,r=1;1==n&&(t.completed=!0);try{t.func(r,t.completed)}catch(t){return et().error(Mt,"step mutate failed: "+t,t),void this.Tf(!1,0)}},t}();function gt(t){if(void 0!==dt)return dt;dt=!1;try{var i={get passive(){return dt=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return dt}function Et(t,i,n,r){var s=n,h=function(t,i,n,r){var s=t,h=n,u=function(t){try{return h(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},e=function(){if(void 0!==lt)return lt;lt=!1;try{var t={get capture(){return lt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return lt}(),o=!(null==r||!r.capture);return s.addEventListener(i,u,e?r:o),function(){null==s||s.removeEventListener(i,u,e?r:o),h=null,s=null,u=null}}(t,i,(function(t){try{s(t)}finally{s=null,h()}}),r);return h}function St(t){return"AUDIO"===t.tagName||"VIDEO"===t.tagName}var At=function(){function t(){this.Nt=null}var i=t.prototype;return i.add=function(t){var i=this;return this.Nt||(this.Nt=[]),this.Nt.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.Nt&&(n=t,-1!=(r=(i=this.Nt).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.Nt&&(this.Nt.length=0)},i.fire=function(t){if(this.Nt)for(var i,r=n(this.Nt.slice(),!0);!(i=r()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.Nt)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),Dt=function(){function t(t,i,n){var r=this;this.Ds=vt(t,"timer"),this.js=i,this.zs=n||0,this.Us=-1,this.Ls=0,this.jn=!1,this.Hs=function(){r.Gs()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Us},i.schedule=function(t){var i=t||this.zs;this.jn&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.Ls<-10)&&(this.cancel(),this.Ls=n,this.Us=this.Ds.delay(this.Hs,i),!0)},i.Gs=function(){this.Us=-1,this.Ls=0,this.jn=!0,this.js(),this.jn=!1},i.cancel=function(){this.isPending()&&(this.Ds.cancel(this.Us),this.Us=-1)},t}(),Ot="__AMP_Gestures",jt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},kt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.zn=t,this.hI=[],this.Eg=[],this.Si=[],this.cI=[],this.lI=null;var r=t.ownerDocument.defaultView,s=gt(r);this.mI=i||s,this.pI=n,this.fI=!1,this.Gs=new Dt(_(t),this.ad.bind(this)),this.dI=new At,this.vI=Object.create(null),this.yI=this.Wp.bind(this),this.gI=this.Qp.bind(this),this.bI=this.Kp.bind(this),this.xI=this._g.bind(this),this.zn.addEventListener("touchstart",this.yI,!!s&&{passive:!0}),this.zn.addEventListener("touchend",this.gI),this.zn.addEventListener("touchmove",this.bI,!!s&&{passive:!0}),this.zn.addEventListener("touchcancel",this.xI),this.wI=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[Ot];return s||(s=new t(i,n,r),i[Ot]=s),s};var i=t.prototype;return i.cleanup=function(){this.zn.removeEventListener("touchstart",this.yI),this.zn.removeEventListener("touchend",this.gI),this.zn.removeEventListener("touchmove",this.bI),this.zn.removeEventListener("touchcancel",this.xI),delete this.zn[Ot],this.Gs.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.vI[r];return s||(this.hI.push(n),s=new At,this.vI[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.vI[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.hI);return!(r<0||(this.hI.splice(r,1),this.Si.splice(r,1),this.cI.splice(r,1),this.Eg.splice(r,1),delete this.vI[i],0))}return!1},i.onPointerDown=function(t){return this.dI.add(t)},i.Wp=function(t){var i=Date.now();this.fI=!1,this.dI.fire(t);for(var n=0;n<this.hI.length;n++)this.Si[n]||(this.cI[n]&&this.cI[n]<i&&this.Cg(n),this.hI[n].onTouchStart(t)&&this.Ng(n));this.kI(t)},i.Kp=function(t){for(var i=Date.now(),n=0;n<this.hI.length;n++)this.Eg[n]&&(this.cI[n]&&this.cI[n]<i?this.Cg(n):this.hI[n].onTouchMove(t)||this.Cg(n));this.kI(t)},i.Qp=function(t){for(var i=Date.now(),n=0;n<this.hI.length;n++)if(this.Eg[n])if(this.cI[n]&&this.cI[n]<i)this.Cg(n);else{this.hI[n].onTouchEnd(t);var r=!this.cI[n],s=this.cI[n]<i;this.lI==this.hI[n]||!r&&!s||this.Cg(n)}this.kI(t)},i._g=function(t){for(var i=0;i<this.hI.length;i++)this.AI(i);this.kI(t)},i.Zp=function(t,i){if(this.lI)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.hI.length;r++)this.hI[r]==t&&(this.Si[r]=n+i,this.cI[r]=0);this.wI=!0}},i.TI=function(t,i){if(this.lI)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.hI.length;r++)this.hI[r]==t&&(this.cI[r]=n+i)},i.SI=function(t){this.lI==t&&(this.lI=null,this.fI=!0)},i.EI=function(t,i,n){D(this.lI==t);var r=this.vI[t.getType()];r&&r.fire(new jt(t.getType(),i,Date.now(),n))},i.kI=function(t){var i=!!this.lI||this.fI;if(this.fI=!1,!i)for(var n=Date.now(),r=0;r<this.hI.length;r++)if(this.Si[r]||this.cI[r]&&this.cI[r]>=n){i=!0;break}i?(t.stopPropagation(),this.mI||t.preventDefault()):this.pI&&t.stopPropagation(),this.wI&&(this.wI=!1,this.ad())},i.ad=function(){for(var t=Date.now(),i=-1,n=0;n<this.hI.length;n++)this.Si[n]?(-1==i||this.Si[n]>this.Si[i])&&(i=n):this.cI[n]&&this.cI[n]<t&&this.Cg(n);if(-1!=i){for(var r=0,s=0;s<this.hI.length;s++)!this.Si[s]&&this.Eg[s]&&(r=Math.max(r,this.cI[s]-t));r<2?this.OI(i):this.Gs.schedule(r)}},i.OI=function(t){for(var i=this.hI[t],n=0;n<this.hI.length;n++)n!=t&&this.AI(n);this.Si[t]=0,this.cI[t]=0,this.lI=i,i.acceptStart()},i.Ng=function(t){this.Eg[t]=!0,this.cI[t]=0},i.Cg=function(t){this.Eg[t]=!1,this.cI[t]=0,this.Si[t]||this.hI[t].acceptCancel()},i.AI=function(t){this.Si[t]=0,this.Cg(t)},t}(),It=function(){function t(t,i){this._I=t,this.Jy=i}var i=t.prototype;return i.getType=function(){return this._I},i.signalReady=function(t){this.Jy.Zp(this,t)},i.signalPending=function(t){this.Jy.TI(this,t)},i.signalEnd=function(){this.Jy.SI(this)},i.signalEmit=function(t,i){this.Jy.EI(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}(),Pt=function(){},Xt=.02,Yt=Math.round(-16.67/Math.log(.95));function Nt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}function xt(t,i,n,r,s,h,u){return new zt(t,i,n,r,s,h,u).start()}var zt=function(){function t(t,i,n,r,s,u,e){this.Tu=e||pt(self),this.X=t,this.kn=u,this.RI=i,this.jI=n,this._D=r,this.FD=s,this.YI=0,this.HI=0;var o=new h;this.xf=o.promise,this.Mn=o.resolve,this.Ef=o.reject,this.WD=!1}var i=t.prototype;return i.start=function(){return this.WD=!0,Math.abs(this._D)<=Xt&&Math.abs(this.FD)<=Xt?(this.ZD(),this.$D(!0)):this.qD(),this},i.halt=function(){this.WD&&this.$D(!1)},i.then=function(t,i){return t||i?this.xf.then(t,i):this.xf},i.thenAlways=function(t){var i=t||Pt;return this.then(i,i)},i.qD=function(){this.YI=this._D,this.HI=this.FD;var t=this.HD.bind(this),i=this.$D.bind(this,!0);return this.Tu.runAnimMutateSeries(this.X,t,5e3).then(i,i)},i.HD=function(t,i){if(!this.WD)return!1;if(this.RI+=i*this.YI,this.jI+=i*this.HI,!this.ZD())return!1;var n=Math.exp(-t/Yt);return this.YI=this._D*n,this.HI=this.FD*n,Math.abs(this.YI)>Xt||Math.abs(this.HI)>Xt},i.$D=function(t){this.WD&&(this.WD=!1,this.ZD(),t?this.Mn():this.Ef())},i.ZD=function(){return this.kn(this.RI,this.jI)},t}(),Rt=function(t){o(n,t);var i=v(n);function n(t){var n;return(n=i.call(this,"tap",t)).zI=0,n.NI=0,n.RI=0,n.jI=0,n.h=null,n}var r=n.prototype;return r.onTouchStart=function(t){var i=t.touches;return this.h=t.target,!(!i||1!=i.length||(this.zI=i[0].clientX,this.NI=i[0].clientY,0))},r.onTouchMove=function(t){var i=t.changedTouches||t.touches;if(i&&1==i.length){this.RI=i[0].clientX,this.jI=i[0].clientY;var n=Math.abs(this.RI-this.zI)>=8,r=Math.abs(this.jI-this.NI)>=8;if(n||r)return!1}return!0},r.onTouchEnd=function(t){this.signalReady(0)},r.acceptStart=function(){this.signalEmit({clientX:this.RI,clientY:this.jI,target:this.h},null),this.signalEnd()},n}(It),Ct=function(t){o(n,t);var i=v(n);function n(t){var n;return(n=i.call(this,"doubletap",t)).zI=0,n.NI=0,n.RI=0,n.jI=0,n.JD=0,n.KD=null,n}var r=n.prototype;return r.onTouchStart=function(t){if(this.JD>1)return!1;var i=t.touches;return!(!i||1!=i.length||(this.zI=i[0].clientX,this.NI=i[0].clientY,this.RI=i[0].clientX,this.jI=i[0].clientY,0))},r.onTouchMove=function(t){var i=t.touches;if(i&&1==i.length){this.RI=i[0].clientX,this.jI=i[0].clientY;var n=Math.abs(this.RI-this.zI)>=8,r=Math.abs(this.jI-this.NI)>=8;return!n&&!r||(this.acceptCancel(),!1)}return!1},r.onTouchEnd=function(t){this.JD++,this.JD<2?this.signalPending(200):(this.KD=t,this.signalReady(0))},r.acceptStart=function(){this.JD=0,this.signalEmit({clientX:this.RI,clientY:this.jI},this.KD),this.signalEnd()},r.acceptCancel=function(){this.JD=0},n}(It),Tt=function(t){o(n,t);var i=v(n);function n(t){return i.call(this,"swipe-xy",t,!0,!0)}return n}(function(t){o(n,t);var i=v(n);function n(t,n,r,s){var h;return(h=i.call(this,t,n)).MI=r,h.II=s,h.lI=!1,h.zI=0,h.NI=0,h.RI=0,h.jI=0,h.CI=0,h.DI=0,h.oc=0,h.LI=0,h.UI=0,h.YI=0,h.HI=0,h}var r=n.prototype;return r.onTouchStart=function(t){var i=t.touches;return!!(this.lI&&i&&i.length>1)||!(!i||1!=i.length)&&(this.oc=Date.now(),this.zI=i[0].clientX,this.NI=i[0].clientY,!0)},r.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.RI=r,this.jI=s,this.lI)this.VI(!1,!1,t);else{var h=Math.abs(r-this.zI),u=Math.abs(s-this.NI);if(this.MI&&this.II)(h>=8||u>=8)&&this.signalReady(-10);else if(this.MI){if(h>=8&&h>u)this.signalReady(-10);else if(u>=8)return!1}else{if(!this.II)return!1;if(u>=8&&u>h)this.signalReady(-10);else if(h>=8)return!1}}return!0}return!1},r.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.GI(t)},r.acceptStart=function(){this.lI=!0,this.CI=this.zI,this.DI=this.NI,this.UI=this.oc,this.zI=this.RI,this.NI=this.jI,this.VI(!0,!1,null)},r.acceptCancel=function(){this.lI=!1},r.VI=function(t,i,n){this.LI=Date.now();var r=this.LI-this.UI;if(!i&&r>4||i&&r>16){var s=Nt(this.RI-this.CI,r,this.YI),h=Nt(this.jI-this.DI,r,this.HI);(!i||r>32||0!=s||0!=h)&&(this.YI=Math.abs(s)>1e-4?s:0,this.HI=Math.abs(h)>1e-4?h:0),this.CI=this.RI,this.DI=this.jI,this.UI=this.LI}this.signalEmit({first:t,last:i,time:this.LI,deltaX:this.RI-this.zI,deltaY:this.jI-this.NI,startX:this.zI,startY:this.NI,lastX:this.RI,lastY:this.jI,velocityX:this.YI,velocityY:this.HI},n)},r.GI=function(t){this.lI&&(this.lI=!1,this.VI(!1,!0,t),this.signalEnd())},n}(It)),_t=function(t){o(n,t);var i=v(n);function n(t){var n;return(n=i.call(this,"tapzoom",t)).lI=!1,n.zI=0,n.NI=0,n.RI=0,n.jI=0,n.JD=0,n.CI=0,n.DI=0,n.LI=0,n.UI=0,n.YI=0,n.HI=0,n}var r=n.prototype;return r.onTouchStart=function(t){if(this.lI)return!1;var i=t.touches;return!(!i||1!=i.length||(this.zI=i[0].clientX,this.NI=i[0].clientY,0))},r.onTouchMove=function(t){var i=t.touches;if(i&&1==i.length){if(this.RI=i[0].clientX,this.jI=i[0].clientY,this.lI)this.VI(!1,!1,t);else{var n=Math.abs(this.RI-this.zI)>=8,r=Math.abs(this.jI-this.NI)>=8;if(n||r){if(0==this.JD)return this.acceptCancel(),!1;this.signalReady(0)}}return!0}return!1},r.onTouchEnd=function(t){this.lI?this.GI(t):(this.JD++,1!=this.JD?this.acceptCancel():this.signalPending(400))},r.acceptStart=function(){this.JD=0,this.lI=!0,this.VI(!0,!1,null)},r.acceptCancel=function(){this.JD=0,this.lI=!1},r.VI=function(t,i,n){this.LI=Date.now(),t?this.YI=this.HI=0:this.LI-this.UI>2&&(this.YI=Nt(this.RI-this.CI,this.LI-this.UI,this.YI),this.HI=Nt(this.jI-this.DI,this.LI-this.UI,this.HI)),this.CI=this.RI,this.DI=this.jI,this.UI=this.LI,this.signalEmit({first:t,last:i,centerClientX:this.zI,centerClientY:this.NI,deltaX:this.RI-this.zI,deltaY:this.jI-this.NI,velocityX:this.YI,velocityY:this.HI},n)},r.GI=function(t){this.lI&&(this.lI=!1,this.VI(!1,!0,t),this.signalEnd())},n}(It),Ut=function(t){o(n,t);var i=v(n);function n(t){var n;return(n=i.call(this,"pinch",t)).lI=!1,n.QD=0,n.tX=0,n.iX=0,n.nX=0,n.rX=0,n.sX=0,n.hX=0,n.uX=0,n.eX=0,n.oX=0,n.fX=0,n.aX=0,n.oc=0,n.LI=0,n.UI=0,n.YI=0,n.HI=0,n}var r=n.prototype;return r.onTouchStart=function(t){var i=t.touches;return!!i&&(1==i.length||!!(this.lI&&i.length>2)||2==i.length&&(this.oc=Date.now(),this.QD=i[0].clientX,this.tX=i[0].clientY,this.iX=i[1].clientX,this.nX=i[1].clientY,!0))},r.onTouchMove=function(t){var i=t.touches;return!(!i||0==i.length||1!=i.length&&(this.rX=i[0].clientX,this.sX=i[0].clientY,this.hX=i[1].clientX,this.uX=i[1].clientY,this.lI?(this.VI(!1,!1,t),0):this.cX()||(this.vX()&&this.signalReady(0),0)))},r.vX=function(){var t=this.rX-this.QD,i=this.sX-this.tX,n=this.hX-this.iX,r=this.uX-this.nX,s=t*n<=0&&i*r<=0,h=Math.abs(t-n)>=4,u=Math.abs(i-r)>=4;return s&&(h||u)},r.cX=function(){var t=this.rX-this.QD,i=this.sX-this.tX,n=this.hX-this.iX,r=this.uX-this.nX,s=t*n>0||i*r>0,h=Math.abs(t+n)>=10,u=Math.abs(i+r)>=10;return s&&(h||u)},r.onTouchEnd=function(t){var i=t.touches;i&&i.length<2&&this.GI(t)},r.acceptStart=function(){this.lI=!0,this.UI=this.oc,this.eX=0,this.oX=0,this.fX=.5*(this.QD+this.iX),this.aX=.5*(this.tX+this.nX),this.VI(!0,!1,null)},r.acceptCancel=function(){this.lI=!1},r.VI=function(t,i,n){this.LI=Date.now();var r=this.LI-this.UI,s=this.lX(),h=this.dX();(!i&&r>4||i&&r>16)&&(this.YI=Nt(s-this.eX,r,this.YI),this.HI=Nt(h-this.oX,r,this.HI),this.YI=Math.abs(this.YI)>1e-4?this.YI:0,this.HI=Math.abs(this.HI)>1e-4?this.HI:0,this.eX=s,this.oX=h,this.UI=this.LI);var u=this.mX(this.QD,this.iX,this.tX,this.nX),e=this.mX(this.rX,this.hX,this.sX,this.uX)-u;this.signalEmit({first:t,last:i,time:this.LI,centerClientX:this.fX,centerClientY:this.aX,dir:Math.sign(e),distance:e,deltaX:.5*s,deltaY:.5*h,velocityX:.5*this.YI,velocityY:.5*this.HI},n)},r.GI=function(t){this.lI&&(this.lI=!1,this.VI(!1,!0,t),this.signalEnd())},r.mX=function(t,i,n,r){var s=t-i,h=n-r;return Math.sqrt(s*s+h*h)},r.lX=function(){return Math.abs(this.rX-this.QD-(this.hX-this.iX))},r.dX=function(){return Math.abs(this.sX-this.tX-(this.uX-this.nX))},n}(It),Gt=b(.4,0,.2,1.4),Ft="amp-image-viewer",Wt=["aria-label","aria-describedby","aria-labelledby"],Lt=new Set(["AMP-IMG","AMP-ANIM","IMG"]),Zt=function(t){o(n,t);var i=v(n);function n(t){var n;return(n=i.call(this,t)).pX=null,n.MX=null,n.bX=0,n.wX=0,n.yX=null,n.gX=null,n.EX=null,n.SX=null,n.AX=1,n.DX=1,n.OX=1,n.jX=1,n.kX=2,n.zI=0,n.NI=0,n.IX=0,n.PX=0,n.XX=0,n.YX=0,n.NX=0,n.xX=0,n.kD=null,n.zX=null,n.RX=null,n.Ki=null,n.eM=n.eM.bind(u(n)),n}var r=n.prototype;return r.buildCallback=function(){this.element.classList.add("i-amphtml-image-viewer");var t=function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,u=void 0,m(h=s=r)?u=h:M(h)&&(u=h.tagName),!(u&&u.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,h,u;return n}(this.element);ft(1==t.length,"%s should have its target element as its one and only child",Ft),ft(this.CX(t[0]),"%s is not supported by %s",t[0].tagName,Ft),this.RX=t[0],mt(this.element).setOwner(this.RX,this.element)},r.layoutCallback=function(){var t=this;if(this.Ki)return this.Ki;if(V(this.element,"[i-amphtml-scale-animation]"))return s();var i=this.RX,n=!!this.pX,r=n?s():"IMG"===i.tagName?function(t){var i,n;if(function(t){return!!(t.complete||"complete"==t.readyState||St(t)&&t.readyState>0||t.document&&"complete"==t.document.readyState)}(t))return Promise.resolve(t);var r=St(t);return r&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise((function(s,h){if(i=r?Et(t,"loadedmetadata",s,{capture:!0}):Et(t,"load",s),t.tagName){var u=t;if(r&&!t.hasAttribute("src")&&!(u=function(t,i){for(var n=t.lastElementChild;n;n=n.previousElementSibling)if(i(n))return n;return null}(t,(function(t){return"SOURCE"===t.tagName}))))return h(new Error("Media has no source."));n=Et(u,"error",h)}})).then((function(){return n&&n(),t}),(function(){i&&i(),function(t){St(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);var i=t;throw i&&i.src&&(i=i.src),ht().createError("Failed to load:",i)}(t)}))}(i):i.signals().whenSignal("load-end");return n||mt(this.element).scheduleLayout(this.element,i),this.Ki=r.then((function(){return t.zo()})).then((function(){return t.TX()})).then((function(){return t._X()})),this.Ki},r.pauseCallback=function(){var t=this;this.Ki&&this.Ki.then((function(){t.TX(),t.UX()}))},r.resumeCallback=function(){var t=this;this.Ki&&this.Ki.then((function(){t.TX(),t._X()}))},r.unlayoutCallback=function(){return this.UX(),this.Ki=null,function(t,i,n){var r=F.get(t);if(r&&(d(r,(function(t){return t.callback===n&&0===t.type})),0==r.length)){F.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&L(s).unobserve(t)}}(this.element,0,this.eM),!0},r.isLayoutSupported=function(t){return"fill"==t},r.getImageBox=function(){return this.gX},r.getImage=function(){return this.pX},r.getImageBoxWithOffset=function(){if(0==this.IX&&0==this.PX||!this.gX)return this.gX;var t,i,n,r=(this.AX-1)/2;return function(t,i,n){return 0==i&&0==n||0==t.width&&0==t.height?t:j(t.left+i,t.top+n,t.width,t.height)}((i=r,n=r,j((t=this.gX).left-t.width*i,t.top-t.height*n,t.width*(1+2*i),t.height*(1+2*n))),this.IX,this.PX)},r.CX=function(t){return Lt.has(t.tagName)},r.GX=function(t){var i,n=this,r=(i=t,D(/^[\w-]+$/.test("img")),i.querySelector("img"));this.measureElement((function(){r?(n.bX=r.naturalWidth||t.offsetWidth,n.wX=r.naturalHeight||t.offsetHeight):(n.bX=t.offsetWidth,n.wX=t.offsetHeight)}))},r.zo=function(){var t=this;if(this.pX)return s();this.pX=this.element.ownerDocument.createElement("img"),this.pX.classList.add("i-amphtml-image-viewer-image");var i=this.RX;return this.GX(i),this.MX=function(t){var i=t.getAttribute("srcset");if(i)return function(t){for(var i,n=[];i=q.exec(t);){var r=i[1],s=void 0,h=void 0;if(i[2]){var u=i[3].toLowerCase();if("w"==u)s=parseInt(i[2],10);else{if("x"!=u)continue;h=parseFloat(i[2])}}else h=1;n.push({url:r,width:s,dpr:h})}return new H(n)}(i);var n=t.getAttribute("src");return O(n,'Either non-empty "srcset" or "src" attribute must be specified: %s',t),new H([{url:n,width:void 0,dpr:1}])}(i),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=F.get(t);if(s||(s=[],F.set(t,s),L(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var h=W.get(t);h&&setTimeout((function(){return $(0,n,h)}))}}}(this.element,0,this.eM),this.mutateElement((function(){var n,r;return R(t.pX,{top:0,left:0,width:0,height:0}),n=i,void 0===(r=!1)&&(r=n.hasAttribute("hidden")),r?n.removeAttribute("hidden"):n.setAttribute("hidden",""),t.element.appendChild(t.pX),"IMG"===i.tagName?(B(Wt,i,t.pX),s()):i.getImpl().then((function(i){return B(Wt,i.element,t.pX)}))}))},r.eM=function(){V(this.element,"[i-amphtml-scale-animation]")||this.TX()},r.FF=function(){var t;this.yX=(t=this.element.getBoundingClientRect(),j(Number(t.left),Number(t.top),Number(t.width),Number(t.height)));var i=this.bX/this.wX,n=Math.min(this.yX.width/i,this.yX.height),r=Math.min(this.yX.height*i,this.yX.width);Math.abs(r-this.bX)<=16&&Math.abs(n-this.wX<=16)&&(r=this.bX,n=this.wX),this.gX=j(Math.round((this.yX.width-r)/2),Math.round((this.yX.height-n)/2),Math.round(r),Math.round(n));var s=this.yX.width/this.yX.height,h=Math.max(s/i,i/s);this.kX=Math.max(2,h),this.DX=this.AX=1,this.zI=this.IX=0,this.NI=this.PX=0,this.FX(this.AX)},r.TX=function(){var t=this;return this.measureElement((function(){return t.FF()})).then((function(){var i=t.pX;return t.mutateElement((function(){R(i,{top:C(t.gX.top),left:C(t.gX.left),width:C(t.gX.width),height:C(t.gX.height)}),t.WX()}),i)})).then((function(){return t.vx()}))},r.vx=function(){var t=this;if(!this.MX)return s();this.OX=Math.max(this.OX,this.AX);var i=Math.max(this.gX.width*this.OX,this.bX),n=this.MX.select(i,nt.getDevicePixelRatio());return n==this.pX.getAttribute("src")?s():this.mutateElement((function(){t.pX.setAttribute("src",n)}),this.pX)},r.UX=function(){this.kD&&(this.kD.cleanup(),this.kD=null)},r._X=function(){var t=this;this.kD=kt.get(this.element),this.kD.onGesture(Ct,(function(i){var n=i.data,r=1==t.AX?t.kX:t.jX,s=t.yX.width/2-n.clientX,h=t.yX.height/2-n.clientY;t.LX(r,s,h,!0).then((function(){return t.ZX()}))})),this.kD.onGesture(Rt,(function(i){t.$X(i.data.target)})),this.kD.onGesture(_t,(function(i){var n=i.data;t.BX(n.centerClientX,n.centerClientY,n.deltaX,n.deltaY),n.last&&t.VX(n.centerClientX,n.centerClientY,n.deltaX,n.deltaY,n.velocityY,n.velocityY)})),this.kD.onGesture(Ut,(function(i){var n=i.data;t.qX(n.centerClientX,n.centerClientY,n.deltaX,n.deltaY,n.dir),n.last&&t.ZX()}))},r.$X=function(t){var i=function(t,i,n,r){var s={detail:null};if(Object.assign(s,{bubbles:!0}),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var h=t.document.createEvent("CustomEvent");return h.initCustomEvent(i,!!s.bubbles,!!s.cancelable,null),h}(this.win,"click");t.dispatchEvent(i)},r.HX=function(){var t=this;this.EX=this.kD.onGesture(Tt,(function(i){var n=i.data;t.JX(n.deltaX,n.deltaY,!1),n.last&&t.KX(n.velocityX,n.velocityY)})),this.SX=this.kD.onPointerDown((function(){t.zX&&t.zX.halt()}))},r.QX=function(){this.EX&&(this.EX(),this.EX=null,this.kD.removeGesture(Tt)),this.SX&&(this.SX(),this.SX=null)},r.tY=function(t,i){return tt(t,this.jX,this.kX,i?.25:0)},r.iY=function(t,i){return tt(t,this.XX,this.NX,i&&this.AX>1?.25*this.yX.width:0)},r.nY=function(t,i){return tt(t,this.YX,this.xX,i?.25*this.yX.height:0)},r.FX=function(t){var i=0,n=0,r=this.yX.height-this.gX.height*t;r>=0?n=i=0:i=-(n=r/2);var s=0,h=0,u=this.yX.width-this.gX.width*t;u>=0?h=s=0:s=-(h=u/2),this.XX=h,this.YX=n,this.NX=s,this.xX=i},r.WX=function(){var t,i,n;R(this.pX,{transform:(i=this.IX,n=this.PX,(null==n?"translate(".concat(T(i,C),")"):"translate(".concat(T(i,C),", ").concat(T(n,C),")"))+" "+(t=this.AX,"scale(".concat(t,")")))})},r.JX=function(t,i,n){var r=this.iY(this.zI+t,!1),s=this.nY(this.NI+i,!1);this.rY(this.AX,r,s,n)},r.KX=function(t,i){var n=this;this.zX=xt(this.pX,this.IX,this.PX,t,i,(function(t,i){var r=n.iY(t,!1),s=n.nY(i,!1);return!(Math.abs(r-n.IX)<1&&Math.abs(s-n.PX)<1||(n.rY(n.AX,r,s,!1),0))})),this.zX.thenAlways((function(){return n.zX=null,n.sY()}))},r.qX=function(t,i,n,r,s){this.hY(t,i,n,r,s)},r.BX=function(t,i,n,r){var s=Math.abs(r)>Math.abs(n)?Math.sign(r):Math.sign(-n);this.hY(t,i,n,r,s)},r.hY=function(t,i,n,r,s){if(0!=s){var h=it(n,r),u=this.DX*(1+s*h/100),e=this.yX.width/2-t,o=this.yX.height/2-i;n=Math.min(e,e*(h/100)),r=Math.min(o,o*(h/100)),this.LX(u,n,r,!1)}},r.LX=function(t,i,n,r){var s=this.tY(t,!0);if(s!=this.AX){this.FX(s);var h=this.iY(this.zI+i*s,!1),u=this.nY(this.NI+n*s,!1);return this.rY(s,h,u,r)}},r.VX=function(t,i,n,r,h,u){var e=this;return(0==h&&0==u?s():xt(this.pX,n,r,h,u,(function(n,r){return e.BX(t,i,n,r),!0})).thenAlways()).then((function(){e.ZX()}))},r.ZX=function(){var t=this,i=this.AX>this.DX;return this.sY().then((function(){i&&t.vx(),t.AX>1?t.HX():t.QX()}))},r.rY=function(t,i,n,r){var h,u,e,o=this,f=t-this.AX,a=(h=this.IX,u=this.PX,it(i-h,n-u)),c=0;if(r&&(c=Math.min(250,Math.max(250*a*.01,250*Math.abs(f)))),c>16&&r){var v=Q(this.AX,t),l=Q(this.IX,i),d=Q(this.PX,n);e=wt.animate(this.pX,(function(t){o.AX=v(t),o.IX=l(t),o.PX=d(t),o.WX()}),c,Gt).thenAlways((function(){o.AX=t,o.IX=i,o.PX=n,o.WX()}))}else this.AX=t,this.IX=i,this.PX=n,this.WX(),e=r?s():void 0;return e},r.sY=function(){var t=this,i=this.tY(this.AX,!1);i!=this.AX&&this.FX(i);var n=this.iY(this.IX/this.AX*i,!1),r=this.nY(this.PX/this.AX*i,!1);return this.rY(i,n,r,!0).then((function(){t.DX=t.AX,t.zI=t.IX,t.NI=t.PX}))},n}(t.BaseElement);t.registerElement(Ft,Zt,".i-amphtml-image-viewer-image{position:absolute;-o-object-fit:contain;object-fit:contain}.i-amphtml-image-viewer{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-viewer>amp-img{min-width:1px;min-height:1px}\n/*# sourceURL=/extensions/amp-image-viewer/0.1/amp-image-viewer.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-image-viewer-0.1.js.map