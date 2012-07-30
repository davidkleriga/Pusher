var http = require('http');
var https = require('https');
var fs = require('fs');

var open_stream_gnip_collector_options = {
  host: 'channelsignal.gnip.com',
  auth: 'david@citizendish.com:comeoninsweeney'
};

var post_gnip_data_options = function(data){
    return {
      host: 'localhost',
      port: 3000,
      path: '/gnip_data',
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml',
        'Content-Length': data.length
    }
  }
};

var is_entry_valid = function(value){
  return /\S/.test( value )
}

var on_gnip_data = function(response){
  response.on('data', function(data){
    if (is_entry_valid(data)){
      var value = data.toString();
      console.log(value);
      var req = http.request(post_gnip_data_options(value));
      req.write(value);
      req.end();
    }
  });
  response.on('error', console.error );
}

var get_collector_path = function(id){
  return '/data_collectors/' + id + '/activities.xml';
}

exports.stream = function(id){
    var path = get_collector_path(id);
    console.log("Opening RealTime stream on: " + path);
    open_stream_gnip_collector_options.path = path;
    https.get(open_stream_gnip_collector_options, on_gnip_data);
}
