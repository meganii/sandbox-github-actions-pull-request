;
!function(){var n=Array.isArray;function t(n,t){for(var r=[],i=0,e=0;e<n.length;e++){var o=n[e];t(o,e,n)?r.push(o):(i<e&&(n[i]=o),i++)}return i<n.length&&(n.length=i),r}function r(n){return"string"==typeof n}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}function e(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o=Object.prototype;function u(n){var t=Object.create(null);return n&&Object.assign(t,n),t}function f(n){return 1==(null==n?void 0:n.nodeType)}o.hasOwnProperty,o.toString;var s="​​​";function a(n){return f(n)?(n=n).tagName.toLowerCase()+(n.id?"#".concat(n.id):""):n}function c(n){return n.indexOf(s)>=0}function l(n,r){var i,e,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(r)return r;n&&-1==o.indexOf(n)&&(o+=n);for(var u=3,f=o.split("%s"),s=f.shift(),c=[s];f.length;){var l=arguments[u++],h=f.shift();s+=a(l)+h,c.push(l,h.trim())}var v=new Error(s);throw v.messageArray=t(c,(function(n){return""!==n})),null===(i=(e=self).__AMP_REPORT_ERROR)||void 0===i||i.call(e,v),v}function h(t,r,i,e,o){return n(o)?t(i,o.concat([r])):t(i,"".concat(o||e,": %s"),r),r}function v(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function d(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,i=n.stack,e=new Error(r);for(var o in n)e[o]=n[o];return e.stack=i,e}function m(n){for(var t,r=null,i="",o=e(arguments,!0);!(t=o()).done;){var u=t.value;u instanceof Error&&!r?r=d(u):(i&&(i+=" "),i+=u)}return r?i&&(r.message=i+": "+r.message):r=new Error(i),r}function p(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}function g(n){var t=m.apply(null,arguments);return t.expected=!0,t}function b(n){var t=!1,r=null,i=n;return function(){if(!t){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];r=i.apply(self,e),t=!0,i=null}return r}}var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return t}}function x(n){var t=(n||self).location;return function(n){var t,r=u();if(!n)return r;for(;t=y.exec(n);){var i=w(t[1],t[1]),e=t[2]?w(t[2].replace(/\+/g," "),t[2]):"";r[i]=e}return r}(t.originalHash||t.hash)}var A=function(n){return self.AMP_CONFIG?self.AMP_CONFIG[n]:null},S=("string"==typeof A("cdnProxyRegex")?new RegExp(A("cdnProxyRegex")):A("cdnProxyRegex"))||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function M(n){if(!self.document||!self.document.head)return null;if(self.location&&S.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}var E=A("cdnUrl")||M("runtime-host")||"https://cdn.ampproject.org",I=A("errorReportingUrl")||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",O=A("betaErrorReportingUrl")||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",R="";function j(n){var t=n||self;return t.__AMP_MODE?t.__AMP_MODE:t.__AMP_MODE=function(n){return{localDev:!1,development:P(n,x(n)),esm:!1,test:!1,rtvVersion:N(n),ssrReady:!1}}(t)}function N(n){var t;return R||(R=(null===(t=n.AMP_CONFIG)||void 0===t?void 0:t.v)||"01".concat("2301041800000")),R}function P(n,t){var r=t||x(n);return["1","actions","amp","amp4ads","amp4email"].includes(r.development)||!!n.AMP_DEV_MODE}var U=function(){},k=function(){return"01".concat("2301041800000")},z=function(n,t){return t.reduce((function(n,t){return"".concat(n,"&s[]=").concat(J(t))}),"https://log.amp.dev/?v=".concat(k(),"&id=").concat(encodeURIComponent(n)))},C=function(){return"".concat(E,"/rtv/").concat(k(),"/log-messages.simple.json")},J=function(n){return encodeURIComponent(String(a(n)))},T=function(n){return parseInt(x(n).log,10)},L=function(){function t(n,t){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.win=n,this.xt=t,this.At=this.kt(),this.Et=i,this.St=null,this.zt=b((function(){n.fetch(C()).then((function(n){return n.json()}),U).then((function(n){n&&(r.St=n)}))})),this.It=this.assert.bind(this)}var i=t.prototype;return i.kt=function(){var n,t=this.win;return null!==(n=t.console)&&void 0!==n&&n.log&&0!=T(t)?this.Ct():0},i.Ct=function(n){return this.xt(T(n),j().development)},i.qt=function(n,t,i){var e,o;if(t>this.At)return!1;var u=this.win.console,f=null!==(e=(o={},v(o,1,u.error),v(o,3,u.info),v(o,2,u.warn),o)[t])&&void 0!==e?e:u.log,s=this.Rt(i),a="[".concat(n,"]");return r(s[0])?s[0]=a+" "+s[0]:s.unshift(a),f.apply(u,s),!0},i.fine=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.qt(n,4,r)},i.info=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.qt(n,3,r)},i.warn=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.qt(n,2,r)},i.error=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(!this.qt(n,1,r)){var e,o,u=this.createError.apply(this,r);u.name=n||u.name,null===(e=(o=self).__AMP_REPORT_ERROR)||void 0===e||e.call(o,u)}},i.expectedError=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var e,o;this.qt(n,1,r)||null===(e=(o=self).__AMP_REPORT_ERROR)||void 0===e||e.call(o,this.createExpectedError.apply(this,r))},i.createError=function(n){return this.Pt(m.apply(null,arguments))},i.createExpectedError=function(n){return this.Pt(g.apply(null,arguments))},i.Pt=function(n){return n=d(n),this.Et?n.message?-1==n.message.indexOf(this.Et)&&(n.message+=this.Et):n.message=this.Et:c(n.message)&&(n.message=n.message.replace(s,"")),n},i.Rt=function(t){return n(t[0])?this.Ut(t[0]):t},i.Ut=function(n){var t,r=n.shift();return j(this.win).development&&this.zt(),null!==(t=this.St)&&void 0!==t&&t[r]?[this.St[r]].concat(n):["More info at ".concat(z(r,n))]},i.assert=function(t,r,i){return n(r)?this.assert.apply(this,[t].concat(this.Ut(r))):l.apply(null,[this.Et].concat(Array.prototype.slice.call(arguments)))},i.assertElement=function(n,t){return function(n,t,r){return h(n,t,f(t),"Element expected",r)}(this.It,n,t)},i.assertString=function(n,t){return function(n,t,i){return h(n,t,r(t),"String expected",i)}(this.It,n,t)},i.assertNumber=function(n,t){return function(n,t,r){return h(n,t,"number"==typeof t,"Number expected",r)}(this.It,n,t)},i.assertArray=function(t,r){return function(t,r,i){return h(t,r,n(r),"Array expected",i)}(this.It,t,r)},i.assertBoolean=function(n,t){return function(n,t,r){return h(n,t,!!t===t,"Boolean expected",r)}(this.It,n,t)},t}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var _=self.__AMP_LOG,F=null;function q(n,t){if(!F)throw new Error("failed to call initLogConstructor");return new F(self,n,t)}function D(n){return _.user||(_.user=G(s)),function(n,t){return t&&t.ownerDocument.defaultView!=n}(_.user.win,n)?_.userForEmbed||(_.userForEmbed=G("​​​​")):_.user}function G(n){return q((function(n,t){return t||n>=1?4:2}),n)}function H(){return _.dev||(_.dev=q((function(n){return n>=3?4:n>=2?3:0})))}function W(n,t,r,i,e,o,u,f,s,a,c){return n}function Z(n){return n.data}var $,B="amp-",K="send-positions";function V(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,e=r;return e.type=n,e.sentinel=t,B+(i||"")+JSON.stringify(e)}function X(n,t,r,i){return{left:n,top:t,width:r,height:i,bottom:t+i,right:n+r,x:n,y:t}}function Q(n){return X(Number(n.left),Number(n.top),Number(n.width),Number(n.height))}var Y=["Webkit","webkit","Moz","moz","ms","O","o"];function nn(n){var t=n.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()}));return Y.some((function(n){return t.startsWith(n+"-")}))?"-".concat(t):t}function tn(n,t,r){if(t.startsWith("--"))return t;$||($=u());var i=$[t];if(!i||r){if(i=t,void 0===n[t]){var e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var r=0;r<Y.length;r++){var i=Y[r]+t;if(void 0!==n[i])return i}return""}(n,e);void 0!==n[o]&&(i=o)}r||($[t]=i)}return i}function rn(n,t,r,i,e){var o=tn(n.style,t,e);if(o){var u=i?r+i:r;n.style.setProperty(nn(o),u)}}function en(n,t){for(var r in t)rn(n,r,t[r])}function on(n){return"".concat(n,"px")}function un(n,t){return"number"==typeof n?t(n):n}function fn(n,t){for(var r=0;r<t.length;r++)rn(n,t[r],null)}function sn(n,t,r){n.requestAnimationFrame((function(){t.measure&&t.measure(r),t.mutate&&t.mutate(r)}))}var an,cn=function(){function n(n){this.t=n,this.ur=!1,this.sr=!1,this.ar=null,this.cr()}var t=n.prototype;return t.cr=function(){var n=this;this.t.addEventListener("resize",(function(){return n.onWindowResize()}))},t.onWindowResize=function(){this.ur&&(this.sr=!0)},t.expandFrame=function(n,t){var r=this;!function(n,t,r){sn(n,{measure:function(r){r.viewportSize={width:n.innerWidth,height:n.innerHeight},r.rect=Q(t.getBoundingClientRect())},mutate:function(i){var e,o=i.viewportSize,u=o.height,f=X(0,0,o.width,u);!function(n,t,r,i){var e,o,u=on(r.width/2-t.width/2-t.left),f=on(r.height/2-t.height/2-t.top);en(n,{"position":"fixed","top":on(t.top),"right":on(r.width-(t.left+t.width)),"left":on(t.left),"bottom":on(r.height-(t.top+t.height)),"height":on(t.height),"width":on(t.width),"transition":"transform ".concat(150,"ms ease"),"transform":(e=u,o=f,null==o?"translate(".concat(un(e,on),")"):"translate(".concat(un(e,on),", ").concat(un(o,on),")")),"margin":0})}(t,i.rect,i.viewportSize),function(n,t){var r=n.style;for(var i in t)r.setProperty(nn(tn(r,i)),String(t[i]),"important")}(t,{"pointer-events":"none"}),e=function(){sn(n,{mutate:function(){fn(t,["pointer-events"]),function(n){en(n,{"position":"fixed","z-index":1e3,"left":0,"right":0,"top":0,"bottom":0,"width":"100vw","height":"100vh","transition":null,"transform":null,"margin":0,"border":0})}(t),r(i.rect,f)}})},setTimeout(e,200)}},{})}(this.t,n,(function(n,i){r.ur=!0,r.sr=!1,r.ar=n,t(i)}))},t.collapseFrame=function(n,t){var r=this;!function(n,i,e,o){sn(n,{mutate:function(){!function(n){fn(n,["position","z-index","left","right","top","bottom","width","height","margin","border"])}(i),r.ur=!1,r.sr||t(r.ar),sn(n,{measure:function(){var n;n=Q(i.getBoundingClientRect()),r.ar=n,r.sr&&t(r.ar)}})}})}(this.t,n)},n}(),ln=function(){function n(){this.Nt=null}var t=n.prototype;return t.add=function(n){var t=this;return this.Nt||(this.Nt=[]),this.Nt.push(n),function(){t.remove(n)}},t.remove=function(n){var t,r,i;this.Nt&&(r=n,-1!=(i=(t=this.Nt).indexOf(r))&&t.splice(i,1))},t.removeAll=function(){this.Nt&&(this.Nt.length=0)},t.fire=function(n){if(this.Nt)for(var t,r=e(this.Nt.slice(),!0);!(t=r()).done;)(0,t.value)(n)},t.getHandlerCount=function(){var n,t;return null!==(n=null===(t=this.Nt)||void 0===t?void 0:t.length)&&void 0!==n?n:0},n}(),hn=function(){function n(n){this.t=n,this.lr=null,this.hr=function(n){var t,r=n.document;return r.scrollingElement?r.scrollingElement:r.body&&(t=n.navigator.userAgent,/WebKit/i.test(t)&&!/Edge/i.test(t))?r.body:r.documentElement}(this.t),this.vr=null}var t=n.prototype;return t.observe=function(n,t){var r=this;if(!this.lr){this.lr=new ln;var i=function(n,t,r){var i=0,e=null;function o(r){e=null,i=n.setTimeout(u,100),t.apply(null,r)}function u(){i=0,e&&o(e)}return function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];i?e=t:o(t)}}(this.t,(function(){r.gn(),r.lr.fire()}));this.gn(),this.t.addEventListener("scroll",i,!0),this.t.addEventListener("resize",i,!0)}return t(this.dr(n)),this.lr.add((function(){t(r.dr(n))}))},t.gn=function(){this.vr=this.getViewportRect()},t.dr=function(n){return{"viewportRect":this.vr,"targetRect":this.getTargetRect(n)}},t.getViewportRect=function(){var n=this.hr,t=this.t,r=n.scrollLeft||t.pageXOffset,i=n.scrollTop||t.pageYOffset;return X(Math.round(r),Math.round(i),t.innerWidth,t.innerHeight)},t.getTargetRect=function(n){for(var t,r,i,e=Q(n.getBoundingClientRect()),o=0,u=n.ownerDocument.defaultView;o<10&&u&&u!=this.t&&u!=this.t.top;o++,u=u.parent){var f=Q(u.frameElement.getBoundingClientRect());t=e,r=f.left,i=f.top,e=0==r&&0==i||0==t.width&&0==t.height?t:X(t.left+r,t.top+i,t.width,t.height)}return e},n}(),vn=function(){function n(n){this.Lt=n,this.Wt=0,this.Kt=0,this.Qt=u()}var t=n.prototype;return t.has=function(n){return!!this.Qt[n]},t.get=function(n){var t=this.Qt[n];if(t)return t.access=++this.Kt,t.payload},t.put=function(n,t){this.has(n)||this.Wt++,this.Qt[n]={payload:t,access:this.Kt},this.Xt()},t.Xt=function(){if(!(this.Wt<=this.Lt)){var n,t=this.Qt,r=this.Kt+1;for(var i in t){var e=t[i].access;e<r&&(r=e,n=i)}void 0!==n&&(delete t[n],this.Wt--)}},n}();function dn(n,t){return pn(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function mn(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,dn(t,"ampdoc")).getAmpDoc(n):n;var t,r}function pn(n,t){W(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(W(r.ctor),W(r.context),r.obj=new r.ctor(r.context),W(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}var gn,bn,yn=(new Set(["c","v","a","ad"]),function(n){return"string"==typeof n?function(n,t){return gn||(gn=self.document.createElement("a"),bn=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new vn(100))),function(n,t,r){if(r&&r.has(t))return r.get(t);n.href=t,n.protocol||(n.href=n.href);var i,e={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),i=n.origin&&"null"!=n.origin?n.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=i;var o=e;return r&&r.put(t,o),o}(gn,n,bn)}(n):n});function wn(n){try{return!!n.location.href&&(n.test||!0)}catch(n){return!1}}var xn="InaboxMessagingHost",An=[K],Sn=function(){function n(){this.mr={}}var t=n.prototype;return t.listen=function(n,t){n in this.mr&&H().fine(xn,"Overriding message callback [".concat(n,"]")),this.mr[n]=t},t.fire=function(n,t,r){return n in this.mr&&this.mr[n].apply(t,r)},n}(),Mn=function(){function n(n,t){var r=wn(n.top)?n.top:n;this.pr=t,this.gr=Object.create(null),this.br=function(n){return n.ampInaboxPositionObserver=n.ampInaboxPositionObserver||new hn(n),n.ampInaboxPositionObserver}(r),this.yr=new Sn,this.wr=function(n){return n.ampInaboxFrameOverlayManager=n.ampInaboxFrameOverlayManager||new cn(n),n.ampInaboxFrameOverlayManager}(r),this.yr.listen(K,this.Ar),this.yr.listen("full-overlay-frame",this.Sr),this.yr.listen("cancel-full-overlay-frame",this.Mr)}var t=n.prototype;return t.processMessage=function(n){var t=function(n){if(!function(n){return"string"==typeof n&&n.startsWith(B)&&-1!=n.indexOf("{")}(n))return null;var t=n.indexOf("{");return function(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}(n.substr(t),(function(t){!function(n){var t=m.apply(null,arguments);setTimeout((function(){throw p(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(t.message)))}))}(Z(n));if(!t||!t.sentinel)return H().fine(xn,"Ignored non-AMP message:",n),!1;var r=this.Er(n.source,t.sentinel);if(!r)return H().info(xn,"Ignored message from untrusted iframe:",n),!1;var i=r.iframe.dataset.ampAllowed;return-1===(i?i.split(/\s*,\s*/):An).indexOf(t.type)?(H().info(xn,"Message type ignored:",n),!1):!!this.yr.fire(t.type,this,[r.measurableFrame,t,n.source,n.origin])||(H().warn(xn,"Unprocessed AMP message:",n),!1)},t.Ar=function(n,t,r,i){var e=this,o=this.br.getViewportRect(),u=this.br.getTargetRect(n);return this.Ir(t,r,{"viewportRect":o,"targetRect":u}),W(this.gr[t.sentinel]),this.gr[t.sentinel].observeUnregisterFn=this.gr[t.sentinel].observeUnregisterFn||this.br.observe(n,(function(n){return e.Ir(t,r,n)})),!0},t.Ir=function(n,t,r){H().fine(xn,"Sent position data to [%s] %s",n.sentinel,r),t.postMessage(V("position",n.sentinel,r),"*")},t.Sr=function(n,t,r,i){return this.wr.expandFrame(n,(function(n){r.postMessage(V("full-overlay-frame-response",t.sentinel,{"success":!0,"boxRect":n}),i)})),!0},t.Mr=function(n,t,r,i){return this.wr.collapseFrame(n,(function(n){r.postMessage(V("cancel-full-overlay-frame-response",t.sentinel,{"success":!0,"boxRect":n}),i)})),!0},t.Er=function(n,t){if(this.gr[t])return this.gr[t];var r=this.getMeasureableFrame(n);if(!r)return null;for(var i=r.contentWindow,e=0;e<this.pr.length;e++)for(var o=this.pr[e],u=0,f=i;u<10;u++,f=f.parent){if(o.contentWindow==f)return this.gr[t]={iframe:o,measurableFrame:r},this.gr[t];if(f==window.top)break}return null},t.getMeasureableFrame=function(n){if(!n)return null;for(var t,r=0,i=n;r<10&&i!=i.top&&!wn(i);r++,t=i,i=i.parent);if(t)for(var e=t.parent.document.querySelectorAll("iframe"),o=0,u=e[o];o<e.length;u=e[++o])if(u.contentWindow==t)return u;return n.frameElement},t.unregisterIframe=function(n){var t=this.pr.indexOf(n);for(var r in-1!=t&&this.pr.splice(t,1),this.gr)this.gr[r].iframe==n&&(this.gr[r].observeUnregisterFn&&this.gr[r].observeUnregisterFn(),delete this.gr[r])},n}(),En=!1,In=self.__AMP_ERRORS||[];self.__AMP_ERRORS=In;var On=function(n){return(t=0,r=function(){var n=Math.pow(1.5,t++);return 1e3*(n+function(n,t){var r=n*(t=t||.3)*Math.random();return Math.random()>.5&&(r*=-1),r}(n))},On=function(n){return setTimeout(n,r())})(n);var t,r};function Rn(n,t){try{if(n)if(void 0!==n.message)n=d(n);else{var r=n;(n=new Error(function(n){try{return JSON.stringify(n)}catch(t){return String(n)}}(r))).origError=r}else n=new Error("Unknown error");if(n.reported)return n;if(n.reported=!0,n.messageArray){var i=function(n,t){for(var r=0;r<n.length;r++)if(null==(i=n[r])?void 0:i.tagName)return r;var i;return-1}(n.messageArray);i>-1&&(n.associatedElement=n.messageArray[i])}var e=t||n.associatedElement;if(e&&e.classList&&(e.classList.add("i-amphtml-error"),j().development&&(e.classList.add("i-amphtml-element-error"),e.setAttribute("error-message",n.message))),self.console&&(c(n.message)||!n.expected)){var o=console.error||console.log;n.messageArray?o.apply(console,n.messageArray):e?o.call(console,n.message,e):o.call(console,n.message)}e&&e.dispatchCustomEventForTesting&&e.dispatchCustomEventForTesting("amp:error",n.message),jn.call(self,void 0,void 0,void 0,void 0,n)}catch(n){setTimeout((function(){throw n}))}return n}function jn(n,t,r,i,e){var o,u=this;if(!this||!this.document||e&&e.expected||(W((o=this.document).defaultView),En||(En=!0,function(n){en(n.body,{opacity:1,visibility:"visible","animation":"none"})}(o))),!j().development){var f=!1;try{f=function(n){if(!n.document)return!1;for(var t=n.document.querySelectorAll("script[src]"),r=0;r<t.length;r++)if(i=t[r].src.toLowerCase(),!S.test(yn(i).origin))return!0;var i;return!1}(self)}catch(n){}if(!(f&&Math.random()>.01)){var a=function(n,t,r,i,e,o){n=function(n,t){return t&&(n=t.message?t.message:String(t)),n||(n="Unknown error"),n}(n,e);var u=!(!e||!e.expected);if(!/_reported_/.test(n)&&"CANCELLED"!=n){var f=!(self&&self.window),a=Math.random();if(!((function(n){return-1!=n.indexOf("Failed to load:")}(n)||"Script error."==n||f)&&(u=!0,a>.001))){var l=c(n);if(!(l&&a>.1)){var h=Object.create(null);h.v=j().rtvVersion,h.noAmp=o?"1":"0",h.m=n.replace(s,""),h.a=l?"1":"0",h.ex=u?"1":"0",h.dw=f?"1":"0";var v,d,m="1p";if(self.context&&self.context.location?(h["3p"]="1",m="3p"):j().runtime&&(m=j().runtime),h.rt=m,"inabox"===m&&(h.adid=j().a4aId),h.ca=null!==(d=self.AMP_CONFIG)&&void 0!==d&&d.canary?"1":"0",h.bt=(null===(v=self.AMP_CONFIG)||void 0===v?void 0:v.type)||"unknown",self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(h.or=self.location.ancestorOrigins[0]),self.viewerState&&(h.vs=self.viewerState),self.parent&&self.parent!=self&&(h.iem="1"),self.AMP&&self.AMP.viewer){var p=self.AMP.viewer.getResolvedViewerUrl(),g=self.AMP.viewer.maybeGetMessagingOrigin();p&&(h.rvu=p),g&&(h.mso=g)}var b,y,w,x=[],A=self.__AMP__EXPERIMENT_TOGGLES||null;for(var S in A){var M=A[S];x.push("".concat(S,"=").concat(M?"1":"0"))}return h.exps=x.join(","),e?(h.el=(null===(b=e.associatedElement)||void 0===b?void 0:b.tagName)||"u",e.args&&(h.args=JSON.stringify(e.args)),l||e.ignoreStack||!e.stack||(h.s=e.stack),e.message&&(e.message+=" _reported_")):(h.f=t||"",h.l=r||"",h.c=i||""),h.r=self.document?self.document.referrer:"",h.ae=In.join(","),h.fr=self.location.originalHash||self.location.hash,"production"===h.bt&&(h.pt="1"),w=n,(y=In).length>=25&&y.splice(0,y.length-25+1),y.push(w),h}}}}(n,t,r,i,e,f);a&&On((function(){try{return function(n,t){return t.pt&&Math.random()<.9?an||(an=Promise.resolve(void 0)):function(n,t){var r=function(n){return dn(n,"ampdoc")}(n);if(!r.isSingleDoc())return Promise.resolve(!1);var i=r.getSingleDoc();if(!i.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var e,o,u,f=(e="viewer",pn((o=mn(i),(u=mn(o)).isSingleDoc()?u.win:u),e));return f.hasCapability("errorReporter")?f.isTrustedViewer().then((function(n){return!!n&&(f.sendMessage("error",{"m":(r=t).m,"a":r.a,"s":r.s,"el":r.el,"ex":r.ex,"v":r.v,"pt":r.pt}),!0);var r})):Promise.resolve(!1)}(n,t).then((function(n){if(!n){var r=new XMLHttpRequest;r.open("POST",Math.random()<.1?O:I,!0),r.send(JSON.stringify(t))}}))}(u,a).catch((function(){}))}catch(n){}}))}}}var Nn="inabox-host",Pn="ampInaboxPendingMessages",Un="ampInaboxIframes";new function(n){if(n.ampInaboxInitialized)H().info(Nn,"Skip a 2nd attempt of initializing AMP inabox host.");else{var t;n.ampInaboxInitialized=!0,F=L,H(),D(),t=Rn,self.__AMP_REPORT_ERROR=t,n[Un]&&!Array.isArray(n[Un])&&(H().info(Nn,"Invalid %s. %s",Un,n[Un]),n[Un]=[]);var r=new Mn(n,n[Un]);n.AMP=n.AMP||{},n.AMP.inaboxUnregisterIframe?H().info(Nn,"win.AMP[".concat("inaboxUnregisterIframe","] already defined}")):n.AMP.inaboxUnregisterIframe=r.unregisterIframe.bind(r);var i=n[Pn],e=function(n){try{r.processMessage(n)}catch(t){H().error(Nn,"Error processing inabox message",n,t)}};i&&(Array.isArray(i)?i.forEach((function(n){(function(n){var t=!(!n.source||!n.source.postMessage);return t||D().warn(Nn,"Ignoring an inabox message. Likely the requester iframe has been removed. message.data="+JSON.stringify(Z(n))),t})(n)&&e(n)})):H().info(Nn,"Invalid %s %s",Pn,i)),n[Pn]=[],n[Pn].push=function(){},n.addEventListener("message",e.bind(r))}}(self)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=amp4ads-host-v0.js.map