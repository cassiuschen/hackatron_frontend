define(['jquery', 'wechatSetup'], function($, wx){
	wx.setup();
	var result = $( "b" );

	$(function(){
		result.addClass('bounceIn');
	});

	$('btn').click(function(){
		window.wechat.startRecord();
	})
});