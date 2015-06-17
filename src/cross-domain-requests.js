function requestCrossDomain( site, callback ) {

  if ( !site) {
     alert('no site found');
     return false;
  }

  var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') 
  + '&format=xml&callback=?';
  
  $.getJSON(yql, function(data) {
  
      if ( data.results[0] ) {
      
          data = data.results[0].replace(/<script[^>]*>[/s/S]*?<\/script>/, '');
      
          if (typeof callback === 'function' {
            callback(data);
          }
      
      }
      
      else throw new Error('Nothing returned');
      
      
  });

}
