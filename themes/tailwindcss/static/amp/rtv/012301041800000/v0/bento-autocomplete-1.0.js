;
!function(t){var n=self.BENTO=self.BENTO||{},e=function(t,n){"use strict";var e,r,o=Object.create,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,l=(e={"third_party/fuzzysearch/index.js":function(t,n){n.exports=function(t,n){var e=n.length,r=t.length;if(r>e)return!1;if(r===e&&t===n)return!0;t:for(var o=0,i=0;o<r;o++){for(var u=t.charCodeAt(o);i<e;)if(n.charCodeAt(i++)===u)continue t;return!1}return!0}}},function(){return r||(0,e[Object.keys(e)[0]])((r={exports:{}}).exports,r),r.exports});function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,n){if(n&&("object"===m(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var y=Array.isArray;function g(t,n,e){return"number"!=typeof e&&(e=0),!(e+n.length>t.length)&&-1!==t.indexOf(n,e)}function x(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function w(t,n){if(t){if("string"==typeof t)return x(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?x(t,n):void 0}}var j=Object.prototype,O=j.hasOwnProperty;function S(t,n){return O.call(t,n)}function E(t,n){return S(t,n)?t[n]:void 0}function k(t,n){if("."==n)return t;for(var e,r=t,o=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=w(t))||t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.split("."));!(e=o()).done;){var i=e.value;if(!(i&&r&&void 0!==r[i]&&"object"==m(r)&&S(r,i))){r=void 0;break}r=r[i]}return r}j.toString;var R,z=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function A(t,n,e,r,o){return o||(n?"�":r?t.slice(0,-1)+"\\"+t.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+t)}function I(t,n){return t.replace(/^|,/g,"$&".concat(n," "))}function _(t){return String(t).replace(z,A)}function T(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}var U="input-5d2ea1e";function M(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,n)||w(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,n){return(void 0!==R?R:R=function(t){try{var n=t.ownerDocument,e=n.createElement("div"),r=n.createElement("div");return e.appendChild(r),e.querySelector(":scope div")===r}catch(t){return!1}}(t))?t.querySelectorAll(I(n,":scope")):function(t,n){var e=t.classList,r="i-amphtml-scoped";e.add(r);var o=I(n,".".concat(r)),i=t.querySelectorAll(o);return e.remove(r),i}(t,n)}function D(t,n){var e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!e&&e.call(t,n)}var F=function(){},$={loading:!1,error:null};function q(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}var C,B,N={fetchJson:function(t,n){return this.fetch(t,n).then((function(t){return t.json()}))},fetch:function(t,n){return(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.fetch(t,n);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error(r.statusText);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(t){q(i,r,o,u,a,"next",t)}function a(t){q(i,r,o,u,a,"throw",t)}u(void 0)}))})();var e}},J=(C=l(),function(t,n,e){if(n&&"object"==typeof n||"function"==typeof n)for(var r,o=a(n),c=0,l=o.length;c<l;c++)r=o[c],f.call(t,r)||"default"===r||i(t,r,{get:function(t){return n[t]}.bind(null,r),enumerable:!(e=u(n,r))||e.enumerable});return t}((B=i(null!=C?o(c(C)):{},"default",C&&C.__esModule&&"default"in C?{get:function(){return C.default},enumerable:!0}:{value:C,enumerable:!0}),i(B,"__esModule",{value:!0})),C));function L(t){var e=t.id,r=t.item,o=t.itemTemplate,i=t.onError,u=void 0===i?function(){}:i,a=t.selected,c=void 0!==a&&a,f=t.onMouseDown,l=void 0===f?function(){}:f,s=o(r);if(!(0,n.isValidElement)(s))return s;var d=s.props["data-disabled"];return s.props["data-value"]||d||u('expected a "data-value" or "data-disabled" attribute on the rendered template item.'),(0,n.cloneElement)(s,v({"aria-disabled":d,"aria-selected":c,class:"autocomplete-item autocomplete-item-5d2ea1e"+(c?" autocomplete-item-active-5d2ea1e":""),dir:"auto",id:e,key:e,onMouseDown:l,part:"option",role:"option"},s.props))}function H(t){return t?"option"===t.getAttribute("role")?t:H(t.parentElement):null}function V(t){var n,e;return(null==t?void 0:t.getAttribute("data-value"))||(null==t||null===(n=t.firstElementChild)||void 0===n?void 0:n.getAttribute("data-value"))||(null==t||null===(e=t.textContent)||void 0===e?void 0:e.trim())||""}function Z(t){return null==t?void 0:t.querySelectorAll('[role="option"]:not([data-disabled=true])')}function G(t){var e=t.fuzzy,r=t.substring,o=t.text,i=r.toLocaleLowerCase(),u=o.toLocaleLowerCase();if(e)return(0,n.createElement)(n.Fragment,null,o.split("").map((function(t){return i.includes(t.toLocaleLowerCase())?(0,n.createElement)("span",{class:"autocomplete-partial"},t):t})));var a=u.indexOf(i),c=a+r.length;return(0,n.createElement)(n.Fragment,null,o.slice(0,a),(0,n.createElement)("span",{class:"autocomplete-partial"},o.slice(a,c)),o.slice(c,o.length))}function K(t){return(t=t.replace(/[\.]+/g,"")).split(/[`~(){}_|+\-;:\'",\[\]\\\/ ]+/g)}function Q(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,n,e){return n&&Q(t.prototype,n),e&&Q(t,e),t}var X=function(){function t(t){this.Ns="",this.mJ=new RegExp(""),this.pJ=null,this.Ns=t;var n=this.Ns.replace(/([()[{*+.$^\\|?])/g,"\\$1"),e="((".concat(n,"|^").concat(n,")(\\w+)?)");this.mJ=new RegExp(e,"gm")}var n=t.prototype;return n.bJ=function(t){for(var n,e,r=this.mJ,o=t.selectionStart,i=t.value;null!==(n=r.exec(i))&&!(n[0].length+E(n,"index")>o);)e=n;return!e||e[0].length+E(e,"index")<o?null:e},n.shouldAutocomplete=function(t){var n=this.bJ(t);return this.pJ=n,!!n},n.getUserInputForUpdate=function(){return this.pJ&&this.pJ[0]?this.pJ[0].slice(this.Ns.length):""},n.shouldPreventDefaultOnEnter=function(t){return t},W(t,[{key:"shouldShowOnFocus",get:function(){return!1}}]),t}(),Y=function(){function t(){}var n=t.prototype;return n.shouldAutocomplete=function(){return!0},n.getUserInputForUpdate=function(t){return t.value||""},n.shouldPreventDefaultOnEnter=function(t,n){return!n},W(t,[{key:"shouldShowOnFocus",get:function(){return!0}}]),t}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]);var tt=["substring","prefix","token-prefix","fuzzy","custom","none"],nt=-1,et=function(t){return k(t,"items")},rt=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}(u,e);var r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=b(r);if(o){var e=b(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return h(this,t)});function u(){return i.apply(this,arguments)}var a=u.prototype;return a.$J=function(t){var n=T(t.textContent,(function(t){throw t})),e=this.element.getAttribute("items")||"items",r=k(n,e);if(!r)return this.win.console.warn('Expected key "'.concat(e,'" in data but found nothing. Rendering empty results.')),[];if(!y(r))throw new Error("Items must be array type");return r},a.getDefaultProps=function(){var t=e.prototype.getDefaultProps.call(this),n=this.element.querySelector('script[type="application/json"]');if(n){var r=this.$J(n);return v(v({},t),{},{items:r})}return this.element.hasAttribute("src")||this.win.console.warn('Expected a <script type="application/json"> child or a URL specified in "src"'),t},a.checkPropsPostMutations=function(){var e=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"template";if(t.hasAttribute(n)){var e=t.getAttribute(n);return Boolean(e)?t.ownerDocument.querySelector("template#".concat(_(e))):null}return t.querySelector("template")}(this.element);e&&this.mutateProps({"itemTemplate":function(r){var o=t.default.render(e.innerHTML,r);return(0,n.createElement)("div",{dangerouslySetInnerHTML:{__html:o}})}})},u}(n.PreactBaseElement);rt.Component=function(t){var e,r=t.children,o=t.filter,i=void 0===o?"none":o,u=t.filterValue,a=void 0===u?"value":u,c=t.highlightUserEntry,f=void 0!==c&&c,l=t.id,s=t.inline,d=t.items,p=void 0===d?[]:d,b=t.itemTemplate,h=t.maxItems,y=t.minChars,x=void 0===y?1:y,w=t.onError,j=void 0===w?function(){}:w,O=t.onSelect,R=void 0===O?function(){}:O,z=t.parseJson,A=void 0===z?et:z,I=t.prefetch,_=void 0!==I&&I,q=t.src,C=t.submitOnEnter,B=void 0!==C&&C,Q=t.suggestFirst,W=void 0!==Q&&Q,rt=t.query,ot=(0,n.useRef)(null),it=(0,n.useValueRef)(l||"".concat(Math.floor(100*Math.random()),"_AMP_content_")),ut=(0,n.useRef)(null),at=(0,n.useRef)(null),ct=M((0,n.useState)(""),2),ft=ct[0],lt=ct[1],st=M((0,n.useState)(nt),2),dt=st[0],vt=st[1],pt=M((0,n.useState)(!1),2),bt=pt[0],mt=pt[1],ht=M((0,n.useState)(W),2),yt=ht[0],gt=ht[1],xt=M((0,n.useState)(!1),2),wt=xt[0],jt=xt[1],Ot=M((0,n.useState)(!1),2),St=Ot[0],Et=Ot[1],kt=(e=s)?new X(e):new Y,Rt=(0,n.useMemo)((function(){return q&&rt?ft?function(t,n,e,r){return function(t,n,e){if(!n)return t;var r=t.split("#",2),o=r[0].split("?",2);return o[0]+(o[1]?e?"?".concat(n,"&").concat(o[1]):"?".concat(o[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t,n){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))}(n,e),r)}(q,rt,ft):null:q}),[q,ft,rt]),zt=(0,n.useMemo)((function(){if(Rt){if(rt)return!St;if(!wt)return _||bt}return!1}),[Rt,wt,St,rt,_,bt]),At=(0,n.useMemo)((function(){return!!rt}),[rt]),It=function(t,e){var r=e.enabled,o=e.initialData,i=e.onSettled,u=void 0===i?F:i,a=e.onSuccess,c=void 0===a?F:a,f=e.onError,l=void 0===f?F:f,s=function(t){var e=(0,n.useRef)(!1);(0,n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]);var r=M((0,n.useState)(t),2),o=r[0],i=r[1];return[o,(0,n.useCallback)((function(t){e.current&&i(t)}),[i])]}(v(v({},$),{},{data:o})),d=M(s,2),p=d[0],b=d[1],m=(0,n.useValueRef)({initialData:o,onSettled:u,onError:l,onSuccess:c,state:p,queryFn:t}),h=(0,n.useCallback)((function(){var t=m.current,n=t.onError,e=t.onSettled,r=t.onSuccess,o=t.queryFn,i=t.state;b((function(t){return v(v({},t),{},{error:null,loading:!0})})),o().then((function(t){b((function(n){return v(v({},n),{},{error:null,loading:!1,data:t})})),r(t),e(i.data,i.error)}),(function(t){b((function(n){return v(v({},n),{},{data:null,loading:!1,error:t})})),n(t),e(i.data,i.error)}))}),[m,b]);return(0,n.useEffect)((function(){r&&h()}),[r,h]),v(v({},p),{},{refetch:h})}((function(){return N.fetchJson(Rt).then((function(t){return A(t)}))}),{enabled:zt,initialData:p,onSettled:function(){jt(!0),Et(!0)},onError:function(t){j(t.message)}}).data,_t=(0,n.useCallback)((function(t){ut.current.value=t}),[ut]),Tt=(0,n.useCallback)((function(t){var n;null===(n=ut.current)||void 0===n||n.setAttribute("aria-expanded",t.toString()),mt(t)}),[]),Ut=(0,n.useCallback)((function(){var t;vt(nt),null===(t=ut.current)||void 0===t||t.removeAttribute("aria-activedescendant")}),[ut]),Mt=(0,n.useCallback)((function(){Tt(!0)}),[Tt]),Pt=(0,n.useCallback)((function(){Ut(),Tt(!1)}),[Tt,Ut]),Dt=(0,n.useCallback)((function(){_t(ft)}),[ft,_t]),Ft=(0,n.useCallback)((function(t,n){_t(t),lt(t);var e=v({value:t},n?{valueAsObject:n}:{});R(e),Pt()}),[R,_t,Pt]),$t=(0,n.useCallback)((function(t){return"".concat(it.current,"-").concat(t)}),[it]),qt=(0,n.useCallback)((function(t){var n="input,textarea",e=P(t,n);if(0===e.length){var r=t.querySelector("slot");r&&(e=function(t,n){for(var e=t.assignedElements(),r=[],o=0;o<e.length;o++){var i=e[o];D(i,n)&&r.push(i),P(i,n).forEach((function(t){return r.push(t)}))}return r}(r,n))}if(1===e.length)return e[0];j("should contain exactly one <input> or <textarea> descendant.")}),[j]),Ct=(0,n.useCallback)((function(t){var n=qt(t);if(n){if(n.hasAttribute("type")){var e=n.getAttribute("type");"text"!==e&&"search"!==e&&j('requires the "type" attribute to be "text" or "search" if present on <input>.')}n.classList.add(U),n.setAttribute("dir","auto"),n.setAttribute("aria-autocomplete","both"),n.setAttribute("aria-controls",it.current),n.setAttribute("aria-expanded","false"),"INPUT"===n.tagName?n.setAttribute("role","combobox"):n.setAttribute("role","textbox"),ut.current=n}}),[qt,j,U,it]),Bt=(0,n.useCallback)((function(){var t;t=i,tt.includes(t)||j("Unexpected filter: ".concat(i,".")),!s&&W&&"prefix"!==i&&(j('"suggest-first" expected "filter" type "prefix".'),gt(!1))}),[i,j,s,W]),Nt=(0,n.useMemo)((function(){return!(!bt||0===(null==It?void 0:It.length))&&ft.length>=x}),[It,ft,x,bt]),Jt=(0,n.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return h&&h<t.length?t.slice(0,h):t}),[h]),Lt=(0,n.useMemo)((function(){var t=ft.toLocaleLowerCase(),n=null==It?void 0:It.filter((function(n){if("object"===m(n)&&(n=k(n,a)),"string"==typeof n)switch(n=n.toLocaleLowerCase(),i){case"none":return!0;case"substring":return g(n,t);case"prefix":return n.startsWith(t);case"token-prefix":return function(t,n){if(""===n)return!0;var e,r,o=K(t),i=K(n),u=(e=o,r=Object.create(null),e.forEach((function(t){var n=S(r,t)?E(r,t)+1:1;r[t]=n})),r),a=i[i.length-1];i.splice(i.length-1,1);for(var c=!0,f=0;f<i.length;f++){var l=i[f];if(""!==l){if(!S(u,l)){c=!1;break}var s=Number(E(u,l));s>1?u[l]=s-1:delete u[l]}}var d=Object.keys(u);return c&&(""===a||d.some((function(t){return t.startsWith(a)})))}(n,t);case"fuzzy":return(0,J.default)(t,n);case"custom":throw new Error("Filter not yet supported: ".concat(i));default:throw new Error("Unexpected filter: ".concat(i))}else j('data property "'.concat(a,'" must map to string type.'))}));return Jt(n)}),[It,i,ft,a,j,Jt]),Ht=(0,n.useCallback)((function(t){var n,e=dt===nt&&t<0?t:dt+t,r=Z(ot.current);if(0!==t&&Nt){var o,i,u=(o=e,i=(null==r?void 0:r.length)||0,o>0&&i>0?o%i:(o%i+i)%i),a=null==r?void 0:r.item(u);vt(u),null===(n=ut.current)||void 0===n||n.setAttribute("aria-activedescendant",$t(e)),_t(V(a))}}),[dt,$t,Nt,_t]),Vt=(0,n.useCallback)((function(t){At&&Et(!1),lt(kt.getUserInputForUpdate(t)),Mt()}),[At,Mt,kt]),Zt=(0,n.useCallback)((function(t){var n=t.target;kt.shouldAutocomplete(n)&&Vt(n)}),[kt,Vt]),Gt=(0,n.useCallback)((function(){kt.shouldShowOnFocus&&Mt()}),[Mt,kt]),Kt=(0,n.useCallback)((function(t){var n=dt>nt;switch(t.key){case"ArrowDown":t.preventDefault();var e=Z(ot.current)||[];if(dt===e.length-1)return Dt(),void Ut();Ht(1);break;case"ArrowUp":if(t.preventDefault(),0===dt)return Dt(),void Ut();Ht(-1);break;case"Enter":var r=dt>nt;kt.shouldPreventDefaultOnEnter(r,B)&&t.preventDefault(),Ft(ut.current.value);break;case"Escape":Dt(),Pt();break;case"Tab":bt&&n&&(t.preventDefault(),Ft(ut.current.value))}}),[dt,Ht,Dt,Pt,Ut,Ft,kt,B,bt]),Qt=(0,n.useCallback)((function(t){var n=H(t.target);if(null==n||!n.hasAttribute("data-disabled")){var e=V(n),r=function(t){return null!=t&&t.hasAttribute("data-json")?T(t.getAttribute("data-json"),(function(t){throw t})):null}(n);Ft(e,r)}}),[Ft]),Wt=(0,n.useCallback)((function(t){if(f&&ft.length>0){if(g(t.toLocaleLowerCase(),ft.toLocaleLowerCase()))return(0,n.createElement)(G,{text:t,substring:ft});if("fuzzy"===i)return(0,n.createElement)(G,{text:t,substring:ft,fuzzy:!0})}return t}),[f,ft,i]),Xt=(0,n.useCallback)((function(t){return"object"===m(t)?b||(j("data must provide template for non-string items."),function(){return null}):function(t){return(0,n.createElement)("div",{"data-value":t},Wt(t))}}),[b,Wt,j]);return(0,n.useEffect)((function(){yt&&dt===nt&&Ht(1)}),[dt,Ht,yt]),(0,n.useEffect)((function(){var t,n,e,r;return Ct(ot.current),Bt(),null===(t=ut.current)||void 0===t||t.addEventListener("input",Zt),null===(n=ut.current)||void 0===n||n.addEventListener("keydown",Kt),null===(e=ut.current)||void 0===e||e.addEventListener("focus",Gt),null===(r=ut.current)||void 0===r||r.addEventListener("blur",Pt),function(){var t,n,e,r;null===(t=ut.current)||void 0===t||t.removeEventListener("input",Zt),null===(n=ut.current)||void 0===n||n.removeEventListener("keydown",Kt),null===(e=ut.current)||void 0===e||e.removeEventListener("focus",Gt),null===(r=ut.current)||void 0===r||r.removeEventListener("blur",Pt)}}),[Ct,Bt,Zt,Kt,Gt,Pt,ut]),(0,n.createElement)(n.ContainWrapper,{ref:ot,class:"autocomplete-5d2ea1e",part:"autocomplete"},r,(0,n.createElement)("div",{ref:at,id:it.current,class:"autocomplete-results-5d2ea1e",role:"listbox",hidden:!Nt,part:"results"},Lt.map((function(t,e){var r=$t(e);return(0,n.createElement)(L,{key:r,item:t,itemTemplate:Xt(t),id:r,selected:dt===e,onError:j,onMouseDown:Qt})}))))},rt.props={"children":{passthrough:!0},"filter":{attr:"filter"},"filterValue":{attr:"filter-value"},"highlightUserEntry":{attr:"highlight-user-entry",type:"boolean"},"id":{attr:"id"},"inline":{attr:"inline"},"maxItems":{attr:"max-items",type:"number"},"minChars":{attr:"min-chars",type:"number"},"prefetch":{attr:"prefetch",type:"boolean"},"src":{attr:"src"},"submitOnEnter":{attr:"submit-on-enter",type:"boolean"},"suggestFirst":{attr:"suggest-first",type:"boolean"},"query":{attr:"query",type:"string"}},rt.layoutSizeDefined=!0,rt.usesShadowDom=!0,rt.shadowCss=".autocomplete-5d2ea1e{font-family:sans-serif}.input-5d2ea1e{box-sizing:border-box;border-radius:4px}.autocomplete-results-5d2ea1e{width:calc(100% - 1rem);z-index:10;position:absolute;min-width:calc(2em + 2rem);box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);margin-top:.5rem;max-height:40vh;overflow-x:hidden;overflow-y:auto;margin-left:-.5rem;border-radius:4px;background-color:#fff}.autocomplete-item-5d2ea1e{cursor:pointer;padding:.5rem 1rem;position:relative}.autocomplete-item-5d2ea1e:first-child{border-radius:4px 4px 0 0}.autocomplete-item-5d2ea1e:nth-last-child(2){border-radius:0 0 4px 4px}.autocomplete-item-5d2ea1e:hover:not([data-disabled]){background-color:rgba(0,0,0,0.15)}.autocomplete-item-5d2ea1e[data-disabled]{color:rgba(0,0,0,0.33)}.autocomplete-item-5d2ea1e>.autocomplete-partial{font-weight:700}.autocomplete-item-active-5d2ea1e:not([data-disabled]){background-color:rgba(0,0,0,0.15)}",(0,n.defineBentoElement)("bento-autocomplete",rt,undefined)};Promise.all(["v0/bento-mustache-1.0","bento"].map((function(t){return new Promise((function(e){(n[t]=n[t]||[]).push(e)}))}))).then((function(t){e.apply(null,t)}))}();
//# sourceMappingURL=bento-autocomplete-1.0.js.map