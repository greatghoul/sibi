// refresh money
function refreshMoney() {
    $.post('/ajax/money', function(data) {
        $('#money').html(data);
    });
}

var moveEnd = function(obj){
	obj.focus();
    obj = obj.get(0);
	var len = obj.value.length;
	if (document.selection) {
		var sel = obj.createTextRange();
		sel.moveStart('character',len);
		sel.collapse();
		sel.select();
	} else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
		obj.selectionStart = obj.selectionEnd = len;
	}
}

function dispatch() {
    var q = document.getElementById("q");
    if (q.value != "") {
        var url = 'https://www.google.com/search?q=site:v2ex.com/t%20' + q.value;
        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPod') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
            location.href = url;
        } else {
            window.open(url, "_blank");
        }
        return false;
    } else {
        return false;
    }
}

function goTop() {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 1000);
}

// reply a reply
function replyOne(username){
    replyContent = $("#reply_content");
	oldContent = replyContent.val();
	prefix = "@" + username + " ";
	newContent = ''
	if(oldContent.length > 0){
	    if (oldContent != prefix) {
	        newContent = oldContent + "\n" + prefix;
	    }
	} else {
	    newContent = prefix
	}
	replyContent.focus();
	replyContent.val(newContent);
	moveEnd($("#reply_content"));
}

// send a thank to reply
function thankReply(replyId, token) {
    $.post('/thank/reply/' + replyId + "?t=" + token, function() {
        $('#thank_area_' + replyId).addClass("thanked").html("感谢已发送");
        refreshMoney();
    });
}

// send a thank to topic
function thankTopic(topicId, token) {
    $.post('/thank/topic/' + topicId + "?t=" + token, function(data) {
        $('#topic_thank').html('<span class="f11 gray" style="text-shadow: 0px 1px 0px #fff;">感谢已发送</span>');
        refreshMoney();
    });
}

function upVoteTopic(topicId) {
    if (csrfToken) {
        var request = $.ajax({
            url: '/up/topic/' + topicId + "?t=" + csrfToken,
            type: "POST",
            dataType: "json"
        });
        request.done(function(data) {
            if (data.changed) {
                $('#topic_' + topicId + '_votes').html(data.html);
            }
        });
    }
}

function downVoteTopic(topicId) {
    if (csrfToken) {
        var request = $.ajax({
            url: '/down/topic/' + topicId + "?t=" + csrfToken,
            type: "POST",
            dataType: "json"
        });
        request.done(function(data) {
            if (data.changed) {
                $('#topic_' + topicId + '_votes').html(data.html);
            }
        });
    }
}

function ignoreReply(replyId, token) {
    $.post('/ignore/reply/' + replyId + "?once=" + token, function(data) {

    });
    $("#r_" + replyId).slideUp('fast');
}

function deleteNotification(nId, token) {
    $.post('/delete/notification/' + nId + '?once=' + token, function(data) {

    });
    $("#n_" + nId).slideUp('fast');
}

// for GA
function recordOutboundLink(link, category, action) {
    try {
        var pageTracker=_gat._getTracker("UA-11940834-2");
        pageTracker._trackEvent(category, action);
        // setTimeout('document.location = "' + link.href + '"', 100)
    } catch(err) {}
}

function protectTraffic() {
    var l = top.location.href;
	if ((l.indexOf("v2ex.com") == -1) && (l.indexOf("v2ex.co") == -1) && (l.indexOf("v2work.com") == -1) && (l.indexOf("v2ex.dev") == -1) && (l.indexOf("127.0.0.1:") == -1) && (l.indexOf("localhost:") == -1) && (l.indexOf("192.168.86.") == -1) && (l.indexOf("192.168.87.") == -1) && (l.indexOf("192.168.31.") == -1) && (l.indexOf("192.168.1.") == -1) && (l.indexOf("10.0.1.") == -1) && (l.indexOf("10.1.10.") == -1) && (l.indexOf("108.") == -1)) {
		location.href = 'https://www.v2ex.com/';
	}
}

function previewTopic() {
    var box = $("#box");
    var preview = $("#topic_preview");
    if (preview.length == 0) {
        box.append('<div class="inner" id="topic_preview"></div>');
        preview = $("#topic_preview");
    }
    var md = editor.getValue();
    $.post( "/preview/markdown", { 'md' : md }, function( data ) {
        preview.html('<div class="topic_content"><div class="markdown_body">' + data + '</div></div>');
    });
}

function publishTopic() {
    var errors = 0;
    var em = $("#error_message");

    var content = editor.getValue();

    var title = $("#topic_title").val();

    if (title.length == 0) {
        errors++;
        em.html("主题标题不能为空");
    } else if (title.length > 120) {
        errors++;
        em.html("主题标题不能超过 120 个字符");
    }

    if (content.length > 20000) {
        errors++;
        em.html("主题内容不能超过 20000 个字符");
    }

    if (errors == 0) {
        var input_content = $("#topic_content");
        input_content.val(content);
        var form = $("#compose");
        return form.submit();
    }
}

function previewTopicSupplement() {
    var box = $("#box");
    var preview = $("#topic_preview");
    if (preview.length == 0) {
        box.append('<div class="dock_area"><div class="inner"><span class="gray">主题附言预览</span></div></div><div class="inner" id="topic_preview"></div>');
        preview = $("#topic_preview");
    }
    var txt = $("#topic_supplement").val();
    var syntax = $("#syntax").val();
    if (syntax == 0) {
        $.post( "/preview/default", { 'txt' : txt }, function( data ) {
            preview.html('<div class="topic_content"><div class="markdown_body">' + data + '</div></div>');
        });
    }
    if (syntax == 1) {
        $.post( "/preview/markdown", { 'md' : txt }, function( data ) {
            preview.html('<div class="topic_content"><div class="markdown_body">' + data + '</div></div>');
        });
    }
}

function previewTopicContent() {
    var box = $("#box");
    var preview = $("#topic_preview");
    var syntax = $("#syntax").val();
    var syntax_text = $('#syntax option:selected').text()
    if (preview.length == 0) {
        box.append('<div class="dock_area"><div class="inner"><div class="fr gray" id="syntax_text">文本标记语法 &nbsp;<strong>' + syntax_text + '</strong></div><span class="gray">主题内容预览</span></div></div><div class="inner" id="topic_preview"></div>');
        preview = $("#topic_preview");
    } else {
        $("#syntax_text").html("文本标记语法 &nbsp;<strong>" + syntax_text + "</strong>");
    }
    var txt = $("#topic_content").val();
    if (syntax == 0) {
        $.post( "/preview/default", { 'txt' : txt }, function( data ) {
            preview.html('<div class="topic_content"><div class="markdown_body">' + data + '</div></div>');
        });
    }
    if (syntax == 1) {
        $.post( "/preview/markdown", { 'md' : txt }, function( data ) {
            preview.html('<div class="topic_content"><div class="markdown_body">' + data + '</div></div>');
        });
    }
}

// Begin: draft management for composing new topic

function saveComposeDraft(memberId) {
    var contentId = "topic:compose:by:" + memberId;
    var draft_title = $("#topic_title").val();
    var draft_content = editor.getValue();
    var draft_node = $("#nodes").val();

    lscache.set(contentId, {'title': draft_title, 'content': draft_content, 'node': draft_node}, 525600);
    console.log('Compose draft for member ID ' + memberId + ' is saved');
}

function loadComposeDraft(memberId) {
    var draft;

    var contentId = "topic:compose:by:" + memberId;
    draft = lscache.get(contentId);
    if (draft) {
        $("#topic_title").val(draft.title);
        editor.setValue(draft.content);
        $("#nodes").select2("val", draft.node);
        console.log("Loaded compose draft for member ID " + memberId);
    }
}

function purgeComposeDraft(memberId) {
    var contentId = "topic:compose:by:" + memberId;
    lscache.remove(contentId);
    console.log("Purged compose draft for member ID " + memberId);
}

// End: draft management for composing new topic

// Begin: draft management for new topic (default interface)

function saveTopicDraft(nodeName, memberId) {
    var contentId = "topic:new:" + nodeName + ":by:" + memberId;
    var draft_title = $("#topic_title").val();
    var draft_content = $("#topic_content").val();

    lscache.set(contentId, {'title': draft_title, 'content': draft_content}, 525600);
    console.log('New topic draft for member ID ' + memberId + ' is saved');
}

function loadTopicDraft(nodeName, memberId) {
    var draft;

    var contentId = "topic:new:" + nodeName + ":by:" + memberId;
    draft = lscache.get(contentId);
    if (draft) {
        $("#topic_title").val(draft.title);
        $("#topic_content").val(draft.content);
        console.log("Loaded new topic draft for member ID " + memberId);
    }
}

function purgeTopicDraft(nodeName, memberId) {
    var contentId = "topic:new:" + nodeName + ":by:" + memberId;
    lscache.remove(contentId);
    console.log("Purged new topic draft for member ID " + memberId);
}

// End: draft management for new topic (default interface)

// Begin: draft management for reply

function saveReplyDraft(topicId, memberId) {
    if ('localStorage' in window && window['localStorage'] !== null) {
        var contentId = "topic:" + topicId + ":reply:draft:by:" + memberId
        var draft = $("#reply_content").val();
        lscache.set(contentId, draft, 525600);
        console.log('Reply draft for topic ID ' + topicId + ' is saved');
    }
}

function loadReplyDraft(topicId, memberId) {
    var draft = null;

    var contentId = "topic:" + topicId + ":reply:draft:by:" + memberId
    draft = lscache.get(contentId);
    if (draft) {
        $("#reply_content").val(draft);
        console.log("Loaded reply draft for topic ID " + topicId);
    }
}

function purgeReplyDraft(topicId, memberId) {
    var contentId = "topic:" + topicId + ":reply:draft:by:" + memberId
    lscache.remove(contentId);
    console.log("Purged reply draft for topic ID " + topicId);
}

// End: draft management for reply

// Begin: draft management for status

function saveStatusDraft(memberId) {
    var contentId = "status:by:" + memberId + ":draft"
    var draft = $("#s").val();
    lscache.set(contentId, draft, 525600);
    console.log('Status draft by ' + memberId + ' is saved');
}

function loadStatusDraft(memberId) {
    var draft = null;

    var contentId = "status:by:" + memberId + ":draft"
    draft = lscache.get(contentId);
    if (draft) {
        $("#s").val(draft);
        console.log("Loaded status draft by " + memberId);
    }
}

function purgeStatusDraft(memberId) {
    var contentId = "status:by:" + memberId + ":draft"
    lscache.remove(contentId);
    console.log("Purged status draft by " + memberId);
}

// End: draft management for status

// Begin: draft management for /notes/new

function saveNoteDraft(memberId) {
    var contentId = "note:by:" + memberId + ":draft"
    var draft = $("#note_content").val();
    lscache.set(contentId, draft, 525600);
    console.log('Note draft by ' + memberId + ' is saved');
}

function loadNoteDraft(memberId) {
    var draft = null;

    var contentId = "note:by:" + memberId + ":draft"
    draft = lscache.get(contentId);
    if (draft) {
        $("#note_content").val(draft);
        console.log("Loaded note draft by " + memberId);
    }
}

function purgeNoteDraft(memberId) {
    var contentId = "note:by:" + memberId + ":draft"
    lscache.remove(contentId);
    console.log("Purged note draft by " + memberId);
}

// End: draft management for /notes/new

