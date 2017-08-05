define("appmsg/comment_tpl.html.js",[],function(){
return'<div class="discuss_container" id="js_cmt_main" style="display:none">\n    <div class="rich_tips with_line title_tips discuss_title_line">\n        <span class="tips">Top Comments</span>\n    </div>\n    <p class="tips_global tc title_bottom_tips" id="js_cmt_nofans1" style="display:none;">Author requires users to follow Official Account before leaving a comment</p>\n    <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn1" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write1">Write a comment<img class="icon_edit" src="<#=window.comment_edit_icon#>" alt=""></a>\n        <#}#>\n    </p>\n    <ul class="discuss_list" id="js_cmt_list"></ul>\n</div>\n\n\n<div class="tips_global rich_split_tips tc" id="js_cmt_nofans2" style="display:none;">\n    Author requires users to follow Official Account before leaving a comment</div>\n\n<p class="discuss_icon_tips rich_split_tips tr" id="js_cmt_addbtn2" style="display:none">\n    <!-- 没有付费才给写留言入口 -->\n    <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n    <a href="javascript:;" id="js_cmt_write2">Write a comment<img class="icon_edit" src="<#=window.comment_edit_icon#>" alt=""></a>\n    <#}#>\n</p>\n\n<p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n<div class="rich_tips tips_global loading_tips" id="js_cmt_loading">\n    <img src="<#=window.comment_loading_img#>" class="rich_icon icon_loading_white" alt="">\n    <span class="tips">Loading</span>\n</div>\n\n<div class="rich_tips with_line tips_global" id="js_cmt_statement" style="display:none">\n    <span class="tips">Most upvoted comments above</span>\n</div>\n\n<p class="rich_split_tips tc" id="js_cmt_qa" style="display:none;">\n    <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n        Learn about writing a valuable comment    </a>\n</p>';
});define("biz_wap/utils/fakehash.js",["biz_common/dom/event.js"],function(t){
"use strict";
function s(t){
t=t||location.hash.substr(1);
var s,o,i,e,u=!1,r=[];
for(s=0;s<h.length;s++)o=h[s],i=o[0],e=o[1],i!==n?i===t&&(e(a),u=!0):r.push(e);
if(!u)for(s=0;s<r.length;s++)r[s](a,t);
a=t;
}
var o=t("biz_common/dom/event.js"),h=[],n="__default_hash__",a=location.hash.substr(1);
return o.on(window,"popstate",function(t){
var o=n;
t.state&&t.state.hash&&(o=t.state.hash),s(o);
}),o.on(window,"hashchange",s),o.on(window,"load",function(){
history.state&&history.state.hash&&s(history.state.hash);
}),{
val:function(){
return history.state&&history.state.hash||location.hash.substr(1);
},
push:function(t){
history.pushState?(history.pushState({
hash:t
},document.title,location.href),s(t)):location.hash=t;
},
on:function(t,s){
"function"==typeof t&&(s=t,t=n),h.push([t,s]);
}
};
});define("biz_common/utils/wxgspeedsdk.js",[],function(){
"use strict";
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
for(var t=d(e),o=0;o<e.speeds.length;o++){
var r=e.speeds[o];
r.time=parseInt(r.time),r.sid>20&&r.time>=0&&i(t,r.sid,r.time);
}
}
function n(){
s(function(){
setTimeout(function(){
for(var e in p)r({
pid_uin_rid:e,
speeds:p[e]
},c);
p={};
},100);
});
}
function t(e){
s(function(){
if(!e.pid||!e.time)return-1;
var n=d(e);
i(n,9,e.time);
});
}
function o(e){
s(function(){
var n=d(e);
p[n]||(p[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance||{};
if(t&&t.timing){
var o=t.timing||{};
i(n,1,o.domainLookupEnd-o.domainLookupStart),i(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
i(n,3,o.connectEnd-o.connectStart),i(n,4,o.responseStart-o.requestStart),i(n,5,o.responseEnd-o.responseStart),
i(n,6,o.domContentLoadedEventStart-o.domLoading),i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(p),p[n][9]||i(n,9,o.domContentLoadedEventStart-o.navigationStart),i(n,10,o.redirectEnd-o.redirectStart),
i(n,11,o.domainLookupStart-o.fetchStart),i(n,12,o.domLoading-o.responseStart);
}
});
}
function i(e,n,t){
p[e]=p[e]||[],p[e][n]=p[e][n]||[],0>t||(21>n?p[e][n][0]=t:p[e][n].push(t));
}
function d(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function r(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
for(var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2],i=n+o+"&speeds=",d="",r=[],s=1;s<e.speeds.length;s++)if(e.speeds[s]){
for(var a=0;a<e.speeds[s].length;a++){
var p=s+"_"+e.speeds[s][a];
i.length+d.length+p.length<1024?d=d+p+";":(d.length&&r.push(i+d.substring(0,d.length-1)),
d=p+";");
}
s==e.speeds.length-1&&r.push(i+d.substring(0,d.length-1));
}
for(var s=0;s<r.length;s++)(new Image).src=r[s];
}
function s(e){
"complete"==document.readyState?e():u.push(e);
}
function a(){
for(var e=0;e<u.length;e++)u[e]();
u=[];
}
var p={},c="https://badjs.weixinbridge.com/frontend/reportspeed?",u=[];
return window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
});define("a/sponsor.js",["biz_common/dom/event.js","biz_common/utils/report.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","a/a_report.js","biz_common/utils/url/parse.js"],function(o){
"use strict";
function e(o,e){
t("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+o+e.report_param);
}
function i(o){
var i=o.adData,t=o.pos_type,p=i.traceid,c=o.a_info.type,l=i.adid,_=i.url,m=o.a_info.rl;
110==i.pt&&(_=_.replace("#","&AdType=80#"));
var d={};
o.report_param=o.report_param||"";
var u=o.adDetailBtn,f=o.adMoreBtn,h=(o.adMessage,o.adAbout),b=o.adImg,y={
type:c,
report_type:2,
url:encodeURIComponent(_),
tid:p,
rl:encodeURIComponent(m),
__biz:biz,
pos_type:t,
pt:i.pt,
click_pos:""
};
n.on(window,"touchend",function(o){
o.target!=h&&o.target!=u&&(h.style.display="none");
}),n.on(document.getElementById("js_ad_inner"),"click",function(i){
return"js_main_img"==i.target.id?d[p+"_1"]||(d[p+"_1"]=!0,y.click_pos=1,s(y,function(){
e(87,o),d[p+"_1"]=!1,a.isWp||a.isIOS?r.invoke("openUrlWithExtraWebview",{
url:_,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=_);
}):location.href=_;
})):d[p+"_2"]||(d[p+"_2"]=!0,y.click_pos=2,s(y,function(){
e(88,o),d[p+"_2"]=!1,a.isWp||a.isIOS?r.invoke("openUrlWithExtraWebview",{
url:_,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=_);
}):location.href=_;
})),!1;
}),n.on(f,"click",function(){
return d[p+"_3"]||(d[p+"_3"]=!0,y.click_pos=3,s(y,function(){
e(89,o),d[p+"_3"]=!1,a.isWp||a.isIOS?r.invoke("openUrlWithExtraWebview",{
url:_,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=_);
}):location.href=_;
})),!1;
}),n.on(u,"click",function(){
return e(90,o),h.style.display="none"==window.getComputedStyle(h).display?"initial":"none",
!1;
}),n.on(h,"click",function(){
e(91,o);
var i="https://mp.weixin.qq.com/promotion/res/htmledition/mobile/html/trade_about.html?aid="+l+"&tid="+p+"#wechat_redirect";
return a.isWp||a.isIOS||a.isAndroid?r.invoke("openUrlWithExtraWebview",{
url:i,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=i);
}):location.href=i,!1;
}),n.on(window,"resize",function(){
setTimeout(function(){
var o=js_sponsor_ad_area.clientWidth;
b.style.height=o/1.77+"px";
},0);
});
}
var n=o("biz_common/dom/event.js"),t=o("biz_common/utils/report.js"),r=o("biz_wap/jsapi/core.js"),a=o("biz_wap/utils/mmversion.js"),p=o("a/a_report.js"),s=(o("biz_common/utils/url/parse.js"),
p.AdClickReport);
return i;
});define("a/app_card.js",["biz_common/dom/event.js","biz_common/dom/class.js","a/a_report.js","biz_wap/utils/position.js","biz_common/utils/report.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","a/appdialog_confirm.js","biz_common/utils/url/parse.js"],function(a,t,n,e){
"use strict";
function o(a){
h("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+a+z.report_param);
}
function d(a,t){
if(z.app_status=a,"downloading"==a){
t=t||0;
var n="";
104==z.data.pt?n='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value">暂停('+t+"%)</span>":113==z.data.pt||114==z.data.pt?z.btn.innerHTML.indexOf("继续")>-1?(n=z.btn.innerHTML,
n=n.replace("继续","暂停")):n='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value">暂停</span>':n='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value">'+t+"%</span>",
z.btn.innerHTML=n,w.addClass(z.btn,"with_processor");
}else if("paused"==a){
var n="";
104==z.data.pt||113==z.data.pt||114==z.data.pt?(n=z.btn.innerHTML,n=n.replace("暂停","继续"),
z.btn.innerHTML=n):(w.removeClass(z.btn,"with_processor"),z.btn.innerHTML=I[a]);
}else w.removeClass(z.btn,"with_processor"),z.btn.innerHTML=I[a];
}
function i(a){
var t=a.js_app_rating,n=1*z.data.app_rating;
n>5&&(n=5),0>n&&(n=0);
var e=["","one","two","three","four","five"],o="",d=Math.floor(n);
if(o="star_"+e[d],n>d&&(n=d+.5,o+="_half"),t&&n>0){
var i=t.getElementsByClassName("js_stars"),s=t.getElementsByClassName("js_scores");
i&&s&&i[0]&&s[0]&&(i=i[0],s=s[0],i.style.display="inline-block",w.addClass(i,o));
}
}
function s(a){
"undefined"!=typeof b&&b.log&&b.log(a);
}
function l(){
b.on("wxdownload:progress_change",function(a){
a.download_id==z.download_id&&d("downloading",a.progress);
});
}
function r(){
z.download_id&&b.invoke("queryDownloadTask",{
download_id:z.download_id
},function(a){
if(s("queryDownloadTask : "+a.state+"; dowloadid = "+z.download_id),a&&a.state){
if("download_succ"==a.state&&(d("downloaded"),window.clearInterval(z.clock)),"downloading"==a.state)return;
("download_fail"==a.state||"default"==a.state)&&(window.clearInterval(z.clock),window.clearInterval(z.install_clock),
e("下载失败"),d("download"));
}
});
}
function p(){
b.invoke("getInstallState",{
packageName:z.data.pkgname,
download_id:z.download_id
},function(a){
var t=a.err_msg;
t.indexOf("get_install_state:yes")>-1&&(s("getInstallState @app, version : "+t),
window.clearInterval(z.install_clock),d(z.url_scheme?"gotodetail":"installed"));
});
}
function c(){
b.invoke("pauseDownloadTask",{
packageName:z.data.pkgname,
download_id:z.download_id
},function(a){
a.err_msg.indexOf("pause_download_task:ok")>-1&&d("paused");
});
}
function _(){
b.invoke("resumeDownloadTask",{
packageName:z.data.pkgname,
download_id:z.download_id
},function(a){
a.err_msg.indexOf("ok")>-1&&d("downloading");
});
}
function m(){
var t=z.data.url,n=a("biz_common/utils/url/parse.js");
(!t||0!=t.indexOf("http://mp.weixin.qq.com/tp/")&&0!=t.indexOf("https://mp.weixin.qq.com/tp/"))&&(t="http://mp.weixin.qq.com/mp/ad_app_info?t=ad/app_detail&app_id="+z.data.app_id+(z.appdetail_params||"")+"&channel_id="+z.channelid+"&md5sum="+z.data.md5sum+"#wechat_redirect"),
z.url_scheme&&(t=n.join(t,{
is_installed:"1"
})),location.href=t;
}
function u(a){
if(z.btn=a.btn,!z.btn)return!1;
z.data=a.adData,z.url_scheme=a.url_scheme,z.appdetail_params=a.appdetail_params||"";
var t={};
z.channelid=z.data.channel_id||"",z.report_param=a.report_param;
var n=20;
if(("103"==z.data.pt||"104"==z.data.pt)&&i(a),"104"==z.data.pt||"113"==z.data.pt||"114"==z.data.pt){
var u=z.data.androiddownurl;
if(u&&u.match){
var w=/&channelid\=([^&]*)/,g=u.match(w);
g&&g[1]&&(z.channelid=g[1],z.data.androiddownurl=u.replace(w,""));
}
z.channelid&&(z.channelid="&channelid="+z.channelid),a.via&&(z.via=["&via=ANDROIDWX.YYB.WX.ADVERTISE",a.via].join("."));
}
b.ready(function(){
("113"==z.data.pt||"114"==z.data.pt||"104"==z.data.pt)&&(b.invoke("getInstallState",{
packageName:O
},function(a){
var t=a.err_msg;
s("getInstallState @yingyongbao : "+t);
var n=t.lastIndexOf("_")+1,e=t.substring(n);
1*e>=T&&t.indexOf("get_install_state:yes")>-1&&(x=!0);
}),b.invoke("getInstallState",{
packageName:z.data.pkgname
},function(a){
var t=a.err_msg;
s("getInstallState @"+z.data.pkgname+" : "+t);
var n=t.lastIndexOf("_")+1,e=t.substring(n);
1*e>=z.data.versioncode&&t.indexOf("get_install_state:yes")>-1&&d(z.url_scheme?"gotodetail":"installed");
})),f.on(z.btn,"click",function(i){
if("installed"==z.app_status)return d("installed"),!1;
if("gotodetail"==z.app_status)return o(74),m(),!1;
if("downloading"==z.app_status)return o(71),c(),!1;
if("paused"==z.app_status)return o(72),_(),!1;
if("downloaded"==z.app_status)return o(73),b.invoke("installDownloadTask",{
download_id:z.download_id,
file_md5:z.data.md5sum
},function(a){
var t=a.err_msg;
s("installDownloadTask : "+t),t.indexOf("install_download_task:ok")>-1?z.install_clock=setInterval(p,1e3):e("安装失败！");
}),!1;
var u=function(){
if("103"==z.data.pt||"111"==z.data.pt||"112"==z.data.pt){
o(23);
var t="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(z.data.appinfo_url)+"&ticket="+(z.data.ticket||window.ticket)+"#wechat_redirect";
b.invoke("downloadAppInternal",{
appUrl:z.data.appinfo_url
},function(a){
a.err_msg&&-1!=a.err_msg.indexOf("ok")||(location.href=t);
});
}else{
if(x)return o(16),void(location.href="tmast://download?oplist=1,2&pname="+z.data.pkgname+z.channelid+z.via);
o(15);
var i=[z.data.adid,z.data.traceid,(z.data.pkgname||"").replace(/\./g,"_"),z.data.source,n,a.engine].join("."),c=function(a,t,n){
b.invoke("addDownloadTaskStraight",{
task_name:a.data.appname,
task_url:a.data.androiddownurl,
extInfo:t,
file_md5:a.data.md5sum
},function(e){
var o=e.err_msg;
o.indexOf("ok")>-1?n&&n(e):b.invoke("addDownloadTask",{
task_name:a.data.appname,
task_url:a.data.androiddownurl,
extInfo:t,
file_md5:a.data.md5sum
},n);
});
};
c(z,i,function(a){
var t=a.err_msg;
s("addDownloadTask : "+t),t.indexOf("ok")>-1?(z.download_id=a.download_id,s("download_id : "+z.download_id),
d("downloading"),z.clock=setInterval(r,1e3),z.install_clock=setInterval(p,1e3),l()):e("调用下载器失败！");
});
}
},f=function(){
return j.isIOS?void u():void y({
app_name:z.data.appname,
app_img_url:z.data.icon_url,
onOk:function(){
u(),o(x?106:100);
},
onCancel:function(){
o(x?107:101);
}
});
};
if("download"==z.app_status&&z.data.rl&&z.data.traceid){
if(!t[z.data.traceid]){
t[z.data.traceid]=!0;
var w,g,h,I,O=!!i&&i.target;
O&&(w=v.getX(O,"js_ad_link")+i.offsetX,g=v.getY(O,"js_ad_link")+i.offsetY,h=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
I=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
k({
type:z.data.type,
report_type:2,
click_pos:0,
url:encodeURIComponent(z.data.androiddownurl),
tid:z.data.traceid,
rl:encodeURIComponent(z.data.rl),
__biz:biz,
pos_type:a.pos_type||0,
pt:z.data.pt,
pos_x:w,
pos_y:g,
ad_w:h||0,
ad_h:I||0
},function(){
t[z.data.traceid]=!1,f();
});
}
}else f();
return!1;
});
});
}
var f=a("biz_common/dom/event.js"),w=a("biz_common/dom/class.js"),g=a("a/a_report.js"),k=g.AdClickReport,v=a("biz_wap/utils/position.js"),h=a("biz_common/utils/report.js"),b=a("biz_wap/jsapi/core.js"),j=a("biz_wap/utils/mmversion.js"),y=a("a/appdialog_confirm.js"),I={
download:"下载",
downloading:"下载中",
paused:"继续",
downloaded:"安装",
gotodetail:"进入",
installed:"已安装"
},x=!1,O="com.tencent.android.qqdownloader",T=1060125,z={
app_status:"download",
btn:null,
download_id:0,
clock:null,
install_clock:null,
data:{},
channelid:"",
via:"",
report_param:"",
appdetail_params:""
};
return u;
});define("a/ios.js",["biz_common/dom/event.js","biz_common/utils/report.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(t){
"use strict";
function e(t){
"undefined"!=typeof WeixinJSBridge&&WeixinJSBridge.log&&WeixinJSBridge.log(t);
}
function o(t,e){
n("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function i(t){
var i=t.btn;
if(!i)return!1;
var n=t.adData,p=!1,c={};
t.report_param=t.report_param||"";
var d="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(n.appinfo_url)+"&ticket="+(t.ticket||window.ticket)+"#wechat_redirect";
r.on(i,"click",function(){
if(e("click @js_app_action"),p)return e("is_app_installed"),o(n.is_appmsg?17:13,t),
void(location.href=n.app_id+"://");
var i=function(){
e("download"),o(n.is_appmsg?15:11,t),e("go : "+d),location.href=d;
};
return e("download"),n.rl&&n.traceid?c[n.traceid]||(c[n.traceid]=!0,a({
url:"/mp/advertisement_report?report_type=2&type="+n.type+"&url="+encodeURIComponent(n.appinfo_url)+"&tid="+n.traceid+"&rl="+encodeURIComponent(n.rl)+"&pt="+n.pt+t.report_param,
type:"GET",
timeout:1e3,
complete:function(){
e("ready to download"),c[n.traceid]=!1,i();
},
async:!0
})):i(),!1;
});
}
{
var r=t("biz_common/dom/event.js"),n=t("biz_common/utils/report.js"),a=t("biz_wap/utils/ajax.js");
t("biz_wap/jsapi/core.js");
}
return i;
});define("a/android.js",["biz_common/dom/event.js","biz_common/utils/report.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(n,a,e,t){
"use strict";
function o(n){
"undefined"!=typeof s&&s.log&&s.log(n);
}
function i(n,a){
r("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+n+a.report_param);
}
function d(n){
function a(){
s.invoke("getInstallState",{
packageName:c.pkgname
},function(n){
var a=n.err_msg;
a.indexOf("get_install_state:yes")>-1&&(window.clearInterval(T),k=!0,d.innerHTML=x.installed);
});
}
function e(){
b&&s.invoke("queryDownloadTask",{
download_id:b
},function(a){
if(a&&a.state){
if("download_succ"==a.state){
o("download_succ"),i(c.is_appmsg?18:14,n),window.clearInterval(y),I=!1,j=!0,d.innerHTML=x.downloaded;
var e=document.createEvent("MouseEvents");
e.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e);
}
if("downloading"==a.state)return;
("download_fail"==a.state||"default"==a.state)&&(o("fail, download_state : "+a.state),
window.clearInterval(y),I=!1,t("下载失败"),d.innerHTML=x.download);
}
});
}
var d=n.btn;
if(!d)return!1;
var r={},c=n.adData,u="",m="",_=c.androiddownurl;
if(_&&_.match){
var p=/&channelid\=([^&]*)/,f=_.match(p);
f&&f[1]&&(u="&channelid="+f[1],c.androiddownurl=_.replace(p,""));
}
n.via&&(m=["&via=ANDROIDWX.YYB.WX.ADVERTISE",n.via].join("."));
var w=!1,v="com.tencent.android.qqdownloader",g=1060125,k=!1,I=!1,j=!1,b=0,y=null,T=null,x={
download:"下载",
downloading:"下载中",
downloaded:"安装",
installed:"已安装"
};
d.innerHTML=x.download,s.ready(function(){
s.invoke("getInstallState",{
packageName:v
},function(n){
var a=n.err_msg;
o("getInstallState @yingyongbao : "+a);
var e=a.lastIndexOf("_")+1,t=a.substring(e);
1*t>=g&&a.indexOf("get_install_state:yes")>-1&&(w=!0);
}),s.invoke("getInstallState",{
packageName:c.pkgname
},function(n){
var a=n.err_msg;
o("getInstallState @"+c.pkgname+" : "+a);
var e=a.lastIndexOf("_")+1,t=a.substring(e);
1*t>=c.versioncode&&a.indexOf("get_install_state:yes")>-1&&(k=!0,d.innerHTML=x.installed);
}),d.addEventListener("click",function(){
if(o("click @js_app_action"),!I){
if(k)return!1;
if(j)return s.invoke("installDownloadTask",{
download_id:b,
file_md5:c.md5sum
},function(n){
var e=n.err_msg;
o("installDownloadTask : "+e),e.indexOf("install_download_task:ok")>-1?T=setInterval(a,1e3):t("安装失败！");
}),!1;
var _=function(){
return w?(i(c.is_appmsg?16:12,n),void(location.href="tmast://download?oplist=1,2&pname="+c.pkgname+u+m)):void s.invoke("addDownloadTask",{
task_name:c.appname,
task_url:c.androiddownurl,
extInfo:n.task_ext_info,
file_md5:c.md5sum
},function(a){
var r=a.err_msg;
o("addDownloadTask : "+r),r.indexOf("add_download_task:ok")>-1?(i(c.is_appmsg?15:11,n),
I=!0,b=a.download_id,o("download_id : "+b),d.innerHTML=x.downloading,y=setInterval(e,1e3)):t("调用下载器失败！");
});
};
return c.rl&&c.traceid?r[c.traceid]||(r[c.traceid]=!0,l({
url:"/mp/advertisement_report?report_type=2&type="+c.type+"&url="+encodeURIComponent(c.androiddownurl)+"&tid="+c.traceid+"&rl="+encodeURIComponent(c.rl)+"&__biz="+biz+"&pt="+c.pt+"&r="+Math.random(),
type:"GET",
timeout:1e3,
complete:function(){
r[c.traceid]=!1,_();
},
async:!0
})):_(),!1;
}
});
});
}
var r=(n("biz_common/dom/event.js"),n("biz_common/utils/report.js")),l=n("biz_wap/utils/ajax.js"),s=n("biz_wap/jsapi/core.js");
return d;
});define("a/profile.js",["biz_common/dom/event.js","biz_common/utils/report.js","a/a_report.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js"],function(t){
"use strict";
function e(t,e){
a("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function n(t){
console.log(t),location.href=t;
}
function i(t){
var i=t.adData,s=t.pos_type||0,l={};
t.report_param=t.report_param||"",function(){
function r(t){
{
var e=_.dataset;
"https:"==top.location.protocol?1500:1200;
}
if(e.rl&&e.url&&e.type&&e.tid){
var n=e.tid,o=e.type,a=e.url,r=e.rl;
if(!l[n]){
l[n]=!0;
var d,m,u,j,b=!!t&&t.target;
b&&(d=c.getX(b,"js_ad_link")+t.offsetX,m=c.getY(b,"js_ad_link")+t.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
j=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
p({
type:o,
report_type:2,
click_pos:0,
url:encodeURIComponent(a),
tid:n,
rl:encodeURIComponent(r),
__biz:biz,
pos_type:s,
pt:i.pt,
pos_x:d,
pos_y:m,
ad_w:u||0,
ad_h:j||0
},function(){
l[n]=!1,f();
});
}
}else f();
}
var _=t.btnAddContact,m=t.btnViewProfile;
if(_&&_.dataset){
var u=function(o,s){
var p=o.err_msg,r=i.is_appmsg?6:1;
-1!=p.indexOf("ok")?(m.style.display="inline-block",_.style.display="none",r=i.is_appmsg?9:4):"add_contact:added"==p?r=i.is_appmsg?7:2:"add_contact:cancel"==p?r=i.is_appmsg?8:3:(--s,
s>=0?d.invoke("addContact",{
scene:scene,
webtype:"1",
username:i.usename
},function(t){
u(t,s);
}):(p="addContact:fail|msg:"+p+"|uin:"+uin+"|biz:"+biz,a("http://mp.weixin.qq.com/mp/jsreport?key=13&content="+p+"&r="+Math.random()),
n(i.url))),e(r,t);
},f=function(){
e(i.is_appmsg?10:5,t),d.invoke("addContact",{
scene:scene,
webtype:"1",
username:i.usename
},function(t){
u(t,1);
});
};
o.on(_,"click",r);
}
}(),function(){
var e=t.btnViewProfile;
e&&o.on(e,"click",function(){
var e=t.btnAddContact.dataset,o={
source:4,
tid:e.tid,
idx:idx,
mid:mid,
appuin:biz,
pt:i.pt,
aid:t.aid,
ad_engine:t.ad_engine,
pos_type:s
},a=r.join(i.url,o);
return n(a),!1;
});
}();
}
{
var o=t("biz_common/dom/event.js"),a=t("biz_common/utils/report.js"),s=t("a/a_report.js"),p=s.AdClickReport,r=(t("biz_wap/utils/ajax.js"),
t("biz_common/utils/url/parse.js")),c=t("biz_wap/utils/position.js"),d=t("biz_wap/jsapi/core.js");
"https:"==top.location.protocol?5:0,window.__report;
}
return i;
});define("a/sponsor_a_tpl.html.js",[],function(){
return'<div class="ct_mpda_area" id="js_ad_area">\n    <div class="ct_mpda_placeholder">\n        <p class="ct_mpda_tips">Ads can also be a natural part of life</p>\n    </div>\n    <div class="ct_mpda_inner js_ad_link" id="js_ad_inner" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>" data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n        <div class="ct_mpda_hd">\n            <span class="ct_mpda_main_img img_bg_cover" id="js_main_img" style="background-image:url(<#=image_url#>)"></span> \n        </div>\n        <div class="ct_mpda_bd" id="js_ad_message">\n            <span class="ct_mpda_logo img_bg_cover" style="background-image:url(<#=biz_info.head_img#>)"></span>\n            <div class="ct_mpda_desc_box">\n                <p class="ct_mpda_title"><#=biz_info.nick_name#></p>\n                <p class="ct_mpda_details" id="js_ad_detail">提供的广告</p>\n            </div>\n            <# if(pt== 108){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more">查看详情</a>\n            <# }else if(pt==109){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more">下载应用</a>\n            <# }else if(pt==110){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more">了解公众号</a>\n            <# } #>\n            <a class="ct_mpda_btn_about" id="js_btn_about">关于广告</a>\n        </div>\n    </div>\n</div>';
});define("a/a_tpl.html.js",[],function(){
return'<div class="rich_media_extra" id="gdt_area">\n    <# if(pos_type==0){ #>\n    <div class="rich_tips with_line title_tips">\n        <span class="tips">Ad</span>\n    </div>\n    <# } #>\n    <div class="js_ad_link extra_link <# if(pt==107){ #>preview_img_primary<# } #>" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>"  data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n        <# if(pt==1){ #>\n        <#=hint_txt#>\n        <img class="icon_arrow_gray" src="<%@GetResFullName($images_path$icon/common/icon_arrow_gray.png)%>">\n        <img class="icon_loading_white icon_after" style="display:none;" id="loading_<#=traceid#>" src="<%@GetResFullName($images_path$icon/common/icon_loading_white.gif)%>">\n        <# }else if(pt==2||pt==107){ #>\n        <!--第三方logo-->\n        <# if (logo.indexOf("http://mmsns.qpic.cn/") == 0){ #>\n        <div class="brand_logo"><img data-src="<#=logo#>" alt="logo图片" class="js_alazy_img"></div>\n        <# } #>\n        <img class="appmsg_banner js_alazy_img" data-src="<#=image_url#>">\n        <# if(watermark_type!=0){ #><i class="promotion_tag"><# if(watermark_type==1){ #>商品推广<# }else if (watermark_type==2){ #>活动推广<# }else if (watermark_type==3){ #>应用下载<# } #></i><# } #>\n        <# }else if(pt==7){ #>\n        <!-- 图文 -->\n        <div class="preview_group preview_card">\n            <div class="preview_group_inner card_inner">\n                <div class="preview_group_info">\n                    <strong class="preview_group_title2"><#=hint_txt#></strong>\n                    <div class="preview_group_desc"><#=ad_desc#></div>\n                    <img data-src="<#=image_url#>" alt="" class="preview_card_avatar js_alazy_img">\n                </div>\n                <i class="promotion_tag">活动推广</i>\n            </div>\n        </div>\n        <# }else if(pt==115){ #>\n        <div class="preview_group mod_follow_with_img">\n            <div class="wx_flex_layout">\n                <div class="wx_flex_bd">\n                    <img class="fwi_thumb js_alazy_img" data-src="<#=image_url#>" alt="">\n                </div>\n                <div class="wx_flex_ft">\n                    <span class="radius_avatar"><img data-src="<#=biz_info.head_img#>" alt="" class="js_alazy_img"></span>\n                    <strong class="fwi_nickname"><#=biz_info.nick_name#></strong>\n                    <a id="js_view_profile_<#=pos_type#>" <# if(biz_info.is_subscribed == 0){ #>style="display:none"<# } #> class="wx_min_plain_btn primary js_ad_btn">查看</a>\n                    <a id="js_add_contact_<#=pos_type#>" data-url="<#=url#>" data-type="<#=type#>" data-tid="<#=traceid#>" data-rl="<#=rl#>" <# if(biz_info.is_subscribed ==1){ #>style="display:none"<# } #> class="wx_min_plain_btn primary js_ad_btn">关注</a>\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==100){ #>\n        <div class="preview_group follow <# if(!!biz_info.show_comm_attention_num){ #>with_tips<# } #>">\n            <div class="preview_group_inner">\n                <div class="preview_group_info append_btn">\n                    <strong class="preview_group_title"><#=biz_info.nick_name#></strong>\n                    <div class="preview_group_desc"><#=hint_txt#></div>\n                    <# if(!!biz_info.show_comm_attention_num){ #>\n                    <div class="preview_group_desc weak_tips">有<#=biz_info.comm_attention_num#>个好友关注</div>\n                    <# } #>\n                    <# if(!!biz_info.head_img){ #>\n                    <img data-src="<#=biz_info.head_img#>" alt="" class="preview_group_avatar br_radius js_alazy_img" >\n                    <# }else{ #>\n                    <img class="preview_group_avatar br_radius" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" alt="<#=biz_info.nick_name#>" >\n                    <# } #>                                 \n                </div>\n                <div class="preview_group_opr">\n                    <a id="js_view_profile_<#=pos_type#>" <# if(biz_info.is_subscribed == 0){ #>style="display:none"<# } #> class="btn btn_inline btn_primary btn_line js_ad_btn">查看</a>\n                    <a id="js_add_contact_<#=pos_type#>" data-url="<#=url#>" data-type="<#=type#>" data-tid="<#=traceid#>" data-rl="<#=rl#>" <# if(biz_info.is_subscribed ==1){ #>style="display:none"<# } #> class="btn btn_inline btn_line  btn_primary js_ad_btn">关注</a>\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==102){ #>\n        <div class="preview_group">\n            <div class="preview_group_inner">\n                <div class="preview_group_info append_btn">\n                    <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                    <div class="preview_group_desc"><#=hint_txt#></div>\n                    <img data-src="<#=app_info.icon_url#>" alt="" class="preview_group_avatar br_radius js_alazy_img">\n                </div>\n                <div class="preview_group_opr">\n                    <a id="js_app_action_<#=pos_type#>" class="btn btn_inline btn_primary js_ad_btn btn_download">下载</a>\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==101){ #>\n        <div class="preview_group preview_card">\n            <div class="preview_group_inner card_inner">                            \n                <div class="preview_group_info append_btn">\n                    <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                    <div class="preview_group_desc"><#=hint_txt#></div>\n                    <img data-src="<#=app_info.icon_url#>" alt="" class="preview_card_avatar js_alazy_img">                               \n                </div>\n                <div class="preview_group_opr">\n                    <a id="js_app_action_<#=pos_type#>" class="btn btn_inline btn_primary js_ad_btn">下载</a>\n                </div>\n            </div>                        \n        </div>\n        <# }else if(pt==103||pt==104){ #>\n        <div class="preview_group obvious_app">\n            <div class="preview_group_inner">\n                <div class="pic_app">\n                    <img data-src="<#=image_url#>" alt="" class="js_alazy_img">\n                </div>\n                <div class="info_app">\n                    <p class="name_app"><#=app_info.app_name#></p>\n                    <# if(pt==103){ #>\n                    <p class="profile_app" style="display:none;"><span class="fun_exp"><#=app_info._category#></span><em>|</em><span class="compacity"><#=app_info._app_size#></span></p>\n                    <# } else if(pt==104){ #>\n                    <p class="profile_app" style="display:none;"><span class="fun_exp"><#=app_info._app_size#></span><em>|</em><span class="compacity"><#=app_info._down_count#></span></p>\n                    <# } #>\n                    <!--星级评分-->\n                    <p class="grade_app" id="js_app_rating_<#=pos_type#>">\n                        <!--\n                            半星：star_half\n                            一星：star_one\n                            一星半：star_one_half\n                            二星：star_two\n                            三星：star_three\n                            四星：star_four\n                            五星：star_five\n                        -->\n                        <span class="js_stars stars" style="display:none;"></span>\n                        <!--暂无评分\n                        <span class="scores">3.5</span>\n                        -->\n                        <span class="js_scores scores"></span>\n                    </p>\n                    <div class="dm_app">\n                        <a id="js_appdetail_action_<#=pos_type#>" class="ad_btn btn_download js_ad_btn">下载</a>\n                        <p class="extra_info">来自<# if(pt==103){ #>App Store<# }else{ #>腾讯应用宝<# } #></p>\n                    </div>\n                </div>\n            </div>            \n        </div>\n        <# }else if(pt==105){ #>\n        <div class="mpda_card cardticket">\n            <div class="cardticket_hd cell">\n                <div class="cell_hd">\n                    <span class="radius_avatar">\n                        <img class="avatar js_alazy_img" data-src="<#=card_info.card_logo_url#>" >\n                    </span>\n                </div>\n                <div class="cell_bd cell_primary"><#=card_info.card_title#></div>\n                <div class="cell_ft">\n                    <a class="btn btn_plain_primary btn_inline js_ad_btn" id="js_card_action_<#=pos_type#>">领券</a>\n                </div>\n            </div>\n            <div class="cardticket_ft">\n                <div class="cardticket_theme"></div>\n                <p class="cardticket_source tips_global"><#=card_info.card_brand_name#></p>\n            </div>\n        </div>\n        <# }else if(pt==106){ #>\n        <!-- 小店广告 -->\n        <div class="preview_group preview_card preview_shop_card">\n            <div class="preview_group_inner shop_card_inner">\n                <div class="preview_group_info">\n                    <strong class="preview_shop_card_title"><#=mp_shop_info.name#></strong>\n                    <div class="preview_shop_card_desc">\n                        <span class="preview_card_desc_meta btn_plain_primary preview_shop_card_btn_buy js_ad_btn" id="js_shop_action_<#=pos_type#>">购买</span>\n                        <span class="preview_card_desc_meta preview_shop_card_oldprice">&yen;<#=mp_shop_info.ori_price/100#></span>\n                        <span class="preview_card_desc_meta preview_shop_card_price">&yen;<#=mp_shop_info.cur_price/100#></span>\n                    </div>\n                    <img data-src="<#=mp_shop_info.img#>" alt="" class="preview_card_avatar js_alazy_img">\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==111||pt==113||pt==112||pt==114){ #>\n        <!-- 背景高斯模糊带描述文字、带背景图的app下载 -->\n        <div class="preview_group download_app_with_desc js_download_app_card">\n            <div class="preview_group_inner" style="background-image:url(<#=image_url#>)">\n                <div class="preview_group_hd">\n                    <div class="preview_group_hd_inner">\n                        <img data-src="<#=app_info.icon_url#>" alt="" class="preview_card_avatar js_alazy_img">\n                        <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                        <a id="js_appdetail_action_<#=pos_type#>" class="preview_group_btn js_ad_btn">下载</a>\n                        <!-- <a id="js_app_action_<#=pos_type#>" class="preview_group_btn">继续</a>\n                        <a id="js_app_action_<#=pos_type#>" class="preview_group_btn">打开</a> -->\n                        <!-- <a id="js_app_action_<#=pos_type#>" class="preview_group_btn with_processor"><i class="btn_processor" style="width:35%;"></i><span class="btn_processor_value">35%</span></a> -->\n                    </div>\n                </div>\n                <# if(pt==111||pt==113){ #>\n                <div class="preview_group_bd">\n                    <div class="preview_group_desc"><#=hint_txt.split(\'|\')[0]#></div>\n                    <div class="preview_group_desc"><#=hint_txt.split(\'|\')[1] || ""#></div>\n                </div>\n                <div class="preview_group_ft"><div class="preview_group_download_info"><span class="download_size" ><#=app_info.app_size#></span>&nbsp;来自<# if(pt==111){ #>App Store<# }else{ #>腾讯应用宝<# } #></div></div>\n                <# } #>\n            </div>            \n        </div>\n        <# } #>\n    </div>\n</div>\n';
});define("a/mpshop.js",["biz_common/dom/event.js","biz_common/utils/report.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js"],function(t){
"use strict";
function e(t,e){
s("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function o(t){
var o=t.adData,s=t.pos_type||0,a=o.tid,_=o.type,l=(o.adid,o.outer_id),m=o.url,c=o.rl,d={};
t.report_param=t.report_param||"";
var j=t.btn;
if(j){
i.on(j,"click",function(o){
if(!d[a]){
d[a]=!0;
var i,j,u,b,f=!!o&&o.target;
f&&(i=r.getX(f,"js_ad_link")+o.offsetX,j=r.getY(f,"js_ad_link")+o.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
b=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
n({
type:_,
report_type:2,
click_pos:0,
url:encodeURIComponent(m),
tid:a,
rl:encodeURIComponent(c),
__biz:biz,
pos_type:s,
pt:106,
pos_x:i,
pos_y:j,
ad_w:u||0,
ad_h:b||0
},function(){
d[a]=!1,e(61,t),location.href=p.join(m,{
outer_id:l
});
});
}
return!1;
});
}
}
var i=t("biz_common/dom/event.js"),s=t("biz_common/utils/report.js"),a=t("a/a_report.js"),n=a.AdClickReport,r=(t("biz_wap/utils/ajax.js"),
t("biz_wap/utils/position.js")),p=(t("biz_wap/jsapi/core.js"),t("biz_common/utils/url/parse.js"));
return o;
});define("a/card.js",["biz_common/dom/event.js","biz_common/utils/report.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js","biz_wap/jsapi/cardticket.js"],function(e,t,a,i){
"use strict";
function o(e,t){
r("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+t.report_param);
}
function s(e){
var t=e.adData,a=e.pos_type||0,i=t.tid,r=t.type,p=t.url,d=t.rl,l={};
e.report_param=e.report_param||"";
var m=e.btn;
if(m){
n.on(m,"click",function(n){
if(!l[i]){
l[i]=!0;
var m,j,u,f,b=!!n&&n.target;
b&&(m=_.getX(b,"js_ad_link")+n.offsetX,j=_.getY(b,"js_ad_link")+n.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
f=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
c({
type:r,
report_type:2,
click_pos:0,
url:encodeURIComponent(p),
tid:i,
rl:encodeURIComponent(d),
__biz:biz,
pos_type:a,
pt:105,
pos_x:m,
pos_y:j,
ad_w:u||0,
ad_h:f||0
},function(){
l[i]=!1,o(37,e),s.openCardDetail(t.card_id,t.card_ext,e);
});
}
return!1;
});
}
}
var n=e("biz_common/dom/event.js"),r=e("biz_common/utils/report.js"),p=e("a/a_report.js"),c=p.AdClickReport,_=(e("biz_wap/utils/ajax.js"),
e("biz_wap/utils/position.js")),d=(e("biz_wap/jsapi/core.js"),e("biz_wap/jsapi/cardticket.js"));
return s.openCardDetail=function(e,t,a){
d.openCardDetail({
card_id:e,
card_ext:t,
success:function(){
!!a&&o(38,a);
},
error:function(){
!!a&&o(39,a),i("调起卡券错误");
},
access_denied:function(){
!!a&&o(40,a),i("异常错误[access_denied]");
}
});
},s;
});define("biz_wap/utils/position.js",[],function(){
"use strict";
function e(t,f){
var s=t.offsetLeft;
if(t.offsetParent&&t.offsetParent.className){
var a=t.offsetParent.className;
-1==a.indexOf(f)&&(s+=e(t.offsetParent,f));
}
return s;
}
function t(e,f){
var s=e.offsetTop;
if(e.offsetParent&&e.offsetParent.className){
var a=e.offsetParent.className;
-1==a.indexOf(f)&&(s+=t(e.offsetParent,f));
}
return s;
}
return{
getX:e,
getY:t
};
});define("a/a_report.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","appmsg/log.js"],function(o){
"use strict";
function t(o,t){
var i="https:"==top.location.protocol?1500:1200,c="/mp/advertisement_report?r="+Math.random()+"&",u=[],l=!1;
for(var _ in o)o.hasOwnProperty(_)&&u.push(_+"="+o[_]);
c+=u.join("&");
var d="trace_id="+o.tid+"&product_type="+o.pt+"&jump_url="+o.url+"&logtype=3&url="+encodeURIComponent(location.href)+"&rl="+o.rl;
o.tid&&n.gtVersion("6.3.22",!0)&&p.invoke("adDataReport",{
ad_info:d,
need_record_page_operation:1
},function(){}),s("[Ad report] report_arg="+d),r({
url:c,
mayAbort:!0,
type:"GET",
success:function(){
e&&e(56+a);
},
error:function(){
e&&e(57+a);
},
complete:function(){
l||(l=!0,!!t&&t());
},
async:!0
}),setTimeout(function(){
l||(l=!0,window.__ajaxtest="1",!!t&&t());
},i);
}
var r=o("biz_wap/utils/ajax.js"),e=window.__report,i=top.location.protocol,a="https:"==i?5:0,p=o("biz_wap/jsapi/core.js"),n=o("biz_wap/utils/mmversion.js"),s=o("appmsg/log.js");
return{
AdClickReport:t
};
});define("appmsg/my_comment_tpl.html.js",[],function(){
return'<!-- 发表留言 -->\n<div id="js_cmt_mine" class="discuss_container editing access" style="display:none;">\n    <div class="discuss_container_inner">\n        <h2 class="rich_media_title"><#=window.msg_title#></h2>\n        <span id="log"></span>\n        <div class="frm_textarea_box_wrp">\n            <span class="frm_textarea_box">\n                <textarea id="js_cmt_input" class="frm_textarea" placeholder="Official Account has opted for comments to be displayed publicly"></textarea>\n                <div class="emotion_tool">\n                    <span class="emotion_switch" style="display:none;"></span>\n                    <span id="js_emotion_switch" class="pic_emotion_switch_wrp">\n                        <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n                        <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n                    </span>\n                    <div class="emotion_panel" id="js_emotion_panel">\n                        <span class="emotion_panel_arrow_wrp" id="js_emotion_panel_arrow_wrp">\n                            <i class="emotion_panel_arrow arrow_out"></i>\n                            <i class="emotion_panel_arrow arrow_in"></i>\n                        </span>\n                        <div class="emotion_list_wrp" id="js_slide_wrapper">\n                            <!--<ul class="emotion_list"></ul>-->\n                            <!--<li class="emotion_item"><i class="icon_emotion"></i></li>-->\n                        </div>\n                        <ul class="emotion_navs" id="js_navbar">\n                            <!--<li class="emotion_nav"></li>-->\n                        </ul>\n                    </div>\n                </div>\n            </span>\n        </div>\n        <div class="discuss_btn_wrp"><a id="js_cmt_submit" class="btn btn_primary btn_discuss btn_disabled" href="##">Submit</a></div>\n        <div class="discuss_list_wrp" style="display:none">\n            <div class="rich_tips with_line title_tips discuss_title_line">\n                <span class="tips">My Comment</span>\n            </div>\n            <ul class="discuss_list" id="js_cmt_mylist"></ul>\n        </div>\n        <div class="rich_tips tips_global loading_tips" id="js_mycmt_loading">\n            <img src="<#=window.icon_loading_white#>" class="rich_icon icon_loading_white" alt="">\n            <span class="tips">Loading</span>\n        </div>\n        <div class="wx_poptips" id="js_cmt_toast" style="display:none;">\n            <img alt="" class="icon_toast" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAYAAABUIcSXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMTUxMzkxZS1jYWVhLTRmZTMtYTY2NS0xNTRkNDJiOGQyMWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTA3QzM2RTg3N0UwMTFFNEIzQURGMTQzNzQzMDAxQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTA3QzM2RTc3N0UwMTFFNEIzQURGMTQzNzQzMDAxQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWMyOGVjZTMtNzllZS00ODlhLWIxZTYtYzNmM2RjNzg2YjI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNTEzOTFlLWNhZWEtNGZlMy1hNjY1LTE1NGQ0MmI4ZDIxYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmvxj1gAAAVrSURBVHja7J15rF1TFMbXk74q1ZKHGlMkJVIhIgg1FH+YEpEQJCKmGBpThRoSs5jVVNrSQUvEEENIhGiiNf9BiERICCFIRbUiDa2qvudbOetF3Tzv7XWGffa55/uS7593977n3vO7e5+199p7v56BgQGh0tcmvAUERREUQVEERREUQVEERREUQVEERREUQVEERREUQVEERREUQVEERVAUQVEERVAUQbVYk+HdvZVG8b5F0xj4RvhouB+eCy8KrdzDJc1RtAX8ILxvx98V1GyCSkN98Cx4z/95/Wn4fj6j6tUEeN4wkFSnw1MJqj5NhBfAuwaUHREUg4lqNMmePVsHll/HFhVfe1t3FwpJI8DXCCquDrCWNN4B6Tb4M3Z98aTPmTvh0YHl18PXw29yZiKejoPvcUD6E74yFBJbVDk6Bb7K8aP/Hb4c/tRzEYIqprPhSxzlf4Uvhb/0Xoig8qnHAJ3lqPMzfDH8XZ4LEpRf2sVdA5/sqPO9Qfop70UJyn+/boaPddT5yrq7VUUvTIVJI7q74MMddXR8NB1eXcYvhBpZm0s2w72/o86HFoKvLau/pYaXzjLMdUJ6y0LwtWV9CIIaXtvA8+G9HHV03u5q+K+yH47U0NoRngPv7KjzHDwTLj0bS1BDazfJJlcnOOostC6ysnCT+q80G/sIvFVgeW09D8FPVT0uoP7VfvAD8NjA8pqmuAN+OcYAjso0RbIZ8DGB5TVNcRO8JMaHY9SXSdfa3eeANJimWBLrA7JFiZwIXye+NMUV8CcxP2SRFjXefok7NRjSGZJlWUPvw2/wtNiQirSoXWyMsR28wR7AzzYM0oXw+Y7yK+CLJGeaoqjyrJSdZJD6Ov4+z5y6NJc0Az7NUecHydIUy+v60KNyQHoM3nKI1y7YCFiq0i7uBvgER52vDdKqWn9djhY1Dn4G3n6Ecqm2rF74dvgoR53S0hQxW9RJAZAGW5bSn58QJA27dQ7uIEedjywEX5NKVxCqsY6y+qA+LxFI4+yZ6oH0trWkNan80jygtIUsc5SflgAsDXgehfdx1KkkTRE76tN+Xue2jnTU0Ru1oIbvpt30bBtKhOp5yaaRkts0lic8V1i6dPcIRx2d/l8Y8XtNNEg7OOo8bl1kmmOKnDsO88CaYzejau0hWZqiL7C83oCH4SeTHvwV2BqqsHRVztSEYOmWF80NeXZT6Hd4KflResE9vCnBOlCyGfDNAstHTVPUDWoQ1t3iW+9WNizvlhfd4aerXd+ThqiMfNR6+9LvOOro5OY5JX2H4+F7HZD+kGzlamMgldWiirQsjcwWFbjmqZJteekJLK9pisvgL6RhKvuciZiwzrWWGapfrPy30kBVcSBIrw0aD3PU0XB6cehntq7rTMf7/2iQlktDVdXJLXlg6VjmiYBn6rWSTRCH6hvJ0hQrpcGq8oidsmHpTP8t8DGO9/vcWt9qabiqPgup1yKyQwvC2tSefZ73SSpNkUJ4PlLorlHZ+446nc8f3fIyywlJhwrTuwVSjBa1ccvSxN0hjjoK5xVrYZMd9V6XbFfgBukixTwGLg8sDam3dZR/wZ6L/dJlin1en8LS+bgpFbz3Ygvzu1J1HKxYNqxGpCmaCEo12rrBorD6LRp8UbpcdR5VWhTW35KlKd6QFqjuM2XzwlpnMxTvSkuUwuG/Xlg6NtPjbT6WFimF/VG6LEvXgn8QGDjMbBukVECFwhpoS+CQatfX2Q1q6H7wENHdrfCr0lKleEB9JyxNneus+VJpsVL9TwI6W65LovWIGl3KtVJaLv7LBwYTFEERFEVQFEERFEVQFEERFEVQFEERFEVQFEERFEVQFEERFFWq/hFgADUMN4RzT6/OAAAAAElFTkSuQmCC">\n            <p class="toast_content">Comment Submitted</p>\n        </div>\n    </div>\n</div>\n';
});define("appmsg/cmt_tpl.html.js",[],function(){
return'<li class="discuss_item" id="cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>">\n    <# if(is_elected == 1){ #>\n    <div class="discuss_opr">\n        <span class="media_tool_meta tips_global meta_praise js_comment_praise <# if(like_status == 1){ #>praised<# } #>" data-status="<#=like_status#>" data-content-id=\'<#=content_id#>\'>\n            <i class="icon_praise_gray"></i>\n            <span class="praise_num"><# if(like_num_format !== 0){ #><#=like_num_format#> <# } #></span>\n        </span>\n    </div>\n    <# } #>\n    <div class="user_info">\n        <strong class="nickname"><#=nick_name#><# if(is_from_friend == 1){ #>(Friend)<# } #></strong>\n        <img class="avatar" src="<#=logo_url#>">\n        <# if(typeof is_top === \'number\' && is_top == 1){ #><span class="icon_discuss_top">置顶</span><# } #>\n    </div>\n    <div class="discuss_message">\n        <span class="discuss_status"><#=status#></span>\n        <div class="discuss_message_content"><#=content#></div>\n    </div>\n    <p class="discuss_extra_info">\n        <#=time#>               \n        <# if (is_from_me == 1) { #>\n        <a class="discuss_del js_del" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">Delete</a>\n        <# } #>\n    </p>\n    <# if(reply && reply.reply_list && reply.reply_list.length > 0){ #>\n        <div class="reply_result">\n            <div class="discuss_opr">\n                <span class="media_tool_meta tips_global meta_praise js_reply_praise <# if(reply.reply_list[0].reply_like_status == 1){ #>praised<# } #>" data-status="<#=reply.reply_list[0].reply_like_status#>" data-content-id="<#=content_id#>" data-reply-id=\'<#=reply.reply_list[0].reply_id#>\'>\n                    <i class="icon_praise_gray"></i>\n                    <span class="praise_num"><# if(reply.reply_list[0].reply_like_num !== 0){ #><#=reply.reply_list[0].reply_like_num#> <# } #></span>\n                </span>\n            </div>\n            <div class="nickname">Reply by author</div>\n            <div class="discuss_message">\n                <div class="discuss_message_content"><#=reply.reply_list[0].content#></div>\n            </div>\n            <p class="discuss_extra_info"><#=reply.reply_list[0].time#></p>\n        </div>\n    <# } #>\n        \n</li>\n';
});define("sougou/a_tpl.html.js",[],function(){
return'<h3 class="rich_media_area_title">相关文章</h3>\n<ul class="relate_article_list">\n    <# for(var i in list){#>\n    <li class="relate_article_item">\n        <a class="relate_article_link sg_link" href="<#=list[i].url#>" target="_blank"><#=list[i].title#></a>\n    </li>\n    <#}#>\n</ul>\n';
});