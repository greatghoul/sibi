function __moonf__(){
if(!window.__moonhasinit){
window.__moonhasinit=!0,window.__moonclientlog=[],window.__wxgspeeds&&(window.__wxgspeeds.moonloadedtime=+new Date),
"object"!=typeof JSON&&(window.JSON={
stringify:function(){
return"";
},
parse:function(){
return{};
}
});
var e=function(){
!function(){
var e={},o={},t={};
e.COMBO_UNLOAD=0,e.COMBO_LOADING=1,e.COMBO_LOADED=2;
var n=function(e,t,n){
if(!o[e]){
o[e]=n;
for(var r=3;r--;)try{
moon.setItem(moon.prefix+e,n.toString()),moon.setItem(moon.prefix+e+"_ver",moon_map[e]);
break;
}catch(i){
moon.clear();
}
}
},r=window.alert;
window.__alertList=[],window.alert=function(e){
r(e),window.__alertList.push(e);
};
var i=function(e){
if(!e||!o[e])return null;
var n=o[e];
if("function"==typeof n&&!t[e]){
var a={},s={
exports:a
},c=n(i,a,s,r);
n=o[e]=c||s.exports,t[e]=!0;
}
if(".css"===e.substr(-4)){
var d=document.getElementById(e);
if(!d){
d=document.createElement("style"),d.id=e;
var w=/url\s*\(\s*\/(\"(?:[^\\\"\r\n\f]|\\[\s\S])*\"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|[^)}]+)\s*\)/g,m=window.testenv_reshost||window.__moon_host||"res.wx.qq.com";
n=n.replace(w,"url(//"+m+"/$1)"),d.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(d);
}
}
return n;
};
e.combo_status=e.COMBO_UNLOAD,e.run=function(){
var o=e.run.info,t=o&&o[0],n=o&&o[1];
if(t&&e.combo_status==e.COMBO_LOADED){
var r=i(t);
n&&n(r);
}
},e.use=function(o,t){
window.__wxgspeeds&&(window.__wxgspeeds.seajs_use_time=+new Date),e.run.info=[o,t],
e.run();
},window.define=n,window.seajs=e;
}(),function(){
if(window.__nonce_str){
var e=document.createElement;
document.createElement=function(o){
var t=e.apply(this,arguments);
return"object"==typeof o&&(o=o.toString()),"string"==typeof o&&"script"==o.toLowerCase()&&t.setAttribute("nonce",window.__nonce_str),
t;
};
}
window.addEventListener&&window.__DEBUGINFO&&Math.random()<.01&&window.addEventListener("load",function(){
var e=document.createElement("script");
e.src=__DEBUGINFO.safe_js,e.type="text/javascript",e.async=!0;
var o=document.head||document.getElementsByTagName("head")[0];
o.appendChild(e);
});
}(),function(){
function e(e){
return"[object Array]"===Object.prototype.toString.call(e);
}
function t(e){
return"[object Object]"===Object.prototype.toString.call(e);
}
function n(e){
var t=e.stack+" "+e.toString()||"";
try{
if(window.testenv_reshost){
var n="http(s)?://"+window.testenv_reshost,r=new RegExp(n,"g");
t=t.replace(r,"");
}else t=t.replace(/http(s)?:\/\/res\.wx\.qq\.com/g,"");
for(var r=/\/([^.]+)\/js\/(\S+?)\.js(\,|:)?/g;r.test(t);)t=t.replace(r,"$2$3");
}catch(e){
t=e.stack?e.stack:"";
}
var i=[];
for(o in p)p.hasOwnProperty(o)&&i.push(o+":"+p[o]);
return i.push("STK:"+t.replace(/\n/g,"")),i.join("|");
}
function r(e){
try{
var o;
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?o="writeLog":/(Android)/i.test(navigator.userAgent)&&(o="log"),
o&&i(o,e);
}catch(t){
throw console.error(t),t;
}
}
function i(e,o){
e&&top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?top.window.WeixinJSBridge.invoke(e,{
level:"info",
msg:"[WechatFe][moon] [define_error]"+o
}):setTimeout(function(){
top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",i(e,o),!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",i(e,o)),
top.window.document.attachEvent("onWeixinJSBridgeReady",i(e,o)));
},0);
}
function a(e){
if(!e){
var o=window.onerror;
window.onerror=function(){},h=setTimeout(function(){
window.onerror=o,h=null;
},50);
}
}
function s(e,o,t){
if(!/^mp\.weixin\.qq\.com$/.test(location.hostname)){
var n=[];
t=t.replace(location.href,(location.origin||"")+(location.pathname||"")).replace("#wechat_redirect","").replace("#rd","").split("&");
for(var r=0,i=t.length;i>r;r++){
var a=t[r].split("=");
a[0]&&a[1]&&n.push(a[0]+"="+encodeURIComponent(a[1]));
}
var s=new window.Image;
return void(s.src=(o+n.join("&")).substr(0,1024));
}
var c;
if(window.ActiveXObject)try{
c=new ActiveXObject("Msxml2.XMLHTTP");
}catch(d){
try{
c=new ActiveXObject("Microsoft.XMLHTTP");
}catch(w){
c=!1;
}
}else window.XMLHttpRequest&&(c=new XMLHttpRequest);
c&&(c.open(e,o,!0),c.setRequestHeader("cache-control","no-cache"),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.send(t));
}
function c(e){
return function(o,t){
if("string"==typeof o)try{
o=new Function(o);
}catch(n){
throw n;
}
var r=[].slice.call(arguments,2),i=o;
return o=function(){
try{
return i.apply(this,r.length&&r||arguments);
}catch(e){
throw e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),m&&window.__moon_report&&(window.__moon_report([{
offset:j,
log:"timeout_error;host:"+top.location.host,
e:e
}]),a(h)),e;
}
},e(o,t);
};
}
function d(e){
return function(o,t,n){
if("undefined"==typeof n)var n=!1;
var r=this,i=t;
return t=function(){
try{
return i.apply(r,arguments);
}catch(e){
throw e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),m&&window.__moon_report&&(window.__moon_report([{
offset:x,
log:"listener_error;type:"+o+";host:"+top.location.host,
e:e
}]),a(h)),e;
}
},i.moon_lid=b,E[b]=t,b++,e.call(r,o,t,n);
};
}
function w(e){
return function(o,t,n){
if("undefined"==typeof n)var n=!1;
var r=this;
return t=E[t.moon_lid],e.call(r,o,t,n);
};
}
var m,_,l,u,p,f,h,g=/MicroMessenger/i.test(navigator.userAgent),v=window.define,y=0,x=2,O=4,j=9,D=10;
if(window.__initCatch=function(e){
m=e.idkey,_=e.startKey||0,l=e.limit,u=e.badjsId,p=e.reportOpt||"",f=e.extInfo||{},
f.rate=f.rate||.5;
},window.__moon_report=function(o,r){
var i=.5;
if(f&&f.rate&&(i=f.rate),r&&"number"==typeof r&&(i=r),!(!/mp\.weixin\.qq\.com/.test(location.href)&&!/payapp\.weixin\.qq\.com/.test(location.href)||Math.random()>i||!g||top!=window&&!/mp\.weixin\.qq\.com/.test(top.location.href))&&(t(o)&&(o=[o]),
e(o)&&""!=m)){
var a="",c=[],d=[],w=[],p=[];
"number"!=typeof l&&(l=1/0);
for(var h=0;h<o.length;h++){
var v=o[h]||{};
if(!(v.offset>l||"number"!=typeof v.offset||v.offset==O&&f&&f.network_rate&&Math.random()>=f.network_rate)){
var y=1/0==l?_:_+v.offset;
c[h]="[moon]"+m+"_"+y+";"+v.log+";"+n(v.e||{})||"",d[h]=y,w[h]=1;
}
}
for(var x=0;x<d.length;x++)p[x]=m+"_"+d[x]+"_"+w[x],a=a+"&log"+x+"="+c[x];
if(p.length>0){
s("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?","idkey="+p.join(";")+"&r="+Math.random()+"&lc="+c.length+a);
var i=1;
if(f&&f.badjs_rate&&(i=f.badjs_rate),u&&Math.random()<i){
a=a.replace(/uin\:(.)*\|biz\:(.)*\|mid\:(.)*\|idx\:(.)*\|sn\:(.)*\|/,"");
var j=new Image,D="https://badjs.weixinbridge.com/badjs?id="+u+"&level=4&from="+encodeURIComponent(location.host)+"&msg="+encodeURIComponent(a);
j.src=D.slice(0,1024);
}
}
}
},window.setTimeout=c(window.setTimeout),window.setInterval=c(window.setInterval),
Math.random()<.01&&window.Document&&window.HTMLElement){
var E={},b=0;
Document.prototype.addEventListener=d(Document.prototype.addEventListener),Document.prototype.removeEventListener=w(Document.prototype.removeEventListener),
HTMLElement.prototype.addEventListener=d(HTMLElement.prototype.addEventListener),
HTMLElement.prototype.removeEventListener=w(HTMLElement.prototype.removeEventListener);
}
var I=window.navigator.userAgent;
if((/ip(hone|ad|od)/i.test(I)||/android/i.test(I))&&!/windows phone/i.test(I)&&window.localStorage&&window.localStorage.setItem){
var L=window.localStorage.setItem,q=0;
window.localStorage.setItem=function(e,o){
if(!(q>=10))try{
L.call(window.localStorage,e,o);
}catch(t){
t.stack&&console&&console.error&&console.error("[TryCatch]"+t.stack),window.__moon_report([{
offset:D,
log:"localstorage_error;"+t.toString(),
e:t
}]),q++,q>=3&&window.moon&&window.moon.clear&&moon.clear();
}
};
}
window.seajs&&v&&(window.define=function(){
for(var e,o=[],t=arguments&&arguments[0],i=0,s=arguments.length;s>i;i++){
var c=e=arguments[i];
"function"==typeof e&&(e=function(){
try{
return c.apply(this,arguments);
}catch(e){
throw"string"==typeof t&&console.error("[TryCatch][DefineeErr]id:"+t),e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),
m&&window.__moon_report&&(window.__moon_report([{
offset:y,
log:"define_error;id:"+t+";",
e:e
}]),a(h)),r(JSON.stringify(n(e))),e;
}
},e.toString=function(e){
return function(){
return e.toString();
};
}(arguments[i])),o.push(e);
}
return v.apply(this,o);
});
}(),function(e){
function o(e,o,t){
return window.__DEBUGINFO?(window.__DEBUGINFO.res_list||(window.__DEBUGINFO.res_list=[]),
window.__DEBUGINFO.res_list[e]?(window.__DEBUGINFO.res_list[e][o]=t,!0):!1):!1;
}
function t(e){
var o=new TextEncoder("utf-8").encode(e),t=crypto.subtle||crypto.webkitSubtle;
return t.digest("SHA-256",o).then(function(e){
return n(e);
});
}
function n(e){
for(var o=[],t=new DataView(e),n=0;n<t.byteLength;n+=4){
var r=t.getUint32(n),i=r.toString(16),a="00000000",s=(a+i).slice(-a.length);
o.push(s);
}
return o.join("");
}
function r(e,o,t){
if("object"==typeof e){
var n=Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1");
if(t=t||e,"Array"==n){
for(var r=0,a=e.length;a>r;++r)if(o.call(t,e[r],r,e)===!1)return;
}else{
if("Object"!==n&&i!=e)throw"unsupport type";
if(i==e){
for(var r=e.length-1;r>=0;r--){
var s=i.key(r),c=i.getItem(s);
if(o.call(t,c,s,e)===!1)return;
}
return;
}
for(var r in e)if(e.hasOwnProperty(r)&&o.call(t,e[r],r,e)===!1)return;
}
}
}
var i=e.localStorage,a=document.head||document.getElementsByTagName("head")[0],s=1,c=11,d=12,w=13,m=window.__allowLoadResFromMp?1:2,_=window.__allowLoadResFromMp?1:0,l=m+_,u=window.testenv_reshost||window.__moon_host||"res.wx.qq.com",p=new RegExp("^(http(s)?:)?//"+u);
window.__loadAllResFromMp&&(u="mp.weixin.qq.com",m=0,l=m+_);
var f=0,h={
prefix:"__MOON__",
loaded:[],
unload:[],
clearSample:Math.random()<f,
hit_num:0,
mod_num:0,
version:1003,
cacheData:{
js_mod_num:0,
js_hit_num:0,
js_not_hit_num:0,
js_expired_num:0,
css_mod_num:0,
css_hit_num:0,
css_not_hit_num:0,
css_expired_num:0
},
init:function(){
h.loaded=[],h.unload=[];
var o,n,a;
if(i){
var s="_moon_ver_key_",c=i.getItem(s);
c!=h.version&&(h.clear(),i.setItem(s,h.version));
}
if(-1!=location.search.indexOf("no_moon1=1")&&h.clear(),i){
var d=1*i.getItem(h.prefix+"clean_time"),w=+new Date;
if(w-d>=1296e6){
h.clear();
try{
!!i&&i.setItem(h.prefix+"clean_time",+new Date);
}catch(m){}
}
}
r(moon_map,function(r,s){
if(n=h.prefix+s,a=!!r&&r.replace(p,""),o=!!i&&i.getItem(n),version=!!i&&(i.getItem(n+"_ver")||"").replace(p,""),
h.mod_num++,a&&-1!=a.indexOf(".css")?h.cacheData.css_mod_num++:a&&-1!=a.indexOf(".js")&&h.cacheData.js_mod_num++,
h.clearSample||!o||a!=version)h.unload.push(a.replace(p,"")),a&&-1!=a.indexOf(".css")?o?a!=version&&h.cacheData.css_expired_num++:h.cacheData.css_not_hit_num++:a&&-1!=a.indexOf(".js")&&(o?a!=version&&h.cacheData.js_expired_num++:h.cacheData.js_not_hit_num++);else{
if("https:"==location.protocol&&window.moon_hash_map&&window.moon_hash_map[s]&&window.crypto)try{
t(o).then(function(e){
window.moon_hash_map[s]!=e&&console.log(s);
});
}catch(c){}
try{
var d="//# sourceURL="+s+"\n//@ sourceURL="+s;
e.eval.call(e,'define("'+s+'",[],'+o+")"+d),h.hit_num++,a&&-1!=a.indexOf(".css")?h.cacheData.css_hit_num++:a&&-1!=a.indexOf(".js")&&h.cacheData.js_hit_num++;
}catch(c){
h.unload.push(a.replace(p,""));
}
}
}),h.load(h.genUrl());
},
genUrl:function(){
var e=h.unload;
if(!e||e.length<=0)return[];
var o,t,n="",r=[],i={},a=-1!=location.search.indexOf("no_moon2=1"),s="//"+u;
-1!=location.href.indexOf("moon_debug2=1")&&(s="//mp.weixin.qq.com");
for(var c=0,d=e.length;d>c;++c)/^\/(.*?)\//.test(e[c]),RegExp.$1&&(t=RegExp.$1,n=i[t],
n?(o=n+","+e[c],o.length>1e3||a?(r.push(n+"?v="+h.version),n=location.protocol+s+e[c],
i[t]=n):(n=o,i[t]=n)):(n=location.protocol+s+e[c],i[t]=n));
for(var w in i)i.hasOwnProperty(w)&&r.push(i[w]);
return r;
},
load:function(e){
if(window.__wxgspeeds&&(window.__wxgspeeds.mod_num=h.mod_num,window.__wxgspeeds.hit_num=h.hit_num),
!e||e.length<=0)return seajs.combo_status=seajs.COMBO_LOADED,seajs.run(),console.debug&&console.debug("[moon] load js complete, all in cache, cost time : 0ms, total count : "+h.mod_num+", hit num: "+h.hit_num),
void window.__moonclientlog.push("[moon] load js complete, all in cache, cost time : 0ms, total count : "+h.mod_num+", hit num: "+h.hit_num);
seajs.combo_status=seajs.COMBO_LOADING;
var o=0,t=+new Date;
window.__wxgspeeds&&(window.__wxgspeeds.combo_times=[],window.__wxgspeeds.combo_times.push(t)),
r(e,function(n){
h.request(n,l,function(){
if(window.__wxgspeeds&&window.__wxgspeeds.combo_times.push(+new Date),o++,o==e.length){
var n=+new Date-t;
window.__wxgspeeds&&(window.__wxgspeeds.mod_downloadtime=n),seajs.combo_status=seajs.COMBO_LOADED,
seajs.run(),console.debug&&console.debug("[moon] load js complete, url num : "+e.length+", total mod count : "+h.mod_num+", hit num: "+h.hit_num+", use time : "+n+"ms"),
window.__moonclientlog.push("[moon] load js complete, url num : "+e.length+", total mod count : "+h.mod_num+", hit num: "+h.hit_num+", use time : "+n+"ms");
}
});
});
},
request:function(e,t,n){
if(e){
t=t||0,e.indexOf("mp.weixin.qq.com")>-1&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=27613_32_1&r="+Math.random(),
window.__moon_report([{
offset:d,
log:"load_script_from_mp: "+e
}],1));
var r=-1;
window.__DEBUGINFO&&(__DEBUGINFO.res_list||(__DEBUGINFO.res_list=[]),__DEBUGINFO.res_list.push({
type:"js",
status:"pendding",
start:+new Date,
end:0,
url:e
}),r=__DEBUGINFO.res_list.length-1);
var i=document.createElement("script");
i.src=e,i.type="text/javascript",i.async=!0,i.down_time=+new Date,i.onerror=function(a){
o(r,"status","error"),o(r,"end",+new Date);
var d=new Error(a);
if(t>=0)if(_>t){
var m=e.replace("res.wx.qq.com","mp.weixin.qq.com");
h.request(m,t,n);
}else h.request(e,t,n);else window.__moon_report&&window.__moon_report([{
offset:s,
log:"load_script_error: "+e,
e:d
}],1);
if(t==_-1&&window.__moon_report([{
offset:c,
log:"load_script_error: "+e,
e:d
}],1),-1==t){
var l="ua: "+window.navigator.userAgent+", time="+(+new Date-i.down_time)+", load_script_error -1 : "+e;
window.__moon_report([{
offset:w,
log:l
}],1);
}
window.__moonclientlog.push("moon load js error : "+e+", error -> "+d.toString());
},"undefined"!=typeof moon_crossorigin&&moon_crossorigin&&i.setAttribute("crossorigin",!0),
i.onload=i.onreadystatechange=function(){
o(r,"status","loaded"),o(r,"end",+new Date),!i||i.readyState&&!/loaded|complete/.test(i.readyState)||(o(r,"status","200"),
i.onload=i.onreadystatechange=null,"function"==typeof n&&n());
},t--,a.appendChild(i);
}
},
setItem:function(e,o){
!!i&&i.setItem(e,o);
},
clear:function(){
i&&(r(i,function(e,o){
~o.indexOf(h.prefix)&&i.removeItem(o);
}),console.debug&&console.debug("[moon] clear"));
},
idkeyReport:function(e,o,t){
t=t||1;
var n=e+"_"+o+"_"+t;
(new Image).src="/mp/jsmonitor?idkey="+n+"&r="+Math.random();
}
};
seajs&&seajs.use&&"string"==typeof window.__moon_mainjs&&seajs.use(window.__moon_mainjs),
window.moon=h;
}(window),window.moon.init();
};
e(),!!window.__moon_initcallback&&window.__moon_initcallback(),window.__wxgspeeds&&(window.__wxgspeeds.moonendtime=+new Date);
}
}
__moonf__();