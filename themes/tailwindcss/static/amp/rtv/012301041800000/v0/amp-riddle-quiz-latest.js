;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-riddle-quiz",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var u,o=Object.prototype,f=(o.hasOwnProperty,o.toString);self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var l=self.__AMP_LOG;function c(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(d,t);var i,o,s=(i=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=e(i);if(o){var u=e(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return r(this,t)});function d(t){var n;return(n=s.call(this,t)).tb=null,n.Rq=400,n.Eq="",n.Bb=null,n}var a=d.prototype;return a._=function(t){if(this.tb&&"https://www.riddle.com"==t.origin&&t.source==this.tb.contentWindow){var n,e=function(t){return t.data}(t);n=e,"[object Object]"===f.call(n)&&null!=e.riddleId&&e.riddleId==this.Eq&&this.zq(e.riddleHeight)}},a.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},a.layoutCallback=function(){var t,n,e,i,r,o,f,s,d,a;this.Eq=(t=this.element.getAttribute("data-riddle-id"),"The data-riddle-id attribute is required for <amp-riddle-quiz> %s",n=this.element,(l.user||(l.user=c()),void l.user.win?l.userForEmbed||(l.userForEmbed=c()):l.user).assert(t,"The data-riddle-id attribute is required for <amp-riddle-quiz> %s",n,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.Bb=(e=this.win,i="message",r=this._.bind(this),o=void 0,f=e,s=r,d=function(t){try{return s(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}},a=function(){if(void 0!==u)return u;u=!1;try{var t={get capture(){return u=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return u}(),f.addEventListener(i,d,!!a&&o),function(){null==f||f.removeEventListener(i,d,!!a&&o),s=null,f=null,d=null});var h=this.element.ownerDocument.createElement("iframe");return this.tb=h,h.setAttribute("scrolling","no"),h.setAttribute("frameborder","0"),h.setAttribute("allowtransparency","true"),h.setAttribute("allowfullscreen","true"),h.src="https://www.riddle.com/a/iframe/"+encodeURIComponent(this.Eq),function(t,n){t.classList.add("i-amphtml-fill-content")}(h),this.element.appendChild(h),this.loadPromise(h)},a.unlayoutCallback=function(){var t,n;return this.Bb&&this.Bb(),this.tb&&(null===(n=(t=this.tb).parentElement)||void 0===n||n.removeChild(t),this.tb=null),!0},a.zq=function(t){var n;"number"==typeof(n=t)&&isFinite(n)&&t!==this.Rq&&(this.Rq=t,this.attemptChangeHeight(this.Rq).catch((function(){})))},d}(t.BaseElement);t.registerElement("amp-riddle-quiz",s,!1)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-riddle-quiz-0.1.js.map