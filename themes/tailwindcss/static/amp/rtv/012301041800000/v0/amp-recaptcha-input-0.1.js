;
(self.AMP=self.AMP||[]).push({m:0,v:"2301041800000",n:"amp-recaptcha-input",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,r){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,r)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var f="name";function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function o(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var a,s=Object.prototype;function c(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function h(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,i=t.stack,e=new Error(r);for(var f in t)e[f]=t[f];return e.stack=i,e}function l(t){for(var n,r=null,i="",e=o(arguments,!0);!(n=e()).done;){var f=n.value;f instanceof Error&&!r?r=h(f):(i&&(i+=" "),i+=f)}return r?i&&(r.message=i+": "+r.message):r=new Error(i),r}function p(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}s.hasOwnProperty,s.toString;var v=["Webkit","webkit","Moz","moz","ms","O","o"];function m(t,n,r,i,e){var f=function(t,n,r){if(n.startsWith("--"))return n;a||(a=c());var i=a[n];if(!i||r){if(i=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),f=function(t,n){for(var r=0;r<v.length;r++){var i=v[r]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[f]&&(i=f)}r||(a[n]=i)}return i}(t.style,n,e);if(f){var u,o=i?r+i:r;t.style.setProperty((u=f.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),v.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),o)}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d=self.__AMP_LOG;function b(t,n){throw new Error("failed to call initLogConstructor")}function w(t){return d.user||(d.user=g()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(d.user.win,t)?d.userForEmbed||(d.userForEmbed=g()):d.user}function g(t){return b()}function y(t,n,r,i,e,f,u,o,a,s,c){return t}function x(t,n,r,i,e,f,u,o,a,s,c){return w().assert(t,n,r,i,e,f,u,o,a,s,c)}var j=function(){var t=this;this.promise=new Promise((function(n,r){t.resolve=n,t.reject=r}))};function k(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function E(t){return t.nodeType?(r=t,n=(r.ownerDocument||r).defaultView,function(t,n){return S(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,r}function O(t){var n=E(t);return n.isSingleDoc()?n.win:n}function S(t,n){y(z(t,n));var r=q(t)[n];return r.obj||(y(r.ctor),y(r.context),r.obj=new r.ctor(r.context),y(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function q(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function z(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}var I;function P(t){return t.data}function R(t,n,r,i){var e=r,f=function(t,n,r,i){var e=t,f=r,u=function(t){try{return f(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}},o=function(){if(void 0!==I)return I;I=!1;try{var t={get capture(){return I=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return I}(),a=!(null==i||!i.capture);return e.addEventListener(n,u,o?i:a),function(){null==e||e.removeEventListener(n,u,o?i:a),f=null,e=null,u=null}}(t,n,(function(t){try{e(t)}finally{e=null,f()}}),i);return f}function A(t){return"AUDIO"===t.tagName||"VIDEO"===t.tagName}function U(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}var C,N,T=function(){function t(t){this.Lt=t,this.Wt=0,this.Kt=0,this.Qt=c()}var n=t.prototype;return n.has=function(t){return!!this.Qt[t]},n.get=function(t){var n=this.Qt[t];if(n)return n.access=++this.Kt,n.payload},n.put=function(t,n){this.has(t)||this.Wt++,this.Qt[t]={payload:n,access:this.Kt},this.Xt()},n.Xt=function(){if(!(this.Wt<=this.Lt)){var t,n=this.Qt,r=this.Kt+1;for(var i in n){var e=n[i].access;e<r&&(r=e,t=i)}void 0!==t&&(delete n[t],this.Wt--)}},t}(),F=function(){return self.AMP.config.urls}(),M=new Set(["c","v","a","ad"]),$=function(t){return"string"==typeof t?D(t):t};function D(t,n){return C||(C=self.document.createElement("a"),N=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new T(100))),function(t,n,r){if(r&&r.has(n))return r.get(n);t.href=n,t.protocol||(t.href=t.href);var i,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),i=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=i;var f=e;return r&&r.put(n,f),f}(C,t,n?null:N)}var J="unlisten";function Z(t,n,r){var i=function(t,n){var r=t.listeningFors;return!r&&n&&(r=t.listeningFors=Object.create(null)),r||null}(t,r);if(!i)return i;var e=i[n];return!e&&r&&(e=i[n]=[]),e||null}function B(t,n){for(var r=n;r&&r!=r.parent;r=r.parent)if(r==t)return!0;return!1}function L(t){for(var n={"sentinel":J},r=t.length-1;r>=0;r--){var i=t[r];if(!i.frame.contentWindow){t.splice(r,1);var e=i.events;for(var f in e)e[f].splice(0,1/0).forEach((function(t){t(n)}))}}}function Y(t,n){return n?t.getAttribute("data-amp-3p-sentinel"):"amp"}var _="ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" "),G="### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" "),H="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(t,n){if(n=n.split(":")[0],!(t=+t))return!1;switch(n){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}var W=Object.prototype.hasOwnProperty,K=function(t,n){n=n||"";var r=[];for(var i in"string"!=typeof n&&(n="?"),t)W.call(t,i)&&r.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return r.length?n+r.join("&"):""},Q=function(t){for(var n,r=/([^=?&]+)=?([^&]*)/g,i={};n=r.exec(t);){var e=decodeURIComponent(n[1].replace(/\+/g," "));n=decodeURIComponent(n[2].replace(/\+/g," ")),e in i||(i[e]=n)}return i},X=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,tt=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,nt=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],rt={hash:1,query:1};function it(t,n,r){if(!(this instanceof it))return new it(t,n,r);var e=nt.slice(),f=i(n),u=0;"object"!==f&&"string"!==f&&(r=n,n=null),r&&"function"!=typeof r&&(r=Q),f=H&&H.location||{},n=n||f,f={};var o=i(n);if("blob:"===n.protocol)f=new it(unescape(n.pathname),{});else if("string"===o)for(a in f=new it(n,{}),rt)delete f[a];else if("object"===o){for(a in n)a in rt||(f[a]=n[a]);void 0===f.slashes&&(f.slashes=tt.test(n.href))}n=f;var a=X.exec(t||"");for(t=a[1]?a[1].toLowerCase():"",f=!!a[2],o=a[3],a=!t&&!f,this.slashes=f||a&&n.slashes,this.protocol=t||n.protocol||"",t=o,f||(e[3]=[/(.*)/,"pathname"]);u<e.length;u++)if("function"==typeof(f=e[u]))t=f(t);else{var s=f[0];o=f[1],s!=s?this[o]=t:"string"==typeof s?~(s=t.indexOf(s))&&("number"==typeof f[2]?(this[o]=t.slice(0,s),t=t.slice(s+f[2])):(this[o]=t.slice(s),t=t.slice(0,s))):(s=s.exec(t))&&(this[o]=s[1],t=t.slice(0,s.index)),this[o]=this[o]||a&&f[3]&&n[o]||"",f[4]&&(this[o]=this[o].toLowerCase())}if(r&&(this.query=r(this.query)),a&&n.slashes&&"/"!==this.pathname.charAt(0)&&(""!==this.pathname||""!==n.pathname)){for(r=this.pathname,u=(r=(n.pathname||"/").split("/").slice(0,-1).concat(r.split("/")))[(e=r.length)-1],n=!1,t=0;e--;)"."===r[e]?r.splice(e,1):".."===r[e]?(r.splice(e,1),t++):t&&(0===e&&(n=!0),r.splice(e,1),t--);n&&r.unshift(""),"."!==u&&".."!==u||r.push(""),this.pathname=r.join("/")}V(this.port,this.protocol)||(this.host=this.hostname,this.port=""),this.username=this.password="",this.auth&&(f=this.auth.split(":"),this.username=f[0]||"",this.password=f[1]||""),this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null",this.href=this.toString()}it.prototype={set:function(t,n,r){switch(t){case"query":"string"==typeof n&&n.length&&(n=(r||Q)(n)),this[t]=n;break;case"port":this[t]=n,V(n,this.protocol)?n&&(this.host=this.hostname+":"+n):(this.host=this.hostname,this[t]="");break;case"hostname":this[t]=n,this.port&&(n+=":"+this.port),this.host=n;break;case"host":this[t]=n,/:\d+$/.test(n)?(n=n.split(":"),this.port=n.pop(),this.hostname=n.join(":")):(this.hostname=n,this.port="");break;case"protocol":this.protocol=n.toLowerCase(),this.slashes=!r;break;case"pathname":case"hash":n?(r="pathname"===t?"/":"#",this[t]=n.charAt(0)!==r?r+n:n):this[t]=n;break;default:this[t]=n}for(t=0;t<nt.length;t++)(n=nt[t])[4]&&(this[n[1]]=this[n[1]].toLowerCase());return this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null",this.href=this.toString(),this},toString:function(t){t&&"function"==typeof t||(t=K);var n=this.protocol;return n&&":"!==n.charAt(n.length-1)&&(n+=":"),n+=this.slashes?"//":"",this.username&&(n+=this.username,this.password&&(n+=":"+this.password),n+="@"),n+=this.host+this.pathname,(t="object"===i(this.query)?t(this.query):this.query)&&(n+="?"!==t.charAt(0)?"?"+t:t),this.hash&&(n+=this.hash),n}},it.extractProtocol=null,it.location=null,it.qs=null;var et=/^xn--/,ft=/[^\x20-\x7E]/,ut=/[\x2E\u3002\uFF0E\uFF61]/g,ot={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},at=Math.floor,st=String.fromCharCode;function ct(t){throw new RangeError(ot[t])}function ht(t,n){for(var r=t.length,i=[];r--;)i[r]=n(t[r]);return i}function lt(t,n){var r=t.split("@"),i="";return 1<r.length&&(i=r[0]+"@",t=r[1]),i+ht(t=(t=t.replace(ut,".")).split("."),n).join(".")}function pt(t,n){return t+22+75*(26>t)-((0!=n)<<5)}function vt(t,n,r){var i=0;for(t=r?at(t/700):t>>1,t+=at(t/n);455<t;i+=36)t=at(t/35);return at(i+36*t/(t+38))}var mt=function(t){return lt(t,(function(t){return et.test(t)?function(t){var n,r,i=[],e=t.length,f=0,u=128,o=72,a=t.lastIndexOf("-");for(0>a&&(a=0),n=0;n<a;++n)128<=t.charCodeAt(n)&&ct("not-basic"),i.push(t.charCodeAt(n));for(a=0<a?a+1:0;a<e;){n=f;var s=1;for(r=36;;r+=36){a>=e&&ct("invalid-input");var c=t.charCodeAt(a++);(36<=(c=10>c-48?c-22:26>c-65?c-65:26>c-97?c-97:36)||c>at((2147483647-f)/s))&&ct("overflow"),f+=c*s;var h=r<=o?1:r>=o+26?26:r-o;if(c<h)break;s>at(2147483647/(c=36-h))&&ct("overflow"),s*=c}o=vt(f-n,s=i.length+1,0==n),at(f/s)>2147483647-u&&ct("overflow"),u+=at(f/s),f%=s,i.splice(f++,0,u)}return function(t){return ht(t,(function(t){var n="";return 65535<t&&(n+=st((t-=65536)>>>10&1023|55296),t=56320|1023&t),n+st(t)})).join("")}(i)}(t.slice(4).toLowerCase()):t}))},dt=/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,bt=/[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/;function wt(t){t=new it(t).hostname;var n=mt(t);return(n=63>=t.length&&!(dt.test(n)&&bt.test(n))&&-1!=t.indexOf("."))?63<(n=function(t){return lt(t,(function(t){return ft.test(t)?"xn--"+function(t){var n,r,i,e=[],f=(t=function(t){for(var n,r,i=[],e=0,f=t.length;e<f;)55296<=(n=t.charCodeAt(e++))&&56319>=n&&e<f?56320==(64512&(r=t.charCodeAt(e++)))?i.push(((1023&n)<<10)+(1023&r)+65536):(i.push(n),e--):i.push(n);return i}(t)).length,u=128,o=0,a=72;for(i=0;i<f;++i){var s=t[i];128>s&&e.push(st(s))}for((n=r=e.length)&&e.push("-");n<f;){var c=2147483647;for(i=0;i<f;++i)(s=t[i])>=u&&s<c&&(c=s);var h=n+1;for(c-u>at((2147483647-o)/h)&&ct("overflow"),o+=(c-u)*h,u=c,i=0;i<f;++i)if((s=t[i])<u&&2147483647<++o&&ct("overflow"),s==u){var l=o;for(c=36;!(l<(s=c<=a?1:c>=a+26?26:c-a));c+=36){var p=l-s;l=36-s,e.push(st(pt(s+p%l,0))),l=at(p/l)}e.push(st(pt(l,0))),a=vt(o,h,n==r),o=0,++n}++o,++u}return e.join("")}(t):t}))}(n=(n=(n=mt(t)).split("-").join("--")).split(".").join("-")).toLowerCase()).length?gt(t):Promise.resolve(n):gt(t)}function gt(t){return function(t){if("undefined"!=typeof window)return t=new TextEncoder("utf-8").encode(t),crypto.subtle.digest("SHA-256",t).then((function(t){var n=[];t=new DataView(t);for(var r=0;r<t.byteLength;r+=4){var i=("00000000"+t.getUint32(r).toString(16)).slice(-8);n.push(i)}return n.join("")}));var n=Buffer.from(t,"utf-8"),r={};return new Promise((function(t){t(r.createHash("sha256").update(n).digest("hex"))}))}(t).then((function(t){return function(t){var n=[];t.match(/.{1,2}/g).forEach((function(t,r){n[r]=parseInt(t,16)}));var r=n.length%5,i=Math.floor(n.length/5);if(t=[],0!=r){for(var e=0;e<5-r;e++)n+="\0";i+=1}for(e=0;e<i;e++)t.push("abcdefghijklmnopqrstuvwxyz234567".charAt(n[5*e]>>3)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((7&n[5*e])<<2|n[5*e+1]>>6)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((63&n[5*e+1])>>1)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((1&n[5*e+1])<<4|n[5*e+2]>>4)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((15&n[5*e+2])<<1|n[5*e+3]>>7)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((127&n[5*e+3])>>2)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((3&n[5*e+3])<<3|n[5*e+4]>>5)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt(31&n[5*e+4]));for(i=0,1==r?i=6:2==r?i=4:3==r?i=3:4==r&&(i=1),r=0;r<i;r++)t.pop();for(r=0;r<i;r++)t.push("=");return t.join("")}("ffffffffff"+t+"000000").substr(8,Math.ceil(4*t.length/5))}))}var yt={createCacheUrl:function(t,n){var r=new it(n),i=function(t){return function(t){return _.some((function(n){return!!t.endsWith(n)}))}(t)?"/i":function(t){return G.some((function(n){return!!t.endsWith(n)}))}(t)?"/r":"/c"}(r.pathname);return i+="https:"===r.protocol?"/s/":"/",wt(r.toString()).then((function(e){var f=new it(n);return f.protocol="https",e=e+"."+t,f.host=e,f.hostname=e,f.pathname=i+r.hostname+r.pathname,f.toString()}))},createCurlsSubdomain:wt},xt=function(){return self.AMP.config.urls}(),jt=function(){function t(t){this.te=t,this.t=this.te.win,this.Mnt=null,this.tb=null,this.$nt=null,this.Znt=0,this.Ynt=null,this.Gnt=new j,this.Aw=[],this.Hnt={},this.Wnt}var n=t.prototype;return n.register=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.Mnt){if(this.Mnt!==t)return Promise.reject(new Error("You must supply the same sitekey to all amp-recaptcha-input elements."))}else this.Mnt=t;if(void 0===this.Wnt)this.Wnt=n;else if(this.Wnt!==n)return Promise.reject(new Error("You must supply the data-global attribute to all or none of the amp-recaptcha-input elements."));return this.Znt++,this.$nt||(this.$nt=this.Ts()),this.$nt},n.unregister=function(){this.Znt--,this.Znt<=0&&this.eF()},n.execute=function(t,n){var r=this;if(!this.tb)return Promise.reject(new Error("An iframe is not created. You must register before executing"));var i=new j,e=t;return this.Hnt[e]={resolve:i.resolve,reject:i.reject},this.Gnt.promise.then((function(){var t={"id":e,"action":"amp_"+n};r.Knt(y(r.Ynt),t)})),i.promise},n.Ts=function(){var t=this;return this.Qnt().then((function(n){return t.tb=n,t.Aw=[t.Xnt("amp-recaptcha-ready",(function(){return t.Gnt.resolve()})),t.Xnt("amp-recaptcha-token",t.trt.bind(t)),t.Xnt("amp-recaptcha-error",t.nrt.bind(t))],t.Hnt={},t.t.document.body.appendChild(t.tb),function(t){var n,r;if(function(t){return!!(t.complete||"complete"==t.readyState||A(t)&&t.readyState>0||t.document&&"complete"==t.document.readyState)}(t))return Promise.resolve(t);var i=A(t);return i&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise((function(e,f){if(n=i?R(t,"loadedmetadata",e,{capture:!0}):R(t,"load",e),t.tagName){var u=t;if(i&&!t.hasAttribute("src")&&!(u=function(t,n){for(var r=t.lastElementChild;r;r=r.previousElementSibling)if(n(r))return r;return null}(t,(function(t){return"SOURCE"===t.tagName}))))return f(new Error("Media has no source."));r=R(u,"error",f)}})).then((function(){return r&&r(),t}),(function(){n&&n(),function(t){A(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);var n=t;throw n&&n.src&&(n=n.src),w().createError("Failed to load:",n)}(t)}))}(t.tb)}))},n.eF=function(){var t,n;this.tb&&(null===(n=(t=this.tb).parentElement)||void 0===n||n.removeChild(t),this.Aw.forEach((function(t){return t()})),this.tb=null,this.$nt=null,this.Gnt=new j,this.Aw=[],this.Hnt={})},n.Qnt=function(){var t=this,n=this.t.document.createElement("iframe");return this.rrt().then((function(r){return t.Ynt=D(function(t){if(!function(t){return F.cdnProxyRegex.test($(t).origin)}(t=$(t)))return t.href;var n=t.pathname.split("/"),r=n[1];x(M.has(r),"Unknown path prefix in url %s",t.href);var i=n[2],e="s"==i?"https://"+decodeURIComponent(n[3]):"http://"+decodeURIComponent(i);return x(e.indexOf(".")>0,"Expected a . in origin %s",e),n.splice(1,"s"==i?3:2),e+n.join("/")+function(t,n){if(!t||"?"==t)return"";var r=new RegExp("[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)","\\b[^&]*"),"g"),i=t.replace(r,"").replace(/^[?&]/,"");return i?"?"+i:""}(t.search)+(t.hash||"")}(r)).origin,n.src=r,n.setAttribute("scrolling","no"),n.setAttribute("data-amp-3p-sentinel","amp-recaptcha"),n.setAttribute("name",JSON.stringify({"sitekey":t.Mnt,"sentinel":"amp-recaptcha","global":t.Wnt})),n.classList.add("i-amphtml-recaptcha-iframe"),m(n,"border","none"),n.onload=function(){this.readyState="complete"},n}))},n.rrt=function(){var t,n,r,i=this,e=void 0;return(n=this.te.getHeadNode(),z(r=O(E(n)),"url")?S(r,"url"):null).isProxyOrigin(this.t.location.href)?(t=function(){return i.t.location.hostname.split(".")[0]},e=new Promise((function(n){n(t())}))):e=yt.createCurlsSubdomain(this.t.location.href),e.then((function(t){return"https://"+t+".recaptcha.".concat(xt.thirdPartyFrameHost,"/").concat("2301041800000","/")+"recaptcha.html"}))},n.Xnt=function(t,n){var r=this;return function(t,n,r,i,e,f){y(t.src),y(!t.parentNode),y(r);var u=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(P(n)){var r=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?k(t,(function(t){(d.dev||(d.dev=b())).warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",t)}))||null:U(t)?function(t){if(!U(t))return null;var n=t.indexOf("{");return k(t.substr(n),(function(n){!function(t){var n=l.apply(null,arguments);setTimeout((function(){throw p(n),n}))}(new Error("MESSAGING: Failed to parse message: ".concat(t,"\n").concat(n.message)))}))}(t):null),t}(P(n));if(r&&r.sentinel){var i=function(t,n,r,i){var e,f=Z(t,n);if(!f)return f;for(var u=0;u<f.length;u++){var o=f[u],a=o.frame.contentWindow;if(a){if(i==a||B(a,i)){e=o;break}}else setTimeout(L,0,f)}return e?e.events:null}(t,r.sentinel,n.origin,n.source);if(i){var e=i[r.type];if(e){e=e.slice();for(var f=0;f<e.length;f++)(0,e[f])(r,n.source,n.origin,n)}}}}}))}(u);var o,a=function(t,n,r){for(var i,e=Z(t,Y(n,true),!0),f=0;f<e.length;f++){var u=e[f];if(u.frame===n){i=u;break}}return i||(i={frame:n,events:Object.create(null)},e.push(i)),i.events}(u,t),s=D(t.src).origin,c=a[n]||(a[n]=[]),h=function(n,i,e,f){if("amp"==n.sentinel){if(i!=t.contentWindow)return;if(s!=e)return}i==t.contentWindow&&(n.sentinel!=J?r(n,i,e,f):o())};return c.push(h),o=function(){if(h){var t=c.indexOf(h);t>-1&&c.splice(t,1),h=null,c=null,r=null}}}(this.tb,t,(function(t,i,e){r.Ynt===e&&n(t,i,e)}))},n.Knt=function(t,n){var r,i,e;i=n,e=t,function(t,n,r,i,e){if(t.contentWindow){i.type="amp-recaptcha-action",i.sentinel=Y(t,true);var f=i;f="amp-"+JSON.stringify(i);for(var u=0;u<n.length;u++){var o=n[u];o.win.postMessage(f,o.origin)}}}(r=this.tb,[{win:r.contentWindow,origin:e}],0,i)},n.trt=function(t){var n=t.id,r=t.token;this.Hnt[n].resolve(r),delete this.Hnt[n]},n.nrt=function(t){var n=t.id,r=t.error;this.Hnt[n].reject(new Error(r)),delete this.Hnt[n]},t}(),kt=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&n(t,r)}(a,t);var i,u,o=(i=a,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(i);if(u){var f=r(this).constructor;t=Reflect.construct(n,arguments,f)}else t=n.apply(this,arguments);return e(this,t)});function a(t){var n;return(n=o.call(this,t)).Mnt=null,n.Ks=null,n.irt=null,n.ert=null,n.Wnt=!1,n}var s=a.prototype;return s.buildCallback=function(){var t,n,r,i=this;return this.Mnt=x(this.element.getAttribute("data-sitekey"),"The data-sitekey attribute is required for <amp-recaptcha-input> %s",this.element),this.Ks=x(this.element.getAttribute("data-action"),"The data-action attribute is required for <amp-recaptcha-input> %s",this.element),x(this.element.getAttribute(f),"The %s attribute is required for <amp-recaptcha-input> %s",f,this.element),this.Wnt=this.element.hasAttribute("data-global"),(t=this.element,n=t,r="amp-recaptcha",function(t,n){var r=function(t,n){var r=q(t)[n];return r?r.promise?r.promise:(S(t,n),r.promise=Promise.resolve(r.obj)):null}(t,n);if(r)return r;var i,e,f,u,o=q(t);return o[n]=(e=(i=new j).promise,f=i.reject,u=i.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:u,reject:f,context:null,ctor:null}),o[n].promise}(O(n),r)).then((function(t){return i.irt=t,i.mutateElement((function(){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(i.element),i.element.classList.add("i-amphtml-async-input"),function(t,n){for(var r in n)m(t,r,n[r])}(i.element,{"position":"absolute","width":"1px","height":"1px","overflow":"hidden","visibility":"hidden"})}))}))},s.isLayoutSupported=function(t){return"nodisplay"==t},s.layoutCallback=function(){return!this.ert&&this.Mnt&&(this.ert=this.irt.register(this.Mnt,this.Wnt)),this.ert},s.unlayoutCallback=function(){return this.ert&&(this.irt.unregister(),this.ert=null),!0},s.getValue=function(){return this.Mnt&&this.Ks?this.irt.execute(this.element.getResourceId(),this.Ks):Promise.reject(new Error("amp-recaptcha-input requires both the data-sitekey, and data-action attribute"))},a}(t.BaseElement);t.registerServiceForDoc("amp-recaptcha",jt),t.registerElement("amp-recaptcha-input",kt,".i-amphtml-recaptcha-iframe{position:fixed!important;top:0px!important;left:0px!important;height:1px!important;width:1px!important;overflow:hidden!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-recaptcha-input/0.1/amp-recaptcha-input.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-recaptcha-input-0.1.js.map