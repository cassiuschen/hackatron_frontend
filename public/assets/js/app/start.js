define(['jquery', 'wechatSetup'], function($, wx){
	wx.setup();
	// window.onload(function(){
	// 	$('.main-wave').hide();
	// }
	// $('.main-mic').click(function(){
	// 	$('.main-wave').show();
	// });
	function touches(event){
		if(event.touch.length == 1){
			 switch(event.type){
			 	case 'touchstart':
			 		$('.main-wave').fadeIn();
 					$('.main-mic').fadeOut();
 					break;
 				case 'touchend':
 					$('.main-wave').fadeOut();
 					window.location.href ="result.html"
			 }
		}

	var mic = $('#mic');
 	mic.addEventListener("touchstart", touchStart, false);
 	mic.addEventListener("touchend", touchEnd, false);
	}
});