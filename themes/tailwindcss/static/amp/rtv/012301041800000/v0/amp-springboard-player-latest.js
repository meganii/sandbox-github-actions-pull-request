;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-springboard-player",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,r){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,r)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var o=Array.isArray;function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function u(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype,s=(f.hasOwnProperty,f.toString,"fixed");function c(t,n){t.classList.add("i-amphtml-fill-content"),n&&t.classList.add("i-amphtml-replaced-content")}function l(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,e=t.stack,i=new Error(r);for(var o in t)i[o]=t[o];return i.stack=e,i}function h(t){for(var n,r=null,e="",i=u(arguments,!0);!(n=i()).done;){var o=n.value;o instanceof Error&&!r?r=l(o):(e&&(e+=" "),e+=o)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function p(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}function d(t){var n=h.apply(null,arguments);setTimeout((function(){throw p(n),n}))}function v(t){try{for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return t.apply(null,r)}catch(t){d(t)}}var m={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}},b=/vertical/,y=new WeakMap,w=new WeakMap,g=new WeakMap;function S(t){var n=y.get(t);return n||(n=new t.ResizeObserver(R),y.set(t,n)),n}function R(t){for(var n=new Set,r=t.length-1;r>=0;r--){var e=t[r],i=e.target;if(!n.has(i)){n.add(i);var o=w.get(i);if(o){g.set(i,e);for(var a=0;a<o.length;a++){var u=o[a],f=u.callback;j(u.type,f,e)}}}}}function j(t,n,r){if(0==t){var e=r.contentRect,i=e.height;v(n,{width:e.width,height:i})}else if(1==t){var o,a=r.borderBoxSize;if(a)o=a.length>0?a[0]:{inlineSize:0,blockSize:0};else{var u,f,s=r.target,c=((y=s).ownerDocument||y).defaultView,l=b.test(function(t,n){return t.getComputedStyle(n)||m}(c,s).writingMode),h=s,p=h.offsetHeight,d=h.offsetWidth;l?(f=d,u=p):(u=d,f=p),o={inlineSize:u,blockSize:f}}v(n,o)}var y}var I=function(){function t(t){this.zn=t,this.Cn=!1,this.xn=!1,this.En=this.En.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Cn&&(this.Cn=t,t?(this.xn=!1,function(t,n,r){var e=t.ownerDocument.defaultView;if(e){var i=w.get(t);if(i||(i=[],w.set(t,i),S(e).observe(t)),!i.some((function(t){return t.callback===r&&1===t.type}))){i.push({type:1,callback:r});var o=g.get(t);o&&setTimeout((function(){return j(1,r,o)}))}}}(this.zn,0,this.En)):function(t,n){!function(t,n,r){var e=w.get(t);if(e&&(function(t,n){for(var e=[],i=0,o=0;o<t.length;o++){var a=t[o];(u=a).callback===r&&1===u.type?e.push(a):(i<o&&(t[i]=a),i++)}var u;i<t.length&&(t.length=i)}(e),0==e.length)){w.delete(t),g.delete(t);var i=t.ownerDocument.defaultView;i&&S(i).unobserve(t)}}(t,0,n)}(this.zn,this.En))},n.En=function(t){var n=t.blockSize,r=t.inlineSize>0&&n>0;if(r!==this.xn){this.xn=r;var e=this.zn;r||e.pause()}},t}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var C=self.__AMP_LOG;function T(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function E(t,n,r,e,i,o,a,u,f,s,c){return t}function O(t,n,r,e,i,o,a,u,f,s,c){return(C.user||(C.user=T()),void C.user.win?C.userForEmbed||(C.userForEmbed=T()):C.user).assert(t,n,r,e,i,o,a,u,f,s,c)}var U=function(t){return n="preconnect",function(t,n){E(function(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}(t,n));var r=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return r.obj||(E(r.ctor),E(r.context),r.obj=new r.ctor(r.context),E(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}(function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n);var n},A=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&n(t,r)}(l,t);var e,a,f=(e=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(a){var o=r(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)});function l(t){var n;return(n=f.call(this,t)).Gb="",n.Qg="",n.rC="",n.Vq="",n.Nb="",n.tb=null,n.Qn=new I(n.element),n}var h=l.prototype;return h.preconnectCallback=function(t){U(this.win).url(this.getAmpDoc(),"https://cms.springboardplatform.com",t),U(this.win).url(this.getAmpDoc(),"https://www.springboardplatform.com",t)},h.isLayoutSupported=function(t){return function(t){return t==s||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},h.buildCallback=function(){this.element.classList.add("i-amphtml-media-component"),this.Gb=O(this.element.getAttribute("data-mode"),"The data-mode attribute is required for <amp-springboard-player> %s",this.element),this.Qg=O(this.element.getAttribute("data-content-id"),"The data-content-id attribute is required for<amp-springboard-player> %s",this.element),this.rC=O(this.element.getAttribute("data-domain"),"The data-domain attribute is required for <amp-springboard-player> %s",this.element),this.Vq=O(this.element.getAttribute("data-site-id"),"The data-site-id attribute is required for<amp-springboard-player> %s",this.element),this.Nb=O(this.element.getAttribute("data-player-id"),"The data-player-id attribute is required for<amp-springboard-player> %s",this.element)},h.layoutCallback=function(){var t=this.element.ownerDocument.createElement("iframe"),n=this.element.getAttribute("data-items")||"10";return t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","true"),t.id=this.Nb+"_"+this.Qg,t.src="https://cms.springboardplatform.com/embed_iframe/"+encodeURIComponent(this.Vq)+"/"+encodeURIComponent(this.Gb)+"/"+encodeURIComponent(this.Qg)+"/"+encodeURIComponent(this.Nb)+"/"+encodeURIComponent(this.rC)+"/"+encodeURIComponent(n),c(t),this.tb=t,this.element.appendChild(t),this.Qn.updatePlaying(!0),this.loadPromise(t)},h.unlayoutCallback=function(){var t=this.tb;return t&&(this.element.removeChild(t),this.tb=null),this.Qn.updatePlaying(!1),!0},h.pauseCallback=function(){this.tb&&this.tb.contentWindow&&this.tb.contentWindow.postMessage("ampPause","*")},h.createPlaceholderCallback=function(){var t=this.win.document.createElement("img");return function(t,n,r,e){for(var i,a,f=u(o(i=["aria-label"])?i:[i],!0);!(a=f()).done;){var s=a.value,c=n.getAttribute(s);null!==c&&r.setAttribute(s,c)}}(0,this.element,t),c(t),t.setAttribute("placeholder",""),t.setAttribute("referrerpolicy","origin"),t.hasAttribute("aria-label")?t.setAttribute("alt","Loading video - "+t.getAttribute("aria-label")):t.setAttribute("alt","Loading video"),t.setAttribute("src","https://www.springboardplatform.com/storage/"+("playlist"==this.Gb?"default/snapshots/default_snapshot.png":"".concat(encodeURIComponent(this.rC),"/snapshots/").concat(encodeURIComponent(this.Qg),".jpg"))),t},l}(t.BaseElement);t.registerElement("amp-springboard-player",A)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-springboard-player-0.1.js.map