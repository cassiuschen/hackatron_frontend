define(['jquery', 'wechat'], function($, wechat) {
  return {
    setup: function(ready) {
      var data;
      if (ready == null) {
        ready = (function() {});
      }
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
        debug: false,
        appId: "wx80262218f360ebe9",
        timestamp: data.timestamp,
        nonceStr: 'wx80262218f360ebe9',
        signature: data.signature,
        jsApiList: ["startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "translateVoice", "onMenuShareTimeline"]
      });
      return wechat.ready(function() {
        window.wechat = wechat;
        return ready.call();
      });
    }
  };
});
