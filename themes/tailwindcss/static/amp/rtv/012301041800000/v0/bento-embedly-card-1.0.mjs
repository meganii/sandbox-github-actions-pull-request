;
import{defineBentoElement as e}from"../bento.mjs";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}import{createElement as o}from"../bento.mjs";import{PreactBaseElement as a}from"../bento.mjs";function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var{isArray:s}=Array,{hasOwnProperty:i,toString:u}=Object.prototype;function c(e){const t=Object.getOwnPropertyDescriptor(e,"message");if(null!=t&&t.writable)return e;const{message:n,stack:r}=e,o=new Error(n);for(const t in e)o[t]=e[t];return o.stack=r,o}function m(e){let t=null,n="";for(const e of arguments)e instanceof Error&&!t?t=c(e):(n&&(n+=" "),n+=e);return t?n&&(t.message=n+": "+t.message):t=new Error(n),t}function f(e){var t,n;null===(t=(n=self).__AMP_REPORT_ERROR)||void 0===t||t.call(n,e)}import{createElement as d}from"../bento.mjs";import{useCallback as b,useContext as p,useState as v}from"../bento.mjs";import{forwardRef as y}from"../bento.mjs";import{useValueRef as g}from"../bento.mjs";import{createElement as j}from"../bento.mjs";import{useEffect as w,useImperativeHandle as S,useLayoutEffect as O,useMemo as h,useRef as E,useState as x}from"../bento.mjs";import{forwardRef as R}from"../bento.mjs";import{createElement as H}from"../bento.mjs";import{useCallback as k,useEffect as F,useImperativeHandle as $,useLayoutEffect as L,useRef as P}from"../bento.mjs";import{forwardRef as z}from"../bento.mjs";import{ContainWrapper as A,useValueRef as B}from"../bento.mjs";import{useAmpContext as I,useLoading as q}from"../bento.mjs";var C=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],M=()=>!1,N=z((function(e,t){let{allow:n,allowFullScreen:o,iframeStyle:a,name:s,title:i,matchesMessagingOrigin:u=M,messageHandler:c,ready:m=!0,loading:f,onReadyState:d,sandbox:b,src:p}=e,v=l(e,C);const{playable:y}=I(),g=q(f),j="unload"!==g,w=P(!1),S=B(d),O=k((e=>{if(e!==w.current){w.current=e;const t=S.current;null==t||t(e?"complete":"loading")}}),[S]),h=P(null);return $(t,(()=>({get readyState(){return w.current?"complete":"loading"},get node(){return h.current}})),[]),L((()=>{j||O(!1)}),[j,O]),F((()=>{const e=h.current;if(!y&&e){const{src:t}=e;(e=>!(!e||"about:blank"==e||e.includes("#")))(t)?e.src=e.src:e.parentNode.insertBefore(e,e.nextSibling)}}),[y]),L((()=>{const e=h.current;if(!e||!j)return;const t=e=>{const t=h.current;t&&e.source==t.contentWindow&&u(e.origin)&&c(e)},{defaultView:n}=e.ownerDocument;return n.addEventListener("message",t),()=>n.removeEventListener("message",t)}),[u,c,j,m]),H(A,r(r({},v),{},{layout:!0,size:!0,paint:!0}),j&&m&&H("iframe",{allow:n,allowFullScreen:o,frameBorder:"0",loading:g,name:s,onLoad:()=>O(!0),part:"iframe",ref:h,sandbox:b,scrolling:"no",src:p,style:r(r({},a),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:i}))}));N.displayName="IframeEmbed";var U,V=e=>self.AMP_CONFIG?self.AMP_CONFIG[e]:null,G=V("thirdPartyUrl")||"https://3p.ampproject.net",J=V("thirdPartyFrameHost")||"ampproject.net";function K(e){return`${G}/2301041800000/vendor/${e}.mjs`}function T(e){let t;if(e.crypto&&e.crypto.getRandomValues){const n=new Uint32Array(2);e.crypto.getRandomValues(n),t=String(n[0])+n[1]}else t=String(e.Math.random()).substr(2)+"0";return t}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]);var _=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],D={},Q="sync-xhr 'none'",W=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),X=R((function(e,t){let{allow:n=Q,excludeSandbox:o,name:a,messageHandler:s,options:i,sandbox:u=W,src:c,type:m,title:f=m}=e,d=l(e,_);if(b=n,"number"!=typeof v&&(v=0),v+(p=Q).length>b.length||-1===b.indexOf(p,v))throw new Error(`'allow' prop must contain "${Q}". Found "${n}".`);var b,p,v;const y=E(null),g=E(null),R=h((()=>(D[m]||(D[m]=function(){let e=0;return()=>String(++e)}()),D[m]())),[m]),[H,k]=x({name:a,src:c}),{name:F,src:$}=H,L=E(null);return O((()=>{var e,t;const n=null===(e=y.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView,o=null!=c?c:n?((l=n).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=l.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+T(l),"https://"+l.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${J}/2301041800000/frame.html`):"about:blank";var l;if(a)return void k({name:a,src:o});if(!n)return;L.current||(L.current=function(e){let t=0;for(let n=e;n&&n!=n.parent;n=n.parent)t++;return String(t)+"-"+T(e)}(n));const s=Object.assign({"location":{"href":n.location.href},"sentinel":L.current}),u=r({"title":f,"type":m,"_context":s},i);var d;k({name:JSON.stringify({"host":(d=o,U||(U=self.document.createElement("a")),function(e,t,n){return e.href="",new URL(t,e.href)}(U,d)).hostname,"bootstrap":K(m),"type":m,"count":R,"attributes":u}),src:o})}),[R,a,i,c,f,m]),w((()=>{var e;const t=null===(e=g.current)||void 0===e?void 0:e.node;t&&t.parentNode.insertBefore(t,t.nextSibling)}),[F]),S(t,(()=>({get readyState(){var e;return null===(e=g.current)||void 0===e?void 0:e.readyState},get node(){var e;return null===(e=g.current)||void 0===e?void 0:e.node}})),[]),j(N,r(r({},d),{},{allow:n,contentRef:y,messageHandler:s,name:F,ref:g,ready:!!F,sandbox:o?void 0:u,src:$,title:f}))}));X.displayName="ProxyIframeEmbed";import{createContext as Y}from"../bento.mjs";var Z=Y({apiKey:""}),ee=["onLoad","requestResize","style","title","url"],te=y((function(e,t){let{onLoad:n,requestResize:o,style:a,title:s,url:i}=e,u=l(e,ee);const[c,y]=v(null),j=g(n),w=b((e=>{const t=function(e){if(!function(e){return"string"==typeof e&&e.startsWith("amp-")&&-1!=e.indexOf("{")}(e))return null;const t=e.indexOf("{");return function(e,t){try{return function(e){return JSON.parse(e)}(e)}catch(e){return null==t||t(e),null}}(e.substr(t),(t=>{!function(e){const t=m.apply(null,arguments);setTimeout((()=>{throw f(t),t}))}(new Error(`MESSAGING: Failed to parse message: ${e}\n${t.message}`))}))}(e.data);if("embed-size"==t.type){var n;const e=t.height;o?(o(e),y("100%")):y(e),null===(n=j.current)||void 0===n||n.call(j)}}),[o,j]),{apiKey:S}=p(Z);(function(e){return!!e})(i)||console.warn("url prop is required for BentoEmbedlyCard");const O={url:i};return S&&(O["data-card-key"]=S),d(X,r(r({options:O,ref:t,title:s||"Embedly card",type:"embedly"},u),{},{messageHandler:w,style:c?r(r({},a),{},{height:c}):a}))}));te.displayName="BentoEmbedlyCard";var ne=class extends a{};ne.Component=function(e){const t=document.querySelector("amp-embedly-key"),n=(null==t?void 0:t.getAttribute("value"))||"";return o(Z.Provider,{value:n},o(te,r({},e)))},ne.props={"title":{attr:"title"},"url":{attr:"data-url"}},ne.layoutSizeDefined=!0,ne.usesShadowDom=!0;import{PreactBaseElement as re}from"../bento.mjs";e("bento-embedly-card",ne,void 0),e("bento-embedly-key",class extends re{},void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-embedly-card-1.0.mjs.map