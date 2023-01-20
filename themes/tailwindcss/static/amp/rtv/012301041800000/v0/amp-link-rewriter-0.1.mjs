;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-link-rewriter",ev:"0.1",l:!0,f:function(t,r){(()=>{var{hasOwnProperty:r,toString:n}=Object.prototype;function i(t,n){return r.call(t,n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var e=self.__AMP_LOG;function s(t){return e.user||(e.user=o()),function(t,r){return r&&r.ownerDocument.defaultView!=t}(e.user.win,t)?e.userForEmbed||(e.userForEmbed=o()):e.user}function o(t){return function(t,r){throw new Error("failed to call initLogConstructor")}()}function c(t,r,n,i,e,s,o,c,u,h,a){return t}function u(t,r){return l(a(h(t)),r)}function h(t){return t.nodeType?(n=t,r=(n.ownerDocument||n).defaultView,function(t,r){return l(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(r)).getAmpDoc(t):t;var r,n}function a(t){const r=h(t);return r.isSingleDoc()?r.win:r}function l(t,r){c(f(t,r));const n=function(t){let r=t.__AMP_SERVICES;return r||(r=t.__AMP_SERVICES={}),r}(t)[r];return n.obj||(c(n.ctor),c(n.context),n.obj=new n.ctor(n.context),c(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function f(t,r){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[r];return!(!n||!n.ctor)}var v=t=>u(t,"documentInfo").get(),d=(new Set(["c","v","a","ad"]),0);function p(t){const r={};return Object.keys(t).forEach((n=>{r[n]="^"+t[n]+"$"})),r}function _(t,r){const n=r.attribute;return Object.keys(n).every((r=>new RegExp(n[r]).test(t.getAttribute(r))))}var E=["href","id","rel","rev"],P=/^vars(.+)/,R=/^(?:https?:)?(?:\/\/)?([^\/?]+)/i,A={"SOURCE_URL":!0,"DOCUMENT_REFERRER":!0,"AMP_GEO":!0},w=class extends t.BaseElement{constructor(t){super(t),this.Uj=null,this.uU=""}buildCallback(){const t=u(this.getAmpDoc(),"viewer");return this.getAmpDoc().whenReady().then((()=>t.getReferrerUrl())).then((t=>this.uU=t)).then(this.Jj.bind(this))}Jj(){this.Uj=new class{constructor(t,r,n){this.tU=n,this.Gj=function(t){var r;const n=function(t){try{return function(t){const r=(i=t,/^[\w-]+$/.test("script"),i.querySelectorAll("> script".replace(/^|,/g,"$&:scope "))),{length:n}=r;var i;if(1!==n)throw new Error(`Found ${n} <script> children. Expected 1.`);const e=r[0];if(!function(t){var r;return"SCRIPT"==t.tagName&&"APPLICATION/JSON"==(null===(r=t.getAttribute("type"))||void 0===r?void 0:r.toUpperCase())}(e))throw new Error('<script> child must have type="application/json"');try{var s;return o=null!==(s=e.textContent)&&void 0!==s?s:"",JSON.parse(o)}catch(t){throw new Error("Failed to parse <script> contents. Is it valid JSON?")}var o}(t)}catch(r){throw s(t).createError("%s: %s","amp-link-rewriter",r)}}(t);return e=n.output,s().assert(e,"amp-link-rewriter: output config property is required",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0),{output:n.output.toString(),section:i(n,"section")?n.section:[],attribute:i(n,"attribute")?p(n.attribute):{},vars:i(n,"vars")?n.vars:{},scopeDocument:null===(r=n.scopeDocument)||void 0===r||r};var e}(r),this.Zj=function(t,r){const n=t.getRootNode();let i=r.section.join(" a, "),e=n.querySelectorAll("a");const s=[];return 0!==r.section.length&&(i+=" a",e=n.querySelectorAll(i)),e.forEach((t=>{_(t,r)&&s.push(t)})),s}(this.tU,this.Gj),this.uU=t,this.Bj="",this.Hj=function(t,r){const n=a(h(t));return f(n,r)?l(n,r):null}(r,"url-replace")}handleClick(t){if(!t)return;if(this.Bj=this.Gj.output,this.Kj(t))return;if(!this.Qj(t))return;const r=v(this.tU).sourceUrl.match(R)[1],n=v(this.tU).canonicalUrl.match(R)[1];this.Wj(t,[r,n])||this.Xj(t)}Kj(t){return t.href.match(R)[1]===this.Bj.match(R)[1]}Qj(t){return this.Gj.scopeDocument?this.Yj(t):!!_(r=t,n=this.Gj)&&function(t,r){return 0===r.section.length||(n=t,i=r.section.join(","),!!n.closest(i));var n,i}(r,n);var r,n}Yj(t){return null===this.Zj||0===this.Zj.length||this.Zj.filter((r=>r===t)).length>0}Wj(t,r){const{href:n}=t;return r.some((t=>{const r=n.match(R);return!r||R.test(n)&&r[1]===t}))}Xj(t){this.Bj=this.tN();const{vars:r}=this.Gj;r instanceof Object&&(t.href=this.rN(t,r))}tN(){return this.Hj.expandUrlSync(this.Bj,{DOCUMENT_REFERRER:this.uU},A)}rN(t,r){E.forEach((n=>{t.getAttribute(n)&&(r[n]=t.getAttribute(n))}));const n=function(t,r,n){const{dataset:i}=t,e={},s=n;for(const t in i){const r=t.match(s);r&&(e[r[1][0].toLowerCase()+r[1].substr(1)]=i[t])}return e}(t,0,P);return Object.assign(r,n),r.random=Math.random().toString(32).substr(2),Object.keys(r).forEach((t=>{r[t]&&(this.Bj=this.Bj.replace("${"+t+"}",encodeURIComponent(r[t])))})),this.Bj=this.Bj.replace(/\${[A-Za-z0-9]+}+/,(()=>"")),this.Bj}}(this.uU,this.element,this.getAmpDoc()),this.nN()}nN(){return(t=this.getAmpDoc(),u(t,"navigation")).registerAnchorMutator((t=>{this.Uj.handleClick(t)}),d),!0;var t}isLayoutSupported(t){return"nodisplay"===t}};t.registerElement("amp-link-rewriter",w)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-link-rewriter-0.1.mjs.map