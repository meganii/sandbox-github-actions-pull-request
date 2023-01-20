;
function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var{isArray:o}=Array,{hasOwnProperty:a,toString:l}=Object.prototype;function s(e){const t=Object.getOwnPropertyDescriptor(e,"message");if(null!=t&&t.writable)return e;const{message:r,stack:n}=e,o=new Error(r);for(const t in e)o[t]=e[t];return o.stack=n,o}function i(e){let t=null,r="";for(const e of arguments)e instanceof Error&&!t?t=s(e):(r&&(r+=" "),r+=e);return t?r&&(t.message=r+": "+t.message):t=new Error(r),t}function u(e){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,e)}import{createElement as m}from"../bento.mjs";import{useCallback as c,useMemo as d,useState as f}from"../bento.mjs";import{forwardRef as b}from"../bento.mjs";import{createElement as p}from"../bento.mjs";import{useEffect as v,useImperativeHandle as g,useLayoutEffect as y,useMemo as w,useRef as j,useState as O}from"../bento.mjs";import{forwardRef as S}from"../bento.mjs";import{createElement as h}from"../bento.mjs";import{useCallback as x,useEffect as E,useImperativeHandle as R,useLayoutEffect as H,useRef as P}from"../bento.mjs";import{forwardRef as F}from"../bento.mjs";import{ContainWrapper as L,useValueRef as $}from"../bento.mjs";import{useAmpContext as k,useLoading as z}from"../bento.mjs";var C=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],M=()=>!1,T=F((function(e,t){let{allow:o,allowFullScreen:a,iframeStyle:l,name:s,title:i,matchesMessagingOrigin:u=M,messageHandler:m,ready:c=!0,loading:d,onReadyState:f,sandbox:b,src:p}=e,v=n(e,C);const{playable:g}=k(),y=z(d),w="unload"!==y,j=P(!1),O=$(f),S=x((e=>{if(e!==j.current){j.current=e;const t=O.current;null==t||t(e?"complete":"loading")}}),[O]),F=P(null);return R(t,(()=>({get readyState(){return j.current?"complete":"loading"},get node(){return F.current}})),[]),H((()=>{w||S(!1)}),[w,S]),E((()=>{const e=F.current;if(!g&&e){const{src:t}=e;(e=>!(!e||"about:blank"==e||e.includes("#")))(t)?e.src=e.src:e.parentNode.insertBefore(e,e.nextSibling)}}),[g]),H((()=>{const e=F.current;if(!e||!w)return;const t=e=>{const t=F.current;t&&e.source==t.contentWindow&&u(e.origin)&&m(e)},{defaultView:r}=e.ownerDocument;return r.addEventListener("message",t),()=>r.removeEventListener("message",t)}),[u,m,w,c]),h(L,r(r({},v),{},{layout:!0,size:!0,paint:!0}),w&&c&&h("iframe",{allow:o,allowFullScreen:a,frameBorder:"0",loading:y,name:s,onLoad:()=>S(!0),part:"iframe",ref:F,sandbox:b,scrolling:"no",src:p,style:r(r({},l),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:i}))}));T.displayName="IframeEmbed";var A,I=e=>self.AMP_CONFIG?self.AMP_CONFIG[e]:null,q=I("thirdPartyUrl")||"https://3p.ampproject.net",N=I("thirdPartyFrameHost")||"ampproject.net";function U(e){return`${q}/2301041800000/vendor/${e}.mjs`}function B(e){let t;if(e.crypto&&e.crypto.getRandomValues){const r=new Uint32Array(2);e.crypto.getRandomValues(r),t=String(r[0])+r[1]}else t=String(e.Math.random()).substr(2)+"0";return t}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]);var G=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],J={},V="sync-xhr 'none'",_=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),D=S((function(e,t){let{allow:o=V,excludeSandbox:a,name:l,messageHandler:s,options:i,sandbox:u=_,src:m,type:c,title:d=c}=e,f=n(e,G);if(b=o,"number"!=typeof h&&(h=0),h+(S=V).length>b.length||-1===b.indexOf(S,h))throw new Error(`'allow' prop must contain "${V}". Found "${o}".`);var b,S,h;const x=j(null),E=j(null),R=w((()=>(J[c]||(J[c]=function(){let e=0;return()=>String(++e)}()),J[c]())),[c]),[H,P]=O({name:l,src:m}),{name:F,src:L}=H,$=j(null);return y((()=>{var e,t;const n=null===(e=x.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView,o=null!=m?m:n?((a=n).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+B(a),"https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${N}/2301041800000/frame.html`):"about:blank";var a;if(l)return void P({name:l,src:o});if(!n)return;$.current||($.current=function(e){let t=0;for(let r=e;r&&r!=r.parent;r=r.parent)t++;return String(t)+"-"+B(e)}(n));const s=Object.assign({"location":{"href":n.location.href},"sentinel":$.current}),u=r({"title":d,"type":c,"_context":s},i);var f;P({name:JSON.stringify({"host":(f=o,A||(A=self.document.createElement("a")),function(e,t,r){return e.href="",new URL(t,e.href)}(A,f)).hostname,"bootstrap":U(c),"type":c,"count":R,"attributes":u}),src:o})}),[R,l,i,m,d,c]),v((()=>{var e;const t=null===(e=E.current)||void 0===e?void 0:e.node;t&&t.parentNode.insertBefore(t,t.nextSibling)}),[F]),g(t,(()=>({get readyState(){var e;return null===(e=E.current)||void 0===e?void 0:e.readyState},get node(){var e;return null===(e=E.current)||void 0===e?void 0:e.node}})),[]),p(T,r(r({},f),{},{allow:o,contentRef:x,messageHandler:s,name:F,ref:E,ready:!!F,sandbox:a?void 0:u,src:L,title:d}))}));D.displayName="ProxyIframeEmbed";var K=["embedCreated","embedLive","embedParent","embedType","requestResize","src","style","title","uuid"],Q=()=>!0,W=b((function(e,t){let{embedCreated:o,embedLive:a,embedParent:l,embedType:s,requestResize:b,src:p,style:v,title:g="Reddit",uuid:y}=e,w=n(e,K);const[j,O]=f("100%"),S=c((e=>{const t=function(e){if(!function(e){return"string"==typeof e&&e.startsWith("amp-")&&-1!=e.indexOf("{")}(e))return null;const t=e.indexOf("{");return function(e,t){try{return function(e){return JSON.parse(e)}(e)}catch(e){return null==t||t(e),null}}(e.substr(t),(t=>{!function(e){const t=i.apply(null,arguments);setTimeout((()=>{throw u(t),t}))}(new Error(`MESSAGING: Failed to parse message: ${e}\n${t.message}`))}))}(e.data);if("embed-size"==t.type){const e=t.height;b?(b(e),O("100%")):O(e)}}),[b]),h=d((()=>({embedCreated:o,embedLive:a,embedParent:l,embedType:s,requestResize:b,src:p,title:g,uuid:y})),[o,a,l,s,b,p,g,y]);return m(D,r(r({ref:t,title:g},w),{},{options:h,type:"reddit",matchesMessagingOrigin:Q,messageHandler:S,style:j?r(r({},v),{},{height:j}):v}))}));W.displayName="BentoReddit";import{PreactBaseElement as X}from"../bento.mjs";var Y=class extends X{};Y.Component=W,Y.props={"src":{attr:"data-src"},"embedType":{attr:"data-embedtype"},"uuid":{attr:"data-uuid"},"embedCreated":{attr:"data-embedcreated"},"embedParent":{attr:"data-embedparent"},"embedLive":{attr:"data-embedlive"},"title":{attr:"title"}},Y.layoutSizeDefined=!0,Y.usesShadowDom=!0;import{defineBentoElement as Z}from"../bento.mjs";Z("bento-reddit",Y,void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-reddit-1.0.mjs.map