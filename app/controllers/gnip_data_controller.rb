
class GnipDataController < ApplicationController
  def initialize
    set_channel('gnip_channel')
  end

  def create
    trigger('data', { message: 'hello'})
  end
end
