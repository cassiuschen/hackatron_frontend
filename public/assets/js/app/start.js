define(['jquery', 'wechatSetup'], function($, wx){


  $.ajax({
    type: "GET",
    url: "//dev.cassiuschen.me/api/random.json",
    dataType: "json",
    async:true,
    success: function(result, _){
      $('.main-text').html('<blockquote><b>"</b>'+result.content+'<b>"</b></blockquote>');
    }
  })
  var mic = $('#mic');
  var recordId;
  var translate = function(Id) {
    window.wechat.translateVoice({
       localId: Id, // 需要识别的音频的本地Id，由录音相关接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
            alert(res.translateResult); // 语音识别的结果
        }
    });
  };
  mic.on('touchstart', function() {
    window.wechat.startRecord({
      success: function(){
        $('#mic').css('background-image','url(/assets/images/wave.gif)');
      }
    });
    
    console.log("press");
  });
  mic.on('touchend', function(){
    window.wechat.stopRecord({
      complete: function (res) {
          recordId = res.localId;
          $('#mic').css('background-image','url(/assets/images/mic.gif)');
        }
    });

    setTimeout(function(){
      window.wechat.translateVoice({
       localId: recordId, 
        complete: function (res) {
            alert(recordId);
            if (res.hasOwnProperty('translateResult')) {
              alert('识别结果：' + res.translateResult);
            } else {
              alert('无法识别');
            }
        }
      });
    }, 500);
  });


});