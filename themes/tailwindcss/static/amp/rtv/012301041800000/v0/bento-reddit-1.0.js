;
!function(t){var e=self.BENTO=self.BENTO||{};(e.bento=e.bento||[]).push((function(t){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=f(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var v=Object.prototype;function b(t){var e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;var n=t.message,r=t.stack,o=new Error(n);for(var i in t)o[i]=t[i];return o.stack=r,o}function m(t){for(var e,n=null,r="",o=d(arguments,!0);!(e=o()).done;){var i=e.value;i instanceof Error&&!n?n=b(i):(r&&(r+=" "),r+=i)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function y(t){var e,n;null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t)}v.hasOwnProperty,v.toString;var p;function h(t){if(!function(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}(t))return null;var e=t.indexOf("{");return-1!=e,function(t,e){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==e||e(t),null}}(t.substr(e),(function(e){!function(t){var e=m.apply(null,arguments);setTimeout((function(){throw y(e),e}))}(new Error("MESSAGING: Failed to parse message: ".concat(t,"\n").concat(e.message)))}))}var w="unload",g=(i(p={},"auto",0),i(p,"lazy",1),i(p,"eager",2),i(p,w,3),"loading"),j="complete",S=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],O=function(){return!1},E=(0,t.forwardRef)((function(e,n){var r=e.allow,o=e.allowFullScreen,i=e.iframeStyle,a=e.name,l=e.title,f=e.matchesMessagingOrigin,c=void 0===f?O:f,d=e.messageHandler,v=e.ready,b=void 0===v||v,m=e.loading,y=e.onReadyState,p=e.sandbox,h=e.src,E=s(e,S),x=(0,t.useAmpContext)().playable,R=(0,t.useLoading)(m),A=R!==w,I=(0,t.useRef)(!1),T=(0,t.useValueRef)(y),P=(0,t.useCallback)((function(t){if(t!==I.current){I.current=t;var e=T.current;null==e||e(t?j:g)}}),[T]),F=(0,t.useRef)(null);return(0,t.useImperativeHandle)(n,(function(){return{get readyState(){return I.current?j:g},get node(){return F.current}}}),[]),(0,t.useLayoutEffect)((function(){A||P(!1)}),[A,P]),(0,t.useEffect)((function(){var t=F.current;!x&&t&&(function(t){return!(!t||"about:blank"==t||t.includes("#"))}(t.src)?t.src=t.src:t.parentNode.insertBefore(t,t.nextSibling))}),[x]),(0,t.useLayoutEffect)((function(){var t=F.current;if(t&&A){var e=function(t){var e=F.current;e&&t.source==e.contentWindow&&c(t.origin)&&d(t)},n=t.ownerDocument.defaultView;return n.addEventListener("message",e),function(){return n.removeEventListener("message",e)}}}),[c,d,A,b]),(0,t.createElement)(t.ContainWrapper,u(u({},E),{},{layout:!0,size:!0,paint:!0}),A&&b&&(0,t.createElement)("iframe",{allow:r,allowFullScreen:o,frameBorder:"0",loading:R,name:a,onLoad:function(){return P(!0)},part:"iframe",ref:F,sandbox:p,scrolling:"no",src:h,style:u(u({},i),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:l}))}));E.displayName="IframeEmbed";var x=function(t){return self.AMP_CONFIG?self.AMP_CONFIG[t]:null},R=x("thirdPartyUrl")||"https://3p.ampproject.net",A=x("thirdPartyFrameHost")||"ampproject.net";self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var I,T,P=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=Object.create(null)}var e=t.prototype;return e.has=function(t){return!!this.Qt[t]},e.get=function(t){var e=this.Qt[t];if(e)return e.access=++this.Kt,e.payload},e.put=function(t,e){this.has(t)||this.Wt++,this.Qt[t]={payload:e,access:this.Kt},this.Xt()},e.Xt=function(){if(!(this.Wt<=this.Lt)){var t,e=this.Qt,n=this.Kt+1;for(var r in e){var o=e[r].access;o<n&&(n=o,t=r)}void 0!==t&&(delete e[t],this.Wt--)}},t}();function F(t){return"".concat(R,"/").concat("2301041800000","/vendor/").concat(t).concat(".js")}function z(t){var e;if(t.crypto&&t.crypto.getRandomValues){var n=new Uint32Array(2);t.crypto.getRandomValues(n),e=String(n[0])+n[1]}else e=String(t.Math.random()).substr(2)+"0";return e}new Set(["c","v","a","ad"]);var H=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],B={},C="sync-xhr 'none'",L=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),M=(0,t.forwardRef)((function(e,n){var r,o,i=e.allow,a=void 0===i?C:i,l=e.excludeSandbox,f=e.name,d=e.messageHandler,v=e.options,b=e.sandbox,m=void 0===b?L:b,y=e.src,p=e.type,h=e.title,w=void 0===h?p:h,g=s(e,H);if("number"!=typeof o&&(o=0),o+C.length>(r=a).length||-1===r.indexOf("sync-xhr 'none'",o))throw new Error("'allow' prop must contain \"".concat(C,'". Found "').concat(a,'".'));var j=(0,t.useRef)(null),S=(0,t.useRef)(null),O=(0,t.useMemo)((function(){var t;return B[p]||(B[p]=(t=0,function(){return String(++t)})),B[p]()}),[p]),x=c((0,t.useState)({name:f,src:y}),2),R=x[0],M=x[1],k=R.name,N=R.src,U=(0,t.useRef)(null);return(0,t.useLayoutEffect)((function(){var t,e,n,r,o,i,a,l=null===(t=j.current)||void 0===t||null===(e=t.ownerDocument)||void 0===e?void 0:e.defaultView,c=null!=y?y:l?(o=r||"frame",(n=l).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+z(n),"https://"+n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(A,"/").concat("2301041800000","/")+"".concat(o,".html")):"about:blank";if(f)M({name:f,src:c});else if(l){U.current||(U.current=function(t){for(var e=0,n=t;n&&n!=n.parent;n=n.parent)e++;return String(e)+"-"+z(t)}(l));var s=Object.assign({"location":{"href":l.location.href},"sentinel":U.current}),d=u({"title":w,"type":p,"_context":s},v);M({name:JSON.stringify({"host":(i=c,I||(I=self.document.createElement("a"),T=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P(100))),function(t,e,n){if(n&&n.has(e))return n.get(e);t.href=e,t.protocol||(t.href=t.href);var r,o={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=r;var i=o;return n&&n.put(e,i),i}(I,i,a?null:T)).hostname,"bootstrap":F(p),"type":p,"count":O,"attributes":d}),src:c})}}),[O,f,v,y,w,p]),(0,t.useEffect)((function(){var t,e=null===(t=S.current)||void 0===t?void 0:t.node;e&&e.parentNode.insertBefore(e,e.nextSibling)}),[k]),(0,t.useImperativeHandle)(n,(function(){return{get readyState(){var t;return null===(t=S.current)||void 0===t?void 0:t.readyState},get node(){var t;return null===(t=S.current)||void 0===t?void 0:t.node}}}),[]),(0,t.createElement)(E,u(u({},g),{},{allow:a,contentRef:j,messageHandler:d,name:k,ref:S,ready:!!k,sandbox:l?void 0:m,src:N,title:w}))}));M.displayName="ProxyIframeEmbed";var k=["embedCreated","embedLive","embedParent","embedType","requestResize","src","style","title","uuid"],N="100%",U=function(){return!0},q=(0,t.forwardRef)((function(e,n){var r=e.embedCreated,o=e.embedLive,i=e.embedParent,a=e.embedType,l=e.requestResize,f=e.src,d=e.style,v=e.title,b=void 0===v?"Reddit":v,m=e.uuid,y=s(e,k),p=c((0,t.useState)(N),2),w=p[0],g=p[1],j=(0,t.useCallback)((function(t){var e=h(t.data);if("embed-size"==e.type){var n=e.height;l?(l(n),g(N)):g(n)}}),[l]),S=(0,t.useMemo)((function(){return{embedCreated:r,embedLive:o,embedParent:i,embedType:a,requestResize:l,src:f,title:b,uuid:m}}),[r,o,i,a,l,f,b,m]);return(0,t.createElement)(M,u(u({ref:n,title:b},y),{},{options:S,type:"reddit",matchesMessagingOrigin:U,messageHandler:j,style:w?u(u({},d),{},{height:w}):d}))}));q.displayName="BentoReddit";var G=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(u,t);var r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=n(r);if(i){var a=n(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return o(this,t)});function u(){return a.apply(this,arguments)}return u}(t.PreactBaseElement);G.Component=q,G.props={"src":{attr:"data-src"},"embedType":{attr:"data-embedtype"},"uuid":{attr:"data-uuid"},"embedCreated":{attr:"data-embedcreated"},"embedParent":{attr:"data-embedparent"},"embedLive":{attr:"data-embedlive"},"title":{attr:"title"}},G.layoutSizeDefined=!0,G.usesShadowDom=!0,(0,t.defineBentoElement)("bento-reddit",G,undefined)}))}();
//# sourceMappingURL=bento-reddit-1.0.js.map