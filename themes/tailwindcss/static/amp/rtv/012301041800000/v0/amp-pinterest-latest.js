;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-pinterest",ev:"0.1",l:!0,f:function(t,e){!function(){function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var a,o=Object.prototype,s=o.hasOwnProperty;function p(t,e,n,i,r,a,o,s,p,l,u){return t}function l(t){return function(t,e){if(p(1===e.length),p(Array.isArray(e)||(i=e,s.call(i,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return e[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=e[0];var i,r=t.firstElementChild;return p(r),p(!r.nextElementSibling),t.removeChild(r),r}(a,t)}function u(t){return(t.ownerDocument||t).defaultView}function h(t){return t.parent&&t.parent!=t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d,f=self.__AMP_LOG;function b(t,e){throw new Error("failed to call initLogConstructor")}function m(t){return f.user||(f.user=x()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(f.user.win,t)?f.userForEmbed||(f.userForEmbed=x()):f.user}function x(t){return b()}function g(t,e,n,i,r,a,o,s,p,l,u){return t}function v(t,e,n,i,r,a,o,s,p,l,u){return m().assert(t,e,n,i,r,a,o,s,p,l,u)}var w=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function A(t,e){return function(t,e){g(function(t,e){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}(t,e));var n=function(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return n.obj||(g(n.ctor),g(n.context),n.obj=new n.ctor(n.context),g(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}var k,y=function(t){return A(t,"xhr")},j="";for(k=0;k<12;k+=1)j+="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz".substr(Math.floor(60*Math.random()),1);function C(t,e,n){"string"==typeof t[e]?t[e]=n:t.setAttribute(e,n)}var O={filter:function(t){try{return(new DOMParser).parseFromString(t,"text/html").body.textContent}catch(e){return t}},guid:j,log:function(t){var e=new Image,n="https://log.pinterest.com/?guid="+j;n+="&amp=1",t&&(n+=t),n=n+"&via="+encodeURIComponent(window.location.href),e.src=n},make:function(t,e){var n,i,r=null;for(n in e){for(i in r=t.createElement(n),e[n])"string"==typeof e[n][i]&&C(r,i,e[n][i]);break}return r},set:C};function M(t,e,n,i){var r,a,o;try{r=t.open(e,n,i)}catch(t){(f.dev||(f.dev=b())).error("DOM","Failed to open url on target: ",n,t)}return!r&&"_top"!=n&&("number"!=typeof o&&(o=0),o+"noopener".length>(a=i||"").length||-1===a.indexOf("noopener",o))&&(r=t.open(e,"_top")),r}var S,z,N=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=Object.create(null)}var e=t.prototype;return e.has=function(t){return!!this.Qt[t]},e.get=function(t){var e=this.Qt[t];if(e)return e.access=++this.Kt,e.payload},e.put=function(t,e){this.has(t)||this.Wt++,this.Qt[t]={payload:e,access:this.Kt},this.Xt()},e.Xt=function(){if(!(this.Wt<=this.Lt)){var t,e=this.Qt,n=this.Kt+1;for(var i in e){var r=e[i].access;r<n&&(n=r,t=i)}void 0!==t&&(delete e[t],this.Wt--)}},t}();function R(t,e){return S||(S=self.document.createElement("a"),z=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new N(100))),function(t,e,n){if(n&&n.has(e))return n.get(e);t.href=e,t.protocol||(t.href=t.href);var i,r={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==r.pathname[0]&&(r.pathname="/"+r.pathname),("http:"==r.protocol&&80==r.port||"https:"==r.protocol&&443==r.port)&&(r.port="",r.host=r.hostname),i=t.origin&&"null"!=t.origin?t.origin:"data:"!=r.protocol&&r.host?r.protocol+"//"+r.host:r.href,r.origin=i;var a=r;return n&&n.put(e,a),a}(S,t,e?null:z)}function I(t){return"https:"==(t=function(t){return"string"==typeof t?R(t):t}(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||(n=".localhost",(i=(e=t.hostname).length-n.length)>=0&&e.indexOf(n,i)==i);var e,n,i}function P(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return v(null!=t,"%s %s must be available",e,n),v(I(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',e,n,t),t}new Set(["c","v","a","ad"]);var _,U,E=function(){function t(t){v(t.getAttribute("data-href"),"The data-href attribute is required for follow buttons"),v(t.getAttribute("data-label"),"The data-label attribute is required for follow buttons"),this.element=t,this.label=t.getAttribute("data-label"),this.href=P(t.getAttribute("data-href"),t)}var e=t.prototype;return e.handleClick=function(t){t.preventDefault(),M(window,this.href,"pin"+Date.now(),"status=no,resizable=yes,scrollbars=yes,\n  personalbar=no,directories=no,location=no,toolbar=no,\n  menubar=no,width=1040,height=640,left=0,top=0"),O.log("&type=button_follow&href=".concat(this.href))},e.renderTemplate=function(){var t=O.make(this.element.ownerDocument,{"a":{class:"-amp-pinterest-follow-button",href:this.href,textContent:this.label}});return t.appendChild(O.make(this.element.ownerDocument,{"i":{}})),t.onclick=this.handleClick.bind(this),t},e.render=function(){var t,e=this;return"/"!==this.href.substr(-1)&&(this.href+="/"),this.href+="pins/follow/?guid=".concat(O.guid),t=function(){return e.renderTemplate()},new Promise((function(e){e(t())}))},e.height=function(){return Promise.resolve(null)},t}();new WeakMap,new WeakMap;var B=function(){function t(t){v(t.getAttribute("data-url"),"The data-url attribute is required for Pin widgets"),this.element=t,this.xhr=y(u(t)),this.pinId="",this.alt="",this.pinUrl="",this.width="",this.layout="",this.Upt=null}var e=t.prototype;return e.handleKeyDown=function(t){"Enter"!=t.key&&" "!=t.key||this.handleClick(t)},e.handleClick=function(t){t.preventDefault();var e,n=t.target,i=n.getAttribute("data-pin-pop")||!1,r=n.getAttribute("data-pin-href"),a=n.getAttribute("data-pin-log");r&&(v(/^https?\:/i.test(e=r),'URL must start with "http://" or "https://". Invalid value: %s',e),R(e).href,i?M(window,r,"_pinit","status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=900,height=500,left=0,top=0"):M(window,"".concat(r,"?amp=1&guid=").concat(O.guid),"_blank")),a&&O.log("&type="+a)},e.fetchPin=function(){var t="pin_ids=".concat(this.pinId,"&sub=www&base_scheme=https");return this.xhr.fetchJson("https://widgets.pinterest.com/v3/pidgets/pins/info/?"+t,{}).then((function(t){return t.json()})).then((function(t){try{return t.data[0]}catch(t){return null}}))},e.renderPin=function(t){var e="-amp-pinterest-embed-pin",n=P(t.images["237x"].url,this.element);"medium"===this.width||"large"===this.width?(e+="-medium",n=n.replace(/237/,"345"),O.log("&type=pidget&pin_count_medium=1")):O.log("&type=pidget&pin_count=1"),"responsive"===this.layout&&(e+=" -amp-pinterest-embed-pin-responsive");var i=O.make(this.element.ownerDocument,{"span":{}});i.className=e+" i-amphtml-fill-content",this.Upt=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-inner","data-pin-log":"embed_pin"}}),!this.alt&&t.attribution&&(this.alt=t.attribution.title);var r=O.make(this.element.ownerDocument,{"img":{"src":n,"className":"-amp-pinterest-embed-pin-image","data-pin-no-hover":!0,"data-pin-href":"https://www.pinterest.com/pin/"+t.id+"/","data-pin-log":"embed_pin_img","alt":this.alt}});this.Upt.appendChild(r);var a=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-rect -amp-pinterest-en-red -amp-pinterest-embed-pin-repin -amp-pinterest-save-button-tall","data-pin-log":"embed_pin_repin","data-pin-pop":"1","data-pin-href":"https://www.pinterest.com/pin/"+t.id+"/repin/x/?amp=1&guid="+O.guid,"textContent":"Save","role":"button","aria-label":"Repin this image: "+this.alt,"tabindex":"0"}});this.Upt.appendChild(a);var o=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-text"}});if(t.description){var s=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-description","textContent":O.filter(t.description)}});o.appendChild(s)}if(t.attribution){var p=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-attribution"}});p.appendChild(O.make(this.element.ownerDocument,{"img":{"className":"-amp-pinterest-embed-pin-text-icon-attrib","src":t.attribution.provider_icon_url,"alt":"from "+t.attribution.provider_name}})),p.appendChild(O.make(this.element.ownerDocument,{"span":{"textContent":" by "}})),p.appendChild(O.make(this.element.ownerDocument,{"span":{"data-pin-href":t.attribution.url,"textContent":O.filter(t.attribution.author_name)}})),o.appendChild(p)}if(t.repin_count||t.like_count){var l=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-stats"}});if(t.repin_count){var u=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-stats-repins","textContent":String(t.repin_count)}});l.appendChild(u)}if(t.like_count){var h=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-stats-likes","textContent":String(t.like_count)}});l.appendChild(h)}o.appendChild(l)}if(t.pinner){var c=O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-pinner"}});c.appendChild(O.make(this.element.ownerDocument,{"img":{"className":"-amp-pinterest-embed-pin-pinner-avatar","alt":O.filter(t.pinner.full_name),"title":O.filter(t.pinner.full_name),"src":t.pinner.image_small_url,"data-pin-href":t.pinner.profile_url}})),c.appendChild(O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-pinner-name","textContent":O.filter(t.pinner.full_name),"data-pin-href":t.pinner.profile_url}})),c.appendChild(O.make(this.element.ownerDocument,{"span":{"className":"-amp-pinterest-embed-pin-board-name","textContent":O.filter(t.board.name),"data-pin-href":"https://www.pinterest.com/"+t.board.url}})),o.appendChild(c)}return this.Upt.appendChild(o),i.appendChild(this.Upt),i.addEventListener("click",this.handleClick.bind(this)),i.addEventListener("keypress",this.handleKeyDown.bind(this)),i},e.render=function(){this.pinUrl=this.element.getAttribute("data-url"),this.width=this.element.getAttribute("data-width"),this.layout=this.element.getAttribute("layout"),this.alt=this.element.getAttribute("alt"),this.pinId="";try{this.pinId=this.pinUrl.split("/pin/")[1].split("/")[0]}catch(t){return Promise.reject(m().createError("Invalid pinterest url: %s",this.pinUrl))}return this.fetchPin().then(this.renderPin.bind(this))},e.height=function(){return function(t){var e,n=null===(e=_)||void 0===e?void 0:e.get(t);if(!n){var i=function(t){_||(_=new WeakMap,U=new WeakMap),p(U);var e=U.get(t);return e||(e=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.needsRootBounds,r=n.rootMargin,a=n.threshold,o=h(e)&&(i||r)?e.document:void 0;return new e.IntersectionObserver(t,{threshold:a,root:o,rootMargin:r})}((function(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r,a=t[i].target;n.has(a)||(n.add(a),p(e),e.unobserve(a),p(_),null===(r=_.get(a))||void 0===r||r.resolve(t[i]),_.delete(a))}}),t,{needsRootBounds:!0}),U.set(t,e)),e}(u(t));p(_),i.observe(t),n=new w,_.set(t,n)}return n.promise}(this.Upt).then((function(t){return t.boundingClientRect.height+10}))},t}();function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q=function(){function t(t){v(t.getAttribute("data-url"),"The data-url attribute is required for Save buttons"),v(t.getAttribute("data-media"),"The data-media attribute is required for Save buttons"),v(t.getAttribute("data-description"),"The data-description attribute is required for Save buttons"),this.element=t,this.xhr=y(u(t)),this.color=t.getAttribute("data-color"),this.count=t.getAttribute("data-count"),this.lang=t.getAttribute("data-lang");var e=t.hasAttribute("height")&&t.hasAttribute("width")&&t.getAttribute("height")===t.getAttribute("width");this.round=t.getAttribute("data-round")||e,this.tall=t.getAttribute("data-tall"),this.description=t.getAttribute("data-description"),this.media=null,this.url=null,this.href=null}var e=t.prototype;return e.handleClick=function(t){t.preventDefault(),M(window,this.href,"_pinit","status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=900,height=500,left=0,top=0"),O.log("&type=button_pinit")},e.fetchCount=function(){var t="https://widgets.pinterest.com/v1/urls/count.json?return_jsonp=false&url=".concat(this.url);return this.xhr.fetchJson(t,{}).then((function(t){return t.json()}))},e.formatPinCount=function(t){return t>999&&(t=t<1e6?parseInt(t/1e3,10)+"K+":t<1e9?parseInt(t/1e6,10)+"M+":"++"),String(t)},e.renderCount=function(t,e){return O.log("&type=pidget&button_count=1"),O.make(this.element.ownerDocument,{"span":{class:"-amp-pinterest-bubble-".concat(this.count).concat(e),textContent:this.formatPinCount(t)}})},e.renderTemplate=function(t){var e={shape:this.round?"-round":"",height:this.tall?"-tall":"",lang:"ja"===this.lang?"-ja":"-en",color:-1!==["gray","white"].indexOf(this.color)?this.color:"red"},n=["-amp-pinterest".concat(e.shape).concat(e.height),"i-amphtml-fill-content"],i=null;this.round||(n.push("-amp-pinterest-save-button".concat(e.height)),n.push("-amp-pinterest".concat(e.lang,"-").concat(e.color).concat(e.height)),t&&(n.push("-amp-pinterest-count-pad-".concat(this.count).concat(e.height)),i=this.renderCount(t.count,e.height)));var r="ja"===this.lang?"保存":"Save",a=this.round?"":r,o=O.make(this.element.ownerDocument,{"a":q({class:n.join(" "),href:this.href,textContent:a},!a&&{"aria-label":r})});return i&&o.appendChild(i),o.onclick=this.handleClick.bind(this),o},e.render=function(){this.description=encodeURIComponent(this.description),this.media=encodeURIComponent(this.element.getAttribute("data-media")),this.url=encodeURIComponent(this.element.getAttribute("data-url"));var t=["amp=1","guid=".concat(O.guid),"url=".concat(this.url),"media=".concat(this.media),"description=".concat(this.description)].join("&");return this.href="https://www.pinterest.com/pin/create/button/?".concat(t),("above"===this.count||"beside"===this.count?this.fetchCount():d||(d=Promise.resolve(void 0))).then(this.renderTemplate.bind(this))},e.height=function(){return Promise.resolve(null)},t}(),T=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M36,26c-5.52,0-9.99,4.47-9.99,9.99c0,4.24,2.63,7.85,6.35,9.31c-0.09-0.79-0.16-2.01,0.03-2.87\n            c0.18-0.78,1.17-4.97,1.17-4.97s-0.3-0.6-0.3-1.48c0-1.39,0.81-2.43,1.81-2.43c0.86,0,1.27,0.64,1.27,1.41\n            c0,0.86-0.54,2.14-0.83,3.33c-0.24,1,0.5,1.81,1.48,1.81c1.78,0,3.14-1.88,3.14-4.57c0-2.39-1.72-4.06-4.18-4.06\n            c-2.85,0-4.51,2.13-4.51,4.33c0,0.86,0.33,1.78,0.74,2.28c0.08,0.1,0.09,0.19,0.07,0.29c-0.07,0.31-0.25,1-0.28,1.13\n            c-0.04,0.18-0.15,0.22-0.34,0.13c-1.25-0.58-2.03-2.4-2.03-3.87c0-3.15,2.29-6.04,6.6-6.04c3.46,0,6.16,2.47,6.16,5.77\n            c0,3.45-2.17,6.22-5.18,6.22c-1.01,0-1.97-0.53-2.29-1.15c0,0-0.5,1.91-0.62,2.38c-0.22,0.87-0.83,1.96-1.24,2.62\n            c0.94,0.29,1.92,0.44,2.96,0.44c5.52,0,9.99-4.47,9.99-9.99C45.99,30.47,41.52,26,36,26z"></path></svg>'],V=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(p,t);var i,o,s=(i=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=n(i);if(o){var a=n(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return r(this,t)});function p(t){var e;return(e=s.call(this,t))._I="",e.Bpt=null,e}p.createLoaderLogoCallback=function(t){var e,n;return"embedPin"!=t.getAttribute("data-do")?{}:{color:"#E60019",content:(n=(e=t).ownerDocument||e,a&&a.ownerDocument===n||(a=n.createElement("div")),l)(T)}};var u=p.prototype;return u.preconnectCallback=function(t){var e;(e=this.win,A(e,"preconnect")).url(this.getAmpDoc(),"https://widgets.pinterest.com",t)},u.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},u.buildCallback=function(){switch(this._I=v(this.element.getAttribute("data-do"),"The data-do attribute is required for <amp-pinterest> %s",this.element),this._I){case"embedPin":this.Bpt=new B(this.element);break;case"buttonPin":this.Bpt=new Q(this.element);break;case"buttonFollow":this.Bpt=new E(this.element);break;default:return Promise.reject(m().createError("Invalid type: %s",this._I))}},u.layoutCallback=function(){var t=this;return this.Bpt.render().then((function(e){return t.element.appendChild(e)}))},u.firstLayoutCompleted=function(){var t=this;this.Bpt.height().then((function(e){null!==e&&t.attemptChangeHeight(e)}))},p}(t.BaseElement);t.registerElement("amp-pinterest",V,'.-amp-pinterest-round{background-size:16px 16px;height:16px;width:16px}.-amp-pinterest-round,.-amp-pinterest-round-tall{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-1 -1 31 31"><path d="M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595" fill="%23fff" stroke="%23fff"/><path d="M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976" fill="%23e60023"/></svg>\')}.-amp-pinterest-round-tall{background-size:32px 32px;height:32px;width:32px}.-amp-pinterest-rect{height:20px;width:40px;background:url() 0 -20px no-repeat;background-size:40px 60px}.-amp-pinterest-rect:active{background-position:0 -40px}.-amp-pinterest-save-button{background:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-1 -1 31 31"><path d="M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595" fill="%23fff" stroke="%23fff"/><path d="M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976" fill="%23e60023"/></svg>\') 3px 5px no-repeat;background-size:10px 10px;border-radius:2px;font:9px/20px Helvetica Neue,Helvetica,sans-serif;font-weight:700;max-height:20px;max-width:40px;min-height:20px;min-width:40px;text-indent:16px;text-decoration:none;-webkit-font-smoothing:antialiased}.-amp-pinterest-save-button-tall{background:#e60023 url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-1 -1 31 31"><path d="M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595" fill="%23fff" stroke="%23fff"/><path d="M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976" fill="%23e60023"/></svg>\') 3px 6px no-repeat;background-position-x:4px;background-size:15px 15px;border-radius:4px;max-height:28px;max-width:56px;min-height:28px;min-width:56px;text-indent:23px;text-decoration:none;font:12px/28px Helvetica Neue,Helvetica,Arial,"sans-serif";font-weight:700;-webkit-font-smoothing:antialiased}.-amp-pinterest-en-gray,.-amp-pinterest-en-gray-tall,.-amp-pinterest-ja-gray,.-amp-pinterest-ja-gray-tall{color:#555;background-color:#efefef}.-amp-pinterest-en-red,.-amp-pinterest-en-red-tall,.-amp-pinterest-ja-red,.-amp-pinterest-ja-red-tall{color:#fff;background-color:#e60023}.-amp-pinterest-en-white,.-amp-pinterest-en-white-tall,.-amp-pinterest-ja-white,.-amp-pinterest-ja-white-tall{color:#e60023;background-color:#fff;box-sizing:border-box;box-shadow:inset 0 0 1px #e60023}.-amp-pinterest-rect-tall{height:28px;width:56px;background:url() 0 -28px no-repeat;background-size:56px 84px}.-amp-pinterest-rect-tall:active{background-position:0 -56px}.-amp-pinterest-count-pad-above{margin-top:26px}.-amp-pinterest-count-pad-above-tall{margin-top:40px}.-amp-pinterest-bubble-above{position:absolute;left:0;text-align:center;text-decoration:none;text-indent:0;color:#555;top:-26px;height:20px;width:40px;background:#efefef;background-size:40px 20px;border-radius:4px;line-height:20px}.-amp-pinterest-bubble-above:after{border-top:7px solid #efefef;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-4px;left:4px;content:"";position:absolute}.-amp-pinterest-bubble-above-tall{position:absolute;left:0;text-align:center;text-decoration:none;color:#555;top:-40px;bottom:29px;height:34px;width:56px;background:#efefef;border-radius:4px;text-indent:0;line-height:34px}.-amp-pinterest-bubble-above-tall:after{border-top:7px solid #efefef;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-4px;left:7px;content:"";position:absolute}.-amp-pinterest-count-pad-beside{margin-left:0;width:86px}.-amp-pinterest-count-pad-beside-tall{margin-left:0;width:120px}.-amp-pinterest-bubble-beside{position:absolute;top:0;right:-46px;height:20px;width:40px;text-align:center;text-indent:0;text-decoration:none;color:#555;background:#efefef;background-size:40px 20px;border-radius:4px;line-height:20px}.-amp-pinterest-bubble-beside:before{top:3px;left:-4px;border-right:7px solid #efefef;border-top:7px solid transparent;border-bottom:7px solid transparent;content:"";position:absolute}.-amp-pinterest-bubble-beside-tall{position:absolute;top:0;right:-62px;height:28px;width:56px;text-align:center;text-indent:0;text-decoration:none;color:#555;background:#efefef;background-size:56px 28px;border-radius:4px;line-height:28px}.-amp-pinterest-bubble-beside-tall:before{top:7px;left:-4px;border-right:7px solid #efefef;border-top:7px solid transparent;border-bottom:7px solid transparent;content:"";position:absolute}.-amp-pinterest-follow-button{background-color:#efefef;background-size:200px 60px;border-radius:3px;box-sizing:border-box;box-shadow:inset 0 0 1px #888;color:#363636;cursor:pointer;display:inline-block;font:700 normal normal 11px/20px Helvetica Neue,helvetica,arial,san-serif;height:20px;padding:0 4px 0 20px;position:relative;text-decoration:none;vertical-align:baseline}.-amp-pinterest-follow-button i{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-1 -1 31 31"><path d="M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595" fill="%23fff" stroke="%23fff"/><path d="M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 0 1 .091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976" fill="%23e60023"/></svg>\');background-size:14px 14px;height:14px;left:3px;position:absolute;top:3px;width:14px}.-amp-pinterest-embed-pin,.-amp-pinterest-embed-pin-medium{box-sizing:border-box;padding:5px;width:237px}.-amp-pinterest-embed-pin-medium{width:345px}.-amp-pinterest-embed-pin-responsive{width:100%}.-amp-pinterest-embed-pin-responsive .-amp-pinterest-embed-pin-image{max-width:100%}.-amp-pinterest-embed-pin-inner{display:block;position:relative;-webkit-font-smoothing:antialiased;cursor:pointer;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.33);border-radius:3px;width:100%}.-amp-pinterest-embed-pin-text{color:#a8a8a8;white-space:normal;font-family:Helvetica Neue,arial,sans-serif;font-size:11px;line-height:18px;font-weight:700}.-amp-pinterest-embed-pin-image{border-radius:3px 3px 0 0}.-amp-pinterest-embed-pin-text-block{display:block;line-height:30px;padding:0 12px}.-amp-pinterest-embed-pin-text-icon-attrib{height:16px;width:16px;vertical-align:middle}.-amp-pinterest-embed-pin-stats{height:16px;line-height:16px;padding:8px 12px}.-amp-pinterest-embed-pin-stats-likes{padding-left:14px;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAAAAAClR+AmAAAAUElEQVR4AT2HMQpFIQwEc/+zbXhFLBW8QUihIAT2E8Q/xe6M0Jv2zK7NKUcBzAlAjzjqtdZl4c8S2nOjMPS6BoWMr/wLVnAbYJs3mGMkXzx+OeRqUf5HHRoAAAAASUVORK5CYII=) 0 2px no-repeat}.-amp-pinterest-embed-pin-stats-repins{padding:0 10px 0 18px;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAAAAABq7uO+AAAASklEQVQI10WNMQrAMBRCvf/Z3pQcImPplsIPdqhNXOSJqLxVtnWQsuUO9IM3cHlV8dSSDZQHAOPH2YA2FU+qtH7MRhaVh/xt/PQCEW6N4EV+CPEAAAAASUVORK5CYII=) 0 0 no-repeat}.-amp-pinterest-embed-pin-description{color:#363636;font-weight:400;font-size:14px;line-height:17px;padding-top:5px}.-amp-pinterest-embed-pin-pinner{padding:12px;border-top:1px solid rgba(0,0,0,.09)}.-amp-pinterest-embed-pin-pinner-avatar{border-radius:15px;border:none;height:30px;width:30px;vertical-align:middle;margin:0 8px 12px 0;float:left}.-amp-pinterest-embed-pin-board-name,.-amp-pinterest-embed-pin-pinner-name{display:block;height:15px;line-height:15px}.-amp-pinterest-embed-pin-pinner-name{color:#777}.-amp-pinterest-embed-pin-repin{border-radius:4px;position:absolute;top:12px;left:12px;cursor:pointer}\n/*# sourceURL=/extensions/amp-pinterest/0.1/amp-pinterest.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-pinterest-0.1.js.map