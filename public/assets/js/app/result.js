define(['jquery', 'wechatSetup'], function($, wx){
	wx.setup();
	var result = $( "b" );
	var share = $(".share");

	$(function(){
		result.addClass('bounceIn');
	});

	var score = window.location.href.split("?")[1].split("=")[1];
	result.text(score);

	$('btn').click(function(){
		window.wechat.startRecord();
	})

	share.on("click",function(){
		window.wechat.onMenuShareTimeLine({
			title: '我的普通话得分', // 分享标题
		    link: 'http://hf.static.cassiuschen.com/start.html', // 分享链接
		    //imgUrl: '', // 分享图标
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		        alert("success");
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		        alert("error");
		    }
		});
	});
});