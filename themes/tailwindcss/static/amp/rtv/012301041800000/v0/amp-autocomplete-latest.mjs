;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-autocomplete",ev:"0.1",l:!0,f:function(t,e){(()=>{var e,i,s,n=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,u=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,l=(e={"third_party/fuzzysearch/index.js"(t,e){e.exports=function(t,e){var i=e.length,s=t.length;if(s>i)return!1;if(s===i&&t===e)return!0;t:for(var n=0,r=0;n<s;n++){for(var o=t.charCodeAt(n);r<i;)if(e.charCodeAt(r++)===o)continue t;return!1}return!0}}},function(){return i||(0,e[Object.keys(e)[0]])((i={exports:{}}).exports,i),i.exports});function c(){return s||(s=Promise.resolve(void 0))}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var{isArray:f}=Array;function _(t,e,i){return"number"!=typeof i&&(i=0),!(i+e.length>t.length)&&-1!==t.indexOf(e,i)}var{hasOwnProperty:b,toString:A}=Object.prototype;function P(t){const e=Object.create(null);return t&&Object.assign(e,t),e}function v(t,e){return b.call(t,e)}function g(t,e){return v(t,e)?t[e]:void 0}function I(t,e){if("."==e)return t;const i=e.split(".");let s=t;for(const t of i){if(!(t&&s&&void 0!==s[t]&&"object"==typeof s&&v(s,t))){s=void 0;break}s=s[t]}return s}function x(t,e,i,s,n,r,o,h,u,a,l){return t}function R(t,e){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==e||e(t),null}}function E(t){try{t.focus()}catch(t){}}function T(t,e){void 0===e&&(e=t.hasAttribute("hidden")),e?t.removeAttribute("hidden"):t.setAttribute("hidden","")}var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t,e=""){try{return decodeURIComponent(t)}catch(t){return e}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M=self.__AMP_LOG;function O(t){return M.user||(M.user=V()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(M.user.win,t)?M.userForEmbed||(M.userForEmbed=V()):M.user}function V(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}function j(t,e,i,s,n,r,o,h,u,a,l){return t}function S(t,e,i,s,n,r,o,h,u,a,l){return O().assert(t,e,i,s,n,r,o,h,u,a,l)}function U(t,e){return D(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}function k(t,e){return D(C($(t)),e)}function F(t,e){const i=C($(t));return N(i,e)?D(i,e):null}function $(t){return t.nodeType?(i=t,e=(i.ownerDocument||i).defaultView,U(e,"ampdoc")).getAmpDoc(t):t;var e,i}function C(t){const e=$(t);return e.isSingleDoc()?e.win:e}function D(t,e){j(N(t,e));const i=function(t){let e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return i.obj||(j(i.ctor),j(i.context),i.obj=new i.ctor(i.context),j(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function N(t,e){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!i||!i.ctor)}function z(t,e,i,s){const n={detail:i};return Object.assign(n,s),new t.CustomEvent(e,n)}function L(t){return!!t&&"function"==typeof t.getFormData}var H,q=(()=>self.AMP.config.urls)(),J=new Set(["c","v","a","ad"]),W="__amp_source_origin",B=t=>"string"==typeof t?G(t):t;function G(t,e){return H||(H=self.document.createElement("a")),function(t,e,i){return t.href="",new URL(e,t.href)}(H,t)}function K(t,e){return`${encodeURIComponent(t)}=${encodeURIComponent(e)}`}function Q(t,e,i,s){return function(t,e,i){if(!e)return t;const s=t.split("#",2),n=s[0].split("?",2);let r=n[0]+(n[1]?i?`?${e}&${n[1]}`:`?${n[1]}&${e}`:`?${e}`);return r+=s[1]?`#${s[1]}`:"",r}(t,K(e,i),s)}var X=["GET","POST"],Y=[f,function(t){return"[object Object]"===A.call(t)}];function Z(t,e){const i=m({},e);if(L(e.body)){const t=e.body;i.headers["Content-Type"]="multipart/form-data;charset=utf-8",i.body=function(t){const e=[];for(let i=t.next();!i.done;i=t.next())e.push(i.value);return e}(t.entries())}return{input:t,init:i}}var tt,et,it=(tt=l(),((t,e,i)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let s of h(e))a.call(t,s)||"default"===s||r(t,s,{get:()=>e[s],enumerable:!(i=o(e,s))||i.enumerable});return t})((et=r(null!=tt?n(u(tt)):{},"default",tt&&tt.__esModule&&"default"in tt?{get:()=>tt.default,enumerable:!0}:{value:tt,enumerable:!0}),r(et,"__esModule",{value:!0})),tt)),st={NONE:0,OPT_IN:1,ALL:2};function nt(t,e,i,s){const n=(t=>F(t,"url-replace"))(t);return(i>=st.OPT_IN?n.expandUrlAsync(e):Promise.resolve(e)).then((e=>{if(i===st.OPT_IN){const e=n.collectDisallowedVarsSync(t);if(e.length>0)throw O().createError(`URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="${e.join(" ")}" to the <${t.tagName}> element. See https://bit.ly/amp-var-subs.`)}const r={};return t.hasAttribute("credentials")&&(r.credentials=t.getAttribute("credentials")),s&&(r.cache="reload"),{"xhrUrl":e,"fetchOpt":r}}))}var rt="amp-autocomplete",ot="none",ht=class extends t.BaseElement{constructor(t){super(t),this.sh=null,this.R4=null,this.T4=null,this.O4="",this.WO="",this.V4=1,this.j4=null,this.S4=!1,this.U4=!1,this.F4=!1,this.C4="",this.D4="",this.N4=-1,this.z4=null,this.OD=t.id?t.id:Math.floor(100*Math.random()),this.fn=null,this.bJ=!1,this.L4=null,this.tM=null,this.H4=!1,this.getSsrTemplateHelper=function(t){let e=!1,i=null,s=t;return(...t)=>(e||(i=s.apply(self,t),e=!0,s=null),i)}((()=>new class{constructor(t,e,i){this.br=e,this.tM=i,this.JL=t}isEnabled(){const t=this.br.getAmpDoc();return!(!t.isSingleDoc()||!t.getRootNode().documentElement.hasAttribute("allow-viewer-render-template"))&&this.br.hasCapability("viewerRenderTemplate")}assertTrustedViewer(t){return this.br.isTrustedViewer().then((e=>{S(e,"Refused to attempt SSR in untrusted viewer: ",t)}))}ssr(t,e,i=null,s={}){let n;return i||(n=this.tM.maybeFindTemplate(t)),this.assertTrustedViewer(t).then((()=>this.br.sendMessageAwaitResponse("viewerRenderTemplate",this.WL(e,n,i,s))))}applySsrOrCsrTemplate(t,e){let i;return this.isEnabled()?(S("string"==typeof e.html,"Skipping template rendering due to failed fetch"),i=this.assertTrustedViewer(t).then((()=>this.tM.findAndSetHtmlForTemplate(t,e.html)))):i=f(e)?this.tM.findAndRenderTemplateArray(t,e):this.tM.findAndRenderTemplate(t,e),i}WL(t,e,i,s={}){const n={"type":this.JL},r=i&&i.successTemplate?i.successTemplate:e;r&&(n.successTemplate={"type":"amp-mustache","payload":r.innerHTML});const o=i&&i.errorTemplate?i.errorTemplate:null;return o&&(n.errorTemplate={"type":"amp-mustache","payload":o.innerHTML}),s&&Object.assign(n,s),{"originalRequest":Z(t.xhrUrl,t.fetchOpt),"ampComponent":n}}}(rt,k(this.element,"viewer"),this.tM))),this.q4=!1,this.Da=null,this.Tc=null,this.J4=!1,this.W4=t.id?t.id:Math.floor(100*Math.random())+"_AMP_content_"}buildCallback(){this.tM=k(this.element,"templates"),this.Da=F(this.element,"action"),this.Tc=(t=>k(this.element,"viewport"))(),this.T4=this.B4();const t=this.T4.getAttribute("type");S(!this.T4.hasAttribute("type")||"text"===t||"search"===t,'%s requires the "type" attribute to be "text" or "search" if present on <input>. %s',rt,this.element),this.sh=this.G4(),this.D4=this.element.getAttribute("query"),this.C4=this.element.getAttribute("src");const e=this.element.querySelector('script[type="application/json"]');e?this.R4=this.K4(e):this.element.hasAttribute("src"),this.T4.setAttribute("dir","auto"),this.T4.setAttribute("aria-autocomplete","both"),this.T4.setAttribute("role","textbox"),this.T4.setAttribute("aria-controls",this.W4),"INPUT"===this.T4.tagName&&(this.element.setAttribute("role","combobox"),this.T4.setAttribute("aria-multiline","false")),this.element.setAttribute("aria-haspopup","listbox"),this.element.setAttribute("aria-expanded","false"),this.element.setAttribute("aria-owns",this.W4);const i=this.Q4();var s;i&&i.hasAttribute("autocomplete")&&(this.L4=i.getAttribute("autocomplete")),this.q4=this.getSsrTemplateHelper().isEnabled(),this.H4=this.tM.hasTemplate(this.element,"template, script[template]"),this.q4&&(S(this.C4,'%s requires data to be provided via "src" attribute for server-side rendering. %s',rt,this.element),S(this.H4,`${rt} should provide a <template> or <script type="plain/text"> element.`),S(!this.element.hasAttribute("filter"),`${rt} does not support client-side filter when server-side render is required.`)),this.WO=this.element.getAttribute("filter")||ot,S("substring"===(s=this.WO)||"prefix"===s||"token-prefix"===s||"fuzzy"===s||"custom"===s||"none"===s,"Unexpected filter: %s. %s",this.WO,this.element),this.V4=this.element.hasAttribute("min-characters")?parseInt(this.element.getAttribute("min-characters"),10):1,this.element.hasAttribute("max-entries");const n=this.element.getAttribute("max-items")||this.element.getAttribute("max-entries");return this.j4=n?parseInt(n,10):null,this.S4=this.sh.shouldSuggestFirst(),this.F4=this.element.hasAttribute("highlight-user-entry"),this.fn=this.$J(),this.element.appendChild(this.fn),this.Uy(),c()}Uy(){this.T4.addEventListener("touchstart",(()=>{this.X4()}),{passive:!0}),this.T4.addEventListener("input",(()=>{this.Y4()})),this.T4.addEventListener("keydown",(t=>{this.fD(t)})),this.T4.addEventListener("focus",(()=>{this.X4().then((()=>{const t=this.sh.shouldShowOnFocus();this.Z4(t)}))})),this.T4.addEventListener("blur",(()=>{this.Z4(!1)})),this.fn.addEventListener("mousedown",(t=>{this.p5(t)}))}B4(){const t=this.element.querySelectorAll("input,textarea");return S(1==t.length,"%s should contain exactly one <input> or <textarea> descendant %s",rt,this.element),t[0]}Q4(){return this.T4.form||null}G4(){return this.element.hasAttribute("inline")?new class{constructor(t){const{element:e}=t;this._n=e,this.Ye=this._n.getAttribute("inline"),S(""!==this.Ye,'Empty value for the "inline" attr is unsupported, %s. %s',"amp-autocomplete",e),S(""!==this.Ye,"AutocompleteBindingInline does not support an empty value in the constructor."),this.d5=null;const i=this.Ye.replace(/([()[{*+.$^\\|?])/g,"\\$1"),s=`((${i}|^${i})(\\w+)?)`;this.m5=new RegExp(s,"gm")}shouldAutocomplete(t){const e=this.b5(this.m5,t);return this.d5=e,!!e}b5(t,e){if(!t)return null;const{selectionStart:i,value:s}=e;let n,r;for(;null!==(n=t.exec(s))&&!(n[0].length+g(n,"index")>i);)r=n;return!r||r[0].length+g(r,"index")<i?null:r}getUserInputForUpdate(t){return this.d5&&this.d5[0]?this.d5[0].slice(this.Ye.length):""}getUserInputForUpdateWithSelection(t,e,i){if(!this.d5)return e.value;let s=e.selectionStart;const n=Number(g(this.d5,"index")),r=i.length;s>=n+r&&(s-=r),E(e),s=s+t.length+1,e.setSelectionRange(s,s),this.d5=null;const{value:o}=e;return o.slice(0,n+this.Ye.length)+t+" "+o.slice(n+this.Ye.length+r)}resetInputOnWrapAround(t,e){}shouldSuggestFirst(){return this._n.hasAttribute("suggest-first")}shouldShowOnFocus(){return!1}displayActiveItemInInput(t,e,i){}removeSelectionHighlighting(t){}shouldPreventDefaultOnEnter(t){return t}}(this):new class{constructor(t){const{element:e}=t;this.S4=e.hasAttribute("suggest-first");const i=e.getAttribute("filter");this.S4&&"prefix"!==i&&(this.S4=!1),this.A5=e.hasAttribute("submit-on-enter")}shouldAutocomplete(t){return!0}getUserInputForUpdate(t){return t.value||""}getUserInputForUpdateWithSelection(t,e,i){return t}resetInputOnWrapAround(t,e){e.value=t}shouldSuggestFirst(){return this.S4}shouldShowOnFocus(){return!0}displayActiveItemInInput(t,e,i){t.value=e,this.S4&&t.setSelectionRange(i.length,e.length)}removeSelectionHighlighting(t){const e=t.value.length;t.setSelectionRange(e,e)}shouldPreventDefaultOnEnter(t){return!this.A5}}(this)}K4(t){const e=I(R(t.textContent,(t=>{throw t})),this.element.getAttribute("items")||"items");return e?O().assertArray(e):[]}v5(){const t=this.getAmpDoc(),e=st.ALL,i=this.element.getAttribute("items")||"items";return this.g5(),this.q4?nt(this.element,this.element.getAttribute("src"),e,!1).then((t=>{var e,s,n;t.xhrUrl=(e=this.win,s=t.xhrUrl,n=t.fetchOpt,x("string"==typeof s),!1!==n.ampCors&&(s=function(t,e){!function(t){const e=function(t){const e=P();if(!t)return e;let i;for(;i=y.exec(t);){const t=w(i[1],i[1]),s=i[2]?w(i[2].replace(/\+/g," "),i[2]):"";e[t]=s}return e}(G(t).search);S(!(W in e),"Source origin is not allowed in %s",t)}(e);const i=function(t){return G(function(t){if(!function(t){return q.cdnProxyRegex.test(B(t).origin)}(t=B(t)))return t.href;const e=t.pathname.split("/"),i=e[1];S(J.has(i),"Unknown path prefix in url %s",t.href);const s=e[2],n="s"==s?"https://"+decodeURIComponent(e[3]):"http://"+decodeURIComponent(s);return S(n.indexOf(".")>0,"Expected a . in origin %s",n),e.splice(1,"s"==s?3:2),n+e.join("/")+function(t,e){if(!t||"?"==t)return"";const i=new RegExp("[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\\b[^&]*","g"),s=t.replace(i,"").replace(/^[?&]/,"");return s?"?"+s:""}(t.search)+(t.hash||"")}(t)).origin}(t.location.href);return Q(e,W,i)}(e,s)),s),t.fetchOpt=function(t,e,i){i=i||{};const s=function(t){return t.origin||G(t.location.href).origin}(t);return s==G(e).origin&&(i.headers=i.headers||{},i.headers["AMP-Same-Origin"]="true"),i}(this.win,t.xhrUrl,t.fetchOpt),function(t){const e=function(t,e){const i=t||{},s=i.credentials;return x(void 0===s||"include"==s||"omit"==s),i.method=void 0===(n=i.method)?"GET":(n=n.toUpperCase(),x(X.includes(n)),n),i.headers=i.headers||{},i.headers.Accept=e,x(null!==i.body),i;var n}(t,"application/json");if("POST"==e.method&&!L(e.body)){x(Y.some((t=>t(e.body)))),e.headers["Content-Type"]=e.headers["Content-Type"]||"text/plain;charset=utf-8";const t=e.headers["Content-Type"];e.body="application/x-www-form-urlencoded"===t?function(t){const e=[];for(const s in t){let n=t[s];if(null!=n){n=f(i=n)?i:[i];for(let t=0;t<n.length;t++)e.push(K(s,n[t]))}}var i;return e.join("&")}(e.body):JSON.stringify(e.body)}}(t.fetchOpt);const r={"ampAutocompleteAttributes":{"items":i,"maxItems":this.j4}};return this.getSsrTemplateHelper().ssr(this.element,t,null,r)})):function(t,e,i={}){const{expr:s=".",urlReplacement:n=st.NONE,refresh:r=!1,xssiPrefix:o,url:h=e.getAttribute("src")}=i;!function(t,e,i="source"){var s;S(null!=t,"%s %s must be available",e,i),S("https:"==(s=B(s=t)).protocol||"localhost"==s.hostname||"127.0.0.1"==s.hostname||function(t,e){const i=t.length-e.length;return i>=0&&t.indexOf(e,i)==i}(s.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',e,i,t)}(h,e);const u=U(t.win,"batched-xhr");return nt(e,h,n,r).then((t=>u.fetchJson(t.xhrUrl,t.fetchOpt))).then((e=>{return(i=t.win,U(i,"xhr")).xssiJson(e,o);var i})).then((t=>{if(null==t)throw new Error("Response is undefined.");return I(t,s||".")})).catch((t=>{throw O().createError("failed fetching JSON data",t)}))}(t,this.element,{expr:i,urlReplacement:e}).catch((()=>[]))}g5(){if(!this.D4)return;const t=this.I5(this.O4);this.element.setAttribute("src",t)}I5(t=""){return Q(this.C4,this.D4,t)}$J(){const t=this.element.ownerDocument.createElement("div");return t.classList.add("i-amphtml-autocomplete-results"),this.x5()&&t.classList.add("i-amphtml-autocomplete-results-up"),t.setAttribute("role","listbox"),t.setAttribute("id",this.W4),T(t,!1),t}layoutCallback(){return this.T4.setAttribute("autocomplete","off"),this.element.hasAttribute("prefetch")&&this.X4(),this.R5(this.R4,this.O4)}mutatedAttributesCallback(t){const e=t.src;return null==e?c():"string"==typeof e?(this.C4=e,this.v5().then((t=>{this.R4=t||[],this.R5(this.R4,this.O4)}),(t=>{this.E5(t)}))):"object"==typeof e?(this.R4=e.items||[],this.R5(this.R4,this.O4)):void O().error(rt,'Unexpected "src" type: '+e)}T5(t,e=""){const i=this.element.ownerDocument.createElement("div");i.classList.add("i-amphtml-autocomplete-item"),i.setAttribute("role","option"),i.setAttribute("data-value",t),i.setAttribute("dir","auto"),i.textContent=t;const s=i.childNodes[0],n=t.toLocaleLowerCase(),r=e.toLocaleLowerCase();if(this.F4&&e&&e.length<=t.length&&_(n,r)){const o=n.indexOf(r),h=this.element.ownerDocument.createElement("span");h.classList.add("autocomplete-partial"),h.appendChild(this.element.ownerDocument.createTextNode(t.slice(o,o+e.length)));const u=s.splitText(o);u.splitText(e.length),i.replaceChild(h,u)}return i}Y4(){return this.sh.shouldAutocomplete(this.T4)?this.y5():this.mutateElement((()=>{this.w5()}))}y5(){const t=0===this.O4.length&&1===this.T4.value.length;return this.O4=this.sh.getUserInputForUpdate(this.T4),(this.q4||this.D4?this.v5():Promise.resolve(this.R4)).then((e=>(this.R4=e,this.mutateElement((()=>{this.R5(this.R4,this.O4).then((()=>{this.M5(t)}))})))))}M5(t){this.O5(!0),this.S4&&(this.U4&&!t||this.V5(1),this.U4=!1)}p5(t){const e=t.target,i=this.j5(e),{selectedObject:s,selectedText:n}=this.S5(i);return this.mutateElement((()=>{this.U5(n,s)}))}R5(t,e=""){return this.w5(),!t||e.length<this.V4?c():this.q4?v(t,"html")?this.k5(t,this.fn,e):c():this.F5(t,e)}F5(t,e){if(!t.length)return c();const i=this.C5(t,e).map((t=>{let e=t;return"object"==typeof t&&(e=m(m({},t),{},{objToJson:()=>JSON.stringify(t)})),e}));return this.k5(i,this.fn,e)}k5(t,e,i){let s=c();return this.D5(),this.H4?s=this.getSsrTemplateHelper().applySsrOrCsrTemplate(this.element,t).then((t=>{(f(t)?t:[t]).forEach((t=>{t.hasAttribute("data-disabled")?t.setAttribute("aria-disabled","true"):t.hasAttribute("data-value"),t.classList.add("i-amphtml-autocomplete-item"),t.setAttribute("role","option"),e.appendChild(t)}))})):t.forEach((t=>{S("string"==typeof t,"%s data must provide template for non-string items. %s",rt,this.element),e.appendChild(this.T5(t,i))})),s}C5(t,e){if(this.WO===ot)return this.N5(t);e=e.toLocaleLowerCase();const i=this.element.getAttribute("filter-value")||"value",s=t.filter((t=>{switch("object"==typeof t&&(t=I(t,i)),S("string"==typeof t,'%s data property "%s" must map to string type. %s',rt,i,this.element),t=t.toLocaleLowerCase(),this.WO){case"substring":return _(t,e);case"prefix":return t.startsWith(e);case"token-prefix":return this.z5(t,e);case"fuzzy":return(0,it.default)(e,t);case"custom":throw new Error("Filter not yet supported: %s",this.WO,this.element);default:throw new Error("Unexpected filter: %s",this.WO,this.element)}}));return this.N5(s)}z5(t,e){if(""===e)return!0;const i=this.L5(t),s=this.L5(e),n=this.H5(i),r=s[s.length-1];s.splice(s.length-1,1);let o=!0;for(let t=0;t<s.length;t++){const e=s[t];if(""===e)continue;if(!v(n,e)){o=!1;break}const i=Number(g(n,e));i>1?n[e]=i-1:delete n[e]}const h=Object.keys(n);return o&&(""===r||h.some((t=>t.startsWith(r))))}L5(t){return(t=t.replace(/[\.]+/g,"")).split(/[`~(){}_|+\-;:\'",\[\]\\\/ ]+/g)}H5(t){const e=P();return t.forEach((t=>{const i=v(e,t)?g(e,t)+1:1;e[t]=i})),e}N5(t){return this.j4&&this.j4<t.length&&(t=t.slice(0,this.j4)),t}O5(t){this.T4.setAttribute("aria-expanded",t),T(this.fn,t)}Z4(t){const e=this.Q4();e&&(t?e.setAttribute("autocomplete","off"):this.L4?e.setAttribute("autocomplete",this.L4):e.removeAttribute("autocomplete"));let i=!1;return this.measureMutateElement((()=>{i=this.x5()}),(()=>{t||(this.O4=this.T4.value,this.R5(this.R4,this.O4),this.D5()),this.q5(i),this.O5(t)}))}X4(){return this.J4||!this.element.hasAttribute("src")?c():(this.J4=!0,this.v5().then((t=>{this.R4=t,this.R5(this.R4)}),(t=>{this.E5(t)})))}q5(t){this.fn.classList.toggle("i-amphtml-autocomplete-results-up",t)}x5(){const t=this.Tc.getHeight()||0;return this.T4.getBoundingClientRect().top>t/2}J5(){return!this.fn.hasAttribute("hidden")&&this.fn.children.length>0}j5(t){return null===t?null:t.classList.contains("i-amphtml-autocomplete-item")?t:this.j5(t.parentElement)}S5(t){if(null===t||t.hasAttribute("data-disabled"))return{selectedObject:null,selectedText:null};const e=this.W5(t);return this.B5(e),{selectedObject:this.G5(t),selectedText:e}}B5(t){this.T4.value=this.sh.getUserInputForUpdateWithSelection(t,this.T4,this.O4),this.O4=this.sh.getUserInputForUpdate(this.T4)}W5(t){return t.getAttribute("data-value")||t.textContent||""}G5(t){return t.hasAttribute("data-json")?R(t.getAttribute("data-json"),(t=>{throw t})):null}U5(t,e){null!==t&&(this.K5(t,e),this.w5(),this.O5(!1))}K5(t,e){const i=m({value:t},e&&{valueAsObject:e}),s=z(this.win,"amp-autocomplete.select",i);this.Da.trigger(this.element,"select",s,3);const n=z(this.win,"change",i,{bubbles:!0});this.T4.dispatchEvent(n)}V5(t){if(0===t||!this.J5()||this.bJ)return c();const e=-1===this.N4&&t<0?t:this.N4+t,i=this.Q5();if(0===i.length)return c();const s=(n=e,r=i.length,n>0&&r>0?n%r:(n%r+r)%r);var n,r;const o=i[s],h=o.getAttribute("data-value");let u,a;return this.sh.displayActiveItemInInput(this.T4,h,this.O4),this.measureMutateElement((()=>{const{offsetHeight:e,offsetTop:i}=o,{offsetHeight:s,scrollTop:n}=this.fn;u=n>i||n+s<i+e,a=t>0?i+e-s:i}),(()=>{u&&(this.fn.scrollTop=a),this.D5(),o.classList.add("i-amphtml-autocomplete-item-active"),o.setAttribute("aria-selected","true");let t=o.getAttribute("id");t||(t=this.OD+"_AMP_content_"+s,o.setAttribute("id",t)),this.T4.setAttribute("aria-activedescendant",t),this.N4=s,this.z4=o,E(this.z4)}))}Q5(){return this.fn.querySelectorAll(".i-amphtml-autocomplete-item:not([data-disabled])")}X5(){this.sh.resetInputOnWrapAround(this.O4,this.T4),this.D5()}D5(){this.z4&&(this.z4.classList.toggle("i-amphtml-autocomplete-item-active",!1),this.z4.removeAttribute("aria-selected"),"autocomplete-selected"===this.z4.getAttribute("id")&&this.z4.removeAttribute("id"),this.T4.removeAttribute("aria-activedescendent"),this.z4=null,this.N4=-1)}w5(){this.bJ=!1,function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(this.fn)}fD(t){switch(t.key){case"ArrowDown":return t.preventDefault(),this.J5()?this.N4===this.Q5().length-1?(this.X5(),c()):this.V5(1):this.mutateElement((()=>{this.R5(this.R4,this.O4),this.O5(!0)}));case"ArrowUp":return t.preventDefault(),0===this.N4?(this.X5(),c()):this.V5(-1);case"Enter":const e=this.sh.shouldPreventDefaultOnEnter(!!this.z4);if(this.J5()&&e&&t.preventDefault(),this.sh.removeSelectionHighlighting(this.T4),this.J5()&&this.z4){const{selectedObject:t,selectedText:e}=this.S5(this.z4);return this.mutateElement((()=>{this.U5(e,t),this.D5()}))}return this.mutateElement((()=>{this.O5(!1)}));case"Escape":return this.mutateElement((()=>{this.bJ||(t.preventDefault(),this.X5(),this.O5(!1))}));case"Tab":if(this.J5()&&this.z4){t.preventDefault();const{selectedObject:e,selectedText:i}=this.S5(this.z4);return this.mutateElement((()=>{this.U5(i,e)}))}return c();case"Backspace":return this.U4=this.S4,c();default:return c()}}E5(t){if(!this.bJ){if(this.w5(),!this.getFallback())throw t;this.bJ=!0,this.toggleFallback(!0)}}isLayoutSupported(t){return"container"==t}};t.registerElement(rt,ht,"amp-autocomplete,amp-autocomplete>input,amp-autocomplete>textarea{font-family:sans-serif}amp-autocomplete>input,amp-autocomplete>textarea{border-radius:4px;box-sizing:border-box}.i-amphtml-autocomplete-results{position:absolute;top:100%;width:calc(100% + 1rem);min-width:calc(2em + 2rem);max-height:40vh;margin-top:.5rem;margin-left:-.5rem;border-radius:4px;overflow-y:auto;overflow-x:hidden;background-color:#fff;box-shadow:0px 2px 4px 0px rgba(0,0,0,.5);z-index:10}.i-amphtml-autocomplete-results-up{top:auto;bottom:100%;margin-bottom:.5rem}.i-amphtml-autocomplete-item{position:relative;padding:.5rem 1rem;cursor:pointer}.i-amphtml-autocomplete-item:first-child{border-radius:4px 4px 0px 0px}.i-amphtml-autocomplete-item:nth-last-child(2){border-radius:0px 0px 4px 4px}.i-amphtml-autocomplete-item-active:not([data-disabled]),.i-amphtml-autocomplete-item:hover:not([data-disabled]){background-color:rgba(0,0,0,.15)}.i-amphtml-autocomplete-item[data-disabled]{color:rgba(0,0,0,.33)}\n/*# sourceURL=/extensions/amp-autocomplete/0.1/amp-autocomplete.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-autocomplete-0.1.mjs.map