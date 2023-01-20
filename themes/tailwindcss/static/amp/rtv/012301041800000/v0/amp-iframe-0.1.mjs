;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-iframe",ev:"0.1",l:!0,f:function(t,n){(()=>{function n(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function e(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function i(t){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?e(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))}))}return t}var s;function r(){return s||(s=Promise.resolve(void 0))}var{isArray:o}=Array;function u(t,n){const e=[];let i=0;for(let s=0;s<t.length;s++){const r=t[s];n(r,s,t)?e.push(r):(i<s&&(t[i]=r),i++)}return i<t.length&&(t.length=i),e}function c(t,n){const e=t.length-n.length;return e>=0&&t.indexOf(n,e)==e}var a,l,{hasOwnProperty:h,toString:f}=Object.prototype;function d(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function m(t,n,e,i,s,r,o,u,c,a,l){return t}function p(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,s=new Error(e);for(const n in t)s[n]=t[n];return s.stack=i,s}function g(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=p(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function v(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function b(t){const n=g.apply(null,arguments);setTimeout((()=>{throw v(n),n}))}function w(t,...n){try{return t.apply(null,n)}catch(t){b(t)}}function y(t){return JSON.parse(t)}function P(t,n){try{return y(t)}catch(t){return null==n||n(t),null}}function _(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function A(t){return(t.ownerDocument||t).defaultView}function I(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function M(t,n,e,i){const s=o(r=t)?r:[r];var r;for(const t of s){const s=n.getAttribute(t);null!==s?e.setAttribute(t,s):i&&e.removeAttribute(t)}}var O=["Webkit","webkit","Moz","moz","ms","O","o"],T={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function S(t,n,e,i,s){const r=function(t,n,e){if(n.startsWith("--"))return n;l||(l=d());let i=l[n];if(!i||e){if(i=n,void 0===t[n]){const e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),s=function(t,n){for(let e=0;e<O.length;e++){const i=O[e]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[s]&&(i=s)}e||(l[n]=i)}return i}(t.style,n,s);if(!r)return;const o=i?e+i:e;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return O.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(r),o)}function E(t,n){return t.getComputedStyle(n)||T}var j=/vertical/,x=new WeakMap,R=new WeakMap,k=new WeakMap;function z(t){let n=x.get(t);return n||(n=new t.ResizeObserver(C),x.set(t,n)),n}function C(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const i=t[e],{target:s}=i;if(n.has(s))continue;n.add(s);const r=R.get(s);if(r){k.set(s,i);for(let t=0;t<r.length;t++){const{callback:n,type:e}=r[t];V(e,n,i)}}}}function V(t,n,e){if(0==t){const{contentRect:t}=e,{height:i,width:s}=t;w(n,{width:s,height:i})}else if(1==t){const{borderBoxSize:t}=e;let i;if(t)i=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=e,n=A(t),s=j.test(E(n,t).writingMode),{offsetHeight:r,offsetWidth:o}=t;let u,c;s?(c=o,u=r):(u=o,c=r),i={inlineSize:u,blockSize:c}}w(n,i)}}var L=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function N(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;function D(t){return G.user||(G.user=F()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(G.user.win,t)?G.userForEmbed||(G.userForEmbed=F()):G.user}function F(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function W(t,n,e,i,s,r,o,u,c,a,l){return t}function $(t,n,e,i,s,r,o,u,c,a,l){return D().assert(t,n,e,i,s,r,o,u,c,a,l)}function q(t,n){return J(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function B(t,n){const e=H(Y(t));return Z(e,n)?J(e,n):null}function U(t,n){return X(H(t),n)}function Y(t){return t.nodeType?(n=A(t),q(n,"ampdoc")).getAmpDoc(t):t;var n}function H(t){const n=Y(t);return n.isSingleDoc()?n.win:n}function J(t,n){W(Z(t,n));const e=K(t)[n];return e.obj||(W(e.ctor),W(e.context),e.obj=new e.ctor(e.context),W(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function X(t,n){const e=K(t)[n];return e?e.promise?e.promise:(J(t,n),e.promise=Promise.resolve(e.obj)):null}function K(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function Z(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}var Q,tt="__AMP__EXPERIMENT_TOGGLES",nt=t=>J(t,"timer"),et=t=>function(t,n,e,i){const s=U(t,n);if(s)return s;const r=Y(t);return r.whenExtensionsKnown().then((()=>{const t=r.getExtensionVersion(e);return t?q(r.win,"extensions").waitForExtension(e,t):null})).then((e=>e?function(t,n){return function(t,n){const e=X(t,n);if(e)return e;const i=K(t);return i[n]=function(){const t=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{promise:n,reject:e,resolve:i}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:i,reject:e,context:null,ctor:null}}(),i[n].promise}(H(t),n)}(t,n):null))}(t,"consentPolicyManager","amp-consent"),it=t=>B(t,"url");function st(t){return t.data}new Set(["c","v","a","ad"]);var rt="unlisten";function ot(t,n,e){const i=function(t,n){let{listeningFors:e}=t;return!e&&n&&(e=t.listeningFors=Object.create(null)),e||null}(t,e);if(!i)return i;let s=i[n];return!s&&e&&(s=i[n]=[]),s||null}function ut(t,n){for(let e=n;e&&e!=e.parent;e=e.parent)if(e==t)return!0;return!1}function ct(t){const n={"sentinel":rt};for(let e=t.length-1;e>=0;e--){const i=t[e];if(!i.frame.contentWindow){t.splice(e,1);const{events:s}=i;for(const t in s)s[t].splice(0,1/0).forEach((t=>{t(n)}))}}}function at(t,n,e,i,s,r){W(t.src),W(!t.parentNode),W(e);const o=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(!st(n))return;const e=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?P(t,(t=>{}))||null:_(t)?function(t){if(!_(t))return null;const n=t.indexOf("{");return m(-1!=n),P(t.substr(n),(n=>{b(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(t):null),t}(st(n));if(!e||!e.sentinel)return;const i=function(t,n,e,i){const s=ot(t,n);if(!s)return s;let r;for(let t=0;t<s.length;t++){const n=s[t],{contentWindow:e}=n.frame;if(e){if(i==e||ut(e,i)){r=n;break}}else setTimeout(ct,0,s)}return r?r.events:null}(t,e.sentinel,n.origin,n.source);if(!i)return;let s=i[e.type];if(s){s=s.slice();for(let t=0;t<s.length;t++)(0,s[t])(e,n.source,n.origin,n)}}))}(o);const u=function(t,n,e){const i=ot(t,lt(n,e),!0);let s;for(let t=0;t<i.length;t++){const e=i[t];if(e.frame===n){s=e;break}}return s||(s={frame:n,events:Object.create(null)},i.push(s)),s.events}(o,t,i),c=(a=t.src,Q||(Q=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(Q,a)).origin;var a;let l,h=u[n]||(u[n]=[]),f=function(n,i,o,u){if("amp"==n.sentinel){if(i!=t.contentWindow)return;const n="null"==o&&r;if(c!=o&&!n)return}(s||i==t.contentWindow)&&(n.sentinel!=rt?e(n,i,o,u):l())};return h.push(f),l=function(){if(f){const t=h.indexOf(f);t>-1&&h.splice(t,1),f=null,h=null,e=null}}}function lt(t,n){return n?t.getAttribute("data-amp-3p-sentinel"):"amp"}var ht=[[300,250],[320,50],[300,50],[320,100]],ft=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];function dt(t){return{"time":t.time,"rootBounds":t.rootBounds,"boundingClientRect":t.boundingClientRect,"intersectionRect":t.intersectionRect,"intersectionRatio":t.intersectionRatio}}Date.now();var mt={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};function pt(t,n){const{position:e}=E(n,t);return"fixed"==e||"sticky"==e}var gt=(()=>self.AMP.config.urls)(),vt="amp-iframe",bt=["allowfullscreen","allowpaymentrequest","allowtransparency","allow","frameborder","referrerpolicy","scrolling","tabindex","title"],wt=0,yt=class extends t.BaseElement{constructor(t){super(t),this.Tv=null,this.Sv=!1,this.xv=!1,this.zv=!1,this.Cv=!1,this.Lv=null,this.Nv=!1,this.Gv=null,this.Dv="",this.Fv=null,this.iframeSrc=null,this.fn=null,this.Wv=null,this.$v=!1,this.bn=new class{constructor(t){this._n=t,this.gn=!1,this.Pn=!1,this.An=this.An.bind(this)}updatePlaying(t){t!==this.gn&&(this.gn=t,t?(this.Pn=!1,function(t,n){!function(t,n,e){const i=t.ownerDocument.defaultView;if(!i)return;let s=R.get(t);if(s||(s=[],R.set(t,s),z(i).observe(t)),!s.some((t=>t.callback===e&&1===t.type))){s.push({type:1,callback:e});const n=k.get(t);n&&setTimeout((()=>V(1,e,n)))}}(t,0,n)}(this._n,this.An)):function(t,n){!function(t,n,e){const i=R.get(t);if(i&&(u(i,(t=>t.callback===e&&1===t.type)),0==i.length)){R.delete(t),k.delete(t);const n=t.ownerDocument.defaultView;n&&z(n).unobserve(t)}}(t,0,n)}(this._n,this.An))}An({blockSize:t,inlineSize:n}){const e=n>0&&t>0;if(e===this.Pn)return;this.Pn=e;const i=this._n;e||i.pause()}}(this.element)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}Je(t,n,e=""){const{element:i}=this,s=it(i),r=s.parse(t),{hostname:o,origin:u,protocol:a}=r;$(s.isSecure(t)||"data:"==a,"Invalid <amp-iframe> src. Must start with https://. Found %s",i);const l=s.parse(n);return $(!this.qv(e,"allow-same-origin")||u!=l.origin&&"data:"!=a,"Origin of <amp-iframe> must not be equal to container %s if allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",i),$(!(c(o,`.${gt.thirdPartyFrameHost}`)||c(o,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",t),t}Bv(){const t=this.element.getLayoutBox(),n=Math.min(600,.75*this.getViewport().getSize().height);$(t.top>=n,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/main/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",this.element,t.top,n)}qv(t,n){return new RegExp(`\\s${n}\\s`,"i").test(" "+t+" ")}Uv(t){if(!t)return;const{hash:n,protocol:e}=it(this.element).parse(t);return"data:"==e||n&&"#"!=n?t:function(t){const n=t.indexOf("#");return-1==n?t:t.substring(0,n)}(t)+"#amp=1"}Yv(t,n){if(t)return $(!(" "+n+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element),"data:text/html;charset=utf-8;base64,"+(i=t,e="undefined"!=typeof TextEncoder?(new TextEncoder).encode(i):function(t){const n=new Uint8Array(t.length);for(let e=0;e<t.length;e++){const i=t.charCodeAt(e);m(i<=255),n[e]=i}return n}(unescape(encodeURIComponent(i))),btoa(function(t){const n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=String.fromCharCode(t[e]);return n.join("")}(e)));var e,i}preconnectCallback(t){var n;this.iframeSrc&&(n=this.win,q(n,"preconnect")).url(this.getAmpDoc(),this.iframeSrc,t)}buildCallback(){this.Dv=this.element.getAttribute("sandbox");const t=this.Uv(this.element.getAttribute("src"))||this.Yv(this.element.getAttribute("srcdoc"),this.Dv);this.iframeSrc=this.Je(t,window.location.href,this.Dv),this.Tv=this.getPlaceholder(),this.Sv=!!this.Tv,this.Nv=this.element.hasAttribute("resizable"),this.Nv&&this.element.setAttribute("scrolling","no"),this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0"),this.fn=function(t){if("no"!=t.getAttribute("scrolling")){const n=t.ownerDocument.createElement("i-amphtml-scroll-container");return t.appendChild(n),n}return t}(this.element),this.Hv()}onLayoutMeasure(){const{element:t}=this;this.xv=function(t){const{height:n,width:e}=t.getLayoutSize();for(let t=0;t<ht.length;t++){const i=ht[t][0],s=ht[t][1];if(!(s>n)&&!(i>e)&&n-s<=20&&e-i<=20)return!0}return!1}(t),this.zv=this.Jv(),this.Cv=this.xv&&!function(t,n){let e=!1,i=0,s=t;do{mt[s.tagName]?(i++,e=!1):pt(s,n)&&(e=!0),s=s.parentElement}while(s&&"BODY"!=s.tagName);return!e&&i<=1}(t,this.win)}Jv(){return function(t){const{height:n,width:e}=t.getLayoutSize();return!(e>10||n>10||function(t,n){return t.closest(".i-amphtml-overlay")}(t))}(this.element)}layoutCallback(){if($(!this.Cv,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead."),this.Sv||this.Bv(),this.Nv&&$(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element),!this.iframeSrc)return r();if(this.zv&&!this.getAmpDoc().registerSingleton(1))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new/choose"),r();const t=this.element.ownerDocument.createElement("iframe");this.Lv=t,t.classList.add("i-amphtml-fill-content"),t.name="amp_iframe"+wt++,this.Sv&&S(t,"zIndex",-1),M(bt,this.element,t);let n=t.getAttribute("allow")||"";return n=n.replace("autoplay","autoplay-disabled"),t.setAttribute("allow",n),function(t,n,e){const i=e||"";n.setAttribute("sandbox",i)}(this.element,t,this.Dv),t.src=this.iframeSrc,this.zv||(this.Gv=new class{constructor(t,n){this.Xv=t,this.Kv=null,this.Zv=new class{constructor(t,n,e,i){this.Lv=t,this.Qv=e,this.tb=[],this.nb=at(this.Lv,n,((t,n,e)=>{this.tb.some((t=>t.win==n))||this.tb.push({win:n,origin:e}),i(t,n,e)}),this.Qv,this.Qv)}send(t,n){u(this.tb,(t=>!t.win.parent)),function(t,n,e,i,s){if(!t.contentWindow)return;i.type=e,i.sentinel=lt(t,s);let r=i;s&&(r="amp-"+JSON.stringify(i));for(let t=0;t<n.length;t++){const e=n[t];e.win.postMessage(r,e.origin)}}(this.Lv,this.tb,t,n,this.Qv)}destroy(){this.nb(),this.tb.length=0}}(n,"send-intersections",!1,(()=>{this.eb()})),this.Kv=new IntersectionObserver((t=>{this.Zv.send("intersection",{"changes":t.map(dt)})}),{threshold:ft})}eb(){this.Kv.observe(this.Xv.element)}destroy(){this.Kv.disconnect(),this.Kv=null,this.Zv.destroy(),this.Zv=null}}(this,t)),t.onload=()=>{t.readyState="complete",this.ib(),this.zv&&(this.iframeSrc=null,nt(this.win).promise(5e3).then((()=>{I(t),this.element.setAttribute("amp-removed",""),this.Lv=null})))},at(t,"embed-size",(t=>{this.sb(t.height,t.width)}),void 0,void 0,!0),this.Fv=function(t,n,e,i){let s=t,r=e,o=t=>{try{return r(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}};const u=function(){if(void 0!==a)return a;a=!1;try{const t={get capture(){return a=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return a}();return s.addEventListener(n,o,!!u&&i),()=>{null==s||s.removeEventListener(n,o,!!u&&i),r=null,s=null,o=null}}(this.win,"message",(t=>this.rb(t)),void 0),this.Sv&&at(t,"embed-ready",this.ib.bind(this)),at(t,"send-consent-data",((t,n,e)=>{this.ob(n,e)})),this.fn.appendChild(t),this.loadPromise(t).then((()=>{this.fn!=this.element&&nt(this.win).delay((()=>{this.mutateElement((()=>{this.fn.classList.add("amp-active")}))}),1e3),this.bn.updatePlaying(!0)}))}rb(t){if(!this.Lv||t.source!==this.Lv.contentWindow)return;const n=st(t);if("string"!=typeof n||!n.startsWith("pym"))return;const e=n.split(/xPYMx/);"height"===e[2]?this.sb(parseInt(e[3],10),void 0):"width"===e[2]&&this.sb(void 0,parseInt(e[3],10))}ob(t,n){var e,s;(e=this.element,s=this.getConsentPolicy(),et(e).then((t=>{const n={"consentMetadata":t&&t.getConsentMetadataInfo,"consentString":t&&t.getConsentStringInfo,"consentPolicyState":t&&t.whenPolicyResolved,"consentPolicySharedData":t&&t.getMergedSharedData};return t?Promise.all(Object.keys(n).map((e=>n[e].call(t,s||"default").then((t=>({[e]:t})))))).then((t=>Object.assign.apply({},t))):n}))).then((e=>{this.ub(t,n,i({"sentinel":"amp","type":"consent-data"},e))}))}ub(t,n,e){t.postMessage(e,n)}unlayoutCallback(){return this.Fv&&(this.Fv(),this.Fv=null),this.Lv&&(I(this.Lv),this.Tv&&this.togglePlaceholder(!0),this.Lv=null,this.Gv&&(this.Gv.destroy(),this.Gv=null)),this.bn.updatePlaying(!1),!0}getLayoutPriority(){return this.xv?2:this.zv?1:super.getLayoutPriority()}mutatedAttributesCallback(t){const n=t.src;void 0!==n&&(this.iframeSrc=this.Uv(n),this.Lv&&(this.Lv.src=this.Je(this.iframeSrc,window.location.href,this.Dv))),this.Lv&&t.title&&M(["title"],this.element,this.Lv)}unlayoutOnPause(){return!0}ib(){this.Tv&&this.getVsync().mutate((()=>{this.Lv&&(S(this.Lv,"zIndex",0),this.togglePlaceholder(!1))}))}firstLayoutCompleted(){}throwIfCannotNavigate(){if(!this.qv(this.Dv,"allow-top-navigation"))throw D().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".')}sb(t,n){if(!this.Nv)return void(this.$v||(this.user().error(vt,"Ignoring embed-size request because this iframe is not resizable",this.element),this.$v=!0));if(t<100)return void this.user().error(vt,"Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",this.element);let e,i;t=parseInt(t,10),isNaN(t)||(e=Math.max(t+(this.element.offsetHeight-this.Lv.offsetHeight),t)),n=parseInt(n,10),isNaN(n)||(i=Math.max(n+(this.element.offsetWidth-this.Lv.offsetWidth),n)),void 0!==e||void 0!==i?this.attemptChangeSize(e,i).then((()=>{void 0!==e&&this.element.setAttribute("height",e),void 0!==i&&this.element.setAttribute("width",i),this.element.overflowCallback(!1,e,i)}),(()=>{})):this.user().error(vt,"Ignoring embed-size request because no width or height value is provided",this.element)}Hv(){if(!function(t,n){const e=function(t){var n,e,s,r,u;if(t[tt])return t[tt];t[tt]=d();const c=t[tt];m(c);const a=i(i({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(e=t.AMP_EXP)&&void 0!==e?e:y((null===(s=t.__AMP_EXP)||void 0===s?void 0:s.textContent)||"{}"));for(const t in a){const n=a[t];"number"==typeof n&&n>=0&&n<=1&&(c[t]=Math.random()<n)}const l=null===(r=t.AMP_CONFIG)||void 0===r?void 0:r["allow-doc-opt-in"];if(o(l)&&l.length){const n=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n){var h;const t=(null===(h=n.getAttribute("content"))||void 0===h?void 0:h.split(","))||[];for(const n of t)l.includes(n)&&(c[n]=!0)}}Object.assign(c,function(t){var n;let e="";try{var i;"localStorage"in t&&(e=null!==(i=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==i?i:"")}catch(t){}const s=(null===(n=e)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],r=d();for(const t of s)t&&("-"==t[0]?r[t.substr(1)]=!1:r[t]=!0);return r}(t));const f=null===(u=t.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(o(f)&&f.length){const n=function(t){const n=d();if(!t)return n;let e;for(;e=L.exec(t);){const t=N(e[1],e[1]),i=e[2]?N(e[2].replace(/\+/g," "),e[2]):"";n[t]=i}return n}(t.location.originalHash||t.location.hash);for(const t of f){const e=n[`e-${t}`];"1"==e&&(c[t]=!0),"0"==e&&(c[t]=!1)}}return c}(t);return!!e["iframe-messaging"]}(this.win))return;const{element:t}=this,n=t.getAttribute("src");if(n&&(this.Wv=it(t).parse(n).origin),this.registerAction("postMessage",(t=>{this.Wv?this.Lv.contentWindow.postMessage(t.args,this.Wv):D().error(vt,'"postMessage" action is only allowed with "src"attribute with an origin.')})),!this.Wv)return;let e=0;const s=t=>{if(t.source!==this.Lv.contentWindow)return;if(t.origin!==this.Wv)return void D().error(vt,'"message" received from unexpected origin: '+t.origin+". Only allowed from: "+this.Wv);if(!this.cb())return e++,D().error(vt,'"message" event may only be triggered from a user gesture.'),void(e>=10&&(D().error(vt,'Too many non-gesture-triggered "message" events; detaching event listener.'),this.win.removeEventListener("message",s)));const n=st(t);let i;try{i=y(JSON.stringify(n))}catch(t){return void D().error(vt,'Data from "message" event must be JSON.')}const r=function(t,n,e,i){const s={detail:e};return Object.assign(s,void 0),new t.CustomEvent("amp-iframe:message",s)}(this.win,0,{"data":i});(t=>B(this.element,"action"))().trigger(this.element,"message",r,3)};this.win.addEventListener("message",s)}cb(){if(this.getAmpDoc().getRootNode().activeElement!==this.Lv)return!1;const t=this.win.document.createElement("audio");return n=t,(e=()=>n.play(),new Promise((t=>{t(e())}))).catch((()=>{})),!t.paused;var n,e}setTargetOriginForTesting(t){this.Wv=t}};t.registerElement(vt,yt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-iframe-0.1.mjs.map