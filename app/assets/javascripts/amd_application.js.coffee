require ['jquery', 'underscore', 'backbone', 'setup'], ($, _, Backbone, ChannelSignal) ->
    $ ->
        window.Application = new ChannelSignal
        Application.start()