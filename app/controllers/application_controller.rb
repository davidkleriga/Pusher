require 'pusher'

Pusher.app_id = '24783'
Pusher.key = '6184d06ca94d50a2f85d'
Pusher.secret = 'b7fc0bd7cfed28e02837'

class ApplicationController < ActionController::Base
  protect_from_forgery

  attr_accessor :channel

  def get_channel(name)
    Pusher[name]
  end

  def set_channel(name)
    @channel = get_channel(name)
  end

  def trigger(event, data)
    @channel.trigger(event, data)
  end
end
