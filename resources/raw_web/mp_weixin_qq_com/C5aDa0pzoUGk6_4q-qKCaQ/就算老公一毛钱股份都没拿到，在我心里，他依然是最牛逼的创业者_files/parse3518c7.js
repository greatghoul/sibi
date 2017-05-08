define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","biz_common/utils/http.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js"],function(e){
"use strict";
function t(e,t){
if(e&&!(e.length<=0))for(var o,n,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,d=0,m=e.length;m>d;++d)o=e[d],
o&&(n=o.getAttribute(t),n&&(i=n.match(a),i&&i[2]&&(p[i[2]]=!0)));
}
function o(e){
for(var t=0,o=h.length;o>t;++t)if(h[t]==e)return!0;
return!1;
}
function n(){
p={},t(document.getElementsByTagName("a"),"href"),t(document.getElementsByTagName("link"),"href"),
t(document.getElementsByTagName("iframe"),"src"),t(document.getElementsByTagName("script"),"src"),
t(document.getElementsByTagName("img"),"src");
var e=[];
for(var n in p)p.hasOwnProperty(n)&&(window.networkType&&"wifi"==window.networkType&&!u&&o(n)&&(u=!0),
e.push(n));
return p={},e.join(",");
}
function i(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,o=f.js_content,i=f.screen_height,a=f.screen_width,d=f.scroll_height,m=Math.ceil(d/i),r=Math.ceil((o.scrollHeight||o.offsetHeight)/i),s=(window.logs.read_height||t)+i,l=f.pageEndTop,w=f.imgs,c=Math.ceil(s/i)||1,p=f.media,h=50,y=0,v=0,b=0,j=0,T=s+h>l?1:0;
c>m&&(c=m);
var z=function(t){
if(t)for(var o=0,n=t.length;n>o;++o){
var i=t[o];
if(i){
y++;
var a=i.getAttribute("src"),d=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(v++,a.isCDN()&&(b++,-1!=a.indexOf("tp=webp")&&j++),d&&(e["img_"+d+"_cnt"]=e["img_"+d+"_cnt"]||0,
e["img_"+d+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=j||0,e.download_img_cnt=v||0,e.download_cdn_img_cnt=b||0,
e.img_cnt=y||0;
},E=window.appmsgstat||{},O=window.logs.img||{},x=window.logs.pagetime||{},k=O.load||{},D=O.read||{},I=[],B=[],S=0,N=0,M=0;
for(var H in D)H&&0==H.indexOf("http")&&D.hasOwnProperty(H)&&B.push(H);
for(var H in k)H&&0==H.indexOf("http")&&k.hasOwnProperty(H)&&I.push(H);
for(var q=0,P=I.length;P>q;++q){
var R=I[q];
R&&R.isCDN()&&(-1!=R.indexOf("/0")&&S++,-1!=R.indexOf("/640")&&N++,-1!=R.indexOf("/300")&&M++);
}
var e={
__biz:biz,
title:msg_title.htmlDecode(),
mid:mid,
idx:idx,
read_cnt:E.read_num||0,
like_cnt:E.like_num||0,
screen_width:a,
screen_height:i,
screen_num:r,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:window.logs.video_cnt||0,
read_screen_num:c||0,
is_finished_read:T,
scene:source,
content_len:g.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:N,
img_0_cnt:S,
img_300_cnt:M,
wtime:x.onload_time||0,
ftime:x.ftime||0,
ptime:x.ptime||0,
onload_time:x.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:ct
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=I.length,
e.wifi_read_imgs_cnt=B.length),window.logs.webplog&&4==window.logs.webplog.total){
var Y=window.logs.webplog;
e.webp_total=1,e.webp_lossy=Y.lossy,e.webp_lossless=Y.lossless,e.webp_alpha=Y.alpha,
e.webp_animation=Y.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var A=window.logs.idkeys,J=[];
for(var K in A)if(A.hasOwnProperty(K)){
var C=A[K];
C.val>0&&J.push(K+"_"+C.val);
}
e.idkey=J.join(";");
}
z(!!p&&p.getElementsByTagName("img")),z(w);
var W=(new Date).getDay(),L=n();
return(u||0!==user_uin&&Math.floor(user_uin/100)%7==W)&&(e.domain_list=L),u&&(e.html_content=_),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
e;
}
function a(e){
y||(y=!0,c.remove("page_time"),e.report_time=parseInt(+new Date/1e3),r({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
function d(){
if(window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,o=[biz,sn,mid,idx].join("_"),n=new l("ad");
n.set(o,{
info:e,
time:t
},+new Date+24e4);
}
w.set(o,b,+new Date+72e5);
}
e("biz_common/utils/string/html.js");
var m=e("biz_common/dom/event.js"),r=e("biz_wap/utils/ajax.js"),s=(e("biz_common/utils/cookie.js"),
e("biz_common/utils/http.js"));
e("appmsg/cdn_img_lib.js");
var _,l=e("biz_wap/utils/storage.js"),w=new l("page_pos"),c=new l("time_on_page"),g={};
!function(){
_=document.getElementsByTagName("html"),_&&1==!!_.length&&s&&(_=_[0].innerHTML,g.content_length=s.htmlSize),
window.logs.pageinfo=g;
}();
var p={},u=!1,h=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],f={
js_content:document.getElementById("js_content"),
screen_height:document.documentElement.clientHeight||window.innerHeight,
screen_width:document.documentElement.clientWidth||window.innerWidth,
scroll_height:document.body.scrollHeight||document.body.offsetHeight,
pageEndTop:document.getElementById("js_toobar3").offsetTop,
imgs:document.getElementById("js_content").getElementsByTagName("img")||[],
media:document.getElementById("media")
},y=!1,v=null,b=0,j=(msg_link.split("?").pop(),[biz,sn,mid,idx].join("_"));
!function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(m.on(window,"load",function(){
b=1*w.get(j);
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var o=t.offsetTop;
window.scrollTo(0,o-25);
}else window.scrollTo(0,b);
if(window.__wxjs_is_wkwebview){
var n=c.getData("page_time");
n.page_time&&(a(n.page_time.val),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_59_1&r="+Math.random()),
window.setInterval(function(){
var e=i();
c.set("page_time",e,+new Date+864e7),d();
},1e3);
}
}),m.on(window,"unload",function(){
d(),window.__ajaxtest="2";
var e=i();
a(e);
}),window.logs.read_height=0,m.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(v),v=setTimeout(function(){
b=window.pageYOffset,w.set(j,b,+new Date+72e5);
},500);
}),m.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(v),v=setTimeout(function(){
b=window.pageYOffset,w.set(j,b,+new Date+72e5);
},500);
}));
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function i(){
function e(e){
var i=[];
for(var n in e)i.push(n+"="+encodeURIComponent(e[n]||""));
return i.join("&");
}
if(networkType){
var i=window.performance||window.msPerformance||window.webkitPerformance;
if(i&&"undefined"!=typeof i.getEntries){
var n,t,a=100,o=document.getElementsByTagName("img"),s=o.length,p=navigator.userAgent,m=!1;
/micromessenger\/(\d+\.\d+)/i.test(p),t=RegExp.$1;
for(var g=0,w=o.length;w>g;g++)if(n=parseInt(100*Math.random()),!(n>a)){
var d=o[g].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,u=i.getEntries(),c=0;c<u.length;c++)if(f=u[c],f.name==d){
var _=o[g].getAttribute("data-fail");
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:t,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:o[g].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:s>100?100:s,
delay_time:parseInt(f.duration),
from:window.isSg?"sougou":"",
fail:_
})
}),m=!0;
break;
}
if(m)break;
}
}
}
}
}
var n=e("biz_common/dom/event.js"),t=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),a={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
t.invoke("getNetworkType",{},function(e){
networkType=a[e.err_msg],i();
}),n.on(window,"load",i,!1);
});define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(t,e){
var i=c;
e.img_url||(e.img_url=topic_default_img);
for(var o in e){
var a=new RegExp("{"+o+"}","g");
i=i.replace(a,e[o]);
}
var p=document.createElement("span");
p.className="db topic_area",p.innerHTML=i,t.parentNode.insertBefore(p,t),t.parentNode.removeChild(t),
r.tap(p,function(){
var e=location.protocol+"//mp.weixin.qq.com/mp/topic?action=topic_detail_page&topic_id="+t.getAttribute("data-topic-id")+"&topic_type="+t.getAttribute("data-topic-type")+"&sn="+t.getAttribute("data-topic-sn")+"&scene=101#wechat_redirect";
n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t&&-1!==t.err_msg.indexOf(":ok")||(location.href=e);
});
});
}
function o(t){
var o={
topic_id:t.getAttribute("data-topic-id"),
topic_type:t.getAttribute("data-topic-type"),
sn:t.getAttribute("data-topic-sn"),
biz:biz
};
p({
url:"/mp/topic?action=get_topic_info",
type:"post",
data:o,
success:function(o){
if(console.log(o),o=JSON.parse(o),0!=o.base_resp.ret)return void e(t);
var a={
title:o.title,
author:o.author||(o.leading_actor?o.leading_actor.replace(/\$\$/g," / "):"-"),
img_url:o.img_url,
msg_num:o.msg_num
};
i(t,a);
},
error:function(){
e(t);
}
});
}
function a(){
var t=document.getElementsByTagName("wxtopic");
t[0]&&o(t[0]);
}
var p=t("biz_wap/utils/ajax.js"),n=t("biz_wap/jsapi/core.js"),r=t("biz_common/dom/event.js"),c=t("appmsg/topic_tpl.html.js");
a();
});define("appmsg/weapp.js",["biz_common/utils/string/html.js","pages/weapp_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/tmpl.js","biz_wap/jsapi/core.js"],function(e,t,n,p){
"use strict";
function i(e,t,n){
var p=new Image;
p.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=106&content="+n+",biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(t.toString())+"&r="+Math.random()).substr(0,1024),
console&&t&&console.error(t);
}
function a(e,t,n,p,i){
_({
url:"/mp/appmsgreport?action=appmsg_weapp_report",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e||"",
weapp_pos:t||0,
weapp_title:p||0,
weapp_nickname:n||0,
type:i||0,
scene:window.source||-1
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function r(){
var e=l("js_content");
if(!e)return!1;
if(h=e.getElementsByTagName("mp-weapp")||[],h.length<=0)return!1;
try{
y=JSON.parse(weapp_sn_arr_json).weapp_card_list;
}catch(t){
return!1;
}
return!0;
}
function o(e){
return e=e||"",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function s(e,t,n,p){
a(e,t,n,p,4),window.__addIdKeyReport&&window.__addIdKeyReport("28307",103),location.href="https://mp.weixin.qq.com/mp/waerrpage?type=upgrade&appid="+encodeURIComponent(e)+"#wechat_redirect";
}
function d(e,t,n,i){
a(e,t,n,i,5),p("请在微信内打开小程序");
}
function c(){
var e={
__biz:biz,
mid:mid,
idx:idx,
uin:uin,
key:key,
pass_ticket:pass_ticket,
weapp_num:y.length
};
window.reportWeappid=[];
for(var t=0;t<y.length;t++)e["weapp_appid_"+t]=y[t].appid,e["weapp_sn_"+t]=y[t].sn,
window.reportWeappid.push(y[t].appid);
var n="/mp/appmsg_weapp?action=batch_get_weapp";
for(var p in e)n+="&"+p+"="+encodeURIComponent(e[p]);
_({
url:n,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
try{
if(e.base_resp.ret)throw new Error("Fetch weapp info but get ret="+e.base_resp.ret);
var t=!1,n=!1,p=navigator.userAgent.match(/MicroMessenger\/(\d+)\.(\d+)\.(\d+)/);
if(p){
var r=Number(p[1]),c=Number(p[2]),m=Number(p[3]);
r>6?t=!0:6===r&&c>5?t=!0:6===r&&5===c&&m>=3&&(t=!0);
}else navigator.userAgent.match(/MicroMessenger\//)||(n=!0);
for(var l=e.weapp_info,_={},h="appid="+encodeURIComponent(e.appid)+(e.appmsg_compact_url?"&appmsg_compact_url="+encodeURIComponent(e.appmsg_compact_url):""),b=0;b<l.length;b++)_[l[b].weapp_appid]=l[b];
for(b=0;b<v.length;b++)(function(e){
var p=v[e].appid,r=v[e].path,c=v[e].imageUrl,m=v[e].title,l=v[e].description,b=v[e].elem,y=_[p];
b.innerHTML=g.tmpl(u,{
imageUrl:o(c),
title:o(m),
description:o(l),
nickname:o(y.nickname),
avatar:o(y.logo_url)
});
var j=r.indexOf("?");
r.indexOf("?")>=0?r=r.slice(0,j)+".html"+r.slice(j)+"&"+h:r+=".html?"+h,w.tap(b,function(){
var o={
userName:y.weapp_username,
scene:1058,
sceneNote:encodeURIComponent(location.href),
relativeURL:r
};
return void 0!==y.app_version&&(o.appVersion=y.app_version),t?(f.invoke("openWeApp",o,function(t){
return"openWeApp:ok"===t.err_msg?window.__addIdKeyReport&&window.__addIdKeyReport("28307",102):"system:function_not_exist"===t.err_msg?n?d(p,e,y.nickname,m):s(p,e,y.nickname,m):void i(107,new Error(t.err_msg),"");
}),window.__addIdKeyReport&&window.__addIdKeyReport("28307",100),void a(p,e,y.nickname,m,3)):n?d(p,e,y.nickname,m):s(p,e,y.nickname,m);
});
})(b);
var y=null,k=function(){
y=null;
for(var e=window.innerHeight||document.documentElement.clientHeight,t=0;t<j.length;t++){
var n=j[t].elem.getBoundingClientRect();
n.top<e&&n.bottom>0&&(setTimeout(function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307",101);
},0),a(j[t].appid,t,_[j[t].appid].nickname,j[t].title,2),j.splice(t--,1));
}
};
k(),w.on(window,"scroll",function(){
y||(y=setTimeout(k,100));
});
}catch(z){
i(106,z,"parsing weapp info error");
}
},
error:function(){}
});
}
function m(){
for(var e=0;e<h.length;e++){
var t=h[e],n=t.getAttribute("data-weapp-appid"),p=t.getAttribute("data-weapp-path"),i=t.getAttribute("data-weapp-imageUrl"),a=t.getAttribute("data-weapp-title"),r=t.getAttribute("data-weapp-description"),o=document.createElement("span");
t.setAttribute("class",""),o.setAttribute("class","weapp_display_element js_weapp_display_element"),
v.push({
appid:n,
path:p,
imageUrl:i,
title:a,
description:r,
elem:o
}),j.push({
appid:n,
elem:o,
title:a
}),t.parentNode.insertBefore(o,t.nextSibling);
}
}
function l(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var u=e("pages/weapp_tpl.html.js"),_=e("biz_wap/utils/ajax.js"),w=e("biz_common/dom/event.js"),g=e("biz_common/tmpl.js"),f=e("biz_wap/jsapi/core.js"),h=null,b={},v=[],y=[],j=[];
return r()?(m(),c(),b):void 0;
});define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_tpl.html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=d("js_content");
return e?(r._oElements=e.getElementsByTagName("mpvoice")||[],r._oElements.length<=0?!1:!0):!1;
}
function o(){
r.musicLen=r._oElements.length;
}
function n(){
for(var e=0,i=0;i<r.musicLen;i++){
var o=r._oElements[i],n={};
n.voiceid=s.encodeStr(decodeURIComponent(o.getAttribute("voice_encode_fileid")||"")),
n.voiceid=n.voiceid.replace(/&#61;/g,"=").replace(/^\s/,"").replace(/\s$/,""),n.src=r.srcRoot.replace("#meidaid#",n.voiceid),
n.voiceid&&"undefined"!=n.voiceid&&(t(o,n,e),e++);
}
}
function t(e,i,o){
i.duration=parseInt((1*e.getAttribute("play_length")||0)/1e3,10),i.duration_str=s.formatTime(i.duration),
i.posIndex=o,i.title=s.encodeStr(decodeURIComponent(e.getAttribute("name")||"")).replace(/^\s/,"").replace(/\s$/,""),
i.fileSize=1*e.getAttribute("high_size")||0,i.nickname=window.nickname,s.renderPlayer(a,i,e),
c(i),r.musicList[i.voiceid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.voiceid+"_"+e.posIndex,o="";
if(window.voice_in_appmsg&&window.voice_in_appmsg[e.voiceid]){
var n=window.voice_in_appmsg[e.voiceid],t=window.biz||"",c=window.mid||"",a=window.idx||"";
n.bizuin&&n.appmsgid&&n.idx&&(t=n.bizuin,c=n.appmsgid,a=n.idx),o="https://mp.weixin.qq.com/mp/audio?scene=104&__biz=#biz#&mid=#mid#&idx=#idx#&voice_id=#voice_id#&sn=#sn##wechat_redirect".replace("#biz#",t).replace("#mid#",c).replace("#idx#",a).replace("#voice_id#",e.voiceid).replace("#sn#",n.sn||"");
}
var r=s.decodeStr(e.title);
e.player=s.init({
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
allowPause:!1,
duration:e.duration,
title:r,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:d("voice_main_"+i),
playArea:d("voice_play_"+i),
progress:d("voice_progress_"+i),
fileSize:e.fileSize,
playtimeDom:d("voice_playtime_"+i),
detailArea:o?d("voice_detail_"+i):"",
detailUrl:o
});
}
function d(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var a=e("pages/voice_tpl.html.js"),s=e("pages/voice_component.js"),r={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
return i()?(o(),n(),r.musicList):void 0;
});define("appmsg/qqmusic.js",["biz_common/utils/string/html.js","pages/qqmusic_tpl.html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=c("js_content");
return e?(a._oElements=e.getElementsByTagName("qqmusic")||[],a._oElements.length<=0?!1:!0):!1;
}
function t(){
a.musicLen=a._oElements.length;
}
function m(){
for(var e=0,i=0;i<a.musicLen;i++){
var t=a._oElements[i],m={};
m.musicid=o.encodeStr(t.getAttribute("musicid")||"").replace(/^\s/,"").replace(/\s$/,""),
m.comment_id=o.encodeStr(t.getAttribute("commentid")||"").replace(/^\s/,"").replace(/\s$/,""),
m.musicid&&"undefined"!=m.musicid&&m.comment_id&&"undefined"!=m.comment_id&&(n(t,m,e),
e++);
}
}
function n(e,i,t){
i.media_id=o.encodeStr(e.getAttribute("mid")||"").replace(/^\s/,"").replace(/\s$/,""),
i.duration=parseInt((e.getAttribute("play_length")||0)/1e3,10),i.posIndex=t,i.musicImgPart=o.encodeStr(e.getAttribute("albumurl")||"").replace(/^\s/,"").replace(/\s$/,"");
var m="";
m=i.musicImgPart.split("/");
try{
m=m[m.length-1],m=m.split(".")[0];
}catch(n){
m="";
}
i.music_img=m?a.imgroot2.replace("#mid#",m):a.imgroot+i.musicImgPart,i.audiourl=o.encodeStr(e.getAttribute("audiourl")||"").replace(/^\s/,"").replace(/\s$/,""),
i.singer=o.encodeStr(e.getAttribute("singer")||"").replace(/^\s/,"").replace(/\s$/,""),
i.music_name=o.encodeStr(e.getAttribute("music_name")||"").replace(/^\s/,"").replace(/\s$/,""),
o.renderPlayer(r,i,e),s(i),a.musicList[i.musicid+"_"+i.posIndex]=i;
}
function s(e){
var i=e.musicid+"_"+e.posIndex,t=e.comment_id+"_"+e.posIndex,m=["http://i.y.qq.com/v8/playsong.html?songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),n=o.decodeStr(e.music_name);
e.player=o.init({
type:0,
comment_id:e.comment_id,
mid:e.media_id,
songId:e.musicid,
duration:e.duration,
title:n,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"QQ音乐",
coverImgUrl:e.music_img,
playingCss:"qqmusic_playing",
playCssDom:c("qqmusic_main_"+t),
playArea:c("qqmusic_play_"+i),
detailUrl:m,
detailArea:c("qqmusic_home_"+i)
});
}
function c(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var r=e("pages/qqmusic_tpl.html.js"),o=e("pages/voice_component.js"),a={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_68",
imgroot2:"https://y.gtimg.cn/music/photo_new/T002R68x68M000#mid#.jpg",
musicList:{},
musicLen:0
};
return i()?(t(),m(),a.musicList):void 0;
});define("appmsg/iframe.js",["biz_common/utils/string/html.js","pages/video_ctrl.js","new_video/ctl.js","pages/version4video.js","biz_common/dom/attr.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
var t=0;
try{
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var o=e.contentWindow.document.getElementsByTagName("html");
o&&o.length&&(o[0].style.overflow="hidden");
}
}catch(n){}
}
function i(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=d.video_top.length,o=e+d.innerHeight,n=0,s=0;t>s;s++){
var c=d.video_top[s];
c.reported?n++:o>=c.start&&o<=c.end&&(c.reported=!0,r.report({
step:1,
vid:c.vid
}));
}
n==t&&(m.off(window,"scroll",i),d.video_top=d.video_iframe=i=null);
}
e("biz_common/utils/string/html.js");
{
var o,n=e("pages/video_ctrl.js"),r=e("new_video/ctl.js"),d={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
video_iframe:[],
video_top:[]
},s=e("pages/version4video.js"),c=e("biz_common/dom/attr.js"),m=(c.setProperty,e("biz_common/dom/event.js")),a=document.getElementsByTagName("iframe"),p=[];
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var l=Math.ceil(1e4*Math.random()),v=0,f=a.length;f>v;++v){
o=a[v];
var u=o.getAttribute("data-src")||"",w=o.className||"",_=o.getAttribute("src")||u;
if(!u||"#"==u){
var g=o.getAttribute("data-display-src");
if(g&&(0==g.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==g.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
g=g.replace(/&amp;/g,"&");
for(var h=g.split("&"),x=["/mp/newappmsgvote?action=show"],v=0;v<h.length;v++)(0==h[v].indexOf("__biz=")||0==h[v].indexOf("supervoteid="))&&x.push(h[v]);
x.length>1&&(u=x.join("&")+"#wechat_redirect");
}
}
if(s.isShowMpVideo()&&_&&(0==_.indexOf("http://v.qq.com/iframe/player.html")||0==_.indexOf("http://v.qq.com/iframe/preview.html")||0==_.indexOf("https://v.qq.com/iframe/player.html")||0==_.indexOf("https://v.qq.com/iframe/preview.html"))){
u=u.replace(/^https:/,location.protocol),u=u.replace(/^http:/,location.protocol),
u=u.replace(/preview.html/,"player.html");
var y=_.match(/[\?&]vid\=([^&]*)/);
if(!y||!y[1])continue;
var b=y[1],j=document.getElementById("js_content").offsetWidth,k=Math.ceil(j/n.getRatio());
b=b.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),window.reportVid.push(b),d.video_iframe.push({
dom:o,
vid:b
}),_=["/mp/videoplayer?video_h=",k,"&scene=",window.source,"&random_num=",l,"&article_title=",encodeURIComponent(window.msg_title.htmlDecode()),"&source=4&vid=",b,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&nodetailbar=",window.is_temp_url?1:0,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join(""),
uin||window.__addIdKeyReport&&window.__addIdKeyReport("28307",21),window.__addIdKeyReport&&window.__addIdKeyReport("28307",11),
setTimeout(function(e,t,i,o){
return function(){
o.removeAttribute("style"),o.setAttribute("width",e),o.setAttribute("height",t),
o.setAttribute("marginWidth",0),o.setAttribute("marginHeight",0),o.style.top="0",
o.setAttribute("src",i);
};
}(j,k,_,o),0);
}else if(u&&(u.indexOf("newappmsgvote")>-1&&w.indexOf("js_editor_vote_card")>=0||0==u.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&w.indexOf("card_iframe")>=0||u.indexOf("appmsgvote")>-1||u.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(window.is_transfer_msg&&!window.reprint_ticket&&u.indexOf(window.biz)<0){
p.push(o);
continue;
}
if(u=u.replace(/^http:/,location.protocol),w.indexOf("card_iframe")>=0){
var O=u.replace("#wechat_redirect",["&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(O+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
o.setAttribute("src",O);
}else{
var q=u.indexOf("#wechat_redirect")>-1,A=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?A+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join(""):w.indexOf("vote_iframe")>=0&&(A+=["&mid=",mid,"&idx=",idx].join(""));
var O=q?u.replace("#wechat_redirect",A):u+A;
o.setAttribute("src",O);
}
-1==u.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&!function(e){
e.onload=function(){
t(e);
};
}(o),o.appmsg_idx=v;
}
if(u&&u.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&j>0){
var z=j,H=3*z/4;
o.width=z,o.height=H,o.style.setProperty&&(o.style.setProperty("width",z+"px","important"),
o.style.setProperty("height",H+"px","important"));
}
}
for(var E=0;E<p.length;E++){
var D=p[E];
D.parentNode.removeChild(D);
}
if(window.iframe_reload=function(){
for(var e=0,i=a.length;i>e;++e){
o=a[e];
var n=o.getAttribute("src");
n&&(n.indexOf("newappmsgvote")>-1||n.indexOf("appmsgvote")>-1)&&t(o);
}
},"getElementsByClassName"in document)for(var I,M=document.getElementsByClassName("video_iframe"),v=0;I=M.item(v++);)I.setAttribute("scrolling","no"),
I.style.overflow="hidden";
d.video_iframe.length>0&&setTimeout(function(){
for(var e=d.video_iframe,t=document.getElementById("js_article"),o=0,n=e.length;n>o;o++){
var r=e[o];
if(!r||!r.dom)return;
for(var s=r.dom,c=s.offsetHeight,a=0;s&&t!==s;)a+=s.offsetTop,s=s.offsetParent;
d.video_top.push({
start:a+c/2,
end:a+c/2+d.innerHeight,
reported:!1,
vid:r.vid
});
}
i(),m.on(window,"scroll",i);
},0);
});define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/log.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e,t){
s.invoke("imagePreview",{
current:e,
urls:t
},function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
}),p("[Appmsg] click image, src: "+e);
}
function a(e){
var a=[],s=e.container,p=e.imgs||[];
if(s)for(var n=s.getElementsByTagName("img")||[],o=0,m=n.length;m>o;o++)p.push(n.item(o));
for(var o=0,m=p.length;m>o;o++){
var c=p[o],g=c.getAttribute("data-src")||c.getAttribute("src"),d=c.getAttribute("data-type");
if(g&&!g.isGif()){
for(;-1!=g.indexOf("?tp=webp");)g=g.replace("?tp=webp","");
c.dataset&&c.dataset.s&&g.isCDN()&&(g=g.replace(/\/640$/,"/0"),g=g.replace(/\/640\?/,"/0?")),
g.isCDN()&&(g=r.addParam(g,"wxfrom","3",!0)),g=e.is_https_res?g.http2https():g.https2http(),
d&&(g=r.addParam(g,"wxtype",d,!0)),a.push(g),function(e){
i.on(c,"click",function(i){
return i&&i.target&&i.target.className&&i.target.className.indexOf("img_loadederror")>-1?!1:(t(e,a),
!1);
});
}(g);
}
}
}
var i=e("biz_common/dom/event.js"),s=e("biz_wap/jsapi/core.js"),r=e("biz_common/utils/url/parse.js"),p=e("appmsg/log.js");
return e("appmsg/cdn_img_lib.js"),a;
});define("appmsg/outer_link.js",["biz_common/dom/event.js"],function(e){
"use strict";
function n(e){
var n=e.container;
if(!n)return!1;
for(var r=n.getElementsByTagName("a")||[],i=0,o=r.length;o>i;++i)!function(n){
var i=r[n],o=i.getAttribute("href");
if(!o)return!1;
var a=0,c=i.innerHTML;
/^[^<>]+$/.test(c)?a=1:/^<img[^>]*>$/.test(c)&&(a=2),!!e.changeHref&&(o=e.changeHref(o,a)),
t.on(i,"click",function(){
return location.href=o,!1;
},!0);
}(i);
}
var t=e("biz_common/dom/event.js");
return n;
});define("appmsg/copyright_report.js",["biz_common/dom/event.js"],function(t){
"use strict";
function o(t){
var o=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",t.scene,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&t=",Math.random()].join("");
window.isSg&&(o+="&from=sougou");
var e=new Image;
e.src=o.substr(0,1024);
}
function e(){
var t=__appmsgCgiData;
if("2"==t.copyright_stat){
for(var o=r("copyright_info"),e=r("js_article");o&&e!==o;)c.copyright_top+=o.offsetTop,
o=o.offsetParent;
i.on(window,"scroll",n);
}
}
function n(){
var t=window.pageYOffset||document.documentElement.scrollTop;
t+c.innerHeight>c.copyright_top&&(o({
scene:"1",
card_pos:"0"
}),i.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(t){
return document.getElementById(t);
}
var i=t("biz_common/dom/event.js"),c={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
copyright_top:0
};
return{
card_click_report:o,
card_pv_report:e
};
});define("appmsg/async.js",["biz_common/utils/string/html.js","pages/video_ctrl.js","appmsg/img_copyright_tpl.html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","biz_wap/utils/storage.js","appmsg/log.js","rt/appmsg/getappmsgext.rt.js","a/a.js","biz_wap/utils/mmversion.js","pages/version4video.js","appmsg/like.js","appmsg/comment.js","appmsg/reward_entry.js","a/testdata.js","appmsg/iframe.js"],function(e,t,r,n){
"use strict";
function i(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var t={},r=e.img_copy_info.list,n=window.__appmsgCgiData.copyright_stat,i=window.__appmsgCgiData.source_biz,a=0,o=r.length;o>a;a++){
var s=r[a];
if(2==s.type){
if(2==n&&i==s.source_uin)continue;
t[s.img_url]={
source_nickname:s.source_nickname,
source_uin:s.source_uin,
source_encode_biz:s.source_encode_biz||""
};
}
}
for(var d=document.getElementsByTagName("img"),a=0,o=d.length;o>a;a++){
var s=d[a],m=s.getAttribute("data-src")||s.getAttribute("data-backsrc")||"";
if(t[m]){
var _=document.createElement("div");
_.innerHTML=b.tmpl(l,t[m]);
{
var c=_.children[0],p=s.parentNode,w=p.insertBefore(c,s),g=w.children[0];
(function(e,t){
y.on(t,"click",function(){
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene=112#wechat_redirect";
return-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?(location.href=t,
!1):(j.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}),!1);
});
})(t[m],g);
}
w.insertBefore(s,g);
}
}
}
}
function a(e){
if(q&&q.length>0)for(var t,r,n,i=0,a=q.length;a>i;++i)t=q[i],r=t.iframe,n=t.src,
e&&(n=n.replace(/\&encryptVer=[^\&]*/gi,""),n=n.replace(/\&platform=[^\&]*/gi,""),
n=n.replace(/\&cKey=[^\&]*/gi,""),n=n+"&encryptVer=6.0&platform=61001&cKey="+e),
r.setAttribute("src",n);
}
function o(t){
var r=t.appmsgstat||{};
if(window.appmsgstat||(window.appmsgstat=r),r.show&&(!function(){
var e=document.getElementById("js_read_area3"),t=document.getElementById("like3");
e.style.display="block",t.style.display="inline",r.liked=window.is_temp_url?window.liked:r.liked,
r.liked&&v.addClass(t,"praised"),t.setAttribute("like",r.liked?"1":"0");
var n=document.getElementById("likeNum3"),i=document.getElementById("readNum3"),a=window.is_temp_url?window.read_num:r.read_num,o=window.is_temp_url?window.like_num:r.like_num;
a||(a=1),o||(o="Like"),parseInt(a)>1e5?a="100000+":"",parseInt(o)>1e5?o="100000+":"",
i&&(i.innerHTML=a),n&&(n.innerHTML=o);
}(),e("appmsg/like.js")),1==t.comment_enabled&&(window.can_fans_comment_only=t.only_fans_can_comment,
e("appmsg/comment.js")),-1==g.indexOf("WindowsWechat")&&-1!=g.indexOf("MicroMessenger"))if(E.isIOS){
if(1==t.reward.can_reward&&1==t.reward.user_can_reward)if(1==t.reward.is_ios_reward_open){
document.getElementById("js_reward_qrcode")&&(document.getElementById("js_reward_qrcode").style.display="block");
var i=document.getElementById("js_reward_qrcode_img"),a="/wap/rewardqrcode?sn="+sn+"&t="+t.reward.reward_qrcode_ticket+"&pass_ticket="+pass_ticket;
i&&i.setAttribute("src",a);
}else document.getElementById("js_reward_close")&&(document.getElementById("js_reward_close").style.display="block");
}else _=e("appmsg/reward_entry.js"),_.handle(t.reward,d());
1==t.reward_entrance_enable_for_preview&&(E.isIOS?1==t.is_ios_reward_open?(document.getElementById("js_preview_reward_qrcode")&&(document.getElementById("js_preview_reward_qrcode").style.display="block"),
t.reward_wording&&document.getElementById("js_preview_reward_ios_wording")&&(document.getElementById("js_preview_reward_ios_wording").innerText=t.reward_wording,
document.getElementById("js_preview_reward_ios_wording").style.display="block")):document.getElementById("js_preview_reward_close")&&(document.getElementById("js_preview_reward_close").style.display="block"):(document.getElementById("js_preview_reward")&&(document.getElementById("js_preview_reward").style.display="block"),
t.reward_wording&&document.getElementById("js_preview_reward_wording")&&(document.getElementById("js_preview_reward_wording").innerText=t.reward_wording,
document.getElementById("js_preview_reward_wording").style.display="block"),y.on(document.getElementById("js_preview_reward_link"),"tap",function(e){
e.preventDefault(),n("预览状态下无法操作。");
}))),t.comment_entrance_enable_for_preview&&(document.getElementById("js_preview_cmt")&&(document.getElementById("js_preview_cmt").style.display="block"),
y.on(document.getElementById("js_preview_cmt_write"),"tap",function(e){
e.preventDefault(),n("预览状态下无法操作。");
}));
}
function s(){
var t="";
q&&q.length>0&&(t="&is_need_ticket=1");
var r=I.checkNeedAds(),n=r.is_need_ad,s=(r._adInfo,r.both_ad),m=-1!=location.href.indexOf("&mock_ad=1");
m&&(r.is_need_ad=n=1),k("[Appmsg] start get asycn data, is_need_ad:"+n),h({
url:"/mp/getappmsgext?__biz="+biz+"&appmsg_type="+appmsg_type+"&mid="+mid+"&sn="+sn+"&idx="+idx+"&scene="+source+"&title="+encodeURIComponent(msg_title.htmlDecode())+"&ct="+ct+"&abtest_cookie="+abtest_cookie+"&devicetype="+devicetype.htmlDecode()+"&version="+version.htmlDecode()+"&f=json&r="+Math.random()+t+"&is_need_ad="+n+"&comment_id="+comment_id+"&is_need_reward="+is_need_reward+"&both_ad="+s+"&reward_uin_count="+(is_need_reward?3*d():0)+(window.send_time?"&send_time="+send_time:"")+"&msg_daily_idx="+msg_daily_idx,
data:{
is_only_read:is_only_read,
req_id:window.req_id||"",
pass_ticket:pass_ticket,
is_temp_url:window.is_temp_url||0
},
type:"POST",
dataType:"json",
rtId:"27613",
rtKey:"50",
rtDesc:x,
async:!0,
success:function(t){
if(k("[Appmsg] success get async data"),t){
try{
if(m){
t.advertisement_num=1;
var n=e("a/testdata.js");
t.advertisement_info=n.data;
}
if(t&&t.base_resp&&t.base_resp.wxtoken&&(window.wxtoken=t.base_resp.wxtoken),window.fromWeixinCached&&e("appmsg/iframe.js"),
a(t.appmsgticket?t.appmsgticket.ticket:""),i(t),t.ret)return;
I.afterGetAdData(r,t),window.wx_user_can_reward=t.user_can_reward,o({
appmsgstat:t.appmsgstat,
comment_enabled:t.comment_enabled,
only_fans_can_comment:t.only_fans_can_comment,
reward:{
reward_total:t.reward_total_count,
reward_head_imgs:t.reward_head_imgs||[],
can_reward:t.can_reward,
user_can_reward:t.user_can_reward,
reward_qrcode_ticket:t.reward_qrcode_ticket,
is_ios_reward_open:t.is_ios_reward_open,
timestamp:t.timestamp
},
reward_entrance_enable_for_preview:t.reward_entrance_enable_for_preview,
reward_wording:t.reward_wording,
is_ios_reward_open:t.is_ios_reward_open,
comment_entrance_enable_for_preview:t.comment_entrance_enable_for_preview
});
}catch(s){
k("[Appmsg] error parse async data, biz="+biz+", mid="+mid);
var d=new Image;
return d.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(s.toString())+"&r="+Math.random()).substr(0,1024),
void(console&&console.error(s));
}
k("[Appmsg] success get async data, async data is: "+JSON.stringify(t));
}
},
error:function(){
k("[Appmsg] error get async data, biz="+biz+", mid="+mid);
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
function d(){
return y.on(window,"resize",function(){
m(),_&&_.render(d());
}),m();
}
function m(){
var e=window.innerWidth||document.documentElement.clientWidth;
try{
var t=document.getElementById("page-content").getBoundingClientRect();
t.width&&(e=t.width);
}catch(r){}
var n=30,i=34,a=Math.floor(.9*(e-n)/i);
return document.getElementById("js_reward_inner")&&(document.getElementById("js_reward_inner").style.width=a*i+"px"),
d=function(){
return a;
},a;
}
e("biz_common/utils/string/html.js");
var _,c,p=e("pages/video_ctrl.js"),l=e("appmsg/img_copyright_tpl.html.js"),w=!1,g=navigator.userAgent,u=-1!=g.indexOf("MicroMessenger"),y=(-1!=navigator.userAgent.indexOf("WindowsWechat"),
e("biz_common/dom/event.js")),f=200,h=e("biz_wap/utils/ajax.js"),v=e("biz_common/dom/class.js"),j=e("biz_wap/jsapi/core.js"),b=e("biz_common/tmpl.js"),k=(e("biz_wap/utils/storage.js"),
e("appmsg/log.js")),x=e("rt/appmsg/getappmsgext.rt.js"),I=e("a/a.js"),E=e("biz_wap/utils/mmversion.js"),z=document.getElementsByTagName("iframe"),B=document.getElementById("js_content"),q=[],O=B.offsetWidth,A=O/p.getRatio();
window.logs.video_cnt=0;
for(var M=0,T=z.length;T>M;++M){
c=z[M];
var W=c.getAttribute("data-src")||"",D=c.getAttribute("src")||W;
if(D){
var C=e("pages/version4video.js");
if(0==D.indexOf("http://v.qq.com/iframe/player.html")||0==D.indexOf("https://v.qq.com/iframe/player.html")||0==D.indexOf("http://v.qq.com/iframe/preview.html")||0==D.indexOf("https://v.qq.com/iframe/preview.html")||0==D.indexOf("http://z.weishi.com/weixin/player.html")){
C.isShowMpVideo()||(-1==D.indexOf("http://z.weishi.com/weixin/player.html")&&-1==W.indexOf("http://z.weixin.com/weixin/player.html")&&(W=W.replace(/^https:/,location.protocol),
W=W.replace(/^http:/,location.protocol),W=W.replace(/preview.html/,"player.html"),
D=D.replace(/^https:/,location.protocol),D=D.replace(/^http:/,location.protocol),
D=D.replace(/preview.html/,"player.html")),D=D.replace(/width=\d+/g,"width="+O),
D=D.replace(/height=\d+/g,"height="+A),u&&(0==D.indexOf("http://v.qq.com/iframe/player.html")||0==D.indexOf("https://v.qq.com/iframe/player.html"))||u&&(0==D.indexOf("http://v.qq.com/iframe/preview.html")||0==D.indexOf("https://v.qq.com/iframe/preview.html"))?q.push({
iframe:c,
src:D
}):c.setAttribute("src",D),c.width=O,c.height=A,c.style.setProperty&&(c.style.setProperty("width",O+"px","important"),
c.style.setProperty("height",A+"px","important")),window.__addIdKeyReport&&window.__addIdKeyReport("28307",10)),
window.logs.video_cnt++;
continue;
}
}
}
var N=document.getElementById("js_toobar3"),S=window.innerHeight||document.documentElement.clientHeight,R=function(){
var e=window.pageYOffset||document.documentElement.scrollTop,t=N.offsetTop;
e+S+f>=t&&(s(),y.off(window,"scroll",R));
};
w?(y.on(window,"scroll",R),R()):s();
});define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=e+40,n=this.offset||20,s=0;
if("wifi"==window.networkType){
var m={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(m=this.lazyloadHeightWhenWifi()),n=Math.max(m.bottom*e,n),
s=Math.max(m.top*e,s);
}
for(var c=+new Date,d=[],u=this.sw,g=this,w=-1,p=0,A=t.length;A>p;p++)!function(t,e){
var m=a(t.el),c=t.src;
if(c){
(c.match(/\:\/\/[^\/]+\/mmbiz\//)&&c.indexOf("wx_fmt=gif")>-1||c.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&w++;
var g=s,p=n;
(c.match(/\:\/\/[^\/]+\/mmbiz\//)&&c.indexOf("wx_fmt=gif")>-1||c.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&f&&(g=0,
p=20),!t.show&&(i>=m&&i<=m+t.height+g||m>i&&i+o+p>m)&&(e.inImgRead&&(i>=m&&i<=m+t.height||m>i&&i+o>m)&&e.inImgRead(c,networkType),
e.changeSrc&&(c=e.changeSrc(t.el,c,w)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(c,t);
},t.el.onload=function(){
var t=this;
"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="!=t.src&&(l(t,"height","auto","important"),
t.getAttribute("_width")?l(t,"width",t.getAttribute("_width"),"important"):l(t,"width","auto","important"),
!!e.onload&&e.onload(c,t));
},h(t.el,"src",c),d.push(c),t.show=!0,l(t.el,"visibility","visible","important")),
r.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[p],g);
d.length>0&&this.detect&&this.detect({
time:c,
loadList:d,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0,s=this.imgOccupied||!1;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var m=0,d=t.length;d>m;m++){
var f=t.item(m),u=h(f,n),g=h(f,"src");
if(u&&!(g&&g.indexOf("data:image/gif;base64")<0)){
var w=100;
if(f.dataset&&f.dataset.ratio){
var p=1*f.dataset.ratio,A=1*f.dataset.w||a;
"number"==typeof p&&p>0?(A=a>=A?A:a,w=A*p,s||(f.style.width&&f.setAttribute("_width",f.style.width),
l(f,"width",A+"px","important"),l(f,"visibility","visible","important"),f.setAttribute("src",c))):l(f,"visibility","hidden","important");
}else l(f,"visibility","hidden","important");
s||l(f,"height",w+"px","important"),e.push({
el:f,
src:u,
height:w,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
var e=this,o=e.timer;
clearTimeout(o),e.timer=setTimeout(function(){
i.call(e,t);
},300);
}
function n(t){
s.on(window,"scroll",function(i){
o.call(t,i);
}),setTimeout(function(){
e.call(t,{});
},0),s.on(document,"touchmove",function(i){
o.call(t,i);
}),o.call(t,{});
}
function a(t){
for(var i=t.offsetTop;t=t.offsetParent;)i+=t.offsetTop;
return i>=111&&(i-=111),i;
}
var r=t("biz_wap/utils/mmversion.js"),s=t("biz_common/dom/event.js"),m=t("biz_common/dom/attr.js"),h=m.attr,l=m.setProperty,c=t("biz_common/ui/imgonepx.js"),d=new Date,f=(d.getHours(),
!0);
return n;
});define("biz_common/log/jserr.js",[],function(){
function e(e,n){
return e?(r.replaceStr&&(e=e.replace(r.replaceStr,"")),n&&(e=e.substr(0,n)),encodeURIComponent(e.replace("\n",","))):"";
}
var r={};
return window.onerror=function(n,o,t,c,i){
return"Script error."==n||o?"undefined"==typeof r.key||"undefined"==typeof r.reporturl?!0:void setTimeout(function(){
c=c||window.event&&window.event.errorCharacter||0;
var l=[];
if(l.push("msg:"+e(n,100)),o&&(o=o.replace(/[^\,]*\/js\//g,"")),l.push("url:"+e(o,200)),
l.push("line:"+t),l.push("col:"+c),i&&i.stack)l.push("info:"+e(i.stack.toString(),200));else if(arguments.callee){
for(var s=[],u=arguments.callee.caller,a=3;u&&--a>0&&(s.push(u.toString()),u!==u.caller);)u=u.caller;
s=s.join(","),l.push("info:"+e(s,200));
}
var p=new Image;
if(p.src=(r.reporturl+"&key="+r.key+"&content="+l.join("||")).substr(0,1024),window.console&&window.console.log){
var f=l.join("\n");
try{
f=decodeURIComponent(f);
}catch(d){}
console.log(f);
}
},0):!0;
},function(e){
r=e;
};
});define("appmsg/share.js",["biz_common/utils/string/html.js","appmsg/cdn_img_lib.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function i(e,i){
var n="",o="";
try{
""!=tid&&(o="tid="+tid+"&aid=54");
var t=e.split("?")[1]||"";
if(t=t.split("#")[0],""==t);else{
var m=[t,"mpshare=1","scene="+i,"srcid="+srcid];
""!=o&&m.push(o),t=m.join("&"),n=e.split("?")[0]+"?"+t+"#"+(e.split("#")[1]||"");
}
}catch(s){
n="";
}
return n||(n=location.href+"#wechat_redirect",(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_47_1&lc=1&log0=[share_link]["+encodeURIComponent(location.href)+"]["+encodeURIComponent(e)+"]["+encodeURIComponent(msg_link)+"]"),
n;
}
function n(e,i,n){
var o=e.split("?").pop();
if(o=o.split("#").shift(),""!=o){
var t=[o,"action=share","action_type="+n,"scene="+window.source,"req_id="+(window.req_id||""),"vid="+("undefined"!=typeof window.reportVid?window.reportVid.join(";"):""),"musicid="+("undefined"!=typeof window.reportMid?window.reportMid.join(";"):""),"voiceid="+("undefined"!=typeof window.reportVoiceid?window.reportVoiceid.join(";"):""),"weappid="+("undefined"!=typeof window.reportWeappid?window.reportWeappid.join(";"):"")].join("&");
s({
url:"/mp/appmsgreport",
type:"POST",
data:t
});
}
}
function o(e,i){
return e.isCDN()&&(e=t.addParam(e,"wxfrom",i,!0)),e;
}
e("biz_common/utils/string/html.js"),e("appmsg/cdn_img_lib.js");
var t=(e("biz_common/dom/event.js"),e("biz_common/utils/url/parse.js")),m=e("biz_wap/utils/mmversion.js"),s=e("biz_wap/utils/ajax.js"),r=e("biz_wap/jsapi/core.js");
r.call("hideToolbar"),r.call("showOptionMenu");
var a=msg_title.htmlDecode(),c=(msg_source_url.htmlDecode(),""),d=msg_cdn_url||ori_head_img_url||round_head_img,l=d,p=msg_link.htmlDecode(),a=msg_title.htmlDecode(),u=msg_desc.htmlDecode();
u=u||p,u=u.replace(/<br\/>/g,"\n"),idx>1&&document.getElementById("js_content")&&1446652800>ct&&(u=document.getElementById("js_content").innerHTML.replace(/<\/?[^>]*\/?>/g,"").htmlDecode().replace(/^(\s*)|(\s*)$/g,"").substr(0,54)),
d.isCDN()&&(d=d.replace(/\/0$/,"/300"),d=d.replace(/\/0\?/,"/300?")),l.isCDN()&&(l=l.replace(/\/0$/,"/640"),
l=l.replace(/\/0\?/,"/640?")),"1"==is_limit_user&&r.call("hideOptionMenu"),window.is_temp_url&&r.invoke("hideMenuItems",{
menuList:["menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:qzone","menuitem:share:weibo","menuItem:share:WeiboApp","menuItem:share:QZone","menuitem:facebook","menuItem:copyUrl","menuItem:share:email","menuitem:copy_url"]
},function(){}),r.on("menu:share:appmessage",function(e){
var t=1,m=o(d,"1");
e&&"favorite"==e.scene&&(t=24,m=o(d,"4")),r.invoke("sendAppMessage",{
appid:c,
img_url:m,
img_width:"640",
img_height:"640",
link:i(p,t),
desc:u,
title:a
},function(){
n(p,fakeid,t);
});
}),r.on("menu:share:timeline",function(){
var e=d;
m.isIOS||(e=o(d,"2")),n(p,fakeid,2),r.invoke("shareTimeline",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(p,2),
desc:u,
title:a
},function(){});
});
r.on("menu:share:weiboApp",function(){
r.invoke("shareWeiboApp",{
img_url:d,
link:i(p,3),
title:a
},function(){
n(p,fakeid,3);
});
}),r.on("menu:share:facebook",function(){
n(p,fakeid,7),r.invoke("shareFB",{
img_url:l,
img_width:"640",
img_height:"640",
link:i(p,43),
desc:u,
title:a
},function(){});
}),r.on("menu:share:QZone",function(){
var e=o(d,"6");
n(p,fakeid,5),r.invoke("shareQZone",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(p,22),
desc:u,
title:a
},function(){});
}),r.on("menu:share:qq",function(){
var e=o(d,"7");
n(p,fakeid,5),r.invoke("shareQQ",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(p,23),
desc:u,
title:a
},function(){});
}),r.on("menu:share:email",function(){
n(p,fakeid,5),r.invoke("sendEmail",{
content:i(p,5),
title:a
},function(){});
});
});define("appmsg/cdn_img_lib.js",[],function(){
"use strict";
function t(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=gif")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_gif\//);
}
function i(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=png")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_png\//);
}
function n(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=jpg")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_jpg\//);
}
function r(t){
return t.indexOf("tp=webp")>-1;
}
function p(t){
return t.indexOf("tp=wxpic")>-1;
}
String.prototype.http2https=function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qpic.cn/");
},String.prototype.https2http=function(){
var t=this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
return t=t.replace(/https:\/\/mmbiz\.qpic\.cn\//g,"http://mmbiz.qpic.cn/");
},String.prototype.isCDN=function(){
return 0==this.indexOf("http://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qlogo.cn/");
},String.prototype.nogif=function(){
var i=this.toString();
return t(i)?i.replace("/0?","/s640?").replace(/\/0\//g,"/s640/").replace("wx_fmt=gif",""):i;
},String.prototype.isGif=function(){
var i=this.toString();
return t(i);
},String.prototype.isWxpic=function(){
var t=this.toString();
return p(t);
},String.prototype.isWebp=function(){
var t=this.toString();
return r(t);
},String.prototype.getImgType=function(){
var e=this.toString();
return t(e)?"gif":r(e)?"webp":p(e)?"wxpic":i(e)?"png":n(e)?"jpg":"unknow";
};
});define("biz_common/utils/url/parse.js",[],function(){
"use strict";
function r(r){
var e=r.length,n=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?e:t,n=-1==n?t:n;
var a=r.substr(0,n),i=r.substr(n+1,t-n-1),s=r.substr(t+1);
return{
host:a,
query_str:i,
hash:s
};
}
function e(e,n){
var t=r(e),a=t.query_str,i=[];
for(var s in n)n.hasOwnProperty(s)&&i.push(s+"="+encodeURIComponent(n[s]));
return i.length>0&&(a+=(""!=a?"&":"")+i.join("&")),t.host+(""!=a?"?"+a:"")+(""!=t.hash?"#"+t.hash:"");
}
function n(r,e,n,t){
r=r||location.href;
var a=r.indexOf("&"),i=r.length,s=r.replace(/^[\w\d]+:[\/\\]+/g,"").split("").reverse();
Array.prototype.indexOf||(Array.prototype.indexOf=function(r,e){
var n;
if(null==this)throw new TypeError('"this" is null or not defined');
var t=Object(this),a=t.length>>>0;
if(0===a)return-1;
var i=+e||0;
if(1/0===Math.abs(i)&&(i=0),i>=a)return-1;
for(n=Math.max(i>=0?i:a-Math.abs(i),0);a>n;){
if(n in t&&t[n]===r)return n;
n++;
}
return-1;
});
var o=i-1-s.indexOf("/");
-1!=a&&-1==r.indexOf("?")&&a>o&&(r=r.replace("&","?"));
var u=new RegExp("([\\?&]"+e+"=)[^&#]*");
if(!r.match(u)){
var h=r.indexOf("?");
return-1==h?r+"?"+e+"="+n:h==r.length-1?r+e+"="+n:r+"&"+e+"="+n;
}
return t===!0?r.replace(u,"$1"+n):r;
}
return{
parseUrl:r,
join:e,
addParam:n
};
});