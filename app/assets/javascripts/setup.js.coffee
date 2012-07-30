define ['backbone', 'router', 'setup'], (Backbone, Router) ->
    class ChannelSignal
        page: {}
        history: new Backbone.History
        router: new Router
        pusher: new Pusher('6184d06ca94d50a2f85d')
        enableLogging: ->
            Pusher.log = (message) ->
                window.console.log(message) if window.console?
            WEB_SOCKET_DEBUG = true
        start: =>
            @enableLogging()
            @history.start()
            @router.home()