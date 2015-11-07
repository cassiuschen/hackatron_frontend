define(['jquery', 'wechat'], function($, wechat) {
  var data;
  data = {};
  $.ajax({
    type: "GET",
    url: "//dev.cassiuschen.me/wechat/sign?url=" + window.location.href,
    contentType: "application/json",
    dataType: "json",
    async: false,
    success: function(result, _) {
      return data = result;
    }
  });
  console.log(data);
  wechat.config({
    debug: true,
    appId: "wx80262218f360ebe9",
    timestamp: data.timestamp,
    nonceStr: 'wx80262218f360ebe9',
    signature: data.signature,
    jsApiList: ["startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice"]
  });
  wechat.ready(function() {
    window.wechat = wechat;
    return wechat.getNetworkType({
      success: function(res) {
        return $('body').text("当前网络：" + res.networkType);
      },
      fail: function() {
        return $('body').text('FAIL!!!!!');
      },
      complete: function(res) {
        return $('body').text("当前网络：" + res.networkType);
      }
    });
  });
  return wechat.error(function() {
    return alert('WeChat Wrong!');
  });
});
