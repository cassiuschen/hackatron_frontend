
define(['jquery', 'wechatSetup'], function($, wx){
  wx.setup();
  // window.onload(function(){
  //  $('.main-wave').hide();
  // }
  // $('.main-mic').click(function(){
  //  $('.main-wave').show();
  // });
  var mic = $('#mic');
  var recordId;
  mic.on('touchstart', function() {
    window.wechat.startRecord({
      success: function(){
        $('#mic').css('background-image','url(/assets/images/wave.gif)');
      }
    });
    
    console.log("press");
  });
  mic.on('touchend', function(){
    alert("YOOOOO!");
    window.wechat.onVoiceRecordEnd({
        // 录音时间超过一分钟没有停止的时候会执行 complete 回调
      complete: function (res) {
          recordId = res.localId;
          window.wechat.translateVoice({
             localId: recordId, // 需要识别的音频的本地Id，由录音相关接口获得
              isShowProgressTips: 1, // 默认为1，显示进度提示
              success: function (res) {
                  alert(res.translateResult); // 语音识别的结果
              }
          });
        }
    });
  });
});