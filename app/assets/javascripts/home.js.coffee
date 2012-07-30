define ['jquery', 'templates', 'home'], ($, template) ->
    class Home
        initialize: =>
            @channel = Application.pusher.subscribe 'gnip_channel'
            @channel.bind 'data', (data) =>
                @on_entry_received(data)
            @
        on_entry_received: (entry) =>
            console.log "Entry received"
            console.log entry
            view = new template.Entry.View( { model: new template.Entry.Model(entry) })
            $('body').append(view.$el)
            view.render()
