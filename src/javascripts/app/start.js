define(['jquery', 'wechatSetup', 'hammer'], function($, wx, Hammer){
  wx.setup();
  // window.onload(function(){
  //  $('.main-wave').hide();
  // }
  // $('.main-mic').click(function(){
  //  $('.main-wave').show();
  // });
  var mic = new Hammer(document.getElementById('mic'));
  var recordId;
  mic.on('press', function() {
    window.wechat.startRecord();
    $(this).css('background-image','/assets/images/wave.gif');
    console.log("press");
  });
  mic.on('pressup', function() {
    window.wechat.stopRecord({
        success: function (res) {
            recordId = res.localId;
        }
    });
    console.log('pressup');
    $(this).css('opacity','1');
    $('.main-wave').css('opacity', '0');
    wechat.translateVoice({
       localId: recordId, // 需要识别的音频的本地Id，由录音相关接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
            alert(res.translateResult); // 语音识别的结果
        }
    });
  });
});