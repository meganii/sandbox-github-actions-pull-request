;
import{PreactBaseElement as e}from"../bento.mjs";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var{isArray:o}=Array;function a(e,t){return t.toUpperCase()}var{hasOwnProperty:l,toString:i}=Object.prototype;function s(){let e=0;return()=>String(++e)}import{createElement as c}from"../bento.mjs";import{Slot as m,createSlot as u}from"../bento.mjs";function f(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(e){const t=Object.getOwnPropertyDescriptor(e,"message");if(null!=t&&t.writable)return e;const{message:n,stack:r}=e,o=new Error(n);for(const t in e)o[t]=e[t];return o.stack=r,o}function p(e){let t=null,n="";for(const e of arguments)e instanceof Error&&!t?t=d(e):(n&&(n+=" "),n+=e);return t?n&&(t.message=n+": "+t.message):t=new Error(n),t}function b(e){var t,n;null===(t=(n=self).__AMP_REPORT_ERROR)||void 0===t||t.call(n,e)}s();import{createElement as v}from"../bento.mjs";import{useCallback as g,useMemo as w,useState as y}from"../bento.mjs";import{forwardRef as j}from"../bento.mjs";import{useValueRef as S}from"../bento.mjs";import{createElement as O}from"../bento.mjs";import{useEffect as h,useImperativeHandle as E,useLayoutEffect as x,useMemo as R,useRef as H,useState as L}from"../bento.mjs";import{forwardRef as F}from"../bento.mjs";import{createElement as I}from"../bento.mjs";import{useCallback as $,useEffect as M,useImperativeHandle as N,useLayoutEffect as U,useRef as k}from"../bento.mjs";import{forwardRef as z}from"../bento.mjs";import{ContainWrapper as A,useValueRef as T}from"../bento.mjs";import{useAmpContext as P,useLoading as V}from"../bento.mjs";var q=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],B=()=>!1,G=z((function(e,t){let{allow:n,allowFullScreen:o,iframeStyle:a,name:l,title:i,matchesMessagingOrigin:s=B,messageHandler:c,ready:m=!0,loading:u,onReadyState:d,sandbox:p,src:b}=e,v=f(e,q);const{playable:g}=P(),w=V(u),y="unload"!==w,j=k(!1),S=T(d),O=$((e=>{if(e!==j.current){j.current=e;const t=S.current;null==t||t(e?"complete":"loading")}}),[S]),h=k(null);return N(t,(()=>({get readyState(){return j.current?"complete":"loading"},get node(){return h.current}})),[]),U((()=>{y||O(!1)}),[y,O]),M((()=>{const e=h.current;if(!g&&e){const{src:t}=e;(e=>!(!e||"about:blank"==e||e.includes("#")))(t)?e.src=e.src:e.parentNode.insertBefore(e,e.nextSibling)}}),[g]),U((()=>{const e=h.current;if(!e||!y)return;const t=e=>{const t=h.current;t&&e.source==t.contentWindow&&s(e.origin)&&c(e)},{defaultView:n}=e.ownerDocument;return n.addEventListener("message",t),()=>n.removeEventListener("message",t)}),[s,c,y,m]),I(A,r(r({},v),{},{layout:!0,size:!0,paint:!0}),y&&m&&I("iframe",{allow:n,allowFullScreen:o,frameBorder:"0",loading:w,name:l,onLoad:()=>O(!0),part:"iframe",ref:h,sandbox:p,scrolling:"no",src:b,style:r(r({},a),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:i}))}));G.displayName="IframeEmbed";var J,C=e=>self.AMP_CONFIG?self.AMP_CONFIG[e]:null,_=C("thirdPartyUrl")||"https://3p.ampproject.net",D=C("thirdPartyFrameHost")||"ampproject.net";function K(e){return`${_}/2301041800000/vendor/${e}.mjs`}function Q(e){let t;if(e.crypto&&e.crypto.getRandomValues){const n=new Uint32Array(2);e.crypto.getRandomValues(n),t=String(n[0])+n[1]}else t=String(e.Math.random()).substr(2)+"0";return t}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]);var W=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],X={},Y="sync-xhr 'none'",Z=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),ee=F((function(e,t){let{allow:n=Y,excludeSandbox:o,name:a,messageHandler:l,options:i,sandbox:c=Z,src:m,type:u,title:d=u}=e,p=f(e,W);if(b=n,"number"!=typeof g&&(g=0),g+(v=Y).length>b.length||-1===b.indexOf(v,g))throw new Error(`'allow' prop must contain "${Y}". Found "${n}".`);var b,v,g;const w=H(null),y=H(null),j=R((()=>(X[u]||(X[u]=s()),X[u]())),[u]),[S,F]=L({name:a,src:m}),{name:I,src:$}=S,M=H(null);return x((()=>{var e,t;const n=null===(e=w.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView,o=null!=m?m:n?((l=n).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=l.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+Q(l),"https://"+l.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${D}/2301041800000/frame.html`):"about:blank";var l;if(a)return void F({name:a,src:o});if(!n)return;M.current||(M.current=function(e){let t=0;for(let n=e;n&&n!=n.parent;n=n.parent)t++;return String(t)+"-"+Q(e)}(n));const s=Object.assign({"location":{"href":n.location.href},"sentinel":M.current}),c=r({"title":d,"type":u,"_context":s},i);var f;F({name:JSON.stringify({"host":(f=o,J||(J=self.document.createElement("a")),function(e,t,n){return e.href="",new URL(t,e.href)}(J,f)).hostname,"bootstrap":K(u),"type":u,"count":j,"attributes":c}),src:o})}),[j,a,i,m,d,u]),h((()=>{var e;const t=null===(e=y.current)||void 0===e?void 0:e.node;t&&t.parentNode.insertBefore(t,t.nextSibling)}),[I]),E(t,(()=>({get readyState(){var e;return null===(e=y.current)||void 0===e?void 0:e.readyState},get node(){var e;return null===(e=y.current)||void 0===e?void 0:e.node}})),[]),O(G,r(r({},p),{},{allow:n,contentRef:w,messageHandler:l,name:I,ref:y,ready:!!I,sandbox:o?void 0:c,src:$,title:d}))}));ee.displayName="ProxyIframeEmbed";var te=["cards","conversation","limit","momentid","onError","onLoad","options","requestResize","style","timelineScreenName","timelineSourceType","timelineUserId","title","tweetLimit","tweetid"],ne=()=>!0,re=j((function(e,t){let{cards:n,conversation:o,limit:a,momentid:l,onError:i,onLoad:s,options:c,requestResize:m,style:u,timelineScreenName:d,timelineSourceType:j,timelineUserId:O,title:h,tweetLimit:E,tweetid:x}=e,R=f(e,te);const[H,L]=y(null),F=S(s),I=S(i),$=g((e=>{const t=function(e){if(!function(e){return"string"==typeof e&&e.startsWith("amp-")&&-1!=e.indexOf("{")}(e))return null;const t=e.indexOf("{");return function(e,t){try{return function(e){return JSON.parse(e)}(e)}catch(e){return null==t||t(e),null}}(e.substr(t),(t=>{!function(e){const t=p.apply(null,arguments);setTimeout((()=>{throw b(t),t}))}(new Error(`MESSAGING: Failed to parse message: ${e}\n${t.message}`))}))}(e.data);if("embed-size"==t.type){var n;const e=t.height;m?(m(e),L("100%")):L(e),null===(n=F.current)||void 0===n||n.call(F)}else if("no-content"===t.type){var r;null===(r=I.current)||void 0===r||r.call(I)}}),[m,F,I]),M=w((()=>r({cards:n,conversation:o,limit:a,momentid:l,timelineScreenName:d,timelineSourceType:j,timelineUserId:O,tweetLimit:E,tweetid:x},c)),[n,o,a,l,c,d,j,O,E,x]);return v(ee,r(r({allowfullscreen:!0,ref:t,title:h},R),{},{matchesMessagingOrigin:ne,messageHandler:$,options:M,type:"twitter",style:H?r(r({},u),{},{height:H}):u}))}));re.displayName="BentoTwitter";var oe=class extends e{};oe.Component=re,oe.props={"title":{attr:"title"},"loading":{attr:"data-loading"},"options":function(e){const t=t=>(null==t?void 0:t.startsWith(e))&&t!==e;return{"attrMatches":t,"parseAttrs":n=>{let r;const o=n.attributes;for(let n=0;n<o.length;n++){const i=o[n];t(i.name)&&(r||(r={}),r[(l=i.name.slice(e.length),l.replace(/-([a-z])/g,a))]=i.value)}var l;return r}}}("data-")},oe.layoutSizeDefined=!0,oe.usesShadowDom=!0,oe.loadable=!0;import{defineBentoElement as ae}from"../bento.mjs";ae("bento-twitter",oe,void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-twitter-1.0.mjs.map