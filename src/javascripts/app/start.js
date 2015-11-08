define(['jquery', 'wechatSetup'], function($, wx){
	wx.setup();
	$('.main-mic').click(function(){
		$('.main-wave').show();
		$('.main-mic').hide();
	});
	$('.main-wave').hide();
	function touches(event){
		if(event.touch.length == 1){
			 switch(event.type){
			 	case 'touchstart':
			 		$('.main-wave').show();
 					$('.main-mic').hide();
 					break;
 				case 'touchend':
 					$('.main-wave').hide();
 					window.location.href ="result.html"
			 }
		}

	var mic = $('#mic');
 	mic.addEventListener("touchstart", touchStart, false);
 	mic.addEventListener("touchend", touchEnd, false);
	}
});