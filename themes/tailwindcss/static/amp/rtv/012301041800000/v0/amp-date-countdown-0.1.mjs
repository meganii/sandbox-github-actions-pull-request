;
(self.AMP=self.AMP||[]).push({m:1,v:"2301041800000",n:"amp-date-countdown",ev:"0.1",l:!0,f:function(t,s){(()=>{var s,{hasOwnProperty:e,toString:n}=Object.prototype;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var i=self.__AMP_LOG;function h(t){return i.user||(i.user=r()),function(t,s){return s&&s.ownerDocument.defaultView!=t}(i.user.win,t)?i.userForEmbed||(i.userForEmbed=r()):i.user}function r(t){return function(t,s){throw new Error("failed to call initLogConstructor")}()}function u(t,s,e,n,i,h,r,u,o,a,d){return t}function o(t){return t.nodeType?(e=t,s=(e.ownerDocument||e).defaultView,function(t,s){return d(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(s)).getAmpDoc(t):t;var s,e}function a(t){const s=o(t);return s.isSingleDoc()?s.win:s}function d(t,s){u(c(t,s));const e=function(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}(t)[s];return e.obj||(u(e.ctor),u(e.context),e.obj=new e.ctor(e.context),u(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function c(t,s){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!e||!e.ctor)}var l="amp-date-countdown",m=864e5,f=36e5,p=6e4,M={"de":["Jahren","Monaten","Tagen","Stunden","Minuten","Sekunden"],"en":["Years","Months","Days","Hours","Minutes","Seconds"],"es":["años","meses","días","horas","minutos","segundos"],"fr":["ans","mois","jours","heures","minutes","secondes"],"id":["tahun","bulan","hari","jam","menit","detik"],"it":["anni","mesi","giorni","ore","minuti","secondi"],"ja":["年","ヶ月","日","時間","分","秒"],"ko":["년","달","일","시간","분","초"],"nl":["jaar","maanden","dagen","uur","minuten","seconden"],"pt":["anos","meses","dias","horas","minutos","segundos"],"ru":["год","месяц","день","час","минута","секунда"],"th":["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที"],"tr":["yıl","ay","gün","saat","dakika","saniye"],"vi":["năm","tháng","ngày","giờ","phút","giây"],"zh-cn":["年","月","天","小时","分钟","秒"],"zh-tw":["年","月","天","小時","分鐘","秒"]},_=class extends t.BaseElement{constructor(t){super(t),this.tM=null,this.sM=this.eM.bind(this),this.nM="",this.iM=0,this.hM=0,this.rM=0,this.uM=0,this.oM="",this.aM="",this.dM="",this.cM=null,this.lM=null,this.mM=!1}buildCallback(){this.tM=function(t,s){return d(a(o(t)),"templates")}(this.element),this.nM=this.element.getAttribute("end-date"),this.iM=Number(this.element.getAttribute("timeleft-ms")),this.hM=Number(this.element.getAttribute("timestamp-ms")),this.rM=Number(this.element.getAttribute("timestamp-seconds")),this.uM=Number(this.element.getAttribute("offset-seconds"))||0,this.oM=(this.element.getAttribute("locale")||"en").toLowerCase(),this.aM=(this.element.getAttribute("when-ended")||"stop").toLowerCase(),this.dM=(this.element.getAttribute("biggest-unit")||"DAYS").toUpperCase(),this.cM=this.fM(this.oM),this.mM=this.element.hasAttribute("data-count-up"),this.getAmpDoc().whenFirstVisible().then((()=>{const t=this.pM()+1e3*this.uM;this.MM(new Date(t)-new Date)}))}renderOutsideViewport(){return!0}layoutCallback(){const t=1e3,e=this.pM()+this.uM*t;let n=new Date(e)-new Date-t;return this.lM=this.win.setInterval((()=>{this.MM(n),n-=t}),t),s||(s=Promise.resolve(void 0))}unlayoutCallback(){return this.win.clearInterval(this.lM),!0}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}MM(t){const s={},e=this._M(t,this.mM)||{};var n;"stop"===this.aM&&t<1e3&&((n=this.element,function(t,s){const e=a(o(t));return c(e,s)?d(e,s):null}(n,"action")).trigger(this.element,"timeout",null,1),this.win.clearInterval(this.lM)),s.data=Object.assign(e,this.cM),this.tM.findAndRenderTemplate(this.element,s.data).then(this.sM)}pM(){let t;return this.nM?t=Date.parse(this.nM):this.iM?t=Number(new Date)+this.iM:this.hM?t=this.hM:this.rM&&(t=1e3*this.rM),s=!isNaN(t),"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",h().assert(s,"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),t;var s}fM(t){if(M[t]){const s=M[t];return{"years":s[0],"months":s[1],"days":s[2],"hours":s[3],"minutes":s[4],"seconds":s[5]}}return h().error(l,"Invalid locale %s, return empty locale word",t),{}}_M(t,s){const e={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4};s&&(t*=-1);const n=e[this.dM]==e.DAYS?this.gM(Math.floor(t/m)):0,i=e[this.dM]==e.HOURS?this.gM(Math.floor(t/f)):e[this.dM]<e.HOURS?this.gM(Math.floor(t%m/f)):0,h=e[this.dM]==e.MINUTES?this.gM(Math.floor(t/p)):e[this.dM]<e.MINUTES?this.gM(Math.floor(t%f/p)):0,r=e[this.dM]==e.SECONDS?this.gM(Math.floor(t/1e3)):this.gM(Math.floor(t%p/1e3));return{d:n,dd:this.wM(n),h:i,hh:this.wM(i),m:h,mm:this.wM(h),s:r,ss:this.wM(r)}}wM(t){return t<-9||t>9?String(t):t>=-9&&t<0?"-0"+Math.abs(t):"0"+t}gM(t){return t<0?t+1:t}eM(t){return this.mutateElement((()=>{const s=this.tM.findTemplate(this.element),e=this.element.contains(s);!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(this.element),e&&this.element.appendChild(s),this.element.appendChild(t)}))}};t.registerElement(l,_)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-date-countdown-0.1.mjs.map