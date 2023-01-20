;
import{PreactBaseElement as e}from"../bento.mjs";function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var{hasOwnProperty:a,toString:i}=Object.prototype;import{createElement as l}from"../bento.mjs";import{useEffect as c,useRef as m,useState as s}from"../bento.mjs";import{forwardRef as u}from"../bento.mjs";import{createElement as f}from"../bento.mjs";import{useCallback as b,useEffect as d,useImperativeHandle as g,useLayoutEffect as j,useRef as p}from"../bento.mjs";import{forwardRef as O}from"../bento.mjs";import{ContainWrapper as y,useValueRef as w}from"../bento.mjs";import{useAmpContext as S,useLoading as h}from"../bento.mjs";var v=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],I=()=>!1,R=O((function(e,t){let{allow:r,allowFullScreen:a,iframeStyle:i,name:l,title:c,matchesMessagingOrigin:m=I,messageHandler:s,ready:u=!0,loading:O,onReadyState:R,sandbox:F,src:x}=e,E=o(e,v);const{playable:H}=S(),M=h(O),z="unload"!==M,N=p(!1),T=w(R),V=b((e=>{if(e!==N.current){N.current=e;const t=T.current;null==t||t(e?"complete":"loading")}}),[T]),$=p(null);return g(t,(()=>({get readyState(){return N.current?"complete":"loading"},get node(){return $.current}})),[]),j((()=>{z||V(!1)}),[z,V]),d((()=>{const e=$.current;if(!H&&e){const{src:t}=e;(e=>!(!e||"about:blank"==e||e.includes("#")))(t)?e.src=e.src:e.parentNode.insertBefore(e,e.nextSibling)}}),[H]),j((()=>{const e=$.current;if(!e||!z)return;const t=e=>{const t=$.current;t&&e.source==t.contentWindow&&m(e.origin)&&s(e)},{defaultView:r}=e.ownerDocument;return r.addEventListener("message",t),()=>r.removeEventListener("message",t)}),[m,s,z,u]),f(y,n(n({},E),{},{layout:!0,size:!0,paint:!0}),z&&u&&f("iframe",{allow:r,allowFullScreen:a,frameBorder:"0",loading:M,name:l,onLoad:()=>V(!0),part:"iframe",ref:$,sandbox:F,scrolling:"no",src:x,style:n(n({},i),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:c}))}));R.displayName="IframeEmbed";var F={info:console.info,warn:console.warn,error:console.error},x=["imgurId","title"],E=e=>"https://imgur.com"===e,H=u((function(e,t){let{imgurId:r,title:a="imgur post"}=e,u=o(e,x);const[f,b]=s("loading"),[d,g]=s({}),j=m(!1);c((()=>{if("loading"===f&&(j.current=!1),"complete"===f){const e=setTimeout((()=>{j.current||F.error("bento-imgur",`Failed to load.  Is "${r}" a correct id?`)}),500);return()=>clearTimeout(e)}}),[f,r]);const p=function(e){return`https://imgur.com/${function(e){return e.replace(/^(a\/)?(.*)/,((e,t,r)=>(t||"")+encodeURIComponent(r)))}(e)}/embed?pub=true`}(r);return l(R,n({ref:t,allowFullScreen:!0,onReadyState:b,title:a,src:p,matchesMessagingOrigin:E,messageHandler:e=>{j.current=!0;const t=function(e){return t=e.data,"[object Object]"===i.call(t)?e.data:function(e,t){try{return function(e){return JSON.parse(e)}(e)}catch(e){return null}}(e.data);var t}(e)||{};"resize_imgur"===t.message&&g({height:Number(t.height)})},wrapperStyle:d},u))}));H.displayName="Imgur";var M=class extends e{};M.Component=H,M.props={"imgurId":{attr:"data-imgur-id"}},M.layoutSizeDefined=!0,M.usesShadowDom=!0;import{defineBentoElement as z}from"../bento.mjs";z("bento-imgur",M,void 0);
//# sourceMappingURL=bento-imgur-1.0.mjs.map