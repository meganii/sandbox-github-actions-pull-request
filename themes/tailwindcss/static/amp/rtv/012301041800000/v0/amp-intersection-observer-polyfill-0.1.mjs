;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-intersection-observer-polyfill",ev:"0.1",l:!0,f:function(t,n){(()=>{function t(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function n(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}var i,r=class{constructor(i,e){this.$=i,this.U=function(i){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(n){t(i,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}({root:null,rootMargin:"0px 0px 0px 0px"},e),this.L=[],this.F=null,r._upgraders.push(this.G.bind(this))}get root(){return this.F?this.F.root:this.U.root||null}get rootMargin(){return this.F?this.F.rootMargin:this.U.rootMargin}get thresholds(){return this.F?this.F.thresholds:[].concat(this.U.threshold||0)}disconnect(){this.F?this.F.disconnect():this.L.length=0}takeRecords(){return this.F?this.F.takeRecords():[]}observe(t){this.F?this.F.observe(t):-1==this.L.indexOf(t)&&this.L.push(t)}unobserve(t){if(this.F)this.F.unobserve(t);else{const n=this.L.indexOf(t);-1!=n&&this.L.splice(n,1)}}G(t){const n=new t(this.$,this.U);this.F=n;for(const t of this.L)n.observe(t);this.L.length=0}};r._upgraders=[];var{hasOwnProperty:e,toString:o}=Object.prototype;function s(t,n,i,r){return{left:t,top:n,width:i,height:r,bottom:n+r,right:t+i,x:t,y:n}}var u=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function h(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function c(t){const{location:n}=t||self;return function(t){const n=Object.create(null);if(!t)return n;let i;for(;i=u.exec(t);){const t=h(i[1],i[1]),r=i[2]?h(i[2].replace(/\+/g," "),i[2]):"";n[t]=r}return n}(n.originalHash||n.hash)}var f,l,a,v="";function w(t){var n;return v||(v=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012301041800000"),v}function b(t,n){const i=n||c(t);return["1","actions","amp","amp4ads","amp4email"].includes(i.development)||!!t.AMP_DEV_MODE}function g(t,n,i,r,e,o,s,u,h,c,f){return t}function d(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function p(t,n){g(y(t,n));const i=m(t)[n];return i.obj||(g(i.ctor),g(i.context),i.obj=new i.ctor(i.context),g(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function m(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function y(t,n){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]),l="amp-intersection-observer-polyfill",a=function(t){return function(t,n){const r=t.IntersectionObserver._stub;if(r){const e=t.IntersectionObserver._native;delete t.IntersectionObserver,delete t.IntersectionObserverEntry,n();const o=t.IntersectionObserver;e&&(t.IntersectionObserver=function(t,n){return function(i,r){var e;return 9===(null==r||null===(e=r.root)||void 0===e?void 0:e.nodeType)?new n(i,r):new t(i,r)}}(e,o));const s=r._upgraders.slice(0),u=i||(i=Promise.resolve(void 0)),h=t=>{u.then((()=>t(o)))};s.forEach(h),r._upgraders={"push":h}}else n()}(t,(()=>{!function(){if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var n=window.document,i=e(n);i;)i=e(n=i.ownerDocument);return n}(),n=[],i=null,r=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return i||(i=function(t,i){r=t&&i?l(t,i):{top:0,bottom:0,left:0,right:0,width:0,height:0},n.forEach((function(t){t._checkForIntersections()}))}),i},s._resetCrossOriginUpdater=function(){i=null,r=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(n){return n.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(n){return n.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var n=t||[0];return Array.isArray(n)||(n=[n]),n.sort().filter((function(t,n,i){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[n-1]}))},s.prototype._parseRootMargin=function(t){var n=(t||"0px").split(/\s+/).map((function(t){var n=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!n)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(n[1]),unit:n[2]}}));return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},s.prototype._monitorIntersections=function(n){var i=n.defaultView;if(i&&-1==this._monitoringDocuments.indexOf(n)){var r=this._checkForIntersections,o=null,s=null;this.POLL_INTERVAL?o=i.setInterval(r,this.POLL_INTERVAL):(u(i,"resize",r,!0),u(n,"scroll",r,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in i&&(s=new i.MutationObserver(r)).observe(n,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(n),this._monitoringUnsubscribes.push((function(){var t=n.defaultView;t&&(o&&t.clearInterval(o),h(t,"resize",r,!0)),h(n,"scroll",r,!0),s&&s.disconnect()}));var c=this.root&&(this.root.ownerDocument||this.root)||t;if(n!=c){var f=e(n);f&&this._monitorIntersections(f.ownerDocument)}}},s.prototype._unmonitorIntersections=function(n){var i=this._monitoringDocuments.indexOf(n);if(-1!=i){var r=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var i=t.element.ownerDocument;if(i==n)return!0;for(;i&&i!=r;){var o=e(i);if((i=o&&o.ownerDocument)==n)return!0}return!1}))){var o=this._monitoringUnsubscribes[i];if(this._monitoringDocuments.splice(i,1),this._monitoringUnsubscribes.splice(i,1),o(),n!=r){var s=e(n);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var n=0;n<t.length;n++)t[n]()},s.prototype._checkForIntersections=function(){if(this.root||!i||r){var t=this._rootIsInDom(),n=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var e=r.element,s=c(e),u=this._rootContainsTarget(e),h=r.entry,f=t&&u&&this._computeTargetAndRootIntersection(e,s,n),l=null;this._rootContainsTarget(e)?i&&!this.root||(l=n):l={top:0,bottom:0,left:0,right:0,width:0,height:0};var a=r.entry=new o({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:s,rootBounds:l,intersectionRect:f});h?t&&u?this._hasCrossedThreshold(h,a)&&this._queuedEntries.push(a):h&&h.isIntersecting&&this._queuedEntries.push(a):this._queuedEntries.push(a)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(n,e,o){if("none"!=window.getComputedStyle(n).display){for(var s,u,h,f,a,w,b,g,d=e,p=v(n),m=!1;!m&&p;){var y=null,O=1==p.nodeType?window.getComputedStyle(p):{};if("none"==O.display)return null;if(p==this.root||9==p.nodeType)if(m=!0,p==this.root||p==t)i&&!this.root?!r||0==r.width&&0==r.height?(p=null,y=null,d=null):y=r:y=o;else{var j=v(p),M=j&&c(j),x=j&&this._computeTargetAndRootIntersection(j,M,o);M&&x?(p=j,y=l(M,x)):(p=null,d=null)}else{var E=p.ownerDocument;p!=E.body&&p!=E.documentElement&&"visible"!=O.overflow&&(y=c(p))}if(y&&(s=y,u=d,h=Math.max(s.top,u.top),f=Math.min(s.bottom,u.bottom),a=Math.max(s.left,u.left),g=f-h,d=(b=(w=Math.min(s.right,u.right))-a)>=0&&g>=0&&{top:h,bottom:f,left:a,right:w,width:b,height:g}||null),!d)break;p=p&&v(p)}return d}},s.prototype._getRootRect=function(){var n;if(this.root&&!w(this.root))n=c(this.root);else{var i=w(this.root)?this.root:t,r=i.documentElement,e=i.body;n={top:0,left:0,right:r.clientWidth||e.clientWidth,width:r.clientWidth||e.clientWidth,bottom:r.clientHeight||e.clientHeight,height:r.clientHeight||e.clientHeight}}return this._expandRectByRootMargin(n)},s.prototype._expandRectByRootMargin=function(t){var n=this._rootMarginValues.map((function(n,i){return"px"==n.unit?n.value:n.value*(i%2?t.width:t.height)/100})),i={top:t.top-n[0],right:t.right+n[1],bottom:t.bottom+n[2],left:t.left-n[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},s.prototype._hasCrossedThreshold=function(t,n){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=n.isIntersecting?n.intersectionRatio||0:-1;if(i!==r)for(var e=0;e<this.thresholds.length;e++){var o=this.thresholds[e];if(o==i||o==r||o<i!=o<r)return!0}},s.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},s.prototype._rootContainsTarget=function(n){var i=this.root&&(this.root.ownerDocument||this.root)||t;return a(i,n)&&(!this.root||i==n.ownerDocument)},s.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},s.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=o}function e(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function o(t){this.time=t.time,this.target=t.target,this.rootBounds=f(t.rootBounds),this.boundingClientRect=f(t.boundingClientRect),this.intersectionRect=f(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var n=this.boundingClientRect,i=n.width*n.height,r=this.intersectionRect,e=r.width*r.height;this.intersectionRatio=i?Number((e/i).toFixed(4)):this.isIntersecting?1:0}function s(t,n){var i,r,e,o=n||{};if("function"!=typeof t)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType&&9!=o.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,e=null,function(){e||(e=setTimeout((function(){i(),e=null}),r))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function u(t,n,i,r){"function"==typeof t.addEventListener?t.addEventListener(n,i,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+n,i)}function h(t,n,i,r){"function"==typeof t.removeEventListener?t.removeEventListener(n,i,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+n,i)}function c(t){var n;try{n=t.getBoundingClientRect()}catch(t){}return n?(n.width&&n.height||(n={top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.right-n.left,height:n.bottom-n.top}),n):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,n){var i=n.top-t.top,r=n.left-t.left;return{top:i,left:r,height:n.height,width:n.width,bottom:i+n.height,right:r+n.width}}function a(t,n){for(var i=n;i;){if(i==t)return!0;i=v(i)}return!1}function v(n){var i=n.parentNode;return 9==n.nodeType&&n!=t?e(n):(i&&i.assignedSlot&&(i=i.assignedSlot.parentNode),i&&11==i.nodeType&&i.host?i.host:i)}function w(t){return t&&9===t.nodeType}}(),function(t){if(t==class{static getTop(t){return t.top}static getLocation(t){return t.location}static getDocumentReferrer(t){return t.document.referrer}static getHostname(t){return t.location.hostname}static getUserAgent(t){return t.navigator.userAgent}static getUserLanguage(t){return t.navigator.userLanguage||t.navigator.language}static getDevicePixelRatio(){return self.devicePixelRatio||1}static getSendBeacon(t){if(t.navigator.sendBeacon)return t.navigator.sendBeacon.bind(t.navigator)}static getXMLHttpRequest(t){return t.XMLHttpRequest}static getImage(t){return t.Image}}.getTop(t)||"inabox"!=function(t){const n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:b(t,c(t)),esm:!0,test:!1,rtvVersion:w(t),ssrReady:!1}}(n)}(t).runtime)return;const n=function(t){return function(t,n){return y(t=d(t),n)?p(t,n):null}(t,"iframeMessagingClient")}(t),i=t.IntersectionObserver._setupCrossOriginUpdater;if(!n||!i)return;const r=i();n.makeRequest("send-positions","position",(t=>{const n=t.targetRect,i=function(t,n){const i=Math.max(n.top,0),r=Math.max(n.left,0),e=Math.min(n.bottom,t.height),o=Math.min(n.right,t.width);return i>e||r>o?s(0,0,0,0):s(r,i,o-r,e-i)}(t.viewportRect,n);r(n,i)}))}(t)})),{}},function(t,n,i,r,e,o){const s=m(t);let u=s[i];u||(u=s[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),u.ctor||(u.ctor=r,u.context=n,u.sharedInstance=!1,u.resolve&&p(t,i))}(f=d(f=window),f,l,a),p(f,l)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-intersection-observer-polyfill-0.1.mjs.map