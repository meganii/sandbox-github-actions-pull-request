;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-position-observer",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,n){return(i=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,i){if(i&&("object"===r(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function e(t,i){for(var n=[],r=0,s=0;s<t.length;s++){var e=t[s];i(e,s,t)?n.push(e):(r<s&&(t[r]=e),r++)}return r<t.length&&(t.length=r),n}Array.isArray;var o=Object.prototype;function u(t){return 1==(null==(i=t)?void 0:i.nodeType)?(t=t).tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t;var i}function h(t,i,n,r,s,o,h,f,c,l,a){return function(t,i){var n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(i)return i;t&&-1==s.indexOf(t)&&(s+=t);for(var o=3,h=s.split("%s"),f=h.shift(),c=[f];h.length;){var l=arguments[o++],a=h.shift();f+=u(l)+a,c.push(l,a.trim())}var v=new Error(f);throw v.messageArray=e(c,(function(t){return""!==t})),null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,v),v}("​​​",t,i,n,r,s,o,h,f,c,l,a)}function f(t){return h(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(null!=t?t:""),"Invalid length value: %s",t),t}o.hasOwnProperty,o.toString;var c="inside",l="bottom";function a(t,i,n,r){return{left:t,top:i,width:n,height:r,bottom:i+r,right:t+n,x:t,y:i}}function v(t,i){return t.top<i.top?"top":t.bottom>i.bottom?l:c}function p(t,i){return!(!t||!i)&&t.left==i.left&&t.top==i.top&&t.width==i.width&&t.height==i.height}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d=self.__AMP_LOG;function m(t,i){throw new Error("failed to call initLogConstructor")}function b(t){return d.user||(d.user=y()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(d.user.win,t)?d.userForEmbed||(d.userForEmbed=y()):d.user}function y(t){return m()}function w(t,i,n,r,s,e,o,u,h,f,c){return t}function x(t,i,n,r,s,e,o,u,h,f,c){return b().assert(t,i,n,r,s,e,o,u,h,f,c)}function O(t,i){return g(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function j(t,i){return g(E(R(t)),i)}function R(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,O(i,"ampdoc")).getAmpDoc(t):t;var i,n}function E(t){var i=R(t);return i.isSingleDoc()?i.win:i}function g(t,i){w(F(t,i));var n=S(t)[i];return n.obj||(w(n.ctor),w(n.context),n.obj=new n.ctor(n.context),w(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function S(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function F(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var I=function(t){return j(t,"viewport")},M=function(){function t(t,i,n,r){this.element=i,this.js=r,this.fidelity=n,this.turn=0==n?Math.floor(4*Math.random()):0,this.AF=null,this.Pu=I(t)}var i=t.prototype;return i.Ns=function(t){var i=this.AF;if(!(i&&p(i.positionRect,t.positionRect)&&p(i.viewportRect,t.viewportRect))){w(t.positionRect);var n,r,s=t.positionRect;t.relativePos=v(s,t.viewportRect),n=s,r=t.viewportRect,n.top<=r.bottom&&r.top<=n.bottom&&n.left<=r.right&&r.left<=n.right?(this.AF=t,this.js(t)):this.AF&&(this.AF=null,t.positionRect=null,this.js(t))}},i.update=function(t){var i=this;if(!t){if(0!=this.turn)return void this.turn--;0==this.fidelity&&(this.turn=4)}var n=this.Pu.getSize(),r=a(0,0,n.width,n.height);this.Pu.getClientRectAsync(this.element).then((function(t){i.Ns({positionRect:t,viewportRect:r,relativePos:null})}))},t}(),A=function(){function t(t){var i=this;this.te=t,this.t=t.win,this.xF=[],this.Tu=O(this.t,"vsync"),this.Pu=I(t),this.Aw=[],this.OF=!1,this.FF=!1,this.IF=!1,this._F=function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,u=500-(t.Date.now()-s);u>0?r=t.setTimeout(o,u):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];e=n,r||(r=t.setTimeout(o,500))}}(this.t,(function(){i.OF=!1}))}var i=t.prototype;return i.observe=function(t,i,n){var r=this,s=new M(this.te,t,i,n);return this.xF.push(s),this.IF||this.TF(),s.update(),function(){for(var t=0;t<r.xF.length;t++)if(r.xF[t]==s)return void r.LF(t)}},i.unobserve=function(t){for(var i=0;i<this.xF.length;i++)if(this.xF[i].element==t)return void this.LF(i);(d.dev||(d.dev=m())).error("POSITION_OBSERVER","cannot unobserve unobserved element")},i.LF=function(t){this.xF.splice(t,1),0==this.xF.length&&this.EF()},i.TF=function(){var t=this;this.IF=!0,this.Aw.push(this.Pu.onScroll((function(){t.NF()}))),this.Aw.push(this.Pu.onResize((function(){t.YF()})))},i.EF=function(){for(this.IF=!1;this.Aw.length;)this.Aw.pop()()},i.updateAllEntries=function(t){for(var i=0;i<this.xF.length;i++)this.xF[i].update(t)},i.NF=function(){this._F(),this.OF=!0,this.FF||this.jF()},i.YF=function(){this.updateAllEntries(!0)},i.jF=function(){var t=this;this.updateAllEntries(),this.FF=!0,this.OF?this.Tu.measure((function(){t.jF()})):this.FF=!1},t}();function B(t,i,n,r){var s={detail:n};if(Object.assign(s,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}var P="amp-position-observer",T=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(u,t);var r,e,o=(r=u,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=n(r);if(e){var o=n(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return s(this,t)});function u(t){var i;return(i=o.call(this,t)).Ks=null,i.br=null,i.Pu=null,i.Ee=!1,i.QF=0,i.UF=0,i.WF="0",i.ZF="0",i.iB=0,i.rB=0,i.vr=null,i.sB=null,i.eB=null,i.oB=0,i.uB=0,i.hB=!1,i.fB=!1,i}var p=u.prototype;return p.buildCallback=function(){this.getAmpDoc().whenFirstVisible().then(this.zo.bind(this)),this.hB=this.element.hasAttribute("once")},p.zo=function(){var t,i,n,r=this;this.jk(),this.Ks=(t=this.element,i="action",F(n=E(R(t)),i)?g(n,i):null),this.Pu=I(this.element),this.cB(),this.getAmpDoc().whenReady().then((function(){var t=r.lB();r.br.observe(t,1,r.aB.bind(r))}))},p.vB=function(){var t="enter",i=B(this.win,"".concat(P,".").concat(t),{});this.Ks.trigger(this.element,t,i,1)},p.pB=function(){var t="exit",i=B(this.win,"".concat(P,".").concat(t),{});this.Ks.trigger(this.element,t,i,1)},p.dB=function(){var t=this.Pu.getScrollTop(),i={"start-scroll-offset":t,"end-scroll-offset":t+this.uB,"initial-inview-percent":this.oB},n="scroll",r=B(this.win,"".concat(P,".").concat(n),{"percent":this.oB,"positionObserverData":i});this.Ks.trigger(this.element,n,r,1)},p.aB=function(t){if(!this.hB||!this.fB){var i=this.Ee,n=this.vr&&this.vr.height;this.mB(t),this.vr=t.viewportRect,n!=t.viewportRect.height&&this.bB();var r,s=this.yB(t.viewportRect),e=t.positionRect;e?(r=v(e,s),this.nl(e,s,r)):(this.Ee=!1,r=t.relativePos),i&&!this.Ee&&(this.oB=r==l?0:1,this.dB(),this.pB(),this.fB=!0),!i&&this.Ee&&this.vB(),this.Ee&&(this.wB(e,s),this.dB())}},p.nl=function(t,i,n){if(n!=c){var r="top"==n?this.QF:this.UF,s=t.height*r;this.Ee=n==l?t.top<=i.bottom-s:t.bottom>=i.top+s}else this.Ee=!0},p.wB=function(t,i){if(t){var n=t.height*this.UF+t.height*this.QF,r=i.height+t.height-n,s=Math.abs(t.top-this.iB-(i.height-t.height*this.UF));this.oB=s/r,this.uB=r-s}},p.jk=function(){var t=this.element.getAttribute("intersection-ratios");if(t){var i=t.trim().split(" ");this.QF=this.xB(i[0]),this.UF=this.QF,i[1]&&(this.UF=this.xB(i[1]))}var n=this.element.getAttribute("viewport-margins");if(n){var r=n.trim().split(" ");this.WF=r[0],this.ZF=this.WF,r[1]&&(this.ZF=r[1])}this.sB=this.element.getAttribute("target")},p.lB=function(){var t;return t=this.sB?b().assertElement(this.win.document.getElementById(this.sB),"No element found with id:"+this.sB):this.element.parentNode,this.win.document.body===t&&(t=this.win.document.documentElement),t},p.OB=function(t){var i,n,r,s=function(t){f(t);var i=/[a-z]+/i.exec(null!=t?t:"");return h(i,"Failed to read units from %s",t),i[0]}(t=f("number"==typeof(i=t)?i+"px":i&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(i)?/^\d+(\.\d+)?$/.test(i)?i+"px":i:void 0)),e="number"==typeof(n=r=parseFloat(t))&&isFinite(n)?r:void 0;return e?(x("px"==s||"vh"==s,"Only pixel or vh are valid as units for exclusion margins: "+t),"vh"==s&&(e=e/100*this.vr.height),e):0},p.xB=function(t){var i=parseFloat(t);return x(i>=0&&i<=1,"Ratios must be a decimal between 0 and 1: "+t),i},p.bB=function(){w(this.vr),w(this.ZF),w(this.WF),this.iB=this.OB(this.WF),this.rB=this.OB(this.ZF)},p.yB=function(t){return w(t),a(t.left,t.top+this.iB,t.width,t.height-this.rB-this.iB)},p.mB=function(t){this.eB||(this.eB=t.viewportRect.height);var i=this.eB-t.viewportRect.height,n=0;Math.abs(i)<150?n=i:this.eB=null,t.viewportRect=a(t.viewportRect.left,t.viewportRect.top,t.viewportRect.width,t.viewportRect.height+n)},p.cB=function(){var t,i,n,r;this.br||(t=this.getAmpDoc(),i="position-observer",n=A,function(t,i,n,r,s,e){var o=S(t),u=o[n];u||(u=o[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),u.ctor||(u.ctor=r,u.context=i,u.sharedInstance=!1,u.resolve&&g(t,n))}(E(r=R(t)),r,i,n),this.br=j(this.element,"position-observer"))},p.jB=function(){if(this.br){var t=this.lB();this.br.unobserve(t),this.br=null}},u}(t.BaseElement);t.registerElement(P,T)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-position-observer-0.1.js.map