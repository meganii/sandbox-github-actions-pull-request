;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-experiment",ev:"1.0",l:!1,f:function(t,n){!function(){function n(t,r){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,r)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var o=Array.isArray;function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function a(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype,c=f.hasOwnProperty,s=f.toString;function v(t){return"[object Object]"===s.call(t)}function l(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function h(t,n){return c.call(t,n)}function m(t,n,r,e,i,o,u,a,f,c,s){return t}function p(t){return JSON.parse(t)}function d(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function b(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function y(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){d(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var w=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function O(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,e=t.stack,i=new Error(r);for(var o in t)i[o]=t[o];return i.stack=e,i}function j(t){for(var n,r=null,e="",i=a(arguments,!0);!(n=i()).done;){var o=n.value;o instanceof Error&&!r?r=O(o):(e&&(e+=" "),e+=o)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function x(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var S,A=self.__AMP_LOG;function P(t,n){throw new Error("failed to call initLogConstructor")}function M(t){return A.user||(A.user=E()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(A.user.win,t)?A.userForEmbed||(A.userForEmbed=E()):A.user}function E(t){return P()}function N(t,n,r,e,i,o,u,a,f,c,s){return t}function I(t,n,r,e,i,o,u,a,f,c,s){return M().assert(t,n,r,e,i,o,u,a,f,c,s)}function R(){return S||(S=Promise.resolve(void 0))}var J=function(){var t=this;this.promise=new Promise((function(n,r){t.resolve=n,t.reject=r}))};function T(t,n){return z(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function k(t,n){return z(D(_(t)),n)}function U(t,n){return function(t,n){var r=G(t,n);if(r)return r;var e,i,o,u,a=L(t);return a[n]=(i=(e=new J).promise,o=e.reject,u=e.resolve,i.catch((function(){})),{obj:null,promise:i,resolve:u,reject:o,context:null,ctor:null}),a[n].promise}(D(t),n)}function C(t,n){return G(D(t),n)}function _(t){return t.nodeType?(r=t,n=(r.ownerDocument||r).defaultView,T(n,"ampdoc")).getAmpDoc(t):t;var n,r}function D(t){var n=_(t);return n.isSingleDoc()?n.win:n}function z(t,n){N(Q(t,n));var r=L(t)[n];return r.obj||(N(r.ctor),N(r.context),r.obj=new r.ctor(r.context),N(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function G(t,n){var r=L(t)[n];return r?r.promise?r.promise:(z(t,n),r.promise=Promise.resolve(r.obj)):null}function L(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function Q(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}var W="__AMP__EXPERIMENT_TOGGLES";var F=function(t){return T(t,"crypto")};function Y(t){for(var n=new Uint8Array(t.length),r=0;r<t.length;r++){var e=t.charCodeAt(r);m(e<=255),n[r]=e}return n}function B(t){for(var n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}var K,q,V=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=l()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,r=this.Kt+1;for(var e in n){var i=n[e].access;i<r&&(r=i,t=e)}void 0!==t&&(delete n[t],this.Wt--)}},t}(),H=function(){return self.AMP.config.urls}(),X=new Set(["c","v","a","ad"]),$=function(t){return"string"==typeof t?Z(t):t};function Z(t,n){return K||(K=self.document.createElement("a"),q=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new V(100))),function(t,n,r){if(r&&r.has(n))return r.get(n);t.href=n,t.protocol||(t.href=t.href);var e,i={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),e=t.origin&&"null"!=t.origin?t.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=e;var o=i;return r&&r.put(n,o),o}(K,t,n?null:q)}function tt(t){return"https:"==(t=$(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||(r=".localhost",(e=(n=t.hostname).length-r.length)>=0&&n.indexOf(r,e)==e);var n,r,e}var nt="OriginExperiments",rt={"alg":"RS256","e":"AQAB","ext":!0,"key_ops":["verify"],"kty":"RSA","n":"uAGSMYKze8Fit508UaGHz1eZowfX4YsA0lmyi-65xQfjF7nMo61c4Iz4erdqgRp-ov662yVPquhPmTxgB-nzNcTPrj15Jo05Js78Q9hS2hrPIjKMlzcKSYQN_08QieWKOSmVbLSv_-4n9Ms5ta8nRs4pwc_2nX5n7m5B5GH4VerGbqIWIn9FRNYMShBRQ9TCHpb6BIUTwUn6iwmJLenq0A1xhGrQ9rswGC1QJhjotkeReKXZDLLWaFr0uRw-IyvRa5RiiEGntgOvcbvamM5TnbKavc2rxvg2TWTCNQnb7lWSAzldJA_yAOYet_MjnHMyj2srUdbQSDCk8kPWWuafiQ"},et=function(){function t(t){var n,r;this.te=t,this.ON=F(t.win),this.Pi=(n=t.getHeadNode(),Q(r=D(_(n)),"url")?z(r,"url"):null),this.jN=new it(this.ON,this.Pi),this.SN=null}var n=t.prototype;return n.getExperiments=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rt;return this.ON.isPkcsAvailable()?(this.SN&&!t||(this.SN=this.PN(n)),this.SN):(M().error(nt,"Crypto is unavailable."),Promise.resolve([]))},n.PN=function(t){var n=this,r=this.te.getHeadNode().querySelectorAll('meta[name="amp-experiment-token"]');if(0==r.length)return R();var e=this.te.win;return F(e).importPkcsKey(t).then((function(t){for(var i=[],o=0;o<r.length;o++){var u=r[o],a=u.getAttribute("content");if(a){var f=n.jN.verifyToken(a,e.location,t).catch((function(t){M().error(nt,"Failed to verify experiment token:",t)}));i.push(f)}else M().error(nt,"Missing content for experiment token: ",u)}return Promise.all(i)}))},t}(),it=function(){function t(t,n){this.ON=t,this.Pi=n}var n=t.prototype;return n.generateKeys=function(){var t=y({modulusLength:2048,publicExponent:Uint8Array.of(1,0,1)},this.ON.pkcsAlgo);return this.ON.subtle.generateKey(t,!0,["sign","verify"])},n.generateToken=function(t,n,r){var e=this,i=Y(JSON.stringify(n)),o=this.MN(t,i);return this.EN(o,r).then((function(t){return e.NN(o,new Uint8Array(t))}))},n.verifyToken=function(t,n,r){var e=this;return new Promise((function(i){var o=0,u=Y(atob(t)),a=u[o];if(0!==a)throw new Error("Unrecognized token version: ".concat(a));o+=1;var f=new DataView(u.buffer).getUint32(o);if(o+=4,f>u.length-o)throw new Error("Unexpected config length: ".concat(f));var c=u.subarray(o,o+f);o+=f;var s=u.subarray(0,o),v=u.subarray(o);i(e.IN(v,s,r).then((function(t){if(!t)throw new Error("Failed to verify token signature.");var r=p(B(c)),i=e.Pi.parse(r.origin).origin,o=Z(function(t){if(!function(t){return H.cdnProxyRegex.test($(t).origin)}(t=$(t)))return t.href;var n=t.pathname.split("/"),r=n[1];I(X.has(r),"Unknown path prefix in url %s",t.href);var e=n[2],i="s"==e?"https://"+decodeURIComponent(n[3]):"http://"+decodeURIComponent(e);return I(i.indexOf(".")>0,"Expected a . in origin %s",i),n.splice(1,"s"==e?3:2),i+n.join("/")+function(t,n){if(!t||"?"==t)return"";var r=new RegExp("[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)","\\b[^&]*"),"g"),e=t.replace(r,"").replace(/^[?&]/,"");return e?"?"+e:""}(t.search)+(t.hash||"")}(n)).origin;if(i!==o)throw new Error("Config origin (".concat(i,") does not match ")+"window (".concat(o,")."));var u=r.experiment;if(r.expiration>=Date.now())return u;throw new Error('Experiment "'.concat(u,'" has expired.'))})))}))},n.MN=function(t,n){var r=new Uint8Array(n.length+5);return r[0]=t,new DataView(r.buffer).setUint32(1,n.length,!1),r.set(n,5),r},n.NN=function(t,n){var r=B(t)+B(n);return btoa(r)},n.EN=function(t,n){return this.ON.subtle.sign(this.ON.pkcsAlgo,n,t)},n.IN=function(t,n,r){return this.ON.verifyPkcs(r,t,n)},t}(),ot=["attributes","characterData","childList"];function ut(t){var n=JSON.stringify(t);I(void 0!==t.value&&"string"==typeof t.value,"Mutation %s must have a value.",n),I(void 0!==t.attributeName&&"string"==typeof t.attributeName,"Mutation %s must have a attributeName.",n)}var at,ft=function(){function t(t,n){this.RN=t,this.oi=n,ut(this.RN)}var n=t.prototype;return n.parseAndValidate=function(){return!this.RN.value.match(/(^|\\W)i-amphtml-/)},n.mutate=function(){var t=this;this.oi.forEach((function(n){n.setAttribute(t.RN.attributeName,t.RN.value)}))},n.toString=function(){return JSON.stringify(this.RN)},t}(),ct=["Webkit","webkit","Moz","moz","ms","O","o"];function st(t,n,r,e,i){var o=function(t,n,r){if(n.startsWith("--"))return n;at||(at=l());var e=at[n];if(!e||r){if(e=n,void 0===t[n]){var i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var r=0;r<ct.length;r++){var e=ct[r]+n;if(void 0!==t[e])return e}return""}(t,i);void 0!==t[o]&&(e=o)}r||(at[n]=e)}return e}(t.style,n,i);if(o){var u,a=e?r+e:r;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),ct.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}var vt=/\S/,lt=/.*/,ht={"color":lt,"background-color":lt,"visibility":/^hidden$/,"display":/^none$/,"position":/^(static|relative|absolute|initial|inherit)$/,"font-size":lt,"background-image":lt,"border-width":lt,"border-style":lt,"border-color":lt},mt={"width":lt,"height":lt},pt=function(){function t(t,n){this.RN=t,this.oi=n,this.JN={},this.UN=!1,ut(this.RN)}var n=t.prototype;return n.parseAndValidate=function(){var t,n=this.RN.value;if(n.match(/(!\s*important|<)/))return!1;for(var r=0;r<this.oi.length;r++)if(t=void 0,(t=this.oi[r].tagName).startsWith("AMP-")&&"AMP-STICKY-AD-TOP-PADDING"!=t&&"AMP-BODY"!=t){this.UN=!0;break}for(var e=n.split(";"),i=0;i<e.length;i++)if(vt.test(e[i])){var o=e[i].split(":");if(2!=o.length)return!1;var u=o[0].trim(),a=o[1].trim();if(!this.CN(u,a))return M().error("amp-experiment/style","Unsupported style mutation property: %s, value: %s",u,a),!1;this.JN[u]=a}return!0},n.mutate=function(){var t=this;this.oi.forEach((function(n){var r;!function(t,n){for(var r in n)st(t,r,n[r])}(n,(r=t.JN,"display"in r&&function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=j.apply(null,r);i.name=t||i.name,x(i)}("STYLE","`display` style detected. You must use toggle instead."),r))}))},n.CN=function(t,n){return!(this.UN||!h(mt,t)||!n.match(mt[t]))||!!h(ht,t)&&!!n.match(ht[t])},n.toString=function(){return JSON.stringify(this.RN)},t}(),dt=["AMP-IMG","AMP-IFRAME","A"],bt=function(){function t(t,n){this.RN=t,this.oi=n,ut(this.RN)}var n=t.prototype;return n.parseAndValidate=function(){for(var t=0;t<this.oi.length;t++){var n=this.oi[t];if(dt.indexOf(n.tagName)<0)return!1}try{!function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";I(null!=t,"%s %s must be available",n,r),I(tt(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,r,t)}(this.RN.value,this.RN.target,"attributes mutation")}catch(t){return M().error("amp-experiment attribute-mutation-default-url",t.message),!1}return!0},n.mutate=function(){var t=this;this.oi.forEach((function(n){var r=t.RN.attributeName,e=t.RN.value;if(n.setAttribute(r,e),"function"==typeof n.mutatedAttributesCallback){var i=l();i[r]=e,n.mutatedAttributesCallback(i)}}))},n.toString=function(){return JSON.stringify(this.RN)},t}(),yt=function(){function t(t,n){this.RN=t,this.oi=n,function(t){var n=JSON.stringify(t);I(void 0!==t.value&&"string"==typeof t.value,"Mutation %s must have a value.",n)}(this.RN)}var n=t.prototype;return n.parseAndValidate=function(){return!0},n.mutate=function(){var t=this;this.oi.forEach((function(n){n.textContent=t.RN.value}))},n.toString=function(){return JSON.stringify(this.RN)},t}(),wt="amp-experiment apply-experiment";var gt=/^[\w-]+$/,Ot=function(){function t(t){this.ampdoc=t,this._N=new J}var n=t.prototype;return n.init=function(t){var n=this;t.then((function(t){return n._N.resolve(t)}))},n.getVariants=function(){return this._N.promise},n.whenReady=function(){return this.getVariants()},t}();function jt(t,n,r,e){xt(r),function(t,n){var r=n.variants;I(v(r)&&Object.keys(r).length>0,"Missing variants object from experiment."),n.group&&xt(n.group);var e=0;for(var i in r)if(h(r,i)){xt(i);var o=r[i];St(o,t,i),e+=o.weight}I(e.toFixed(6)<=100,"Total percentage is bigger than 100: "+e)}(r,e);var i=t.getParam("amp-x-"+r);if(i&&h(e.variants,i))return Promise.resolve(i);var o,u=!1!==e.sticky,a=e.cidScope||"amp-experiment",f=Promise.resolve(!0);return u&&e.consentNotificationId&&(f=(o=t.getHeadNode(),function(t,n,r,e){return function(t,n,r,e){var i=C(t,n);if(i)return i;var o=_(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(r);return t?T(o.win,"extensions").waitForExtension(r,t):null})).then((function(r){return r?e?C(t,n):U(t,n):null}))}(t,n,r,e).then((function(t){return function(t,n,r){return I(t,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",n,r,r,r)}(t,n,r)}))}(o,"userNotificationManager","amp-user-notification")).then((function(t){return t.getNotification(e.consentNotificationId)})).then((function(t){return I(t,"Notification not found: "+"".concat(e.consentNotificationId)),t.isDismissed()}))),f.then((function(n){if(!n)return null;var i=e.group||r;return function(t,n,r){if(!r)return Promise.resolve(100*t.win.Math.random());var e,i=(e=t,U(e,"cid")).then((function(t){return t.get({scope:r,createCookieIfNotPresent:!0},R())}));return Promise.all([i,F(t.win)]).then((function(t){return t[1].uniform(n+":"+t[0])})).then((function(t){return 100*t}))}(t,i,u?a:null).then((function(t){for(var n=0,r=e.variants,i=Object.keys(r).sort(),o=0;o<i.length;o++)if(t<(n+=r[i[o]].weight))return i[o];return null}))}))}function xt(t){I(gt.test(t),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",t)}function St(t,n,r){I(v(t),"".concat(n,".variants.").concat(r," must be an object.")),I(void 0!==t.weight&&"number"==typeof t.weight,"".concat(n,".variants.").concat(r," must have a number weight."));var e=t.weight;I(e>0&&e<100,"Invalid weight percentage %s."+" ".concat(n,".variants.").concat(r)+" Has to be greater than 0 and less than 100",e),I(t.mutations&&o(t.mutations),"".concat(n,".variants.").concat(r," must have a mutations array."))}var At="amp-experiment",Pt=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&n(t,r)}(c,t);var e,u,f=(e=c,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(u){var o=r(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)});function c(){return f.apply(this,arguments)}c.prerenderAllowed=function(){return!0};var s=c.prototype;return s.isLayoutSupported=function(t){return"nodisplay"==t||"container"==t},s.isBuildRenderBlocking=function(){return!0},s.buildCallback=function(){var t=this,n=[U(this.getAmpDoc(),"variant"),this.DN()];return Promise.all(n).then((function(n){var r=n[0],e=n[1],i={};try{if(i=t.TS(),!e)return M().error(At,"Experiment amp-experiment-1.0 is not enabled."),void r.init(Promise.resolve(t.zN(i)));var o=t.getAmpDoc();if(k(o,"viewer"),null!=o.getParam("amp-x-disable-all-experiments"))return void r.init(Promise.resolve(t.zN(i)));var u=Object.create(null),a=Object.keys(i).map((function(t){return jt(o,0,t,i[t]).then((function(n){u[t]=n}))}));return Promise.all(a).then((function(){var n=function(t,n,r){var e=function(t,n){var r=[];for(var e in n){var i=n[e];if(i){var o=t[e].variants[i];r=r.concat(o.mutations)}}return r}(n,r);return t.whenReady().then((function(){var n=[],r=0;if(e.forEach((function(e){!function(t){I(v(t),"Mutation %s must be an object.",JSON.stringify(t)),I(void 0!==t.type&&"string"==typeof t.type,"Mutation %s must have a type.",JSON.stringify(t)),I(ot.indexOf(t.type)>=0,"Mutation %s must have a valid type.",JSON.stringify(t)),I(void 0!==t.target&&"string"==typeof t.target,"Mutation %s must have a target.",JSON.stringify(t))}(e);var i=function(t,n){var r=n.target;I(!r.match(/(^|\\W)i-amphtml-/),"target %s cannot select i-amphtml-",r);var e,i=t.querySelectorAll(r);return I(i.length>0,"No element on the document matches the selector, %s .",n.target),(e=i)?Array.prototype.slice.call(e):[]}(t.win.document,e);r+=i.length,n.push({mutationRecord:e,elements:i})})),r>70){var i="Max number of mutations for the total "+"applied experiments exceeded: ".concat(r," > ")+70;throw M().error(wt,i),new Error(i)}var o=function(t){var n=[];return t.forEach((function(t){var r=t.elements,e=t.mutationRecord,i=void 0;if("characterData"===e.type)i=new yt(e,r);else if("attributes"===e.type)if("style"===e.attributeName)i=new pt(e,r);else if("href"===e.attributeName||"src"===e.attributeName)i=new bt(e,r);else{if("class"!==e.attributeName)throw new Error("Mutation ".concat(JSON.stringify(e)," has an unsupported attributeName."));i=new ft(e,r)}else M().error(wt,"childList mutations not supported in the current experiment state."),i={parseAndValidate:function(){return!0},mutate:function(){}};n.push(i)})),n}(n);o.forEach((function(t){I(t.parseAndValidate(),"Mutation %s has an an unsupported value.",t.toString())})),o.forEach((function(t){t.mutate()}))}))}(t.getAmpDoc(),i,u).then((function(){return u}));return r.init(n),n})).catch((function(n){throw r.init(Promise.resolve(t.zN(i))),n}))}catch(t){throw r.init(Promise.resolve({})),t}}))},s.TS=function(){var t=this.element.children;return I(1==t.length&&"SCRIPT"==t[0].tagName&&"APPLICATION/JSON"==t[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.'),N(p(t[0].textContent))},s.zN=function(t){var n=Object.create(null);return Object.keys(t).map((function(t){n[t]=null})),n},s.DN=function(){return t=this.win,n="amp-experiment-1.0",r=function(t){var n,r,e,i,u;if(t[W])return t[W];t[W]=l();var f=t[W];m(f);var c=y(y({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(r=t.AMP_EXP)&&void 0!==r?r:p((null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var s in c){var v=c[s];"number"==typeof v&&v>=0&&v<=1&&(f[s]=Math.random()<v)}var h=null===(i=t.AMP_CONFIG)||void 0===i?void 0:i["allow-doc-opt-in"];if(o(h)&&h.length){var d=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var b,O,j=a((null===(b=d.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(O=j()).done;){var x=O.value;h.includes(x)&&(f[x]=!0)}}Object.assign(f,function(t){var n,r="";try{var e;"localStorage"in t&&(r=null!==(e=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(t){(A.dev||(A.dev=P())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var i,o=(null===(n=r)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],u=l(),f=a(o,!0);!(i=f()).done;){var c=i.value;c&&("-"==c[0]?u[c.substr(1)]=!1:u[c]=!0)}return u}(t));var S=null===(u=t.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(o(S)&&S.length)for(var M,E=function(t){var n,r=l();if(!t)return r;for(;n=w.exec(t);){var e=g(n[1],n[1]),i=n[2]?g(n[2].replace(/\+/g," "),n[2]):"";r[e]=i}return r}(t.location.originalHash||t.location.hash),N=a(S,!0);!(M=N()).done;){var I=M.value,R=E["e-".concat(I)];"1"==R&&(f[I]=!0),"0"==R&&(f[I]=!1)}return f}(t),r[n]?Promise.resolve(!0):(e=this.getAmpDoc(),i="origin-experiments",u=et,function(t,n,r,e,i,o){var u=L(t),a=u[r];a||(a=u[r]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=n,a.sharedInstance=!1,a.resolve&&z(t,r))}(D(f=_(e)),f,i,u),(c=this.element,k(c,"origin-experiments")).getExperiments().then((function(t){return t&&t.includes("amp-experiment-1.0")})));var t,n,r,e,i,u,f,c},c}(t.BaseElement);t.registerServiceForDoc("variant",Ot),t.registerElement(At,Pt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-experiment-1.0.js.map