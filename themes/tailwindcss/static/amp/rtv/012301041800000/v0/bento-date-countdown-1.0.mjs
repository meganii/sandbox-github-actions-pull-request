;
import t from"./bento-mustache-1.0.mjs";function n(t,n){const e=[];let o=0;for(let r=0;r<t.length;r++){const s=t[r];n(s,r,t)?e.push(s):(o<r&&(t[o]=s),o++)}return o<t.length&&(t.length=o),e}var{hasOwnProperty:e,toString:o}=Object.prototype;function r(t){return 1==(null==(n=t)?void 0:n.nodeType)?(t=t).tagName.toLowerCase()+(t.id?`#${t.id}`:""):t;var n}function s(t,e,o,s,u,i,a,c,m,l,f){return function(t,e,o="Assertion failed",s){var u,i;if(e)return e;t&&-1==o.indexOf(t)&&(o+=t);let a=3;const c=o.split("%s");let m=c.shift();const l=[m];for(;c.length;){const t=arguments[a++],n=c.shift();m+=r(t)+n,l.push(t,n.trim())}const f=new Error(m);throw f.messageArray=n(l,(t=>""!==t)),null===(u=(i=self).__AMP_REPORT_ERROR)||void 0===u||u.call(i,f),f}("​​​",t,e,o,s,u,i,a,c,m,l,f)}import{defineBentoElement as u}from"../bento.mjs";function i(t){if(!t)return null;if("now"===t.toLowerCase())return Date.now();const n=Date.parse(t);return isNaN(n)?null:n}var a={"datetime":t=>{const n=i(t);return s(n,"Invalid date: %s",t),n},"end-date":t=>{const n=i(t);return s(n,"Invalid date: %s",t),n},"timeleft-ms":t=>Date.now()+Number(t),"timestamp-ms":t=>Number(t),"timestamp-seconds":t=>1e3*Number(t)};import{PreactBaseElement as c}from"../bento.mjs";function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){m(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}import{createElement as d}from"../bento.mjs";import{useEffect as b,useMemo as h,useRef as p,useState as j}from"../bento.mjs";import{Wrapper as v}from"../bento.mjs";import{useLayoutEffect as g,useState as y}from"../bento.mjs";import{useAmpContext as O}from"../bento.mjs";import{useCallback as S,useLayoutEffect as M}from"../bento.mjs";import{useAmpContext as w}from"../bento.mjs";function $(t){return D[t]}var D={"de":["Jahren","Monaten","Tagen","Stunden","Minuten","Sekunden"],"en":["Years","Months","Days","Hours","Minutes","Seconds"],"es":["años","meses","días","horas","minutos","segundos"],"fr":["ans","mois","jours","heures","minutes","secondes"],"id":["tahun","bulan","hari","jam","menit","detik"],"it":["anni","mesi","giorni","ore","minuti","secondi"],"ja":["年","ヶ月","日","時間","分","秒"],"ko":["년","달","일","시간","분","초"],"nl":["jaar","maanden","dagen","uur","minuten","seconden"],"pt":["anos","meses","dias","horas","minutos","segundos"],"ru":["год","месяц","день","час","минута","секунда"],"th":["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที"],"tr":["yıl","ay","gün","saat","dakika","saniye"],"vi":["năm","tháng","ngày","giờ","phút","giây"],"zh-cn":["年","月","天","小时","分钟","秒"],"zh-tw":["年","月","天","小時","分鐘","秒"]},N=["datetime","whenEnded","locale","biggestUnit","countUp","render"],U={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4},E="en",k="stop",A="DAYS",I=!1,C=t=>`${t.days} ${t.dd}, ${t.hours} ${t.hh}, ${t.minutes} ${t.mm}, ${t.seconds} ${t.ss}`;function _(t){return t<-9||t>9?String(t):t>=-9&&t<0?"-0"+-t:"0"+t}function x(t){return t<0?t+1:t}var H=class extends c{};H.Component=function(t){let{datetime:n,whenEnded:e=k,locale:o=E,biggestUnit:r=A,countUp:s=I,render:u=C}=t,a=function(t,n){if(null==t)return{};var e,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,N);!function(){const{notify:t}=w();M((()=>{t&&t()}))}();const{playable:c}=O(),m=h((()=>{return(t=n)?"number"==typeof t?t:"string"==typeof t?i(t):(t=t).getTime():null;var t}),[n]),l=h((()=>function(t){var n;void 0===$(t)&&(n=`Invalid locale ${t}, defaulting to ${E}. DateCountdown`,console.warn(n),t=E);const e=$(t);return{"years":e[0],"months":e[1],"days":e[2],"hours":e[3],"minutes":e[4],"seconds":e[5]}}(o)),[o]),[S,D]=j(m-Date.now()+1e3),H=h((()=>function(t,n,e,o){return f(f({},function(t,n,e){e&&(t*=-1);const o=U[n]==U.DAYS?x(Math.floor(t/864e5)):0,r=U[n]==U.HOURS?x(Math.floor(t/36e5)):U[n]<U.HOURS?x(Math.floor(t%864e5/36e5)):0,s=U[n]==U.MINUTES?x(Math.floor(t/6e4)):U[n]<U.MINUTES?x(Math.floor(t%36e5/6e4)):0,u=x(U[n]==U.SECONDS?Math.floor(t/1e3):Math.floor(t%6e4/1e3));return{"d":o,"dd":_(o),"h":r,"hh":_(r),"m":s,"mm":_(s),"s":u,"ss":_(u)}}(t,n,o)),e)}(S,r,l,s)),[S,r,l,s]),P=p(null);b((()=>{if(!c||!P.current)return;const t=P.current.ownerDocument.defaultView,n=t.setInterval((()=>{const o=m-Date.now()+1e3;D(o),e===k&&o<1e3&&t.clearInterval(n)}),1e3);return()=>t.clearInterval(n)}),[c,m,e]);const T=function(t,n){const[e,o]=y(null);return g((()=>{const e=t&&t(n)||null;if("function"==typeof(null==(r=e)?void 0:r.then)){let t=!1;return e.then((n=>{t||o(n)})),()=>{t=!0}}var r;o(e)}),[t,n]),e}(u,H),Y=T&&"object"==typeof T&&"__html"in T;return d(v,f(f({},a),{},{ref:P,dangerouslySetInnerHTML:Y?T:null}),Y?null:T)},H.layoutSizeDefined=!0,H.lightDomTag="div",H.usesTemplate=!0,H.props={"datetime":{attrs:["end-date","timeleft-ms","timestamp-ms","timestamp-seconds","offset-seconds"],parseAttrs:function(t){return function(t,n){const e=function(t,n){const e=n.map((t=>a[t]));for(let o=0;o<n.length;++o){const r=t.getAttribute(n[o]);if(r)return e[o](r)}return null}(t,n);return s(e,"One of attributes [%s] is required",n.join(", ")),e+1e3*(Number(t.getAttribute("offset-seconds"))||0)}(t,["end-date","timeleft-ms","timestamp-ms","timestamp-seconds"])}},"whenEnded":{attr:"when-ended"},"locale":{attr:"locale"},"biggestUnit":{attr:"biggest-unit"},"countUp":{attr:"count-up",type:"boolean"}},u("bento-date-countdown",class extends H{checkPropsPostMutations(){const n=function(t,n="template"){if(t.hasAttribute(n)){const o=t.getAttribute(n);return Boolean(o)?t.ownerDocument.querySelector(`template#${e=o,CSS.escape(e)}`):null}var e;return t.querySelector("template")}(this.element);n&&this.mutateProps({"render":e=>({"__html":t.render(n.innerHTML,e)})})}},void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-date-countdown-1.0.mjs.map