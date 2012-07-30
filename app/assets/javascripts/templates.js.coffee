define ['jquery', 'underscore', 'backbone', 'templates'], ($, _, Backbone) ->
        Entry: 
            View: Backbone.View.extend
                tagName: 'article'
                className: 'entry'
                initialize: ->
                    _.bindAll(@)
                render: ->
                    console.log @model.toJSON()
                    template = _.template "<header><%= title %></header><span><%= date %></span><p><%= content %></p><a href='<%= author.uri %>'><%= author.name %></a>", @model.toJSON()
                    @$el.html template 

            Model: Backbone.Model.extend
                defaults:
                    author: 
                        name: '',
                        url: ''
                    content: ''
                    title: ''
                    date: ''
                    uri: ''
            Collection: Backbone.Collection.extend
