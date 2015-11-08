define(['jquery', 'wechatSetup'], function($, wx){
	wx.setup();
	$('*').click(function(){
		window.location.href="start.html";
	})
});

	
