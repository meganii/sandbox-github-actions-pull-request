;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-story-auto-analytics",ev:"0.1",l:!0,f:function(t,e){!function(){function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var i,c=Object.prototype,a=c.hasOwnProperty;function s(t,e,n,o,r,i,c,a,s,u,l){return t}function u(t){return function(t,e){if(s(1===e.length),s(Array.isArray(e)||(o=e,a.call(o,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return e[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=e[0];var o,r=t.firstElementChild;return s(r),s(!r.nextElementSibling),t.removeChild(r),r}(i,t)}function l(t,e,n,o,r,i,c,a,s,u,l){return t}c.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var p=function(t){return function(t,e){return function(t,e){l(function(t,e){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}(t,e));var n=function(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return n.obj||(l(n.ctor),l(n.context),n.obj=new n.ctor(n.context),l(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}(t,"extensions")},f=["<amp-analytics data-credentials=include type=gtag><script type=application/json><\/script></amp-analytics>"],y=function(t){var e,n;return(n=(e=t).ownerDocument||e,i&&i.ownerDocument===n||(i=n.createElement("div")),u)(f)},v=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(a,t);var o,i,c=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=n(o);if(i){var c=n(this).constructor;t=Reflect.construct(e,arguments,c)}else t=e.apply(this,arguments);return r(this,t)});function a(t){return c.call(this,t)}var s=a.prototype;return s.buildCallback=function(){p(this.win).installExtensionForDoc(this.getAmpDoc(),"amp-analytics");var t,e,n,o,r=y(this.element),i=r.querySelector("script"),c={"vars":{"gtag_id":t=l(this.element.getAttribute("gtag-id")),"config":(e={},n=t,o={"groups":"default"},n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e)},"triggers":{"storyPageCount":{"on":"story-content-loaded","vars":{"event_name":"custom","event_action":"story_page_count","event_category":"${title}","event_label":"${storyPageCount}","send_to":[t]},"storySpec":{"repeat":!1}},"storyEnd":{"on":"story-last-page-visible","vars":{"event_name":"custom","event_action":"story_complete","event_category":"${title}","event_label":"${title}","send_to":[t]},"storySpec":{"repeat":!1}},"storyPageIndex":{"on":"story-page-visible","vars":{"event_name":"custom","event_action":"story_pages_viewed","event_category":"${title}","event_label":"${storyPageIndex}","send_to":[t]},"storySpec":{"repeat":!1}},"storyShoppingTagClick":{"on":"story-shopping-tag-click","vars":{"event_name":"custom","event_action":"story_shopping_tag_click","event_category":"${title}","event_label":"${storyShoppingProductId}","send_to":[t]}},"storyShoppingPLPView":{"on":"story-shopping-plp-view","vars":{"event_name":"custom","event_action":"story_shopping_plp_view","event_category":"${title}","event_label":"${storyPageId}","send_to":[t]}},"storyShoppingPDPView":{"on":"story-shopping-pdp-view","vars":{"event_name":"custom","event_action":"story_shopping_pdp_view","event_category":"${title}","event_label":"${storyShoppingProductId}","send_to":[t]}},"storyShoppingBuyNowClick":{"on":"story-shopping-buy-now-click","vars":{"event_name":"custom","event_action":"story_shopping_buy_now_click","event_category":"${title}","event_label":"${storyShoppingProductId}","send_to":[t]}}}};i.textContent=JSON.stringify(c),this.element.appendChild(r)},s.isLayoutSupported=function(t){return!0},a}(t.BaseElement);t.registerElement("amp-story-auto-analytics",v)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-story-auto-analytics-0.1.js.map