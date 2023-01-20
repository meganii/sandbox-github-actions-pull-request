;
!function(n){var t=self.BENTO=self.BENTO||{};(t.bento=t.bento||[]).push((function(n){"use strict";function t(n,e){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,e)}function e(n){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){return t.toUpperCase()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n,t){if(n){if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}function s(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(e)return(e=e.call(n)).next.bind(e);if(Array.isArray(n)||(e=f(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var d,v=Object.prototype;v.hasOwnProperty,v.toString;var m="unload";function b(){var n=0;return function(){return String(++n)}}function y(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(n){a=!0,o=n}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}}(n,t)||f(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}function h(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var e=n.message,r=n.stack,o=new Error(e);for(var i in n)o[i]=n[i];return o.stack=r,o}function w(n){for(var t,e=null,r="",o=s(arguments,!0);!(t=o()).done;){var i=t.value;i instanceof Error&&!e?e=h(i):(r&&(r+=" "),r+=i)}return e?r&&(e.message=r+": "+e.message):e=new Error(r),e}function g(n){var t,e;null===(t=(e=self).__AMP_REPORT_ERROR)||void 0===t||t.call(e,n)}i(d={},"auto",0),i(d,"lazy",1),i(d,"eager",2),i(d,m,3),b();function S(n){if(!function(n){return"string"==typeof n&&n.startsWith("amp-")&&-1!=n.indexOf("{")}(n))return null;var t=n.indexOf("{");return-1!=t,function(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}(n.substr(t),(function(t){!function(n){var t=w.apply(null,arguments);setTimeout((function(){throw g(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(t.message)))}))}var j="loading",O="complete",E=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],x=function(){return!1},A=(0,n.forwardRef)((function(t,e){var r=t.allow,o=t.allowFullScreen,i=t.iframeStyle,u=t.name,l=t.title,c=t.matchesMessagingOrigin,f=void 0===c?x:c,s=t.messageHandler,d=t.ready,v=void 0===d||d,b=t.loading,y=t.onReadyState,h=t.sandbox,w=t.src,g=p(t,E),S=(0,n.useAmpContext)().playable,A=(0,n.useLoading)(b),I=A!==m,R=(0,n.useRef)(!1),T=(0,n.useValueRef)(y),F=(0,n.useCallback)((function(n){if(n!==R.current){R.current=n;var t=T.current;null==t||t(n?O:j)}}),[T]),z=(0,n.useRef)(null);return(0,n.useImperativeHandle)(e,(function(){return{get readyState(){return R.current?O:j},get node(){return z.current}}}),[]),(0,n.useLayoutEffect)((function(){I||F(!1)}),[I,F]),(0,n.useEffect)((function(){var n=z.current;!S&&n&&(function(n){return!(!n||"about:blank"==n||n.includes("#"))}(n.src)?n.src=n.src:n.parentNode.insertBefore(n,n.nextSibling))}),[S]),(0,n.useLayoutEffect)((function(){var n=z.current;if(n&&I){var t=function(n){var t=z.current;t&&n.source==t.contentWindow&&f(n.origin)&&s(n)},e=n.ownerDocument.defaultView;return e.addEventListener("message",t),function(){return e.removeEventListener("message",t)}}}),[f,s,I,v]),(0,n.createElement)(n.ContainWrapper,a(a({},g),{},{layout:!0,size:!0,paint:!0}),I&&v&&(0,n.createElement)("iframe",{allow:r,allowFullScreen:o,frameBorder:"0",loading:A,name:u,onLoad:function(){return F(!0)},part:"iframe",ref:z,sandbox:h,scrolling:"no",src:w,style:a(a({},i),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:l}))}));A.displayName="IframeEmbed";var I=function(n){return self.AMP_CONFIG?self.AMP_CONFIG[n]:null},R=I("thirdPartyUrl")||"https://3p.ampproject.net",T=I("thirdPartyFrameHost")||"ampproject.net";self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var F,z,H=function(){function n(n){this.Lt=n,this.Wt=0,this.Kt=0,this.Qt=Object.create(null)}var t=n.prototype;return t.has=function(n){return!!this.Qt[n]},t.get=function(n){var t=this.Qt[n];if(t)return t.access=++this.Kt,t.payload},t.put=function(n,t){this.has(n)||this.Wt++,this.Qt[n]={payload:t,access:this.Kt},this.Xt()},t.Xt=function(){if(!(this.Wt<=this.Lt)){var n,t=this.Qt,e=this.Kt+1;for(var r in t){var o=t[r].access;o<e&&(e=o,n=r)}void 0!==n&&(delete t[n],this.Wt--)}},n}();function M(n){return"".concat(R,"/").concat("2301041800000","/vendor/").concat(n).concat(".js")}function N(n){var t;if(n.crypto&&n.crypto.getRandomValues){var e=new Uint32Array(2);n.crypto.getRandomValues(e),t=String(e[0])+e[1]}else t=String(n.Math.random()).substr(2)+"0";return t}new Set(["c","v","a","ad"]);var U=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],B={},L="sync-xhr 'none'",P=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),k=(0,n.forwardRef)((function(t,e){var r,o,i=t.allow,u=void 0===i?L:i,l=t.excludeSandbox,c=t.name,f=t.messageHandler,s=t.options,d=t.sandbox,v=void 0===d?P:d,m=t.src,h=t.type,w=t.title,g=void 0===w?h:w,S=p(t,U);if("number"!=typeof o&&(o=0),o+L.length>(r=u).length||-1===r.indexOf("sync-xhr 'none'",o))throw new Error("'allow' prop must contain \"".concat(L,'". Found "').concat(u,'".'));var j=(0,n.useRef)(null),O=(0,n.useRef)(null),E=(0,n.useMemo)((function(){return B[h]||(B[h]=b()),B[h]()}),[h]),x=y((0,n.useState)({name:c,src:m}),2),I=x[0],R=x[1],k=I.name,G=I.src,J=(0,n.useRef)(null);return(0,n.useLayoutEffect)((function(){var n,t,e,r,o,i,u,l=null===(n=j.current)||void 0===n||null===(t=n.ownerDocument)||void 0===t?void 0:t.defaultView,f=null!=m?m:l?(o=r||"frame",(e=l).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=e.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+N(e),"https://"+e.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(T,"/").concat("2301041800000","/")+"".concat(o,".html")):"about:blank";if(c)R({name:c,src:f});else if(l){J.current||(J.current=function(n){for(var t=0,e=n;e&&e!=e.parent;e=e.parent)t++;return String(t)+"-"+N(n)}(l));var d=Object.assign({"location":{"href":l.location.href},"sentinel":J.current}),v=a({"title":g,"type":h,"_context":d},s);R({name:JSON.stringify({"host":(i=f,F||(F=self.document.createElement("a"),z=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new H(100))),function(n,t,e){if(e&&e.has(t))return e.get(t);n.href=t,n.protocol||(n.href=n.href);var r,o={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),r=n.origin&&"null"!=n.origin?n.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=r;var i=o;return e&&e.put(t,i),i}(F,i,u?null:z)).hostname,"bootstrap":M(h),"type":h,"count":E,"attributes":v}),src:f})}}),[E,c,s,m,g,h]),(0,n.useEffect)((function(){var n,t=null===(n=O.current)||void 0===n?void 0:n.node;t&&t.parentNode.insertBefore(t,t.nextSibling)}),[k]),(0,n.useImperativeHandle)(e,(function(){return{get readyState(){var n;return null===(n=O.current)||void 0===n?void 0:n.readyState},get node(){var n;return null===(n=O.current)||void 0===n?void 0:n.node}}}),[]),(0,n.createElement)(A,a(a({},S),{},{allow:u,contentRef:j,messageHandler:f,name:k,ref:O,ready:!!k,sandbox:l?void 0:v,src:G,title:g}))}));k.displayName="ProxyIframeEmbed";var G=["cards","conversation","limit","momentid","onError","onLoad","options","requestResize","style","timelineScreenName","timelineSourceType","timelineUserId","title","tweetLimit","tweetid"],J=function(){return!0},q=(0,n.forwardRef)((function(t,e){var r=t.cards,o=t.conversation,i=t.limit,u=t.momentid,l=t.onError,c=t.onLoad,f=t.options,s=t.requestResize,d=t.style,v=t.timelineScreenName,m=t.timelineSourceType,b=t.timelineUserId,h=t.title,w=t.tweetLimit,g=t.tweetid,j=p(t,G),O=y((0,n.useState)(null),2),E=O[0],x=O[1],A=(0,n.useValueRef)(c),I=(0,n.useValueRef)(l),R=(0,n.useCallback)((function(n){var t=S(n.data);if("embed-size"==t.type){var e,r=t.height;s?(s(r),x("100%")):x(r),null===(e=A.current)||void 0===e||e.call(A)}else if("no-content"===t.type){var o;null===(o=I.current)||void 0===o||o.call(I)}}),[s,A,I]),T=(0,n.useMemo)((function(){return a({cards:r,conversation:o,limit:i,momentid:u,timelineScreenName:v,timelineSourceType:m,timelineUserId:b,tweetLimit:w,tweetid:g},f)}),[r,o,i,u,f,v,m,b,w,g]);return(0,n.createElement)(k,a(a({allowfullscreen:!0,ref:e,title:h},j),{},{matchesMessagingOrigin:J,messageHandler:R,options:T,type:"twitter",style:E?a(a({},d),{},{height:E}):d}))}));q.displayName="BentoTwitter";var C,D,V=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(a,n);var r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=e(r);if(i){var u=e(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return o(this,n)});function a(){return u.apply(this,arguments)}return a}(n.PreactBaseElement);V.Component=q,V.props={"title":{attr:"title"},"loading":{attr:"data-loading"},"options":(C="data-",D=function(n){return(null==n?void 0:n.startsWith(C))&&n!==C},{"attrMatches":D,"parseAttrs":function(n){for(var t,e=void 0,r=n.attributes,o=0;o<r.length;o++){var i=r[o];D(i.name)&&(e||(e={}),e[(t=i.name.slice(C.length),t.replace(/-([a-z])/g,l))]=i.value)}return e}})},V.layoutSizeDefined=!0,V.usesShadowDom=!0,V.loadable=!0,(0,n.defineBentoElement)("bento-twitter",V,undefined)}))}();
//# sourceMappingURL=bento-twitter-1.0.js.map