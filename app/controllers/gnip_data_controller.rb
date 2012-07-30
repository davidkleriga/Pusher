require 'gnip_xml'

class GnipDataController < ApplicationController
  def initialize
    @gnip_xml = GnipXml.new
    set_channel('gnip_channel')
  end

  def create
    begin
        parsed_post = ActiveSupport::JSON.decode(request.raw_post)
    rescue
        puts ' error parsing raw post'
        puts raw_post
    else
        trigger('data', parsed_post);
  end
end
end




## open a node stream to https://channelsignal.gnip.com/data_collectors/1/stream.xml
## on data, post to url that publishes to channel (X)
