define(['jquery', 'wechatSetup'], function($, wx){
	wx.setup();

	$('btn').click(function(){
		window.wechat.startRecord();
	})
});