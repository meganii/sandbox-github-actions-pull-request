;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-carousel",ev:"0.2",l:!1,f:function(t,i){!function(){var i,n=function(){var t=this;this.promise=new Promise((function(i,n){t.resolve=i,t.reject=n}))};function s(t,i){return(s=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,i){if(i&&("object"===o(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var h=Object.prototype,u=h.hasOwnProperty;function a(t,i,n,s,r,o,e,h,u,a,l){return t}h.toString;var l,c,f=!0,m=!0;function p(t){return function(t,i){if(a(1===i.length),a(Array.isArray(i)||(s=i,u.call(s,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return i[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=i[0];var s,r=t.firstElementChild;return a(r),a(!r.nextElementSibling),t.removeChild(r),r}(l,t)}var v=["Webkit","webkit","Moz","moz","ms","O","o"],d={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function b(t){var i=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return v.some((function(t){return i.startsWith(t+"-")}))?"-".concat(i):i}function g(t,i,n){if(S(i))return i;var s;c||(s=Object.create(null),c=s);var r=c[i];if(!r||n){if(r=i,void 0===t[i]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(var n=0;n<v.length;n++){var s=v[n]+i;if(void 0!==t[s])return s}return""}(t,o);void 0!==t[e]&&(r=e)}n||(c[i]=r)}return r}function x(t,i){var n=t.style;for(var s in i)n.setProperty(b(g(n,s)),String(i[s]),"important")}function w(t,i,n,s,r){var o=g(t.style,i,r);if(o){var e=s?n+s:n;t.style.setProperty(b(o),e)}}function y(t,i){return t.getComputedStyle(i)||d}function S(t){return t.startsWith("--")}function M(t,i,n){var s=0,r=0,o=null;function e(){s=0;var h,u=n-(t.Date.now()-r);u>0?s=t.setTimeout(e,u):(h=o,o=null,i.apply(null,h))}return function(){r=t.Date.now();for(var i=arguments.length,h=new Array(i),u=0;u<i;u++)h[u]=arguments[u];o=h,s||(s=t.setTimeout(e,n))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function k(t,i){throw new Error("failed to call initLogConstructor")}function N(t){return k()}function j(t,i,n,s,r,o,e,h,u,a,l){return t}function E(t,i){return C(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function O(t,i){return C(A(R(t)),i)}function P(t,i){return _(A(t),i)}function R(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,E(i,"ampdoc")).getAmpDoc(t):t;var i,n}function A(t){var i=R(t);return i.isSingleDoc()?i.win:i}function C(t,i){j(I(t,i));var n=T(t)[i];return n.obj||(j(n.ctor),j(n.context),n.obj=new n.ctor(n.context),j(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function _(t,i){var n=T(t)[i];return n?n.promise?n.promise:(C(t,i),n.promise=Promise.resolve(n.obj)):null}function T(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function I(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var L,B=function(t){return function(t,i,s,r){var o=P(t,i);if(o)return o;var e=R(t);return e.whenExtensionsKnown().then((function(){var t=e.getExtensionVersion(s);return t?E(e.win,"extensions").waitForExtension(s,t):null})).then((function(s){return s?function(t,i){return function(t,i){var s=_(t,i);if(s)return s;var r,o,e,h,u=T(t);return u[i]=(o=(r=new n).promise,e=r.reject,h=r.resolve,o.catch((function(){})),{obj:null,promise:o,resolve:h,reject:e,context:null,ctor:null}),u[i].promise}(A(t),i)}(t,i):null}))}(t,"amp-analytics-instrumentation","amp-analytics")},U=function(t){return O(t,"owners")};function H(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];B(t).then((function(r){r&&r.triggerEventForTarget(t,i,n,s)}))}function W(t,i,n,s){var r=t,o=n,e=function(t){try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},h=function(){if(void 0!==L)return L;L=!1;try{var t={get capture(){return L=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return L}(),u=!(null==s||!s.capture);return r.addEventListener(i,e,h?s:u),function(){null==r||r.removeEventListener(i,e,h?s:u),o=null,r=null,e=null}}function V(t,i,n,s){var r={detail:n};if(Object.assign(r,s),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(i,!!r.bubbles,!!r.cancelable,n),o}function D(t,i,n,s){return W(t,i,n,s)}function F(t){return t.detail}function X(t,i,n,s){var r=n,o=W(t,i,(function(t){try{r(t)}finally{r=null,o()}}),s);return o}function Z(t,i){return t>0&&i>0?t%i:(t%i+i)%i}function q(t,i,n){return a(i<=n),Math.min(Math.max(t,i),n)}var G="amp-carousel:indexchange",J="amp-carousel:scrollstart",K="amp-carousel:scrollpositionchange",Q=function(){function t(t){var i=this,n=t.advanceable,s=t.element,r=t.scrollContainer,o=t.win;this.t=o,this.M5=r,this.z5=n,this.N5=0,this.j5=!1,this.P5=1,this.R5=1e3,this.C5=!1,this.L5=!1,this.B5=null,this.U5=Number.POSITIVE_INFINITY,this.te=s.getAmpDoc(),this.H5(this.R5),this.M5.addEventListener("scroll",(function(){return i.W5()}),!0),D(this.M5,"touchstart",(function(){return i.V5()}),{capture:!0,passive:!0}),D(s,G,(function(t){i.D5(t)}))}var i=t.prototype;return i.stop=function(){this.L5=!0},i.pause=function(){this.C5=!0},i.resume=function(){this.C5=!1,this.F5()},i.updateAutoAdvance=function(t){this.j5=t,this.F5()},i.updateAutoAdvanceCount=function(t){this.P5=t,this.F5()},i.updateAutoAdvanceInterval=function(t){this.R5=Math.max(t,1e3),this.H5(this.R5),this.F5()},i.updateMaxAdvances=function(t){this.U5=t},i.H5=function(t){var i=this,n=M(this.t,(function(){n==i.B5&&i.X5()}),t);this.B5=n},i.V5=function(){var t=this;this.pause(),X(window,"touchend",(function(){t.resume()}),{capture:!0,passive:!0})},i.Z5=function(){return this.j5&&this.te.isVisible()&&!this.C5&&!this.L5&&this.N5<this.U5},i.W5=function(){this.F5()},i.D5=function(t){var i=F(t).actionSource;i&&4!==i&&this.stop()},i.X5=function(){this.Z5()&&(this.z5.advance(this.P5,{actionSource:4,allowWrap:!0}),this.N5+=this.P5)},i.F5=function(){this.Z5()&&this.B5()},t}(),Y=function(){function t(t){var i=this,n=t.element,s=t.runMutate,r=t.scrollContainer,o=t.stoppable,e=t.win;this.t=e,this.M5=r,this.q5=s,this.G5=[],this.J5=1,this.K5=!1,this.Q5=!1,this.ro=0,n.addEventListener("focus",(function(){o.stop()}),!0),n.addEventListener(G,(function(t){i.Y5(t)}))}var i=t.prototype;return i.updateMixedLength=function(t){this.K5=t},i.updateUi=function(){var t=this;this.Q5||(this.Q5=!0,this.q5((function(){t.Q5=!1,t.o8(),t.u8()})))},i.updateSlides=function(t){this.G5=t,this.updateUi()},i.updateVisibleCount=function(t){this.J5=t,this.updateUi()},i.a8=function(){return this.K5||this.J5>=2},i.o8=function(){this.a8()?(this.M5.removeAttribute("aria-live"),this.M5.setAttribute("role","list"),this.G5.forEach((function(t){t.setAttribute("role","listitem")}))):(this.M5.setAttribute("aria-live","polite"),this.M5.removeAttribute("role"),this.G5.forEach((function(t){t.removeAttribute("role")})))},i.u8=function(){var t=this;this.G5.forEach((function(i,n){var s=!t.a8()&&n!==t.ro;i.setAttribute("aria-hidden",s)}))},i.Y5=function(t){var i=this,n=F(t).index;this.ro=n,this.q5((function(){i.u8()}))},t}(),$="start";function tt(t,i){var n=i.getBoundingClientRect(),s=n.bottom,r=n.height,o=n.left,e=n.right,h=n.top,u=n.width;return{start:0==t?o:h,end:0==t?e:s,length:0==t?u:r}}function it(t,i){var n=tt(t,i),s=n.end;return(n.start+s)/2}function nt(t,i){return tt(t,i).start}function st(t,i,n){return i==$?nt(t,n):it(t,n)}function rt(t,i,n){w(i,0==t?"width":"height","".concat(n,"px"))}function ot(t,i,n){var s=tt(t,i),r=s.end;return s.start<=n&&n<r}function et(t,i,n,s){return(st(t,i,s)-st(t,i,n))/tt(t,s).length}function ht(t,i,n){!function(t,i,n){0==t?i.scrollLeft=n:i.scrollTop=n}(t,i,function(t,i){return 0==t?i.scrollLeft:i.scrollTop}(t,i)+n)}var ut="i-amphtml-carousel-spacer";function at(t,i){var n=function(t,i,n){var s=g(t.style,"scrollBehavior",void 0);if(s)return S(s)?t.style.getPropertyValue(s):t.style[s]}(t);w(t,"scrollBehavior","auto"),i(),w(t,"scrollBehavior",n)}function lt(t){return t.reduce((function(t,i){return t+i}),0)}var ct=function(){function t(t){var i=this,n=t.element,s=t.initialIndex,r=t.runMutate,o=t.scrollContainer,e=t.win;this.t=e,this.q5=r,this.zn=n,this.M5=o,this.j5=new Q({win:e,element:n,scrollContainer:o,advanceable:this}),this.l8=new Y({win:e,element:n,scrollContainer:o,runMutate:r,stoppable:this.j5}),this.c8=M(e,(function(){return i.f8()}),200),this.m8=1,this.p8=Number.POSITIVE_INFINITY,this.K5=!1,this.G5=[],this.v8=!0,this.Q5=!1,this.d8=[],this.b8=[],this.g8=[],this.x8=[],this.w8=!1,this.y8=!1,this.S8=0,this.M8=null,this.z8=NaN,this.k8=!1,this.N8=!1,this.j8=void 0,this.E8=$,this.O8=0,this.P8=!0,this.A8=!0,this.qL=s||0,this.kd=!1,this._V=!0,this.C8=1,this.J5=1,this.M5.addEventListener("scroll",(function(){return i.W5()}),!0),this.M5.addEventListener("scrollend",(function(){return i._8()}),!0),D(this.M5,"touchstart",(function(){return i.V5()}),{capture:!0,passive:!0}),D(this.M5,"wheel",(function(){return i.T8()}),{capture:!0,passive:!0})}var i=t.prototype;return i.next=function(t){this.advance(this.m8,{actionSource:t})},i.prev=function(t){this.advance(-this.m8,{actionSource:t})},i.advance=function(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=this.qL,r=this.M8,o=this.G5,e=n.actionSource,h=n.allowWrap,u=void 0!==h&&h,a=null!==r?r:s,l=a+t,c=o.length-1,f=0===a,m=a===c,p=l<0,v=l>c,d=t>0&&this.I8(a)&&this.I8(l);i=this.isLooping()?Z(l,c+1):u?d?0:p&&f||v&&!m?c:p&&!f||v&&m?0:l:d?a:q(l,0,c),this.goToSlide(i,{actionSource:e})},i.pauseLayout=function(){this.w8=!0,this.j5.pause()},i.resumeLayout=function(){this.w8=!1,this.updateUi(),this.j5.resume()},i.getCurrentIndex=function(){return this.qL},i.getVisibleCount=function(){return this.J5},i.isLooping=function(){return this.kd&&this.G5.length/this.J5>=3},i.goToSlide=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.actionSource,s=i.smoothScroll,r=void 0===s||s;t<0||t>this.G5.length-1||isNaN(t)||t!==this.qL&&(this.k8||this.L8()||(this.y8=!1,this.M8=t,this.j8=n,this.B8(this.G5[t],{smoothScroll:r})))},i.updateAdvanceCount=function(t){this.m8=t},i.updateAlignment=function(t){this.E8="start"===t?$:"center",this.updateUi()},i.updateAutoAdvance=function(t){this.j5.updateAutoAdvance(t)},i.updateAutoAdvanceCount=function(t){this.j5.updateAutoAdvanceCount(t)},i.updateAutoAdvanceInterval=function(t){this.j5.updateAutoAdvanceInterval(t)},i.updateAutoAdvanceLoops=function(t){this.p8=t,this.updateUi()},i.updateForwards=function(t){this.P8=t,this.updateUi()},i.updateHideScrollbar=function(t){this.A8=t,this.updateUi()},i.updateHorizontal=function(t){this.O8=t?0:1,this.updateUi()},i.updateLoop=function(t){this.kd=t,this.updateUi()},i.updateMixedLength=function(t){this.K5=t,this.l8.updateMixedLength(t),this.updateUi()},i.updateSlides=function(t){var i=t.length;if(i)this.G5=t,this.qL=this.isLooping()?Z(this.qL,i):q(this.qL,0,i-1)||0,this.l8.updateSlides(t),this.updateUi();else{var n=this.zn.tagName.toUpperCase();(z.dev||(z.dev=k())).warn(n,"No slides were found.")}},i.updateSnap=function(t){this._V=t,this.updateUi()},i.updateSnapBy=function(t){this.C8=Math.max(1,t),this.updateUi()},i.updateUserScrollable=function(t){this.v8=t,this.updateUi()},i.updateUi=function(){var t=this;this.Q5||this.w8||(this.Q5=!0,this.q5((function(){t.Q5=!1,t.M5.setAttribute("mixed-length",t.K5),t.M5.setAttribute("user-scrollable",t.v8),t.M5.setAttribute("hide-scrollbar",t.A8),t.M5.setAttribute("horizontal",0===t.O8),t.M5.setAttribute("loop",t.isLooping()),t.M5.setAttribute("snap",t._V),x(t.M5,{"--visible-count":t.J5}),t.G5.length&&(t.j5.updateMaxAdvances(t.p8*t.G5.length-1),t.U8(),t.H8(),t.W8(),t.f8(!0))})))},i.updateVisibleCount=function(t){this.J5=Math.max(1,t),this.l8.updateVisibleCount(t),this.updateUi()},i.V8=function(t,i){this.z8!==t&&(this.z8=t,this.zn.dispatchEvent(V(this.t,G,{"index":t,"total":this.G5.length,"actionSource":i,"slides":this.G5},{bubbles:!0})))},i.D8=function(t,i){this.qL=t,this.S8=i,this.zn.dispatchEvent(V(this.t,"amp-carousel:offsetchange",{"index":t,"total":this.G5.length,"offset":this.P8?-i:i,"slides":this.G5},{bubbles:!0}))},i.notifyScrollStart=function(){this.zn.dispatchEvent(V(this.t,J,null))},i.F8=function(){this.zn.dispatchEvent(V(this.t,K,null))},i.V5=function(){var t=this;this.k8=!0,this.j8=3,this.M8=null,this.y8=!1,X(window,"touchend",(function(){t.k8=!1,t.c8()}),{capture:!0,passive:!0})},i.T8=function(){this.j8=2,this.M8=null,this.y8=!1},i.W5=function(){this.y8?this.y8=!1:(this.N8=!0,this.X8(),this.notifyScrollStart(),this.c8())},i._8=function(){null===this.M8&&this.f8()},i.L8=function(){return this.N8&&(3===this.j8||2===this.j8)},i.Z8=function(t,i,n){var s=i*n*(this.P8?1:-1);!function(t,i,n){var s=0==t?n:0,r=0==t?0:n;w(i,"transform","translate(".concat(s,"px, ").concat(r,"px)")),x(i,{"--content-transform":"translate(".concat(s,"px, ").concat(r,"px)")})}(this.O8,t,s),t._revolutions=i},i.q8=function(t){var i=this;this.G5.forEach((function(n){i.Z8(n,0,t)}))},i.G8=function(){var t=this;return this.G5.map((function(i){return tt(t.O8,i).length}))},i.isAtEnd=function(){return!this.isLooping()&&this.J8()},i.isAtStart=function(){return!this.isLooping()&&this.K8()},i.J8=function(){var t=this.M5,i=t.getBoundingClientRect().width*(this.P8?1:-1),n=this.P8?Math.ceil(i):Math.floor(i),s=t.scrollLeft+n,r=t.scrollWidth;return this.P8?s>=r:s<=-r},i.K8=function(){var t=this.M5.scrollLeft;return this.P8?t<=0:t>=0},i.Q8=function(t){for(var i=[],n=0;n<t;n++){var s=document.createElement("div");s.className=ut,i.push(s)}return i},i.U8=function(){var t=this,i=this.O8,n=this.G5,s=this.G8(),r=lt(s),o=this.isLooping()?n.length:0;this.d8.forEach((function(i){t.M5.removeChild(i)})),this.d8=this.Q8(o),this.d8.forEach((function(r,o){rt(i,r,s[o]),t.M5.insertBefore(r,n[0])})),this.b8.forEach((function(i){t.M5.removeChild(i)})),this.b8=this.Q8(o),this.b8.forEach((function(n,o){rt(i,n,s[o]),t.Z8(n,-1,r),t.M5.appendChild(n)})),this.g8.forEach((function(i){t.M5.removeChild(i)})),this.g8=this.Q8(o),this.g8.forEach((function(n,o){rt(i,n,s[o]),t.Z8(n,-1,r),t.M5.appendChild(n)})),this.x8=this.d8.concat(this.b8,this.g8)},i.H8=function(){var t=this,i=this.G5.length,n=this.E8===$,s=1===Z(this.J5,2),r=n||s?"0%":"50%";!function(n,s){for(var o=n.length,e=0;e<o;e++)h=n[e],void 0,void 0,u=Z(e,i),a=0===Z(u,t.C8),!h.classList.contains(ut)&&t.isLooping()||function(t,i){for(var n in i)w(t,n,i[n])}(h,{"scroll-snap-align":a?t.E8:"none","scroll-snap-coordinate":a?r:"none"});var h,u,a}(this.M5.children)},i.W8=function(){var t=this.g8,i=this.d8,n=this.qL,s=this.G5,r=Math.max(0,s.length-n-1),o=Math.max(0,n-1);i.forEach((function(t,o){var e,h,u,a=(e=n,h=o,u=i.length,(e===h?u:Z(e-h,u))>s.length-1);t.hidden=a||o<s.length-r})),t.forEach((function(i,r){var e,h,u,a=(e=n,h=r,u=t.length,(e===h?u:Z(h-e,u))>s.length-1);i.hidden=a||r>o}))},i.X8=function(){var t=this,i=this.E8,n=this.x8,s=this.O8,r=this.qL,o=this.M5,e=this.G5,h=lt(this.G8()),u=!!n.length,a=u?n:e,l=function(t,i,n,s,r){var o=st(t,i,n);if(ot(t,s[r],o))return r;for(var e=1;e<=s.length/2;e++){var h=Z(r+e,s.length),u=Z(r-e,s.length);if(ot(t,s[h],o))return h;if(ot(t,s[u],o))return u}}(s,i,o,a,u?r+e.length:r);if(void 0!==l){var c=a[l],f=l%e.length,m=et(s,i,o,c);this.D8(f,m),f!==r&&this.q5((function(){t.Y8(h)}))}},i.f8=function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.j8;if(!this.k8&&(this.j8=void 0,this.N8=!1,this.q5((function(){t.F8()})),this.z8!==this.qL||null!==this.M8||i)){null!==this.M8&&(this.qL=this.M8,this.M8=null,this.S8=0);var s=lt(this.G8());this.q5((function(){t.V8(t.qL,n),t.D8(t.qL,t.S8),t.q8(s),t.W8(),t.Y8(s),t.t9()}))}},i.t9=function(){var t=this.E8,i=this.O8,n=this.S8,s=this.qL,r=this.M5,o=this.G5[s],e=(et(i,t,r,o)-n)*tt(i,o).length;e&&(this.y8=!0,at(r,(function(){ht(i,r,e)})))},i.B8=function(t,i){var n=this;(i.smoothScroll?function(t,i){return i()}:at)(this.M5,(function(){!function(t,i,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=i==$,e=tt(t,s).length,h=o?nt(t,s):it(t,s),u=o?nt(t,n):it(t,n);ht(t,n,h-u-r*e)}(n.O8,n.E8,n.M5,t)}))},i.i9=function(t,i,n){for(var s=this.qL,r=this.z8,o=this.G5,e=o[s]._revolutions||0,h=n?1:-1,u=1;u<=i;u++){var a=Z(s+u*h,o.length);if(a===r&&s!==r)break;var l=o[a],c=a>s!==n?e+h:e;this.Z8(l,c,t)}},i.Y8=function(t){if(this.isLooping()){var i=this.E8,n=this.G5,s=this.J5,r=i===$?s-1:0,o=(n.length-1-r)/2,e=(n.length-1+r)/2;this.i9(t,Math.round(o),!1),this.i9(t,Math.round(e),!0)}},i.I8=function(t){var i=this.E8,n=this.G5,s=this.J5,r=i===$?s:s/2;return t>=n.length-r},t}(),ft="__AMP_CAROUSEL_NEAR_VIEWPORT",mt="__AMP_CAROUSEL_IN_VIEWPORT",pt=function(){function t(t){var i=t.ampElement,n=t.intersectionElement,s=t.intersectionThreshold,r=void 0===s?.01:s,o=t.nearbyMarginInPercent,e=void 0===o?100:o,h=t.viewportIntersectionThreshold,u=void 0===h?r:h,a=t.viewportIntersectionCallback,l=void 0===a?function(){}:a;this.n9=i,this.NL=U(i.element),this.s9=n,this.r9=r,this.o9=e,this.e9=u,this.h9=l,this.u9=!1,this.tZ=[],this.a9=null,this.l9=null,this.Wd=null,this.c9=!1}var i=t.prototype;return i.setQueueChanges=function(t){this.u9=t},i.f9=function(t,i){i?this.NL.scheduleLayout(this.n9.element,t):this.NL.scheduleUnlayout(this.n9.element,t)},i.m9=function(t,i){this.h9(t,i)},i.jf=function(){var t=this;if(!(this.a9&&this.l9&&this.Wd)){var i=this.n9.win;this.a9=new i.IntersectionObserver((function(i){return t.p9(i)}),{root:this.s9,rootMargin:"".concat(this.o9,"%"),threshold:this.r9}),this.l9=new i.IntersectionObserver((function(i){return t.v9(i)}),{root:this.s9,rootMargin:"".concat(this.o9+10,"%"),threshold:this.r9}),this.Wd=new i.IntersectionObserver((function(i){return t.d9(i)}),{root:this.s9,rootMargin:"0%",threshold:this.e9})}},i.p9=function(t){t.filter((function(t){return t.isIntersecting})).forEach((function(t){t.target[ft]=0})),this.u9||this.b9()},i.v9=function(t){t.filter((function(t){return!t.isIntersecting})).forEach((function(t){t.target[ft]=1})),this.u9||this.g9()},i.d9=function(t){t.forEach((function(t){var i=t.isIntersecting;t.target[mt]=i?0:1})),this.u9||this.x9()},i.flushChanges=function(){this.b9(),this.g9(),this.x9()},i.b9=function(){for(var t=0;t<this.tZ.length;t++){var i=this.tZ[t];0==i[ft]&&(this.f9(i,!0),i[ft]=null)}},i.g9=function(){for(var t=0;t<this.tZ.length;t++){var i=this.tZ[t];1==i[ft]&&(this.f9(i,!1),i[ft]=null)}},i.x9=function(){for(var t=0;t<this.tZ.length;t++){var i=this.tZ[t];0==i[mt]?(this.f9(i,!0),this.m9(i,!0)):1==i[mt]&&this.m9(i,!1),i[mt]=null}},i.w9=function(t){if("IntersectionObserver"in this.n9.win){if(this.jf(),!t)return this.a9.disconnect(),this.l9.disconnect(),void this.Wd.disconnect();for(var i=0;i<this.tZ.length;i++)this.a9.observe(this.tZ[i]),this.l9.observe(this.tZ[i]),this.Wd.observe(this.tZ[i])}},i.updateChildren=function(t){if(this.tZ=t,"IntersectionObserver"in this.n9.win){for(var i=0;i<this.tZ.length;i++)this.NL.setOwner(this.tZ[i],this.n9.element);this.w9(!1),this.w9(this.c9)}},i.wasLaidOut=function(){this.c9=!0,this.w9(this.c9)},i.wasUnlaidOut=function(){this.c9=!1,this.w9(this.c9);for(var t=0;t<this.tZ.length;t++)this.f9(this.tZ[t],!1),this.m9(this.tZ[t],!1)},t}(),vt=['<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-carousel-arrows><div tabindex=0 class="amp-carousel-button amp-carousel-button-prev"></div><div tabindex=0 class="amp-carousel-button amp-carousel-button-next"></div></div></div>'],dt="carousel",bt="slides",gt=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&s(t,i)}(c,t);var n,o,h=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=r(n);if(o){var s=r(this).constructor;t=Reflect.construct(i,arguments,s)}else t=i.apply(this,arguments);return e(this,t)});c.prerenderAllowed=function(){return!0};var u=c.prototype;function c(t){var i,n,s;return(i=h.call(this,t)).SW=(s=i.win,E(s,"platform")).isIos(),i.d1=null,i.M5=null,i.G5=[],i.qL=null,i._I="carousel",i.fO=!1,i.Ip=null,i.Tp=null,i.y9=!1,i.Ks=null,i.S9=null,i.M9=!1,i.z9=(n=t,O(n,"viewer")).isEmbedded(),i}return u.DG=function(){var t=this;this.registerAction("goToSlide",(function(i){var n,s,r,o=i.args,e=i.trust,h=Number(o.index||0);n=!isNaN(h),s=o.index,r=t.element,(z.user||(z.user=N()),void z.user.win?z.userForEmbed||(z.userForEmbed=N()):z.user).assert(n,"Unexpected slide index for goToSlide action: %s. %s",s,r,undefined,undefined,undefined,undefined,undefined,undefined,undefined),t.d1.goToSlide(h,{actionSource:t.k9(e)})}),1),this.registerAction("toggleAutoplay",(function(i){var n=i.args,s=n?n.toggleOn:void 0;t.N9(s)}),1),this.Ks.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"])},u.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},u.buildCallback=function(){var t=this;this.Ks=function(t){return i="action",I(n=A(R(t)),i)?C(n,i):null;var i,n}(this.element);var i=this.element,n=this.win,s=function(t){return function(t,i){for(var n=[],s=t.firstElementChild;s;s=s.nextElementSibling)void 0,e=void 0,h=void 0,"string"==typeof(o=r=s)?e=o:1==(null==(h=o)?void 0:h.nodeType)&&(e=o.tagName),!(e&&e.toLowerCase().startsWith("i-")||r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("placeholder")||r.hasAttribute("fallback")||r.hasAttribute("overflow")))&&n.push(s);var r,o,e,h;return n}(t)}(this.element);i.appendChild(this.j9()),this.M5=this.element.querySelector(".i-amphtml-carousel-scroll"),this.Tp=this.element.querySelector(".amp-carousel-button-prev"),this.Ip=this.element.querySelector(".amp-carousel-button-next"),this.d1=new ct({win:n,element:i,scrollContainer:this.M5,initialIndex:Number(this.element.getAttribute("slide")||"0"),runMutate:function(i){return t.mutateElement(i)}}),this.E9(s),this.DG(),this.element.addEventListener(G,(function(i){t.Y5(i)})),this.element.addEventListener(J,(function(){t.O9()})),this.element.addEventListener(K,(function(){t.P9()})),this.setupButtonInteraction(this.Ip,(function(){return t.interactionNext()})),this.setupButtonInteraction(this.Tp,(function(){return t.interactionPrev()})),this.R9();var r=U(i);return this.S9=new pt({ampElement:this,intersectionElement:this.M5,nearbyMarginInPercent:this.SW?200:100,viewportIntersectionCallback:function(i,n){n?r.scheduleResume(t.element,i):r.schedulePause(t.element,i)}}),this.S9.setQueueChanges(this.SW),this.S9.updateChildren(this.G5),this.d1.updateSlides(this.G5),this.d1.goToSlide(Number(this.element.getAttribute("slide")||"0")),this.element.hasAttribute("controls")?this.M9=!0:function(t){return E(t,"input")}(this.win).onMouseDetected((function(i){i&&(t.M9=!0,t.A9())}),!0),this.mutateElement((function(){}))},u.setupButtonInteraction=function(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(function(t){t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))},u.isRelayoutNeeded=function(){return!0},u.layoutCallback=function(){var t;return"[i-amphtml-scale-animation]",((t=this.element).closest?t.closest("[i-amphtml-scale-animation]"):function(t,i,n){var s;for(s=t;s&&void 0!==s;s=s.parentElement)if(i(s))return s;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,"[i-amphtml-scale-animation]")}(t)})))||(this.S9.wasLaidOut(),this.d1.updateUi()),i||(i=Promise.resolve(void 0))},u.unlayoutCallback=function(){return this.S9.wasUnlaidOut(),!0},u.pauseCallback=function(){this.d1.pauseLayout()},u.resumeCallback=function(){this.d1.resumeLayout()},u.mutatedAttributesCallback=function(t){void 0!==t.slide&&this.d1.goToSlide(Number(t.slide))},u.goToSlide=function(t){this.d1.goToSlide(t,{smoothScroll:!1})},u.interactionNext=function(){this._I!=dt?this.d1.next(0):this.C9(!0)},u.interactionPrev=function(){this._I!=dt?this.d1.prev(0):this.C9(!1)},u.C9=function(t){var i=j(this.M5),n=t?1:-1,s="rtl"==y(this.win,i).direction?-1:1;i.scrollLeft+=i.offsetWidth*n*s},u.j9=function(){var t,i;return(i=(t=this.element).ownerDocument||t,l&&l.ownerDocument===i||(l=i.createElement("div")),p)(vt)},u.k9=function(t){return t>=2?0:1},u.E9=function(t){var i=this,n=this.element.getAttribute("dir")||y(this.win,this.element).direction,s=this.element.hasAttribute("loop"),r=this.element.getAttribute("autoplay"),o=this.element.getAttribute("delay"),e=this.element.getAttribute("type"),h=null!=r,u=r?Number(r):Number.POSITIVE_INFINITY,a=Math.max(Number(o)||5e3,1e3);this.d1.updateForwards("rtl"!=n),this.d1.updateLoop(s||h),this.d1.updateAutoAdvanceLoops(u),this.d1.updateAutoAdvanceInterval(a),this.mutateElement((function(){i.Tp.setAttribute("dir",n),i.Ip.setAttribute("dir",n)})),this.N9(h),this._9(e,t),this.A9()},u.T9=function(t){return t-1>=0?t-1:this.element.hasAttribute("loop")?this.G5.length-1:null},u.I9=function(t){return t+1<this.G5.length?t+1:this.element.hasAttribute("loop")?0:null},u.L9=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"},u.B9=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"},u.U9=function(){return this.element.getAttribute("data-button-count-format")||"(%s of %s)"},u.H9=function(t){var i=String(t+1),n=String(this.G5.length);return" "+this.U9().replace("%s",i).replace("%s",n)},u.W9=function(t){var i=this.T9(t),n=null==i?0:i;return this.B9()+this.H9(n)},u.V9=function(t){var i=this.I9(t),n=null==i?this.G5.length-1:i;return this.L9()+this.H9(n)},u.A9=function(){var t=this.d1.getCurrentIndex(),i=this.y9&&!this.M9,n=i||this.d1.isAtStart(),s=i||this.d1.isAtEnd();this.Tp.classList.toggle("amp-disabled",n),this.Tp.setAttribute("aria-disabled",n),this.Tp.title=this.W9(t),this.Tp.tabIndex=n?-1:0,this.Ip.classList.toggle("amp-disabled",s),this.Ip.setAttribute("aria-disabled",s),this.Ip.title=this.V9(t),this.Ip.tabIndex=s?-1:0},u._9=function(t,i){var n=this,s=t==bt;this._I=s?bt:dt,this.d1.updateAlignment(s?"center":"start"),this.d1.updateHideScrollbar(s),this.d1.updateMixedLength(!s),this.d1.updateSnap(s);var r=s?"button":"presentation";this.Tp.setAttribute("role",r),this.Ip.setAttribute("role",r),this.G5=i.map((function(t){if(t.classList.add("amp-carousel-slide"),s){var i=document.createElement("div");return i.classList.add("i-amphtml-carousel-slotted","i-amphtml-carousel-wrapper"),i.appendChild(t),i}return t})),this.G5.forEach((function(t){n.M5.appendChild(t),s?t.classList.add("i-amphtml-carousel-slide-item"):t.classList.add("amp-scrollable-carousel-slide")}))},u.D9=function(t,i){var n=this.qL;if(this.qL=t,null!=n){var s={"index":t},r="slideChange",o=this.F9(i)?3:1,e={"index":t,"actionTrust":o},h=V(this.win,"slidescroll.".concat(r),s);this.Ks.trigger(this.element,r,h,o),function(t,i,n,s){var r=n||{};a(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=r;var e=f,h=m;o.initEvent("slideChange",e,h),t.dispatchEvent(o)}(this.element,0,e),this.X9(n,t)}},u.Z9=function(t){return null==t?"null":this.G5[t].getAttribute("data-slide-id")||String(t)},u.X9=function(t,i){var n=i-t,s=this.G5.length,r=(this.d1.isLooping()?n>0&&n/s<.5||n<0&&n/s<-.5:n>0)?"amp-carousel-next":"amp-carousel-prev",o={"fromSlide":this.Z9(t),"toSlide":this.Z9(i)};H(this.element,"amp-carousel-change",o),H(this.element,r,o)},u.F9=function(t){return 2==t||3==t||0==t},u.R9=function(){this.z9&&D(this.M5,"touchmove",(function(t){t.shouldViewerCancelPropagation=!0}))},u.N9=function(t){this.fO=void 0!==t?t:!this.fO,this.d1.updateAutoAdvance(this.fO)},u.O9=function(){this.S9.setQueueChanges(this.SW)},u.P9=function(){this.S9.flushChanges(),this.S9.setQueueChanges(!1),this.A9()},u.Y5=function(t){var i=F(t),n=i.index,s=i.actionSource;this.y9=this.y9||3==s,this.A9(),this._I!=dt&&this.D9(n,s)},c}(t.BaseElement);t.registerElement("amp-carousel",gt,'.i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-carousel .i-amphtml-carousel-scroll[horizontal=true]{padding-bottom:0!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-scroll{display:block!important;white-space:nowrap!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-content{position:static}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px;margin-inline-start:8px;margin-inline-end:0}.amp-scrollable-carousel-slide.i-amphtml-layout-responsive{width:100%}.amp-scrollable-carousel-slide:first-child{margin-left:0px;margin-inline-start:0;margin-inline-end:0}.i-amphtml-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;pointer-events:none}.amp-carousel-button[dir=rtl]{transform:scaleX(-1)}.amp-carousel-button{position:relative;box-sizing:border-box;height:34px;width:34px;margin:16px;border-style:none;border-radius:2px;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;z-index:10;pointer-events:all}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-carousel-button.amp-disabled{animation:none;pointer-events:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}.amp-carousel-button-prev{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-slide-item{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-carousel-slide-item>*{width:100%;height:100%;overflow:hidden!important}.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-carousel/0.2/amp-carousel.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-carousel-0.2.js.map