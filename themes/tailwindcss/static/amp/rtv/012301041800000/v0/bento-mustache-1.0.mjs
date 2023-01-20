;
var t=Object.prototype.toString,n=Array.isArray||function(n){return"[object Array]"===t.call(n)};function e(t){return"function"==typeof t}function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(t,n){return null!=t&&"object"==typeof t&&n in t}var o=RegExp.prototype.test,s=/\S/,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},f=/\s*/,c=/\s+/,h=/\s*=/,a=/\s*\}/,l=/#|\^|\/|>|\{|&|=|!/;function p(t){this.string=t,this.tail=t,this.pos=0}function d(t,n){this.view=t,this.cache={".":this.view},this.parent=n}function v(){this.templateCache={_cache:{},set:function(t,n){this._cache[t]=n},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}p.prototype.eos=function(){return""===this.tail},p.prototype.scan=function(t){const n=this.tail.match(t);if(!n||0!==n.index)return"";const e=n[0];return this.tail=this.tail.substring(e.length),this.pos+=e.length,e},p.prototype.scanUntil=function(t){let n,e=this.tail.search(t);switch(e){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,e),this.tail=this.tail.substring(e)}return this.pos+=n.length,n},d.prototype.push=function(t){return new d(t,this)},d.prototype.lookup=function(t){const{cache:n}=this;let i;if(n.hasOwnProperty(t))i=n[t];else{let e,u,f,c=this,h=!1;for(;c;){if(t.indexOf(".")>0)for(e=c.view,u=t.split("."),f=0;null!=e&&f<u.length;)f===u.length-1&&(h=r(e,u[f])||(o=e,s=u[f],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(s))),e=e[u[f++]];else e=c.view[t],h=r(c.view,t);if(h){i=e;break}c=c.parent}n[t]=i}var o,s;return e(i)&&(i=i.call(this.view)),i},v.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},v.prototype.parse=function(t,e){const r=this.templateCache,u=t+":"+(e||w.tags).join(":"),d=void 0!==r;let v=d?r.get(u):void 0;return null==v&&(v=function(t,e){if(!t)return[];let r=!1;const u=[],d=[];let v,g,b,y=[],m=!1,x=!1,E="",j=0;function k(){if(m&&!x)for(;y.length;)delete d[y.pop()];else y=[];m=!1,x=!1}function C(t){if("string"==typeof t&&(t=t.split(c,2)),!n(t)||2!==t.length)throw new Error("Invalid tags: "+t);v=new RegExp(i(t[0])+"\\s*"),g=new RegExp("\\s*"+i(t[1])),b=new RegExp("\\s*"+i("}"+t[1]))}C(e||w.tags);const R=new p(t);let S,U,A,I,T,$;for(;!R.eos();){if(S=R.pos,A=R.scanUntil(v),A)for(let t=0,n=A.length;t<n;++t)I=A.charAt(t),q=s,D=I,o.call(q,D)?(x=!0,r=!0,E+=" "):(y.push(d.length),E+=I),d.push(["text",I,S,S+1]),S+=1,"\n"===I&&(k(),E="",j=0,r=!1);if(!R.scan(v))break;if(m=!0,U=R.scan(l)||"name",R.scan(f),"="===U?(A=R.scanUntil(h),R.scan(h),R.scanUntil(g)):"{"===U?(A=R.scanUntil(b),R.scan(a),R.scanUntil(g),U="&"):A=R.scanUntil(g),!R.scan(g))throw new Error("Unclosed tag at "+R.pos);if(T=">"==U?[U,A,S,R.pos,E,j,r]:[U,A,S,R.pos],j++,d.push(T),"#"===U||"^"===U)u.push(T);else if("/"===U){if($=u.pop(),!$)throw new Error('Unopened section "'+A+'" at '+S);if($[1]!==A)throw new Error('Unclosed section "'+$[1]+'" at '+S)}else"name"===U||"{"===U||"&"===U?x=!0:"="===U&&C(A)}var q,D;if(k(),$=u.pop(),$)throw new Error('Unclosed section "'+$[1]+'" at '+R.pos);return function(t){const n=[];let e=n;const i=[];let r,o;for(let s=0,u=t.length;s<u;++s)switch(r=t[s],r[0]){case"#":case"^":e.push(r),i.push(r),e=r[4]=[];break;case"/":o=i.pop(),o[5]=r[2],e=i.length>0?i[i.length-1][4]:n;break;default:e.push(r)}return n}(function(t){const n=[];let e,i;for(let r=0,o=t.length;r<o;++r)e=t[r],e&&("text"===e[0]&&i&&"text"===i[0]?(i[1]+=e[1],i[3]=e[3]):(n.push(e),i=e));return n}(d))}(t,e),d&&r.set(u,v)),v},v.prototype.render=function(t,n,e,i){const r=this.getConfigTags(i),o=this.parse(t,r),s=n instanceof d?n:new d(n,void 0);return this.renderTokens(o,s,e,t,i)},v.prototype.renderTokens=function(t,n,e,i,r){let o,s,u,f="";for(let c=0,h=t.length;c<h;++c)u=void 0,o=t[c],s=o[0],"#"===s?u=this.renderSection(o,n,e,i,r):"^"===s?u=this.renderInverted(o,n,e,i,r):">"===s?u=this.renderPartial(o,n,e,r):"&"===s?u=this.unescapedValue(o,n):"name"===s?u=this.escapedValue(o,n,r):"text"===s&&(u=this.rawValue(o)),void 0!==u&&(f+=u);return f},v.prototype.renderSection=function(t,i,r,o,s){const u=this;let f="",c=i.lookup(t[1]);if(c){if(n(c))for(let n=0,e=c.length;n<e;++n)f+=this.renderTokens(t[4],i.push(c[n]),r,o,s);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)f+=this.renderTokens(t[4],i.push(c),r,o,s);else if(e(c)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");c=c.call(i.view,o.slice(t[3],t[5]),(function(t){return u.render(t,i,r,s)})),null!=c&&(f+=c)}else f+=this.renderTokens(t[4],i,r,o,s);return f}},v.prototype.renderInverted=function(t,e,i,r,o){const s=e.lookup(t[1]);if(!s||n(s)&&0===s.length)return this.renderTokens(t[4],e,i,r,o)},v.prototype.indentPartial=function(t,n,e){const i=n.replace(/[^ \t]/g,""),r=t.split("\n");for(let t=0;t<r.length;t++)r[t].length&&(t>0||!e)&&(r[t]=i+r[t]);return r.join("\n")},v.prototype.renderPartial=function(t,n,i,r){if(!i)return;const o=this.getConfigTags(r),s=e(i)?i(t[1]):i[t[1]];if(null!=s){const e=t[6],u=t[5],f=t[4];let c=s;0==u&&f&&(c=this.indentPartial(s,f,e));const h=this.parse(c,o);return this.renderTokens(h,n,i,c,r)}},v.prototype.unescapedValue=function(t,n){const e=n.lookup(t[1]);if(null!=e)return e},v.prototype.escapedValue=function(t,n,e){const i=this.getConfigEscape(e)||w.escape,r=n.lookup(t[1]);if(null!=r)return"number"==typeof r&&i===w.escape?String(r):i(r)},v.prototype.rawValue=function(t){return t[1]},v.prototype.getConfigTags=function(t){return n(t)?t:t&&"object"==typeof t?t.tags:void 0},v.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!n(t)?t.escape:void 0};var w={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){g.templateCache=t},get templateCache(){return g.templateCache}},g=new v;w.clearCache=function(){return g.clearCache()},w.parse=function(t,n){return g.parse(t,n)},w.render=function(t,e,i,r){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(n(o=t)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)');var o;return g.render(t,e,i,r)},w.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return u[t]}))},w.Scanner=p,w.Context=d,w.Writer=v;var b=w;export{b as default};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
//# sourceMappingURL=bento-mustache-1.0.mjs.map