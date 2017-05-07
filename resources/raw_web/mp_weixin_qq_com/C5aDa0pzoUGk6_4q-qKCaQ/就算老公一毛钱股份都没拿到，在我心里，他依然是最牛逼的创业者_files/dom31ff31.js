define("a/appdialog_confirm.html.js",[],function(){
return'<div class="wx_profile_dialog_primary">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog weui-skin_android">\n        <div class="weui-dialog__hd"><strong class="weui-dialog__title">是否立即下载该应用</strong></div>\n        <div class="weui-dialog__bd">\n            <div class="weui-flex">\n                <div class="wx_profile_info_avatar_wrp">\n                    <span class="wx_profile_info_avatar">\n                        <img src="<#=app_img_url#>" alt="">\n                    </span>\n                </div>\n                <div class="weui-flex__item">\n                    <strong class="wx_profile_info_title"><#=app_name#></strong>\n                </div>\n            </div>\n        </div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:;" class="js_cancel weui-dialog__btn weui-dialog__btn_default">取消</a>\n            <a href="javascript:;" class="js_ok weui-dialog__btn weui-dialog__btn_primary">下载</a>\n        </div>\n    </div>\n</div>\n';
});;define('widget/wx_profile_dialog_primary.css', [], function(require, exports, module) {
	return ".radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.wx_profile_dialog_primary .weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.wx_profile_dialog_primary .weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.wx_profile_dialog_primary .weui-dialog__hd{position:relative;padding:20px 20px 10px;text-align:left}.wx_profile_dialog_primary .weui-dialog__hd:after{content:\" \";position:absolute;left:20px;right:20px;bottom:0;height:1px;border-bottom:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__title{font-weight:400;font-size:17px}.wx_profile_dialog_primary .weui-dialog__bd{padding:16px 20px;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.wx_profile_dialog_primary .weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.wx_profile_dialog_primary .weui-dialog__ft{position:relative;line-height:44px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.wx_profile_dialog_primary .weui-dialog__btn:active{background-color:#eee}.wx_profile_dialog_primary .weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.wx_profile_dialog_primary .weui-dialog__btn:first-child:after{display:none}.wx_profile_dialog_primary .weui-dialog__btn_default{color:#353535}.wx_profile_dialog_primary .weui-dialog__btn_primary{color:#1aad19}.wx_profile_dialog_primary .weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__title{font-size:21px}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd{text-align:left;padding:1.3em 1.6em 1.2em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd{color:#999;padding:0 1.6em 1.4em;font-size:17px;text-align:left}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:active{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:last-child{margin-right:-0.8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn_default{color:#808080}@media screen and (min-width:1024px){.wx_profile_dialog_primary .weui-dialog{width:35%}}.wx_profile_dialog_primary .weui-flex{display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-flex__item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wx_profile_dialog_primary .weui-flex{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wx_profile_dialog_primary .weui-flex__item{word-wrap:break-word;word-break:break-all}.wx_profile_info_avatar_wrp{padding-right:10px}.wx_profile_info_avatar{width:50px;height:50px;padding:0;display:inline-block;background-color:#fff;vertical-align:middle}.wx_profile_info_avatar img{display:block;width:100%;-webkit-border-radius:10px;border-radius:10px}.wx_profile_info_title{display:block;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:16px;font-weight:400;text-align:left}";
});define("appmsg/emotion/caret.js",[],function(e,t){
"use strict";
var t={};
return t.get=function(e){
var t=0;
if(document.selection){
e.focus();
var a=document.selection.createRange();
a.moveStart("character",-e.value.length),t=Sel.text.length;
}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);
return t;
},t.set=function(e,t){
if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){
var a=e.createTextRange();
a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select();
}
},t;
});define("a/appdialog_confirm.js",["widget/wx_profile_dialog_primary.css","biz_common/tmpl.js","biz_common/dom/event.js","a/appdialog_confirm.html.js"],function(o){
"use strict";
o("widget/wx_profile_dialog_primary.css");
var n=o("biz_common/tmpl.js"),e=o("biz_common/dom/event.js"),i=o("a/appdialog_confirm.html.js"),m=function(o){
var m=document.createElement("div");
m.innerHTML=n.tmpl(i,o),document.body.appendChild(m),e.on(m.getElementsByClassName("js_ok")[0],"click",function(){
o.onOk&&o.onOk(),document.body.removeChild(m);
}),e.on(m.getElementsByClassName("js_cancel")[0],"click",function(){
o.onCancel&&o.onCancel(),document.body.removeChild(m);
});
};
return m;
});define("biz_wap/jsapi/cardticket.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var c=e("biz_wap/jsapi/core.js"),r={
openCardDetail:function(e){
function r(){
c.invoke("openCardDetail",{
card_id:e.card_id,
card_ext:e.card_ext
},function(c){
"open_card_detail:fail"==c.err_msg||"open_card_detail:ok"==c.err_msg||"open_card_detail:cancel"==c.err_msg?e.success&&e.success(c):c.err_msg.indexOf("function_not_exist")>=0?e.function_not_exist&&e.function_not_exist():"system:access_denied"==c.err_msg?e.access_denied&&e.access_denied("openCardDetail"):e.error&&e.error(c);
});
}
function n(){
c.invoke("batchAddCard",{
card_list:[{
card_id:e.card_id,
card_ext:e.card_ext
}]
},function(c){
"batch_add_card:ok"==c.err_msg||"batch_add_card:fail"==c.err_msg||"batch_add_card:cancel"==c.err_msg?e.success&&e.success(c):c.err_msg.indexOf("function_not_exist")>=0?r():"system:access_denied"==c.err_msg?e.access_denied&&e.access_denied("batchAddCard"):e.error&&e.error(c);
});
}
n();
},
supportCardDetail:function(e){
c.invoke("openCardDetail",{
card_id:"err_id"
},function(c){
e.callback(c.err_msg.indexOf("function_not_exist")>=0?!1:!0);
});
},
openCard:function(e){
c.invoke("batchViewCard",{
cardList:[{
cardId:e.cardId,
code:e.code
}]
},function(c){
c.err_msg.indexOf("function_not_exist")>=0?e.function_not_exist&&e.function_not_exist():e.success&&e.success(c);
});
}
};
return r;
});define("biz_common/utils/emoji_panel_data.js",[],function(){
"use strict";
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,55,56,57,60,62,63,64,65,66,67,68,70,74,75,76,78,79,80,81,82,83,84,85,89,92,93,94,95,300,301,302,303,304,305,306,307,204,205,202,206,212,211,308,309,310,311,312,209,214];
});define("biz_common/utils/emoji_data.js",[],function(){
"use strict";
return[{
id:0,
cn:"[微笑]",
hk:"[微笑]",
us:"[Smile]",
code:"/::)",
web_code:"/微笑",
style:"icon_smiley_0"
},{
id:1,
cn:"[撇嘴]",
hk:"[撇嘴]",
us:"[Grimace]",
code:"/::~",
web_code:"/撇嘴",
style:"icon_smiley_1"
},{
id:2,
cn:"[色]",
hk:"[色]",
us:"[Drool]",
code:"/::B",
web_code:"/色",
style:"icon_smiley_2"
},{
id:3,
cn:"[发呆]",
hk:"[發呆]",
us:"[Scowl]",
code:"/::|",
web_code:"/发呆",
style:"icon_smiley_3"
},{
id:4,
cn:"[得意]",
hk:"[得意]",
us:"[CoolGuy]",
code:"/:8-)",
web_code:"/得意",
style:"icon_smiley_4"
},{
id:5,
cn:"[流泪]",
hk:"[流淚]",
us:"[Sob]",
code:"/::<",
web_code:"/流泪",
style:"icon_smiley_5"
},{
id:6,
cn:"[害羞]",
hk:"[害羞]",
us:"[Shy]",
code:"/::$",
web_code:"/害羞",
style:"icon_smiley_6"
},{
id:7,
cn:"[闭嘴]",
hk:"[閉嘴]",
us:"[Silent]",
code:"/::X",
web_code:"/闭嘴",
style:"icon_smiley_7"
},{
id:8,
cn:"[睡]",
hk:"[睡]",
us:"[Sleep]",
code:"/::Z",
web_code:"/睡",
style:"icon_smiley_8"
},{
id:9,
cn:"[大哭]",
hk:"[大哭]",
us:"[Cry]",
code:"/::'(",
web_code:"/大哭",
style:"icon_smiley_9"
},{
id:10,
cn:"[尴尬]",
hk:"[尷尬]",
us:"[Awkward]",
code:"/::-|",
web_code:"/尴尬",
style:"icon_smiley_10"
},{
id:11,
cn:"[发怒]",
hk:"[發怒]",
us:"[Angry]",
code:"/::@",
web_code:"/发怒",
style:"icon_smiley_11"
},{
id:12,
cn:"[调皮]",
hk:"[調皮]",
us:"[Tongue]",
code:"/::P",
web_code:"/调皮",
style:"icon_smiley_12"
},{
id:13,
cn:"[呲牙]",
hk:"[呲牙]",
us:"[Grin]",
code:"/::D",
web_code:"/呲牙",
style:"icon_smiley_13"
},{
id:14,
cn:"[惊讶]",
hk:"[驚訝]",
us:"[Surprise]",
code:"/::O",
web_code:"/惊讶",
style:"icon_smiley_14"
},{
id:15,
cn:"[难过]",
hk:"[難過]",
us:"[Frown]",
code:"/::(",
web_code:"/难过",
style:"icon_smiley_15"
},{
id:16,
cn:"[酷]",
hk:"[酷]",
us:"[Ruthless]",
code:"/::+",
web_code:"/酷",
style:"icon_smiley_16"
},{
id:17,
cn:"[冷汗]",
hk:"[冷汗]",
us:"[Blush]",
code:"/:--b",
web_code:"/冷汗",
style:"icon_smiley_17"
},{
id:18,
cn:"[抓狂]",
hk:"[抓狂]",
us:"[Scream]",
code:"/::Q",
web_code:"/抓狂",
style:"icon_smiley_18"
},{
id:19,
cn:"[吐]",
hk:"[吐]",
us:"[Puke]",
code:"/::T",
web_code:"/吐",
style:"icon_smiley_19"
},{
id:20,
cn:"[偷笑]",
hk:"[偷笑]",
us:"[Chuckle]",
code:"/:,@P",
web_code:"/偷笑",
style:"icon_smiley_20"
},{
id:21,
cn:"[愉快]",
hk:"[愉快]",
us:"[Joyful]",
code:"/:,@-D",
web_code:"/可爱",
style:"icon_smiley_21"
},{
id:22,
cn:"[白眼]",
hk:"[白眼]",
us:"[Slight]",
code:"/::d",
web_code:"/白眼",
style:"icon_smiley_22"
},{
id:23,
cn:"[傲慢]",
hk:"[傲慢]",
us:"[Smug]",
code:"/:,@o",
web_code:"/傲慢",
style:"icon_smiley_23"
},{
id:24,
cn:"[饥饿]",
hk:"[饑餓]",
us:"[Hungry]",
code:"/::g",
web_code:"/饥饿",
style:"icon_smiley_24"
},{
id:25,
cn:"[困]",
hk:"[累]",
us:"[Drowsy]",
code:"/:|-)",
web_code:"/困",
style:"icon_smiley_25"
},{
id:26,
cn:"[惊恐]",
hk:"[驚恐]",
us:"[Panic]",
code:"/::!",
web_code:"/惊恐",
style:"icon_smiley_26"
},{
id:27,
cn:"[流汗]",
hk:"[流汗]",
us:"[Sweat]",
code:"/::L",
web_code:"/流汗",
style:"icon_smiley_27"
},{
id:28,
cn:"[憨笑]",
hk:"[大笑]",
us:"[Laugh]",
code:"/::>",
web_code:"/憨笑",
style:"icon_smiley_28"
},{
id:29,
cn:"[悠闲]",
hk:"[悠閑]",
us:"[Commando]",
code:"/::,@",
web_code:"/大兵",
style:"icon_smiley_29"
},{
id:30,
cn:"[奋斗]",
hk:"[奮鬥]",
us:"[Determined]",
code:"/:,@f",
web_code:"/奋斗",
style:"icon_smiley_30"
},{
id:31,
cn:"[咒骂]",
hk:"[咒罵]",
us:"[Scold]",
code:"/::-S",
web_code:"/咒骂",
style:"icon_smiley_31"
},{
id:32,
cn:"[疑问]",
hk:"[疑問]",
us:"[Shocked]",
code:"/:?",
web_code:"/疑问",
style:"icon_smiley_32"
},{
id:33,
cn:"[嘘]",
hk:"[噓]",
us:"[Shhh]",
code:"/:,@x",
web_code:"/嘘",
style:"icon_smiley_33"
},{
id:34,
cn:"[晕]",
hk:"[暈]",
us:"[Dizzy]",
code:"/:,@@",
web_code:"/晕",
style:"icon_smiley_34"
},{
id:35,
cn:"[疯了]",
hk:"[瘋了]",
us:"[Tormented]",
code:"/::8",
web_code:"/折磨",
style:"icon_smiley_35"
},{
id:36,
cn:"[衰]",
hk:"[衰]",
us:"[Toasted]",
code:"/:,@!",
web_code:"/衰",
style:"icon_smiley_36"
},{
id:37,
cn:"[骷髅]",
hk:"[骷髏頭]",
us:"[Skull]",
code:"/:!!!",
web_code:"/骷髅",
style:"icon_smiley_37"
},{
id:38,
cn:"[敲打]",
hk:"[敲打]",
us:"[Hammer]",
code:"/:xx",
web_code:"/敲打",
style:"icon_smiley_38"
},{
id:39,
cn:"[再见]",
hk:"[再見]",
us:"[Wave]",
code:"/:bye",
web_code:"/再见",
style:"icon_smiley_39"
},{
id:40,
cn:"[擦汗]",
hk:"[擦汗]",
us:"[Speechless]",
code:"/:wipe",
web_code:"/擦汗",
style:"icon_smiley_40"
},{
id:41,
cn:"[抠鼻]",
hk:"[摳鼻]",
us:"[NosePick]",
code:"/:dig",
web_code:"/抠鼻",
style:"icon_smiley_41"
},{
id:42,
cn:"[鼓掌]",
hk:"[鼓掌]",
us:"[Clap]",
code:"/:handclap",
web_code:"/鼓掌",
style:"icon_smiley_42"
},{
id:43,
cn:"[糗大了]",
hk:"[羞辱]",
us:"[Shame]",
code:"/:&-(",
web_code:"/糗大了",
style:"icon_smiley_43"
},{
id:44,
cn:"[坏笑]",
hk:"[壞笑]",
us:"[Trick]",
code:"/:B-)",
web_code:"/坏笑",
style:"icon_smiley_44"
},{
id:45,
cn:"[左哼哼]",
hk:"[左哼哼]",
us:"[Bah！L]",
code:"/:<@",
web_code:"/左哼哼",
style:"icon_smiley_45"
},{
id:46,
cn:"[右哼哼]",
hk:"[右哼哼]",
us:"[Bah！R]",
code:"/:@>",
web_code:"/右哼哼",
style:"icon_smiley_46"
},{
id:47,
cn:"[哈欠]",
hk:"[哈欠]",
us:"[Yawn]",
code:"/::-O",
web_code:"/哈欠",
style:"icon_smiley_47"
},{
id:48,
cn:"[鄙视]",
hk:"[鄙視]",
us:"[Pooh-pooh]",
code:"/:>-|",
web_code:"/鄙视",
style:"icon_smiley_48"
},{
id:49,
cn:"[委屈]",
hk:"[委屈]",
us:"[Shrunken]",
code:"/:P-(",
web_code:"/委屈",
style:"icon_smiley_49"
},{
id:50,
cn:"[快哭了]",
hk:"[快哭了]",
us:"[TearingUp]",
code:"/::'|",
web_code:"/快哭了",
style:"icon_smiley_50"
},{
id:51,
cn:"[阴险]",
hk:"[陰險]",
us:"[Sly]",
code:"/:X-)",
web_code:"/阴险",
style:"icon_smiley_51"
},{
id:52,
cn:"[亲亲]",
hk:"[親親]",
us:"[Kiss]",
code:"/::*",
web_code:"/亲亲",
style:"icon_smiley_52"
},{
id:53,
cn:"[吓]",
hk:"[嚇]",
us:"[Wrath]",
code:"/:@x",
web_code:"/吓",
style:"icon_smiley_53"
},{
id:54,
cn:"[可怜]",
hk:"[可憐]",
us:"[Whimper]",
code:"/:8*",
web_code:"/可怜",
style:"icon_smiley_54"
},{
id:55,
cn:"[菜刀]",
hk:"[菜刀]",
us:"[Cleaver]",
code:"/:pd",
web_code:"/菜刀",
style:"icon_smiley_55"
},{
id:56,
cn:"[西瓜]",
hk:"[西瓜]",
us:"[Watermelon]",
code:"/:<W>",
web_code:"/西瓜",
style:"icon_smiley_56"
},{
id:57,
cn:"[啤酒]",
hk:"[啤酒]",
us:"[Beer]",
code:"/:beer",
web_code:"/啤酒",
style:"icon_smiley_57"
},{
id:58,
cn:"[篮球]",
hk:"[籃球]",
us:"[Basketball]",
code:"/:basketb",
web_code:"/篮球",
style:"icon_smiley_58"
},{
id:59,
cn:"[乒乓]",
hk:"[乒乓]",
us:"[PingPong]",
code:"/:oo",
web_code:"/乒乓",
style:"icon_smiley_59"
},{
id:60,
cn:"[咖啡]",
hk:"[咖啡]",
us:"[Coffee]",
code:"/:coffee",
web_code:"/咖啡",
style:"icon_smiley_60"
},{
id:61,
cn:"[饭]",
hk:"[飯]",
us:"[Rice]",
code:"/:eat",
web_code:"/饭",
style:"icon_smiley_61"
},{
id:62,
cn:"[猪头]",
hk:"[豬頭]",
us:"[Pig]",
code:"/:pig",
web_code:"/猪头",
style:"icon_smiley_62"
},{
id:63,
cn:"[玫瑰]",
hk:"[玫瑰]",
us:"[Rose]",
code:"/:rose",
web_code:"/玫瑰",
style:"icon_smiley_63"
},{
id:64,
cn:"[凋谢]",
hk:"[枯萎]",
us:"[Wilt]",
code:"/:fade",
web_code:"/凋谢",
style:"icon_smiley_64"
},{
id:65,
cn:"[嘴唇]",
hk:"[嘴唇]",
us:"[Lips]",
code:"/:showlove",
web_code:"/示爱",
style:"icon_smiley_65"
},{
id:66,
cn:"[爱心]",
hk:"[愛心]",
us:"[Heart]",
code:"/:heart",
web_code:"/爱心",
style:"icon_smiley_66"
},{
id:67,
cn:"[心碎]",
hk:"[心碎]",
us:"[BrokenHeart]",
code:"/:break",
web_code:"/心碎",
style:"icon_smiley_67"
},{
id:68,
cn:"[蛋糕]",
hk:"[蛋糕]",
us:"[Cake]",
code:"/:cake",
web_code:"/蛋糕",
style:"icon_smiley_68"
},{
id:69,
cn:"[闪电]",
hk:"[閃電]",
us:"[Lightning]",
code:"/:li",
web_code:"/闪电",
style:"icon_smiley_69"
},{
id:70,
cn:"[炸弹]",
hk:"[炸彈]",
us:"[Bomb]",
code:"/:bome",
web_code:"/炸弹",
style:"icon_smiley_70"
},{
id:71,
cn:"[刀]",
hk:"[刀]",
us:"[Dagger]",
code:"/:kn",
web_code:"/刀",
style:"icon_smiley_71"
},{
id:72,
cn:"[足球]",
hk:"[足球]",
us:"[Soccer]",
code:"/:footb",
web_code:"/足球",
style:"icon_smiley_72"
},{
id:73,
cn:"[瓢虫]",
hk:"[甲蟲]",
us:"[Ladybug]",
code:"/:ladybug",
web_code:"/瓢虫",
style:"icon_smiley_73"
},{
id:74,
cn:"[便便]",
hk:"[便便]",
us:"[Poop]",
code:"/:shit",
web_code:"/便便",
style:"icon_smiley_74"
},{
id:75,
cn:"[月亮]",
hk:"[月亮]",
us:"[Moon]",
code:"/:moon",
web_code:"/月亮",
style:"icon_smiley_75"
},{
id:76,
cn:"[太阳]",
hk:"[太陽]",
us:"[Sun]",
code:"/:sun",
web_code:"/太阳",
style:"icon_smiley_76"
},{
id:77,
cn:"[礼物]",
hk:"[禮物]",
us:"[Gift]",
code:"/:gift",
web_code:"/礼物",
style:"icon_smiley_77"
},{
id:78,
cn:"[拥抱]",
hk:"[擁抱]",
us:"[Hug]",
code:"/:hug",
web_code:"/拥抱",
style:"icon_smiley_78"
},{
id:79,
cn:"[强]",
hk:"[強]",
us:"[ThumbsUp]",
code:"/:strong",
web_code:"/强",
style:"icon_smiley_79"
},{
id:80,
cn:"[弱]",
hk:"[弱]",
us:"[ThumbsDown]",
code:"/:weak",
web_code:"/弱",
style:"icon_smiley_80"
},{
id:81,
cn:"[握手]",
hk:"[握手]",
us:"[Shake]",
code:"/:share",
web_code:"/握手",
style:"icon_smiley_81"
},{
id:82,
cn:"[胜利]",
hk:"[勝利]",
us:"[Peace]",
code:"/:v",
web_code:"/胜利",
style:"icon_smiley_82"
},{
id:83,
cn:"[抱拳]",
hk:"[抱拳]",
us:"[Fight]",
code:"/:@)",
web_code:"/抱拳",
style:"icon_smiley_83"
},{
id:84,
cn:"[勾引]",
hk:"[勾引]",
us:"[Beckon]",
code:"/:jj",
web_code:"/勾引",
style:"icon_smiley_84"
},{
id:85,
cn:"[拳头]",
hk:"[拳頭]",
us:"[Fist]",
code:"/:@@",
web_code:"/拳头",
style:"icon_smiley_85"
},{
id:86,
cn:"[差劲]",
hk:"[差勁]",
us:"[Pinky]",
code:"/:bad",
web_code:"/差劲",
style:"icon_smiley_86"
},{
id:87,
cn:"[爱你]",
hk:"[愛你]",
us:"[RockOn]",
code:"/:lvu",
web_code:"/爱你",
style:"icon_smiley_87"
},{
id:88,
cn:"[NO]",
hk:"[NO]",
us:"[Nuh-uh]",
code:"/:no",
web_code:"/NO",
style:"icon_smiley_88"
},{
id:89,
cn:"[OK]",
hk:"[OK]",
us:"[OK]",
code:"/:ok",
web_code:"/OK",
style:"icon_smiley_89"
},{
id:90,
cn:"[爱情]",
hk:"[愛情]",
us:"[InLove]",
code:"/:love",
web_code:"/爱情",
style:"icon_smiley_90"
},{
id:91,
cn:"[飞吻]",
hk:"[飛吻]",
us:"[Blowkiss]",
code:"/:<L>",
web_code:"/飞吻",
style:"icon_smiley_91"
},{
id:92,
cn:"[跳跳]",
hk:"[跳跳]",
us:"[Waddle]",
code:"/:jump",
web_code:"/跳跳",
style:"icon_smiley_92"
},{
id:93,
cn:"[发抖]",
hk:"[發抖]",
us:"[Tremble]",
code:"/:shake",
web_code:"/发抖",
style:"icon_smiley_93"
},{
id:94,
cn:"[怄火]",
hk:"[噴火]",
us:"[Aaagh!]",
code:"/:<O>",
web_code:"/怄火",
style:"icon_smiley_94"
},{
id:95,
cn:"[转圈]",
hk:"[轉圈]",
us:"[Twirl]",
code:"/:circle",
web_code:"/转圈",
style:"icon_smiley_95"
},{
id:96,
cn:"[磕头]",
hk:"[磕頭]",
us:"[Kotow]",
code:"/:kotow",
web_code:"/磕头",
style:"icon_smiley_96"
},{
id:97,
cn:"[回头]",
hk:"[回頭]",
us:"[Dramatic]",
code:"/:turn",
web_code:"/回头",
style:"icon_smiley_97"
},{
id:98,
cn:"[跳绳]",
hk:"[跳繩]",
us:"[JumpRope]",
code:"/:skip",
web_code:"/跳绳",
style:"icon_smiley_98"
},{
id:99,
cn:"[投降]",
hk:"[投降]",
us:"[Surrender]",
code:"/:oY",
web_code:"/挥手",
style:"icon_smiley_99"
},{
id:100,
cn:"[激动]",
hk:"[激動]",
us:"[Hooray]",
code:"/:#-0",
web_code:"/激动",
style:"icon_smiley_100"
},{
id:101,
cn:"[乱舞]",
hk:"[亂舞]",
us:"[Meditate]",
code:"/:hiphot",
web_code:"/街舞",
style:"icon_smiley_101"
},{
id:102,
cn:"[献吻]",
hk:"[獻吻]",
us:"[Smooch]",
code:"/:kiss",
web_code:"/献吻",
style:"icon_smiley_102"
},{
id:103,
cn:"[左太极]",
hk:"[左太極]",
us:"[TaiChi L]",
code:"/:<&",
web_code:"/左太极",
style:"icon_smiley_103"
},{
id:104,
cn:"[右太极]",
hk:"[右太極]",
us:"[TaiChi R]",
code:"/:&>",
web_code:"/右太极",
style:"icon_smiley_104"
},{
id:204,
cn:"[嘿哈]",
hk:"[吼嘿]",
us:"[Hey]",
code:"",
web_code:"",
style:"icon_emoji_wx_4"
},{
id:205,
cn:"[捂脸]",
hk:"[掩面]",
us:"[Facepalm]",
code:"",
web_code:"",
style:"icon_emoji_wx_5"
},{
id:202,
cn:"[奸笑]",
hk:"[奸笑]",
us:"[Smirk]",
code:"",
web_code:"",
style:"icon_emoji_wx_2"
},{
id:206,
cn:"[机智]",
hk:"[機智]",
us:"[Smart]",
code:"",
web_code:"",
style:"icon_emoji_wx_6"
},{
id:212,
cn:"[皱眉]",
hk:"[皺眉]",
us:"[Moue]",
code:"",
web_code:"",
style:"icon_emoji_wx_12"
},{
id:211,
cn:"[耶]",
hk:"[歐耶]",
us:"[Yeah!]",
code:"",
web_code:"",
style:"icon_emoji_wx_11"
},{
id:207,
cn:"[茶]",
hk:"[茶]",
us:"[Tea]",
code:"",
web_code:"",
style:"icon_emoji_wx_7"
},{
id:209,
cn:"[红包]",
hk:"[Packet]",
us:"[Packet]",
code:"",
web_code:"",
style:"icon_emoji_wx_9"
},{
id:210,
cn:"[蜡烛]",
hk:"[蠟燭]",
us:"[Candle]",
code:"",
web_code:"",
style:"icon_emoji_wx_10"
},{
id:215,
cn:"[福]",
hk:"[福]",
us:"[Blessing]",
code:"",
web_code:"",
style:"icon_emoji_wx_15"
},{
id:214,
cn:"[鸡]",
hk:"[小雞]",
us:"[Chick]",
code:"",
web_code:"",
style:"icon_emoji_wx_14"
},{
id:300,
cn:"[笑脸]",
emoji:"😄",
hk:"",
us:"",
code:"\\ue415",
web_code:"",
style:"icon_emoji_ios_0"
},{
id:301,
cn:"[生病]",
emoji:"😷",
hk:"",
us:"",
code:"\\ue40c",
web_code:"",
style:"icon_emoji_ios_1"
},{
id:302,
cn:"[破涕为笑]",
emoji:"😂",
hk:"",
us:"",
code:"\\ue412",
web_code:"",
style:"icon_emoji_ios_2"
},{
id:303,
cn:"[吐舌]",
emoji:"😝",
hk:"",
us:"",
code:"\\ue409",
web_code:"",
style:"icon_emoji_ios_3"
},{
id:304,
cn:"[脸红]",
emoji:"😳",
hk:"",
us:"",
code:"\\ue40d",
web_code:"",
style:"icon_emoji_ios_4"
},{
id:305,
cn:"[恐惧]",
emoji:"😱",
hk:"",
us:"",
code:"\\ue107",
web_code:"",
style:"icon_emoji_ios_5"
},{
id:306,
cn:"[失望]",
emoji:"😔",
hk:"",
us:"",
code:"\\ue403",
web_code:"",
style:"icon_emoji_ios_6"
},{
id:307,
cn:"[无语]",
emoji:"😒",
hk:"",
us:"",
code:"\\ue40e",
web_code:"",
style:"icon_emoji_ios_7"
},{
id:308,
cn:"[鬼魂]",
emoji:"👻",
hk:"",
us:"",
code:"\\ue11b",
web_code:"",
style:"icon_emoji_ios_8"
},{
id:309,
cn:"[合十]",
emoji:"🙏",
hk:"",
us:"",
code:"\\ue41d",
web_code:"",
style:"icon_emoji_ios_9"
},{
id:310,
cn:"[强壮]",
emoji:"💪",
hk:"",
us:"",
code:"\\ue14c",
web_code:"",
style:"icon_emoji_ios_10"
},{
id:311,
cn:"[庆祝]",
emoji:"🎉",
hk:"",
us:"",
code:"\\ue312",
web_code:"",
style:"icon_emoji_ios_11"
},{
id:312,
cn:"[礼物]",
hk:"",
us:"",
code:"\\ue112",
web_code:"",
style:"icon_emoji_ios_12"
},{
id:"17_1",
cn:"[囧]",
hk:"[囧]",
us:"[Blush]",
code:"",
web_code:"",
style:"icon_smiley_17"
},{
id:"39_1",
cn:"[再见]",
hk:"[再見]",
us:"[Bye]",
code:"",
web_code:"",
style:"icon_smiley_39"
},{
id:"83_1",
cn:"[抱拳]",
hk:"[抱拳]",
us:"[Salute]",
code:"",
web_code:"",
style:"icon_smiley_83"
},{
id:"212_1",
cn:"[皱眉]",
hk:"[皺眉]",
us:"[Concerned]",
code:"",
web_code:"",
style:"icon_emoji_wx_12"
}];
});define("appmsg/emotion/textarea.js",["appmsg/emotion/dom.js","appmsg/emotion/caret.js","biz_common/dom/class.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(e,t){
"use strict";
function n(){
var e="translate3d(0, 0, 0)";
u.css({
webkitTransform:e,
transform:e
});
}
function a(){
var e=8;
u.on("keydown",function(t){
t.keyCode===e&&i(!0)&&t.preventDefault();
});
}
function i(e){
function t(){
var e=a-1;
0>e&&(e=0);
var t=i.slice(0,e),o=i.slice(a),s=+new Date;
n.value=t+o,f.set(n,e),r(+new Date-s);
}
var n=u.el[0],a=f.get(n),i=n.value,s=4,c=a-s;
0>c&&(c=0,s=a-c);
var v=i.slice(c,a),d=v.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
if(d){
var p=d[0],_=s-p.length,j=p.replace("[","").replace("]","");
if(o(j)){
var b=v.replace(p,""),g=i.slice(0,c)+b+i.slice(a),h=+new Date;
n.value=g,f.set(n,c+_),r(+new Date-h);
}else{
if(e)return!1;
t();
}
}else{
if(e)return!1;
t();
}
return e?(n.focus(),m.later(function(){
n.focus();
})):(n.blur(),m.later(function(){
n.blur();
})),l(n.value),!0;
}
function o(e){
for(var t=0,n=j.length;n>t;t++)if(j[t]==e)return!0;
return!1;
}
function s(e){
var t=u.el[0],n=f.get(t),a=t.value,a=a.slice(0,n)+e+a.slice(n);
t.value=a,f.set(t,n+e.length+1),t.blur(),m.later(function(){
t.blur();
}),l(a);
}
function r(){}
function l(e){
var t=c.el[0];
e.length<1?v.addClass(t,"btn_disabled"):v.removeClass(t,"btn_disabled");
}
for(var u,c,t={},m=e("appmsg/emotion/dom.js"),f=e("appmsg/emotion/caret.js"),v=e("biz_common/dom/class.js"),d=e("biz_common/utils/emoji_data.js"),p=e("biz_common/utils/emoji_panel_data.js"),_={},j=[],b=0;b<d.length;b++){
var g=d[b];
_[g.id]=g;
}
for(var b=0;b<p.length;b++){
var h=p[b],g=_[h];
j.push(g.cn);
}
return t.init=function(){
u=m("#js_cmt_input"),c=m("#js_cmt_submit"),n(),a();
},t.inputEmotion=function(e,t){
-1===e?i(t):s(j[e-1]);
},t;
});define("appmsg/emotion/nav.js",["appmsg/emotion/common.js","appmsg/emotion/dom.js"],function(n,o){
"use strict";
var t=n("appmsg/emotion/common.js"),a=n("appmsg/emotion/dom.js"),m=a.each,o={};
return o.activeNav=function(n){
t.currentPage=n;
var o=t.navs;
m(o,function(t,a){
a===n?o[a].attr("class","emotion_nav current"):o[a].attr("class","emotion_nav");
});
},o;
});define("appmsg/emotion/common.js",[],function(){
"use strict";
return{
EMOTIONS_COUNT:99,
EMOTION_LI_SIZE:36,
EMOTION_SIZE:22
};
});define("appmsg/emotion/slide.js",["appmsg/emotion/common.js","appmsg/emotion/dom.js","appmsg/emotion/nav.js"],function(n,t){
"use strict";
function o(){
function n(n){
n.preventDefault(),n.stopPropagation(),l||(g=!0,i=a(n),m.isMoved=!1,u=+new Date);
}
function t(n){
n.preventDefault(),n.stopPropagation(),!l&&g&&(r=a(n),h=r-i,e(),Math.abs(h)>6&&(m.isMoved=!0));
}
function o(){
l||(g=!1,s());
}
function a(n){
return n.touches&&n.touches.length>0?n.touches[0].clientX:n.clientX;
}
var i,r,u;
c.on("touchstart",n),c.on("mousedown",n),c.on("touchmove",t),c.on("mousemove",t),
c.on("touchend",o),c.on("mouseup",o);
}
function e(){
var n=m.WIDTH,t=-d*n+h,o=n/4;
t>o?t=o:u-o>t&&(t=u-o);
var e="translate3d("+t+"px, 0, 0)";
c.css({
webkitTransform:e,
transform:e
});
}
function s(){
var n=m.WIDTH,t=55,o=parseInt(h/n),e=h%n;
d-=o,Math.abs(e)>t&&(d-=Math.abs(e)/e*1),d>m.pageCount-1?d=m.pageCount-1:0>d&&(d=0),
h=0,a(d);
}
function a(n){
l=!0,f=-n*m.WIDTH,i(),e(),setTimeout(function(){
l=!1,r();
},T),v.activeNav(n);
}
function i(){
var n="all 0.3s ease";
c.css({
transition:n,
webkitTransition:n
});
}
function r(){
var n=c.el[0].style;
n.transition="",n.webkitTransition="";
}
var u,m=n("appmsg/emotion/common.js"),p=n("appmsg/emotion/dom.js"),t={},c=p("#js_slide_wrapper"),f=0,v=n("appmsg/emotion/nav.js"),l=!1,d=0,g=!1,h=0;
t.init=function(){
u=-m.wrapperWidth+m.WIDTH,o();
var n="translate3d(0, 0, 0)";
c.css({
webkitTransform:n,
transform:n
});
};
var T=300;
return t;
});define("pages/report.js",["biz_wap/utils/ajax.js","pages/version4video.js"],function(e){
"use strict";
function i(e){
var i=["/mp/pagereport?type=","undefined"==typeof e.type?1:e.type,"&comment_id=",e.comment_id||"","&voiceid=",e.voiceid||"","&action=",e.action,"&__biz=",top.window.biz||"","&mid=",top.window.mid||"","&idx=",top.window.idx||"","&uin=",top.window.uin||"","&key=",top.window.key||"","&pass_ticket=",top.window.pass_ticket||"","&t=",Math.random(),"#wechat_redirect"].join(""),t=new Image;
t.src=i;
}
function t(e){
_({
type:"POST",
url:"/mp/videoreport?#wechat_redirect",
timeout:2e4,
async:!1,
data:e.data
});
}
function o(e){
var i=JSON.parse(JSON.stringify(e.data));
i.musicid=i.musicid.join(";"),i.hasended=i.hasended.join(";"),i.commentid=i.commentid.join(";"),
i.mtitle=i.mtitle.join(";#"),i.detail_click=i.detail_click.join(";"),i.duration=i.duration.join(";"),
i.errorcode=i.errorcode.join(";"),i.play_duration=i.play_duration.join(";"),_({
type:"POST",
url:"/mp/musicreport?#wechat_redirect",
timeout:2e4,
async:!1,
data:i
});
}
function n(e){
document.domain="qq.com";
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(top.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=1009&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",a(),"&val=","undefined"!=typeof e.val?e.val:"","&val1=","undefined"!=typeof e.val1?e.val1:"","&vurl=",encodeURIComponent(e.vurl),"&t=",Math.random(),"&url=",t,"&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
function d(e){
if(3==e.step||6==e.step||1999==e.step){
document.domain="qq.com";
var i=window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",t=encodeURIComponent(top.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=",e.step,"&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=",a(),"&loadwait=","undefined"!=typeof e.loadwait?e.loadwait:"","&val=","undefined"!=typeof e.val?e.val:"","&t=",Math.random(),"&url=",t,"undefined"!=typeof e.vt&&""!==e.vt&&6==e.step?"&vt="+e.vt:"","&wx_openid=",i].join(""),n=new Image;
n.src=o.substr(0,1024);
}
}
function a(){
var e=l.device;
return e.ipad?60101:e.is_android_phone?60301:e.iphone?60401:e.is_android_tablet?60501:"";
}
function r(){
var e=l.device;
return e.ipad?"v4010":e.is_android_phone&&l.isUseProxy()?"v5060":e.is_android_phone?"v5060":e.iphone&&l.isUseProxy()?"v3060":e.iphone?"v3060":e.is_android_tablet?"v6010":"";
}
function p(e){
var i={
mid:window.mid||"",
__biz:window.biz||"",
idx:window.idx||"",
musicid:[],
hasended:[],
commentid:[],
scene_type:e.type||0,
mtitle:[],
detail_click:[],
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
duration:[],
play_duration:[],
errorcode:[]
};
return i;
}
function c(){
var e={
videoerror:0,
like_kv_vid:"",
like_click_vid:"",
like_kv_alginfo:"",
like_click_alginfo:"",
tad:"",
page:0,
like_click_type:0,
iplat:2,
ptype:1,
rtype:"",
getvinfo_ret:-1,
getvinfo_time:0,
v_err_code:0,
loadwait:0,
hasended:0,
last_ms:0,
duration_ms:0,
app_btn_kv:0,
app_btn_click:0,
app_btn_type:0,
mid:"",
__biz:"",
idx:"",
detail_click:0,
vtitle:"",
vid:"",
commentid:"",
scene_type:"",
replay:0,
full_screen:0,
quick_play:0,
ad_play_time:-1,
video_play_time:-1,
click_play_button:0,
traceid:"",
webviewid:"",
orderid:0,
play_time:0,
client_time_when_play:0,
drag_times:"",
pause_num:0,
h5_profile:0,
to_article:0,
desc_more_click:0,
desc_more_show:0,
fromid:0,
openid:window.cgiData&&window.cgiData.txvideo_openid?window.cgiData.txvideo_openid:"",
file_size:0,
rate:0,
resolution:0,
format:"",
vt:"",
video_ext:"unknown"
};
return e;
}
var _=e("biz_wap/utils/ajax.js"),l=e("pages/version4video.js");
return{
report:i,
videoreport:t,
getPlatformType:a,
getsdtfrom:r,
getinfoReport:n,
qqvideo_common_report:d,
musicreport:o,
getMusicReportData:p,
getVideoReportData:c
};
});define("pages/music_player.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","pages/version4video.js","biz_common/utils/monitor.js"],function(t){
"use strict";
function o(t){
this._o={
type:0,
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
appPlay:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:"",
fileSize:0,
onStatusChange:function(){},
onTimeupdate:function(){},
onError:function(){},
onUpdateSeekRange:function(){}
},this._extend(t),this._status=-1,this._g={
hasCheckPlay:!1,
playTimeoutId:null
},this._fixAndroidSizeLimit(),0!==v.surportType&&(this._o.needVioceMutex&&v.mutexPlayers.push(this),
this._synPlayStatus());
}
function e(t){
y.invoke("musicPlay",{
app_id:"a",
title:"微信公众平台",
singer:"微信公众平台",
epname:"微信公众平台",
coverImgUrl:"http://res.wx.qq.com/mpres/htmledition/images/favicon.ico",
dataUrl:v.ev,
lowbandUrl:v.ev,
webUrl:"http://mp.weixin.qq.com/s?"
},function(o){
"function"==typeof t&&t(o);
});
}
function i(t){
n({
cur:t,
stopCur:!1
});
}
function n(t){
function o(){
if(v.mutexCount==v.mutexPlayers.length&&(v.mutexCount=0,"function"==typeof a)){
var t=0;
1==v.surportType?t=2e3:3==v.surportType&&(t=1e3),setTimeout(function(){
a();
},t);
}
}
if(0!=v.mutexCount)return void setTimeout(function(){
n(t);
},200);
for(var e=t.cur,i=t.stopCur===!0?!0:!1,a=t.callback,s=0,u=v.mutexPlayers.length;u>s;s++){
var r=v.mutexPlayers[s];
if(!r||r===e||1!=r._status&&4!=r._status)v.mutexCount++,o();else{
var p=r._o.allowPause,_="";
_=p?"pause":"stop",r[_](i,function(){
v.mutexCount++,o();
});
}
}
}
function a(){
return v.surportType;
}
function s(t){
return new o(t);
}
function u(){
v.surportType>0&&v.isAndroidLow&&window.addEventListener("canplay",function(t){
t.target&&"function"==typeof t.target.play&&t.target.play();
},!0);
}
function r(){
for(var t=v.reportId.split(";"),o=0,e=t.length;e>o;o++)for(var i=t[o],n=v.keyConf[o],a=0,s=0,u=n.length;u>s;s++){
var r=n[s]||"";
r?/^offset_/.test(r)?a+=1*r.replace(/^offset_/,""):(v.reportData[r]={
id:i,
key:a,
count:0
},a++):a++;
}
}
function p(){
for(var t=0,o=v.mutexPlayers.length;o>t;t++){
var e=v.mutexPlayers[t];
if(e&&1==e._status&&(1==e._surportType||3==e._surportType)){
d(e._o.type,"unload_wx_pv",1);
break;
}
}
_();
}
function _(){
for(var t in v.reportData){
var o=v.reportData[t];
o.count>0&&m.setSum(o.id,o.key,o.count);
}
m.send(),r();
}
function d(t,o,e){
0==t||1==t?o="m_"+o:(2==t||3==t||4==t)&&(o="v_"+o),v.reportData[o]&&(e=e||1,v.reportData[o].count+=e,
v.debug&&console.log("addpv:"+o+" count:"+v.reportData[o].count));
}
function h(t){
var o=arguments[1]||window.location.search,e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=o.substr(o.indexOf("?")+1).match(e);
return null!=i?i[2]:"";
}
document.domain="qq.com";
var c=t("biz_wap/utils/mmversion.js"),l=t("biz_common/dom/event.js"),y=t("biz_wap/jsapi/core.js"),f=t("pages/version4video.js"),m=t("biz_common/utils/monitor.js"),v={
inWechat:!f.device.inWechat||f.device.inWindowWechat||f.device.inMacWechat?!1:!0,
mutexCount:0,
ev:0!=window._empty_v.indexOf(window.location.protocol)?"http:"+window._empty_v:window._empty_v,
debug:location.href.indexOf("vconsole=1")>0?!0:!1,
_playtype:1*h("_playtype")||0,
isAndroidLow:/android\s2\.3/i.test(navigator.userAgent),
isAndroid:c.isAndroid,
surportType:"addEventListener"in window?2:0,
mutexPlayers:[],
reportId:"28306",
keyConf:[["m_pv","m_wx_pv","m_h5_pv","m_unload_wx_pv","v_pv","v_wx_pv","v_h5_pv","v_unload_wx_pv","offset_22","force_h5","m_h5_err_total","m_h5_err_1","m_h5_err_2","m_h5_err_3","m_h5_err_4","m_h5_err_5","v_h5_err_total","v_h5_err_1","v_h5_err_2","v_h5_err_3","v_h5_err_4","v_h5_err_5","m_wx_pv_2","v_wx_pv_2","offset_5","m_wx_pv_1","offset_4","v_wx_pv_1"]],
reportData:{}
};
return r(),l.on(window,"unload",p),u(),o.prototype._synPlayStatus=function(){
function t(){
n&&clearTimeout(n),i.hasCheckPlay!==!0&&(i.hasCheckPlay=!0,o._o.autoPlay&&o.play());
}
var o=this,e=this._o,i=this._g;
if(!v.inWechat)return i.hasCheckPlay=!0,void(o._o.autoPlay&&o.play());
var n=setTimeout(function(){
t();
},5e3);
this._jsapi_getMusicPlayerState({
onSuccess:function(t){
n&&clearTimeout(n),i.hasCheckPlay!==!0&&(1==t.status?(i.hasCheckPlay=!0,o._surportType=3,
v.surportType=3,o._initJsapiData(),o.jsApiData.starTime-=1e3*t.currentPosition,o.jsApiData.getStatusTime=5e3,
o._onPlay(),"undefined"!=typeof e.duration&&1*e.duration>0&&(o._analogUpdateTime(),
o._getMusicPlayerState())):(i.hasCheckPlay=!0,o._surportType=3,v.surportType=3,o._status=1,
o.stop(!0)));
},
onError:function(){
t();
}
});
},o.prototype._fixAndroidSizeLimit=function(){
if(!(1*v._playtype>0)&&v.isAndroid){
var t=this._o;
!t.fileSize||t.fileSize>300||c.gtVersion("6.3.28",!0)||(d(-1,"force_h5",1),this._g._playtype=2);
}
},o.prototype._createAutoAndPlay=function(){
function t(){
d(o._o.type,"pv",1),d(o._o.type,"h5_pv",1),o._h5Audio=document.createElement("audio"),
o._H5bindEvent(),o._h5Audio.setAttribute("style","height:0;width:0;display:none"),
o._h5Audio.setAttribute("autoplay",""),o._status=0,o._initH5Data(),v.isAndroidLow?(o._h5Audio.src=o._o.src,
document.body.appendChild(o._h5Audio),o._h5Audio.load()):(document.body.appendChild(o._h5Audio),
setTimeout(function(){
o._h5Audio.src=o._o.src,o._h5Audio.play();
},0)),o._surportType=2;
}
var o=this;
v.inWechat?this._stopJsapiPlay(!0,function(){
t();
}):t();
},o.prototype._destoryH5Audio=function(){
this._h5Audio&&(-1!=this._status&&"function"==typeof this._h5Audio.pause&&this._h5Audio.pause(),
document.body.removeChild(this._h5Audio),this._h5Audio=null,this._status=-1);
},o.prototype._onLoading=function(t){
this._status=4;
try{
i(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onPlay=function(t){
this._status=1;
try{
i(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onPause=function(t){
this._status=2,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onEnd=function(t){
this._status=3,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onLoadedmetadata=function(t){
"function"==typeof this._o.onLoadedmetadata&&this._o.onLoadedmetadata.call(this,t||{});
},o.prototype._onTimeupdate=function(t,o){
"function"==typeof this._o.onTimeupdate&&this._o.onTimeupdate.call(this,t||{},o);
},o.prototype._onError=function(t,o){
this._status=-1,"function"==typeof this._o.onError&&this._o.onError.call(this,t||{},o);
},o.prototype._H5bindEvent=function(){
var t=this,o=this._o;
this._h5Audio.addEventListener("play",function(o){
t._h5Audio&&t._onPlay(o);
},!1),this._h5Audio.addEventListener("ended",function(o){
t._h5Audio&&t._onEnd(o);
},!1),this._h5Audio.addEventListener("pause",function(o){
t._h5Audio&&(t._o.allowPause!==!0||0==t._h5Audio.currentTime?t._onEnd(o):t._onPause(o));
},!1),this._h5Audio.addEventListener("error",function(o){
var e=1*o.target.error.code||5;
(1>e||e>5)&&(e=5),d(t._o.type,"h5_err_total",1),d(t._o.type,"h5_err_"+e,1),t._onError(o,e),
t._destoryH5Audio();
},!1),"function"==typeof this._o.onTimeupdate&&this._h5Audio.addEventListener("timeupdate",function(e){
t._h5Audio&&(1==t._status&&t._onTimeupdate(e,t._h5Audio.currentTime),"undefined"!=typeof o.duration&&1*o.duration>0&&t._h5Audio.currentTime>=o.duration&&t._h5Stop());
},!1),"function"==typeof this._o.onLoadedmetadata&&this._h5Audio.addEventListener("loadedmetadata",function(o){
t._h5Audio&&t._onLoadedmetadata(o);
},!1);
},o.prototype._extend=function(t){
for(var o in t)this._o[o]=t[o];
},o.prototype._initH5Data=function(){
this._h5Data={
downloadDuration:0
};
},o.prototype._initJsapiData=function(){
this.jsApiData&&this.jsApiData.updateTimeoutId&&clearTimeout(this.jsApiData.updateTimeoutId),
this.jsApiData&&this.jsApiData.getStatusId&&clearTimeout(this.jsApiData.getStatusId),
this.jsApiData={
seeking:!1,
starTime:+new Date,
pauseTime:0,
curTime:0,
getStatusTime:1e3,
updateTimeoutId:null,
getStatusId:null,
downloadDuration:0,
duration:this._o.duration||void 0
};
},o.prototype._getMusicPlayerState=function(){
var t=this,o=t.jsApiData;
o&&o.getStatusId&&clearTimeout(o.getStatusId),t._jsapi_getMusicPlayerState({
onSuccess:function(o){
var e=t.jsApiData;
return 1!=t._status&&3!=t._status||"1"==o.status?(4==t._status&&"1"==o.status||2==t._status&&"1"==o.status?(t._onPlay(),
e.downloadDuration=1*o.downloadDuration,e.starTime=+new Date-1e3*o.currentPosition,
e.getStatusTime=5e3):(1==t._status&&"1"==o.status||2==t._status&&"0"==o.status)&&(e.downloadDuration=1*o.downloadDuration,
e.starTime=+new Date-1e3*o.currentPosition,e.getStatusTime=5e3),void(e.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},e.getStatusTime))):(e&&e.getStatusId&&clearTimeout(e.getStatusId),void t._stopJsapiPlay(!1));
},
onError:function(){
1==t._status||3==t._status?(o&&o.getStatusId&&clearTimeout(o.getStatusId),t._stopJsapiPlay(!1)):o.getStatusId=setTimeout(function(){
t._getMusicPlayerState();
},t.jsApiData.getStatusTime);
}
});
},o.prototype._analogUpdateTime=function(){
var t=this,o=t.jsApiData;
if(o&&o.updateTimeoutId&&clearTimeout(o.updateTimeoutId),1==t._status){
if(o.curTime=1*((+new Date-o.starTime)/1e3).toFixed(2),o.curTime>=o.duration)return t._stopJsapiPlay(!1),
!0;
t._onTimeupdate(null,o.curTime);
}
return o.updateTimeoutId=setTimeout(function(){
t._analogUpdateTime();
},1e3),!1;
},o.prototype._jsapi_getMusicPlayerState=function(t){
var o=this._o;
y.invoke("getMusicPlayerState",{
appId:"a",
dataUrl:o.src
},function(o){
!!v.debug&&console.log("getMusicPlayerState log:"+JSON.stringify(o||{})),o.err_msg.indexOf("ok")>=0?(o.currentPosition=1*(o.currentPosition||o.position||0),
o.downloadDuration=1*(o.downloadDuration||o.downloadedPercent||o.downloadPercent||0),
o.duration=1*o.duration,o.status=1*o.status,"function"==typeof t.onSuccess&&t.onSuccess(o)):"function"==typeof t.onError&&t.onError(o);
});
},o.prototype._jsapi_musicPlay=function(t){
this._h5Audio&&this._destoryH5Audio();
var o=this,e=this._o;
y.invoke("musicPlay",{
app_id:"a",
title:e.title,
singer:e.singer,
epname:e.epname,
coverImgUrl:e.coverImgUrl,
dataUrl:e.src,
lowbandUrl:e.src,
webUrl:e.webUrl
},function(i){
!!v.debug&&console.log("playlog:"+JSON.stringify(i||{})),i.err_msg.indexOf("ok")>=0?(d(e.type,"pv",1),
d(e.type,"wx_pv",1),d(e.type,"wx_pv_1",1),o._surportType=1,v.surportType=1,o._initJsapiData(),
o._onPlay(),"undefined"!=typeof e.duration&&1*e.duration>0&&o._analogUpdateTime(),
"function"==typeof t.onSuccess&&t.onSuccess(i)):"function"==typeof t.onError&&t.onError(i);
});
},o.prototype._jsapi_operateMusicPlayer=function(t){
this._h5Audio&&this._destoryH5Audio();
var o=this._o;
y.invoke("operateMusicPlayer",{
appId:"a",
operationType:t.type,
title:o.title,
singer:o.singer,
epname:o.epname,
coverImgUrl:o.coverImgUrl,
dataUrl:o.src,
lowbandUrl:o.src,
position:t.position,
webUrl:o.webUrl
},function(o){
!!v.debug&&console.log("operateMusicPlayer log:"+JSON.stringify(o||{})),o.err_msg.indexOf("ok")>=0?"function"==typeof t.onSuccess&&t.onSuccess(o):"function"==typeof t.onError&&t.onError(o);
});
},o.prototype._jsapiPlay=function(){
var t=this,o=this._o;
1==v.surportType||1==v._playtype||v.inWechat&&c.ltVersion("6.5.3",!1)?this._jsapi_musicPlay({
onError:function(){
t._h5Play();
}
}):this._jsapi_operateMusicPlayer({
type:"play",
onSuccess:function(){
d(o.type,"pv",1),d(o.type,"wx_pv",1),d(o.type,"wx_pv_2",1),t._surportType=3,v.surportType=3,
t._initJsapiData(),t._onLoading(),"undefined"!=typeof o.duration&&1*o.duration>0&&setTimeout(function(){
t._analogUpdateTime(),t._getMusicPlayerState();
},1e3);
},
onError:function(){
t._jsapi_musicPlay({
onError:function(){
t._h5Play();
}
});
}
});
},o.prototype._resumeJsapiPlay=function(){
if(2==this._status){
var t=this;
1==this._surportType?this._jsapiPlay():3==this._surportType&&this._jsapi_operateMusicPlayer({
type:"resume",
onError:function(){
t.play();
},
onSuccess:function(){
var o=t.jsApiData;
o.starTime+=+new Date-o.pauseTime,o.pauseTime=0,t._onPlay(),t._analogUpdateTime(),
t._getMusicPlayerState();
}
});
}
},o.prototype._pauseJsapiPlay=function(t,o,e,i){
function n(t){
a._analogUpdateTime(),a._getMusicPlayerState();
var o=a.jsApiData;
o&&o.updateTimeoutId&&clearTimeout(o.updateTimeoutId),t===!0&&o&&o.getStatusId&&clearTimeout(o.getStatusId),
o.updateTimeoutId=null,1==a._status&&(o.pauseTime=+new Date,a._onPause());
}
if((!this.jsApiData||!this.jsApiData.seeking)&&this._o.allowPause){
var a=this;
1==this._surportType?this._stopJsapiPlay(t,e):3==this._surportType&&(t?this._jsapi_operateMusicPlayer({
type:"pause",
onSuccess:function(){
n(o),"function"==typeof e&&e();
},
onError:function(){
a._stopJsapiPlay(!0),"function"==typeof i&&i();
}
}):(n(o),"function"==typeof e&&e()));
}
},o.prototype._stopJsapiPlay=function(t,o){
function i(t){
n._initJsapiData(),n._onTimeupdate(null,0),n._onEnd(),"function"==typeof t&&t();
}
if(!this.jsApiData||!this.jsApiData.seeking){
{
var n=this;
n.jsApiData;
}
t?1==n._surportType?e(function(){
i(o);
}):3==n._surportType?n._jsapi_operateMusicPlayer({
type:"stop",
onSuccess:function(){
i(o);
},
onError:function(){
i(o);
}
}):i(o):i(o);
}
},o.prototype._getH5DownloadSec=function(){
var t=Math.floor(this._o.duration*this._getH5DownloadDuration()/100);
return!!v.debug&&console.log("h5 downloadSec:"+t),t;
},o.prototype._getH5DownloadDuration=function(){
if(!this._h5Audio)return 0;
if(this._h5Data.downloadDuration>=100)return 100;
var t=this._h5Audio.buffered,o=t.end(t.length-1);
return this._h5Data.downloadDuration=parseInt(o/this._o.duration*100,10),this._h5Data.downloadDuration;
},o.prototype._h5Play=function(){
0!==v.surportType&&(this._h5Audio?(this._h5Audio.ended||this._h5Audio.paused)&&(d(this._o.type,"pv",1),
d(this._o.type,"h5_pv",1),this._initH5Data(),this._h5Audio.currentTime=0,this._h5Audio.play()):this._createAutoAndPlay());
},o.prototype._h5Resume=function(){
this._h5Audio&&this._h5Audio.play();
},o.prototype._h5Stop=function(){
this._h5Audio&&(this._initH5Data(),this._h5Audio.pause(),this._h5Audio.currentTime=0,
this._onEnd());
},o.prototype._h5Seek=function(t){
if(this._h5Audio){
var o=(this._h5Data,parseInt(t,10)),e=this._getH5DownloadSec();
o=Math.min(o,e),this._h5Audio.currentTime=o,this._h5Audio.play();
}
},o.prototype.surportSeekRange=function(){
return!1;
},o.prototype.setSrc=function(t){
this._o.src=t;
},o.prototype.getSurportType=function(){
return this._surportType||0;
},o.prototype.getPlayStatus=function(){
return this._status;
},o.prototype.getCurTime=function(){
return 1!=this._surportType&&3!=this._surportType||!this.jsApiData?this._h5Audio?this._h5Audio.currentTime:0:this.jsApiData.curTime||0;
},o.prototype.getDuration=function(){
return this._o.duration||void 0;
},o.prototype.pause=function(t,o){
return this._o.allowPause?void(1==this._surportType||3==this._surportType?this._pauseJsapiPlay(t===!1?!1:!0,!1,function(){
"function"==typeof o&&o();
},function(){
"function"==typeof o&&o();
}):2==this._surportType&&this._h5Audio&&"function"==typeof this._h5Audio.pause&&(this._h5Audio.pause(),
"function"==typeof o&&o())):void this.stop(t,o);
},o.prototype.stop=function(t,o){
return 1==this._surportType||3==this._surportType?void this._stopJsapiPlay(t===!1?!1:!0,o):(2==this._surportType&&this._h5Audio&&this._h5Stop(),
void("function"==typeof o&&o()));
},o.prototype.resume=function(){
2==this._status&&this._o.allowPause&&(v.inWechat&&this._o.appPlay&&2!=v._playtype?this._resumeJsapiPlay():0!=v.surportType&&this._h5Resume());
},o.prototype.play=function(){
var t=this,o=this._g;
if(t._o.src)return 2==t._status&&t._o.allowPause?void t.resume():(o.playTimeoutId&&clearTimeout(o.playTimeoutId),
o.hasCheckPlay?void(v.inWechat&&this._o.appPlay&&2!=v._playtype?this._jsapiPlay():0!=v.surportType&&this._h5Play()):void(o.playTimeoutId=setTimeout(function(){
t.play();
},1e3)));
},o.prototype.seek=function(){},o.prototype.monitor=function(t,o){
d(-1,t,o);
},{
init:s,
getSurportType:a
};
});define("pages/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=document.createElement("script"),r=document.head||document.getElementsByTagName("head")[0]||document.documentElement,a=t.url+"&t="+Math.random(),d=t.callbackName,i="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,c="undefined"==typeof t.timeoutCode?500:t.timeoutCode,l="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,s=!1,f=null,m=function(e){
o&&!s&&(s=!0,f&&(clearTimeout(f),f=null),o.onload=o.onreadystatechange=o.onerror=null,
r&&o.parentNode&&r.removeChild(o),o=null,d&&-1==d.indexOf(".")&&(window[d]=null),
e!=u&&"loaded"!=i&&"function"==typeof t.onerror&&t.onerror(e));
};
if(d&&"function"==typeof t.callback){
var p=d;
-1==d.indexOf(".")&&(d=window[d]?d+e.counter++:d,window[d]=function(){
i="loaded",t.callback.apply(null,arguments);
}),a=a.replace("="+p,"="+d);
}
o.onload=o.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&m("loaded"==i?u:l);
},o.onerror=function(){
return n>0?(t.retry=n-1,f&&(clearTimeout(f),f=null),void e(t)):void m(l);
},t.timeout&&(f=setTimeout(function(){
m(c);
},parseInt(t.timeout,10))),i="loading",o.charset="utf-8",setTimeout(function(){
o.src=a;
try{
r.insertBefore(o,r.lastChild);
}catch(e){}
},0);
}
return e;
});define("appmsg/emotion/dom.js",["biz_common/dom/event.js"],function(t){
"use strict";
function e(t){
if("string"==typeof t){
document.querySelectorAll||!function(){
var t=document.createStyleSheet(),e=function(e,n){
var i,o=document.all,r=o.length,u=[];
for(t.addRule(e,"foo:bar"),i=0;r>i&&!("bar"===o[i].currentStyle.foo&&(u.push(o[i]),
u.length>n));i+=1);
return t.removeRule(0),u;
};
document.querySelectorAll=function(t){
return e(t,1/0);
};
}();
var e=document.querySelectorAll(t);
}else e=[t];
return{
el:e,
on:function(t,e){
return this.each(function(n){
i.on(n,t,e);
}),this;
},
hide:function(){
return this.each(function(t){
t.style.display="none";
}),this;
},
show:function(){
return this.each(function(t){
t.style.display="block";
}),this;
},
each:function(t){
return n(this.el,t),this;
},
width:function(){
return this.el[0].clientWidth;
},
css:function(t){
return this.each(function(e){
for(var n in t)e.style[n]=t[n];
}),this;
},
attr:function(t,e){
var n=this.el[0];
return e?(n.setAttribute(t,e),this):n.getAttribute(t);
},
append:function(t){
return t.el&&(t=t.el[0]),this.el[0].appendChild(t),this;
},
html:function(t){
this.each(function(e){
e.innerHTML=t;
});
}
};
}
function n(t,e){
for(var n=0,i=t.length;i>n;n++)e(t[n],n);
}
var i=t("biz_common/dom/event.js");
return e.el=function(t){
return document.createElement(t);
},e.later=function(t){
setTimeout(t,3);
},e.log=function(){},e.each=n,e;
});