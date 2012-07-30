var gnip = require('./active_gnip_stream'),
      active_ids = [1] // Twitter

for ( var i = 0; i < active_ids.length; i++ ){
    gnip.stream(active_ids[i]);
}
