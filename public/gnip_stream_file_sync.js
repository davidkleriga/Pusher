var https = require('https');
var fs = require('fs');

var writeToFile = function(file_name, data, callback){
    if (!callback) callback = function(error){ 
        if ( error ) throw error;
        console.log('data written');
    }
    fs.appendFile(file_name, data, callback);
}

var open_stream_gnip_collector_options = function(id){
    return {
  host: 'channelsignal.gnip.com',
  auth: 'david@citizendish.com:comeoninsweeney',
  path: get_collector_path(id)
};
};

var openReadStream = function(stream_id){
    https.get(open_stream_gnip_collector_options(stream_id), function(response){
        response.on('data', function(data){
            writeToFile(fileName(stream_id), data);
        })
        response.on('error', function(error){
            console.error(error);
        })
    });
};

var fileName = function(id){
    return './stream_data/stream_' + id + '.xml';
}

var get_collector_path = function(id){
  return '/data_collectors/' + id + '/activities.xml';
}

exports.stream = function(stream_id){
       openReadStream(stream_id);
}