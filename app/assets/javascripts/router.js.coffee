define ['backbone', 'router'], (Backbone) ->
    class Router extends Backbone.Router
        routes: 
            '': 'home'
            'gnip_data': 'gnip_data'
        home: ->
            require ['home'], (home) ->
                page = new home
                page.initialize()
        gnip_data: ->
            $.ajax({ url: '/gnip_data'})