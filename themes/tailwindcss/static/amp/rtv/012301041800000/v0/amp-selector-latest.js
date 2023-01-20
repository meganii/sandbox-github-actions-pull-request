;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-selector",ev:"0.1",l:!0,f:function(t,e){!function(){var e;function i(){return e||(e=Promise.resolve(void 0))}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return t?Array.prototype.slice.call(t):[]}function c(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}Array.isArray;var a=Object.prototype,h=(a.hasOwnProperty,a.toString,1),l="Enter",f="ArrowLeft",d="ArrowUp",v="ArrowRight",p="ArrowDown",b="Home",m="End";function y(t){return"rtl"==(t.body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function g(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}function k(t,e,i,n,r,o,s,u,c,a,h){return t}function j(t,e,i,n,r,o,s,u,c,a,h){return(w.user||(w.user=g()),void w.user.win?w.userForEmbed||(w.userForEmbed=g()):w.user).assert(t,e,i,n,r,o,s,u,c,a,h)}function O(t){return t.nodeType?(i=t,e=(i.ownerDocument||i).defaultView,function(t,e){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(e)).getAmpDoc(t):t;var e,i}function x(t,e){k(E(t,e));var i=function(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return i.obj||(k(i.ctor),k(i.context),i.obj=new i.ctor(i.context),k(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function E(t,e){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!i||!i.ctor)}var R="amp-selector",A="none",S="select",U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(w,t);var e,o,a=(e=w,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=r(e);if(o){var n=r(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return s(this,t)});function w(t){var e;return(e=a.call(this,t)).KG=!1,e.QG=[],e.oi=[],e.VG=[],e.Ks=null,e.WG=0,e.YG=A,e}w.prerenderAllowed=function(){return!0};var g=w.prototype;return g.isLayoutSupported=function(){return!0},g.buildCallback=function(){var t,e,i,n,r,o=this;this.Ks=(t=this.element,e="action",i=O(t),E(r=(n=O(i)).isSingleDoc()?n.win:n,e)?x(r,e):null),this.KG=this.element.hasAttribute("multiple"),this.element.hasAttribute("role")||this.element.setAttribute("role","listbox"),this.KG&&this.element.setAttribute("aria-multiselectable","true"),this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var s,u=this.element.getAttribute("keyboard-select-mode");u?(j("none"===(s=u=u.toLowerCase())||"focus"===s||"select"===s,"Unknown keyboard-select-mode: ".concat(u)),j(!(this.KG&&u==S),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):u=A,this.YG=u,this.registerAction("clear",this.ZG.bind(this)),this.zo(),this.element.addEventListener("click",this.tK.bind(this)),this.element.addEventListener("keydown",this.KJ.bind(this)),this.registerAction("selectUp",(function(t){var e=t.args,i=t.trust,n=e&&void 0!==e.delta?-e.delta:-1;o.eK(n,i)}),h),this.registerAction("selectDown",(function(t){var e=t.args,i=t.trust,n=e&&void 0!==e.delta?e.delta:1;o.eK(n,i)}),h),this.registerAction("toggle",(function(t){var e=t.args,i=t.trust;return j(e.index>=0,"'index' must be greater than 0"),j(e.index<o.oi.length,"'index' must be less than the length of options in the <amp-selector>"),e&&void 0!==e.index?o.XF(e.index,e.value,i):Promise.reject("'index' must be specified")}),h),this.Ks.addToAllowlist(R,["clear","selectDown","selectUp","toggle"],["email"]),this.element.addEventListener("amp:dom-update",this.iK.bind(this))},g.mutatedAttributesCallback=function(t){var e=t.selected;void 0!==e&&this.nK(e);var i=t.disabled;void 0!==i&&(i?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))},g.nK=function(t){var e=Array.isArray(t)?t:[t];if(null!==t&&0!=e.length){if(this.KG||(e=e.slice(0,1)),!c(this.rK().sort(),e.sort())){for(var i=e.reduce((function(t,e){return t[e]=!0,t}),Object.create(null)),n=0;n<this.oi.length;n++){var r=this.oi[n];i[r.getAttribute("option")]?this.oK(r):this.sK(r)}this.uK(),this.cK()}}else this.ZG()},g.uK=function(t){if(this.YG!=A){this.oi.forEach((function(t){t.tabIndex=-1}));var e=t;e||(e=this.KG?this.oi[0]:this.QG[0]||this.oi[0]),e&&(this.WG=this.oi.indexOf(e),e.tabIndex=0)}},g.iK=function(t){var e=u(this.element.querySelectorAll("[option]"));c(this.oi,e)||this.zo(e)},g.zo=function(t){var e=this;this.QG.length=0;var i=t||u(this.element.querySelectorAll("[option]"));i.forEach((function(t){t.hasAttribute("role")||t.setAttribute("role","option"),t.hasAttribute("disabled")&&t.setAttribute("aria-disabled","true"),t.hasAttribute("selected")?e.oK(t):e.sK(t),t.tabIndex=0})),this.oi=i,this.uK(),this.cK()},g.cK=function(){var t=this,e=[],i=this.element.getAttribute("name");if(!i||this.element.hasAttribute("disabled"))return e;var n=this.element.getAttribute("form");this.VG.forEach((function(e){t.element.removeChild(e)})),this.VG=[];var r=this.win.document,o=r.createDocumentFragment();return this.QG.forEach((function(s){if(!s.hasAttribute("disabled")){var u=r.createElement("input"),c=s.getAttribute("option");u.setAttribute("type","hidden"),u.setAttribute("name",i),u.setAttribute("value",c),n&&u.setAttribute("form",n),t.VG.push(u),o.appendChild(u),e.push(c)}})),this.element.appendChild(o),e},g.aK=function(t){var e=this;t.hasAttribute("disabled")||this.mutateElement((function(){t.hasAttribute("selected")?e.KG&&(e.sK(t),e.cK()):(e.oK(t),e.cK()),e.uK(t),e.hK(t,3)}))},g.rK=function(){return this.QG.map((function(t){return t.getAttribute("option")}))},g.tK=function(t){if(!this.element.hasAttribute("disabled")){var e,i=t.target;i&&(i.hasAttribute("option")||("[option]",i=(e=i).closest?e.closest("[option]"):function(t,e,i){var n;for(n=t;n&&void 0!==n;n=n.parentElement)if(e(n))return n;return null}(e,(function(t){return function(t,e){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!i&&i.call(t,"[option]")}(t)}))),i&&this.aK(i))}},g.XF=function(t,e,n){var r=this,o=this.oi[t],s=o.hasAttribute("selected"),u=void 0!==e?e:!s,c=this.oi.indexOf(this.QG[0]);return u===s?i():this.mutateElement((function(){if(c!==t){r.oK(o);var e=r.oi[c];e&&r.sK(e)}else r.sK(o);r.hK(o,n)}))},g.hK=function(t,e){var i="select",n=function(t,e,i,n){var r={detail:i};if(Object.assign(r,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(e,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(e,!!r.bubbles,!!r.cancelable,i),o}(this.win,"amp-selector.".concat(i),{"targetOption":t.getAttribute("option"),"selectedOptions":this.rK()});this.Ks.trigger(this.element,i,n,e)},g.eK=function(t,e){var i,n,r=this.oi.indexOf(this.QG[0]),o=(i=-1===r&&t<0?t:r+t,n=this.oi.length,i>0&&n>0?i%n:(i%n+n)%n),s=this.oi[o];this.oK(s);var u=this.oi[r];u&&this.sK(u),this.cK(),this.hK(s,e)},g.KJ=function(t){if(this.element.hasAttribute("disabled"))return i();switch(t.key){case f:case d:case v:case p:case b:case m:return this.YG!=A?this.lK(t):i();case l:case" ":return this.fK(t),i()}return i()},g.lK=function(t){var e=this,n=this.win.document,r=0;switch(t.key){case f:r=y(n)?1:-1;break;case d:case m:r=-1;break;case v:r=y(n)?-1:1;break;case p:case b:r=1;break;default:return i()}return t.preventDefault(),this.oi[this.WG].tabIndex=-1,this.dK().then((function(i){var n,o,s,u,c=e.WG;switch(t.key){case b:e.WG=e.oi.length-1;break;case m:e.WG=0}do{e.WG=(e.WG+r)%e.oi.length,e.WG<0&&(e.WG=e.WG+e.oi.length)}while(n=e.oi[e.WG],s=(o=i[e.WG]).height,u=o.width,(n.hidden||0==u||0==s)&&e.WG!=c);var a=e.oi[e.WG];a.tabIndex=0,function(t){try{t.focus()}catch(t){}}(a);var h=e.oi[e.WG];e.YG==S&&e.aK(h)}))},g.fK=function(t){var e=t.key;if((" "==e||e==l)&&this.oi.includes(t.target)){t.preventDefault();var i=t.target;this.aK(i)}},g.sK=function(t){t.removeAttribute("selected"),t.setAttribute("aria-selected","false");var e=this.QG.indexOf(t);-1!==e&&this.QG.splice(e,1)},g.ZG=function(){for(;this.QG.length>0;){var t=this.QG.pop();this.sK(t)}this.cK()},g.oK=function(t){this.QG.includes(t)||(this.KG||this.ZG(),t.setAttribute("selected",""),t.setAttribute("aria-selected","true"),this.QG.push(t))},g.getElementsForTesting=function(){return this.oi},g.getSelectedElementsForTesting=function(){return this.QG},g.dK=function(){var t=this;return this.measureElement((function(){return t.oi.map((function(t){return t.getBoundingClientRect()}))}))},w}(t.BaseElement);t.registerElement(R,U,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-selector-0.1.js.map