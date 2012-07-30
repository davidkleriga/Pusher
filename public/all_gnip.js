var gnip = require('./gnip_stream_file_sync'),
      active_ids = [1,2,3,4,7,8] // Twitter, Facebook, YouTube, Vimeo, Yahoo, Reddit

for ( var i = 0; i < active_ids.length; i++ ){
    gnip.stream(active_ids[i]);
}