;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-access-fewcents",ev:"0.1",l:!1,f:function(t,n){!function(){Array.isArray;var n=Object.prototype;function e(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function i(t,n){t.insertBefore(n,t.firstChild)}function r(t,n,e){return function(t,n){for(var e in n)t.setAttribute(e,n[e]);return t}(t.createElement(n),e)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}n.hasOwnProperty,n.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var s,o=self.__AMP_LOG;function c(t){return o.user||(o.user=f()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(o.user.win,t)?o.userForEmbed||(o.userForEmbed=f()):o.user}function f(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function u(t,n,e,i,r,a,s,o,c,f,u){return t}var l=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function h(t,n){return m(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function p(t,n){return x(d(t),n)}function v(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,h(n,"ampdoc")).getAmpDoc(t):t;var n,e}function d(t){var n=v(t);return n.isSingleDoc()?n.win:n}function m(t,n){u(function(t,n){var e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));var e=g(t)[n];return e.obj||(u(e.ctor),u(e.context),e.obj=new e.ctor(e.context),u(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function x(t,n){var e=g(t)[n];return e?e.promise?e.promise:(m(t,n),e.promise=Promise.resolve(e.obj)):null}function g(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function b(t,n,e,i){return function(t,n,e,i){var r=p(t,n);if(r)return r;var a=v(t);return a.whenExtensionsKnown().then((function(){var t=a.getExtensionVersion(e);return t?h(a.win,"extensions").waitForExtension(e,t):null})).then((function(e){return e?i?p(t,n):function(t,n){return function(t,n){var e=x(t,n);if(e)return e;var i,r,a,s,o=g(t);return o[n]=(r=(i=new l).promise,a=i.reject,s=i.resolve,r.catch((function(){})),{obj:null,promise:r,resolve:s,reject:a,context:null,ctor:null}),o[n].promise}(d(t),n)}(t,n):null}))}(t,n,e,i).then((function(t){return function(t,n,e){return i=t,r=n,a=e,s=e,o=e,c().assert(i,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",r,a,s,o,void 0,void 0,void 0,void 0,void 0);var i,r,a,s,o}(t,n,e)}))}var w,y={fcTitleText:"Instant Access With Fewcents.",fcPromptText:"I already bought this",fcButtonText:"Unlock",fcPoweredImageRef:"https://images.fewcents.co/paywall/powered-fewcents.png",fcTermsRef:"https://www.fewcents.co/terms",fcPrivacyRef:"https://www.fewcents.co/privacy",fcContactUsRef:"mailto:support@fewcents.co"};function R(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function j(t,n,e,i){return function(t,n,e,i){var r=t,a=e,s=function(t){try{return a(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}},o=function(){if(void 0!==w)return w;w=!1;try{var t={get capture(){return w=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return w}(),c=!(null==i||!i.capture);return r.addEventListener(n,s,o?i:c),function(){null==r||r.removeEventListener(n,s,o?i:c),a=null,r=null,s=null}}(t,n,e,i)}var O,k,T=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=e()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,e=this.Kt+1;for(var i in n){var r=n[i].access;r<e&&(e=r,t=i)}void 0!==t&&(delete n[t],this.Wt--)}},t}();function U(t,n,e){if(n[e])return n[e];var i=t.querySelector("style[".concat(e,"], link[").concat(e,"]"));return i?(n[e]=i,i):null}function E(t,n){for(var e=t.styleSheets,i=0;i<e.length;i++)if(e[i].ownerNode==n)return!0;return!1}new Set(["c","v","a","ad"]);var I=function(){function t(t,n){this.ampdoc=t.ampdoc,this.DR=n,this.gnt=null,this.tat=null,this.nat=this.DR.getAdapterConfig(),this.eat=this.iat(),this.Rnt=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?R(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},y),this.rat=null,this.ri=h(this.ampdoc.win,"xhr"),this.Ds=m(this.ampdoc.win,"timer"),this.Tu=function(t){return h(t,"vsync")}(this.ampdoc.win),this.vnt=null,this.aat=null,function(t,n,r,a,s){var o=t.getHeadNode(),c=function(t,n,r,a){var s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=e());var o="amp-extension=".concat(a);if(o){var c=U(t,s,o);if(c)return"STYLE"==c.tagName&&c.textContent!==n&&(c.textContent=n),c}var f=(t.ownerDocument||t).createElement("style");f.textContent=n;return f.setAttribute("amp-extension",a),function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e){var r=e.nextSibling;t.insertBefore(n,r)}else i(t,n)}(t,f,U(t,s,"amp-runtime")),o&&(s[o]=f),f}(o,function(t,n){var e=t.__AMP_CSS_TR;return e?e(n):n}(o,"#amp-access-fewcents-dialog{padding:16px;-ms-flex-pack:center;justify-content:center;line-height:1.2;transition:opacity 300ms ease 0s}#amp-access-fewcents-dialog,.aaf-container{margin:0px;display:-ms-flexbox;display:flex}.aaf-container{-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;position:relative;height:auto;border:0px;background:#fff;font-family:Georgia,Times,Times New Roman,serif;font-weight:400;border-radius:5px;box-shadow:0px 4px 10px 0px rgb(0 0 0/20%),0px 4px 20px 0px rgb(0 0 0/19%);transition:all 0.5s ease 0s;width:300px;padding:8px}.aaf-headerText{font-size:17px;text-align:center;overflow-wrap:normal;overflow:hidden;margin-top:8px;color:rgba(0,0,0,0.87)}.aaf-purchase-button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;font-family:Georgia,Times,Times New Roman,serif;width:100%;outline:none;cursor:pointer;color:#fff;background:#08289a;margin:8px auto 0px;max-width:200px;border-radius:5px;border:0px;height:40px;display:-ms-flexbox;display:flex;justify-content:center;line-height:40px;font-size:16px;padding:0px 5px}.aaf-imageTag{max-height:25px;margin-top:6px}.aaf-already-bought{font-size:13px;font-weight:500;text-align:center;margin-top:8px;margin-bottom:0px;color:#08289a}.aaf-price-btn-div{display:-ms-flexbox;-ms-flex-align:center;display:flex;-ms-flex-direction:column;flex-direction:column}.aaf-article-price,.aaf-price-btn-div{text-align:center;-ms-flex-pack:center;justify-content:center;width:100%}.aaf-article-price{font-size:24px;font-weight:400;color:rgba(0,0,0,0.87);margin-top:8px}.aaf-btn-div{line-height:1.2;width:100%;-ms-flex-direction:column;flex-direction:column}.aaf-bottom-div,.aaf-btn-div{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.aaf-bottom-div{-ms-flex-align:center;margin-top:12px;font-size:9px;color:rgba(0,0,0,0.87);align-items:center;opacity:0.6}.aaf-fewcents-image-tag{max-height:25px}.aaf-refRow{word-break:break-word}.aaf-refElements,.aaf-refRow{text-align:center;color:#a8a3a3}.aaf-refElements{padding:2px;font-size:9px;text-decoration:none}.aaf-refElements:hover{text-decoration:underline}.aaf-partition-bar{font-size:11px;margin:0px 4px}@media (max-width:786px){#amp-access-fewcents-dialog{width:350px}}\n/*# sourceURL=/extensions/amp-access-fewcents/0.1/amp-access-fewcents.css*/"),0,"amp-access-fewcents");if(r){var f=t.getRootNode();if(E(f,c))return c;var u=setInterval((function(){E(f,c)&&clearInterval(u)}),4)}}(this.ampdoc,0,(function(){}))}var n=t.prototype;return n.authorize=function(){var t=this;return this.sat().then((function(n){return t.Unt(),{access:n.data.access,data:JSON.stringify(n)}}),(function(n){if(!n||!n.response)throw n;var e=n.response;if(402!==e.status)throw n;return e.json().catch((function(){throw n})).then((function(n){return t.oat(n),t.Unt().then(t.znt.bind(t)),{access:!1,data:JSON.stringify(n)}}))})).catch((function(){return t.Unt(),{access:!0}}))},n.iat=function(){var t=this.nat.accessKey,n=this.nat.articleIdentifier,e=this.nat.category,i=(O||(O=self.document.createElement("a"),k=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new T(100))),function(t,n,e){if(e&&e.has(n))return e.get(n);t.href=n,t.protocol||(t.href=t.href);var i,r={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==r.pathname[0]&&(r.pathname="/"+r.pathname),("http:"==r.protocol&&80==r.port||"https:"==r.protocol&&443==r.port)&&(r.port="",r.host=r.hostname),i=t.origin&&"null"!=t.origin?t.origin:"data:"!=r.protocol&&r.host?r.protocol+"//"+r.host:r.href,r.origin=i;var a=r;return e&&e.put(n,a),a}(O,undefined,k)).hostname;return this.cat()+"v1/amp/authorizeBid?articleUrl=SOURCE_URL&ampReaderId=READER_ID&returnUrl=RETURN_URL&accessKey="+encodeURIComponent(t)+"&category="+encodeURIComponent(e)+"&articleIdentifier="+encodeURIComponent(n)+"&domain="+encodeURIComponent(i)},n.cat=function(){var t=this.nat.environment;return"development"===t?"https://api.hounds.fewcents.co/":"demo"===t?"https://api.demo.fewcents.co/":"https://api.fewcents.co/"},n.oat=function(t){var n,e,i,r=null==t||null===(n=t.data)||void 0===n?void 0:n.purchaseOptions;this.vnt=null==r?void 0:r[0],this.aat=null==t||null===(e=t.data)||void 0===e?void 0:e.loginUrl;var a=null==t||null===(i=t.data)||void 0===i?void 0:i.bidId;a&&(this.rat=a)},n.sat=function(){var t=this,n=this.eat;return this.rat&&(n=n+"&bidId="+this.rat),this.DR.buildUrl(n,!1).then((function(n){return t.DR.getLoginUrl(n)})).then((function(n){return t.Ds.timeoutPromise(1e4,t.ri.fetchJson(n,{})).then((function(t){return t.json()}))}))},n.Unt=function(){var t=this;return this.xnt?s||(s=Promise.resolve(void 0)):(this.fat&&(this.fat=null),this.ynt&&(this.ynt=null),this.Tu.mutatePromise((function(){t.xnt=!0,t.gnt=null,function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(t.uat())})))},n.uat=function(){var t=this.nat.contentSelector,n=this.ampdoc.getElementById(t);return c().assertElement(n,"No element found with given id",t)},n.znt=function(){this.tat=this.uat(),this.gnt=r(this.ampdoc.win.document,"div",{class:"aaf-container"}),this.lat(),this.hat(),this.pat();var t=r(this.ampdoc.win.document,"div",{class:"aaf-bottom-div"}),n=this.vat();t.appendChild(n);var e=r(this.ampdoc.win.document,"img",{class:"aaf-fewcents-image-tag",src:this.Rnt.fcPoweredImageRef});t.appendChild(e),this.gnt.appendChild(t),this.tat.appendChild(this.gnt),this.xnt=!1},n.lat=function(){var t=r(this.ampdoc.win.document,"img",{class:"aaf-imageTag",src:this.nat.publisherLogoUrl});this.gnt.appendChild(t);var n=r(this.ampdoc.win.document,"div",{class:"aaf-headerText"});n.textContent=this.Rnt.fcTitleText,this.gnt.appendChild(n)},n.hat=function(){var t=this,n=r(this.ampdoc.win.document,"a",{class:"aaf-already-bought",href:this.aat,target:"_blank",rel:"noopener noreferrer"});n.textContent=this.Rnt.fcPromptText,this.ynt=j(n,"click",(function(n){t.Ant(n)})),this.gnt.appendChild(n)},n.pat=function(){var t,n,e=this,i=r(this.ampdoc.win.document,"div",{class:"aaf-price-btn-div"});this.gnt.appendChild(i);var a=r(this.ampdoc.win.document,"div",{class:"aaf-article-price"});a.textContent=null===(t=this.vnt)||void 0===t||null===(n=t.price)||void 0===n?void 0:n.price,i.appendChild(a);var s=r(this.ampdoc.win.document,"div",{class:"aaf-btn-div"}),o=r(this.ampdoc.win.document,"button",{class:"aaf-purchase-button",style:"background:".concat(this.nat.primaryColor)});o.textContent=this.Rnt.fcButtonText,this.fat=j(o,"click",(function(t){e.Ant(t)})),s.appendChild(o),i.appendChild(s)},n.vat=function(){var t=r(this.ampdoc.win.document,"div",{class:"aaf-refRow"}),n=r(this.ampdoc.win.document,"a",{class:"aaf-refElements",href:this.Rnt.fcTermsRef,target:"_blank",rel:"noopener noreferrer"});n.textContent="Terms",t.appendChild(n),this.dat(t);var e=r(this.ampdoc.win.document,"a",{class:"aaf-refElements",href:this.Rnt.fcPrivacyRef,target:"_blank",rel:"noopener noreferrer"});e.textContent="Privacy",t.appendChild(e),this.dat(t);var i=r(this.ampdoc.win.document,"a",{class:"aaf-refElements",href:this.Rnt.fcContactUsRef,target:"_blank",rel:"noopener noreferrer"});return i.textContent="Contact Us",t.appendChild(i),this.dat(t),t},n.dat=function(t){var n=r(this.ampdoc.win.document,"span",{class:"aaf-partition-bar"});n.textContent="|",t.appendChild(n)},n.Ant=function(t){var n=this;return t.preventDefault(),this.DR.buildUrl(this.aat,!1).then((function(t){n.DR.loginWithUrl(t)}))},t}();t.registerServiceForDoc("fewcents",(function(t){return(n=t.getHeadNode(),b(n,"access","amp-access")).then((function(t){var n=t.getVendorSource("fewcents"),e=new I(t,n);return n.getAdapter().registerVendor(e),e}));var n}))}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-access-fewcents-0.1.js.map