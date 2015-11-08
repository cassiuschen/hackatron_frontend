define ['jquery', 'wechat'], ($, wechat) ->
  setup: (ready = (->))->
    data = {}
    $.ajax
      type: "GET"
      url: "//dev.cassiuschen.me/wechat/sign?url=#{window.location.href}"
      contentType: "application/json"
      dataType: "json"
      async: true
      success: (result, _) ->
        data = result

    console.log data

    wechat.config
      debug: false
      appId: "wx80262218f360ebe9"
      timestamp: data.timestamp
      nonceStr: 'wx80262218f360ebe9'
      signature: data.signature
      jsApiList: [
        "startRecord",
        "stopRecord",
        "onVoiceRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "onVoicePlayEnd",
        "uploadVoice"
        "onMenuShareTimeline"
      ]

    wechat.ready ->
      window.wechat = wechat
      ready.call()