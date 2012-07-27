ChannelSignal =
    pusher: new Pusher('6184d06ca94d50a2f85d')
    enableLogging: ->
        Pusher.log = (message) ->
            window.console.log(message) if window.console?
        WEB_SOCKET_DEBUG = true

ChannelSignal.enableLogging()

window.ChannelSignal = ChannelSignal