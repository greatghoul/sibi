define("appmsg/emotion/emotion.js",["appmsg/emotion/dom.js","appmsg/emotion/slide.js","appmsg/emotion/common.js","appmsg/emotion/nav.js","appmsg/emotion/textarea.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(t,n){
"use strict";
function i(){
v.WIDTH=S=_("#js_article").width()||_("#js_cmt_mine").width(),v.pageCount=M=e(),
o(),a(),s();
}
function e(){
d=S-2*P,C=parseInt(d/W),k=3*C-1;
var t=parseInt(R/k);
return R%k!==0&&t++,t;
}
function o(){
var t=_("#js_slide_wrapper"),n=v.wrapperWidth=M*S;
t.css({
width:n+"px"
});
}
function a(){
for(var t=_("#js_slide_wrapper").el[0],n=(S-C*W)/2,i=0,e=M;e>i;i++){
var o=document.createElement("ul");
o.setAttribute("class","emotion_list"),t.appendChild(o),_(o).css({
width:S+"px",
"float":"left",
"padding-left":n+"px",
"padding-right":"0"
}),r(o,i,n);
}
}
function s(){
for(var t=_("#js_navbar"),n=0,i=M;i>n;n++){
var e=_(_.el("li"));
e.attr("class","emotion_nav js_emotion_nav"),D.push(e),t.append(e);
}
v.navs=D;
}
function r(t,n,i){
for(var e=0,o=k;o>e;e++){
var a=document.createElement("li");
if(y++,y>R)break;
a=c(y),_(t).append(a);
}
var s=m(i);
_(t).append(s);
}
function c(t){
var n=_(_.el("li")),i=_(_.el("i")),e=0;
i.attr("class","icon_emotion icon"+t),i.css({
"background-position":"0px "+((1-t)*Z-e)+"px"
}),n.attr("class","emotion_item js_emotion_item"),n.attr("data-index",t);
var o=W+"px";
return n.css({
width:o,
height:o
}),n.append(i),n;
}
function m(t){
var n=_(_.el("li")),i=_(_.el("i"));
n.attr("class","emotion_item del js_emotion_item"),n.attr("data-index",-1),i.attr("class","icon_emotion del");
var e=W+"px";
return n.css({
width:e,
height:e,
right:t+"px"
}),n.append(i),n;
}
function p(){
function t(){
o.show(),w.show(),e.blur(),_.later(function(){
e.blur();
});
}
function n(){
o.hide(),w.hide(),e.focus(),_.later(function(){
e.focus();
});
}
w=_("#js_emotion_panel");
var i=_("#js_cmt_input"),e=i.el[0],o=_("#js_emotion_panel_arrow_wrp");
w.hide(),_("#js_emotion_switch").on("tap",function(i){
i.preventDefault(),i.stopPropagation(),g=!g,g?t():n();
}),i.on("tap",function(){
w.hide(),g=!1;
});
}
function l(){
function t(t){
if(!v.isMoved){
var n=_(t.currentTarget),i=+n.attr("data-index");
h.inputEmotion(i);
}
}
_("li.js_emotion_item").on("click",t),_("li.js_emotion_item").on("touchend",t);
}
function u(t){
for(var n=[],i=0;i<x.length;i++){
var e=x[i];
if(e.cn){
var o=new RegExp(e.cn.replace("[","\\[").replace("]","\\]"),"g"),a=t.match(o);
a&&(n=n.concat(a));
}
if(e.emoji){
var o=new RegExp(e.emoji,"g"),a=t.match(o);
a&&(n=n.concat(a));
}
}
return _.each(n,function(n){
if(void 0!==I[n]){
var i=I[n],e=O[i],o='<i class="icon_emotion_single '+e+'"></i>';
t=t.replace(n,o);
}
}),t;
}
for(var d,_=t("appmsg/emotion/dom.js"),f=t("appmsg/emotion/slide.js"),v=t("appmsg/emotion/common.js"),j=t("appmsg/emotion/nav.js"),h=t("appmsg/emotion/textarea.js"),n=(_.each,
{}),g=!1,w=null,x=t("biz_common/utils/emoji_data.js"),b=t("biz_common/utils/emoji_panel_data.js"),E={},I={},O=[],T=0;T<x.length;T++){
var N=x[T];
E[N.id]=N;
}
for(var T=0;T<b.length;T++){
var z=b[T],N=E[z];
I[N.cn]=T,N.emoji&&(I[N.emoji]=T),O.push(N.style);
}
var M,k,C,S,D=[],P=15,R=v.EMOTIONS_COUNT,W=v.EMOTION_LI_SIZE,Z=v.EMOTION_SIZE;
n.init=function(){
p(),i(),f.init(),j.activeNav(0),l(),h.init();
};
var y=0;
return n.encode=function(t){
t=u(t);
var n=/\/([\u4e00-\u9fa5\w]{1,4})/g,i=t.match(n);
return i?(_.each(i,function(n){
var i=n.replace("/",""),e=[i.slice(0,4),i.slice(0,3),i.slice(0,2),i.slice(0,1)];
_.each(e,function(n){
if(void 0!==I["["+n+"]"]){
var i=I["["+n+"]"],e=O[i],o='<i class="icon_emotion_single '+e+'"></i>';
t=t.replace("/"+n,o);
}
});
}),t):t;
},n.hidePannel=function(){
w.hide();
},n;
});define("biz_wap/utils/wapsdk.js",["biz_common/utils/wxgspeedsdk.js"],function(e){
"use strict";
function s(e){
var s=.001;
"number"==typeof e.sample&&(s=e.sample);
var n=Math.random();
s>n&&o.saveSpeeds(e);
}
function n(e){
var s=e.sample||.001,n=Math.random();
s>n&&o.setBasicTime(e);
}
function i(){
o.send();
}
function a(e){
var e=e||[];
if(!e.length){
var s=e;
e=[],e.push(s);
}
for(var n=[],i=0;i<e.length;i++){
var s=e[i],a=s.id,o=s.key,t=s.value||1;
a&&o&&n.push(a+"_"+o+"_"+t);
}
0!=n.length&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";"));
}
var o=e("biz_common/utils/wxgspeedsdk.js");
return{
saveSpeeds:s,
setBasicTime:n,
send:i,
jsmonitor:a
};
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
var n=[],t={};
return t.setAvg=function(i,e,o){
return n.push(i+"_"+e+"_"+o),n.push(i+"_"+(e-1)+"_1"),t;
},t.setSum=function(i,e,o){
return n.push(i+"_"+e+"_"+o),t;
},t.send=function(){
if(0!=n.length){
var t=new Image;
t.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";")+"&t="+Math.random(),n=[];
}
},t;
});define("biz_common/utils/report.js",[],function(){
"use strict";
return function(n){
var e=new Image;
e.src=n;
};
});define("appmsg/open_url_with_webview.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),i=function(e,i){
i=i||{};
var o=i.sample||0;
o*=1e3;
var t=top.window.user_uin||0,n=0!==t&&Math.floor(t/100)%1e3<o;
return n?void r.invoke("openUrlWithExtraWebview",{
url:e,
openType:i.openType||1
},function(e){
e&&"openUrlWithExtraWebview:ok"===e.err_msg?i.resolve&&i.resolve():i.reject&&i.reject();
}):void(i.reject&&i.reject());
};
return i;
});define("biz_common/utils/http.js",[],function(){
"use strict";
function t(){
var t=document.getElementsByTagName("html");
if(t&&1==!!t.length){
t=t[0].innerHTML;
var e=t.replace(/[\x00-\xff]/g,""),n=t.replace(/[^\x00-\xff]/g,"");
return 1*n.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
return 0;
}
return{
htmlSize:t()
};
});define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});define("appmsg/topic_tpl.html.js",[],function(){
return'<span class="db topic_wrp">\n    <span class="topic_thumb" style="background-image:url({img_url});"></span>\n    <span class="topic_content">\n        <strong class="topic_title">{title}</strong>\n        <span class="topic_desc">{author}</span>\n        <span class="topic_info">\n            <span class="topic_info_extra"><span class="icon_topic"></span>Topic</span>\n            <span class="topic_info_primary">{msg_num} Related Article(s)</span>\n        </span>\n    </span>\n</span>\n';
});define("pages/weapp_tpl.html.js",[],function(){
return'<!-- <span class="weapp_card flex_context">\n    <span class="weapp_card_hd">\n        <span class="radius_avatar weapp_card_avatar">\n            <img src="<#=avatar#>">\n        </span>\n    </span>\n    <span class="weapp_card_bd flex_bd">\n        <strong class="weapp_card_nickname"><#=nickname#></strong>\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span> -->\n<span class="weapp_card app_context">\n    <span class="weapp_card_bd">\n        <span class="weapp_card_profile flex_context">\n            <span class="radius_avatar weapp_card_avatar">\n                <img src="<#=avatar#>">\n            </span>\n            <span class="weapp_card_nickname flex_bd"><#=nickname#></span>\n        </span>\n        <span class="weapp_card_info">\n            <span class="weapp_card_title"><#=title#></span>\n            <span class="weapp_card_thumb_wrp" style="background-image:url(<#=imageUrl#>);"></span>\n        </span>\n    </span>\n    <span class="weapp_card_ft">\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span>\n';
});define("pages/voice_tpl.html.js",[],function(){
return'<div>\n    <#if(show_not_support===true){#>\n    <p>当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放</p>\n    <#}#>\n    <div id="voice_main_<#=voiceid#>_<#=posIndex#>" class="share_audio_context flex_context" <#if(!musicSupport){#>style="display:none;"<#}#>>\n        <div id="voice_play_<#=voiceid#>_<#=posIndex#>" class="share_audio_switch"><em class="icon_share_audio_switch"></em></div>\n        <div id="voice_detail_<#=voiceid#>_<#=posIndex#>" class="share_audio_info flex_bd">\n            <strong class="share_audio_title"><#=title#></strong>\n            <#if(!!nickname){#>\n            <p class="share_audio_tips">来自<#=nickname#></p>\n            <#}#>            \n            <div class="share_audio_progress"><div id="voice_progress_<#=voiceid#>_<#=posIndex#>" style="width:0%" class="share_audio_progress_inner"></div></div>\n            <div class="share_audio_desc">\n                <em id="voice_playtime_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_current">00:00</em>\n                <em class="share_audio_length_total"><#=duration_str#></em>\n            </div>\n        </div>\n    </div>\n</div>\n';
});define("pages/voice_component.js",["biz_common/dom/event.js","biz_common/tmpl.js","pages/loadscript.js","pages/music_player.js","biz_common/dom/class.js","pages/report.js","biz_common/utils/monitor.js"],function(e,t,r,o){
"use strict";
function i(e){
this._o={
type:0,
comment_id:"",
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
debug:!1,
needVioceMutex:!0,
appPlay:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0,
playtimeDom:""
},this._init(e);
}
function a(e,t,r,o){
D.num++,t.musicSupport=D.musicSupport,t.show_not_support=!1,D.musicSupport||1!=D.num||(t.show_not_support=!0);
var i=document.createElement("div"),a="";
if(a=_.tmpl(e,t),i.innerHTML=a,o===!0)r.appendChild(i.children[0]);else{
var n=r.parentNode;
if(!n)return;
n.lastChild===r?n.appendChild(i.children[0]):n.insertBefore(i.children[0],r.nextSibling);
}
}
function n(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function p(){
g.on(window,"unload",s);
}
function s(){
function e(e,t){
for(var r=0,o=e.length;o>r;r++)e[r]=t;
return e;
}
for(var t in D.reportData)w.musicreport({
data:D.reportData[t]
}),D.reportData[t].hasended=e(D.reportData[t].hasended,0),D.reportData[t].detail_click=e(D.reportData[t].detail_click,0),
D.reportData[t].errorcode=e(D.reportData[t].errorcode,0),D.reportData[t].play_duration=e(D.reportData[t].play_duration,0);
}
function c(e){
k.setSum(D.reportId,18,1),k.send();
var t=+new Date,r="//open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=1034002693&app_key=cjjDaueOyPYRJFeTqG&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
r=r.replace("#mid#",e.mid).replace("#songid#",e.id),h({
url:r,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(r){
var o=+new Date-t;
if(!r||"undefined"==typeof r.ret){
var i=1;
return d({
type:"error",
time:o,
code:i
}),void("function"==typeof e.onError&&e.onError({
errcode:i
}));
}
var a;
a=0==r.ret?r.play_url?0:6:1001==r.ret?1:1002==r.ret?2:1003==r.ret?3:1004==r.ret?4:5,
d({
type:"success",
time:o,
code:a
}),e.onSuc({
status:a,
play_url:r.play_url
});
},
onerror:function(r){
var o=+new Date-t,i=4;
switch(1*r){
case 400:
i=2;
break;

case 500:
i=3;
break;

default:
i=4;
}
d({
type:"error",
time:o,
code:i
}),"function"==typeof e.onError&&e.onError({
errcode:i
});
}
});
}
function d(e){
var t=Math.max(e.time,0);
if(t=Math.min(t,6e4),e.time>=0&&e.time<200?k.setSum(D.reportId,24,1):e.time>=200&&e.time<500?k.setSum(D.reportId,25,1):e.time>=500&&e.time<1e3?k.setSum(D.reportId,26,1):e.time>=1e3&&e.time<2e3?k.setSum(D.reportId,27,1):e.time>=2e3&&e.time<1e4?k.setSum(D.reportId,28,1):e.time>=1e4&&k.setSum(D.reportId,29,1),
k.setAvg(D.reportId,23,t),"error"==e.type){
switch(1*e.code){
case 1:
k.setSum(D.reportId,9,1);
break;

case 2:
k.setSum(D.reportId,10,1);
break;

case 3:
k.setSum(D.reportId,11,1);
break;

case 4:
k.setSum(D.reportId,12,1);
}
k.setSum(D.reportId,19,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
k.setSum(D.reportId,8,1);
break;

case 0:
k.setSum(D.reportId,17,1);
break;

case 2:
k.setSum(D.reportId,13,1);
break;

case 3:
k.setSum(D.reportId,14,1);
break;

case 4:
k.setSum(D.reportId,15,1);
break;

case 5:
k.setSum(D.reportId,16,1);
break;

case 6:
k.setSum(D.reportId,47,1);
}
k.setSum(D.reportId,20,1);
}
k.send();
}
function u(e){
return new i(e);
}
function l(e){
if(isNaN(e))return"00:00";
e=Math.ceil(e);
var t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60),o=e-3600*t-60*r;
return 0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>r&&(r="0"+r),10>o&&(o="0"+o),t+r+":"+o;
}
function m(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function y(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
var g=e("biz_common/dom/event.js"),_=e("biz_common/tmpl.js"),h=e("pages/loadscript.js"),f=e("pages/music_player.js"),I=e("biz_common/dom/class.js"),w=e("pages/report.js"),k=e("biz_common/utils/monitor.js"),D={
reportId:"28306",
musicSupport:f.getSurportType(),
debug:location.href.indexOf("vconsole=1")>0?!0:!1,
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return n(),p(),i.prototype._init=function(e){
this._extend(e),this._g={
copyright:-1,
check_copyright:!1,
canDragBar:!1,
barDraging:!1
},this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),this._playEvent();
},i.prototype._initQQmusicLyric=function(){
var e=this._o;
e.webUrl=0==e.type||1==e.type?e.webUrl.replace("#songId#",e.songId||"").replace("#referFrom#","music.qq.com"):e.webUrl.replace("#songId#","").replace("#referFrom#","");
},i.prototype._initReportData=function(){
var e=this._o;
2==e.type||3==e.type||4==e.type?window.reportVoiceid.push(e.songId):(0==e.type||1==e.type)&&window.reportMid.push(e.songId),
"undefined"==typeof D.reportData[e.type]&&(D.reportData[e.type]=w.getMusicReportData(e),
D.posIndex[e.type]=0),this._g.posIndex=D.posIndex[e.type]++;
var t=D.reportData[e.type];
t.musicid.push(e.songId),t.commentid.push(e.comment_id),t.hasended.push(0),t.mtitle.push(e.title),
t.detail_click.push(0),t.duration.push(parseInt(1e3*e.duration)),t.errorcode.push(0),
t.play_duration.push(0);
},i.prototype._initPlayer=function(){
D.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this.player=new f.init(this._o));
},i.prototype._playEvent=function(){
var e=this,t=this._o,r=this._g;
if(t.detailUrl&&t.detailArea&&g.tap(t.detailArea,function(){
2==t.type||3==t.type||4==t.type?(D.reportData[t.type].detail_click[r.posIndex]=1,
window.location.href=t.detailUrl):(0==t.type||1==t.type)&&e._checkCopyright(function(){
D.reportData[t.type].detail_click[r.posIndex]=1,window.location.href=t.detailUrl;
});
}),D.musicSupport){
var o=0,i=4,a=5;
2==t.type?o=3:3==t.type?o=6:4==t.type?o=7:(0==t.type||1==t.type)&&(o=1),g.tap(t.playArea,function(){
return I.hasClass(t.playCssDom,t.playingCss)?(t.allowPause?e.player.pause():e.player.stop(),
w.report({
type:o,
comment_id:t.comment_id,
voiceid:t.songId,
action:a
})):1==o?e._checkCopyright(function(){
e.player.setSrc(r.play_url),e._playMusic(o,i);
}):e._playMusic(o,i),!1;
});
}
},i.prototype._checkCopyright=function(e){
var t=this,r=this._o,o=this._g;
return o.play_url&&this._musicCopyrightWarnning(!1)===!1?void("function"==typeof e&&e()):void(o.check_copyright||(o.check_copyright=!0,
c({
id:r.songId,
mid:r.mid,
onSuc:function(r){
o.check_copyright=!1,o.copyright=1*r.status,t._musicCopyrightWarnning(!0)===!1&&"function"==typeof e&&(o.play_url=r.play_url,
e({
play_url:r.play_url
}));
},
onError:function(){
o.check_copyright=!1;
}
})));
},i.prototype._musicCopyrightWarnning=function(e){
var t=this._g,r=!0,i="";
switch(1*t.copyright){
case 0:
r=!1;
break;

case 1:
r=!0,i="该歌曲版权已过期，无法播放。";
break;

case 2:
r=!0,i="抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务。";
break;

case 3:
r=!0,i="该歌曲版权已过期，无法播放。";
break;

case 4:
r=!0,i="抱歉，歌曲信息不正确。";
break;

case 5:
r=!0,i="系统错误，请稍后再试。";
break;

case 6:
r=!0,i="系统错误，请稍后再试。";
break;

default:
r=!0,i="系统错误，请稍后再试。";
}
return r===!0&&e===!0&&(i+="错误码："+t.copyright,setTimeout(function(){
o(i);
},0)),r;
},i.prototype._playMusic=function(e,t){
var r=this._o,o=this._g;
this.player.play(),D.reportData[r.type].hasended[o.posIndex]=1,w.report({
type:e,
comment_id:r.comment_id,
voiceid:r.songId,
action:t
});
},i.prototype._extend=function(e){
for(var t in e)this._o[t]=e[t];
},i.prototype._statusChangeCallBack=function(){
var e=this;
return function(t,r){
e._updatePlayerCss(this,r);
};
},i.prototype._timeupdateCallBack=function(){
var e=this,t=this._o,r=this._g;
return function(o,i){
e._updateProgress(i),0!=i&&(D.reportData[t.type].play_duration[r.posIndex]=parseInt(1e3*i));
};
},i.prototype._errorCallBack=function(){
var e=this,t=this._o,r=this._g;
return function(o,i){
D.reportData[t.type].errorcode[r.posIndex]=i,e._updatePlayerCss(this,3);
};
},i.prototype._updatePlayerCss=function(e,t){
!!D.debug&&console.log("status:"+t);
{
var r=this._o,o=r.playCssDom;
r.progress;
}
2==t?(I.removeClass(o,r.playingCss),r.playdotDom&&e.surportSeekRange()&&(r.playdotDom.style.display="",
this._g.canDragBar=!0)):3==t?(I.removeClass(o,r.playingCss),r.playdotDom&&(r.playdotDom.style.display="none",
this._g.canDragBar=!1),this._updateProgress(0)):(1==t||4==t)&&(I.addClass(o,r.playingCss),
r.playdotDom&&e.surportSeekRange()&&(r.playdotDom.style.display="",this._g.canDragBar=!0));
},i.prototype._updateProgress=function(e){
this._g.barDraging||this._updateProgressBar(e);
},i.prototype._updateProgressBar=function(e){
var t=this._o,r=this.player,o=r.getDuration();
if(o){
var i=this._countProgress(o,e);
t.progress&&(t.progress.style.width=i),t.playtimeDom&&(t.playtimeDom.innerHTML=l(e));
}
},i.prototype._countProgress=function(e,t){
return Math.min(t/e*100,100)+"%";
},{
init:u,
renderPlayer:a,
formatTime:l,
decodeStr:m,
encodeStr:y
};
});define("pages/qqmusic_tpl.html.js",[],function(){
return'<span id="qqmusic_main_<#=comment_id#>_<#=posIndex#>" class="db qqmusic_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="db qqmusic_wrp">\n        <span class="db qqmusic_bd">\n            <span id="qqmusic_play_<#=musicid#>_<#=posIndex#>" class="play_area">\n                <i class="icon_qqmusic_switch"></i>\n                <img src="<#=window.icon_qqmusic_default#>" alt="" class="pic_qqmusic_default">\n                <img src="<#=music_img#>" data-autourl="<#=audiourl#>" data-musicid="<#=musicid#>" class="qqmusic_thumb" alt="">\n            </span>\n            <!--\n            <%@if($show_comment.DATA$=1)%>\n            <span id="qqmusic_love_icon_<#=musicid#>_<#=posIndex#>" class="qqmusic_love">\n                <i class="icon_love"></i>\n                <span id="love_text_<#=comment_id#>_<#=posIndex#>" class="love_num">Like</span>\n            </span>\n            <%@endif%>\n            -->\n            <a id="qqmusic_home_<#=musicid#>_<#=posIndex#>" class="access_area">\n                <span class="qqmusic_songname"><#=music_name#></span>\n                <span class="qqmusic_singername"><#=singer#></span>\n                <span class="qqmusic_source"><img src="<#=window.icon_qqmusic_source#>" alt=""></span>\n            </a>\n        </span>\n    </span>       \n</span>\n';
});define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(i){
"use strict";
var e=top.window.user_uin,t=Math.floor(top.window.user_uin/100)%20;
e||(t=-1);
var o=function(){
return t>=0;
};
top.window.__webviewid||(top.window.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var i=top.window.mid,t=top.window.idx,o="";
o=i&&t?i+"_"+t:"";
var d=top.window.__webviewid,r=[e,o,d].join("_");
return r;
},r=function(e){
if(20>t)try{
var r=e.vid||"",w={};
w.__biz=top.window.biz||"",w.vid=r,w.clienttime=+new Date;
var n=top.window.mid,a=top.window.idx,p="";
n&&a?(w.type=1,p=n+"_"+a):(w.type=2,p=r),w.id=p,w.webviewid=d(),w.step=e.step||0,
w.orderid=e.orderid||0,w.ad_source=e.ad_source||0,w.traceid=e.traceid||0,w.ext1=e.ext1||"",
w.ext2=e.ext2||"",w.r=Math.random(),w.devicetype=top.window.devicetype,w.version=top.window.clientversion,
w.is_gray=o()?1:0;
var _=i("biz_wap/utils/ajax.js");
_({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:w
});
}catch(v){}
};
return{
report:r,
getWebviewid:d,
showAd:o
};
});define("a/testdata.js",[],function(){
"use strict";
var p=[{
hint_txt:"",
url:"http://p.weixin.qq.com/promotion/ad_detail_info?key=30eb0e9b5ecc495af46b69e0d34e048a7ecab19188a2cf401b8572c09f2de30768b0263bd398b432283e01f2bf4df374",
type:"0",
rl:"http://c.gdt.qq.com/gdt_mclick.fcg?viewid=lBVtRb2mL!XAQbJ6ufVt!LQ9kcp5Is0QJCPSy4ohVW7C!_AWskP5eMlSdzl4ksNQvkmB6Uu!xc2JpGYuGh2qJUdnqUjSUTfKhkgciU7GR9!PeAr5mQce5B4cgZiRmWTnGvq52igNyBzorOLKhFAEOGONcPnMSXyfO8eFPpweJqk&jtype=0&i=1",
apurl:"http://v.gdt.qq.com/gdt_stats.fcg?viewid=lBVtRb2mL!XAQbJ6ufVt!LQ9kcp5Is0QJCPSy4ohVW7C!_AWskP5eMlSdzl4ksNQvkmB6Uu!xc2JpGYuGh2qJUdnqUjSUTfKhkgciU7GR9!PeAr5mQce5B4cgZiRmWTnGvq52igNyBzorOLKhFAEOGONcPnMSXyfO8eFPpweJqk&i=1",
traceid:"qh4u7udwhuwlg01",
group_id:"",
url_scheme:"asdsd",
ticket:"29tcgyfz3xfqf",
watermark_type:2,
aid:"48928",
image_url:"http://pgdt.gtimg.cn/gdt/0/CAAAE95CdBUkWUKACq5F2vZ.png/0?ck=bd6949105af97639d0ab95551e9539fb",
pt:104,
is_cpm:1,
app_info:{
url_scheme:"asd",
app_rating:4.5,
app_name:"妈妈圈-怀孕育儿",
app_id:100497157,
apk_name:"cn.mama.activity",
icon_url:"http://pp.myapp.com/ma_icon/0/icon_1221109_20044009_1419991372/96",
apk_url:"http://dd.myapp.com/16891/8332CC95CF6C0656270CA82EB65950EC.apk?fsname=cn%2Emama%2Eactivity%5F5%2E0%2E8%5F35.apk&asr=2d3d",
app_md5:"8332CC95CF6C0656270CA82EB65950EC",
version_code:35,
appinfo_url:"http://a.app.qq.com/o/simple.jsp?pkgname=cn.mama.activity",
app_size:12897787,
down_count:3840230,
category:[],
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_1_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_2_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_3_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_4_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_5_1419991365/330",
signature_md5:"749C945CB88BEBF085CC7AADA57E5364",
desc:"妈妈圈(q.mama.cn)—辣妈们必备的备孕、怀孕、育儿、家庭生活，娱乐休闲应用，3000万妈妈的选择。从备孕、孕期、 宝宝成长、早教、亲子娱乐到购物、瘦身、美食、家庭闲谈、国内外旅游攻略，只要妈妈关心的内容， 只要妈妈感兴趣的人，无所不包，无所不有。妈妈的精彩生活，上妈妈圈一手掌握。\n妈妈圈——\n她是【孕育神器】\n孕前准备、怀孕、育儿，休闲娱乐，家庭生活经营，妈妈圈沉淀了十年的专业知识和真实经验，贴心呵护妈妈的每一天。\n她是【辣妈乐园】\n寻找志趣相投的姐妹，孕育圈、兴趣圈、娱乐圈、同城圈、购物圈，圈圈相扣，要寻找的内容，要认识的姐妹这里啥都有。\n她是【同城利器】\n本地资讯、周边旅游、同城活动，折扣情报，教育医疗，只要一个妈妈圈，本地吃、喝、住、行、玩、 乐、购尽在掌握之中。\n她是【购物宝典】\n非买不可-妈妈专属的购物天地，专业的选品团队为您精挑细选, 海外淘、新奇特、白菜价，免费试用，各种玩法和商品，买得开心，败得有理！",
new_feature:"1、Android 推送样式优化\n2、针对部分Bug&问题修复"
},
card_info:{
card_logo_url:"http://pgdt.gtimg.cn/gdt/0/CAAAE95CdBUkWUKACq5F2vZ.png/0?ck=bd6949105af97639d0ab95551e9539fb",
card_titile:"测试卡券",
card_brand_name:"腾讯公司",
card_id:"123",
card_ext:"abc"
},
ad_desc:"",
biz_appid:"",
pos_type:0
}];
return{
data:p
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","rt/appmsg/getappmsgext.rt.js"],function(e,t,n,r){
"use strict";
function a(e){
e&&(e.style.display="block");
}
function o(e){
e&&(e.style.display="none");
}
function i(){
p({
url:"/mp/getappmsgext?&f=json"+(window.send_time?"&send_time="+send_time:""),
data:{
__biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:encodeURIComponent(msg_title.htmlDecode()),
ct:ct,
devicetype:devicetype.htmlDecode(),
version:version.htmlDecode(),
is_need_reward:is_need_reward,
reward_uin_count:is_need_reward?3*w:0,
r:Math.random()
},
type:"post",
dataType:"json",
async:!0,
rtId:27613,
rtKey:50,
rtDesc:f,
success:function(e){
e&&(document.getElementById("js_reward_link")&&u.off(document.getElementById("js_reward_link"),"click",x),
s({
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp
}));
}
});
}
function d(e){
return function(t){
return"0"==window.wx_user_can_reward?void r("你已成为该公众号的黑名单用户，暂时无法赞赏。"):(t.preventDefault(),
void g.invoke("openUrlWithExtraWebview",{
url:e
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
}));
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,n=(Math.ceil((h-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+n+"&source=1#wechat_redirect";
var r="#wechat_redirect",s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+r,l=document.getElementById("js_reward_link");
l&&(g.on("activity:state_change",function(e){
if("onResume"==e.state_change||"onResume"==e.state){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=j)return;
localStorage.setItem("lastOnresumeTime",t),g.invoke("setNavigationBarColor",{
actionCode:"1"
}),i();
}
}),x=d(s),u.on(l,"click",x)),y=e.reward_head_imgs;
var w=c();
v.reward&&1==e.can_reward?(a(v.reward),u.on(window,"load",function(){
m&&(u.off(window,"scroll",m),u.on(window,"scroll",m));
})):o(v.reward);
var p=document.getElementById("js_reward_inner");
p&&w>0&&a(p);
var f=document.getElementById("js_reward_total");
f&&(f.innerText=e.reward_total,f.setAttribute("href",_));
}
function l(e,t){
var n=document.createElement("span");
n.className="reward_user_avatar";
var r=new Image;
return r.onload=function(){
window.logs&&window.logs.reward_heads_total++,r.onload=r.onerror=null;
},r.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
r.onload=r.onerror=null;
},r.src=t,n.appendChild(r),e.appendChild(n),n;
}
function c(){
if(y.length){
var e=document.getElementById("js_reward_list"),t=0,n=document.createDocumentFragment();
if(e){
for(var r=0,a=y.length;a>r&&(t++,l(n,y[r]),t!=3*w);++r);
t>w&&(e.className+=" tl"),e.innerHTML="",e.appendChild(n);
}
return t;
}
}
function m(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+h>v.reward.offsetTop&&(p({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),u.off(window,"scroll",m),m=null);
}
var w,_,u=e("biz_common/dom/event.js"),p=e("biz_wap/utils/ajax.js"),g=e("biz_wap/jsapi/core.js"),f=e("rt/appmsg/getappmsgext.rt.js"),h=window.innerHeight||document.documentElement.clientHeight,v={
reward:document.getElementById("js_reward_area")
},y=[],j=500;
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var x=function(){};
return{
handle:function(e,t){
w=t,s(e);
},
render:function(e){
w=e,c();
}
};
});define("appmsg/comment.js",["appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/comment_tpl.html.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e,t,n,o){
"use strict";
function m(e,t){
e&&(e.style.display=t?t:"block");
}
function i(e){
e&&(e.style.display="none");
}
function a(){
setTimeout(function(){
m(X.toast);
},750),setTimeout(function(){
i(X.toast);
},1500);
}
function c(e){
return e.replace(/^\s+|\s+$/g,"");
}
function s(e,t){
if(!(Math.random()<.999)){
var n=window.location.protocol,o=9;
"https:"==n&&(o=18),x.saveSpeeds({
uin:uin,
pid:o,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),x.send();
}
}
function l(e,t){
if("undefined"!=typeof e){
var n=new Image;
n.src=U.idkey?"//mp.weixin.qq.com/mp/jsmonitor?idkey="+(U.idkey+"_"+e+"_1")+"&t="+Math.random():"http://mp.weixin.qq.com/mp/jsreport?key="+e+"&content="+(t||"")+"&r="+Math.random();
}
}
function d(){
var e=window.innerHeight||document.documentElement.clientHeight,t=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight;
if(t+e+100>n&&M.off(window,"scroll",d),!!z&&console.log("onscroll,isLoading:"+P+";offset:"+F+";scrollHeight:"+n+";scrollTop:"+t+";innerHeight:"+e),
!(P||-1==F||F>0&&n-t-e>500)){
var o=+new Date;
P=!0,i(X.tips),m(X.loading);
var a="/mp/appmsg_comment?action=getcomment&scene="+U.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+L+"&offset="+F+"&limit="+Y+(window.send_time?"&send_time="+send_time:"");
try{
W++,W>1&&l(U.moreList,encodeURIComponent(a)),K.indexOf(a)>-1&&l(U.repeatList,encodeURIComponent(a)),
K.push(a);
}catch(c){}
!!z&&console.log("[Appmsg comment] start get comment data:"+a),N("[Appmsg comment] start get comment data, url:"+a),
O({
url:a,
type:"get",
success:function(e){
var t=+new Date,n=t-o,m={};
try{
m=window.eval.call(window,"("+e+")");
}catch(i){}
var c=m.base_resp&&m.base_resp.ret;
if(0==c){
r(m);
var d=+new Date-t;
s(n,d);
}else l(U.errList,"type:resperr;url:"+encodeURIComponent(a)+";ret="+c);
N("[Appmsg comment] get comment success, text: "+e);
},
error:function(){
l(U.errList,"type:ajaxerr;url:"+encodeURIComponent(a)),N("[Appmsg comment] get comment ajax error");
},
complete:function(){
P=!1,i(X.loading),M.off(window,"scroll",k);
}
});
}
}
function r(e){
var t,n=document.createDocumentFragment();
V++,V>1&&l(U.handleList,encodeURIComponent(JSON.stringify({
comment_id:L,
offset:F,
url:location.href
}))),"undefined"!=typeof e.only_fans_can_comment?window.can_fans_comment_only=e.only_fans_can_comment:"undefined"==typeof window.can_fans_comment_only&&(window.can_fans_comment_only=0),
1!=e.enabled?(D&&(D.style.display="none"),e.elected_comment=[],e.elected_comment_total_cnt=0):D&&(D.style.display="block"),
0==F?(J=e.logo_url,G=e.nick_name,t=e.elected_comment,t&&t.length?(g(t,n,"elected"),
X.list.appendChild(n),m(X.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn1")):m(document.getElementById("js_cmt_nofans1"),"block"),
e.elected_comment_total_cnt<=10&&(m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa")))):(i(X.main),window.adDatas=window.adDatas||{},
1==window.copyright_stat&&0==window.adDatas.num&&H.addClass(document.body,"rich_media_empty_extra"),
0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn2")):m(document.getElementById("js_cmt_nofans2"),"block")),
function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(t=e.elected_comment,t&&t.length&&(g(t,n,"elected"),X.list.appendChild(n))),
0==e.elected_comment_total_cnt?(F=-1,i(document.getElementById("js_cmt_loading")),
i(document.getElementById("js_cmt_statement")),i(document.getElementById("js_cmt_qa"))):F+Y>=e.elected_comment_total_cnt?(F=-1,
i(document.getElementById("js_cmt_loading")),m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa"))):F+=e.elected_comment.length;
}
function _(){
S.log("tag1");
var e=c(X.input.value);
if(S.log("tag2"),!H.hasClass(X.submit,"btn_disabled")){
if(S.log("tag3"),e.length<1)return y("Comment cannot be empty");
if(S.log("tag4"),e.length>600)return y("Up to 600 characters");
S.log("tag5"),H.addClass(X.submit,"btn_disabled"),S.log("tag6");
var t=document.getElementById("activity-name");
S.log("tag7");
var n="/mp/appmsg_comment?action=addcomment&scene="+U.scene+"&comment_id="+L+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
O({
url:n,
data:{
content:e,
title:t&&c(t.innerText),
head_img:J,
nickname:G
},
type:"POST",
success:function(t){
S.log("tag8"),A.hidePannel();
var o={},i=document.createDocumentFragment();
try{
o=window.eval.call(window,"("+t+")");
}catch(c){}
switch(+o.ret){
case 0:
a(),g([{
content:e,
nick_name:G,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:J,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:o.my_id
}],i,"mine"),X.mylist.insertBefore(i,X.mylist.firstChild),m(X.mylist.parentNode),
X.input.value="";
break;

case-6:
y("Too many comments. Try again later.");
break;

case-7:
y("You cannot write a comment as you didn't follow this Official Account");
break;

case-10:
y("Up to 600 characters");
break;

case-15:
y("Comment unavailable");
break;

default:
y("系统错误，请重试");
}
0!=o.ret&&l(U.addCommentErr,"type:resperr;url:"+encodeURIComponent(n)+";ret="+o.ret);
},
error:function(e){
S.log("shit;"+e.status+";"+e.statusText),l(U.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(n));
},
complete:function(){
""!=X.input.value&&H.removeClass(X.submit,"btn_disabled");
}
});
}
}
function p(){
if(0==Q){
var e="/mp/appmsg_comment?action=getmycomment&scene="+U.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+L,t=document.getElementById("js_mycmt_loading");
Q=1,m(t),O({
url:e,
type:"get",
success:function(t){
var n={};
try{
n=window.eval.call(window,"("+t+")");
}catch(o){}
var i=n.base_resp&&n.base_resp.ret;
if(0==i){
var a=n.my_comment,c=document.createDocumentFragment();
a&&a.length&&(g(a,c,"mine"),X.mylist.appendChild(c),m(X.mylist.parentNode)),Q=2;
}else Q=0,l(U.errComment,"type:resperr;url:"+encodeURIComponent(e)+";ret="+i);
},
error:function(){
Q=0,l(U.errComment,"type:ajaxerr;url:"+encodeURIComponent(e));
},
complete:function(){
i(t);
}
});
}
}
function u(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var o=t/1e3-e,m=n/1e3-e,i=new Date(n).getFullYear(),a=new Date(1e3*e);
return 3600>o?Math.ceil(o/60)+" minute(s) ago":86400>m?Math.floor(o/60/60)+" hour(s) ago":172800>m?"Yesterday":604800>m?Math.floor(m/24/60/60)+" day(s) ago":a.getFullYear()==i?a.getMonth()+1+"-"+a.getDate():a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();
}
function g(e,t,n){
var o,m="",i=document.createElement("div"),a="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
$={};
for(var c,s=0;c=e[s];++s){
c.time=u(c.create_time),c.status="",c.logo_url=c.logo_url||a,c.logo_url=-1!=c.logo_url.indexOf("wx.qlogo.cn")?c.logo_url.replace(/\/132$/,"/96"):c.logo_url,
c.content=c.content.htmlDecodeLite().htmlEncodeLite(),c.nick_name=c.nick_name.htmlDecodeLite().htmlEncodeLite(),
c.like_num_format=parseInt(c.like_num)>=1e4?(c.like_num/1e4).toFixed(1)+"万":c.like_num,
c.is_from_friend=c.is_from_friend||0,c.is_from_me="mine"==n?1:c.is_from_me||0,c.reply=c.reply||{
reply_list:[]
},c.is_mine=n?!1:!0,c.is_elected="elected"==n?1:c.is_elected,c.reply.reply_list.length>0&&(c.reply.reply_list[0].time=u(c.reply.reply_list[0].create_time),
c.reply.reply_list[0].content=(c.reply.reply_list[0].content||"").htmlEncodeLite(),
c.reply.reply_list[0].reply_like_status=c.reply.reply_list[0].reply_like_status||0,
c.reply.reply_list[0].reply_like_num=c.reply.reply_list[0].reply_like_num||0),m+=R.tmpl(B,c);
try{
var d=c.nick_name+c.content,r=!1,_=U.repeatContentID;
$[d]&&(r=!0,_=U.repeatContent),Z.indexOf(c.content_id)>-1&&(r=!0,_=U.repeatContentID),
Z.push(c.content_id),$[d]=!0,r&&l(_,encodeURIComponent(JSON.stringify({
comment_id:L,
content_id:c.content_id,
offset:F,
length:e.length,
url:location.href
})));
}catch(p){}
}
for(i.innerHTML=m,f(i);o=i.children.item(0);)t.appendChild(o);
}
function f(e){
S.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=A.encode(e.innerHTML);
});
}
function y(e){
return setTimeout(function(){
o(e);
});
}
function w(){
var e="1"===T.getParam("js_my_comment");
e&&h(!0);
}
function h(e){
i(X.article),m(X.mine),window.scrollTo(0,0),p(),e||S.later(function(){
X.input.focus();
});
}
function j(){
i(X.mine),m(X.article),window.scrollTo(0,document.documentElement.scrollHeight),
X.input.blur();
}
function b(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(H.hasClass(t,"js_comment_praise")&&(n=t),n){
var o=parseInt(n.dataset.status),m=0==o?1:0,i=n.dataset.contentId,a="/mp/appmsg_comment?action=likecomment&scene="+U.scene+"&like="+m+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+L+"&content_id="+i;
I(n),O({
url:a,
type:"GET"
});
}
}
function v(e){
var t=e.delegatedTarget,n=parseInt(t.dataset.status),o=n?0:1,m=t.dataset.contentId,i=t.dataset.replyId;
I(t),O({
url:"/mp/appmsg_comment?action=like_author_reply&scene="+U.scene,
type:"post",
data:{
comment_id:L,
content_id:m,
reply_id:i,
like:o
}
});
}
function I(e){
var t=H.hasClass(e,"praised"),n=e.querySelector(".praise_num"),o=n.innerHTML,m=o.indexOf("万"),i=parseInt(o)?parseInt(o):0;
t?(-1==m&&(n.innerHTML=i-1>0?i-1:""),H.removeClass(e,"praised"),e.dataset.status=0):(-1==m&&(n.innerHTML=i+1),
H.addClass(e,"praised"),e.dataset.status=1);
}
function E(e){
var t=e.delegatedTarget,n=t.getAttribute("data-my-id"),a="/mp/appmsg_comment?action=delete&scene="+U.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+L+"&my_id="+n;
confirm("确定删除吗？")&&O({
url:a,
success:function(e){
var a,c=t;
try{
e=JSON.parse(e);
}catch(s){
e={};
}
if(0==e.ret){
for(;c&&(c.nodeType!=c.ELEMENT_NODE||"li"!=c.tagName.toLowerCase());)c=c.parentNode;
c&&(c.parentNode.removeChild(c),a=document.getElementById("cid"+n),a&&a.parentNode.removeChild(a),
0==X.list.children.length&&(i(X.main),i(document.getElementById("js_cmt_statement")),
i(document.getElementById("js_cmt_qa")),m(document.getElementById("js_cmt_addbtn2"))),
0==X.mylist.children.length&&i(X.mylist.parentNode));
}else o("删除失败，请重试");
},
error:function(){
o("网络错误，请重试");
}
});
}
function k(){
try{
var e=X.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<window.innerHeight&&P&&t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_45_1&lc=1&log0",
M.off(window,"scroll",k));
}catch(n){}
}
function C(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var B=e("appmsg/cmt_tpl.html.js"),D=document.getElementById("js_cmt_area"),T=new C(window.location.href),x=e("biz_common/utils/wxgspeedsdk.js"),z=location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,L=0;
if("undefined"!=typeof window.comment_id?L=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(L=window.cgiData.comment_id),
!!z&&console.log("comment_id:"+L+";uin:"+uin+";key:"+key),0!=L&&uin&&key){
if(-1==navigator.userAgent.indexOf("MicroMessenger"))return void(D&&(D.style.display="none"));
var M=e("biz_common/dom/event.js"),H=e("biz_common/dom/class.js"),O=e("biz_wap/utils/ajax.js"),R=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),q=e("biz_wap/utils/fakehash.js"),N=e("appmsg/log.js"),U={
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
};
window.__commentReportData&&window.__commentReportData.idkey&&(!!z&&console.log("init reportData"),
U=window.__commentReportData),function(){
if(D){
var t=e("appmsg/comment_tpl.html.js");
D.innerHTML=R.tmpl(t,{});
}
}(),function(){
var t=e("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=R.tmpl(t,{}),document.body.appendChild(n);
}();
var A=e("appmsg/emotion/emotion.js"),S=e("appmsg/emotion/dom.js"),F=(new Image,0),Y=100,P=!1,J="",G="我",Q=0,X={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},Z=[],$={},K=(new Image,[]),W=0,V=0;
!function(){
d(),w(),A.init();
}(),q.on("comment",function(){
!!z&&console.log("FakeHash on comment"),h();
}),q.on(function(e){
"comment"==e&&j();
}),M.on(X.input,"input",function(){
var e=c(X.input.value);
e.length<1?H.addClass(X.submit,"btn_disabled"):H.removeClass(X.submit,"btn_disabled");
}),M.on(X.list,"tap",".js_comment_praise",b),M.on(X.mylist,"tap",".js_comment_praise",b),
M.on(X.list,"tap",".js_reply_praise",v),M.on(X.list,"tap",".js_del",E),M.on(X.mylist,"tap",".js_del",E),
M.on(X.list,"tap",".js_del",function(e){
e.preventDefault();
}),M.on(X.mylist,"tap",".js_del",function(e){
e.preventDefault();
}),M.on(X.submit,"tap",_),M.on(X.submit,"click",function(e){
e.preventDefault();
}),M.on(window,"scroll",d),M.on(window,"scroll",k),M.on(document.getElementById("js_cmt_write1"),"click",function(e){
e.preventDefault(),!!z&&console.log("push comment"),q.push("comment");
}),M.on(document.getElementById("js_cmt_write2"),"click",function(e){
e.preventDefault(),!!z&&console.log("push comment"),q.push("comment");
});
}
});