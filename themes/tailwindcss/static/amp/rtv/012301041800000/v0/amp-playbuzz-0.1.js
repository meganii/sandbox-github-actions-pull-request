;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-playbuzz",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,r){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,r)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var o=Array.isArray;function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function u(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype;function l(t){return(t.ownerDocument||t).defaultView}function c(t){return t.parent&&t.parent!=t}function s(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=r.needsRootBounds,i=r.rootMargin,o=r.threshold,a=c(n)&&(e||i)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:a,rootMargin:i})}f.hasOwnProperty,f.toString;var h=new WeakMap,p=new WeakMap;function d(t){for(var n=new Set,r=t.length-1;r>=0;r--){var e=t[r],i=e.target;if(!n.has(i)){n.add(i);var o=p.get(i);if(o)for(var a=0;a<o.length;a++)(0,o[a])(e)}}}function v(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,e=t.stack,i=new Error(r);for(var o in t)i[o]=t[o];return i.stack=e,i}function m(t){for(var n,r=null,e="",i=u(arguments,!0);!(n=i()).done;){var o=n.value;o instanceof Error&&!r?r=v(o):(e&&(e+=" "),e+=o)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function b(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}function g(t){var n=m.apply(null,arguments);setTimeout((function(){throw b(n),n}))}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w,A=self.__AMP_LOG;function y(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function x(t,n,r,e,i,o,a,u,f,l,c){return t}function z(t,n,r,e,i,o,a,u,f,l,c){return(A.user||(A.user=y()),void A.user.win?A.userForEmbed||(A.userForEmbed=y()):A.user).assert(t,n,r,e,i,o,a,u,f,l,c)}function O(t,n){return j(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function U(t){return t.nodeType?(n=l(t),O(n,"ampdoc")).getAmpDoc(t):t;var n}function j(t,n){x(function(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}(t,n));var r=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return r.obj||(x(r.ctor),x(r.context),r.obj=new r.ctor(r.context),x(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}var S,E,Q=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=Object.create(null)}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,r=this.Kt+1;for(var e in n){var i=n[e].access;i<r&&(r=i,t=e)}void 0!==t&&(delete n[t],this.Wt--)}},t}();function N(t,n){return S||(S=self.document.createElement("a"),E=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Q(100))),function(t,n,r){if(r&&r.has(n))return r.get(n);t.href=n,t.protocol||(t.href=t.href);var e,i={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),e=t.origin&&"null"!=t.origin?t.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=e;var o=i;return r&&r.put(n,o),o}(S,t,n?null:E)}function R(t){var n=t.indexOf("#");return-1==n?t:t.substring(0,n)}function C(t){return function(n,r,e){var i=t.createElement(n);return i.className=r,function(t,n){(n=n?Array.isArray(n)?n:[n]:[]).forEach((function(n){return t.appendChild(n)}))}(i,e),i}}new Set(["c","v","a","ad"]);var H=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&n(t,r)}(c,t);var a,u,f=(a=c,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(a);if(u){var e=r(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return i(this,t)});function c(t){var n;return(n=f.call(this,t)).tb=null,n.ann=null,n.Rq=300,n.ort=!1,n.art=!1,n.urt=!1,n.frt=!1,n.mu=!1,n.Aw=[],n.lrt="",n.Gg=null,n}var v=c.prototype;return v.preconnectCallback=function(){var t;(t=this.win,O(t,"preconnect")).url(this.getAmpDoc(),this.lrt)},v.renderOutsideViewport=function(){return!1},v.buildCallback=function(){var t,n=this.element,r=n.getAttribute("src"),e=n.getAttribute("data-item");z(r||e,"Either src or data-item attribute is required for <amp-playbuzz> %s",this.element),r&&(z(/^https?\:/i.test(t=r),'URL must start with "http://" or "https://". Invalid value: %s',t),N(t).href);var i=parseInt(n.getAttribute("height"),10);this.lrt=function(t,n){var r;return n?"//app.ex.co/stories/item/"+n:R((r=N(t)).href).replace(r.protocol,"").replace(/(www\.)?playbuzz\.com/,"app.ex.co/stories")}(r,e),this.Rq=isNaN(i)?this.Rq:i,this.ort="true"===n.getAttribute("data-item-info"),this.art="true"===n.getAttribute("data-share-buttons"),this.urt="true"===n.getAttribute("data-comments")},v.isLayoutSupported=function(t){return"responsive"===t||"fixed-height"===t},v.createPlaceholderCallback=function(){var t=this.win.document.createElement("div");return this.element.hasAttribute("aria-label")?t.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):t.setAttribute("aria-label","Loading interactive element"),t.setAttribute("placeholder",""),t.appendChild(this.crt()),t},v.srt=function(t){var n=JSON.stringify(t);this.tb.contentWindow.postMessage(n,"*")},v.vnn=function(){var t=C(this.element.ownerDocument),n=t("div","pb-overflow");n.setAttribute("overflow","");var r=t("button");r.textContent="Show More";var e=t("img","pb-arrow-down");return e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAm0lEQVR4AZ3ORxXCABBF0VGBAfYooaOEXp2kxwOKwg4D9E/vLS9zzt/eN3Y7V/3DEvNUtqznqXXYzALV7elcTQ7TZatMEV+9B2N9MBqPn+tpnpbXCMWfIoFKx0BymH5GOH7d1E6Iq9XfCMfnFqlgh+MRhJvxCMZJhOMosuH4l8hhy3eE4zzCcR7hOI9wHEYoDiIA5xcqb7FyBm4P6hrNHZK+MqYAAAAASUVORK5CYII=",r.appendChild(e),n.appendChild(r),n},v.layoutCallback=function(){var t=this;this.Gg=function(t,n,r){var e=l(t),i=h.get(e);i||h.set(e,i=s(d,e));var o=p.get(t);return o||(o=[],p.set(t,o)),o.push(n),i.observe(t),function(){!function(t,n){var r,e,i,o=p.get(t);if(o&&(e=n,-1!=(i=(r=o).indexOf(e))&&(r.splice(i,1),1)&&!o.length)){var a=l(t),u=h.get(a);null==u||u.unobserve(t),p.delete(t)}}(t,n)}}(this.element,(function(n){var r=n.isIntersecting;return t.mu=r}));var n,r,e=this.element.ownerDocument.createElement("iframe");return this.tb=e,e.setAttribute("scrolling","no"),e.setAttribute("frameborder","0"),e.setAttribute("allowtransparency","true"),e.setAttribute("allowfullscreen","true"),e.src=this.hrt(),this.prt("resize_height",(n=this.drt.bind(this),function(){var t=this,e=arguments;clearTimeout(r),r=setTimeout((function(){r=null,n.apply(t,e)}),100)})),this.element.appendChild(this.vnn()),e.classList.add("i-amphtml-fill-content"),this.element.appendChild(e),this.ann=this.loadPromise(e).then((function(){t.frt=!0,t.attemptChangeHeight(t.Rq).catch((function(){}));var n=t.getViewport().onChanged(t.vrt.bind(t));t.Aw.push(n)}))},v.crt=function(){var t=C(this.element.ownerDocument),n=t("img","pb_feed_anim_mask");return n.src="data:image/png;base64,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",t("div","pb_feed_placeholder_container",t("div","pb_feed_placeholder_inner",t("div","pb_feed_placeholder_content",t("div","pb_feed_placeholder_preloader",n))))},v.drt=function(t){isNaN(t)||t===this.Rq||(this.Rq=t,this.frt&&this.attemptChangeHeight(this.Rq).catch((function(){})))},v.prt=function(t,n){var r,i,o,a,u,f,l,c=this,s=(r=this.win,i="message",o=void 0,a=r,u=function(r){return function(t,n,r,i){t.contentWindow===n.source&&function(t,n,r){var i=function(t){if("object"===e(t))return t;var n,r="error parsing json message from playbuzz item: "+t;try{if("string"==typeof t)return n=t,JSON.parse(n)}catch(t){return g("amp-playbuzz",r,t),{}}return g("amp-playbuzz",r,t),{}}(function(t){return t.data}(t));i[n]&&r(i[n])}(n,r,i)}(c.tb,r,t,n)},f=function(t){try{return u(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}},l=function(){if(void 0!==w)return w;w=!1;try{var t={get capture(){return w=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return w}(),a.addEventListener(i,f,!!l&&o),function(){null==a||a.removeEventListener(i,f,!!l&&o),u=null,a=null,f=null});this.Aw.push(s)},v.hrt=function(){var t,n,r=N((t=this.element,function(t,n){return j((r=U(t),(e=U(r)).isSingleDoc()?e.win:e),n);var r,e}(t,"documentInfo").get()).canonicalUrl);return(n={itemUrl:this.lrt,relativeUrl:N(this.lrt).pathname,displayItemInfo:this.ort,displayShareBar:this.art,displayComments:this.urt,parentUrl:R(r.href),parentHost:r.host}).itemUrl+"?"+function(t){var n,r,e,i=[];for(var a in t){var u=t[a];if(null!=u){u=o(e=u)?e:[e];for(var f=0;f<u.length;f++)i.push((n=a,r=u[f],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))))}}return i.join("&")}({"feed":!0,"implementation":"amp","src":n.itemUrl,"embedBy":"00000000-0000-0000-0000-000000000000","game":n.relativeUrl,"comments":void 0,"useComments":n.displayComments,"gameInfo":n.displayItemInfo,"useShares":n.displayShareBar,"socialReferrer":!1,"height":"auto","parentUrl":n.parentUrl,"parentHost":n.parentHost})},v.vrt=function(t){if(this.mu){var n={"event":"scroll","windowHeight":t.height,"scroll":t.top,"offsetTop":this.getLayoutBox().top};this.srt(n)}},v.unlayoutOnPause=function(){return!0},v.unlayoutCallback=function(){var t,n,r;return null===(t=this.Gg)||void 0===t||t.call(this),this.Gg=null,this.Aw.forEach((function(t){return t()})),this.Aw.length=0,this.tb&&(null===(r=(n=this.tb).parentElement)||void 0===r||r.removeChild(n),this.tb=null,this.ann=null),!0},c}(t.BaseElement);t.registerElement("amp-playbuzz",H,".pb-overflow[overflow]{width:100%;height:150px;position:absolute;bottom:0;text-align:center;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,#fff 75%)}.pb-overflow button{width:140px;height:37px;position:absolute;bottom:0;left:50%;margin-left:-70px;border-radius:4px;background-color:#fff;border:1px solid #009cff;color:#009cff;font-weight:700;font-family:Helvetica,Roboto,Arial,sans-serif;cursor:pointer}.pb-arrow-down{height:8px;margin-left:10px}.pb_feed_placeholder_container{width:100%;height:100%}.pb_feed_placeholder_container{direction:ltr}.pb_feed_placeholder_inner{position:relative;width:100%;height:100%;margin:auto}.pb_feed_placeholder_content{width:100%;height:100%;background-color:#f2f2f2;border-radius:5px}.pb_feed_placeholder_preloader{position:absolute;top:47%;left:50%;width:29px;height:38px;margin-top:-36px;margin-left:-15px;overflow:hidden;box-sizing:border-box}@media screen and (max-width:568px){.pb_feed_placeholder_preloader{top:46%}}@media screen and (min-width:569px) and (max-width:992px){.pb_feed_placeholder_preloader{top:48%}}.pb_feed_anim_mask{position:absolute;width:30px;top:0;left:0}.pb_feed_loading_text{position:absolute;font-family:arial;font-size:11px;color:#aaa;text-align:center;width:100%;top:51%;direction:ltr}\n/*# sourceURL=/extensions/amp-playbuzz/0.1/amp-playbuzz.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-playbuzz-0.1.js.map