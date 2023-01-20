;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-date-countdown",ev:"0.1",l:!0,f:function(t,n){!function(){var n;function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){if(n&&("object"===s(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return e(t)}Array.isArray;var o=Object.prototype,h=(o.hasOwnProperty,o.toString,1);self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var f=self.__AMP_LOG;function a(t){return f.user||(f.user=c()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(f.user.win,t)?f.userForEmbed||(f.userForEmbed=c()):f.user}function c(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function d(t,n,e,i,r,s,u,o,h,f,a){return t}function l(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,function(t,n){return v(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,e}function m(t){var n=l(t);return n.isSingleDoc()?n.win:n}function v(t,n){d(y(t,n));var e=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(d(e.ctor),d(e.context),e.obj=new e.ctor(e.context),d(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function y(t,n){var e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}var p="amp-date-countdown",b=864e5,w=36e5,g=6e4,S={"de":["Jahren","Monaten","Tagen","Stunden","Minuten","Sekunden"],"en":["Years","Months","Days","Hours","Minutes","Seconds"],"es":["años","meses","días","horas","minutos","segundos"],"fr":["ans","mois","jours","heures","minutes","secondes"],"id":["tahun","bulan","hari","jam","menit","detik"],"it":["anni","mesi","giorni","ore","minuti","secondi"],"ja":["年","ヶ月","日","時間","分","秒"],"ko":["년","달","일","시간","분","초"],"nl":["jaar","maanden","dagen","uur","minuten","seconden"],"pt":["anos","meses","dias","horas","minutos","segundos"],"ru":["год","месяц","день","час","минута","секунда"],"th":["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที"],"tr":["yıl","ay","gün","saat","dakika","saniye"],"vi":["năm","tháng","ngày","giờ","phút","giây"],"zh-cn":["年","月","天","小时","分钟","秒"],"zh-tw":["年","月","天","小時","分鐘","秒"]},j=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(c,t);var s,o,f=(s=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(s);if(o){var e=r(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function c(t){var n;return(n=f.call(this,t)).ty=null,n.ny=n.ey.bind(e(n)),n.iy="",n.sy=0,n.uy=0,n.oy=0,n.hy=0,n.ly="",n.my="",n.vy="",n.yy=null,n.py=null,n.by=!1,n}var d=c.prototype;return d.buildCallback=function(){var t=this;this.ty=function(t,n){return v(m(l(t)),"templates")}(this.element),this.iy=this.element.getAttribute("end-date"),this.sy=Number(this.element.getAttribute("timeleft-ms")),this.uy=Number(this.element.getAttribute("timestamp-ms")),this.oy=Number(this.element.getAttribute("timestamp-seconds")),this.hy=Number(this.element.getAttribute("offset-seconds"))||0,this.ly=(this.element.getAttribute("locale")||"en").toLowerCase(),this.my=(this.element.getAttribute("when-ended")||"stop").toLowerCase(),this.vy=(this.element.getAttribute("biggest-unit")||"DAYS").toUpperCase(),this.yy=this.wy(this.ly),this.by=this.element.hasAttribute("data-count-up"),this.getAmpDoc().whenFirstVisible().then((function(){var n=t.gy()+1e3*t.hy;t.Sy(new Date(n)-new Date)}))},d.renderOutsideViewport=function(){return!0},d.layoutCallback=function(){var t=this,e=1e3,i=this.gy()+this.hy*e,r=new Date(i)-new Date-e;return this.py=this.win.setInterval((function(){t.Sy(r),r-=e}),e),n||(n=Promise.resolve(void 0))},d.unlayoutCallback=function(){return this.win.clearInterval(this.py),!0},d.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},d.Sy=function(t){var n,e,i,r={},s=this.jy(t,this.by)||{};"stop"===this.my&&t<1e3&&((n=this.element,e="action",y(i=m(l(n)),e)?v(i,e):null).trigger(this.element,"timeout",null,h),this.win.clearInterval(this.py)),r.data=Object.assign(s,this.yy),this.ty.findAndRenderTemplate(this.element,r.data).then(this.ny)},d.gy=function(){var t,n;return this.iy?t=Date.parse(this.iy):this.sy?t=Number(new Date)+this.sy:this.uy?t=this.uy:this.oy&&(t=1e3*this.oy),n=!isNaN(t),"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",a().assert(n,"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),t},d.wy=function(t){if(S[t]){var n=S[t];return{"years":n[0],"months":n[1],"days":n[2],"hours":n[3],"minutes":n[4],"seconds":n[5]}}return a().error(p,"Invalid locale %s, return empty locale word",t),{}},d.jy=function(t,n){var e={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4};n&&(t*=-1);var i=e[this.vy]==e.DAYS?this.My(Math.floor(t/b)):0,r=e[this.vy]==e.HOURS?this.My(Math.floor(t/w)):e[this.vy]<e.HOURS?this.My(Math.floor(t%b/w)):0,s=e[this.vy]==e.MINUTES?this.My(Math.floor(t/g)):e[this.vy]<e.MINUTES?this.My(Math.floor(t%w/g)):0,u=e[this.vy]==e.SECONDS?this.My(Math.floor(t/1e3)):this.My(Math.floor(t%g/1e3));return{d:i,dd:this.Dy(i),h:r,hh:this.Dy(r),m:s,mm:this.Dy(s),s:u,ss:this.Dy(u)}},d.Dy=function(t){return t<-9||t>9?String(t):t>=-9&&t<0?"-0"+Math.abs(t):"0"+t},d.My=function(t){return t<0?t+1:t},d.ey=function(t){var n=this;return this.mutateElement((function(){var e=n.ty.findTemplate(n.element),i=n.element.contains(e);!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(n.element),i&&n.element.appendChild(e),n.element.appendChild(t)}))},c}(t.BaseElement);t.registerElement(p,j)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-date-countdown-0.1.js.map