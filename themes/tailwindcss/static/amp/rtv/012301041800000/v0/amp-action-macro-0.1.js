;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-action-macro",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}Array.isArray;var i=Object.prototype,u=(i.hasOwnProperty,i.toString,1);self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var f=self.__AMP_LOG;function c(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function a(n,t,r,e,o,i,u,f,c,a,l){return n}function l(n,t,r,e,o,i,u,a,l,s,h){return(f.user||(f.user=c()),void f.user.win?f.userForEmbed||(f.userForEmbed=c()):f.user).assert(n,t,r,e,o,i,u,a,l,s,h)}function s(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,function(n,t){return h(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),"ampdoc")}(t)).getAmpDoc(n):n;var t,r}function h(n,t){a(v(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(a(r.ctor),a(r.context),r.obj=new r.ctor(r.context),a(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function v(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}var y="amp-action-macro",b=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}(c,n);var e,i,f=(e=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=r(e);if(i){var u=r(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return o(this,n)});function c(n){var t;return(t=f.call(this,n)).zy=null,t.RB=[],t}var a=c.prototype;return a.buildCallback=function(){var n=this.element;this.zy=function(n){return t="action",r=s(n),v(o=(e=s(r)).isSingleDoc()?e.win:e,t)?h(o,t):null;var t,r,e,o}(n);var t=n.getAttribute("arguments");t&&(this.RB=t.split(",").map((function(n){return n.trim()}))),this.registerAction("execute",this.Ie.bind(this))},a.getLayoutPriority=function(){return u},a.Ie=function(n){var t=n.actionEventType,r=n.args,e=n.event,o=n.trust;if(r&&this.RB.length>0)for(var i in r)l(this.RB.includes(i),'Variable argument name "%s" is not defined in %s',i,this.element);n.caller.tagName.toLowerCase()===y&&l(this.SB(n.caller),'Action macro with ID "%s" cannot reference itself or macros defined after it',this.element.getAttribute("id")),this.zy.trigger(this.element,"".concat(t),e,o,r)},a.renderOutsideViewport=function(){return!0},a.isLayoutSupported=function(n){return!0},a.SB=function(n){return!!(this.element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)},c}(n.BaseElement);n.registerElement(y,b)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-action-macro-0.1.js.map