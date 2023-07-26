import{_ as be,o as P,c as N,a as f,w as O,v as x,b as $,d as He,r as qe,e as Ve,F as ze,f as Je}from"./index.cd6aee33.js";function Ke(e){return e.name===""||e.surname===""||e.birthday===""||e.address.street===""||e.address.zip===""}function We(e){return e.age<10||e.age>60}function $e(e,t){let n=!1;for(let r=0;r<t.length;r++)e.name==t[r].name&&e.surname==t[r].surname&&e.birthday==t[r].birthday&&(n=!0);return n}let _e=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const Ge={emits:["add"],data(){return{errEmpty:!1,errAge:!1,playerAlreadyExist:!1,player:{name:"",surname:"",birthday:Date,address:{street:"",zip:0,city:""},mail:"",phone:0,sexe:"M"}}},methods:{addPlayer(){var e={id:_e(),name:this.player.name,surname:this.player.surname,birthday:this.player.birthday,address:{street:this.player.address.street,zip:this.player.address.zip,city:this.player.address.city},mail:this.player.mail,phone:this.player.phone,sexe:this.player.sexe};Ke(e)?this.errEmpty=!0:(this.errEmpty=!1,We(e)?this.errAge=!0:(this.errAge=!1,$e(e,this.$root.players)?this.playerAlreadyExist=!0:(this.playerAlreadyExist=!1,this.$emit("add",e))))}}},Xe={class:"addPlayer"},Qe=f("span",{class:"container"},[f("div",{class:"container col-lg-4"},[f("img",{src:He})])],-1),Ze={class:"name"},Ye={class:"container col-lg-4"},et=f("label",{for:"name"},"Pr\xE9nom:",-1),tt=f("br",null,null,-1),nt={class:"container col-lg-4"},rt={class:"surname"},st=f("label",{for:"surname"},"Nom :",-1),ot={class:"name"},it={class:"container col-lg-4"},at=f("label",{for:"name"},"Date de naissance:",-1),lt=f("br",null,null,-1),ct={class:"container col-lg-4"},ut={class:"surname"},dt=f("label",{for:"surname"},"Adresse:",-1),ft={class:"container col-lg-4"},pt={class:"surname"},ht=f("label",{for:"surname"},"Code Postal:",-1),mt={class:"container col-lg-4"},yt={class:"surname"},Et=f("label",{for:"surname"},"Ville :",-1),wt={class:"container col-lg-4"},bt={class:"surname"},_t=f("label",{for:"surname"},"t\xE9l\xE9phone :",-1),St={class:"container col-lg-4"},gt={class:"surname"},At=f("label",{for:"surname"},"mail :",-1),Rt={class:"errMessage"},Ot={key:0},xt={key:1},Tt={key:2},Pt={class:"container"},Nt={class:"container col-lg-4"};function Ct(e,t,n,r,s,i){return P(),N("div",Xe,[Qe,f("div",Ze,[f("div",Ye,[et,tt,O(f("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>s.player.name=o),type:"text",id:"name"},null,512),[[x,s.player.name]])])]),f("div",nt,[f("div",rt,[st,O(f("input",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=o=>s.player.surname=o),type:"text",id:"surname"},null,512),[[x,s.player.surname]])])]),f("div",ot,[f("div",it,[at,lt,O(f("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.player.birthday=o),type:"date",id:"name"},null,512),[[x,s.player.birthday]])])]),f("div",ct,[f("div",ut,[dt,O(f("input",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=o=>s.player.address.street=o),type:"text",id:"surname"},null,512),[[x,s.player.address.street]])])]),f("div",ft,[f("div",pt,[ht,O(f("input",{class:"form-control","onUpdate:modelValue":t[4]||(t[4]=o=>s.player.address.zip=o),type:"text",id:"surname"},null,512),[[x,s.player.address.zip]])])]),f("div",mt,[f("div",yt,[Et,O(f("input",{class:"form-control","onUpdate:modelValue":t[5]||(t[5]=o=>s.player.address.city=o),type:"text",id:"surname"},null,512),[[x,s.player.address.city]])])]),f("div",wt,[f("div",bt,[_t,O(f("input",{class:"form-control","onUpdate:modelValue":t[6]||(t[6]=o=>s.player.phone=o),type:"text",id:"surname"},null,512),[[x,s.player.phone]])])]),f("div",St,[f("div",gt,[At,O(f("input",{class:"form-control","onUpdate:modelValue":t[7]||(t[7]=o=>s.player.mail=o),type:"text",id:"surname"},null,512),[[x,s.player.mail]])])]),f("div",Rt,[s.errEmpty?(P(),N("p",Ot,"Remplissez toutes les cases !")):$("",!0),s.errAge?(P(),N("p",xt,"Age saisi incorrect !")):$("",!0),s.playerAlreadyExist?(P(),N("p",Tt,"Ce joueur existe d\xE9j\xE0 !")):$("",!0)]),f("span",Pt,[f("div",Nt,[f("button",{class:"btn btn-success",onClick:t[8]||(t[8]=o=>i.addPlayer())}," Enregistrer ")])])])}const Dt=be(Ge,[["render",Ct]]);function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:ge}=Object.prototype,{getPrototypeOf:te}=Object,ne=(e=>t=>{const n=ge.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>ne(t)===e),z=e=>t=>typeof t===e,{isArray:U}=Array,L=z("undefined");function Ft(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=R("ArrayBuffer");function Ut(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Bt=z("string"),C=z("function"),Re=z("number"),re=e=>e!==null&&typeof e=="object",Lt=e=>e===!0||e===!1,I=e=>{if(ne(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},kt=R("Date"),jt=R("File"),Mt=R("Blob"),It=R("FileList"),vt=e=>re(e)&&C(e.pipe),Ht=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ge.call(e)===t||C(e.toString)&&e.toString()===t)},qt=R("URLSearchParams"),Vt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],t.call(null,e[l],l,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const xe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!L(e)&&e!==xe;function Q(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,s)=>{const i=e&&Oe(t,s)||s;I(t[i])&&I(r)?t[i]=Q(t[i],r):I(r)?t[i]=Q({},r):U(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const zt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,i)=>{n&&C(s)?e[i]=Se(s,n):e[i]=s},{allOwnKeys:r}),e),Jt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Wt=(e,t,n,r)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$t=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Gt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),Qt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Zt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Yt=R("HTMLFormElement"),en=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),tn=R("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},nn=e=>{Pe(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rn=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return U(e)?r(e):r(String(e).split(t)),n},sn=()=>{},on=(e,t)=>(e=+e,Number.isFinite(e)?e:t),an=e=>{const t=new Array(10),n=(r,s)=>{if(re(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=U(r)?[]:{};return k(r,(o,l)=>{const p=n(o,s+1);!L(p)&&(i[l]=p)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:U,isArrayBuffer:Ae,isBuffer:Ft,isFormData:Ht,isArrayBufferView:Ut,isString:Bt,isNumber:Re,isBoolean:Lt,isObject:re,isPlainObject:I,isUndefined:L,isDate:kt,isFile:jt,isBlob:Mt,isRegExp:tn,isFunction:C,isStream:vt,isURLSearchParams:qt,isTypedArray:Xt,isFileList:It,forEach:k,merge:Q,extend:zt,trim:Vt,stripBOM:Jt,inherits:Kt,toFlatObject:Wt,kindOf:ne,kindOfTest:R,endsWith:$t,toArray:Gt,forEachEntry:Qt,matchAll:Zt,isHTMLForm:Yt,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:Pe,freezeMethods:nn,toObjectSet:rn,toCamelCase:en,noop:sn,toFiniteNumber:on,findKey:Oe,global:xe,isContextDefined:Te,toJSONObject:an};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=y.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ce[e]={value:e}});Object.defineProperties(y,Ce);Object.defineProperty(Ne,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,i)=>{const o=Object.create(Ne);return a.toFlatObject(e,o,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),y.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var ln=typeof self=="object"?self.FormData:window.FormData;const cn=ln;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ce(e,t,n){return e?e.concat(t).map(function(s,i){return s=De(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function un(e){return a.isArray(e)&&!e.some(Z)}const dn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function fn(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(cn||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!a.isUndefined(g[m])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&fn(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,g){let _=d;if(d&&!g&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&un(d)||a.isFileList(d)||a.endsWith(m,"[]")&&(_=a.toArray(d)))return m=De(m),_.forEach(function(M,ve){!(a.isUndefined(M)||M===null)&&t.append(o===!0?ce([m],ve,i):o===null?m:m+"[]",c(M))}),!1}return Z(d)?!0:(t.append(ce(g,m,i),c(d)),!1)}const h=[],b=Object.assign(dn,{defaultVisitor:u,convertValue:c,isVisitable:Z});function E(d,m){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(d),a.forEach(d,function(_,D){(!(a.isUndefined(_)||_===null)&&s.call(t,_,a.isString(D)?D.trim():D,m,b))===!0&&E(_,m?m.concat(D):[D])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&J(e,this,t)}const Fe=se.prototype;Fe.append=function(t,n){this._pairs.push([t,n])};Fe.toString=function(t){const n=t?function(r){return t.call(this,r,ue)}:ue;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function pn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ue(e,t,n){if(!t)return e;const r=n&&n.encode||pn,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class hn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const de=hn,Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mn=typeof URLSearchParams<"u"?URLSearchParams:se,yn=FormData,En=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),wn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:mn,FormData:yn,Blob},isStandardBrowserEnv:En,isStandardBrowserWebWorkerEnv:wn,protocols:["http","https","file","blob","url","data"]};function bn(e,t){return J(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function _n(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Le(e){function t(n,r,s,i){let o=n[i++];const l=Number.isFinite(+o),p=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,p?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Sn(s[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(_n(r),s,n,0)}),n}return null}const gn={"Content-Type":void 0};function An(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:Be,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Le(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return J(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),An(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge(gn)});const oe=K,Rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),On=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Rn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fe=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function xn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Tn(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function pe(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Pn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Nn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,p,c){const u=B(p);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||p]=v(l))}const o=(l,p)=>a.forEach(l,(c,u)=>i(c,u,p));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Tn(t)?o(On(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return xn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&(!n||pe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=B(o),o){const l=a.findKey(r,o);l&&(!n||pe(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=v(s),delete n[i];return}const l=t?Pn(i):String(i).trim();l!==i&&delete n[i],n[l]=v(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[fe]=this[fe]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=B(o);r[l]||(Nn(s,o),r[l]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(W.prototype);a.freezeMethods(W);const A=W;function G(e,t){const n=this||oe,r=t||n,s=A.from(r.headers);let i=r.data;return a.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ke(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){y.call(this,e==null?"canceled":e,y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,y,{__CANCEL__:!0});const Cn=null;function Dn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Fn=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,l){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),a.isString(i)&&p.push("path="+i),a.isString(o)&&p.push("domain="+o),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Un(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function je(e,t){return e&&!Un(t)?Bn(e,t):t}const Ln=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const l=a.isString(o)?s(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function kn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),u=r[i];o||(o=c),n[s]=p,r[s]=c;let h=i,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const E=u&&c-u;return E?Math.round(b*1e3/E):void 0}}function he(e,t){let n=0;const r=jn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,l=i-n,p=r(l),c=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:l,rate:p||void 0,estimated:p&&o&&c?(o-i)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Mn=typeof XMLHttpRequest<"u",In=Mn&&function(e){return new Promise(function(n,r){let s=e.data;const i=A.from(e.headers).normalize(),o=e.responseType;let l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const E=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(E+":"+d))}const u=je(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ue(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const E=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:E,config:e,request:c};Dn(function(_){n(_),p()},function(_){r(_),p()},m),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){!c||(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Be;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new y(d,m.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const E=(e.withCredentials||Ln(u))&&e.xsrfCookieName&&Fn.read(e.xsrfCookieName);E&&i.set(e.xsrfHeaderName,E)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(d,m){c.setRequestHeader(m,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=E=>{!c||(r(!E||E.type?new j(null,e,c):E),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=kn(u);if(b&&S.protocols.indexOf(b)===-1){r(new y("Unsupported protocol "+b+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},H={http:Cn,xhr:In};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const vn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function me(e){return X(e),e.headers=A.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),vn.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return ke(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const ye=e=>e instanceof A?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(c,u,h){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:h},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,h){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,u,h)}function i(c,u){if(!a.isUndefined(u))return r(void 0,u)}function o(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,h){if(h in t)return r(c,u);if(h in e)return r(void 0,c)}const p={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u)=>s(ye(c),ye(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const h=p[u]||s,b=h(e[u],t[u],u);a.isUndefined(b)&&h!==l||(n[u]=b)}),n}const Me="1.2.2",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ee={};ie.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Me+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(t===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ee[o]&&(Ee[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,l):!0}};function Hn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const l=e[i],p=l===void 0||o(l,i,e);if(p!==!0)throw new y("option "+i+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const Y={assertOptions:Hn,validators:ie},T=Y.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new de,response:new de}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&Y.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=A.concat(o,i);const l=[];let p=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(p=p&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,h=0,b;if(!p){const d=[me.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),b=d.length,u=Promise.resolve(n);h<b;)u=u.then(d[h++],d[h++]);return u}b=l.length;let E=n;for(h=0;h<b;){const d=l[h++],m=l[h++];try{E=d(E)}catch(g){m.call(this,g);break}}try{u=me.call(this,E)}catch(d){return Promise.reject(d)}for(h=0,b=c.length;h<b;)u=u.then(c[h++],c[h++]);return u}getUri(t){t=F(this.defaults,t);const n=je(t.baseURL,t.url);return Ue(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,l){return this.request(F(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const q=V;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,l){r.reason||(r.reason=new j(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(s){t=s}),cancel:t}}}const qn=ae;function Vn(e){return function(n){return e.apply(null,n)}}function zn(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const Jn=ee;function Ie(e){const t=new q(e),n=Se(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ie(F(e,s))},n}const w=Ie(oe);w.Axios=q;w.CanceledError=j;w.CancelToken=qn;w.isCancel=ke;w.VERSION=Me;w.toFormData=J;w.AxiosError=y;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Vn;w.isAxiosError=zn;w.mergeConfig=F;w.AxiosHeaders=A;w.formToJSON=e=>Le(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=Jn;w.default=w;const we=w;const Kn={components:{"Input-Add-Player":Dt},data(){return{players:[]}},methods:{async loadAPI(){const e=await we.get("https://script.google.com/macros/library/d/16iwDGMUioocCGcsEnDZguAAptNJ8vkbEEJwKySGQqrdoKF7V9sP6HbmS/5");this.players=e.data},insertDatas(){for(let e=0;e<this.players.length;e++){const t={id:_e(),name:this.players[e].name,surname:this.players[e].surname,age:this.players[e].age,category:this.players[e].category,genre:this.players[e].genre,poste:this.players[e].poste,hasTeam:this.players[e].hasTeam,showTeam:this.players[e].showTeam,src:this.players[e].Photo};this.$root.players.push(t)}},async addPlayer(e){var t=JSON.parse(e);console.log(t);const n=await we.post("https://script.google.com/macros/library/d/16iwDGMUioocCGcsEnDZguAAptNJ8vkbEEJwKySGQqrdoKF7V9sP6HbmS/5",t);console.log(n.data)}}},Wn={class:"playerManage"},$n={class:"playerInput"},Gn={class:"importAPI"};function Xn(e,t,n,r,s,i){const o=qe("Input-Add-Player");return P(),N("div",Wn,[f("div",$n,[Ve(o,{onAdd:t[0]||(t[0]=l=>i.addPlayer(l))})]),f("div",Gn,[f("button",{onClick:t[1]||(t[1]=l=>i.loadAPI())},"Charger API"),(P(!0),N(ze,null,Je(s.players,l=>(P(),N("li",{key:l.id},"player loaded"))),128)),f("button",{onClick:t[2]||(t[2]=(...l)=>i.insertDatas&&i.insertDatas(...l))},"Cliquer pour ins\xE9rer Data dans Liste")])])}const Zn=be(Kn,[["render",Xn]]);export{Zn as default};
