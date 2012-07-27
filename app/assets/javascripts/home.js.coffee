pusher = ChannelSignal.pusher
channel = pusher.subscribe('gnip_channel')
channel.bind 'data', (data) ->
    console.log 'data received!'
    console.log data