;
!function(t){var n=self.BENTO=self.BENTO||{};(n.bento=n.bento||[]).push((function(t){"use strict";function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,e=r(t);if(n){var s=r(this).constructor;i=Reflect.construct(e,arguments,s)}else i=e.apply(this,arguments);return o(this,i)}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function a(t,n){if(t){if("string"==typeof t)return u(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,n):void 0}}var f="image-slider-push-left-05912a8",l="image-slider-push-right-05912a8",h="image-slider-label-wrapper-05912a8",c="image-slider-hint-hidden-05912a8",v="image-slider-hint-05912a8";function d(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function m(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function p(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?m(Object(i),!0).forEach((function(n){d(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}function g(t,n){if(null==t)return{};var i,r,e={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(e[i]=t[i]);return e}var b=Array.isArray;function w(t,n){for(var i=[],r=0,e=0;e<t.length;e++){var o=t[e];n(o,e,t)?i.push(o):(r<e&&(t[r]=o),r++)}return r<t.length&&(t.length=r),i}function y(t,n){for(var i=0;i<t.length;i++)if(n(t[i],i,t))return i;return-1}function x(t,n){var i=t.indexOf(n);return-1!=i&&(t.splice(i,1),!0)}function j(t){return"string"==typeof t}function O(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=a(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var A=Object.prototype;function M(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function k(t){return 1==(null==t?void 0:t.nodeType)}A.hasOwnProperty,A.toString;var S="​​​";function E(t){return k(t)?(t=t).tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t}function R(t){return t.indexOf(S)>=0}function z(t,n){var i,r,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(n)return n;t&&-1==e.indexOf(t)&&(e+=t);for(var o=3,s=e.split("%s"),u=s.shift(),a=[u];s.length;){var f=arguments[o++],l=s.shift();u+=E(f)+l,a.push(f,l.trim())}var h=new Error(u);throw h.messageArray=w(a,(function(t){return""!==t})),null===(i=(r=self).__AMP_REPORT_ERROR)||void 0===i||i.call(r,h),h}function D(t,n,i,r,e){return b(e)?t(i,e.concat([n])):t(i,"".concat(e||r,": %s"),n),n}function I(t,n,i,r,e,o,s,u,a,f,l){return t}function P(t){return(t.ownerDocument||t).defaultView}function U(t){return t.parent&&t.parent!=t}function C(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,s=U(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:s,rootMargin:e})}var H,L=new WeakMap,N=new WeakMap;function T(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=N.get(e);if(o)for(var s=0;s<o.length;s++)(0,o[s])(r)}}}function X(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function _(t){for(var n,i=null,r="",e=O(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=X(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function B(t){var n=_.apply(null,arguments);return n.expected=!0,n}var F=["Webkit","webkit","Moz","moz","ms","O","o"];function V(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;H||(H=M());var r=H[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<F.length;i++){var r=F[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(H[n]=r)}return r}(t.style,n,e);if(o){var s,u=r?i+r:i;t.style.setProperty((s=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),F.some((function(t){return s.startsWith(t+"-")}))?"-".concat(s):s),u)}}function Y(t,n,i){return I(n<=i),Math.min(Math.max(t,n),i)}function J(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}var W=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function Z(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function $(t){var n=(t||self).location;return function(t){var n,i=M();if(!t)return i;for(;n=W.exec(t);){var r=Z(n[1],n[1]),e=n[2]?Z(n[2].replace(/\+/g," "),n[2]):"";i[r]=e}return i}(n.originalHash||n.hash)}var q=function(t){return self.AMP_CONFIG?self.AMP_CONFIG[t]:null},G=("string"==typeof q("cdnProxyRegex")?new RegExp(q("cdnProxyRegex")):q("cdnProxyRegex"))||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function K(t){if(!self.document||!self.document.head)return null;if(self.location&&G.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}var Q=q("cdnUrl")||K("runtime-host")||"https://cdn.ampproject.org",tt=q("errorReportingUrl")||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",nt=q("betaErrorReportingUrl")||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",it="";function rt(t){var n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:ot(t,$(t)),esm:!1,test:!1,rtvVersion:et(t),ssrReady:!1}}(n)}function et(t){var n;return it||(it=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"01".concat("2301041800000")),it}function ot(t,n){var i=n||$(t);return["1","actions","amp","amp4ads","amp4email"].includes(i.development)||!!t.AMP_DEV_MODE}var st=function(){},ut=function(){return"01".concat("2301041800000")},at=function(t,n){return n.reduce((function(t,n){return"".concat(t,"&s[]=").concat(lt(n))}),"https://log.amp.dev/?v=".concat(ut(),"&id=").concat(encodeURIComponent(t)))},ft=function(){return"".concat(Q,"/rtv/").concat(ut(),"/log-messages.simple.json")},lt=function(t){return encodeURIComponent(String(E(t)))},ht=function(t){return parseInt($(t).log,10)},ct=function(){function t(t,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.win=t,this.xt=n,this.At=this.kt(),this.Et=r,this.St=null,this.zt=J((function(){t.fetch(ft()).then((function(t){return t.json()}),st).then((function(t){t&&(i.St=t)}))})),this.It=this.assert.bind(this)}var n=t.prototype;return n.kt=function(){var t,n=this.win;return null!==(t=n.console)&&void 0!==t&&t.log&&0!=ht(n)?this.Ct():0},n.Ct=function(t){return this.xt(ht(t),rt().development)},n.qt=function(t,n,i){var r,e;if(n>this.At)return!1;var o=this.win.console,s=null!==(r=(e={},d(e,1,o.error),d(e,3,o.info),d(e,2,o.warn),e)[n])&&void 0!==r?r:o.log,u=this.Rt(i),a="[".concat(t,"]");return j(u[0])?u[0]=a+" "+u[0]:u.unshift(a),s.apply(o,u),!0},n.fine=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.qt(t,4,i)},n.info=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.qt(t,3,i)},n.warn=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.qt(t,2,i)},n.error=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(!this.qt(t,1,i)){var e,o,s=this.createError.apply(this,i);s.name=t||s.name,null===(e=(o=self).__AMP_REPORT_ERROR)||void 0===e||e.call(o,s)}},n.expectedError=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var e,o;this.qt(t,1,i)||null===(e=(o=self).__AMP_REPORT_ERROR)||void 0===e||e.call(o,this.createExpectedError.apply(this,i))},n.createError=function(t){return this.Pt(_.apply(null,arguments))},n.createExpectedError=function(t){return this.Pt(B.apply(null,arguments))},n.Pt=function(t){return t=X(t),this.Et?t.message?-1==t.message.indexOf(this.Et)&&(t.message+=this.Et):t.message=this.Et:R(t.message)&&(t.message=t.message.replace(S,"")),t},n.Rt=function(t){return b(t[0])?this.Ut(t[0]):t},n.Ut=function(t){var n,i=t.shift();return rt(this.win).development&&this.zt(),null!==(n=this.St)&&void 0!==n&&n[i]?[this.St[i]].concat(t):["More info at ".concat(at(i,t))]},n.assert=function(t,n,i){return b(n)?this.assert.apply(this,[t].concat(this.Ut(n))):z.apply(null,[this.Et].concat(Array.prototype.slice.call(arguments)))},n.assertElement=function(t,n){return function(t,n,i){return D(t,n,k(n),"Element expected",i)}(this.It,t,n)},n.assertString=function(t,n){return function(t,n,i){return D(t,n,j(n),"String expected",i)}(this.It,t,n)},n.assertNumber=function(t,n){return function(t,n,i){return D(t,n,"number"==typeof n,"Number expected",i)}(this.It,t,n)},n.assertArray=function(t,n){return function(t,n,i){return D(t,n,b(n),"Array expected",i)}(this.It,t,n)},n.assertBoolean=function(t,n){return function(t,n,i){return D(t,n,!!n===n,"Boolean expected",i)}(this.It,t,n)},t}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var vt,dt=self.__AMP_LOG,mt=null;function pt(t,n){if(!mt)throw new Error("failed to call initLogConstructor");return new mt(self,t,n)}function gt(t){return dt.user||(dt.user=bt(S)),function(t,n){return n&&n.ownerDocument.defaultView!=t}(dt.user.win,t)?dt.userForEmbed||(dt.userForEmbed=bt("​​​​")):dt.user}function bt(t){return pt((function(t,n){return n||t>=1?4:2}),t)}function wt(t,n,i,r,e,o,s,u,a,f,l){return t}function yt(t,n){return At(t=jt(t),n)}function xt(t,n){return At((i=Ot(t),(r=Ot(i)).isSingleDoc()?r.win:r),n);var i,r}function jt(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function Ot(t){return t.nodeType?function(t){return yt(t,"ampdoc")}(P(t)).getAmpDoc(t):t}function At(t,n){wt(function(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}(t,n));var i=Mt(t)[n];return i.obj||(wt(i.ctor),wt(i.context),i.obj=new i.ctor(i.context),wt(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function Mt(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}var kt,St,Et=function(t){return yt(t,"ampdoc")};function Rt(t){if(void 0!==St)return St;St=!1;try{var n={get passive(){return St=!0,!1}};t.addEventListener("test-options",null,n),t.removeEventListener("test-options",null,n)}catch(t){}return St}function zt(t,n,i,r){return function(t,n,i,r){var e=t,o=i,s=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},u=function(){if(void 0!==kt)return kt;kt=!1;try{var t={get capture(){return kt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return kt}(),a=!(null==r||!r.capture);return e.addEventListener(n,s,u?r:a),function(){null==e||e.removeEventListener(n,s,u?r:a),o=null,e=null,s=null}}(t,n,i,r)}var Dt=!1;var It,Pt,Ut=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=M()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,i=this.Kt+1;for(var r in n){var e=n[r].access;e<i&&(i=e,t=r)}void 0!==t&&(delete n[t],this.Wt--)}},t}(),Ct=(new Set(["c","v","a","ad"]),function(t){return"string"==typeof t?function(t,n){return It||(It=self.document.createElement("a"),Pt=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Ut(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var r,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=r;var o=e;return i&&i.put(n,o),o}(It,t,Pt)}(t):t});var Ht=self.__AMP_ERRORS||[];self.__AMP_ERRORS=Ht;var Lt=function(t){return(n=function(t){var n=t||2,i=0;return function(){var t=Math.pow(n,i++);return 1e3*(t+function(t,n){var i=t*(n=n||.3)*Math.random();return Math.random()>.5&&(i*=-1),i}(t))}}(1.5),Lt=function(t){return setTimeout(t,n())})(t);var n};function Nt(t,n){try{if(t)if(void 0!==t.message)t=X(t);else{var i=t;(t=new Error(function(t){try{return JSON.stringify(t)}catch(n){return String(t)}}(i))).origError=i}else t=new Error("Unknown error");if(t.reported)return t;if(t.reported=!0,t.messageArray){var r=y(t.messageArray,(function(t){return null==t?void 0:t.tagName}));r>-1&&(t.associatedElement=t.messageArray[r])}var e=n||t.associatedElement;if(e&&e.classList&&(e.classList.add("i-amphtml-error"),rt().development&&(e.classList.add("i-amphtml-element-error"),e.setAttribute("error-message",t.message))),self.console&&(R(t.message)||!t.expected)){var o=console.error||console.log;t.messageArray?o.apply(console,t.messageArray):e?o.call(console,t.message,e):o.call(console,t.message)}e&&e.dispatchCustomEventForTesting&&e.dispatchCustomEventForTesting("amp:error",t.message),Tt.call(self,void 0,void 0,void 0,void 0,t)}catch(t){setTimeout((function(){throw t}))}return t}function Tt(t,n,i,r,e){var o,s=this;if(!this||!this.document||e&&e.expected||(wt((o=this.document).defaultView),Dt||(Dt=!0,function(t){!function(t,n){for(var i in n)V(t,i,n[i])}(t.body,{opacity:1,visibility:"visible","animation":"none"})}(o))),!rt().development){var u=!1;try{u=function(t){if(!t.document)return!1;for(var n=t.document.querySelectorAll("script[src]"),i=0;i<n.length;i++)if(r=n[i].src.toLowerCase(),!G.test(Ct(r).origin))return!0;var r;return!1}(self)}catch(t){}if(!(u&&Math.random()>.01)){var a=function(t,n,i,r,e,o){t=function(t,n){return n&&(t=n.message?n.message:String(n)),t||(t="Unknown error"),t}(t,e);var s=!(!e||!e.expected);if(!/_reported_/.test(t)&&"CANCELLED"!=t){var u=!(self&&self.window),a=Math.random();if(!((function(t){return-1!=t.indexOf("Failed to load:")}(t)||"Script error."==t||u)&&(s=!0,a>.001))){var f=R(t);if(!(f&&a>.1)){var l=Object.create(null);l.v=rt().rtvVersion,l.noAmp=o?"1":"0",l.m=t.replace(S,""),l.a=f?"1":"0",l.ex=s?"1":"0",l.dw=u?"1":"0";var h,c,v="1p";if(self.context&&self.context.location?(l["3p"]="1",v="3p"):rt().runtime&&(v=rt().runtime),l.rt=v,"inabox"===v&&(l.adid=rt().a4aId),l.ca=null!==(c=self.AMP_CONFIG)&&void 0!==c&&c.canary?"1":"0",l.bt=(null===(h=self.AMP_CONFIG)||void 0===h?void 0:h.type)||"unknown",self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(l.or=self.location.ancestorOrigins[0]),self.viewerState&&(l.vs=self.viewerState),self.parent&&self.parent!=self&&(l.iem="1"),self.AMP&&self.AMP.viewer){var d=self.AMP.viewer.getResolvedViewerUrl(),m=self.AMP.viewer.maybeGetMessagingOrigin();d&&(l.rvu=d),m&&(l.mso=m)}var p,g,b,w=[],y=self.__AMP__EXPERIMENT_TOGGLES||null;for(var x in y){var j=y[x];w.push("".concat(x,"=").concat(j?"1":"0"))}return l.exps=w.join(","),e?(l.el=(null===(p=e.associatedElement)||void 0===p?void 0:p.tagName)||"u",e.args&&(l.args=JSON.stringify(e.args)),f||e.ignoreStack||!e.stack||(l.s=e.stack),e.message&&(e.message+=" _reported_")):(l.f=n||"",l.l=i||"",l.c=r||""),l.r=self.document?self.document.referrer:"",l.ae=Ht.join(","),l.fr=self.location.originalHash||self.location.hash,"production"===l.bt&&(l.pt="1"),b=t,25,(g=Ht).length>=25&&g.splice(0,g.length-25+1),g.push(b),l}}}}(t,n,i,r,e,u);a&&Lt((function(){try{return function(t,n){return n.pt&&Math.random()<.9?vt||(vt=Promise.resolve(void 0)):function(t,n){var i=Et(t);if(!i.isSingleDoc())return Promise.resolve(!1);var r=i.getSingleDoc();if(!r.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var e=xt(r,"viewer");return e.hasCapability("errorReporter")?e.isTrustedViewer().then((function(t){return!!t&&(e.sendMessage("error",{"m":(i=n).m,"a":i.a,"s":i.s,"el":i.el,"ex":i.ex,"v":i.v,"pt":i.pt}),!0);var i})):Promise.resolve(!1)}(t,n).then((function(t){if(!t){var i=new XMLHttpRequest;i.open("POST",Math.random()<.1?nt:tt,!0),i.send(JSON.stringify(n))}}))}(s,a).catch((function(){}))}catch(t){}}))}}}var Xt=function(){function t(t){this.win=t,this.rc=this.win.Promise.resolve(),this.ec=0,this.sc={},this.oc=Date.now()}var n=t.prototype;return n.timeSinceStart=function(){return Date.now()-this.oc},n.delay=function(t,n){var i=this;if(!n){var r="p"+this.ec++;return this.rc.then((function(){i.sc[r]?delete i.sc[r]:t()})).catch(Nt),r}return this.win.setTimeout((function(){try{t()}catch(t){throw Nt(t),t}}),n)},n.cancel=function(t){"string"!=typeof t?this.win.clearTimeout(t):this.sc[t]=!0},n.promise=function(t){var n=this;return new this.win.Promise((function(i){if(-1==n.delay(i,t))throw new Error("Failed to schedule timer.")}))},n.timeoutPromise=function(t,n,i){var r,e=this,o=new this.win.Promise((function(n,o){if(-1==(r=e.delay((function(){o(gt().createError(i||"timeout"))}),t)))throw new Error("Failed to schedule timer.")}));if(!n)return o;var s=function(){e.cancel(r)};return n.then(s,s),this.win.Promise.race([o,n])},n.poll=function(t,n){var i=this;return new this.win.Promise((function(r){var e=i.win.setInterval((function(){n()&&(i.win.clearInterval(e),r())}),t)}))},t}(),_t=function(){function t(){this.Nt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.Nt||(this.Nt=[]),this.Nt.push(t),function(){n.remove(t)}},n.remove=function(t){this.Nt&&x(this.Nt,t)},n.removeAll=function(){this.Nt&&(this.Nt.length=0)},n.fire=function(t){if(this.Nt)for(var n,i=O(this.Nt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.Nt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),Bt=function(){function t(t,n,i){var r=this;this.Ds=At(t,"timer"),this.js=n,this.zs=i||0,this.Us=-1,this.Ls=0,this.jn=!1,this.Hs=function(){r.Gs()}}var n=t.prototype;return n.isPending=function(){return-1!=this.Us},n.schedule=function(t){var n=t||this.zs;this.jn&&n<10&&(n=10);var i=Date.now()+n;return(!this.isPending()||i-this.Ls<-10)&&(this.cancel(),this.Ls=i,this.Us=this.Ds.delay(this.Hs,n),!0)},n.Gs=function(){this.Us=-1,this.Ls=0,this.jn=!0,this.js(),this.jn=!1},n.cancel=function(){this.isPending()&&(this.Ds.cancel(this.Us),this.Us=-1)},t}(),Ft="__AMP_Gestures",Vt=function(t,n,i,r){this.type=t,this.data=n,this.time=i,this.event=r},Yt=function(){function t(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.zn=t,this.hI=[],this.Eg=[],this.Si=[],this.cI=[],this.lI=null;var r=Rt(t.ownerDocument.defaultView);this.mI=n||r,this.pI=i,this.fI=!1,this.Gs=new Bt(P(t),this.ad.bind(this)),this.dI=new _t,this.vI=Object.create(null),this.yI=this.Wp.bind(this),this.gI=this.Qp.bind(this),this.bI=this.Kp.bind(this),this.xI=this._g.bind(this),this.zn.addEventListener("touchstart",this.yI,!!r&&{passive:!0}),this.zn.addEventListener("touchend",this.gI),this.zn.addEventListener("touchmove",this.bI,!!r&&{passive:!0}),this.zn.addEventListener("touchcancel",this.xI),this.wI=!1}t.get=function(n){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=n[Ft];return e||(e=new t(n,i,r),n[Ft]=e),e};var n=t.prototype;return n.cleanup=function(){this.zn.removeEventListener("touchstart",this.yI),this.zn.removeEventListener("touchend",this.gI),this.zn.removeEventListener("touchmove",this.bI),this.zn.removeEventListener("touchcancel",this.xI),delete this.zn[Ft],this.Gs.cancel()},n.onGesture=function(t,n){var i=new t(this),r=i.getType(),e=this.vI[r];return e||(this.hI.push(i),e=new _t,this.vI[r]=e),e.add(n)},n.removeGesture=function(t){var n=new t(this).getType(),i=this.vI[n];if(i){i.removeAll();var r=y(this.hI,(function(t){return t.getType()==n}));return!(r<0||(this.hI.splice(r,1),this.Si.splice(r,1),this.cI.splice(r,1),this.Eg.splice(r,1),delete this.vI[n],0))}return!1},n.onPointerDown=function(t){return this.dI.add(t)},n.Wp=function(t){var n=Date.now();this.fI=!1,this.dI.fire(t);for(var i=0;i<this.hI.length;i++)this.Si[i]||(this.cI[i]&&this.cI[i]<n&&this.Cg(i),this.hI[i].onTouchStart(t)&&this.Ng(i));this.kI(t)},n.Kp=function(t){for(var n=Date.now(),i=0;i<this.hI.length;i++)this.Eg[i]&&(this.cI[i]&&this.cI[i]<n?this.Cg(i):this.hI[i].onTouchMove(t)||this.Cg(i));this.kI(t)},n.Qp=function(t){for(var n=Date.now(),i=0;i<this.hI.length;i++)if(this.Eg[i])if(this.cI[i]&&this.cI[i]<n)this.Cg(i);else{this.hI[i].onTouchEnd(t);var r=!this.cI[i],e=this.cI[i]<n;this.lI==this.hI[i]||!r&&!e||this.Cg(i)}this.kI(t)},n._g=function(t){for(var n=0;n<this.hI.length;n++)this.AI(n);this.kI(t)},n.Zp=function(t,n){if(this.lI)t.acceptCancel();else{for(var i=Date.now(),r=0;r<this.hI.length;r++)this.hI[r]==t&&(this.Si[r]=i+n,this.cI[r]=0);this.wI=!0}},n.TI=function(t,n){if(this.lI)t.acceptCancel();else for(var i=Date.now(),r=0;r<this.hI.length;r++)this.hI[r]==t&&(this.cI[r]=i+n)},n.SI=function(t){this.lI==t&&(this.lI=null,this.fI=!0)},n.EI=function(t,n,i){I(this.lI==t);var r=this.vI[t.getType()];r&&r.fire(new Vt(t.getType(),n,Date.now(),i))},n.kI=function(t){var n=!!this.lI||this.fI;if(this.fI=!1,!n)for(var i=Date.now(),r=0;r<this.hI.length;r++)if(this.Si[r]||this.cI[r]&&this.cI[r]>=i){n=!0;break}n?(t.stopPropagation(),this.mI||t.preventDefault()):this.pI&&t.stopPropagation(),this.wI&&(this.wI=!1,this.ad())},n.ad=function(){for(var t=Date.now(),n=-1,i=0;i<this.hI.length;i++)this.Si[i]?(-1==n||this.Si[i]>this.Si[n])&&(n=i):this.cI[i]&&this.cI[i]<t&&this.Cg(i);if(-1!=n){for(var r=0,e=0;e<this.hI.length;e++)!this.Si[e]&&this.Eg[e]&&(r=Math.max(r,this.cI[e]-t));r<2?this.OI(n):this.Gs.schedule(r)}},n.OI=function(t){for(var n=this.hI[t],i=0;i<this.hI.length;i++)i!=t&&this.AI(i);this.Si[t]=0,this.cI[t]=0,this.lI=n,n.acceptStart()},n.Ng=function(t){this.Eg[t]=!0,this.cI[t]=0},n.Cg=function(t){this.Eg[t]=!1,this.cI[t]=0,this.Si[t]||this.hI[t].acceptCancel()},n.AI=function(t){this.Si[t]=0,this.Cg(t)},t}(),Jt=function(){function t(t,n){this._I=t,this.Jy=n}var n=t.prototype;return n.getType=function(){return this._I},n.signalReady=function(t){this.Jy.Zp(this,t)},n.signalPending=function(t){this.Jy.TI(this,t)},n.signalEnd=function(){this.Jy.SI(this)},n.signalEmit=function(t,n){this.Jy.EI(this,t,n)},n.acceptStart=function(){},n.acceptCancel=function(){},n.onTouchStart=function(t){return!1},n.onTouchMove=function(t){return!1},n.onTouchEnd=function(t){},t}();function Wt(t,n,i){n<1&&(n=1);var r=t/n,e=.5+Math.min(n/33.34,.5);return r*e+i*(1-e)}Math.round(-16.67/Math.log(.95));var Zt=function(t){i(r,t);var n=s(r);function r(t){return n.call(this,"swipe-x",t,!0,!1)}return r}(function(t){i(r,t);var n=s(r);function r(t,i,r,e){var o;return(o=n.call(this,t,i)).MI=r,o.II=e,o.lI=!1,o.zI=0,o.NI=0,o.RI=0,o.jI=0,o.CI=0,o.DI=0,o.oc=0,o.LI=0,o.UI=0,o.YI=0,o.HI=0,o}var e=r.prototype;return e.onTouchStart=function(t){var n=t.touches;return!!(this.lI&&n&&n.length>1)||!(!n||1!=n.length)&&(this.oc=Date.now(),this.zI=n[0].clientX,this.NI=n[0].clientY,!0)},e.onTouchMove=function(t){var n=t.touches;if(n&&n.length>=1){var i=n[0],r=i.clientX,e=i.clientY;if(this.RI=r,this.jI=e,this.lI)this.VI(!1,!1,t);else{var o=Math.abs(r-this.zI),s=Math.abs(e-this.NI);if(this.MI&&this.II)(o>=8||s>=8)&&this.signalReady(-10);else if(this.MI){if(o>=8&&o>s)this.signalReady(-10);else if(s>=8)return!1}else{if(!this.II)return!1;if(s>=8&&s>o)this.signalReady(-10);else if(o>=8)return!1}}return!0}return!1},e.onTouchEnd=function(t){var n=t.touches;n&&0==n.length&&this.GI(t)},e.acceptStart=function(){this.lI=!0,this.CI=this.zI,this.DI=this.NI,this.UI=this.oc,this.zI=this.RI,this.NI=this.jI,this.VI(!0,!1,null)},e.acceptCancel=function(){this.lI=!1},e.VI=function(t,n,i){this.LI=Date.now();var r=this.LI-this.UI;if(!n&&r>4||n&&r>16){var e=Wt(this.RI-this.CI,r,this.YI),o=Wt(this.jI-this.DI,r,this.HI);(!n||r>32||0!=e||0!=o)&&(this.YI=Math.abs(e)>1e-4?e:0,this.HI=Math.abs(o)>1e-4?o:0),this.CI=this.RI,this.DI=this.jI,this.UI=this.LI}this.signalEmit({first:t,last:n,time:this.LI,deltaX:this.RI-this.zI,deltaY:this.jI-this.NI,startX:this.zI,startY:this.NI,lastX:this.RI,lastY:this.jI,velocityX:this.YI,velocityY:this.HI},i)},e.GI=function(t){this.lI&&(this.lI=!1,this.VI(!1,!0,t),this.signalEnd())},r}(Jt)),$t=["as","containerClass"],qt=["displayHintOnce","firstImageAs","firstLabelAs","initialPosition","leftHintAs","rightHintAs","secondImageAs","secondLabelAs","stepSize"];mt=ct,dt.dev||(dt.dev=pt((function(t){return t>=3?4:t>=2?3:0}))),gt(),function(t,n,i,r){(function(t,n,i,r,e,o){var s=Mt(t),u=s[i];u||(u=s[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),u.ctor||(u.ctor=r,u.context=n,u.sharedInstance=!1,u.resolve&&At(t,i))})(t=jt(t),t,n,i),r&&At(t,n)}(global,"timer",Xt);var Gt=(0,t.forwardRef)((function(n,i){var r=n.as,e=void 0===r?"div":r,o=n.containerClass,s=g(n,$t);return(0,t.createElement)("div",{ref:i,class:o},(0,t.createElement)(e,p({},s)))}));function Kt(t,n){return null!=t&&void 0!==n}function Qt(t){console.warn(t)}var tn=(0,t.forwardRef)((function(n,i){var r,e,o=n.displayHintOnce,s=n.firstImageAs,u=n.firstLabelAs,d=n.initialPosition,m=n.leftHintAs,b=n.rightHintAs,w=n.secondImageAs,y=n.secondLabelAs,x=n.stepSize,j=void 0===x?.1:x,O=g(n,qt),A=(0,t.useRef)(null),M=(0,t.useRef)(null),k=(0,t.useRef)(null),S=(0,t.useRef)(null),E=(0,t.useRef)(null),R=(0,t.useRef)(null),z=(0,t.useRef)(null),D=(0,t.useRef)(null),I=(0,t.useRef)(null),U=(0,t.useRef)(null),H=(0,t.useRef)(null),X=(0,t.useRef)(null),_=(0,t.useRef)(null),B=(0,t.useRef)(null),F=(0,t.useRef)(null),J=(0,t.useRef)(null),W=(0,t.useRef)(null),Z=(0,t.useRef)(null),$=(0,t.useRef)(null),q=(0,t.useRef)(null),G=(0,t.useRef)(null),K=(0,t.useRef)(null),Q=(r=(0,t.useState)(!1),e=2,function(t){if(Array.isArray(t))return t}(r)||function(t,n){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var r,e,o=[],s=!0,u=!1;try{for(i=i.call(t);!(s=(r=i.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(t){u=!0,e=t}finally{try{s||null==i.return||i.return()}finally{if(u)throw e}}return o}}(r,e)||a(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),tt=Q[0],nt=Q[1],it=(0,t.useCallback)((function(){nt(!0)}),[nt]),rt=(0,t.useCallback)((function(){nt(!1)}),[nt]),et=(0,t.useCallback)((function(t){var n;null!=t&&t.current&&(null===(n=t.current)||void 0===n||n.call(t),t.current=null)}),[]),ot=(0,t.useCallback)((function(t){return Y(t,0,1)}),[]),st=(0,t.useCallback)((function(t,n){V(t,"transform","translateX(".concat(100*n,"%)"))}),[]),ut=(0,t.useCallback)((function(t){t=ot(t),st(X.current,t),st(H.current,t),st(E.current,-t);var n=t-.5;st(W.current,n),st(Z.current,n),null!=D.current&&st(D.current,-t)}),[ot,st]),at=(0,t.useCallback)((function(t){var n=k.current.getBoundingClientRect(),i=n.left,r=n.right,e=n.width,o=Y(t,i,r);ut((o-i)/e)}),[ut]),ft=(0,t.useCallback)((function(){A.current||(A.current=Yt.get(k.current,!0),A.current.onGesture(Zt,(function(t){t.data.first&&it(),at(t.data.startX+t.data.deltaX)})),A.current.onPointerDown((function(t){at(t.touches[0].pageX),it()})))}),[it,at]),lt=(0,t.useCallback)((function(){var t=X.current.getBoundingClientRect().left,n=k.current.getBoundingClientRect();return(t-n.left)/n.width}),[]),ht=(0,t.useCallback)((function(t){if(!0===t)ut(0);else{var n=ot(lt()-j);ut(n)}}),[lt,ut,ot,j]),ct=(0,t.useCallback)((function(){ut(.5)}),[ut]),vt=(0,t.useCallback)((function(t){if(!0===t)ut(1);else{var n=ot(lt()+j);ut(n)}}),[ut,ot,lt,j]),dt=(0,t.useCallback)((function(t){var n;if(M.current.activeElement===(null==k?void 0:k.current)||M.current.activeElement===(null==k||null===(n=k.current)||void 0===n?void 0:n.offsetParent))switch(it(),t.key.toLowerCase()){case"left":case"arrowleft":t.preventDefault(),t.stopPropagation(),ht();break;case"right":case"arrowright":t.preventDefault(),t.stopPropagation(),vt();break;case"pageup":t.preventDefault(),t.stopPropagation(),ht(!0);break;case"pagedown":t.preventDefault(),t.stopPropagation(),vt(!0);break;case"home":t.preventDefault(),t.stopPropagation(),ct()}}),[it,ht,vt,ct]),mt=(0,t.useCallback)((function(t){t.preventDefault(),at(t.pageX)}),[at]),pt=(0,t.useCallback)((function(t){t.preventDefault(),et(G),et($)}),[et]),gt=(0,t.useCallback)((function(t){t.preventDefault(),at(t.pageX),null===G.current&&(G.current=zt(window,"mousemove",mt)),null===$.current&&($.current=zt(window,"mouseup",pt)),it()}),[it,at,G,$,mt,pt]),bt=(0,t.useCallback)((function(){(!1).current||(q.current=zt(k.current,"mousedown",gt),K.current=zt(k.current,"keydown",dt),ft())}),[K,!1,gt,dt,ft]),wt=(0,t.useCallback)((function(t){t&&!o&&rt()}),[rt,o]);return(0,t.useEffect)((function(){var t;if(!Kt(s,w))return null;if(M.current=null==k||null===(t=k.current)||void 0===t?void 0:t.ownerDocument,function(t,n,i){var r=P(t);if(i){var e=C((function(t){n(t[t.length-1])}),r,i);return e.observe(t),function(){e.unobserve(t)}}var o=L.get(r);o||L.set(r,o=C(T,r));var s=N.get(t);s||(s=[],N.set(t,s)),s.push(n),o.observe(t)}(k.current,(function(t){var n=t.isIntersecting;return wt(n)})),bt(),d){if(isNaN(d))return Qt("initialPosition must be a finite number"),null;ut(d)}}),[bt,d,ut,s,w,wt]),(0,t.useImperativeHandle)(i,(function(){return{seekTo:function(){ut(arguments.length>0&&void 0!==arguments[0]?arguments[0]:50)}}}),[ut]),isNaN(j)?(Qt("stepSize must be a finite number"),null):Kt(s,w)?(0,t.createElement)(t.ContainWrapper,p({ref:k,class:"image-slider-container-05912a8",layout:!0,size:!0,paint:!0,tabindex:"0",autoFocus:"true",onMouseDown:gt,onMouseUp:pt},O),(0,t.createElement)("div",{ref:U,class:"image-slider-left-mask-05912a8"},(0,t.createElement)("div",{ref:R,class:h},(0,t.createElement)(Gt,{as:u,class:"image-slider-left-label",ref:z})),(0,t.createElement)(Gt,{as:s,class:"image-slider-left-image",ref:S})),(0,t.createElement)("div",{ref:H,class:"image-slider-right-mask-05912a8 "+l},(0,t.createElement)("div",{ref:D,class:h+" "+f},(0,t.createElement)(Gt,{ref:I,class:"image-slider-right-label",as:y})),(0,t.createElement)(Gt,{as:w,ref:E,class:"image-slider-right-image",containerClass:""+f})),(0,t.createElement)("div",{class:"image-slider-bar-05912a8 "+l,ref:X},(0,t.createElement)("div",{class:"image-slider-bar-stick-05912a8 "+f})),(0,t.createElement)("div",{ref:W,class:v+(tt?" "+c:"")},(0,t.createElement)("div",{ref:F,class:"image-slider-hint-left-wrapper-05912a8"},(0,t.createElement)(Gt,{as:m,ref:_,class:"image-slider-hint-left-05912a8 image-slider-left-hint"}))),(0,t.createElement)("div",{ref:Z,class:v+(tt?" "+c:"")},(0,t.createElement)("div",{ref:J,class:"image-slider-hint-right-wrapper-05912a8"},(0,t.createElement)(Gt,{as:b,ref:B,class:"image-slider-hint-right-05912a8 image-slider-right-hint"})))):(Qt("2 images must be provided for comparison"),null)}));tn.displayName="BentoImageSlider";var nn=function(t){i(r,t);var n=s(r);function r(){return n.apply(this,arguments)}return r}(t.PreactBaseElement);nn.Component=tn,nn.props={firstImageAs:{selector:'amp-img[slot="first-image"]',single:!0,as:!0},secondImageAs:{selector:'amp-img[slot="second-image"]',single:!0,as:!0},firstLabelAs:{selector:'div[slot="first-label"]',single:!0,as:!0},secondLabelAs:{selector:'div[slot="second-label"]',single:!0,as:!0},leftHintAs:{selector:'div[slot="left-hint"]',single:!0,as:!0},rightHintAs:{selector:'div[slot="right-hint"]',single:!0,as:!0},initialPosition:{attr:"initial-slider-position",type:"number"},displayHintOnce:{attr:"display-hint-once",type:"boolean"},stepSize:{attr:"step-size",type:"number",default:.1}},nn.layoutSizeDefined=!0,nn.usesShadowDom=!0,nn.shadowCss='.image-slider-container-05912a8{top:0!important;left:0!important;right:0!important;bottom:0!important;position:absolute!important;transform:translateZ(0)!important}.image-slider-left-mask-05912a8,.image-slider-right-mask-05912a8{top:0!important;left:0!important;right:0!important;bottom:0!important;overflow:hidden!important;position:absolute!important}.image-slider-right-mask-05912a8{z-index:1!important}.image-slider-push-left-05912a8{height:100%;transform:translateX(-50%)}.image-slider-push-right-05912a8{transform:translateX(50%)}.image-slider-bar-05912a8{top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:3!important;position:absolute!important;direction:ltr!important}.image-slider-bar-stick-05912a8{width:20%!important;cursor:col-resize!important;height:100%!important}.image-slider-bar-stick-05912a8:before{top:0!important;left:50%!important;border:0.5px solid #fff!important;bottom:0!important;content:""!important;display:block!important;opacity:0.5!important;position:absolute!important;transform:translate(-50%)!important;box-sizing:border-box!important}.image-slider-label-wrapper-05912a8{top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1!important;position:absolute!important}.image-slider-hint-hidden-05912a8{opacity:0;transition:opacity 0.4s linear}.image-slider-hint-05912a8{top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:2;position:absolute!important;transition:opacity 0.4s ease-in}.image-slider-hint-left-wrapper-05912a8{right:50%!important}.image-slider-hint-left-wrapper-05912a8,.image-slider-hint-right-wrapper-05912a8{height:100%!important;display:-ms-flexbox!important;display:flex!important;position:absolute!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-pack:center!important;justify-content:center!important}.image-slider-hint-right-wrapper-05912a8{left:50%!important}.image-slider-hint-left-05912a8{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 8"><path d="M4 5h12V3H4V0L0 4l4 4z" fill="%23fff"/></svg>\')}.image-slider-hint-left-05912a8,.image-slider-hint-right-05912a8{width:56px;filter:drop-shadow(3px 3px 4px black);height:16px;background-size:56px 16px}.image-slider-hint-right-05912a8{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 8"><path d="M24 5H12V3h12V0l4 4-4 4z" fill="%23fff"/></svg>\')}',(0,t.defineBentoElement)("bento-image-slider",nn,undefined)}))}();
//# sourceMappingURL=bento-image-slider-1.0.js.map