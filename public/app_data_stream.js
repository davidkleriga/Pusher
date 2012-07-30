var fs = require('fs'),
    xml2js = require('xml2js'),
    http = require('http'),
    entry_format = require('./entry_format');


var post_gnip_data_options = function(data){
    return {
      host: 'localhost',
      port: 3000,
      path: '/gnip_data',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'Content-Length': data.length
    }
  }
};

var format = function(id, data){
    return entry_format.for(id, data);
}

var post_to_app = function(id, data){
    var post_data = JSON.stringify(format(id, data));
    var request = http.request(post_gnip_data_options(post_data), function(response){

    });
    request.write(post_data);
    request.end();
}

var fileName = function(id){
    return './stream_data/stream_' + id + '.xml';
}

var get_collector_path = function(id){
  return '/data_collectors/' + id + '/activities.xml';
}

exports.stream = function(id){
    var parser = new xml2js.Parser();
    var path = fileName(id);
    fs.readFile(path, function(err, data) {
        parser.parseString(data, function (err, result) {
            var entries = result.entry;
            for ( var i = 0 ; i < entries.length; i++ ){
                console.log(entries[i])
                post_to_app(id, entries[i]);
                console.log('=====');
            }
        });
    });
}

exports.stream(2);
