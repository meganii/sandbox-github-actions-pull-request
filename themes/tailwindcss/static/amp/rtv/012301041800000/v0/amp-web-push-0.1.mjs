;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-web-push",ev:"0.1",l:!0,f:function(t,e){(()=>{var{hasOwnProperty:e,toString:i}=Object.prototype;function s(t){const e=Object.create(null);return t&&Object.assign(e,t),e}function r(t){return CSS.escape(t)}var n=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function o(t,e=""){try{return decodeURIComponent(t)}catch(t){return e}}function u(t){const e=s();if(!t)return e;let i;for(;i=n.exec(t);){const t=o(i[1],i[1]),s=i[2]?o(i[2].replace(/\+/g," "),i[2]):"";e[t]=s}return e}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var h=self.__AMP_LOG;function l(t,e){throw new Error("failed to call initLogConstructor")}function c(t){return h.user||(h.user=a()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(h.user.win,t)?h.userForEmbed||(h.userForEmbed=a()):h.user}function a(t){return l()}function p(t,e,i,s,r,n,o,u,h,l,c){return t}var d="amp-web-push",f=d,m=d+"-service",w=d+"-widget",_="granted",b="denied",P="default";function v(t,e){p(function(t,e){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!i||!i.ctor)}(t,e));const i=g(t)[e];return i.obj||(p(i.ctor),p(i.context),i.obj=new i.ctor(i.context),p(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function g(t){let e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}var A,R,E=class extends t.BaseElement{constructor(t){super(t)}isLayoutSupported(t){return"fixed"==t}buildCallback(){this.element.classList.add("amp-invisible")}},I="subscribed",y="unsubscribed",M="blocked";function S(t){return t.data}function T(t,e,i,s){let r=i;const n=function(t,e,i,s){let r=t,n=i,o=t=>{try{return n(t)}catch(t){var e,i;throw null===(e=(i=self).__AMP_REPORT_ERROR)||void 0===e||e.call(i,t),t}};const u=function(){if(void 0!==A)return A;A=!1;try{const t={get capture(){return A=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return A}(),h=!(null==s||!s.capture);return r.addEventListener(e,o,u?s:h),()=>{null==r||r.removeEventListener(e,o,u?s:h),n=null,r=null,o=null}}(t,e,(t=>{try{r(t)}finally{r=null,n()}}),s);return n}function V(t){return"AUDIO"===t.tagName||"VIDEO"===t.tagName}function k(t,e){return R||(R=self.document.createElement("a")),function(t,e,i){return t.href="",new URL(e,t.href)}(R,t)}new Set(["c","v","a","ad"]);var O=class{constructor(t){t||(t={debug:!1,windowContext:window}),this.Z={},this.te={},this.ee=t.debug,this.ne=!1,this.re=!1,this.ie=!1,this.se=null,this.oe=null,this.ce=null,this.ue=null,this.le=null,this.he=t.windowContext||window}listen(t){return new Promise(((e,i)=>{this.ie?i(new Error("Already connected.")):this.ne?i(new Error("Already listening for connections.")):Array.isArray(t)?(this.ce=this.ae.bind(this,t,e,i),this.he.addEventListener("message",this.ce),this.ee):i(new Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",t))})).then((()=>{this.send(O.Topics.CONNECT_HANDSHAKE,null),this.ie=!0}))}fe(t,e){const i=k(t).origin;for(let t=0;t<e.length;t++)if(k(e[t]).origin===i)return!0;return!1}ae(t,e,i,s){const r=S(s),{origin:n,ports:o}=s;this.ee,this.fe(n,t)&&r&&r.topic===O.Topics.CONNECT_HANDSHAKE&&(this.he.removeEventListener("message",this.ce),this.oe=o[0],this.le=this.de.bind(this),this.oe.addEventListener("message",this.le,!1),this.oe.start(),e())}connect(t,e){return new Promise(((i,s)=>{t||s(new Error("Provide a valid Window context to connect to.")),e||s(new Error("Provide an expected origin for the remote Window or provide the wildcard *.")),this.ie?s(new Error("Already connected.")):this.re?s(new Error("Already connecting.")):(this.se=new MessageChannel,this.oe=this.se.port1,this.ue=this.ge.bind(this,this.oe,e,i),this.oe.addEventListener("message",this.ue),this.oe.start(),t.postMessage({topic:O.Topics.CONNECT_HANDSHAKE},"*"===e?"*":k(e).origin,[this.se.port2]))}))}ge(t,e,i){this.ie=!0,this.ee,t.removeEventListener("message",this.ue),this.le=this.de.bind(this),t.addEventListener("message",this.le,!1),i()}static get Topics(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}de(t){const e=S(t);if(this.Z[e.id]&&e.isReply){const t=this.Z[e.id];delete this.Z[e.id];const{promiseResolver:i}=t;t.message=e.data,this.ee,i([e.data,this.pe.bind(this,e.id,t.topic)])}else{const t=this.te[e.topic];if(!t)return;this.ee;for(let i=0;i<t.length;i++)(0,t[i])(e.data,this.pe.bind(this,e.id,e.topic))}}on(t,e){this.te[t]?this.te[t].push(e):this.te[t]=[e]}off(t,e){if(e){const i=this.te[t].indexOf(e);-1!==i&&this.te[t].splice(i,1)}else this.te[t]&&delete this.te[t]}pe(t,e,i){const s={id:t,topic:e,data:i,isReply:!0};return this.oe.postMessage(s),new Promise((t=>{this.Z[s.id]={message:i,topic:e,promiseResolver:t}}))}send(t,e){const i={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:t,data:e};return this.ee,this.oe.postMessage(i),new Promise((s=>{this.Z[i.id]={message:e,topic:t,promiseResolver:s}}))}},C="amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/";function U(t,e,i){if(e[i])return e[i];const s=t.querySelector(`style[${i}], link[${i}]`);return s?(e[i]=s,s):null}function $(t,e){const i=t.styleSheets;for(let t=0;t<i.length;t++)if(i[t].ownerNode==e)return!0;return!1}function W(t){return e=m,function(t,e){const i=function(t,e){const i=g(t)[e];return i?i.promise?i.promise:(v(t,e),i.promise=Promise.resolve(i.obj)):null}(t,e);if(i)return i;const s=g(t);return s[e]=function(){const t=new class{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}},{promise:e,reject:i,resolve:s}=t;return e.catch((()=>{})),{obj:null,promise:e,resolve:s,reject:i,context:null,ctor:null}}(),s[e].promise}(function(t){const e=function(t){return t.nodeType?(i=t,e=(i.ownerDocument||i).defaultView,function(t,e){return v(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(e)).getAmpDoc(t):t;var e,i}(t);return e.isSingleDoc()?e.win:e}(t),e);var e}var F=class{static get PERMISSION_POPUP_URL_FRAGMENT(){return"amp-web-push-subscribing=yes"}static get AMP_VERSION_INITIAL(){return 1}constructor(t){this.ampdoc=t,function(t,e,i,r,n){const o=t.getHeadNode(),u=function(t,e,i,r){let n=t.__AMP_CSS_SM;n||(n=t.__AMP_CSS_SM=s());const o=`amp-extension=${r}`;if(o){const i=U(t,n,o);if(i)return"STYLE"==i.tagName&&i.textContent!==e&&(i.textContent=e),i}const u=(t.ownerDocument||t).createElement("style");u.textContent=e;let h=null;return u.setAttribute("amp-extension",r),h=U(t,n,"amp-runtime"),function(t,e,i=null){if(!i)return void function(t,e){t.insertBefore(e,t.firstChild)}(t,e);const s=i.nextSibling;t.insertBefore(e,s)}(t,u,h),o&&(n[o]=u),u}(o,function(t,e){const i=t.__AMP_CSS_TR;return i?i(e):e}(o,"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"),0,"amp-web-push");if(i){const e=t.getRootNode();if($(e,u))return u;const i=setInterval((()=>{$(e,u)&&clearInterval(i)}),4)}}(t,0,(()=>{})),this.ZU={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,debug:null},this.ee=!1,this.Lv=null,this.ftt=null,this.mtt=new O({debug:this.ee}),this.wtt=null}start(t){if(!this.environmentSupportsWebPush())return Promise.reject("Web push is not supported");this.initializeConfig(t);const e=this.installHelperFrame();return e.then((()=>this.mtt.connect(this.Lv.getDomElement().contentWindow,k(this.ZU["helper-iframe-url"]).origin))).then((()=>{if(!this.isContinuingSubscriptionFromRedirect())return this.updateWidgetVisibilities();this._tt()})),e}initializeConfig(t){this.ZU=t,this.ZU}installHelperFrame(){const t=-1!==this.ZU["helper-iframe-url"].indexOf("?")?"&":"?",e=`${this.ZU["helper-iframe-url"]}${t}parentOrigin=${this.ampdoc.win.location.origin}`;return this.Lv=new class{constructor(t,e){this.ji=t,this.pi=e,this.btt=null,this.Li=new Promise((()=>{}))}load(){return this.ji.whenReady().then((()=>{var t,e;return this.btt=this.ji.win.document.createElement("iframe"),t=this.btt,void 0===(e=!1)&&(e=t.hasAttribute("hidden")),e?t.removeAttribute("hidden"):t.setAttribute("hidden",""),this.btt.sandbox="allow-same-origin allow-scripts",this.btt.src=this.pi,this.ji.getBody().appendChild(this.btt),this.Li=function(t){let e,i;if(function(t){return!!(t.complete||"complete"==t.readyState||V(t)&&t.readyState>0||t.document&&"complete"==t.document.readyState)}(t))return Promise.resolve(t);const s=V(t);return s&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise(((r,n)=>{if(e=s?T(t,"loadedmetadata",r,{capture:!0}):T(t,"load",r),!t.tagName)return;let o=t;if(s&&!t.hasAttribute("src")&&(o=function(t,e){for(let i=t.lastElementChild;i;i=i.previousElementSibling)if(e(i))return i;return null}(t,(t=>"SOURCE"===t.tagName)),!o))return n(new Error("Media has no source."));i=T(o,"error",n)})).then((()=>(i&&i(),t)),(()=>{e&&e(),function(t){V(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);let e=t;throw e&&e.src&&(e=e.src),c().createError("Failed to load:",e)}(t)}))}(this.btt),this.whenReady()}))}getDomElement(){return this.btt}whenReady(){return this.Li}}(this.ampdoc,e),this.Lv.load()}isContinuingSubscriptionFromRedirect(){return-1!==(this.ampdoc.win.testLocation||this.ampdoc.win.location).search.indexOf(F.PERMISSION_POPUP_URL_FRAGMENT)}removePermissionPopupUrlFragmentFromUrl(t){let e=t.replace(`?${F.PERMISSION_POPUP_URL_FRAGMENT}`,"");return e=e.replace(`&${F.PERMISSION_POPUP_URL_FRAGMENT}`,""),e}Ptt(t,e){return this.Lv.whenReady().then((()=>this.mtt.send(t,e))).then((i=>{const s=i[0];if(s.success)return s.result;throw new Error(`AMP page helper iframe query topic ${t} and message ${e} failed with: ${s.error}`)}))}vtt(t,e){return this.Ptt(O.Topics.SERVICE_WORKER_QUERY,{topic:t,payload:e})}queryNotificationPermission(){return this.Ptt(O.Topics.NOTIFICATION_PERMISSION_STATE,null)}gtt(){return this.Ptt(O.Topics.SERVICE_WORKER_STATE,null)}registerServiceWorker(){const t=this.ZU["service-worker-url"],e=this.ZU["service-worker-scope"];return this.Ptt(O.Topics.SERVICE_WORKER_REGISTRATION,{workerUrl:t,registrationOptions:e?{scope:e}:{}})}querySubscriptionStateRemotely(){return this.vtt("amp-web-push-subscription-state",null)}subscribeForPushRemotely(){return this.vtt("amp-web-push-subscribe",null)}unsubscribeFromPushRemotely(){return this.vtt("amp-web-push-unsubscribe",null)}isServiceWorkerActivated(){const t=this;return this.gtt().then((e=>{const i=!0===e.isControllingFrame,s=this.isUrlSimilarForQueryParams(e.url,t.ZU["service-worker-url"]),r="activated"===e.state;return i&&s&&r}))}isUrlSimilarForQueryParams(t,e){const i=k(t),s=u(i.search),r=k(e),n=u(r.search);for(const t in s)if(n[t]!==s[t])return!1;return i.origin===r.origin&&i.pathname===r.pathname}setWidgetVisibilities(t,e){const i=this.ampdoc.getRootNode().querySelectorAll(`${r(w)}[visibility=${r(t)}]`),s="amp-invisible";for(let t=0;t<i.length;t++){const r=i[t];e?r.classList.remove(s):r.classList.add(s)}}Att(t){return this.ampdoc.getRootNode().querySelectorAll(`${r(w)}[visibility=${r(t)}]`).length>0}Rtt(t){if("boolean"==typeof t)return 1}Ett(){return this.queryNotificationPermission().then((t=>{this.ftt=t}))}updateWidgetVisibilities(){return this.Ett().then((()=>this.Itt(O.Topics.STORAGE_GET))).then((t=>!0===t?this.ytt("amp-web-push-notification-permission"):Promise.resolve(P))).then((t=>{if(t!==b)return this.isServiceWorkerActivated().then((t=>{t?this.Mtt():this.Stt()}));this.Att(M)?this.Ttt():this.Stt()}))}Mtt(){return(t=this.ampdoc.win,v(t,"timer")).timeoutPromise(5e3,this.querySubscriptionStateRemotely().then((t=>{if(this.Rtt(t)!==F.AMP_VERSION_INITIAL)throw c().createError("The controlling service worker replied to amp-web-push with an unexpected value.");t?(this.setWidgetVisibilities(y,!1),this.setWidgetVisibilities(I,!0),this.setWidgetVisibilities(M,!1)):this.Stt()})),"The controlling service worker does not support amp-web-push.");var t}Stt(){this.setWidgetVisibilities(y,!0),this.setWidgetVisibilities(I,!1),this.setWidgetVisibilities(M,!1)}Ttt(){this.setWidgetVisibilities(y,!1),this.setWidgetVisibilities(I,!1),this.setWidgetVisibilities(M,!0)}subscribe(t){const e=[];return e.push(this.registerServiceWorker()),e.push(new Promise((e=>{if(this.ftt===_)return this.Vtt().then((()=>{e()}));{const i=this.openPopupOrRedirect();this.ktt(i,t),this.wtt=new O({debug:this.ee}),this.wtt.listen([this.ZU["permission-dialog-url"]]),this.onPermissionDialogInteracted().then((t=>this.handlePermissionDialogInteraction(t))).then((()=>{e()}))}}))),Promise.all(e)}ktt(t,e){if(t&&!t.closed){const i=this.ampdoc.win.setInterval((()=>{t.closed&&(e(),this.ampdoc.win.clearInterval(i))}),500)}}handlePermissionDialogInteraction(t){const e=t[0],i=t[1];switch(e){case b:case P:return i({closeFrame:!0}),this.updateWidgetVisibilities();case _:i({closeFrame:!0}),this.Vtt();break;default:throw new Error("Unexpected permission value:",e)}}Vtt(){return this.subscribeForPushRemotely().then((()=>this.updateWidgetVisibilities()))}unsubscribe(){return this.unsubscribeFromPushRemotely().then((()=>this.updateWidgetVisibilities()))}Itt(t){return this.Ptt(O.Topics.NOTIFICATION_PERMISSION_STATE,{isQueryTopicSupported:t})}ytt(t){return this.Ptt(O.Topics.STORAGE_GET,{key:t})}onPermissionDialogInteracted(){return new Promise((t=>{this.wtt.on(O.Topics.NOTIFICATION_PERMISSION_STATE,((e,i)=>{t([e,i])}))}))}static Ott(){const t=Math.floor(Math.min(700,.9*screen.width)),e=Math.floor(Math.min(450,.9*screen.height));return{w:t,h:e,x:Math.floor((screen.width-t)/2),y:Math.floor((screen.height-e)/2)}}openPopupOrRedirect(){const t=-1!==this.ampdoc.win.location.href.indexOf("?")?"&":"?",e=this.ampdoc.win.location.href+t+F.PERMISSION_POPUP_URL_FRAGMENT,i=-1!==this.ZU["permission-dialog-url"].indexOf("?")?"&":"?",s=this.ZU["permission-dialog-url"]+i+`return=${encodeURIComponent(e)}`,r=F.Ott(),n=`height=${r.h},width=${r.w},left=${r.x},top=${r.y},resizable=yes,scrollbars=yes`;return function(t,e,i,s){let r;try{r=t.open(e,i,s)}catch(t){(h.dev||(h.dev=l())).error("DOM","Failed to open url on target: ",i,t)}var n,o;return!r&&("number"!=typeof o&&(o=0),o+"noopener".length>(n=s||"").length||-1===n.indexOf("noopener",o))&&(r=t.open(e,"_top")),r}(this.ampdoc.win,s,"_blank",n)}_tt(){this.ampdoc.win.history.replaceState(null,"",this.removePermissionPopupUrlFragmentFromUrl(this.ampdoc.win.location.href)),this.queryNotificationPermission().then((t=>{switch(t){case b:case P:return this.updateWidgetVisibilities();case _:this.Vtt();break;default:throw new Error("Unexpected permission value",t)}}))}environmentSupportsWebPush(){return this.Ctt()&&this.Utt()}Ctt(){return void 0!==this.ampdoc.win.Notification&&void 0!==this.ampdoc.win.navigator.serviceWorker&&void 0!==this.ampdoc.win.PushManager}Utt(){return"https:"===this.ampdoc.win.location.protocol||"localhost"===this.ampdoc.win.location.hostname||"127.0.0.1"===this.ampdoc.win.location.hostname||!1}},x={HELPER_FRAME_URL:"helper-iframe-url",PERMISSION_DIALOG_URL:"permission-dialog-url",SERVICE_WORKER_URL:"service-worker-url",SERVICE_WORKER_SCOPE:"service-worker-scope"},L=class extends t.BaseElement{constructor(t){super(t)}validate(){this.$tt(),this.Wtt();const t={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,"service-worker-scope":null};for(const s in x){const r=x[s];e=this.element.getAttribute(r)||"service-worker-scope"===r,i=`The ${r} attribute is required for <amp-web-push>`,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,c().assert(e,i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),t[r]=this.element.getAttribute(r)}var e,i;if(!this.Ftt(t["helper-iframe-url"]))throw c().createError("<amp-web-push> must have a valid helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");if(!this.Ftt(t["permission-dialog-url"]))throw c().createError("<amp-web-push> must have a valid permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");if("https:"!==k(t["service-worker-url"]).protocol)throw c().createError("<amp-web-push> must have a valid service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");if(k(t["service-worker-url"]).origin!==k(t["permission-dialog-url"]).origin||k(t["permission-dialog-url"]).origin!==k(t["helper-iframe-url"]).origin)throw c().createError("<amp-web-push> URL attributes service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.")}parseConfig(){const t={};for(const e in x){const i=x[e];t[i]=this.element.getAttribute(i)}return t}buildCallback(){this.validate();const t=this.parseConfig();W(this.element).then((e=>{e.start(t).catch((()=>{}))})),this.registerAction("subscribe",this.xtt.bind(this)),this.registerAction("unsubscribe",this.Ltt.bind(this))}$tt(){if(this.element.getAttribute("id")!==d)throw c().createError("<amp-web-push> must have an id attribute with value '"+d+"'.")}Wtt(){if(this.getAmpDoc().getRootNode().querySelectorAll(`#${r(f)}`).length>1)throw c().createError("Only one <amp-web-push> element may exist on a page.")}xtt(t){const e=t.event.target;this.Ntt(e,!0),W(this.element).then((t=>{t.subscribe((()=>{this.Ntt(e,!1)})).then((()=>{this.Ntt(e,!1)}))}))}Ntt(t,e){t.disabled=e}Ltt(t){const e=t.event.target;this.Ntt(e,!0),W(this.element).then((t=>{t.unsubscribe().then((()=>{this.Ntt(e,!1)}))}))}Ftt(t){try{const e=k(t),i=e.pathname.length>1;return"https:"===e.protocol&&i}catch(t){return!1}}};t.registerServiceForDoc(m,F),t.registerElement(f,L),t.registerElement(w,E,C)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-web-push-0.1.mjs.map