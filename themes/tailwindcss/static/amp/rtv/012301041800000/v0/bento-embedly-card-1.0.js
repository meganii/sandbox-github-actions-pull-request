;
!function(n){var t=self.BENTO=self.BENTO||{};(t.bento=t.bento||[]).push((function(n){"use strict";function t(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function r(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function e(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(r){t(n,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function o(n,t){return(o=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&o(n,t)}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function f(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,e=u(n);if(t){var o=u(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return l(this,r)}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function s(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,i=[],u=!0,a=!1;try{for(r=r.call(n);!(u=(e=r.next()).done)&&(i.push(e.value),!t||i.length!==t);u=!0);}catch(n){a=!0,o=n}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}(n,t)||s(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,t){if(null==n)return{};var r,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||(o[r]=n[r]);return o}function b(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=s(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var y=Object.prototype;function m(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,e=n.stack,o=new Error(r);for(var i in n)o[i]=n[i];return o.stack=e,o}function p(n){for(var t,r=null,e="",o=b(arguments,!0);!(t=o()).done;){var i=t.value;i instanceof Error&&!r?r=m(i):(e&&(e+=" "),e+=i)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function h(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}y.hasOwnProperty,y.toString;var w;function g(n){if(!function(n){return"string"==typeof n&&n.startsWith("amp-")&&-1!=n.indexOf("{")}(n))return null;var t=n.indexOf("{");return-1!=t,function(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}(n.substr(t),(function(t){!function(n){var t=p.apply(null,arguments);setTimeout((function(){throw h(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(t.message)))}))}var j="unload",S=(t(w={},"auto",0),t(w,"lazy",1),t(w,"eager",2),t(w,j,3),"loading"),O="complete",E=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],x=function(){return!1},A=(0,n.forwardRef)((function(t,r){var o=t.allow,i=t.allowFullScreen,u=t.iframeStyle,a=t.name,l=t.title,f=t.matchesMessagingOrigin,c=void 0===f?x:f,s=t.messageHandler,d=t.ready,b=void 0===d||d,y=t.loading,m=t.onReadyState,p=t.sandbox,h=t.src,w=v(t,E),g=(0,n.useAmpContext)().playable,A=(0,n.useLoading)(y),R=A!==j,I=(0,n.useRef)(!1),B=(0,n.useValueRef)(m),F=(0,n.useCallback)((function(n){if(n!==I.current){I.current=n;var t=B.current;null==t||t(n?O:S)}}),[B]),k=(0,n.useRef)(null);return(0,n.useImperativeHandle)(r,(function(){return{get readyState(){return I.current?O:S},get node(){return k.current}}}),[]),(0,n.useLayoutEffect)((function(){R||F(!1)}),[R,F]),(0,n.useEffect)((function(){var n=k.current;!g&&n&&(function(n){return!(!n||"about:blank"==n||n.includes("#"))}(n.src)?n.src=n.src:n.parentNode.insertBefore(n,n.nextSibling))}),[g]),(0,n.useLayoutEffect)((function(){var n=k.current;if(n&&R){var t=function(n){var t=k.current;t&&n.source==t.contentWindow&&c(n.origin)&&s(n)},r=n.ownerDocument.defaultView;return r.addEventListener("message",t),function(){return r.removeEventListener("message",t)}}}),[c,s,R,b]),(0,n.createElement)(n.ContainWrapper,e(e({},w),{},{layout:!0,size:!0,paint:!0}),R&&b&&(0,n.createElement)("iframe",{allow:o,allowFullScreen:i,frameBorder:"0",loading:A,name:a,onLoad:function(){return F(!0)},part:"iframe",ref:k,sandbox:p,scrolling:"no",src:h,style:e(e({},u),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:l}))}));A.displayName="IframeEmbed";var R=function(n){return self.AMP_CONFIG?self.AMP_CONFIG[n]:null},I=R("thirdPartyUrl")||"https://3p.ampproject.net",B=R("thirdPartyFrameHost")||"ampproject.net";self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var F,k,H=function(){function n(n){this.Lt=n,this.Wt=0,this.Kt=0,this.Qt=Object.create(null)}var t=n.prototype;return t.has=function(n){return!!this.Qt[n]},t.get=function(n){var t=this.Qt[n];if(t)return t.access=++this.Kt,t.payload},t.put=function(n,t){this.has(n)||this.Wt++,this.Qt[n]={payload:t,access:this.Kt},this.Xt()},t.Xt=function(){if(!(this.Wt<=this.Lt)){var n,t=this.Qt,r=this.Kt+1;for(var e in t){var o=t[e].access;o<r&&(r=o,n=e)}void 0!==n&&(delete t[n],this.Wt--)}},n}();function T(n){return"".concat(I,"/").concat("2301041800000","/vendor/").concat(n).concat(".js")}function z(n){var t;if(n.crypto&&n.crypto.getRandomValues){var r=new Uint32Array(2);n.crypto.getRandomValues(r),t=String(r[0])+r[1]}else t=String(n.Math.random()).substr(2)+"0";return t}new Set(["c","v","a","ad"]);var C=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],P={},q="sync-xhr 'none'",M=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),N=(0,n.forwardRef)((function(t,r){var o,i,u=t.allow,a=void 0===u?q:u,l=t.excludeSandbox,f=t.name,c=t.messageHandler,s=t.options,b=t.sandbox,y=void 0===b?M:b,m=t.src,p=t.type,h=t.title,w=void 0===h?p:h,g=v(t,C);if("number"!=typeof i&&(i=0),i+q.length>(o=a).length||-1===o.indexOf("sync-xhr 'none'",i))throw new Error("'allow' prop must contain \"".concat(q,'". Found "').concat(a,'".'));var j=(0,n.useRef)(null),S=(0,n.useRef)(null),O=(0,n.useMemo)((function(){var n;return P[p]||(P[p]=(n=0,function(){return String(++n)})),P[p]()}),[p]),E=d((0,n.useState)({name:f,src:m}),2),x=E[0],R=E[1],I=x.name,N=x.src,U=(0,n.useRef)(null);return(0,n.useLayoutEffect)((function(){var n,t,r,o,i,u,a,l=null===(n=j.current)||void 0===n||null===(t=n.ownerDocument)||void 0===t?void 0:t.defaultView,c=null!=m?m:l?(i=o||"frame",(r=l).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+z(r),"https://"+r.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(B,"/").concat("2301041800000","/")+"".concat(i,".html")):"about:blank";if(f)R({name:f,src:c});else if(l){U.current||(U.current=function(n){for(var t=0,r=n;r&&r!=r.parent;r=r.parent)t++;return String(t)+"-"+z(n)}(l));var d=Object.assign({"location":{"href":l.location.href},"sentinel":U.current}),v=e({"title":w,"type":p,"_context":d},s);R({name:JSON.stringify({"host":(u=c,F||(F=self.document.createElement("a"),k=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new H(100))),function(n,t,r){if(r&&r.has(t))return r.get(t);n.href=t,n.protocol||(n.href=n.href);var e,o={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),e=n.origin&&"null"!=n.origin?n.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=e;var i=o;return r&&r.put(t,i),i}(F,u,a?null:k)).hostname,"bootstrap":T(p),"type":p,"count":O,"attributes":v}),src:c})}}),[O,f,s,m,w,p]),(0,n.useEffect)((function(){var n,t=null===(n=S.current)||void 0===n?void 0:n.node;t&&t.parentNode.insertBefore(t,t.nextSibling)}),[I]),(0,n.useImperativeHandle)(r,(function(){return{get readyState(){var n;return null===(n=S.current)||void 0===n?void 0:n.readyState},get node(){var n;return null===(n=S.current)||void 0===n?void 0:n.node}}}),[]),(0,n.createElement)(A,e(e({},g),{},{allow:a,contentRef:j,messageHandler:c,name:I,ref:S,ready:!!I,sandbox:l?void 0:y,src:N,title:w}))}));N.displayName="ProxyIframeEmbed";var U=(0,n.createContext)({apiKey:""}),G=["onLoad","requestResize","style","title","url"],J=(0,n.forwardRef)((function(t,r){var o=t.onLoad,i=t.requestResize,u=t.style,a=t.title,l=t.url,f=v(t,G),c=d((0,n.useState)(null),2),s=c[0],b=c[1],y=(0,n.useValueRef)(o),m=(0,n.useCallback)((function(n){var t=g(n.data);if("embed-size"==t.type){var r,e=t.height;i?(i(e),b("100%")):b(e),null===(r=y.current)||void 0===r||r.call(y)}}),[i,y]),p=(0,n.useContext)(U).apiKey;(function(n){return!!n})(l)||("url prop is required for BentoEmbedlyCard",console.warn("url prop is required for BentoEmbedlyCard"));var h={url:l};return p&&(h["data-card-key"]=p),(0,n.createElement)(N,e(e({options:h,ref:r,title:a||"Embedly card",type:"embedly"},f),{},{messageHandler:m,style:s?e(e({},u),{},{height:s}):u}))}));J.displayName="BentoEmbedlyCard";var L=function(n){i(r,n);var t=f(r);function r(){return t.apply(this,arguments)}return r}(n.PreactBaseElement);L.Component=function(t){var r=document.querySelector("amp-embedly-key"),o=(null==r?void 0:r.getAttribute("value"))||"";return(0,n.createElement)(U.Provider,{value:o},(0,n.createElement)(J,e({},t)))},L.props={"title":{attr:"title"},"url":{attr:"data-url"}},L.layoutSizeDefined=!0,L.usesShadowDom=!0;var D,K=function(n){i(r,n);var t=f(r);function r(){return t.apply(this,arguments)}return r}(n.PreactBaseElement);(0,n.defineBentoElement)("bento-embedly-card",L,D),(0,n.defineBentoElement)("bento-embedly-key",K,void 0)}))}();
//# sourceMappingURL=bento-embedly-card-1.0.js.map